// import { RxHamburgerMenu } from "react-icons/rx";
import Button from "@/components/Button";
import Image from "next/image";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";

export default function Logo() {
  return (
    <>
      {/* Main Container */}
      <div
        className="flex"
        style={{ backgroundColor: "rgba(246, 247, 249, 1)" }}
      >
        {/* Left SideBar */}

        <div className="h-[2016px] w-[360px] bg-white">
          {/* Type Div (Left ideBar) */}
          <div className="ml-8 mt-8">
            <div className="font-['Plus_Jakarta_Sans'] text-[12px] font-semibold text-GreyText mb-3">
              Type
            </div>
            {/* Type-Check Boxes-Left SideBar */}

            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">Sports</span>{" "}
              <span className="text-GreyText">(10)</span>
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">SUV</span>{" "}
              <span className="text-GreyText">(12)</span>
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">MPV</span>{" "}
              <span className="text-GreyText">(16)</span>
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">Sedan</span>{" "}
              <span className="text-GreyText">(20)</span>
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">Coupe</span>{" "}
              <span className="text-GreyText">(14)</span>
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">Hatchback</span>{" "}
              <span className="text-GreyText">(14)</span>
            </div>
          </div>

          <div className="ml-8 mt-8">
            <div className="font-['Plus_Jakarta_Sans'] text-[12px] font-semibold  text-GreyText">
              Capacity
            </div>
            {/* Capacity-Check Boxes-Left SideBar */}

            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">2 Person</span>{" "}
              <span className="text-GreyText">(10)</span>
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">4 Person</span>{" "}
              <span className="text-GreyText">(12)</span>
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">6 Person</span>{" "}
              <span className="text-GreyText">(16)</span>
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="font-semibold text-xl"
              />{" "}
              <span className="text-DarkGreyText">8 Person</span>{" "}
              <span className="text-GreyText">(20)</span>
            </div>
          </div>
          {/* Pricing Div */}
          <div className="ml-8 mt-8">
            <div className="text-[12px] text-GreyText mb-2">PRICE</div>

            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value="80"
              className="w-[186px] h-2 bg-blue-500 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <div className="text-[12px] text-DarkGreyText mt-1">
              Max, $100.00
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className=" bg-transparent w-[1016px] m-5 mt-6">
          {/* Right Container Uper Div */}
          <div className="flex">
            {/* Left/Image Div In Right Container */}
            <div>
              <Image
                src="/View.png" // Image path (public folder ke andar ho)
                alt="Example Image"
                width={400} // Image width in pixels
                height={400} // Image height in pixels
                className=""
              />
              {/* Small Images Div */}
              <div className="flex my-3">
                {/* First Image */}
                <Image
                  src="/View 1.png" // Image path (public folder ke andar ho)
                  alt="Example Image"
                  width={122} // Image width in pixels
                  height={122} // Image height in pixels
                  className="mx-[7px] ml-0"
                />
                {/* Second Image */}
                <Image
                  src="/View 2.png" // Image path (public folder ke andar ho)
                  alt="Example Image"
                  width={122} // Image width in pixels
                  height={122} // Image height in pixels
                  className="mx-[7px]"
                />
                {/* Third Image */}
                <Image
                  src="/View 3.png" // Image path (public folder ke andar ho)
                  alt="Example Image"
                  width={122} // Image width in pixels
                  height={122} // Image height in pixels
                  className="mx-[7px]"
                />
              </div>
            </div>

            {/* Right/Information Div In Right Container */}
            <div className="m-5 mt-0 p-3 bg-white grid grid-rows-5 w-[420px]">
              {/* Small Divs-(Car Name and Like) */}
              <div className="relative items-center">
                <span className="text-2xl ">Nissan GT - R</span>
                <span className="absolute top-2 right-2">
                  {" "}
                  <Image
                    src="/Vector.png" // Image path (public folder ke andar ho)
                    alt="Example Image"
                    width={12} // Image width in pixels
                    height={12} // Image height in pixels
                    className="mx-[7px]"
                  />
                </span>
              </div>
              {/* Reviews Star Div */}
              <div className=""></div>
              {/* Cars Details Text Div */}
              <div className="text-sm text-DarkGrayText">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </div>

              <div className="grid grid-rows-2 my-3 w-full">
                <div className="text-sm w-full grid grid-cols-4 gap-2">
                  <span className="text-GreyText ">TypeCar</span>
                  <span>Sports</span>
                  <span className="text-GreyText ">Capacity</span>
                  <span>2 Person</span>
                </div>

                <div className="text-sm w-full grid grid-cols-4 gap-2">
                  <span className="text-GreyText ">Streeting</span>
                  <span>Manual</span>
                  <span className="text-GreyText ">Gasoline</span>
                  <span>70L</span>
                </div>
              </div>
              <div className="relative mt-4">
                <span className="font-bold text-2xl">$80.00/</span>{" "}
                <span className="text-sm text-GreyText">days</span> <Button />
                <div className="text-sm text-GreyText ">$100.00</div>
              </div>
            </div>
          </div>

          {/* Right Container Second/Reviews Div */}
          <div className="bg-white p-3 mt-3">
            <div className="flex items-center ">
              <span className="font-semibold">Reviews</span>
              <button className="bg-BlueButton w-9 h-6 flex justify-center items-center rounded-[3px] text-white text-sm ml-3">
                13
              </button>
            </div>

            {/* Name Profile Pic And Date */}
            <div className="relative mt-3">
              <div className="flex items-center ">
                <Image
                  src="/Profill (2).png" // Image path (public folder ke andar ho)
                  alt="Example Image"
                  width={40} // Image width in pixels
                  height={40} // Image height in pixels
                  className=""
                />
                <h2 className="font-bold pl-2"> Alex Stanton</h2>
                <p className="text-GreyText text-xs absolute right-3">
                  21 July 2022
                </p>
              </div>
              {/* Position and reviews Div */}
              <div>
                {" "}
                <p className="text-sm text-GreyText pl-12 mb-3">
                  CEO at Bukalapak
                </p>{" "}
              </div>
              <p className="text-sm text-DarkGreyText pl-12">
                We are very happy with the service from the MORENT App. Morent
                has a low price and also a large variety of cars with good and
                comfortable facilities. In addition, the service provided by the
                officers is also very friendly and very polite.
              </p>
            </div>

            {/* Second review Div */}
            <div className="relative mt-3">
              <div className="flex items-center ">
                <Image
                  src="/Profill (1).png" // Image path (public folder ke andar ho)
                  alt="Example Image"
                  width={40} // Image width in pixels
                  height={40} // Image height in pixels
                  className=""
                />
                <h2 className="font-bold pl-2"> Alex Stanton</h2>
                <p className="text-GreyText text-xs absolute right-3">
                  21 July 2022
                </p>
              </div>
              {/* Position and reviews Div */}
              <div>
                {" "}
                <p className="text-sm text-GreyText pl-12 mb-3">
                  CEO at Amazon
                </p>{" "}
              </div>
              <p className="text-sm text-DarkGreyText pl-12">
                We are greatly helped by the services of the MORENT Application.
                Morent has low prices and also a wide variety of cars with good
                and comfortable facilities. In addition, the service provided by
                the officers is also very friendly and very polite.
              </p>
            </div>
            <div className="text-GreyText flex justify-center my-3 hover:cursor-pointer">
              Show All{" "}
            </div>
          </div>

          {/* Recent Cars Div */}
          <div className="flex my-5">
            <Cards
              carName=" Koenigsegg"
              carType="Sports"
              imageSrc="/Car (2).png"
              fuelCapacity={90}
              transmissionType="Manual"
              seats={2}
              rentPrice={90.00}
            />
            <Cards
              carName=" Nissan GT - R"
              carType="Sports"
              imageSrc="/Car (1).png"
              fuelCapacity={80}
              transmissionType="Manual"
              seats={2}
              rentPrice={80.00}
            />
            <Cards
              carName=" Rolls-Royce"
              carType="Sports"
              imageSrc="/Car.png"
              fuelCapacity={70}
              transmissionType="Manual"
              seats={4}
              rentPrice={96.00}
            />
          </div>

          {/* Recommendation Div */}
          <div className="flex my-5">
            <Cards
              carName="All New Rush"
              carType="SUV"
              imageSrc="/Car4.png"
              fuelCapacity={70}
              transmissionType="Manual"
              seats={6}
              rentPrice={80}
            />
            <Cards
              carName="CR - V"
              carType="SUV"
              imageSrc="/Car5.png"
              fuelCapacity={80}
              transmissionType="Manual"
              seats={6}
              rentPrice={80}
            />
            <Cards
              carName="All New Terios"
              carType="SUV"
              imageSrc="/Car6.png"
              fuelCapacity={90}
              transmissionType="Manual"
              seats={6}
              rentPrice={80}
            />
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

// import LeftSideBar from "@/components/LeftSideBar"
// import Header from "@/components/Header"
// import Image from "next/image"
// import CarInfo from "@/components/CarInfo"

// export default function HomePage() { // Name the function
//   return (
//     <>
//       <div className="bg-customBackground">
//         <Header
//           profilePic={
//             <Image
//               src="/Profill (2).png"
//               alt="Profile Picture"
//               width={30}
//               height={30}
//               className="rounded-full"
//             />
//           }
//         />

//         <LeftSideBar />
//         <CarInfo />

//       </div>
//     </>
//   );
// }
