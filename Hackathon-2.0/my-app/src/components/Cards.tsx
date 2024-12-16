import Image from "next/image"
import Button from "./Button"


export default function Cards({ 
    carName, 
    carType, 
    imageSrc, 
    fuelCapacity, 
    transmissionType, 
    seats, 
    rentPrice 
  }:carDetailsProps) {
  return (
    <>
     <div className="w-[290px] h-[350px] bg-white p-3 rounded-md mr-5">
              {/* First Div Car Names And Likes */}
              <div>
                <span className="font-bold">{carName}</span>
                <div className="text-sm text-DarkGreyText">{carType} </div>
              </div>
              {/* Second Div Car Picture */}
              <div className="flex justify-center">
                <Image
                  src={imageSrc} // Image path (public folder ke andar ho)
                  alt={`${carName} Image`}
                  width={220} // Image width in pixels
                  height={100} // Image height in pixels
                  className="my-10"
                />
              </div>
              {/* Third Div Car Details */}
              <div className="">
                <span className="mr-5 text-DarkGrayText">
                  <span>
                    </span> {fuelCapacity}
                </span>
                <span className="mr-5 text-DarkGrayText">
                  <span></span> {transmissionType}
                </span>
                <span className="mr-5 text-DarkGrayText">
                  <span></span> {seats}
                </span>
              </div>

              {/* Fourth Div Car Rent Price */}
              <div className="relative mt-8 flex items-center">
                <span className="font-bold text-xl">${rentPrice}/</span>{" "}
                <span className="text-xs text-GreyText ">day</span> <Button />
              </div>
            </div>
    </>
  )
}
