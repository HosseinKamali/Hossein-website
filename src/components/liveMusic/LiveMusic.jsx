import React, { useState } from "react";
import { liveMusic } from "../Menu and dropdown/MenuDropDown";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./CoustomArrow";
import { CiMusicNote1 } from "react-icons/ci";

const LiveMusic = () => {
  const [musics, setMusics] = useState(liveMusic);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container m-auto relative mt-32">
      <h2></h2>
      <h3></h3>
      <div className="relative ">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          itemClass="carousel-item-padding-40-px"
        >
          {musics.map((music, index) => (
            <div
              key={index}
              className="w-[95%] h-[365px] rounded-3xl overflow-hidden" >
                
              <img
                src={music.imageUrl}
                alt=""
                className="w-full h-full rounded-3xl object-cover relative"  />
              <h4 className="absolute text-slate-50 font-bold bottom-14 left-5 text-xl">
                {music.title}
              </h4>
              <div className="absolute top-[50%] left-[50%] text-slate-100 bg-slate-900 bg-opacity-50 rounded-full p-3 transform -translate-x-1/2 -translate-y-1/2 border-[1px] hover:scale-110 cursor-pointer">
                <CiMusicNote1 size={25} />
              </div>

              <div className="absolute text-slate-50 bottom-5 left-5">
                <span className="font-semibold text-base">{music.name} </span>
                <span className="text-xs font-normal text-slate-200">
                  . {music.date}
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LiveMusic;
