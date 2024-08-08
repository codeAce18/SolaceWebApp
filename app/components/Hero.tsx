"use client";


import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { CountUp } from 'countup.js';

import Appstore from '../../public/assests/Appstore.svg';
import Googlestore from '../../public/assests/googlestore.svg';
import HeroImg from '../../public/assests/oldwoman.png';



export function Hero() {
    const count1Ref = useRef(null);
    const count2Ref = useRef(null);
    const count3Ref = useRef(null);
    const [isCount1Complete, setIsCount1Complete] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const options = {
            threshold: 0.5,
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!hasAnimated) {
                        const countUp1 = new CountUp(count1Ref.current, 8000, {
                            duration: 2,
                            formattingFn: (num) => num.toFixed(0),
                            onComplete: () => {
                                setIsCount1Complete(true);
                            }
                        });
                        const countUp2 = new CountUp(count2Ref.current, 2425, { duration: 2 });
                        const countUp3 = new CountUp(count3Ref.current, 98, { duration: 2 });
                        if (!countUp1.error) countUp1.start();
                        if (!countUp2.error) countUp2.start();
                        if (!countUp3.error) countUp3.start();
                        setHasAnimated(true);
                    }
                } else {
                    // Reset the animation state when the section is not in view
                    setHasAnimated(false);
                    setIsCount1Complete(false);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (count1Ref.current && count2Ref.current && count3Ref.current) {
            observer.observe(count1Ref.current);
            observer.observe(count2Ref.current);
            observer.observe(count3Ref.current);
        }

        return () => {
            if (count1Ref.current && count2Ref.current && count3Ref.current) {
                observer.unobserve(count1Ref.current);
                observer.unobserve(count2Ref.current);
                observer.unobserve(count3Ref.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div className="lg:pt-40 pt-16">
            <div className="px-[20px]">
                <h1 className="text-center lg:text-[72px] text-[34px] mx-auto text-Fozanova-Black font-bold lg:leading-82 leading-[40px] lg:max-w-[1200px] mx-w-[1050px] lg:tracking-customTight">
                    The older adults in your family deserve very good care and a befitting farewell.
                </h1>

                <p className="pt-6 text-center font-normal lg:text-[17px] text-[15px] lg:leading-[27px] leading-[25px] text-p-grey lg:max-w-[1050px] max-w-[1050px] mx-auto tracking-normal">
                    Solace is a healthcare app for the 14.8 million older adults aged 60 and above in Nigeria. Healthy Elders Club offers elderly members up to 25% cashback on medical expenses yearly and more. Solace Farewell Cover provides subscribers with a dignified farewell for their loved ones in the event of their passing, offering a service benefit of up to ₦8 million.
                </p>

                <div className="pt-8 flex items-center justify-center gap-[15px] w-full">
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

                <div className="pt-6 max-w-[1058px] mx-auto">
                    <Image src={HeroImg} alt="HeroImg" className="rounded-xl" />
                </div>

                <div className="pt-10">
                    <div className="bg-Fazanova-white max-w-[931px] border border-border-custom py-[16px] rounded-xl px-[48px] flex text-center lg:flex-row flex-col lg:gap-32 gap-20 mx-auto">
                        <div className="text-center">
                            <h1 className="text-center text-[44px] font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count1Ref}>0</span>{isCount1Complete && 'K'}
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
