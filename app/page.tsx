import HeroSection from '@/components/sections/hero';
import FeaturesSection from '@/components/sections/features';
import ClassesPreview from '@/components/sections/classes-preview';
import Testimonials from '@/components/sections/testimonials';
import CTASection from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ClassesPreview />
      <Testimonials />
      <CTASection />
    </div>
  );
}
