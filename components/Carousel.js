import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import Card from "./Card";


export default function Carousel({name, tabs, cost, discount, src}) {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={3} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        {/* <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full '>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full'>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <Card />
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full'>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full'>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full'>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full'>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full'>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full'>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full'>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className='bg-[#E0E0E0] rounded-[20px] flex flex-col items-center w-full'>
        <div className='w-[222px] h-[222px] flex items-center mt-[-30%]'>
            <Image src={src} width={300} height={300} alt='no-image' className='rounded-full bg-[#EBDCA51F]'/>
        </div>
        <div className='mx-5  flex flex-col items-center mt-6 mb-10 px-2'>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
              {name}
          </div>
          <div className='text-2xl text-[#302F2C] text-center font-semibold w-max mb-6'>
            {tabs}
          </div>
          <div className='text-3xl text-[#302F2C] text-center font-semibold w-max'>
            MRP: <span className='line-through decoration-[#AE2F1D]'>{cost}</span> {discount}
          </div>
        </div>
    </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}

// import Script from "next/script";
// import React, { useState, useEffect } from "react";

// const Slider=()=>{
//   return(
//     <>
//     <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
//   <div className="w-full relative flex items-center justify-center">
//     <button
//       aria-label="slide backward"
//       className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
//       id="prev"
//     >
//       <svg
//         className="dark:text-gray-900"
//         width={8}
//         height={14}
//         viewBox="0 0 8 14"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M7 1L1 7L7 13"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </button>
//     <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//       <div
//         id="slider"
//         className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
//       >
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/fDngH9G/carosel-1.png"
//             alt="black chair and white table"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 1
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/DWrGxX6/carosel-2.png"
//             alt="sitting area"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/tCfVky2/carosel-3.png"
//             alt="sitting area"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/rFsGfr5/carosel-4.png"
//             alt="sitting area"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/fDngH9G/carosel-1.png"
//             alt="black chair and white table"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/DWrGxX6/carosel-2.png"
//             alt="sitting area"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/tCfVky2/carosel-3.png"
//             alt="sitting area"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/rFsGfr5/carosel-4.png"
//             alt="sitting area"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/fDngH9G/carosel-1.png"
//             alt="black chair and white table"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/DWrGxX6/carosel-2.png"
//             alt="sitting area"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/tCfVky2/carosel-3.png"
//             alt="sitting area"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//           <img
//             src="https://i.ibb.co/rFsGfr5/carosel-4.png"
//             alt="sitting area"
//             className="object-cover object-center w-full"
//           />
//           <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//             <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
//               Catalog 2
//             </h2>
//             <div className="flex h-full items-end pb-6">
//               <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
//                 Minimal Interior
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <button
//       aria-label="slide forward"
//       className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
//       id="next"
//     >
//       <svg
//         className="dark:text-gray-900"
//         width={8}
//         height={14}
//         viewBox="0 0 8 14"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M1 1L7 7L1 13"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </button>
//   </div>
// </div>

//     </>
//   )
// }
// export default Slider;


// import dynamic from "next/dynamic";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// // let productsp = [
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// //   {
// //     id: 1,
// //     name: "Product Number 1",
// //     brand: "Brand Name",
// //     url: "products-number-1",
// //     price: 100,
// //   },
// // ];
// // var $ = require("jquery");
// // if (typeof window !== "undefined") {
// //   window.$ = window.jQuery = require("jquery");
// // }

// // const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
// //   ssr: false,
// // });


// const Slider = () => {
//   const options = {
//     margin: 30,
//     responsiveClass: true,
//     nav: true,
//     dots: true,
//     autoplay: false,
//     smartSpeed: 1000,
//     navClass: ["owl-prev", "owl-next"],
//     navText: [
//       '<i class="fas fa-angle-left"></i>',
//       '<i class="fas fa-angle-right"></i>',
//     ],
//     responsive: {
//       0: {
//         items: 1,
//       },
//       400: {
//         items: 1,
//       },
//       600: {
//         items: 2,
//       },
//       700: {
//         items: 3,
//       },
//       1000: {
//         items: 4,
//       },
//     },
//   };

//   return (
//     <div className="row no-gutters">
//       <div
//         className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
//         id="owl-carousel-products"
//       >
//         <h3 className="text-center">
//           <span className="heading float-left w-100">Featured Products</span>
//         </h3>
//         <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
//           <OwlCarousel
//             className="owl-theme"
//             loop
//             margin={3}
//             nav={true}
//             navText={[
//               '<img src="/images/Arrow_left.png" />',
//               '<img src="/images/Arrow_right.png" />',
//             ]}
//             dots={false}
//             animateIn={true}
//             {...options}
//           >
//             {productsp && productsp.length > 0
//               ? productsp.map((product) => {
//                   return (
//                     <>
//                       <div
//                         id="featuredProducts"
//                         className="item float-left w-100"
//                         key={product.name}
//                       >
//                         <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
//                           <a href={product.url}>
//                             <a className="product float-left">
//                               <span className="image text-center">
//                                 <img
//                                   id={"img" + product.id}
//                                   src="/images/product.jpg"
//                                   alt={product.name}
//                                   title={product.name}
//                                 />
//                               </span>
//                               <span className="w-100 text-center mt-1 ">
//                                 <h5 className="brand text-capitalize float-left">
//                                   {product.brand}
//                                 </h5>
//                                 <span className="name">{product.name}</span>
//                                 <strong className="itemPrice p-0">
//                                   Price: {product.price}
//                                 </strong>
//                               </span>
//                             </a>
//                           </a>
//                         </div>
//                       </div>
//                     </>
//                   );
//                 })
//               : ""}
//           </OwlCarousel>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Slider;

