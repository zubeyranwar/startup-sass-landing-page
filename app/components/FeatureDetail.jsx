'use cli'
import Image from "next/image"
const FeatureDetail = ({title,subtitle,photo}) => {
  return (
    <div className="flex gap-8">
        <div className='w-[90px] h-[90px] rounded-full flex justify-center items-center shadow-lg'>
                <Image src={photo} width='46' height='52' />
        </div>
        <div className="flex-1">
            <h3 className='font-[500] text-[18px] text-[#0f2137]'>{title} </h3>
            <p className='text-[#343d48] mt-[20px] leading-[30px]'>{subtitle}</p>
        </div>
    </div>
  )
}

export default FeatureDetail