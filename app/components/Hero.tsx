"use client";

import { useRef, useEffect } from 'react';
import Image from "next/image";
import { CountUp } from 'countup.js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Appstore from '../../public/assests/Appstore.svg';
import Googlestore from '../../public/assests/googlestore.svg';
import HeroImg from '../../public/assests/oldwoman.png';

export function Hero() {
    const count1Ref = useRef<HTMLSpanElement>(null);
    const count2Ref = useRef<HTMLSpanElement>(null);
    const count3Ref = useRef<HTMLSpanElement>(null);

    const { ref: statsRef, inView: statsInView } = useInView({
        triggerOnce: true,  // Only trigger once
        threshold: 0.5     // Trigger when 50% of the element is visible
    });

    useEffect(() => {
        if (statsInView) {
            const countUp1 = new CountUp(count1Ref.current as HTMLElement, 4000, { duration: 2, formattingFn: (num) => num.toFixed(0) });
            const countUp2 = new CountUp(count2Ref.current as HTMLElement, 1425, { duration: 2 });
            const countUp3 = new CountUp(count3Ref.current as HTMLElement, 98, { duration: 2 });
            if (!countUp1.error) countUp1.start();
            if (!countUp2.error) countUp2.start();
            if (!countUp3.error) countUp3.start();
        }
    }, [statsInView]);

    return (
        <div className="lg:pt-40 pt-16">
            <div className="px-[20px]">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={`text-center lg:text-[72px] text-[34px] mx-auto text-Fozanova-Black font-bold lg:leading-82 leading-[40px] lg:max-w-[1058px] mx-w-[1050px] lg:tracking-customTight`}
                >
                    The older adults in your family deserve very good care and a befitting farewell.
                </motion.h1>

                <motion.p
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                    className={`pt-6 text-center font-normal lg:text-[17px] text-[15px] lg:leading-[27px] leading-[25px] text-p-grey lg:max-w-[1050px] max-w-[1050px] mx-auto tracking-normal`}
                >
                    Solace is a healthcare app for the 14.8 million older adults aged 60 and above in Nigeria. Healthy Elders Club offers elderly members up to 25% cashback on medical expenses yearly and more. Solace Farewell Cover provides subscribers with a dignified farewell for their loved ones in the event of their passing, offering a service benefit of up to ₦8 million.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={`pt-8 flex items-center justify-center gap-[15px] w-full`}
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
                </motion.div>

                <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                    className={`pt-6 max-w-[1058px] mx-auto`}
                >
                    <Image src={HeroImg} alt="HeroImg" className="rounded-xl" />
                </motion.div>

                <motion.div
                    ref={statsRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={`pt-10`}
                >
                    <div className="bg-Fazanova-white max-w-[1058px] border border-border-custom py-[16px] rounded-xl px-[48px] flex text-center lg:flex-row flex-col lg:gap-32 gap-20 mx-auto">
                        <div className="text-center ">
                            <h1 className="text-center text-[44px] font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count1Ref}>0</span>
                            </h1>
                            <p className="text-[17px] text-center font-semibold leading-[24px] text-Fozanova-Black">Active Subscribers</p>
                        </div>

                        <div className='lg:border-l-[1px] lg:border-r-[1px] lg:border-r-border-custom lg:border-l-border-custom lg:pl-20 lg:pr-20'>
                            <h1 className="text-center text-[44px] font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count2Ref}>0</span>
                            </h1>
                            <p className="text-[17px] text-center font-semibold leading-[24px] text-Fozanova-Black">Caregivers & Partners</p>
                        </div>

                        <div className="lg:pr-10">
                            <h1 className="text-center text-[44px]  font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count3Ref}>0</span>%
                            </h1>
                            <p className="text-[17px] text-center font-semibold leading-[24px] text-Fozanova-Black">Satisfied Customers</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
