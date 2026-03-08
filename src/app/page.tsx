import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoFeature from "@/components/VideoFeature";
import AIPainting from "@/components/AIPainting";
import SmartCanvas from "@/components/SmartCanvas";
import Community from "@/components/Community";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoFeature />
        <AIPainting />
        <SmartCanvas />
        <Community />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
