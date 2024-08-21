"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import PartnershipOpp from "../../public/assests/patnershipopp.svg";
import ProvidusBankLogo from "../../public/assests/Providus Bank Logo.png";
import PaystackLogo from "../../public/assests/Paystack logo.png";
import ZoloLogo from "../../public/assests/Zolo Logo.png";
import MonnifyLogo from "../../public/assests/Monnify logo.png";

export function Partners() {
    const { ref: partnersTextRef, inView: partnersTextInView } = useInView();
    const { ref: logo1Ref, inView: logo1InView } = useInView();
    const { ref: logo2Ref, inView: logo2InView } = useInView();
    const { ref: logo3Ref, inView: logo3InView } = useInView();
    const { ref: logo4Ref, inView: logo4InView } = useInView();

    return (
        <div className="partners">
            <div ref={partnersTextRef} className={`flex flex-col justify-center items-center transition-opacity duration-1000 ${partnersTextInView ? 'opacity-100' : 'opacity-0'}`}>
                <Image width={250} height={40} src={PartnershipOpp} alt="PartnershipOpp" />

                <h1 className="pt-5 lg:text-[48px] text-[40px] font-normal lg:leading-[58px] leading-[50px] text-Fozanova-Black tracking-[-1px] max-w-[800px] text-center">
                    Partner with us to create global value
                </h1>

                <p className="pt-5 lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%] max-w-[720px] text-center text-p-grey">
                At Solace, we are always open to discussing Elderhood on television, radio, social media and podcasts. Contact us via phone or email to explore why enjoying Elderhood with<br /> Solace is vital for older adults. We leverage on the best partners to deliver <br />
                exceptional services to our users globally.
                </p>
            </div>

            <div className="lg:pt-10 pt-16">
                <div className="lg:flex items-center justify-center lg:gap-20">
                    <Image
                        ref={logo1Ref}
                        className={`mx-auto lg:mx-0 transition-transform duration-1000 ${logo1InView ? 'translate-y-0' : '-translate-y-full'}`}
                        width={272.31}
                        height={48}
                        src={PaystackLogo}
                        alt="paystackLogo"
                    />
                    <Image
                        ref={logo2Ref}
                        className={`mx-auto lg:mx-0 pt-5 lg:pt-0 transition-transform duration-1000 ${logo2InView ? 'translate-y-0' : '-translate-y-full'}`}
                        width={193.5}
                        height={48}
                        src={ProvidusBankLogo}
                        alt="providousLogo"
                    />
                    <Image
                        ref={logo3Ref}
                        className={`mx-auto lg:mx-0 pt-5 lg:pt-0 transition-transform duration-1000 ${logo3InView ? 'translate-y-0' : '-translate-y-full'}`}
                        width={112.73}
                        height={48}
                        src={ZoloLogo}
                        alt="zoloLogo"
                    />
                    <Image
                        ref={logo4Ref}
                        className={`mx-auto lg:mx-0 pt-5 lg:pt-0 transition-transform duration-1000 ${logo4InView ? 'translate-y-0' : '-translate-y-full'}`}
                        width={285.12}
                        height={48}
                        src={MonnifyLogo}
                        alt="monnifyLogo"
                    />
                </div>
            </div>
        </div>
    );
}
