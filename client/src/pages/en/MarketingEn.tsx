import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Target } from "lucide-react";

export default function MarketingEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Growth Marketing Consulting & ROI Strategy | Pedro Uva";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Data-driven Growth Marketing strategies focused on ROI. Expert Google Ads, Meta Ads, and SEO for global scalability.");
    }
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
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="glass-card px-4 py-2 text-sm md:text-base font-semibold text-orange-400 inline-flex items-center gap-2 border border-orange-500/30 uppercase tracking-widest">
              <Target className="w-4 h-4" /> Performance Marketing & ROI
            </div>
          </div>

          <h1 className="title-standard animate-fade-in animation-delay-100 tracking-tighter">
            Stop Funding <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Incompetence</span>
          </h1>

          <p className="mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-200 font-medium">
            While you read this page, Google and Meta are swallowing 40% of your profit margin. I am Uva, the Profit Engineer who combines technical rigor with military-grade acquisition intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-300">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              I Want to Stop Losing Money <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <p className="text-sm text-[#94A3B8] italic">
            ⚠️ Warning: I accept only 4 new projects per month due to the complexity of data engineering.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-standard">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">You Are "Flying Blind"</h2>

          <div className="space-y-6 mb-12">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-orange-400">❓ Reality Check</h3>
              <p className="text-[#94A3B8] mb-4">Answer fast:</p>
              <ul className="space-y-3 text-[#94A3B8]">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">1.</span>
                  <span>Do you know exactly which campaign, ad, or keyword generated yesterday's sale?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">2.</span>
                  <span>Does your site load in less than 2.5 seconds on 4G?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">3.</span>
                  <span>Do you appear on Google when the client searches and on Instagram when they relax?</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 border-orange-500/50">
              <h3 className="text-xl font-bold mb-3 text-orange-400">🩸 The Verdict</h3>
              <p className="text-[#94A3B8]">
                If you hesitated to answer any of these questions, you don't have a marketing strategy. You have an <strong>expensive lottery</strong>. Google penalizes slow sites (you lose 53% of customers if it takes more than 3 seconds). Meta punishes those without correct tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-standard relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/services-grid-bg-37RfWbP5XKmep3Fcdnw4qM.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="title-standard text-center text-4xl font-bold">The Holy Trinity of Predictable Growth</h2>
          <p className="text-center text-[#94A3B8] mb-16 text-lg">How I turn your marketing into a sales machine</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pilar 1 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-lg w-fit">
                <BarChart3 className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sales Intelligence</h3>
              <p className="text-[#94A3B8] mb-4">GA4 + Google Ads</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">What agencies do:</strong> Look at vanity metrics ("likes" and "clicks")</p>
                <p><strong className="text-cyan-400">What I do:</strong> Install the "Treasure Map". Advanced tracking for the algorithm to focus only on those with real purchase intent. Up to 40% reduction in CPA.</p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-lg w-fit">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Omnichannel Domination</h3>
              <p className="text-[#94A3B8] mb-4">Integrated Google + Meta</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">What agencies do:</strong> Boost posts on Instagram without a funnel</p>
                <p><strong className="text-cyan-400">What I do:</strong> Military siege. We appear on Google (search network) to close the sale and on Meta Ads to generate desire. Total omnipresence.</p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card p-8">
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-indigo-500/20 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Shielding</h3>
              <p className="text-[#94A3B8] mb-4">Core Web Vitals + Technical SEO</p>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p><strong className="text-cyan-400">What agencies do:</strong> Use heavy templates and dirty code</p>
                <p><strong className="text-cyan-400">What I do:</strong> Direct code intervention. Ultra-fast site, optimized for Google's algorithm. End of invisibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Credentials Section */}
      <section className="section-standard">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">Less Than 1% of the Market Has This Combination</h2>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto text-lg">
            Certifications proving expertise in Google Ads, GA4, Meta Ads, and digital marketing strategy
          </p>

          {/* Certificate Description */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-indigo-400">🏆 Certified Google Ads</h3>
              <p className="text-[#94A3B8] text-sm">Search and Display Network specialist focused on CPA reduction and ROI increase.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">📊 GA4 Specialist</h3>
              <p className="text-[#94A3B8] text-sm">Technical implementation and analysis of custom events for sales funnel mapping.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-orange-400">📱 Certified Meta Ads</h3>
              <p className="text-[#94A3B8] text-sm">High-performance campaign management on Instagram and Facebook with surgical targeting.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-indigo-400">🎓 Goobec (Google Partner)</h3>
              <p className="text-[#94A3B8] text-sm">Graduated from Google's first official partner in Latin America with hands-on methodology.</p>
            </div>
          </div>

          {/* Certificate Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-marketing-digital_4c3373a5.png" alt="Digital Marketing Certificate" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-google-ads_1f217a44.png" alt="Google Ads Certificate" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-ga4_421ff0fb.png" alt="GA4 Certificate" className="w-full h-auto rounded-lg" />
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077556779/YTU8YzkRmKenKkuZ8w6esk/certificado-meta-ads_1f6a6081.png" alt="Meta Ads Certificate" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div className="glass-card p-8 border-cyan-500/50">
            <p className="text-[#94A3B8]">
              I am not a digital adventurer. I have a degree in Systems Development (FATEC) and am trained by Google's first official partner in Latin America (Goobec). I don't "guess". I apply the methodology that Google uses to scale billion-dollar revenues.
            </p>
          </div>
        </div>
      </section>

      {/* Anti-Sale Section */}
      <section className="section-standard">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">I Am Not For You If...</h2>

          <div className="space-y-4 mb-12">
            <div className="glass-card p-6 border-red-500/30">
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-xl">✗</span>
                <span className="text-[#94A3B8]">You seek "Instagram tips" or social media management</span>
              </p>
            </div>
            <div className="glass-card p-6 border-red-500/30">
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-xl">✗</span>
                <span className="text-[#94A3B8]">You see technology investment as an "expense" and don't want to optimize your sales machine</span>
              </p>
            </div>
            <div className="glass-card p-6 border-red-500/30">
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-xl">✗</span>
                <span className="text-[#94A3B8]">You want magical results without adjusting your company's infrastructure</span>
              </p>
            </div>
          </div>

          <div className="glass-card p-8 border-cyan-500/50">
            <p className="text-[#94A3B8] mb-4">
              <strong className="text-cyan-400">But if you are a serious businessman</strong>, focused on ROI, and want to stop outsourcing your data intelligence to amateurs, we need to talk.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-standard">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-standard text-center text-4xl font-bold">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Are technology and consulting expensive?</h3>
              <p className="text-[#94A3B8]">
                Expense is paying for clicks from people who will never buy from you. What I deliver is risk mitigation and a system that identifies buyers. It's an investment with proven ROI.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">My current site already works.</h3>
              <p className="text-[#94A3B8]">
                It works for you, but Google's algorithm is hiding you from new customers because your code is obsolete and slow. While you sleep, your competitor is dominating the first page.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-400">How long does it take to see results?</h3>
              <p className="text-[#94A3B8]">
                Technical optimizations start to impact in 2-4 weeks. Well-structured Google Ads campaigns show ROI in 30 days. Complete omnichannel strategy: 90 days for market dominance.
              </p>
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
          <h2 className="title-standard text-center text-4xl font-bold">Inaction Costs More Than Intervention</h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg font-medium text-[#E2E8F0]">
            Every day your site runs without data intelligence and with slowness, your competitor gains market share with a cheaper CPA using AI. The choice is yours: be the conversion predator or the market prey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-gradient text-xl py-8 px-12 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300 rounded-full font-bold"
              onClick={() => window.open('https://wa.me/5511978768690', '_blank')}
            >
              Apply for Strategic Consulting <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </div>
  );
}
