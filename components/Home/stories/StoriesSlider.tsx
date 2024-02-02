"use client";

import CreateStoryCard from "./CreateStoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SlideNavigation from "./SlideNavigation";
import StoryCard from "./StoryCard";

const arra = [...Array(14)];

export default function StoriesSlider() {
  return (
    <section className="w-full relative">
      <Swiper slidesPerView={4} spaceBetween={8} modules={[Navigation]} draggable={false}>
        <SwiperSlide> 
          <CreateStoryCard/>
        </SwiperSlide>
        {arra.map((e, i) => (
          <SwiperSlide key={i}>
            <StoryCard />
          </SwiperSlide>
        ))}
        {arra.length > 4 && <SlideNavigation />}
      </Swiper>
    </section>
  );
}