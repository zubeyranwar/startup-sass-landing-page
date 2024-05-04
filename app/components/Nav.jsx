"use client";

import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from ".././assets/logo.svg";
import { navLinks } from "../constant";

const Nav = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <nav className="relative container mx-auto pt-[20px] px-[160px]">
      <div className="flex justify-between items-center">
        <div className="max-w-full">
          <Link href="/">
            <Image src={logo} width="185" height="auto" />
          </Link>
        </div>
        <ul className="flex space-x-8 list-none">
          {navLinks.map((link) => (
            <li>
              <Link
                href={link.href}
                key={link.label}
                className={classnames({
                  "text-zinc-900": link.href === currentPath,
                  "text-zinc-500": link.href !== currentPath,
                  "hover:text-zinc-700 transition-colors": true,
                  "text-[16px]":true
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* <li><Link href="/" className={linkStyle}>Home</Link></li>
                <li><Link href="#feature" className="" >Feature</Link></li>
                <li><Link href="#pricing" className="">Pricing</Link></li>
                <li><Link href="#Faq" className="">Faq</Link></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
