'use client'

import Link from "next/link"
import Image from "next/image"
import logo from '.././assets/logo.svg'

const Nav = () => {
  return (
    <nav className="relative container mx-auto pt-[20px] px-[160px]">  
        <div className="flex justify-between items-center">
            <div className="max-w-full">
                <Link href="/" >
                    <Image src={logo} width="185" height="auto" />
                </Link>
            </div>
            <ul className="flex space-x-8 list-none">
                <li><Link href="/" className="text-[#28DDB2] hover:text-[#28DDB2] focus:text-[#28DDB2]">Home</Link></li>
                <li><Link href="#feature" className="hover:text-[#28DDB2] focus:text-[#28DDB2]">Feature</Link></li>
                <li><Link href="#pricing" className="focus:text-[#28DDB2] hover:text-[#28DDB2]">Pricing</Link></li>
                <li><Link href="#Faq" className="focus:text-[#28DDB2] hover:text-[#28DDB2]">Faq</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav