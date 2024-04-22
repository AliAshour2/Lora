import { socials } from "../constants";
import Section from "./Section";
// import { SparklesPreview } from "./SparkItem";

const Footer = () => {
  return (
    <Section crosses className={`!px-0 !py-10`}>
      <div
        className="container flex sm:justify-between
             justify-center items-center gap-10 max-sm::flex-col
             "
      >
        <p className="caption text-n-4 lg:block">
          {new Date().getFullYear()} Lora Ai. All rights reserved.
        </p>
        {/* <SparklesPreview/> */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              className="flex items-center justify-center
           w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-5 "
              key={item.id}
              href={item.url}
              target="_blank"
            >
              <img src={item.iconUrl} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
