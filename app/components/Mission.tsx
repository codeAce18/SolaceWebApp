"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer';

import Missionbadge from '../../public/assests/Missionbadge.svg';
import Ourmission from '../../public/assests/ourmission.png';

export function Mission() {
    const { ref: badgeRef, inView: badgeInView } = useInView();
    const { ref: headingRef, inView: headingInView } = useInView();
    const { ref: paragraphRef, inView: paragraphInView } = useInView();
    const { ref: linkRef, inView: linkInView } = useInView();
    const { ref: imageRef, inView: imageInView } = useInView();

    return (
        <div className="pt-28">
            <div className="lg:bg-Fazanova-white border-[1px] border-[#EFF0F6] lg:py-[43px] lg:px-[32px] lg:rounded-[32px] max-w-[1058px] h-[562px] mx-auto lg:flex items-center justify-center gap-10">
                <div className="flex lg:block flex-col justify-center">
                    <div className="w-[100%]">
                        <motion.div
                            ref={badgeRef}
                            initial={{ y: '-100%' }}
                            animate={{ y: badgeInView ? 0 : '-100%' }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                className="mx-auto lg:mx-0"
                                width={201}
                                height={24}
                                src={Missionbadge}
                                alt="missionBadge"
                            />
                        </motion.div>
                    </div>
                    <motion.h1
                        ref={headingRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: headingInView ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className="pt-10 lg:text-[32px] text-[30px] text-center lg:text-left mx-auto font-medium leading-[38px] text-Fozanova-Black lg:max-w-[501px] max-w-[340px]"
                    >
                        To provide outstanding elderly care services that guarantees peace of mind to our customers all over the world.
                    </motion.h1>
                    <motion.p
                        ref={paragraphRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: paragraphInView ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className="pt-5 lg:text-[17px] text-[15px] text-center lg:text-left mx-auto font-normal leading-[26px] tracking-[-0.4%] text-p-grey lg:max-w-[501px] max-w-[340px]"
                    >
                        We constantly offer seamless and top-notch service experience to all our users, handling every client with care and efficiency. By revolutionizing elderly care service delivery in Africa, we aim to alleviate the burden of taking care of the elderly, ensuring a proactive care that guarantees old age enjoyment and a dignified farewell in the event of their passing.
                    </motion.p>
                    <motion.div
                        ref={linkRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: linkInView ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className="pt-10 flex justify-center lg:justify-start"
                    >
                        <Link href="/about" className="text-Fozanova-gold font-semibold lg:leading-[24px] leading-[20px] text-[15px] lg:text-[17px]">
                            <span className="border-b-[1px] border-b-[#DBA73B]">Learn more</span>
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    className="rounded-xl mx-auto lg:mx-0 pt-[40px] p-[20px] lg:p-0"
                >
                    <Image
                        width={472}
                        height={406}
                        src={Ourmission}
                        alt="ourMisionImg"
                    />
                </motion.div>
            </div>
        </div>
    );
}
