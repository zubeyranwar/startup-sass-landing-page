import Link from 'next/link'
import Image from 'next/image'
import logo from '.././assets/logo.svg'
import { footerLinks } from '../constant'

const Footer = () => {
  return (
    <footer className="flex flex-col h-auto pt-[3px] mt-0 container mx-auto bg-[#F9FAFC]">
      <div className="grid grid-cols-5 px-[30px] mx-[130px]">
        {
          
          footerLinks.map((item,index)=>{
            const {catagory,links} = item 
            return (
              <div key={index} className='mt-[48px] pr-[50px]'>
                <h3 className='text-[18px] font-[500] mb-[28px] text-[#0f2137]'>{catagory}</h3>
                <ul>
                  {
                    links.map((link,index)=>{
                      const {title,destination}=link
                      return (
                        <li key={index}><Link href={destination} className='text-[14px] leading-[35px] text-[#02073e] opacity-[80%] py-[38px]'>{title}</Link></li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
      <nav className="relative container mx-auto pt-[50px] px-[160px]" aria-label='footer navigation'>  
        <div className="flex justify-between items-center pt-[30px] pb-[40px] border-t-[1px] border-[#D9E0E7]">
            <div className="flex items-center max-w-full gap-9" >
                <Link href="/" >
                    <Image src={logo} width="185" height="auto" className='mb-1'/>
                </Link>
                <span className='text-[14px] leading-1 text-[#0f2137] opacity-[60%]'>Copyright by 2023 RedQ, Inc</span>
            </div>
            <ul className="flex space-x-8 list-none text-[14px] text-[#02073e] leading-2">
                <li><Link href="/" className="">Home</Link></li>
                <li><Link href="#feature" className="">Advertise</Link></li>
                <li><Link href="#pricing" className="">Supports</Link></li>
                <li><Link href="#Marketing" className="">Marketing</Link></li>
                <li><Link href="#Faq" className="">FAQ</Link></li>
            </ul>
        </div>
      </nav>
    </footer>
  )
}

export default Footer