import React from 'react'

export default function () {
  return (
    <>
    <div className="h-[2016px] w-[280px] bg-white mt-[2px]">
          {/* Type Div (Left ideBar) */}
          <div className="ml-8 ">
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
    </>
  )
}
