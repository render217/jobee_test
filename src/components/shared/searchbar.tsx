import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

import Image from "next/image";
import { ChevronDown, Search } from 'lucide-react'
import { useState } from "react";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
const searchOption = [
    {
        name: "Talent",
        desc: "Hire professionals effortlessly.",
        img: '/talent_icon.svg'
    },
    {
        name: "Client",
        desc: "Apply to jobs posted by clients",
        img: '/client_icon.svg'
    },
]

export default function SearchBar({
    className,
}: {
    className?: React.CSSProperties | ClassValue | string;
}) {
    const [searchOptions, _] = useState(searchOption);
    const [selectedOption, setSelectedOption] = useState(searchOption[0])
    return (
        <div className={cn("", className)}>
            <div className='bg-white rounded-full gap-2 flex p-2'>
                <div className='grid  p-2  place-content-center bg-black rounded-full border '>
                    <Search className="text-white size-5" />
                </div>
                <input type="text" className="w-full outline-none border-none md:text-lg px-2 text-clr-smokyGrey" placeholder='Find a job, talent or service' />
                <div>
                    <Popover>
                        <PopoverTrigger asChild >
                            <div className="flex px-3 cursor-pointer  items-center gap-2 rounded-full border  bg-white size-full">
                                <span className="md:text-base text-sm">{selectedOption.name}</span>
                                <ChevronDown className="size-4 " />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="bg-white w-[220px] rounded-xl shadow px-1 py-1">
                            {searchOptions.map((option, idx) => (
                                <div key={option.name}>
                                    <button
                                        className={cn("flex items-start hover:bg-black/5 rounded-md gap-2 p-2  w-full cursor-pointer")}
                                        onClick={() => {
                                            setSelectedOption(option);
                                        }}
                                    >
                                        <Image
                                            src={option.img}
                                            height={24}
                                            width={24}
                                            alt={option.name}
                                        />
                                        <div className="flex flex-col items-start gap-1 ">
                                            <span className="capitalize text-black   text-sm font-semibold ">{option.name}</span>
                                            <span className="text-[10px] block text-left">{option.desc}</span>
                                        </div>

                                    </button>
                                    {idx !== searchOptions.length - 1 && (
                                        <div className="border-t border-clr-blackCow mx-2" />
                                    )}
                                </div>
                            ))}
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
}