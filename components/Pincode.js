import React from "react";
import { useState } from "react";

const Pincode=({isVisible,onClose})=>{
  if(!isVisible) return null;

  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  const handleClose=(e)=>{
    if(e.target.id==='wrapper') onClose();
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-opacity-60 flex justify-center items-center " id="wrapper" onClick={handleClose}>
        <div className="flex flex-col gap-y-5 bg-white p-2 rounded-xl w-[600px] h-[400px] p-6">

            <div className="flex flex-row justify-between">
                <div>
                    <div className="text-2xl text-[#2E2D28] font-bold">
                    Set your location
                    </div>
                    <div className="text-md text-[#2E2D28]">
                    Find a location near you
                    </div>
                </div>
                <button onClick={()=>onClose()} className="self-start">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M56 444 c-24 -23 -24 -365 0 -388 23 -24 365 -24 388 0 24 23 24 365
                        0 388 -23 24 -365 24 -388 0z m379 -194 l0 -185 -185 0 -185 0 -3 175 c-1 96
                        0 180 3 187 3 11 44 13 187 11 l183 -3 0 -185z"/>
                        <path d="M160 333 c0 -4 17 -24 37 -45 l37 -38 -39 -40 c-51 -52 -37 -66 15
                        -15 l40 39 40 -39 c22 -21 43 -36 47 -32 4 4 -11 25 -32 47 l-39 40 39 40 c51
                        52 37 66 -15 15 l-40 -39 -38 37 c-37 36 -52 45 -52 30z"/>
                        </g>
                    </svg>
                    </button>
            </div>

            <button className="self-center flex flex-row gap-x-4 justify-center bg-[#3268B9] rounded-lg w-fit p-3 px-5 shadow hover:bg-[#1b58b4]">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="18.000000pt" height="18.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                    fill="#FFFFFF" stroke="none">
                    <path d="M110 228 c0 -7 -14 -21 -30 -30 -17 -9 -35 -29 -42 -43 -6 -14 -17
                    -25 -25 -25 -7 0 -13 -4 -13 -10 0 -5 6 -10 13 -10 8 0 19 -11 25 -25 7 -14
                    25 -34 42 -43 16 -9 30 -23 30 -29 0 -7 5 -13 10 -13 6 0 10 6 10 13 0 8 11
                    19 25 25 14 7 34 25 43 42 9 16 23 30 30 30 6 0 12 5 12 10 0 6 -6 10 -13 10
                    -8 0 -19 11 -25 25 -7 14 -25 34 -42 43 -16 9 -30 23 -30 30 0 6 -4 12 -10 12
                    -5 0 -10 -6 -10 -12z m57 -60 c29 -27 29 -65 1 -95 -27 -29 -65 -29 -95 -1
                    -29 27 -29 65 -1 95 27 29 65 29 95 1z"/>
                    <path d="M90 145 c-26 -32 13 -81 48 -59 22 14 27 41 12 59 -16 19 -44 19 -60
                    0z"/>
                    </g>
                </svg>

                <div className="text-md text-white font-medium">
                Use my current location
                </div>
                
            </button>

            <div className="self-center text-md text-gray-500">
                Note: Your browser will ask permission first
            </div>
            <div className="self-center text-md text-slate-600 font-medium">
                OR
            </div>
            <div className="flex flex-row items-center p-1 px-3 gap-x-4 relative block w-full rounded-md border-0 ring-1 ring-inset ring-gray-300">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#3268B9" stroke="none">
                    <path d="M119 275 c-32 -17 -53 -65 -44 -97 10 -33 75 -138 85 -138 10 0 75 105 85 138 10 33 -13 80 -46 97 -34 18 -47 18 -80 0z m71 -50 c26 -32 -13 -81 -47 -59 -23 14 -28 41 -13 59 16 19 44 19 60 0z"/>
                    </g>
                </svg>
                <input name="pincode" type="text" required onChange={handleChange} placeholder="Enter ZIP code or address" value={value}  className="border-0 w-full focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#3268B9]"/>
            </div>

            <div className="grid grid-cols-2 gap-x-4">
                <button className="text-md font-medium text-[#3268B9] border rounder-md rounded-lg w-fit p-4 w-full ring-1 ring-inset ring-gray-300 hover:bg-gray-100" onClick={()=>onClose()}>
                    Cancel
                </button>
                <button className="text-md text-white font-medium bg-[#3268B9] rounded-lg w-fit p-4 w-full shadow hover:bg-[#1b58b4]">
                    Set Location
                </button>
            </div>
        </div>
    </div>
  )
}
export default Pincode;