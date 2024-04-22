import { check2, grid, loading } from "../assets";
import { roadmap } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import TagLine from "./TagLine";

const RoudMap = () => {
  return (
    <Section id={"roadmap"} className={`overflow-hidden`}>
      <div className="container md:pb-10 ">
        <Heading tag="Ready to get started?" title="Check out our roadmap" />

        <div
          className="relative grid gap-6 md:grid-cols-2
        md:gap-4 md:pd-[6rem]
        "
        >
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : `In Progress`;
            return (
              // ITEM START
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  {/* GRID START*/}
                  <div className="absolute top-0 left-0 max-w-full ">
                    <img
                      className="w-full"
                      width={550}
                      height={550}
                      src={grid}
                      alt="grid"
                    />
                  </div>
                  {/* GRID END */}

                  <div className="relative z-1">
                    <div className="flex items-center justify-between maz-w-[27rem] mb-8 md:mb-20">
                      <TagLine>{item.date}</TagLine>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          width={30}
                          height={30}
                          src={item.status === "done" ? check2 : loading}
                          alt="status"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default RoudMap;
