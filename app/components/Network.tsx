"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import NetworkImg from '../../public/assests/Network.svg';
import JoinTheNetwork from '../../public/assests/Jointhenetwork.png';

export function Network() {
    const { ref: headerRef, inView: headerInView } = useInView();
    const { ref: contentRef, inView: contentInView } = useInView();

    return (
        <div className="pt-16 p-[20px]">
            <div ref={headerRef} className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${headerInView ? 'opacity-100' : 'opacity-0'}`}>
                <Image width={185} height={40} src={NetworkImg} alt="networkImg" />
                <h1 className="text-center font-normal lg:text-[48px] text-[35px] lg:leading-[58px] leading-[40px] tracking-[-1px] text-Fozanova-Black max-w-[928px]">Doctors, Nurses, Nutritionists and Therapists in Nigeria, Become Solace Caregivers.</h1>
            </div>

            <div className="pt-5">
                <div ref={contentRef} className={`rounded-[32px] bg-Fazanova-white border-[1px] border-[#EFF0F6] max-w-[1058px] py-[40px] px-[32px] mx-auto lg:flex items-center justify-center gap-10 transition-transform duration-1000 ${contentInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <Image className="rounded-[30px] mx-auto lg:mx-0" width={496} src={JoinTheNetwork} alt="jointhenetwork" />
                    <div className="flex flex-col justify-center items-center gap-y-10">
                        <p className="pt-5 lg:pt-0 font-normal lg:text-[17px] text-[15px] text-p-grey leading-[26px] tracking-[-0.4%] max-w-[440px]">Are you a qualified Doctor, Nurse, Nutritionist or Therapist in Nigeria? Join Solace Caregivers today and experience better pay and greater opportunities. Our platform empowers you to deliver exceptional home and remote care services to the elderly.</p>
                        <p className="font-normal lg:text-[17px] text-[15px] text-p-grey leading-[26px] tracking-[-0.4%] max-w-[440px]">Our straightforward registration process includes thorough vetting to maintain our high standards of service quality. Elevate your career today by becoming a Solace Caregiver and make a meaningful impact in the lives of over 40.8 million elderly Nigerians.</p>
                        <Link href="/joincaregiver">
                            <button className="border-[1px] border-[#DBA73B] bg-Fozanova-gold text-Fazanova-white font-semibold lg:text-[17px] text-[15px] leading-[24px] lg:w-[439px] py-[12px] px-[12px] rounded-[8px]">
                                <span className="lg:max-w-[335px]">Click Here to Become a Solace Caregiver</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
