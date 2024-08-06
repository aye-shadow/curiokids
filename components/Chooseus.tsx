import React from 'react';
import Star from './Badges/Star';
import Smilinggirl from "./Smilinggirl";

const Chooseus = () => {
  return (
    <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center rounded-[30px] bg-[#14B8A5] py-16 md:py-24 mx-[10px] md:mx-[50px] my-[50px] md:my-[200px]">
    <div className="container max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why choose us</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-4">
            <Star />
            <p className="text-base md:text-lg text-white">Access a wide range of interactive lessons tailored to all learning styles.</p>
          </div>
          <div className="flex items-start gap-4">
          <Star />
            <p className="text-base md:text-lg text-white">Learn from high-quality materials, ensuring reliable and up-to-date content.</p>
          </div>
          <div className="flex items-start gap-4">
          <Star />
            <p className="text-base md:text-lg text-white">Join a vibrant community for real-time support and feedback.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
       <Smilinggirl />
      </div>
    </div>
  </section>
  )
}

export default Chooseus

function StarIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }