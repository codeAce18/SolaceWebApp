import Image from "next/image"

import Badge from '../../public/assests/Badge.svg'
import Holistic from '../../public/assests/Holistic.svg'
import Tech from '../../public/assests/Tech.svg'
import Intuitive from '../../public/assests/Intuitive.svg'


export function Discovery() {
    return (
        <div className="pt-32">

            <div className="flex flex-col items-center justify-center">
                <Image  src={Badge} alt="ourUSP" />

                <div>
                    <h2 className="lg:text-[44px] text-[35px] text-Fozanova-Black font-bold lg:leading-[58px] leading-[48px] tracking-[-1px] max-w-[800px] mx-auto text-center">Discover why we are completely different from others</h2>

                    <p className="pt-4 lg:text-[17px] text-[15px] lg:max-w-[800px] max-w-[350px] mx-auto text-center text-p-grey font-normal lg:leading-[27px] leading-[25px]  tracking-[-0.2px]">Our competitive edge is hinged on our audacity to differentiate ourselves from others by offering exceptional services that delivers holistic value to our customers.</p>
                </div>
            </div>

            <div className="lg:pt-24 pt-20 p-[20px] lg:p-0">
                <div className="bg-Fazanova-white mx-auto max-w-[1058px] border-[1px] border-border-custom rounded-[16px] py-[47px] lg:flex items-center justify-center gap-[30px]">
                    <div>
                        <Image width={39.3} height={37} className="mx-auto" src={Holistic} alt="holisticImg" />
                        <div className="pt-[10px]">
                            <h1 className="font-bold lg:text-[24px] text-[22px] leading-[36px] text-center text-Fozanova-Black max-w-[236px] mx-auto">Holistic Care for the Elderly</h1>
                            <p className=" mt-[20px] max-w-[253px] text-center lg:text-[17px] text-[15px]   text-p-grey font-normal mx-auto">
                                Beyond doctor visits, we leverage our AI solution to provide a proactive care for the elderly that caters for their general well-being.
                            </p>
                        </div>
                    </div>
                    <div className="pt-20 lg:pt-0 lg:border-l-[1px] border-l-[#EFF0F6]  lg:pl-8">
                        <Image width={37.04} height={37} className="mx-auto" src={Tech} alt="techImg" />
                        <div className="pt-[10px]">
                            <h1 className="font-bold  lg:text-[24px] text-[22px] leading-[36px] text-center text-Fozanova-Black max-w-[271px] mx-auto">Cutting-Edge Tech Infrastructure </h1>
                            <p className="mt-[20px] max-w-[271px] text-center lg:text-[17px] text-[15px]   text-p-grey font-normal mx-auto">
                                Because it doesn't exist, we are building the most advanced tech infrastructure that will drive the provision of world-class holistic care for the elderly in Africa.
                            </p>
                        </div>
                    </div>
                    <div className="pt-20 lg:pt-0 lg:border-l-[1px] border-l-[#EFF0F6]  lg:pl-8">
                        <Image width={35.98} height={36} className="mx-auto" src={Intuitive} alt="intuitiveImg" />
                        <div className="pt-[10px]">
                            <h1 className="font-bold  lg:text-[24px] text-[22px] leading-[36px] text-center text-Fozanova-Black max-w-[262px] mx-auto">Intuitive<br /> Mobile App</h1>
                            <p className="mt-[20px] max-w-[262px] text-center lg:text-[17px] text-[15px] text-p-grey font-normal mx-auto">
                                We offer the most intuitive On-demand Care Service Delivery System (OCSDS) that guarantees best service quality for the elderly & their loved ones in Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}