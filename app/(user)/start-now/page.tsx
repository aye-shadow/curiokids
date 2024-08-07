"use client";
import Bulb from "@/components/Bulb";
import Buttons from "@/components/Buttons";
import { useRouter } from "next/navigation";
import React from "react";

const StartNow = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/sign-in");
  };

  const handleRegisterClick = () => {
    router.push("/sign-up");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div>
        <Bulb />
      </div>

      <div className="flex flex-col ">
        <div>
          <h1 className="text-4xl text-[#44403C] text-center font-bold">
            Better way to learning is <br />
            calling you
          </h1>
        </div>

        <Buttons
          className="bg-[#14B8A5] hover:bg-[#14B8A7] mt-14"
          onClick={handleLoginClick}
        >
          Login
        </Buttons>

        <Buttons
          onClick={handleRegisterClick}
          className="bg-[#FAFAF9] hover:bg-[#FAFAF6] text-[#44403C] my-5"
        >
          Register
        </Buttons>
      </div>
    </div>
  );
};

export default StartNow;
