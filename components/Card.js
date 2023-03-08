import Image from "next/image"

const Card = ({name, tabs, cost, discount, src}) => {
  return (
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
  )
}

export default Card