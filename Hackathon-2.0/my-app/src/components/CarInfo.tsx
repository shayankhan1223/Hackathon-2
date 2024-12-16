// import Image from "next/image";
// import Button from "./Button";

// export default function CarInfo() {
//   return (
//     <>
//       <div className="bg-slate-300 w-[1016px] m-5 mt-6 absolute top-20 right-0">
//         {/* Right Container Uper Div */}
//         <div className="flex border-2 border-black w-[950px] absolute right-0">
//           {/* Left/Image Div In Right Container */}
//           <div>
//             <Image
//               src="/View.png" // Image path (public folder ke andar ho)
//               alt="Example Image"
//               width={400} // Image width in pixels
//               height={400} // Image height in pixels
//               className=""
//             />
//             {/* Small Images Div */}
//             <div className="flex my-3">
//               {/* First Image */}
//               <Image
//                 src="/View 1.png" // Image path (public folder ke andar ho)
//                 alt="Example Image"
//                 width={122} // Image width in pixels
//                 height={122} // Image height in pixels
//                 className="mx-[7px] ml-0"
//               />
//               {/* Second Image */}
//               <Image
//                 src="/View 2.png" // Image path (public folder ke andar ho)
//                 alt="Example Image"
//                 width={122} // Image width in pixels
//                 height={122} // Image height in pixels
//                 className="mx-[7px]"
//               />
//               {/* Third Image */}
//               <Image
//                 src="/View 3.png" // Image path (public folder ke andar ho)
//                 alt="Example Image"
//                 width={122} // Image width in pixels
//                 height={122} // Image height in pixels
//                 className="mx-[7px]"
//               />
//             </div>
//           </div>

//           {/* Right/Information Div In Right Container */}
//           <div className="m-5 mt-0 p-3 bg-white grid grid-rows-5 w-[420px]">
//             {/* Small Divs-(Car Name and Like) */}
//             <div className="relative items-center">
//               <span className="text-2xl font-bold">Nissan GT - R</span>
//               <span className="absolute top-2 right-2">
//                 {/* <Image
//                   src="/Vector.png" // Image path (public folder ke andar ho)
//                   alt="Example Image"
//                   width={12} // Image width in pixels
//                   height={12} // Image height in pixels
//                   className="mx-[7px]"
//                 /> */}
//                 <button className="text-red-600 ">❤</button>
//               </span>
//             </div>
//             {/* Reviews Star Div */}
//             <div className=""></div>
//             {/* Cars Details Text Div */}
//             <div className="text-sm text-DarkGrayText">
//               NISMO has become the embodiment of Nissan's outstanding
//               performance, inspired by the most unforgiving proving ground,
//               the "race track".
//             </div>

//             <div className="grid grid-rows-2 my-3 w-full">
//               <div className="text-sm w-full grid grid-cols-4 gap-2">
//                 <span className="text-GreyText ">TypeCar</span>
//                 <span>Sports</span>
//                 <span className="text-GreyText ">Capacity</span>
//                 <span>2 Person</span>
//               </div>

//               <div className="text-sm w-full grid grid-cols-4 gap-2">
//                 <span className="text-GreyText ">Streeting</span>
//                 <span>Manual</span>
//                 <span className="text-GreyText ">Gasoline</span>
//                 <span>70L</span>
//               </div>
//             </div>
//             <div className="relative mt-4">
//               <span className="font-bold text-2xl">$80.00/</span>{" "}
//               <span className="text-sm text-GreyText">days</span> <Button />
//               <div className="text-sm text-GreyText line-through">$100.00</div>
//             </div>
//           </div>
//         </div>

//         {/* Reviews Section */}
//         <div className="bg-white p-3 mt-3 w-[845px] relative right-0">
//           <div className="flex items-center ">
//             <span className="font-semibold">Reviews</span>
//             <button className="bg-BlueButton w-9 h-6 flex justify-center items-center rounded-[3px] text-white text-sm ml-3">
//               13
//             </button>
//           </div>

//           {/* Name Profile Pic And Date */}
//           <div className="relative mt-3">
//             <div className="flex items-center ">
//               <Image
//                 src="/Profill (2).png" // Image path (public folder ke andar ho)
//                 alt="Example Image"
//                 width={40} // Image width in pixels
//                 height={40} // Image height in pixels
//                 className=""
//               />
//               <h2 className="font-bold pl-2"> Alex Stanton</h2>
//               <p className="text-GreyText text-xs absolute right-3">
//                 21 July 2022
//               </p>
//             </div>
//             {/* Position and reviews Div */}
//             <div>
//               <p className="text-sm text-GreyText pl-12 mb-3">
//                 CEO at Bukalapak
//               </p>
//             </div>
//             <p className="text-sm text-DarkGreyText pl-12">
//               We are very happy with the service from the MORENT App. Morent
//               has a low price and also a large variety of cars with good and
//               comfortable facilities. In addition, the service provided by the
//               officers is also very friendly and very polite.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
