'use client'
import {useState} from 'react'
import Image from 'next/image'
import hero from './assets/hero.png'
import drobbox from './assets/drobbox.png'
import paypal from './assets/paypal.png'
import google from './assets/google.png'
import { achievenments, features, featureDetails, pricings } from './constant'
import Feature from './components/Feature'
import FeatureDetail from './components/FeatureDetail'
import Card from './components/Card'
import Link from 'next/link'
import check from './assets/check.png'
import video from './assets/video.png'
import pause from './assets/pause.png'
import adam from './assets/adam.png'
import Model from './components/Model'
import Pricing from './components/Pricing'
import Accordion from './components/Accordion'

export default function Home() {
  const [isModelOpen,setIsModelOpen] = useState(false)
  const [value,setValue] = useState(0)

  return (
    <main>
      <section className='flex justify-between  items-start container mx-auto p-5 px-[160px]'>
        <div className='mt-5'>
          <h1 className='max-w-md leading-[79px] font-[700] text-[60px] text-[#02073e]'>Professional Communication For Your Team</h1>
          <p className='max-w-sm mt-[19px] text-[18px]  leading-loose text-[#02073E]'>Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
          <button className='px-8 py-4 bg-[#28DDB2] mt-7 rounded-[8px] text-white font-bold transition-bg ease-in-out delay-3 duration-300 hover:bg-[#10132D]'>Explore Now</button>
          <div className='flex space-x-4 mt-8'>
            <Image src={paypal}  width="100" height="28"/>
            <Image src={google}  width="85" height="28"/>
            <Image src={drobbox} width="123" height="24"/>
          </div>
        </div>
        <div className=''>
          <Image className='max-w-full h-auto' src={hero} width="600" height="570" />
        </div>
      </section>
      <section id="feature"  className='min-h-screen container mx-auto p-5 px-[160px]'>
        <div className='flex flex-col items-center mt-[8rem]'>
          <h2 className='text-[#0F2137] font-[500] text-3xl mb-4'>Go Beyond unlimited features</h2>
          <p className='text-[16px] w-1/2 text-center leading-8 font-[400]'>Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.</p>
        </div>
        <div className='flex mt-[5.5rem] '>
          {
            features.map((feature,index)=>{
              return <Feature key={index}  {...feature} />
            })
          }
        </div>
      </section>
      <section className='min-h-screen bg-[#F9FBFD] flex  items-center gap-[122px] py-[65px] px-[160px]'>
        <div className='flex gap-10 '>
          <div className='flex flex-col gap-10 mt-[64px]'>
            {
              achievenments[0].map((achievement, index)=>{
                return <Card key={index} {...achievement} />
              })
            }
          </div>
          <div className='flex flex-col gap-10'>
            {
              achievenments[1].map((achievement, index)=>{
                return <Card key={index} {...achievement} />
              })
            }
          </div>
        </div>
        <div className=''>
          <h1 className='text-[40px] font-[500] mb-[15px]'>Smart Jackpots that you may love this anytime & anywhere</h1>
          <p className='leading-8 mb-[20px] text-[#0F2137]' >Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
          <ul className='text-[16px] my-[24px]'>
            <li className='mb-[13px] flex items-center '>
              <Image className='mr-[10px]' src={check} width="20" height="20"/>
              Unlimited design possibility
            </li>
            <li className='flex items-center'>
              <Image className='mr-[10px]' src={check} width="20" height="20"/>
              Completely responsive features
            </li>
          </ul>

          <div className='mt-[40px]'>
              <Link href="#" class="inline-flex items-center group text-[#4f96ff] text-[16px] font-[500]">
              Explore more
              <svg class="w-4 h-4 ml-1 transition-transform ease-in-out duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className='min-h-screen container mx-auto p-5 px-[160px]'>
        <div className='flex flex-col items-center mt-[96px]'>
          <h2 className='text-[#0F2137] font-[500] px-[15rem] text-center text-3xl mb-4 leading-[45px]'>Leading companies trust us to develop most powerful software with our talent team</h2>
          <p className='text-[16px] w-1/2 text-center leading-8'>Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression.</p>
          <div className='mt-[40px]'>
              <Link href="#" class="inline-flex items-center group text-[#4f96ff] text-[16px] font-[500]">
              Explore more
              <svg class="w-4 h-4 ml-1 transition-transform ease-in-out duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
          <div className='relative'>
            <Image src={video} width="1083" height="650" className='max-w-full' />
            {/* hi */}
            <div className='absolute bottom-[94px] left-[45%]'>
              <button className='flex items-center text-white gap-2 font-[700]' onClick={()=>setIsModelOpen(prev=>!prev)}><Image src={pause} width="20" height="20"/>Watch Full video</button>
            </div>
            {
              isModelOpen && <Model onClose={()=>setIsModelOpen(false)}/>
            }
          </div>
        </div>
      </section>
      <section className='min-h-screen bg-[#F9FBFD] flex flex-col  gap-[122px] py-[65px] px-[160px]'>
      <div className='flex flex-col items-center mt-[8rem]'>
          <h2 className='text-[#0F2137] font-[500] text-3xl mb-4'>Go Beyond unlimited features</h2>
          <p className='text-[16px] w-1/2 text-center leading-8  font-[400]'>Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.</p>
      </div>
      <div className="grid grid-cols-2 gap-10" >
          {
            featureDetails.map((item,index)=>{
              return <FeatureDetail key={index} {...item} />
            })
          }
      </div>
      </section>
      <section className='min-h-screen bg-[#fff7f5] flex  items-center gap-[122px] py-[65px] px-[160px]'>
        <div className='w-full h-auto'>
          <Image className='max-w-full h-auto' width="500" height="766" src={adam} />
        </div>
        
        <div className=''>
            <h1 className='text-[40px] font-[500] mb-[15px]'>Ultimate widgets of collection that will be used anywhere</h1>
            <p className='leading-8 mb-[20px] text-[#0F2137]' >Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
            <ul className='text-[16px] my-[24px] font-[500]'>
              <li className='mb-[13px] flex items-center '>
                <Image className='mr-[10px]' src={check} width="20" height="20"/>
                Unlimited design possibility
              </li>
              <li className='flex items-center'>
                <Image className='mr-[10px]' src={check} width="20" height="20"/>
                Completely responsive features
              </li>
            </ul>

            <div className='mt-[40px]'>
                <Link href="#" class="inline-flex items-center group text-[#4f96ff] text-[16px] font-[500]">
                Explore more
                <svg class="w-4 h-4 ml-1 transition-transform ease-in-out duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
      </section>
      <section className='min-h-screen container mx-auto p-5 px-[160px]'>
        <div className='flex flex-col items-center mt-[96px]'>
          <h2 className='text-[#0F2137] font-[500] px-[15rem] text-center text-3xl mb-4 leading-[45px]'>What deal suit you perfect</h2>
          <p className='text-[16px] w-1/2 text-center leading-8  font-[400]'>Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.</p>
          <div className='relative w-[300px] h-[65px] bg-[#F7F8FB] mt-[50px] flex justify-around items-center rounded-[5px] p-[8px]'>
            <button style={{backgroundColor:value===0 && 'white'}} className='p-[8px_25px] rounded-[5px] whitespace-nowrap'  onClick={()=>setValue(0)}>Monthly Plan</button>
            <button style={{backgroundColor:value===1 && 'white'}} className='p-[8px_25px] rounded-[5px]  whitespace-nowrap' onClick={()=>setValue(1)}>Annual Plan</button>
            <div className='absolute top-[-15%] left-[60%] rounded-[25px] px-[8px] text-[13px] font-[700] bg-[#28DDB2] text-white whitespace-nowrap '>Save 20%</div>
          </div>
          <div className='flex gap-8 mt-[80px]'> 
              {value ===0 &&
                  pricings[0].map((pricing, index)=>{
                    return (
                      <Pricing key={index} {...pricing} />
                    )
                  })
                }
            
              {value ===1 &&
                pricings[1].map((pricing, index)=>{
                  return (
                    <Pricing key={index} {...pricing} />
                  ) 
                })
              }
            
          </div>
        </div>
      </section>
      <section className='min-h-screen container mx-auto  px-[160px]'>
        <div className='flex flex-col items-center mt-[192px]'>
          <h2 className='text-[#0F2137] font-[500] px-[15rem] text-center text-3xl mb-4 leading-[45px]'>Do you have any quesiton</h2>
          <p className='text-[16px] w-1/2 text-center leading-[35px] mb-0'>Our support team ready to help you, please contact with them</p> 
          <Accordion />
        </div>
      </section>
    </main> 
  )
}
