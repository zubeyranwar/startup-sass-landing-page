import check from '../assets/check.png'
import uncheck from '../assets/uncheck.png'
import Image from 'next/image'

const Pricing = ({title,subtitle,pricing,isRecommeded,features}) => {
  return (
    <div className="bg-white px-[21px] py-[80px] flex flex-col max-w-[500px] pr-[140px] shadow-[0_25px_100px_0px_rgba(69,88,157,0.08)] border-[#F3F4F5] border-solid border-[1px] rounded-[10px] inset-0 last:border-[#28DDB2] last:border-[3px] relative ">
        <div className='last:relative '>
            <div className='flex'>
                <div className='flex flex-col animate-fade'>
                    <h3 className='text-[22px] text-[#343D48] font-[700] mb-3'>{title}</h3>
                    <h4 className='mb-12'>{subtitle}</h4>
                </div>
                {title==="Premium" && <div className='absolute top-1 left-[300px] whitespace-nowrap'>Starting from <span className='text-[#28DDB2] font-[700] text-[26px] block'>{pricing}</span></div>}
            </div>
            {isRecommeded && <div className='absolute top-[-43px] left-0 bg-[#EF9E48] text-[14px] font-[700] leading-[21px] text-[#FFFDF4] px-[6px] py-[5px] z-10 rounded-[3px]'>Recommended</div>}
            <ul className="flex flex-col animate-fade-up animate-once">
            {
                features.map((feature,index)=>{
                    const isAvailable = feature.available
                    return (
            
                            <li key={index} className='mb-[13px] pb-4 flex items-center leading-12' style={{color:!isAvailable && '#ACB0B4' }}>
                                <Image className='mr-[10px]' src= {isAvailable  ? check: uncheck} width="20" height="20"/>
                                {feature.feature}
                            </li>
            
                    )
                })
            }
            </ul>
            <button className='place-self-center mt-12 font-[700] bg-[#FCF2E8] text-[#EF9E48] transition-bg ease-in-out delay-3 duration-500 hover:bg-[#EF9E48] hover:text-[#FCF2E8] px-5 py-3 rounded-[5px]'>{title === "Free Plan" ? "Start free trail" :"Subscribe Now"}</button>
        </div>
    </div>
  )
}

export default Pricing