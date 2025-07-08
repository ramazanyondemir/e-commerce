"use client";
import { garamond, nunito } from "@/lib/fonts";

import { Swiper, SwiperSlide } from "swiper/react";
import SLIDES from "@/lib/SLIDE.json";
import { Slide } from "@/types/types";
import "swiper/css";
import LinkButton from "../ui/LinkButton";

export default function PromotionCarousel() {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} className="h-full">
      {SLIDES.map((slide: Slide) => (
        <SwiperSlide>
          <div className="p-11 flex">
            <div className="w-[58%] px-3">
              <div className={`${garamond.variable} text-primary text-4xl my-4`}>100% Natural</div>
              <h1 className={`${nunito.variable} text-[56px] mb-2 font-bold leading-[1.2]`}>{slide.title}</h1>
              <p className="text-gray-600 leading-8 mb-4">{slide.description}</p>
              {slide.link && (
                <LinkButton href={slide.link} className="inline-block cursor-pointer mt-4">
                  SHOP NOW
                </LinkButton>
              )}
            </div>

            <div className="w-[42%] flex items-center justify-center px-3">
              <img src={slide.slide_img} alt={slide.slide_img} className="max-w-full h-auto" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
