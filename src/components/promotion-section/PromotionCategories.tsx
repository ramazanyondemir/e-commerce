import { garamond, nunito, openSans } from "@/lib/fonts";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import Link from "next/link";

export default function PromotionCategories() {
  return (
    <>
      <div className="p-6 rounded-xl bg-[#eef5e5] bg-[length:50%_auto] bg-[url('/img/promo/categories/ad-image-1.png')] bg-no-repeat bg-bottom-right">
        <div className="w-1/2">
          <span
            className={`${garamond.className} after:font-open-sans text-4xl leading-18 font-medium inline-block relative pb-4 mb-4 before:absolute before:bottom-2 before:left-0 before:bg-black before:w-[70%] before:h-[1px] after:absolute after:content-['SALE'] after:text-xs after:bottom-2 after:translate-y-1/2 after:right-0`}
          >
            20% Off
          </span>
          <h3 className={`${nunito.className} font-bold text-3xl mb-3`}>Fruits & Vegetables</h3>
          <Link href="#" className={`${openSans.className} group flex items-center font-medium`}>
            <span className="text-slate-500">Shop Collection</span>
            <ArrowRight size={18} className="ml-1 group-hover:ml-2 text-slate-500 transition-all duration-300" />
          </Link>
        </div>
      </div>
      <div className="p-6 rounded-xl bg-[rgb(249,235,231)] bg-[length:50%_auto] bg-[url('/img/promo/categories/ad-image-1.png')] bg-no-repeat bg-bottom-right">
        <div className="w-1/2">
          <span
            className={`${garamond.className} text-4xl font-medium inline-block relative mb-4 pb-4 before:absolute before:bottom-0 before:left-0 before:bg-black before:w-[70%] before:h-[1px] after:absolute after:content-['SALE'] after:text-xs after:bottom-0 after:translate-y-1/2 after:right-0`}
          >
            20% Off
          </span>
          <h3 className={`${nunito.className} font-bold text-3xl mb-3`}>Fruits & Vegetables</h3>
          <Link href="#" className={`${openSans.className} group flex items-center font-medium`}>
            <span className="text-slate-500">Shop Collection</span>
            <ArrowRight size={18} className="ml-1 group-hover:ml-2 text-slate-500 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </>
  );
}
