'use client'
import { cn } from "@/lib/utils";
import { Popover } from "@radix-ui/react-popover";
import { ClassValue } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDown } from 'lucide-react'
import { Button } from "../ui/button";
const languagesData = [
    {
        name: "English",
        code: "en",
        img: '/england_icon.svg'
    },
    {
        name: "Greece",
        code: "gc",
        img: '/greece_icon.svg'
    },
]
export default function Navbar({
    className,
}: {
    className?: React.CSSProperties | ClassValue | string;
}) {
    const [languages, _] = useState(languagesData)
    const [selectedLanguage, setSelectedLanguage] = useState(languagesData[0]);
    return (
        <header className={cn("bg-black rounded-full", className)}>
            <div className=" p-4 flex items-center ">
                <Image
                    className=""
                    src="/logo.svg"
                    alt="Jobwhee logo"
                    width={148}
                    height={32}
                    priority
                />
                <nav className="hidden md:flex flex-1  justify-center items-center">
                    <ul className=" flex justify-center  gap-4 lg:gap-8 w-full">
                        <li>
                            <Link className='text-white text-[16px] ' href={'#'}>Post a Job</Link>
                        </li>
                        <li>
                            <Link className='text-white text-[16px] ' href={'#'}>Explore Jobs</Link>
                        </li>
                        <li>
                            <Link className='text-white text-[16px] ' href={'#'}>How it works</Link>
                        </li>

                    </ul>
                </nav>
                <div className="hidden md:block">
                    <Popover >
                        <PopoverTrigger asChild>
                            <div className="text-white flex min-w-[72px] px-2 py-2  items-center border border-clr-blackCow rounded-full  ">
                                <Image
                                    src={selectedLanguage.img}
                                    height={24}
                                    width={24}
                                    alt={selectedLanguage.name} />
                                <span className="capitalize block ml-2 mr-1 text-12">{selectedLanguage.code}</span>
                                <ChevronDown className="size-4 " />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="bg-black w-[140px] rounded-xl border border-clr-blackCow px-1 py-1">
                            {languages.map((language, idx) => (
                                <div key={language.code}>
                                    <button
                                        className="flex items-center gap-2 p-2  w-full"
                                        onClick={() => {
                                            setSelectedLanguage(language);
                                            // Optionally close the popover after selection
                                        }}
                                    >
                                        <Image
                                            src={language.img}
                                            height={24}
                                            width={24}
                                            alt={language.name}
                                        />
                                        <span className="capitalize text-white   text-sm sm:text-base ">{language.name}</span>
                                    </button>
                                    {idx !== languages.length - 1 && (
                                        <div className="border-t border-clr-blackCow mx-2" />
                                    )}
                                </div>
                            ))}
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex items-center gap-3 ml-auto md:ml-4">
                    <Button size='sm' className="hidden  py-5 px-6 lg:grid place-content-center cursor-pointer rounded-full  text-white border border-clr-blackCow">
                        Sign In
                    </Button>
                    <Button size='sm' className="  py-5 px-6 sm:grid place-content-center  cursor-pointer rounded-full text-black  hover:bg-white/90  bg-white  border border-clr-blackCow">
                        Sign Up
                    </Button>
                    <Button size='icon' className="grid place-content-center md:hidden bg-white hover:bg-white/90 cursor-pointer">
                        <Image
                            src="/menu_icon.svg"
                            alt="Menu"
                            width={24}
                            height={24}
                        />
                    </Button>

                </div>

            </div>
        </header>
    );
}