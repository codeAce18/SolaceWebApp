import Image from "next/image";

import '../app/globals.css'
import Link from "next/link";
import HealthEldersClubImg from '../public/assests/HealthyEldersClubImg.png'
import SHCCard from '../public/assests/SHC Card.png'
import CheckSvg from '../public/assests/CheckSvg.svg'
import SignUpSvg from '../public/assests/SignupSvg.svg'
import PaymentSvg from '../public/assests/Payment.svg'
import CardLinkingSvg from '../public/assests/Card Linking.svg'
import InputAdressSvg from '../public/assests/Location.svg'
import DispatchSvg from '../public/assests/Dispatch.svg'
import ActivateCardSvg from '../public/assests/credit-card.svg'

import HowTo from '../public/assests/HowTo.svg'
import { Navbar } from "@/app/components/Navbar";
import { Newsletter } from "@/app/components/Newsletter";
import { Footer } from "@/app/components/Footer";





const HealthyEldersClub = () => {
    return (
        <>

        <Navbar />
        
        <div className="lg:pt-32 pt-16">
        
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-normal lg:text-[48px] text-[35px] tracking-[-1px] text-center lg:max-w-[935px] max-w-[600px] mx-auto text-Fozanova-Black lg:leading-[58px] leading-[50px] lg:h-[116px]">
                Healthy Elders Club gives older adults in Nigeria access to special privileges and benefits for their enjoyment.
                </h1>
                <p className="lg:pt-20 pt-10 text-center lg:max-w-[930px] max-w-[350px] mx-auto text-p-grey lg:text-[17px] text-[15px] leading-[22px] lg:leading-[26px] tracking-[-0.4%]">Joining the Club yourself or registering your elderly as a beneficiary of HEC is easy; pay a monthly membership fee of ₦1,000. Afterwards, a prestigious membership card will be delivered to your doorstep within a few days. This card unlocks exclusive benefits at partner pharmacies, hospitals and laboratories nationwide, including priority services, cashback on medical expenses and other privileges on the Solace app.</p>

                <Link href="/healthy-elders-subscription-form" className="lg:pt-20 pt-10 mx-auto ">
                    <button className=" bg-Fozanova-gold text-Fazanova-white lg:text-[17px] text-[15px] font-semibold leading-[24px] lg:w-[640px] rounded-[8px]   h-[56px] py-[15px] px-[37px]">
                        Subscribe to Healthy Elders Club
                    </button>
                </Link>
            </div>

            <div className="lg:pt-16 pt-10 px-[20px] lg:px-0  max-w-[1058px] mx-auto">
                <Image className="rounded-xl object-cover" src={HealthEldersClubImg} alt="HealthyClubImg" />
            </div>



            <div>
                <h1 className="lg:pt-16 pt-10 font-normal lg:text-[48px] text-[40px]  lg:leading-[58px] leading-[50px] tracking-[-1px] text-center mx-auto text-Fozanova-Black max-w-[1025px]">Discover why you or your elderly loved ones should join Healthy Elders Club now.</h1>



                <div className="py-[57px] bg-Fazanova-white rounded-[32px] mt-10 max-w-[1025px] mx-auto lg:pt-20 pt-5 lg:flex lg:flex-row  flex flex-col items-center lg:items-start gap-20 justify-center">
                    <Image className="rounded-[32px] lg:w-[450px] w-[350px] lg:h-[708.03px]" src={ SHCCard} alt="ShcCard" />


                    <div>
                        <div className="lg:pb-10 pb-6 p-[20px] lg:p-0 ">
                            <h1 className=" pb-[-50px] font-normal lg:text-[48px] text-[40px] leading-[50px]  lg:leading-[58px] tracking-[-1px] text-Fozanova-Black">₦1,000.00</h1>
                            <p className=" font-normal lg:text-[17px] text-[15px] leading-[22px] lg:leading-[26px] tracking-[-0.4%] text-p-grey">Per Month, Paid Annually</p>
                        </div>

                        <div className="flex flex-col gap-y-[10px] p-[20px] lg:p-0">
                            <div className="flex gap-[10px] flex-row items-start">
                                <Image width={23.98} height={24} src={CheckSvg} alt="CheckSvg" />
                                <p className="max-w-[351px] text-Fozanova-Black tracking-[-0.2px] lg:leading-[22px] leading-[20px] lg:text-[17px] text-[15px]">Get cashback of up to 25% on all medical expenses made with HEC card in all partner Pharmacies, Hospitals and Labs.</p>
                            </div>
                            <div className="flex gap-[10px] items-start">
                                <Image width={23.98} height={24} src={CheckSvg} alt="CheckSvg" />
                                <p className="max-w-[351px] text-Fozanova-Black tracking-[-0.2px] lg:text-[17px] text-[15px] lg:leading-[22px] leading-[20px]">Card is linked seamlessly to your Solace mobile wallet for easy medical expense management.</p>
                            </div>
                            <div className="flex gap-[10px] items-start">
                                <Image width={23.98} height={24} src={CheckSvg} alt="CheckSvg" />
                                <p className="max-w-[351px] text-Fozanova-Black tracking-[-0.2px] lg:text-[17px] text-[15px] lg:leading-[22px] leading-[20px]">Get priority services at partner Pharmacies Hospitals & Labs nationwide, including on partner online medical stores .</p>
                            </div>
                            <div className="flex gap-[10px] items-start">
                                <Image width={23.98} height={24} src={CheckSvg} alt="CheckSvg" />
                                <p className="max-w-[351px] text-Fozanova-Black tracking-[-0.2px] lg:text-[17px] text-[15px] lg:leading-[22px] leading-[20px]">Effortlessly manage prescriptions, doctors appointments, eating and sleeping routine of the elderly with Lace AI assistant.</p>
                            </div>
                            <div className="flex gap-[10px] items-start">
                                <Image width={23.98} height={24} src={CheckSvg} alt="CheckSvg" />
                                <p className="max-w-[351px] text-Fozanova-Black tracking-[-0.2px] lg:text-[17px] text-[15px] lg:leading-[22px] leading-[20px]">Get dedicated account manager and priority customer care service at a click of a button on the Solace app.</p>
                            </div>
                            <div className="flex gap-[10px] items-start">
                                <Image width={23.98} height={24} src={CheckSvg} alt="CheckSvg" />
                                <p className="max-w-[351px] text-Fozanova-Black tracking-[-0.2px] lg:text-[17px] text-[15px] lg:leading-[22px] leading-[20px]">Get free membership card replacement in the case of misplacement or damaged after the first 365 days of issuance. </p>
                            </div>

                            <div className="pt-10 mx-auto">
                                <button className="mx-auto py-[4px] px-[8px] bg-Fozanova-gold text-white text-[16px] lg:w-[409px] w-[300px] h-[50px] lg:h-[56px] font-semibold rounded-md leading-24">
                                    <Link href="/healthy-elders-subscription-form">
                                        <p>Subscribe to Healthy Elders Club</p>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pt-20">
                <div className="flex flex-col items-center justify-center mx-auto text-center">
                    <Image width={143} height={40} src={HowTo} alt="HowtoSvg" />

                    <h1 className="pt-[15px] font-normal lg:text-[48px] text-[40px] text-Fozanova-Black lg:leading-[58px] leading-[50px] tracking-[-1px] max-w-[824px]">Get started by following this easy steps </h1>

                    <p className="pt-[13px] font-normal lg:text-[17px] text-[15px] leading-[26px] tracking-[-0.4%] lg:max-w-[824px] max-w-[350px] text-p-grey">The process of joining the exclusive Health Elders Club is simple and straight forward. The benefits and privileges are carefully designed for older adults who wants premium care services and comfort.</p>
                </div>

                <div className="p-10">
                    <div className="flex justify-center items-center">
                        <div className="bg-Fazanova-white rounded-[16px] border-[1px] border-[#EFF0F6] py-[47px] px-[65px] max-w-[1168px] grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-20 lg:gap-y-20 gap-y-16">
                            <div className="lg:border-r-[1px] border-r-[#EFF0F6]  lg:pr-8  flex flex-col justify-center items-center">
                                <Image className="mx-auto" width={40} height={40} src={SignUpSvg} alt="signUpSvg" />
                                <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal  lg:leading-[32px] leading-[30px] text-Fozanova-Black">Sign-up Easily</h1>
                                <p className="pt-5 text-center max-w-[231px] font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px]  tracking-[-0.4%] text-p-grey">Register on the Solace website or mobile app to join the exclusive club.</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <Image className="mx-auto" width={40} height={40} src={PaymentSvg} alt="paymentSvg" />
                                <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal  leading-[32px] text-Fozanova-Black">Make Payment</h1>
                                <p className="pt-5 text-center max-w-[262px] font-normal lg:text-[17px] text-[15px] leading-[26px] tracking-[-0.4%] text-p-grey">Make a secure payment of  ₦1,000 per month, billed annually for your membership fee .</p>
                            </div>
                            <div className="lg:border-l-[1px] border-l-[#EFF0F6]  lg:pl-8 flex flex-col justify-center items-center">
                                <Image className="mx-auto" width={40} height={40} src={CardLinkingSvg} alt="cardLinkingSvg" />
                                <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal  leading-[32px] text-Fozanova-Black">Card Linking</h1>
                                <p className="pt-5 text-center max-w-[262px] font-normal lg:text-[17px] text-[15px] leading-[26px] tracking-[-0.4%] text-p-grey">Your smart card is automatically connected to your Solace app for easy fund management.</p>
                            </div>
                            <div className="lg:border-r-[1px] border-r-[#EFF0F6]  lg:pr-8 flex flex-col justify-center items-center">
                                <Image className="mx-auto" width={40} height={40} src={InputAdressSvg} alt="inputAdressSvg" />
                                <h1 className="pt-5 text-center max-w-[262px]  lg:text-[28px] text-[24px] font-normal  leading-[32px] text-Fozanova-Black">Input Address</h1>
                                <p className="pt-5 text-center max-w-[231px] font-normal lg:text-[17px] text-[15px] leading-[26px] tracking-[-0.4%] text-p-grey"> Provide the detailed address of where you want your Solace card to be sent to.</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <Image className="mx-auto" width={40} height={40} src={DispatchSvg} alt="dispatchSvg" />
                                <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal  leading-[32px] text-Fozanova-Black">Prompt Dispatch</h1>
                                <p className="pt-5 text-center max-w-[262px] font-normal lg:text-[17px] text-[15px] leading-[26px] tracking-[-0.4%] text-p-grey">We will promptly send your Solace card to the provided address for your convenience.</p>
                            </div>
                            <div className="lg:border-l-[1px] border-l-[#EFF0F6]  lg:pl-8 flex flex-col justify-center items-center">
                                <Image className="mx-auto" width={40} height={40} src={ActivateCardSvg} alt="ActivateCardSvg" />
                                <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal  leading-[32px] text-Fozanova-Black">Activate Card</h1>
                                <p className="pt-5 text-center max-w-[262px] font-normal lg:text-[17px] text-[15px] leading-[26px] tracking-[-0.4%] text-p-grey">Activate your membership card on the Solace app by paying for medical expense on the app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Newsletter />

        <Footer />



        </>

    );

};
           
            
export default HealthyEldersClub;



      
  