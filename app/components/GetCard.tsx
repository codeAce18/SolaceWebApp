"use client";

import Image from "next/image";
import Vector from '../../public/assests/Vector.svg';
import SolaceCardBanner from '../../public/assests/SolaceCardBanner.svg';
import { useInView } from 'react-intersection-observer';

export function GetCard() {
    const { ref: cardRef, inView: cardInView } = useInView();

    return (
        <div className="pt-32">
            <div
                ref={cardRef}
                className={`relative lg:rounded-[18px] bg-[#6B5AED] max-w-[1058px] lg:h-[446.5px] h-[395px] overflow-hidden mx-auto flex items-center transition-transform duration-1000 ${cardInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
                <div className="relative z-10 flex flex-col items-start mx-auto lg:mx-0 pl-10">
                    <h1 className="text-Fazanova-white lg:text-[52px] text-[40px] lg:leading-[58px] leading-[50px] font-normal tracking-[-1px] lg:max-w-[520px] max-w-[290px]">
                        Save up to ₦1.8M yearly on elderly medical expenses.
                    </h1>

                    <a href="/healthy-elders-club" className="inline-flex items-center lg:pt-16 pt-10">
                        <button
                            className="lg:text-[20px] text-[15px] font-semibold leading-[24px] rounded-[16.43px] py-[12.32px] px-[24.65px] border-[2px] border-white text-Fazanova-white shadow-lg flex items-center"
                            style={{
                                background: 'linear-gradient(270deg, #8D7EFF 0.08%, #6B5AED 96.5%)'
                            }}
                        >
                            Get a Solace Card
                            <span className="ml-2">
                                <Image src={Vector} alt="ArrowRight" />
                            </span>
                        </button>
                    </a>
                </div>

                <div className="absolute top-[-139px] right-[-250px] bottom-0">
                    <Image width={700} height={460} src={SolaceCardBanner} alt="solaceCardBanner" className="object-cover hidden lg:flex" />
                </div>
            </div>
        </div>
    );
}
