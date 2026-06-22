import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Equipment from "@/components/Equipment";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Higgsfield-generated cinematic imagery
const IMAGES = {
  // Hero: aerial excavator clearing forest
  hero: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223224_b19ad3f8-8266-44ba-b699-2483e8361fbc.png",
  // Equipment fleet at golden hour
  equipment: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223313_762983fd-d16d-4544-92c0-0f6927c1def9.png",
  // Services section images
  services: [
    // Land clearing
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223224_b19ad3f8-8266-44ba-b699-2483e8361fbc.png",
    // Forestry mulching
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223229_d45c87ca-e400-4661-bfdb-4b65762dbfb1.png",
    // Grading
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223234_12df10db-3037-4ab0-8f01-656dc16a31d8.png",
    // Site prep - aerial cleared land
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223255_9ca4fbc6-a330-46ab-9da8-58c4d44db291.png",
    // Demolition
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223307_a3795b9d-a39a-4e7c-9257-6115a3755f2f.png",
  ],
  // Gallery: rotate all images across 6 slots
  gallery: [
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223224_b19ad3f8-8266-44ba-b699-2483e8361fbc.png",
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223229_d45c87ca-e400-4661-bfdb-4b65762dbfb1.png",
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223234_12df10db-3037-4ab0-8f01-656dc16a31d8.png",
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223255_9ca4fbc6-a330-46ab-9da8-58c4d44db291.png",
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223307_a3795b9d-a39a-4e7c-9257-6115a3755f2f.png",
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260622_223313_762983fd-d16d-4544-92c0-0f6927c1def9.png",
  ],
};

export default function Home() {
  return (
    <main className="bg-brand-black">
      <Navbar />
      <Hero heroImageUrl={IMAGES.hero} />

      {/* Ticker bar */}
      <div className="bg-brand-gold py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-brand-black text-xs font-bold uppercase tracking-widest mx-8">
              Land Clearing &nbsp;·&nbsp; Forestry Mulching &nbsp;·&nbsp; Grading &nbsp;·&nbsp; Site Preparation &nbsp;·&nbsp; Demolition &nbsp;·&nbsp; Licensed &amp; Insured &nbsp;·&nbsp; Free Estimates &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <Services images={IMAGES.services} />
      <WhyUs />
      <Gallery images={IMAGES.gallery} />
      <Equipment imageUrl={IMAGES.equipment} />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  );
}
