import Image from "next/image"


import TestimonialSvg from '../../public/assests/TestimonialSvg.svg'
import TestimonialImg1 from '../../public/assests/Testimonials1.png'
import TestimonialImg2 from '../../public/assests/Testimonial2.png'
import TestimonialImg3 from '../../public/assests/Testimonial3.png'


export function Testimonials() {
    return (
        <div className="pt-16">
            <div className="flex flex-col justify-center items-center">
                <Image width={143} height={40} src={TestimonialSvg} alt="TestiminialSvg" />
                
                <h1 className="lg:text-[48px] text-[39px] lg:leading-[58px] leading-[50px] text-center font-normal tracking-[-1px]  text-Fozanova-Black max-w-[529px] lg:max-w-[600px]">Don't take our words for it</h1>
            </div>


            <div className="pt-10 p-[20px]">
                <div className="rounded-[32px] border-[1px] border-[#EFF0F6] bg-Fazanova-white lg:flex lg:flex-row flex flex-col-reverse gap-10 items-center justify-center max-w-[1058px] mx-auto py-[45px] px-[32px]">
                    <div>
                        <p className="font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[24px] tracking-[-0.4%] max-w-[440px] text-p-grey">Solace Farewell Cover is the first of its kind in Nigeria, if not in the whole of Africa. Subscribing to Solace Farewell cover has given me peace of mind, knowing that my my father's farewell expenses are covered up to ₦8 million. The most interesting part is that, I will receive up to ₦1,000,000 in reimbursement for every five subscriptions I pay if papa hasn't joined his ancestors. This is simply amazing and recommendable! Thank you Solace for this innovative service.</p>


                        <h5 className="pt-[35px] lg:text-[20px] text-[17px] leading-[24.2px] tracking-[-0.96px] font-medium text-Fozanova-Black">Mrs. Amarachi Chukwuemaka</h5>
                        <p className="lg:text-[17px] text-[15px] font-normal leading-[26px] tracking-[-0.4%] text-Fozanova-Black">Accountant/Consultant</p>
                    </div>


                    <div>
                        <Image className="rounded-[20px]" width={495} height={335} src={TestimonialImg1} alt="TestimonialImg1" />
                    </div>
                </div>
            </div>


            <div className="pt-10 p-[20px]">
                <div className="rounded-[32px] border-[1px] border-[#EFF0F6] bg-Fazanova-white lg:flex lg:flex-row flex flex-col-reverse gap-10 items-center justify-center max-w-[1058px] mx-auto py-[45px] px-[32px]">
                    <div>
                        <p className="font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[24px] tracking-[-0.4%] max-w-[440px] text-p-grey">I am thoroughly impressed with the value Solace Health Club offers. For just ₦1,000 I registered my mother as a member. She now receives cashback and VVIP treatment at partner pharmacies, hospitals, clinics, and laboratories nationwide. Solace Health Club will help me save up to ₦250k on her medical bills this year, while she enjoys first-class medical services anytime, anywhere. I highly recommend Solace Health Club with confidence.</p>


                        <h5 className="pt-[35px] lg:text-[20px] text-[17px] leading-[24.2px] tracking-[-0.96px] font-medium text-Fozanova-Black">Mr. Atenaga Collins</h5>
                        <p className="lg:text-[17px] text-[15px] font-normal leading-[26px] tracking-[-0.4%] text-Fozanova-Black">Founder/CEO Aco Multimedia.</p>
                    </div>


                    <div>
                        <Image className="rounded-[20px]" width={495} height={335} src={TestimonialImg2} alt="TestimonialImg2" />
                    </div>
                </div>
            </div>


            <div className="pt-10 p-[20px]">
                <div className="rounded-[32px] border-[1px] border-[#EFF0F6] bg-Fazanova-white lg:flex lg:flex-row flex flex-col-reverse gap-10 items-center justify-center max-w-[1058px] mx-auto py-[45px] px-[32px]">
                    <div>
                        <p className="font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[24px] tracking-[-0.4%] max-w-[440px] text-p-grey">Paul's passion for creating innovative solutions to improve the well-being of older adults in Africa is truly inspiring. I can testify to his ability to innovate when he served under my supervision at Tochstone Ltd between 2010 to 2012. His ability to think without-the-box and execute on his ideas sets him apart as a leader. I have no doubt that Solace will continue to achieve great success under his leadership and I highly recommend partnering with Solace now at the early stage of their growth.</p>


                        <h5 className="pt-[35px] lg:text-[20px] text-[17px] leading-[24.2px] tracking-[-0.96px] font-medium text-Fozanova-Black">Pastor Tunde Ojo</h5>
                        <p className="lg:text-[17px] text-[15px] font-normal leading-[26px] tracking-[-0.4%] text-Fozanova-Black">CEO, Touchstone Limited</p>
                    </div>


                    <div>
                        <Image className="rounded-[20px]" width={495} height={335} src={TestimonialImg3} alt="TestimonialImg3" />
                    </div>
                </div>
            </div>
        </div>
    )
}












