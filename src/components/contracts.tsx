'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ContractCard from './contract-card';


export default function Contracts({
    className,
}: {
    className?: string;
}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        skipSnaps: false,
    });

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    return (
        <div className={cn('pt-14 md:pt-20 pb-8', className)}>
            <h2 className="flex items-center mb-14 justify-center font-bold text-center capitalize">
                <div className="size-3 bg-clr-slimeGreen mr-2"></div>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    SUCCESSFUL <span className="border-b-4 border-b-clr-slimeGreen">CONTRACTS</span>
                </span>
            </h2>

            <div className="overflow-hidden " ref={emblaRef}>
                <div className="flex">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <div
                            key={index}
                            className="
                                flex-[0_0_100%]
                                md:flex-[0_0_50%]
                                lg:flex-[0_0_33.3333%]
                                box-border
                                justify-center
                                max-w-full
              "
                        >
                            <ContractCard className='xs:w-[390px] mx-auto' />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    onClick={scrollPrev}
                    className="rounded-full p-2 bg-white grid place-content-center cursor-pointer shadow hover:scale-105 transition"
                    aria-label="Scroll left"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={scrollNext}
                    className="rounded-full p-2 bg-white grid place-content-center cursor-pointer shadow hover:scale-105 transition"
                    aria-label="Scroll right"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}
