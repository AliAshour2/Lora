import { check, service1, service2, service3 } from "../assets";
import Heading from "./Heading";
import Section from "./Section";

import { loraAiServicesIcons, loraServices } from "./../constants/index";
import Generating from "./Generating";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { useState } from "react";

const Services = () => {
  const [selectedServiceItem, setSelectedServiceItem] = useState(null);

  const handleServiceItemClick = (index) => {
    setSelectedServiceItem(index);
  };

  return (
    <Section id={`how-to-use`} crosses>
      <div className="container">
        <Heading
          title={`Generative AI For Creative Creators`}
          text="Lora Ai unlocks the full potential of generative AI for creative creators"
        />

        <div className="relative">
          {/*Start Service item */}
          <div
            className="relative z-1 flex
           items-center  h-[39rem] mb-5 backdrop:blur bg-n-9/10  border-n-1/100
            rounded-3xl overflow-hidden lg:p-20 xh:h[46rem]"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5  xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right "
                width={800}
                height={730}
                src={service1}
                alt="services "
              />
            </div>

            {/* CARD inside the service item */}
            <div
              className="relative z-1 max-w-[17rem] ml-auto p-4
             rounded-2xl bg-n-9/10 backdrop-blur border border-n-1/10 "
            >
              <h4 className="h4 mb-2">Smartest Ai</h4>
              <p className="body-2 mb-[1.5rem] text-n-3 ">
                Lora ai unlocks the potential of AI-powered Applications
              </p>
              <ul className="body-2 ">
                {loraServices.map((item, index) => (
                  <li
                    className="flex items-start py-4 border-t  border-n-6"
                    key={index}
                  >
                    <img className="mr-4" src={check} alt="check icon" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              className={`absolute left-4 right-4 bottom-4 border-n-1/10 bg-n-9/9 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2`}
            />
          </div>
          {/* End service item */}

          {/* service item 2 */}
          <div className="relative z-1 grid gap-5  lg:grid-cols-2">
            {/* 3 Bento  */}
            <div className="relative min-h-[39rem] border-n-1/10 rounded-3xl overflow-hidden ">
              <div className="absolute inset-0 ">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot2"
                />
              </div>
              <div
                className="absolute inset-0 flex flex-col justify-end p-8   
             rounded-2xl bg-gradient-to-b from-n-8/0 to-n-8/90  backdrop-blur border border-n-1/10 "
              >
                <h4 className="h4 mb-2">Smartest Ai</h4>
                <p className="body-2 mb-[1.5rem] text-n-3 ">
                  Lora ai unlocks the potential of AI-powered Applications
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            <div className="bg-n-9/10 p-4 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Text Summarization</h4>
                <p className="body-2 mb-[1.5rem] text-n-3 ">
                  World most Powerful Ai for Text summarization and quation
                  generating and quation answering
                </p>
                <ul className="flex justify-between items-center">
                  {loraAiServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        selectedServiceItem === index
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : `flex w-10 h-10 bg-n-6 md:w-15 md:h-15`
                      }`}
                      onClick={() => handleServiceItemClick(index)}
                    >
                      <div
                        className={`${
                          selectedServiceItem === index
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }`}
                      >
                        <img src={item} width={24} height={24} alt="item" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative bg-n-8 h-[20rem] md:h-[25rem] rounded-3xl overflow-hidden  ">
                <img
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  src={service3}
                  alt="serv3"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
          {/* End service item 2 */}
        </div>
      </div>
    </Section>
  );
};

export default Services;
 