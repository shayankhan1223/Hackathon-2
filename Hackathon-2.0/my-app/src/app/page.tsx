import Image from "next/image";
import Button from "@/components/Button";
import Header from "@/components/Header";
import PickUp from "@/components/PickUp";
import CardsGroup from "@/components/CardsGroup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div className="bg-customBackground">
      <Header
        profilePic={
          <Image
          
          src="/Profill (2).png"
            alt="Profile Picture"
            width={30}
            height={30}
            className="rounded-full"
          />
        }
        />
        {/* Top Div */}
        <div className="">

      <div className="flex justify-center gap-6 my-5 ">
      <Image
            src="/Ads 1.png"
            alt="Profile Picture"
            width={500}
            height={500}
            className=""
            />
           

          <Image
          src="/Ads 2.png"
          alt="Profile Picture"
          width={500}
          height={500}
          className=""
          />
      </div>
      <div className="">
        <CardsGroup/>
        <CardsGroup/>
        <CardsGroup/>

        {/* <PickUp/> */}
      </div>
    </div>
        <Footer/>
        </div>
    </>
  );
}
