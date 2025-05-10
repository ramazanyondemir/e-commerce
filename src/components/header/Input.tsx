import { ChevronDown, Search } from "lucide-react";

export default function Input() {
  return (
    <div className="hidden items-center justify-center my-0.5 p-2 w-full bg-stone-100 rounded-2xl lg:max-w-md xl:max-w-xl lg:flex">
      <div className="relative h-full w-1/3 px-3">
        <select className="h-full appearance-none pl-2 pr-10 rounded-md outline-none font-medium text-zinc-500 transition-shadow focus:shadow-(--input-box-shadow) lg:pl-3 xl:pr-8">
          <option value="all">All Categories</option>
          <option value="groceries">Groceries</option>
          <option value="drinks">Drinks</option>
          <option value="chocolates">Chocolates</option>
        </select>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none xl:right-4">
          <ChevronDown size={18} />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full px-3">
          <input type="text" placeholder="Search for more than 20,000 products" className="w-full rounded-md border-0 px-3 py-1.5 outline-none transition-shadow focus:shadow-(--input-box-shadow) placeholder:text-neutral-400 placeholder:font-medium placeholder:text-sm" />
        </div>
        <div className="px-2">
          <Search className="text-stone-600" />
        </div>
      </div>
    </div>
  );
}
