import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  return (
    <div className='flex flex-row gap-2 items-center justify-center h-screen '>
      <div className='flex h-screen w-[50%] flex-col items-center justify-center gap-4'>
        <h1 className="font-bold text-5xl text-center mb-3">Learnig thet gets you</h1>
        <p className=" text-m text-center ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati quo</p>    
      </div>
      <div className='flex mr-10 h-screen w-[50%] flex-col items-center justify-center gap-4'>
        <img className="h-[80%] size-100" src="https://www.empowerelearning.com/blog/wp-content/uploads/2023/05/Blog_A-Guide-to-Selecting-the-Right-LMS-1.jpg" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;