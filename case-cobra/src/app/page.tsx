import MaxWidth from "@/components/max-width-component";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidth className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:p-32 
        lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:p-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center l
            g:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" alt="" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance 
              mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl text-center lg:text-start">Your image
                on a <span className="bg-green-600 text-white px-2">Custom</span> phone case
              </h1>
              <p className="mt-8 text-lg lg:mt-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favourite memories with your own, <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center sm:items-start">
                    <Check className="text-green-600 h-5 w-5 shrink-0"></Check>
                    Hign quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center sm:items-start">
                    <Check className="text-green-600 h-5 w-5 shrink-0"></Check>
                    5 years print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center sm:items-start">
                    <Check className="text-green-600 h-5 w-5 shrink-0"></Check>
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
                    src="/users/user-5.jpg"
                    alt="user" />
                </div>
              </div>
            </div>
          </div>
        </MaxWidth>
      </section>
    </div>
  );
}
