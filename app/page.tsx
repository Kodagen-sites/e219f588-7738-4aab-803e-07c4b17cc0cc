import HeroVideo from "@/components/sections/HeroVideo";
import ValueProp from "@/components/sections/ValueProp";
import ServicesScrub from "@/components/sections/ServicesScrub";
import Showcase from "@/components/sections/Showcase";
import Manifesto from "@/components/sections/Manifesto";
import Process from "@/components/sections/Process";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { buildMetadata } from "@/components/SEOHead";

export const metadata = buildMetadata({ path: "/" });

export default function Page() {
  return (
    <>
      <HeroVideo />
      <ValueProp />
      <ServicesScrub />
      <Showcase />
      <Manifesto />
      <Process />
      <MarqueeStrip />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
