// TODO: remove use client after implement slider
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SLIDES from "@/lib/SLIDE.json";
import "swiper/css";
import { Slide } from "@/types/types";

export default function PromoSection() {
  return (
    <div className="py-4 gap-x-4 grid grid-flow-col grid-rows-1 grid-cols-6">
      <div className="min-h-96 col-span-4 bg-info">
        <Swiper spaceBetween={0} slidesPerView={1} className="h-full">
          {SLIDES.map((slide: Slide) => (
            <SwiperSlide className="p-11 ">
              <div className="text-[#FFC43F]">100% Natural</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-2">
        <div className="h-1/2">
          <div className="p-4 border">item</div>
        </div>
        <div className="h-1/2">
          <div className="p-4 border">item2</div>
        </div>
      </div>
    </div>
  );
}
