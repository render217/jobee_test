import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

import Image from 'next/image';

export default function ContractCard({
    className,
}: {
    className?: React.CSSProperties | ClassValue | string;
}) {
    return (
        <div className={cn("p-4 bg-white rounded-md relative", className)}>

            <div className='bg-clr-porcelain absolute top-0 left-0 w-[160px] h-[48px] xs:h-[58px]'
                style={{
                    clipPath: `polygon(0 0, 100% 0%, 80% 100%, 0% 100%)`
                }}
            >
            </div>

            <div className="flex mb-4 flex-col gap-4 xs:flex-row xs:justify-between xs:items-start">
                <div className="z-20">
                    <p className="font-bold text-lg">Contract</p>
                </div>
                <div >
                    <p className="font-bold text-[16px]">Looking For Math Teacher</p>
                    <p className="text-sm">
                        <span className="font-semibold mr-2 ">Payment Type:</span>
                        <span >Fixed Price</span>
                    </p>
                </div>
            </div>

            <div className="flex gap-4  flex-col mb-3 xs:flex-row ">
                <div className='flex-1 bg-clr-whiteSmoke rounded-md p-3'>
                    <div className='flex gap-5 mb-2 '>
                        <Image width={32} height={32} alt='' src='/client_photo.png' className="size-12  bg-black rounded-full block mx-auto" />
                        <div className='flex-1 flex flex-col'>
                            <span className="block self-end px-4 w-fit sm:w-full text-center  bg-clr-linkWater rounded-lg ">Client</span>
                            <div className='flex justify-end items-center gap-1'>
                                <Image width={10} height={10} className="size-5" src="/star_icon.svg" alt="" />
                                <span className="text-lg font-bold">5.0</span>
                            </div>
                        </div>
                    </div>
                    <h2 className="font-semibold leading-[22px]">Edward Smith</h2>
                    <p className=" font-light  text-sm text-gray-500">Founder of MathTech</p>
                </div>

                <div className='flex-1 bg-clr-whiteSmoke rounded-md p-3'>
                    <div className='flex gap-5 mb-2'>
                        <Image width={32} height={32} alt='' src='/talent_photo.png' className="size-12  bg-black rounded-full block mx-auto" />
                        <div className='flex-1 flex flex-col'>
                            <span className=" block self-end px-4 w-fit sm:w-full text-center  bg-clr-slimeGreen rounded-lg ">Talent</span>
                            <div className='flex justify-end items-center gap-1'>
                                <Image width={10} height={10} className="size-5" src="/star_icon.svg" alt="" />
                                <span className="text-lg font-bold">5.0</span>
                            </div>
                        </div>
                    </div>
                    <h2 className="font-semibold leading-[22px]">Edward Smith</h2>
                    <p className=" font-light  text-sm text-gray-500">Math Teacher</p>
                </div>
            </div>
            {/* description  */}
            <div className="mb-3">
                <div className="flex items-center gap-2 mb-1.5">
                    <span className="grid place-content-center rounded-full p-1 bg-black">
                        <Image width={5} height={5} className="size-3" src="/description_icon.svg" alt="" />
                    </span>
                    <span className="font-semibold text-black block">
                        Description
                    </span>
                </div>
                <p className="text-clr-blackCow text-sm">We are looking for a teacher to provide one-on-one
                    algebra and geometry tutoring, 60-minute sessions,
                    twice weekly.
                </p>
            </div>
            {/* job details */}
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-1.5">
                    <span className="grid place-content-center p-1  rounded-full bg-black">
                        <Image width={5} height={5} className="size-3" src="/bag_icon.svg" alt="" />
                    </span>
                    <span className=" font-semibold text-black block">
                        Job Details
                    </span>
                </div>
                <div className="flex gap-2  flex-col xs:flex-row xs:justify-between">
                    {/* Left Column */}
                    <div className="space-y-1 text-sm">
                        <div className="grid grid-cols-2">
                            <span className="font-semibold">Start Date:</span>
                            <span className='text-clr-blackCow'>Jan 15, 2025</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="font-semibold">End Date:</span>
                            <span className='text-clr-blackCow'>Not Estimated</span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-1 text-sm">
                        <div className="grid grid-cols-2">
                            <span className="font-semibold">Status:</span>
                            <span className='text-clr-blackCow'>On Going</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="font-semibold">Budget:</span>
                            <span className='text-clr-blackCow'>$2000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-2 px-3 rounded-lg text-sm  ">
                <p>Fixed-priced contract under the protection of payment system.</p>
            </div>
        </div>
    );
}
