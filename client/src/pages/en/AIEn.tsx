import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Brain, Zap, Database, Shield } from "lucide-react";

export default function AIEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <div className="relative z-10">
        <Header lang="en" showStatus={true} />
        
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/hero-3d-neon-ETM4gefM3NZLJ3bB38yXCc.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm font-semibold text-cyan-400 inline-flex items-center gap-2 border border-cyan-500/30 uppercase tracking-widest">
              <Brain className="w-4 h-4" /> AI & Google Cloud • 25 Skill Badges
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            I Build <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Intelligence</span>, I Don't Just Use It
          </h1>

          <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
            50 hours of training in Generative AI, Vertex AI, Gemini, and MLOps. 25 official Google Cloud certifications proving expertise in AI architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => {
                const element = document.getElementById('expertise');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore AI Expertise <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="expertise" className="section-standard">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">50 Hours in Generative AI and Cloud</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Areas of Expertise</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>✓ Generative AI (Gemini, GPT)</li>
                <li>✓ Vertex AI and MLOps</li>
                <li>✓ Advanced Prompt Engineering</li>
                <li>✓ Large Language Models</li>
                <li>✓ AI Responsibility</li>
                <li>✓ BigQuery ML and Analytics</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">25 Official Skill Badges</h3>
              <ul className="space-y-3 text-[#94A3B8]">
                <li>✓ Google Cloud Fundamentals</li>
                <li>✓ Generative AI Fundamentals</li>
                <li>✓ Vertex AI Advanced</li>
                <li>✓ Prompt Engineering</li>
                <li>✓ Data Analytics</li>
                <li>✓ Cloud Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="section-standard">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/services-grid-bg-37RfWbP5XKmep3Fcdnw4qM.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="title-standard text-center text-4xl font-bold">AI Services</h2>
          <p className="text-center text-[#94A3B8] mb-16">Intelligent solutions that transform businesses</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Brain className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Private AI Architecture</h3>
              <p className="text-[#94A3B8] mb-6">
                Vertex AI with Openclaw for sovereign data. Your AI, your data, your security.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Custom models</li>
                <li>✓ Protected data</li>
                <li>✓ GDPR/LGPD compliance</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Conversational Agents</h3>
              <p className="text-[#94A3B8] mb-6">
                High-performance chatbots and IVR with Gemini. 24/7 intelligent service.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Integrated Gemini</li>
                <li>✓ Multilingual support</li>
                <li>✓ Scalable</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-indigo-500/20 rounded-lg w-fit">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-[#94A3B8] mb-6">
                BigQuery ML for profit-generating predictions. Intelligence in your data.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ Automatic ML models</li>
                <li>✓ Real-time predictions</li>
                <li>✓ Proven ROI</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Responsible AI Consulting</h3>
              <p className="text-[#94A3B8] mb-6">
                Ethical AI implementation with governance and compliance. AI that builds trust.
              </p>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>✓ AI Governance</li>
                <li>✓ Bias mitigation</li>
                <li>✓ Regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate of Completion Section */}
      <section className="section-standard">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">Certificate of Completion</h2>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto text-lg">
            Official certificate of completion for the Generative AI and Google Cloud course
          </p>
          
          <div className="glass-card p-8 hover:scale-105 transition-transform cursor-pointer">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-google-cloud_34e230fd.png" alt="Google Cloud Certificate of Completion" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>

      {/* Skill Badges Section */}
      <section className="section-standard">
        <div className="max-w-7xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">25 Google Cloud Skill Badges</h2>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto text-lg">
            Official certifications proving expertise in Generative AI, Vertex AI, Gemini, and MLOps
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
             {/* Badges images as in the original */}
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%201%20-%20Introduction%20to%20Generative%20AI_a00664b0.jpg" alt="Badge 1" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%202%20-%20Introduction%20to%20Large%20Language%20Models_e1bf773d.jpg" alt="Badge 2" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%203%20-%20Introduction%20to%20Responsible%20AI_36d29a43.jpg" alt="Badge 3" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%204%20-%20Responsible%20AI%20Applying%20AI%20Principles%20with%20Google%20Cloud_8a89a2c5.jpg" alt="Badge 4" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%205%20-%20Responsible%20AI%20for%20Developers%20Fairness%20%26%20Bias_464b24fe.jpg" alt="Badge 5" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%206%20-%20Gemini%20for%20Application%20Developers_6224451e.jpg" alt="Badge 6" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%207%20-%20Gemini%20for%20Cloud%20Architects_3ad398c4.jpg" alt="Badge 7" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%208%20-%20Develop%20Gen%20AI%20Apps%20with%20Gemini%20and%20Streamlit_5dcc4ad2.jpg" alt="Badge 8" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%209%20-%20Gemini%20for%20Data%20Scientists%20and%20Analysts_39093c25.jpg" alt="Badge 9" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2010%20-%20Gemini%20for%20Network%20Engineers_a29460da.jpg" alt="Badge 10" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2011%20-%20Gemini%20for%20Security%20Engineers_907297b2.jpg" alt="Badge 11" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2012%20-%20Gemini%20for%20DevOps%20Engineers_9a30e240.jpg" alt="Badge 12" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2013%20-%20Gemini%20for%20end-to-end%20SDLC_a49044c9.jpg" alt="Badge 13" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2014%20-%20%20Introduction%20to%20Image%20Generation_a11febf6.jpg" alt="Badge 14" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2015%20-%20Attention%20Mechanism_29c3f36a.jpg" alt="Badge 15" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2016%20-%20Encoder-Decoder%20Architecture_a1b076e6.jpg" alt="Badge 16" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2017%20-%20Transformer%20Models%20and%20BERT%20Model_9fc955d5.jpg" alt="Badge 17" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2018%20-%20Create%20Image%20Captioning%20Models_ba74ee34.jpg" alt="Badge 18" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2019%20-%20Machine%20Learning%20Operations%20(MLOps)%20for%20Generative%20AI_042cea80.jpg" alt="Badge 19" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2020%20-%20Introduction%20to%20Vertex%20AI%20Studio_ed418d46.jpg" alt="Badge 20" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2021%20-%20Vector%20Search%20and%20Embeddings_0410623a.jpg" alt="Badge 21" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2022%20-%20Prompt%20Design%20in%20Vertex%20AI_79546e72.jpg" alt="Badge 22" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2023%20-%20Responsible%20AI%20for%20Developers%20Interpretability%20%26%20Transparency_735ea51f.jpg" alt="Badge 23" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2024%20-%20Responsible%20AI%20for%20Developers%20Privacy%20%26%20Safety_a3572dbf.jpg" alt="Badge 24" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-3 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/Badge%2025%20-%20Inspect%20Rich%20Documents%20with%20Gemini%20Multimodality%20and%20Multimodal%20RAG_5ede7e92.jpg" alt="Badge 25" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="section-standard">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">Mastered AI Stack</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-indigo-400">Models and Frameworks</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Gemini (Google)</li>
                <li>• Vertex AI</li>
                <li>• TensorFlow</li>
                <li>• LangChain</li>
                <li>• Hugging Face</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Data and ML</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• BigQuery</li>
                <li>• BigQuery ML</li>
                <li>• Dataflow</li>
                <li>• Pub/Sub</li>
                <li>• Cloud Storage</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-orange-400">Deployment and Ops</h3>
              <ul className="space-y-2 text-sm text-[#94A3B8]">
                <li>• Cloud Run</li>
                <li>• Cloud Functions</li>
                <li>• App Engine</li>
                <li>• Monitoring</li>
                <li>• MLOps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-standard relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/cta-gradient-neon-YtJRpgzzvfKyE97pDtJczf.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A]" />

        <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-20 border border-cyan-500/20">
          <h2 className="title-standard text-center text-4xl font-bold">Ready to Add Intelligence to Your Business?</h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            Let's talk about how AI can transform your processes and generate measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              Schedule Consulting <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </div>
  );
}
