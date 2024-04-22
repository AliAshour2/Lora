import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
// import { WavyBackground } from './ui/wavy-background';

import { ScrollParallax } from "react-just-parallax";
import { LeftLine, RightLine } from "./design/Pricing";
import { Link } from "react-router-dom";
import HoverBorderGradient from "./ui/hover-border-gradient";

const Pricing = () => {
  return (
    <Section id="pricing" className={`overflow-hidden`}>
      <div className="container relative z-2">
        <div
          className="relative hidden justify-center
                md-[6.5rem] lg:flex  "
        >
          <img
            className="relative z-1"
            width={255}
            height={255}
            src={smallSphere}
            alt="s"
          />

          <ScrollParallax isAbsolutelyPositioned>
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="stars"
              />
            </div>
          </ScrollParallax>
        </div>

        <Heading tag="Pay once last forever" text="Get started with Lora ai " />

        {/* Pricing list */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <HoverBorderGradient>
            <Link className="font-code font-bold " to={"/home"}>See More Details</Link>
          </HoverBorderGradient>
        </div>
      </div>
      {/* <WavyBackground    /> */}
    </Section>
  );
};

export default Pricing;
