import Image from "next/image"

import OurPartners from '../../public/assests/OurPartners.svg'
import ProvidusBankLogo from '../../public/assests/Providus Bank Logo.png'
import PaystackLogo from '../../public/assests/Paystack logo.png'
import ZoloLogo from '../../public/assests/Zolo Logo.png'
import MonnifyLogo from '../../public/assests/Monnify logo.png'




export function Partners() {
    return (
        <div className="partners">

            <div className="flex flex-col justify-center items-center">
                <Image width={106} height={24} src={OurPartners} alt="ourpartners" />

                <h1 className="pt-10 lg:text-[48px] text-[40px]  font-normal lg:leading-[58px] leading-[50px] text-Fozanova-Black tracking-[-1px] max-w-[800px] text-center">We partnered with the best in Africa</h1>

                <p className="pt-5 lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%] max-w-[720px] text-center text-p-grey">To us, partnership is key. We are able to deliver exceptional innovative elderly care solutions by partnering with the best licensed services providers all over the world. We are open to partnering with more valuable partners from all over the world.</p>
            </div>


            <div className="lg:pt-10 pt-16">
                <div className="lg:flex   items-center justify-center lg:gap-20">
                    <Image className="mx-auto lg:mx-0 " width={272.31} height={48} src={PaystackLogo} alt="paystackLogo" />
                    <Image className="mx-auto lg:mx-0 pt-5 lg:pt-0" width={193.5} height={48} src={ProvidusBankLogo} alt="providousLogo" />
                    <Image className="mx-auto lg:mx-0 pt-5 lg:pt-0" width={112.73} height={48} src={ZoloLogo} alt="zoloLogo" />
                    <Image className="mx-auto lg:mx-0 pt-5 lg:pt-0" width={285.12} height={48} src={MonnifyLogo} alt="monnifyLogo" />
                </div>
            </div>
        </div>
    )
}