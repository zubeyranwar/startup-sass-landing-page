import { useState } from "react"
import { faqs } from "../constant"
const Accordion = () => {

  const [accordion, setActiveAccordion]= useState(-1)

  function toogleAccordion(index){
    if(index === accordion){
      setActiveAccordion(-1)   //index = -1 = 
    }
    setActiveAccordion(index)  
  }

  return (
      <div className="w-[65%] mt-[20px] text-[16px]">
        {
          faqs.map((faq,index)=>{
            return ( 
              <div className="mt-[36px] transition-all"  key={index} onClick={()=>toogleAccordion(index)}>  
                  <div className="flex items-center pb-3 gap-3">
                    <div className="flex justify-center items-center bg-[#28DDB2] w-[20px] h-[20px] cursor-pointer text-white rounded-full"> 
                      {
                        accordion === index ? (
                            <span className="text-[20px] font-[500] text-white">-</span>
                        ):(
                            <span className="font-[500] text-[20px] ">+</span>
                        )
                      }
                    </div>
                    <div>
                      <h3 className="cursor-pointer text-[20px] text-[#3A3D48] font-[500] leading-[36px]">{faq.question}</h3>
                    </div>
                  </div>
                  <div className="border-b-[1px]">
                      <p className="ml-[5%] text-[16px] leading-[32px] mt-12px transition-all duration-250" style={{display:accordion === index ? "block" : "none"}}>{faq.answer}</p>
                  </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default Accordion