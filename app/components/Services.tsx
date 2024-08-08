import Image from "next/image"


import React from "react"


import OurServices from '../../public/assests/Services.svg'

import Wellness from '../../public/assests/wellness.svg'
import SolacePremium from '../../public/assests/solacepremium.svg'
import Teleconsultation from '../../public/assests/Teleconsultation.svg'
import Holistic from '../../public/assests/Holistic.svg'
import Tech from '../../public/assests/Tech.svg' 
import ArrowRightIcon from "./ArrowIconRight"



export function Services() {
    return(
        <div className="pt-32">
            <div className="flex flex-col items-center justify-center text-center">
                <Image width={143} height={40} src={OurServices} alt="ourServicesImg" />

                <h1 className="pt-6 text-[48px] leading-[58px] tracking-[-1px] font-normal lg:max-w-[800px] max-w-[500px] text-Fozanova-Black">Our Unique Service Offerings</h1>

                <p className="pt-4 text-[17px] text-p-grey leading-[26px] tracking-[-0.4%] lg:max-w-[800px] max-w-[500px] font-normal">Our services are designed to provide the elderly with superior quality services that guarantee the highest standard of holistic health and wellness care at the best price point.</p>
            </div>


            <div className="pt-10">
                <div className="flex justify-center items-center">
                    <div className="bg-Fazanova-white rounded-[16px] border-[1px] border-[#EFF0F6] py-[47px] px-[32px] max-w-[1055px] grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-20 lg:gap-y-36 gap-y-28">
                        <div className="lg:border-r-[1px] border-r-[#EFF0F6]  lg:pr-8  flex flex-col justify-center items-center">
                            <Image className="mx-auto" width={32.58} height={36} src={SolacePremium} alt="SolacePremium" />
                            <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal  lg:leading-[32px] leading-[30px] text-Fozanova-Black">Solace Premium Farewell Cover </h1>
                            <p className="pt-5 text-center max-w-[262px] font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px]  tracking-[-0.4%] text-p-grey">Solace Farewell Cover provides funeral expense coverage for self or subscribers' loved ones in the event of their passing.</p>
                            <a href="/">
                                <button className="flex items-center gap-[5px] pt-3 lg:text-[17px] text-[15px] font-semibold lg:leading-[24px] leading-[22px] text-Fozanova-gold">
                                    See pricing

                                    <ArrowRightIcon className="text-[#DBA73B]" />
                                </button>
                            </a>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image className="mx-auto" width={39.3} height={37} src={Holistic} alt="HolisticImg" />
                            <h1 className="pt-5 text-center max-w-[262px] text-[28px] font-normal  leading-[32px] text-Fozanova-Black">Healthy Elders Club for Older Adults</h1>
                            <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey">Subscribe self or your elders to enjoy exclusive benefits and privileges at partner pharmacies, hospitals and laboratories Nationwide.</p>
                            <a href="/">
                                <button className="flex items-center gap-[5px] pt-3 text-[17px] font-semibold leading-[24px] text-Fozanova-gold">
                                    See pricing

                                    <ArrowRightIcon className="text-[#DBA73B]" />
                                </button>
                            </a>
                        </div>
                        <div className="lg:border-l-[1px] border-l-[#EFF0F6]  lg:pl-8 flex flex-col justify-center items-center">
                            <Image className="mx-auto" width={40.86} height={37} src={Wellness} alt="wellnessImg" />
                            <h1 className="pt-5 text-center max-w-[262px] text-[28px] font-normal  leading-[32px] text-Fozanova-Black">Personalized Wellness Plan for the Elderly </h1>
                            <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey">Enjoy personalized elderly wellness plans which include doctor check-ins, exercise, diet, counseling for holistic care.</p>
                            <a href="/">
                                <button className="pt-3 text-[17px] font-semibold leading-[24px] text-Fozanova-gold">
                                    Starting Soon
                                </button>
                            </a>
                        </div>
                        <div className="lg:border-r-[1px] border-r-[#EFF0F6]  lg:pr-8 flex flex-col justify-center items-center">
                            <Image className="mx-auto" width={37.04} height={37} src={Tech} alt="TechImg" />
                            <h1 className="pt-5 text-center max-w-[262px] text-[28px] font-normal  leading-[32px] text-Fozanova-Black">Lace AI Proactive Care Solution</h1>
                            <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey">Lace AI monitors elders' health, offers insights & facilitates communication for total well-being in real-time.</p>
                            <a href="/lace-ai">
                                <button className="flex items-center gap-[5px] pt-3 text-[17px] font-semibold leading-[24px] text-Fozanova-gold">
                                    Learn More

                                    <ArrowRightIcon className="text-[#DBA73B]" />
                                </button>
                            </a>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image className="mx-auto" width={35.78} height={36.03} src={Holistic} alt="HolisticImg" />
                            <h1 className="pt-5 text-center max-w-[262px] text-[28px] font-normal  leading-[32px] text-Fozanova-Black">Personal Elderly Care Services</h1>
                            <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey">Our qualified nurses and  caregivers offer round-the-clock companionship and personal care services.</p>
                            <a href="/">
                                <button className="pt-3 text-[17px] font-semibold leading-[24px] text-Fozanova-gold">
                                    Starting Soon
                                </button>
                            </a>
                        </div>
                        <div className="lg:border-l-[1px] border-l-[#EFF0F6]  lg:pl-8 flex flex-col justify-center items-center">
                            <Image className="mx-auto" width={37} height={37} src={Teleconsultation} alt="teleconsultationImg" />
                            <h1 className="pt-5 text-center max-w-[262px] text-[28px] font-normal  leading-[32px] text-Fozanova-Black">Teleconsultation Services </h1>
                            <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey">Receive high-quality video medical consultations from global experts across diverse medical specialties instantly.</p>
                            <a href="/">
                                <button className="pt-3 text-[17px] font-semibold leading-[24px] text-Fozanova-gold">
                                    Starting Soon
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}