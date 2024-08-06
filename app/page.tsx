import Benifits from "@/components/Benifits";
import Chooseus from "@/components/Chooseus";
import GetFree from "@/components/Home/GetFree";
import Hero from "@/components/Home/Hero";
import HeroAnimations from "@/components/Home/hero-animations";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <HeroAnimations />

      <GetFree />

      <Benifits />

      <Chooseus />
      
      <div className="flex flex-col text-center items-center gap-x-4 font-bold text-2xl ">
      <h1>Routes</h1>
      <h2>Right Now its the basic sutructure</h2>
      </div>
     
     <div className="flex flex-col items-center justify-center font-semibold text-lg underline">
      <Link href={'/admin'}>Admin</Link>
      <Link href={'/dashboard'}>Dashboard</Link>
      <Link href={'/our-courses'}>Our Courses</Link>
      <Link href={'/our-faqs'}>Our Faqs</Link>
      <Link href={'/our-goals'}>Our Goals</Link>
      <Link href={'/profile'}>Profile</Link>
    </div>

        


      
    </div>
  );
}
