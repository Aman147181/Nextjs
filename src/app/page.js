import HeroSection from "@/components/HeroSection";
import HotDeals from "@/components/HotDeals";
import AboutUs from "@/components/AboutUs";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/Newsletter";
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HotDeals />
      <AboutUs />
      <Testimonial />
      <Newsletter />
    </div>
  );
}
