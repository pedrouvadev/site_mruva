import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// CSS Fallback component for when WebGL is not available
function CSSParticleFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Static gradient orbs as fallback */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)',
          top: '20%',
          left: '10%',
          animation: 'float 20s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
          top: '60%',
          right: '15%',
          animation: 'float 25s ease-in-out infinite reverse',
        }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
          bottom: '20%',
          left: '30%',
          animation: 'float 18s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number>(0);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if WebGL is available
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.warn('WebGL not available, using CSS fallback');
      setWebglFailed(true);
      return;
    }

    try {
      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 30;
      cameraRef.current = camera;

      // Renderer with error handling
      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: 'low-power',
        });
      } catch (error) {
        console.warn('Failed to create WebGL renderer:', error);
        setWebglFailed(true);
        return;
      }

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Particles
      const particleCount = 60; // Reduced for performance
      const positions = new Float32Array(particleCount * 3);
      const orbitRadii = new Float32Array(particleCount);
      const orbitSpeeds = new Float32Array(particleCount);
      const orbitAngles = new Float32Array(particleCount);
      const yPositions = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        orbitRadii[i] = 5 + Math.random() * 25;
        orbitSpeeds[i] = 0.0003 + Math.random() * 0.0007;
        orbitAngles[i] = Math.random() * Math.PI * 2;
        yPositions[i] = (Math.random() - 0.5) * 20;

        positions[i * 3] = 0;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = 0;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0x22d3ee,
        size: 0.25,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      particlesRef.current = particles;

      // Animation
      let lastTime = 0;
      const targetFPS = 30;
      const frameInterval = 1000 / targetFPS;

      function animate(currentTime: number) {
        animationFrameRef.current = requestAnimationFrame(animate);

        // Throttle to 30fps for performance
        const deltaTime = currentTime - lastTime;
        if (deltaTime < frameInterval) return;
        lastTime = currentTime;

        const elapsedTime = currentTime * 0.001;
        const positionsArray = geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const angle = orbitAngles[i] + orbitSpeeds[i] * elapsedTime * 1000;
          positionsArray[i * 3] = Math.cos(angle) * orbitRadii[i];
          positionsArray[i * 3 + 1] = yPositions[i] + Math.sin(elapsedTime * 0.3 + i) * 2;
          positionsArray[i * 3 + 2] = Math.sin(angle) * orbitRadii[i];
        }

        geometry.attributes.position.needsUpdate = true;
        particles.rotation.y = elapsedTime * 0.03;

        renderer.render(scene, camera);
      }

      animate(0);

      // Handle resize
      function handleResize() {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      window.addEventListener('resize', handleResize, { passive: true });

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameRef.current);
        
        if (rendererRef.current && containerRef.current) {
          try {
            containerRef.current.removeChild(rendererRef.current.domElement);
          } catch (e) {
            // Element might already be removed
          }
        }
        
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    } catch (error) {
      console.warn('Three.js initialization failed:', error);
      setWebglFailed(true);
    }
  }, []);

  // Return CSS fallback if WebGL failed or is not available
  if (webglFailed) {
    return <CSSParticleFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}
