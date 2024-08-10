"use client";

import { useRef } from 'react';
import Image from "next/image";
import { CountUp } from 'countup.js';
import { useInView } from 'react-intersection-observer';
import Appstore from '../../public/assests/Appstore.svg';
import Googlestore from '../../public/assests/googlestore.svg';
import HeroImg from '../../public/assests/oldwoman.png';

export function Hero() {
    const count1Ref = useRef(null);
    const count2Ref = useRef(null);
    const count3Ref = useRef(null);

    // Observe the elements
    const { ref: h1Ref, inView: h1InView } = useInView();
    const { ref: pRef, inView: pInView } = useInView();
    const { ref: buttonsRef, inView: buttonsInView } = useInView();
    const { ref: imageRef, inView: imageInView } = useInView();
    const { ref: statsRef, inView: statsInView } = useInView();

    // Trigger CountUp animations
    if (statsInView) {
        const countUp1 = new CountUp(count1Ref.current, 8000, { duration: 2, formattingFn: (num) => num.toFixed(0) });
        const countUp2 = new CountUp(count2Ref.current, 2425, { duration: 2 });
        const countUp3 = new CountUp(count3Ref.current, 98, { duration: 2 });
        if (!countUp1.error) countUp1.start();
        if (!countUp2.error) countUp2.start();
        if (!countUp3.error) countUp3.start();
    }

    return (
        <div className="lg:pt-40 pt-16">
            <div className="px-[20px]">
                <h1
                    ref={h1Ref}
                    className={`text-center lg:text-[72px] text-[34px] mx-auto text-Fozanova-Black font-bold lg:leading-82 leading-[40px] lg:max-w-[1058px] mx-w-[1050px] lg:tracking-customTight transition-opacity duration-1000 ${h1InView ? 'opacity-100' : 'opacity-0'}`}
                >
                    The older adults in your family deserve very good care and a befitting farewell.
                </h1>

                <p
                    ref={pRef}
                    className={`pt-6 text-center font-normal lg:text-[17px] text-[15px] lg:leading-[27px] leading-[25px] text-p-grey lg:max-w-[1050px] max-w-[1050px] mx-auto tracking-normal transition-transform duration-1000 ${pInView ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    Solace is a healthcare app for the 14.8 million older adults aged 60 and above in Nigeria. Healthy Elders Club offers elderly members up to 25% cashback on medical expenses yearly and more. Solace Farewell Cover provides subscribers with a dignified farewell for their loved ones in the event of their passing, offering a service benefit of up to ₦8 million.
                </p>

                <div
                    ref={buttonsRef}
                    className={`pt-8 flex items-center justify-center gap-[15px] w-full transition-opacity duration-1000 ${buttonsInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <a href="#">
                        <button>
                            <Image width={169.82} height={63.84} src={Appstore} alt="appstore" />
                        </button>
                    </a>
                    <a href="#">
                        <button>
                            <Image width={169.71} height={63.67} src={Googlestore} alt="googlestore" />
                        </button>
                    </a>
                </div>

                <div
                    ref={imageRef}
                    className={`pt-6 max-w-[1058px] mx-auto transition-transform duration-1000 ${imageInView ? 'translate-y-0' : 'translate-y-full'}`}
                >
                    <Image src={HeroImg} alt="HeroImg" className="rounded-xl" />
                </div>

                <div
                    ref={statsRef}
                    className={`pt-10 transition-opacity duration-1000 ${statsInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="bg-Fazanova-white max-w-[931px] border border-border-custom py-[16px] rounded-xl px-[48px] flex text-center lg:flex-row flex-col lg:gap-32 gap-20 mx-auto">
                        <div className="text-center">
                            <h1 className="text-center text-[44px] font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count1Ref}>0</span>K
                            </h1>
                            <p className="text-[17px] text-center font-semibold leading-[24px] text-Fozanova-Black">Active App Users</p>
                        </div>

                        <div className='lg:border-l-[1px] lg:border-r-[1px] lg:border-r-border-custom lg:border-l-border-custom lg:pl-10 lg:pr-10'>
                            <h1 className="text-center text-[44px] font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count2Ref}>0</span>
                            </h1>
                            <p className="text-[17px] text-center font-semibold leading-[24px] text-Fozanova-Black">Caregivers & Partners</p>
                        </div>

                        <div>
                            <h1 className="text-center text-[44px] font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count3Ref}>0</span>%
                            </h1>
                            <p className="text-[17px] text-center font-semibold leading-[24px] text-Fozanova-Black">Satisfied Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
