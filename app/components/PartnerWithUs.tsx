import Image from "next/image"

import PartnerWithUsSvg from '../../public/assests/PartnerWithUs.svg'
import PartnerWithUsImg from '../../public/assests/partnerwithus.png'


export function PartnerWithUs() {
    return (
        <div className="pt-16 p-[20px]">
            <div className="flex flex-col items-center justify-center">
                <Image width={175} height={40} src={PartnerWithUsSvg} alt="partnerWithUsSvg" />

                <h1 className="text-center font-normal lg:text-[48px] text-[35px] lg:leading-[58px] leading-[40px] tracking-[-1px] text-Fozanova-Black lg:max-w-[900px] max-w-[300px]">Pharmacies, Hospitals and Laboratories in Nigeria, Partner with Us</h1>
            </div>

            <div className="pt-5">
                <div className="rounded-[32px] bg-Fazanova-white border-[1px] border-[#EFF0F6]  max-w-[1058px] py-[40px] px-[32px] mx-auto lg:flex items-center justify-center gap-10">
                    <Image className="rounded-[30px] mx-auto lg:mx-0" width={496}  src={PartnerWithUsImg} alt="partnerWithUsImg" />
                    <div className="flex flex-col justify-center items-center">
                        <p className="pt-5 lg:pt-0 font-normal lg:text-[17px] text-[15px] text-p-grey leading-[26px] tracking-[-0.4%] max-w-[440px]">Join forces with us to elevate your business and make a meaningful impact! We are teaming up with licensed pharmacies, hospitals and laboratories across Nigeria to offer exclusive privileges and benefits to over 500,000 elders. Our members enjoy cashback on medical expenses, priority services and more at our partner locations. Become a Solace Partner and provide elderly Nigerians the exceptional care they deserve while boosting your patronage. Together, let's give the elders of Nigeria the Solace they truly need.</p>
                        <a href="/" className="lg:pt-[17px] pt-[40px]">
                            <button className=" border-[1px] border-[#DBA73B] bg-Fozanova-gold text-Fazanova-white font-semibold lg:text-[17px] text-[15px] leading-[24px] lg:w-[439px] py-[12px] px-[12px] rounded-[8px]">
                                <span className="lg:max-w-[335px]">Click Here to Become a Solace Partner</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}