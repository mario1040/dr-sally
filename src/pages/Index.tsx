import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import CTASection from '@/components/home/CTASection';
import VideoHero from '@/components/home/VideoHero';
import VideoGallery from '@/components/home/VideoGallery';
import RealResults from '@/components/home/RealResults';

const Index = () => {
  return (
    <>

    <VideoHero />
      {/* <HeroSection /> */}
      <RealResults />
      <ServicesSection />
      <VideoGallery />
      {/* <TechnologiesSection /> */}
      <WhyUsSection />
      <CTASection />
    </>
  );
};

export default Index;
