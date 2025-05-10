import Image from "next/image";
import Input from "./Input";
import { Nunito_Sans } from "next/font/google";
import { Heart, User } from "lucide-react";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className={`${nunito.className} flex justify-center border-b border-stone-100`}>
      <div className="container flex justify-between py-4 border-border-neutral-500">
        <div className="relative">
          <Image src="/logo.png" alt="logo" priority width={241} height={54} />
        </div>
        <Input />
        <a href="tel:+905555555555" className="hidden flex-col justify-center items-end leading-tight xl:flex">
          <span className="text-neutral-500">For Support</span>
          <span className="text-base font-semibold text-black">+90 555 555 55 55</span>
        </a>
        <div className="flex justify-center items-center gap-x-4">
          <button className="underline text-sm p-2 bg-stone-100 rounded-full cursor-pointer hover:bg-stone-200">
            <User />
          </button>
          <button className="underline text-sm p-2 bg-stone-100 rounded-full cursor-pointer hover:bg-stone-200">
            <Heart />
          </button>
        </div>
      </div>
    </header>
  );
}
