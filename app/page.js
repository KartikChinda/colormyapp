"use client"
import HomePage from "./components/HomePage";
import ColorForm from "./components/ColorForm";
import { useState } from "react";

export default function Home() {

  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <main>
      <div className="border-4 border-black w-[90%] md:mt-14 px-3 mt-5 mx-auto mb-12 flex flex-col lg:flex-row gap-5 lg:gap-0 bg-[#e6e5db] lg:justify-around py-5">
        <div className="border-4 border-black lg:w-[62%] p-5 bg-[#fff] ">
          <HomePage formSubmitted={formSubmitted} />
        </div>
        <div className="border-4 border-black lg:w-[32%] p-5 text-center bg-[#fff] h-[750px]">
          <ColorForm setFormSubmitted={setFormSubmitted} />
        </div>
      </div>

    </main>
  );
}
