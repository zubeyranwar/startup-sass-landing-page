'use client'
import Image from 'next/image'
const Feature = ({title,subtitle,photo}) => {
  return (
    <div className='flex flex-col gap-6 w-1/4' >
        <div className='w-[90px] h-[90px] rounded-full flex justify-center items-center shadow-lg'>
            <Image src={photo} width='46' height='52' />
        </div>
        <h3 className='font-[700] text-[18px] text-[#012137]'>{title} </h3>
        <p className='w-[255px]'>{subtitle}</p>
    </div>
  )
}

export default Feature