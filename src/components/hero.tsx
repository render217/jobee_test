"use client";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

import SearchBar from "./shared/searchbar";
import Image from "next/image";

export default function Hero({
    className,
}: {
    className?: React.CSSProperties | ClassValue | string;
}) {
    return (
        <section className={cn("mt-5", className)}>
            <div className="relative ">
                <div className="rounded-4xl overflow-hidden size-full  max-h-[80vh]">
                    {/* background image */}
                    <Image
                        width={1000}
                        height={1000}
                        className="size-full object-cover"
                        src="/hero_bg.png"
                        alt=""
                    />

                    {/* left  */}
                    <div
                        className="hidden sm:block  absolute top-10 left-10   p-4 bg-black/5 backdrop-blur-xl shadow-md rounded-lg"
                        style={{
                            clipPath: `polygon(100% 0, 100% 50%, 85% 100%, 0 100%, 0 0)`,
                        }}>
                        <p className="uppercase font-bold lg:text-4xl xl:text-5xl text-white text-2xl leading-relaxed ">
                            find the{" "}
                            <span className="text-clr-slimeGreen">
                                {" "}
                                talent{" "}
                            </span>
                            sign up <br /> & get the{" "}
                            <span className="text-clr-slimeGreen">
                                job
                            </span>{" "}
                            done
                        </p>
                    </div>

                    {/* right */}

                    <div
                        className="hidden sm:block absolute top-34 md:top-24 lg:top-36 right-10 pl-14 pr-2 pb-6 pt-6 bg-black/5 backdrop-blur-xl rounded-lg"
                        style={{
                            clipPath: `polygon(18% 0, 200% 0, 200% 200%, 0 200%, 0 44%)`,
                        }}>
                        <div className="relative  w-[250px] lg:w-[350px] xl:w-[440px]">
                            <p className="mb-2 capitalize lg:text-4xl xl:text-5xl font-bold text-white  text-2xl leading-loose  ">
                                We'll{" "}
                                <span className="text-clr-slimeGreen">
                                    {" "}
                                    handle{" "}
                                </span>{" "}
                                that
                            </p>
                            <div className=" absolute -bottom-14  flex items-center gap-2 w-full mx-auto  ">
                                <p className="bg-clr-slimeGreen text-sm lg:text-lg text-center rounded-full flex-1 text-clr-darkFern px-2 py-3  capitalize">
                                    Sign Up for Contract
                                </p>
                                <span className="grid  bg-white size-12 rounded-full place-content-center cursor-pointer">
                                    <Image
                                        width={10}
                                        height={10}
                                        className="size-5"
                                        src="/play_icon.svg"
                                        alt=""
                                    />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block absolute bottom-20 w-full left-1/2 transform -translate-x-1/2 z-10">
                        <SearchBar className="md:max-w-[600px] lg:max-w-[800px] w-full mx-auto" />
                    </div>

                    {/* dotted  */}
                    <div className="absolute  md:-bottom-2 -bottom-6 left-1/2 transform -translate-x-1/2 z-10 ">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="size-2 md:size-3 block bg-clr-slimeGreen rounded-full"></span>
                            <span className="size-2 md:size-3 block bg-clr-slimeGreen/40 rounded-full"></span>
                            <span className="size-2 md:size-3 block bg-clr-slimeGreen/40 rounded-full"></span>
                            <span className="size-2 md:size-3 block bg-clr-slimeGreen/40 rounded-full"></span>
                            <span className="size-2 md:size-3 block bg-clr-slimeGreen/40 rounded-full"></span>
                        </div>
                        <p className="uppercase shadow-2xl  rounded-full font-bold text-sm  md:text-lg  text-center  bg-white px-6 py-3 min-w-[240px]">
                            Education and Tutoring
                        </p>
                    </div>

                    <div
                        className="hidden md:block absolute -bottom-1 w-full h-40 bg-clr-whiteSmoke shadow"
                        style={{
                            clipPath:
                                "polygon(50% 76%, 100% 99% , 100% 100%, 0 100%, 0 100%)",
                        }}
                    />
                </div>
            </div>

            <div className="sm:hidden flex flex-wrap mt-12 gap-4 ">
                <div
                    className="bg-clr-gullGrey w-fit mx-auto  p-4 backdrop-blur-xl shadow-md rounded-lg"
                    style={{
                        clipPath: `polygon(100% 0, 100% 50%, 85% 100%, 0 100%, 0 0)`,
                    }}>
                    <p className="uppercase font-bold text-white text-lg leading-relaxed ">
                        find the{" "}
                        <span className="text-clr-slimeGreen"> talent </span>
                        sign up <br /> & get the{" "}
                        <span className="text-clr-slimeGreen">job</span> done
                    </p>
                </div>

                <div
                    className="w-fit  pl-3 pr-3 mx-auto pb-6 pt-6 bg-clr-gullGrey backdrop-blur-xl rounded-lg "
                    style={{
                        clipPath: `polygon(18% 0, 200% 0, 200% 200%, 0 200%, 0 44%)`,
                    }}>
                    <div className="relative ml-auto  w-[250px]">
                        <p className="mb-2 capitalize font-bold text-white text-right  text-lg leading-loose  ">
                            We'll{" "}
                            <span className="text-clr-slimeGreen">
                                {" "}
                                handle{" "}
                            </span>{" "}
                            that
                        </p>
                        <div className=" absolute -bottom-12  flex items-center gap-2 w-full mx-auto  ">
                            <p className="bg-clr-slimeGreen text-sm text-center rounded-full flex-1 text-clr-darkFern px-1 py-2  capitalize">
                                Sign Up for Contract
                            </p>
                            <span className="grid  bg-white size-10 rounded-full place-content-center cursor-pointer">
                                <Image
                                    width={5}
                                    height={5}
                                    alt=""
                                    className="size-5"
                                    src="/play_icon.svg"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 block md:hidden">
                <SearchBar className=" w-full mx-auto" />
            </div>
        </section>
    );
}
