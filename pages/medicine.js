import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Pincode from "@/components/Pincode";


import shelcal from "@/public/medicines/shelcal.png"

export default function medicine() {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="pb-10">
        <Head>
            <title>Shelcal 500</title>
        </Head>
      {/* Medicine description */}
		<div className="bg-white shadow-md">
            <div className="flex flex-row py-5 mx-auto gap-x-6 max-w-[75%]">
                <div className="max-w-[150px]">
                <Image src={shelcal} className="" alt="shelcal" />
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="w-max">
                        <div className="text-5xl inline text-[#2E2D28] font-bold mr-3">
                            Shellac 500
                        </div>
                        <div className="text-md inline text-[#2E2D28]">
                            Supplement
                        </div>
                    </div>
                    <div className="text-md text-[#2E2D28]">
                        To treat vitamin D and Calcium deficiency, osteoporosis and other bone-related problems.
                    </div>
                    <div className="text-md text-[#2E2D28]">
                        Shelcal 500 Tablet is a vitamin and mineral supplement. It contains calcium and vitamin D3 (cholecalciferol /cholecalciferol) as the main ingredient. Shelcal 500 Tablet is used to treat vitamin D and Calcium deficiency.
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex flex-col mx-auto max-w-[75%] -z-10">
            <div className="text-xl inline text-[#2E2D28] font-bold mt-5">
                First, match your prescription
            </div>
            {/* prescription box */}
            <div>
                <button className="w-[50%] p-3 text-black bg-white border-2 border-[#e2e8f0] rounded-lg my-4 ring-1 ring-inset ring-gray-300">
                    Prescription
                </button>
            </div>
            <div className="text-xl inline text-[#2E2D28] font-bold my-4">
                Next, pick a pharmacy to get a coupon
            </div>

            {/* site comparision table */}
            <div className="mx-auto bg-white w-full rounded-lg drop-shadow-md">
            {/* table header */}
                <div className="flex flex-row justify-between border p-4">
                    <div>
                    <button onClick={() => setShowModal(true)}>
                        <div  className="flex flex-row gap-x-2">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32.000000pt" height="32.000000pt" viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                                fill="#3268B9" stroke="none">
                                <path d="M119 275 c-32 -17 -53 -65 -44 -97 10 -33 75 -138 85 -138 10 0 75
                                105 85 138 10 33 -13 80 -46 97 -34 18 -47 18 -80 0z m71 -50 c26 -32 -13 -81
                                -47 -59 -23 14 -28 41 -13 59 16 19 44 19 60 0z"/>
                                </g>
                            </svg>
                            <div className="flex items-center text-[#3268B9] hover:underline">
                                Patiala
                            </div>
                        </div>
                    </button>
                    </div>
                    <div className="flex flex-row gap-x-2">
                        <button>
                            <div className="flex items-center text-[#3268B9]">
                                Lowest Price
                            </div>
                        </button>
                    </div>
                </div>

                {/* Pharmeasy */}
                <a href="https://pharmeasy.in/health-care/products/shelcal-500mg-strip-of-15-tablets-9033">
                    <div className="border flex flex-row justify-between p-4">

                        {/* site icon */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"
                            className="border rounded-full">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#0E8F6D" stroke="none">
                                <path d="M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0
                                -2560z m3310 2012 c551 -129 949 -527 1067 -1064 25 -118 25 -409 -1 -528 -34
                                -158 -87 -288 -172 -426 -24 -39 -44 -79 -44 -89 0 -11 60 -80 139 -160 156
                                -156 180 -196 181 -286 0 -68 -19 -116 -66 -168 -74 -83 -209 -111 -302 -62
                                -44 22 -319 277 -469 434 -103 107 -117 134 -117 217 0 81 21 125 108 219 109
                                119 170 225 211 365 64 222 32 455 -90 653 -65 105 -207 245 -305 300 -244
                                136 -556 147 -807 29 -119 -57 -190 -112 -373 -291 -433 -422 -1004 -979
                                -1098 -1070 -57 -55 -126 -113 -155 -130 -45 -26 -61 -30 -122 -29 -113 2
                                -189 48 -231 139 -31 66 -33 161 -4 220 14 28 127 146 353 365 182 178 438
                                427 567 554 504 497 577 561 728 650 144 84 301 142 472 172 112 20 419 11
                                530 -14z m-753 -1997 c27 -8 68 -29 89 -46 34 -27 286 -271 923 -894 178 -174
                                211 -222 211 -305 0 -93 -23 -122 -363 -455 -357 -350 -377 -365 -488 -365
                                -81 0 -130 17 -178 63 -77 73 -104 203 -61 293 14 27 97 117 235 253 118 116
                                215 216 215 222 0 13 -22 35 -361 368 -142 138 -265 251 -274 251 -9 0 -110
                                -92 -225 -204 -238 -233 -265 -251 -375 -251 -145 1 -244 97 -253 246 -3 52 0
                                74 16 106 12 23 130 148 284 300 399 394 413 406 503 426 36 8 51 7 102 -8z"/>
                                </g>
                            </svg>
                            <div className="text-xl inline text-[#2E2D28] font-medium">
                                Pharmeasy
                            </div>
                        </div>

                        {/* price */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <div className="text-xl text-[#2E2D28] font-bold">₹ 249.00</div>
                            <div className="min-w-[160px] max-h-[48px] p-2 bg-transparent hover:bg-gray-200 font-semibold border border-[#e2e8f0] rounded-lg text-[#3268B9] text-center cursor-pointer">
                                Get Free Savings
                            </div>
                        </div>
                    </div>
                </a>

                {/* Tata 1mg */}
                <a href="https://www.1mg.com/otc/shelcal-500-tablet-otc137210">
                    <div className="border flex flex-row justify-between p-4">

                        {/* site icon */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 222.000000 222.000000" preserveAspectRatio="xMidYMid meet"
                            className="rounded-full">
                                <g transform="translate(0.000000,222.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M480 1635 l0 -45 40 0 40 0 0 -64 c0 -35 3 -84 6 -110 l7 -47 56 3
                                56 3 3 107 3 107 42 3 c42 3 42 3 45 46 l3 42 -150 0 -151 0 0 -45z"/>
                                <path d="M806 1532 c-31 -81 -56 -151 -56 -155 0 -5 26 -7 58 -5 l57 3 29 83
                                c15 45 31 82 35 82 4 0 17 -33 30 -72 13 -40 28 -79 33 -85 11 -14 118 -18
                                118 -6 0 4 -26 74 -57 155 l-57 148 -66 0 -67 0 -57 -148z"/>
                                <path d="M1090 1635 l0 -45 40 0 39 0 3 -107 3 -108 60 0 60 0 3 108 3 107 39
                                0 40 0 0 45 0 45 -145 0 -145 0 0 -45z"/>
                                <path d="M1440 1598 c-17 -46 -43 -111 -56 -145 -13 -34 -24 -66 -24 -73 0 -7
                                20 -10 57 -8 55 3 58 4 70 38 43 123 52 144 57 130 2 -8 17 -50 32 -92 l27
                                -78 59 0 c52 0 59 2 54 18 -3 9 -30 78 -59 152 l-53 135 -65 3 -66 3 -33 -83z"/>
                                <path d="M600 1199 c-14 -26 -68 -59 -97 -59 -20 0 -23 -5 -23 -40 l0 -40 55
                                0 55 0 0 -180 0 -180 55 0 55 0 0 260 0 260 -45 0 c-34 0 -47 -5 -55 -21z"/>
                                <path d="M750 1165 l0 -55 485 0 485 0 0 55 0 55 -485 0 -485 0 0 -55z"/>
                                <path d="M886 1049 c-21 -17 -26 -18 -26 -5 0 13 -12 16 -55 16 l-55 0 2 -177
                                3 -178 53 -3 52 -3 0 113 c0 129 11 158 59 158 52 0 61 -24 61 -154 l0 -117
                                53 3 52 3 3 115 c2 88 6 118 19 132 19 21 66 24 81 5 7 -7 13 -66 14 -133 l3
                                -119 53 -3 52 -3 0 141 c0 157 -9 189 -60 215 -45 23 -111 19 -154 -10 -20
                                -13 -36 -20 -36 -15 0 17 -58 40 -103 40 -30 0 -53 -7 -71 -21z"/>
                                <path d="M1440 1048 c-119 -61 -119 -252 0 -313 38 -20 119 -19 148 1 21 15
                                22 14 22 -15 0 -76 -97 -114 -147 -57 -23 28 -25 28 -69 16 -24 -7 -44 -17
                                -44 -23 0 -26 45 -78 84 -96 47 -23 127 -28 173 -10 42 15 92 68 103 109 5 19
                                10 117 10 218 l0 182 -49 0 c-27 0 -51 -5 -53 -10 -2 -7 -16 -5 -40 5 -51 21
                                -86 19 -138 -7z m150 -98 c27 -27 27 -90 0 -115 -12 -11 -36 -19 -57 -19 -66
                                0 -96 73 -52 128 26 33 79 36 109 6z"/>
                                <path d="M590 595 l0 -55 360 0 360 0 0 55 0 55 -360 0 -360 0 0 -55z"/>
                                </g>
                            </svg>

                            <div className="text-xl inline text-[#2E2D28] font-medium">
                                Tata 1mg
                            </div>
                        </div>

                        {/* price */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <div className="text-xl text-[#2E2D28] font-bold">₹ 236.00</div>
                            <div className="min-w-[160px] max-h-[48px] p-2 bg-transparent hover:bg-gray-200 font-semibold border border-[#e2e8f0] rounded-lg text-[#3268B9] text-center cursor-pointer">
                                Get Free Savings
                            </div>
                        </div>
                    </div>
                </a>

                {/* Netmeds */}
                <a href="https://www.netmeds.com/prescriptions/shelcal-500mg-tablet-15-s">
                    <div className="border flex flex-row justify-between p-4">

                        {/* site icon */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 200 200" version="1.1" className="rounded-full">
                                <path d="M 61 47.387 C 57.425 48.635, 53.014 50.432, 51.197 51.381 C 46.353 53.911, 36.909 63.792, 33.783 69.601 C 21.863 91.751, 28.960 119.071, 50.082 132.340 C 53.152 134.269, 61.027 137.664, 67.582 139.885 C 74.137 142.106, 82.200 144.895, 85.500 146.081 C 88.800 147.268, 92.737 148.604, 94.250 149.050 L 97 149.860 97 136.430 L 97 123 79.500 123 L 62 123 62 105.500 L 62 88 79.500 88 L 97 88 97 68.738 L 97 49.476 89.640 47.238 C 79.879 44.270, 69.777 44.322, 61 47.387 M 132 74.981 L 132 88 147.500 88 C 156.025 88, 163 87.716, 163 87.368 C 163 85.784, 158.275 79.062, 154.097 74.702 C 149.445 69.847, 139.789 63.815, 134.750 62.616 L 132 61.962 132 74.981 M 132 138.469 C 132 156.055, 131.022 154.877, 141.500 149.905 C 150.779 145.502, 159.590 136.327, 163.782 126.703 C 164.452 125.165, 165 123.702, 165 123.453 C 165 123.204, 157.575 123, 148.500 123 L 132 123 132 138.469" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/><path d="M -0 100.005 L -0 200.010 100.250 199.755 L 200.500 199.500 200.755 99.750 L 201.010 0 100.505 0 L 0 0 -0 100.005 M 0.481 100.500 C 0.481 155.500, 0.602 178.147, 0.750 150.826 C 0.898 123.506, 0.898 78.506, 0.750 50.826 C 0.602 23.147, 0.481 45.500, 0.481 100.500 M 61 47.387 C 57.425 48.635, 53.014 50.432, 51.197 51.381 C 46.353 53.911, 36.909 63.792, 33.783 69.601 C 21.863 91.751, 28.960 119.071, 50.082 132.340 C 53.152 134.269, 61.027 137.664, 67.582 139.885 C 74.137 142.106, 82.200 144.895, 85.500 146.081 C 88.800 147.268, 92.737 148.604, 94.250 149.050 L 97 149.860 97 136.430 L 97 123 79.500 123 L 62 123 62 105.500 L 62 88 79.500 88 L 97 88 97 68.738 L 97 49.476 89.640 47.238 C 79.879 44.270, 69.777 44.322, 61 47.387 M 132 74.981 L 132 88 147.500 88 C 156.025 88, 163 87.716, 163 87.368 C 163 85.784, 158.275 79.062, 154.097 74.702 C 149.445 69.847, 139.789 63.815, 134.750 62.616 L 132 61.962 132 74.981 M 132 138.469 C 132 156.055, 131.022 154.877, 141.500 149.905 C 150.779 145.502, 159.590 136.327, 163.782 126.703 C 164.452 125.165, 165 123.702, 165 123.453 C 165 123.204, 157.575 123, 148.500 123 L 132 123 132 138.469" stroke="none" fill="#8cc454" fill-rule="evenodd"/>
                            </svg>
                            <div className="text-xl inline text-[#2E2D28] font-medium">
                                Netmeds
                            </div>
                        </div>

                        {/* price */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <div className="text-xl text-[#2E2D28] font-bold">₹ 191.00</div>
                            <div className="min-w-[160px] max-h-[48px] p-2 bg-transparent hover:bg-gray-200 font-semibold border border-[#e2e8f0] rounded-lg text-[#3268B9] text-center cursor-pointer">
                                Get Free Savings
                            </div>
                        </div>
                    </div>
                </a>

                {/* Apollo */}
                <a href="https://www.apollopharmacy.in/otc/shelcal-500mg-tablet">
                    <div className="border flex flex-row justify-between p-4">

                        {/* site icon */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 200 200" version="1.1" className="rounded-full">
                                <path d="M 61 47.387 C 57.425 48.635, 53.014 50.432, 51.197 51.381 C 46.353 53.911, 36.909 63.792, 33.783 69.601 C 21.863 91.751, 28.960 119.071, 50.082 132.340 C 53.152 134.269, 61.027 137.664, 67.582 139.885 C 74.137 142.106, 82.200 144.895, 85.500 146.081 C 88.800 147.268, 92.737 148.604, 94.250 149.050 L 97 149.860 97 136.430 L 97 123 79.500 123 L 62 123 62 105.500 L 62 88 79.500 88 L 97 88 97 68.738 L 97 49.476 89.640 47.238 C 79.879 44.270, 69.777 44.322, 61 47.387 M 132 74.981 L 132 88 147.500 88 C 156.025 88, 163 87.716, 163 87.368 C 163 85.784, 158.275 79.062, 154.097 74.702 C 149.445 69.847, 139.789 63.815, 134.750 62.616 L 132 61.962 132 74.981 M 132 138.469 C 132 156.055, 131.022 154.877, 141.500 149.905 C 150.779 145.502, 159.590 136.327, 163.782 126.703 C 164.452 125.165, 165 123.702, 165 123.453 C 165 123.204, 157.575 123, 148.500 123 L 132 123 132 138.469" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/><path d="M -0 100.005 L -0 200.010 100.250 199.755 L 200.500 199.500 200.755 99.750 L 201.010 0 100.505 0 L 0 0 -0 100.005 M 0.481 100.500 C 0.481 155.500, 0.602 178.147, 0.750 150.826 C 0.898 123.506, 0.898 78.506, 0.750 50.826 C 0.602 23.147, 0.481 45.500, 0.481 100.500 M 61 47.387 C 57.425 48.635, 53.014 50.432, 51.197 51.381 C 46.353 53.911, 36.909 63.792, 33.783 69.601 C 21.863 91.751, 28.960 119.071, 50.082 132.340 C 53.152 134.269, 61.027 137.664, 67.582 139.885 C 74.137 142.106, 82.200 144.895, 85.500 146.081 C 88.800 147.268, 92.737 148.604, 94.250 149.050 L 97 149.860 97 136.430 L 97 123 79.500 123 L 62 123 62 105.500 L 62 88 79.500 88 L 97 88 97 68.738 L 97 49.476 89.640 47.238 C 79.879 44.270, 69.777 44.322, 61 47.387 M 132 74.981 L 132 88 147.500 88 C 156.025 88, 163 87.716, 163 87.368 C 163 85.784, 158.275 79.062, 154.097 74.702 C 149.445 69.847, 139.789 63.815, 134.750 62.616 L 132 61.962 132 74.981 M 132 138.469 C 132 156.055, 131.022 154.877, 141.500 149.905 C 150.779 145.502, 159.590 136.327, 163.782 126.703 C 164.452 125.165, 165 123.702, 165 123.453 C 165 123.204, 157.575 123, 148.500 123 L 132 123 132 138.469" stroke="none" fill="#8cc454" fill-rule="evenodd"/>
                            </svg>
                            <div className="text-xl inline text-[#2E2D28] font-medium">
                                Apollo
                            </div>
                        </div>

                        {/* price */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <div className="text-xl text-[#2E2D28] font-bold">₹ 262.00</div>
                            <div className="min-w-[160px] max-h-[48px] p-2 bg-transparent hover:bg-gray-200 font-semibold border border-[#e2e8f0] rounded-lg text-[#3268B9] text-center cursor-pointer">
                                Get Free Savings
                            </div>
                        </div>
                    </div>
                </a>

                {/* Truemeds */}
                <a href="https://www.truemeds.in/otc/shelcal-500-mg250iu-tablet-15-tm-tacr1-036336">
                    <div className="border flex flex-row justify-between p-4">

                        {/* site icon */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"
                            className="border rounded-full">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#0E8F6D" stroke="none">
                                <path d="M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0
                                -2560z m3310 2012 c551 -129 949 -527 1067 -1064 25 -118 25 -409 -1 -528 -34
                                -158 -87 -288 -172 -426 -24 -39 -44 -79 -44 -89 0 -11 60 -80 139 -160 156
                                -156 180 -196 181 -286 0 -68 -19 -116 -66 -168 -74 -83 -209 -111 -302 -62
                                -44 22 -319 277 -469 434 -103 107 -117 134 -117 217 0 81 21 125 108 219 109
                                119 170 225 211 365 64 222 32 455 -90 653 -65 105 -207 245 -305 300 -244
                                136 -556 147 -807 29 -119 -57 -190 -112 -373 -291 -433 -422 -1004 -979
                                -1098 -1070 -57 -55 -126 -113 -155 -130 -45 -26 -61 -30 -122 -29 -113 2
                                -189 48 -231 139 -31 66 -33 161 -4 220 14 28 127 146 353 365 182 178 438
                                427 567 554 504 497 577 561 728 650 144 84 301 142 472 172 112 20 419 11
                                530 -14z m-753 -1997 c27 -8 68 -29 89 -46 34 -27 286 -271 923 -894 178 -174
                                211 -222 211 -305 0 -93 -23 -122 -363 -455 -357 -350 -377 -365 -488 -365
                                -81 0 -130 17 -178 63 -77 73 -104 203 -61 293 14 27 97 117 235 253 118 116
                                215 216 215 222 0 13 -22 35 -361 368 -142 138 -265 251 -274 251 -9 0 -110
                                -92 -225 -204 -238 -233 -265 -251 -375 -251 -145 1 -244 97 -253 246 -3 52 0
                                74 16 106 12 23 130 148 284 300 399 394 413 406 503 426 36 8 51 7 102 -8z"/>
                                </g>
                            </svg>
                            <div className="text-xl inline text-[#2E2D28] font-medium">
                                Truemeds
                            </div>
                        </div>

                        {/* price */}
                        <div className="flex flex-row gap-x-4 items-center">
                            <div className="text-xl text-[#2E2D28] font-bold">₹ 210.00</div>
                            <div className="min-w-[160px] max-h-[48px] p-2 bg-transparent hover:bg-gray-200 font-semibold border border-[#e2e8f0] rounded-lg text-[#3268B9] text-center cursor-pointer">
                                Get Free Savings
                            </div>
                        </div>
                    </div>
                </a>

            </div>

            <Pincode  isVisible={showModal} onClose={() => setShowModal(false)}/>
        </div>
    </div>
  );
}