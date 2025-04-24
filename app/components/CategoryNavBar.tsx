import { ChevronDown } from "lucide-react";
import MENUS from "@/app/lib/CATEGORY_NAVBAR.json";
import Link from "next/link";

export default function CategoryNavBar() {
  return (
    <div className="py-4">
      <div className="flex">
        <div className="relative">
          <select className="appearance-none py-3 rounded-md outline-none font-medium transition-shadow focus:shadow-(--input-box-shadow) lg:mr-8 xl:pr-7">
            <option value="all">Shop by Departments</option>
            <option value="groceries">Groceries</option>
            <option value="drinks">Drinks</option>
            <option value="chocolates">Chocolates</option>
          </select>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none xl:right-10">
            <ChevronDown size={18} />
          </div>
        </div>
        <div className="flex gap-x-4">
          {MENUS.map((item) => (
            <Link href={item.category_link} key={item.category_id} className="flex justify-center items-center p-2 text-zinc-500 transition-colors hover:text-black">
              {item.category_name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
