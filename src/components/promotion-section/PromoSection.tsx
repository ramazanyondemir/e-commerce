import "swiper/css";
import { openSans } from "@/lib/fonts";
import PromotionCarousel from "./PromotionCarousel";
import PromotionCategories from "./PromotionCategories";

export default function PromoSection() {
  return (
    <div className="py-4 gap-x-4 grid grid-flow-col grid-rows-2 grid-cols-6">
      <div className="min-h-96 col-span-4 bg-info rounded-xl row-span-2">
        <PromotionCarousel />
      </div>

      <div className={`${openSans.variable} col-span-2 grid row-span-2 gap-4`}>
        <PromotionCategories />
      </div>
    </div>
  );
}
