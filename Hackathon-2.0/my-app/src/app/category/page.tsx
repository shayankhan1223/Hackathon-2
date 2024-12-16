import Image from "next/image";
import CardsGroup from "@/components/CardsGroup";
import Header from "@/components/Header";
import LeftSideBar from "@/components/LeftSideBar";
import Footer from "@/components/Footer";


export default function page() {
  return (
    <>
        <div  style={{ backgroundColor: "rgba(246, 247, 249, 1)" }}>
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
      <div className="flex">

            <LeftSideBar/>
            <div className="flex-row -ml-5">

            <CardsGroup/>
            <CardsGroup/>
            <CardsGroup/>
            </div>
      </div>
            <Footer/>
        </div>
    </>
  )
}
