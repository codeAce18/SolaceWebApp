import { Navbar } from "@/app/components/Navbar"
import Image from "next/image"
import '../app/globals.css'

import Link from "next/link"

import CertifiedDoctorsSvg from '../public/assests/CertifiedDoctors.svg'
import CertifiedNursesSvg from '../public/assests/CertifiedNurses.svg'
import QualifiedCaregiverSvg from '../public/assests/QualifiedCaregivers.svg'
import CertifiedTherapistSvg from '../public/assests/CertifiedTherapist.svg'
import CertifiedNutritionistSvg from '../public/assests/CertifiedNutritionist.svg'
import QualifiedUndertakersSvg from '../public/assests/QualifiedUndertakers.svg'
import { Newsletter } from "@/app/components/Newsletter"
import { Footer } from "@/app/components/Footer"

const JoinCareGiver = () => {
    return (

        <>

            <Navbar />
            <div className="lg:pt-32 pt-16 p-[20px] lg:p-0">
            
                <div>
                    <div>
                        <h1 className="text-center mx-auto font-normal lg:text-[48px] text-[40px] leading-[50px] lg:leading-[58px] text-Fozanova-Black tracking-[-1px] max-w-[935px]">Join Our Network of Caregivers Nationwide. Enjoy better pay package and more.</h1>

                        <p className="pt-[20px] text-center mx-auto lg:max-w-[930px] lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%] text-p-grey">We offer comprehensive in-home care for the elderly across Africa through our certified network<br /> of caregivers. 
                        We recruit only qualified, vetted professionals and compensate them gene
                        </p>
                        
                        <p className="text-Fozanova-Black text-center mx-auto pt-[10px] lg:pt-[10px] max-w-[300px] lg:max-w-[930px] lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%]">Join us in transforming the elderly care sector in Africa.</p>
                    </div>

                    <div className="pt-20">
                        <div className="bg-Fazanova-white rounded-[16px] border-[1px] border-[#EFF0F6] py-[47px] px-[32px] max-w-[714px] grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-20 lg:gap-y-20 gap-y-16 mx-auto">
                            <div className="lg:border-r-[1px] border-r-[#EFF0F6]  lg:pr-5 flex flex-col justify-center items-center">
                                <Image  src={CertifiedDoctorsSvg} alt="CertifiedDoctorsSvg" className="mx-auto" />

                                <h1 className="text-center text-Fozanova-Black text-[17px] lg:text-[20px] leading-[27.42px] tracking-[-0.96px]">Certified Doctors</h1>

                                <Link href="/qualifieddoctorsform">

                                    <button className="text-Fozanova-gold  font-normal text-[15px] lg:text-[17px] leading-[26px] tracking-[-0.4%] ">
                                        Register Here
                                    </button>

                                </Link>
                            </div>


                            <div className="flex flex-col justify-center items-center">
                                <Image src={CertifiedNursesSvg} alt="CertifiedNursesSvg" className="mx-auto" />

                                <h1 className="text-Fozanova-Black text-[17px] lg:text-[20px] leading-[27.42px] tracking-[-0.96px]">Certified Nurses</h1>

                                <Link href="/qualifiednursesform">

                                    <button className="text-Fozanova-gold  font-normal text-[15px] lg:text-[17px] leading-[26px] tracking-[-0.4%] ">
                                        Register Here
                                    </button>

                                </Link>
                            </div>



                            <div className="lg:border-l-[1px] border-l-[#EFF0F6]  lg:pl-8 flex flex-col justify-center items-center">
                                <Image src={QualifiedCaregiverSvg} alt="QualifiedCaregiverSvg" className="mx-auto" />

                                <h1 className="text-Fozanova-Black text-[17px] lg:text-[20px] leading-[27.42px] tracking-[-0.96px] text-center">Qualified Caregivers</h1>

                                <Link href="/nonmedicalcaregiversform">

                                    <button className="text-Fozanova-gold  font-normal text-[15px] lg:text-[17px] leading-[26px] tracking-[-0.4%] ">
                                        Register Here
                                    </button>

                                </Link>
                            </div>



                            <div className="lg:border-r-[1px] border-r-[#EFF0F6]  lg:pr-8 flex flex-col justify-center items-center">
                                <Image src={CertifiedTherapistSvg} alt="CertifiedTherapistSvg" className="mx-auto" />

                                <h1 className="text-Fozanova-Black text-[17px] lg:text-[20px] leading-[27.42px] tracking-[-0.96px] text-center">Certified Therapists</h1>

                                <Link href="/qualifiedtherapistform">

                                    <button className="text-Fozanova-gold  font-normal text-[15px] lg:text-[17px] leading-[26px] tracking-[-0.4%] ">
                                        Register Here
                                    </button>

                                </Link>
                            </div>


                            <div className="flex flex-col justify-center items-center">
                                <Image src={CertifiedNutritionistSvg} alt="CertifiedNutritionistSvg" className="mx-auto" />

                                <h1 className="text-Fozanova-Black text-[17px] lg:text-[20px] leading-[27.42px] tracking-[-0.96px] text-center">Certified Nutritionist</h1>

                                <Link href="/certifiednutritionistform">

                                    <button className="text-Fozanova-gold  font-normal text-[15px] lg:text-[17px] leading-[26px] tracking-[-0.4%] ">
                                        Register Here
                                    </button>

                                </Link>
                            </div>

                            <div className="lg:border-l-[1px] border-l-[#EFF0F6]  lg:pl-8 flex flex-col justify-center items-center">
                                <Image src={QualifiedUndertakersSvg} alt="QualifiedUndertakersSvg" className="mx-auto" />

                                <h1 className="text-Fozanova-Black text-[17px] lg:text-[20px] leading-[27.42px] tracking-[-0.96px] text-center">Qualified Undertakers</h1>

                                <Link href="/registeredundertakersform">

                                    <button className="text-Fozanova-gold  font-normal text-[15px] lg:text-[17px] leading-[26px] tracking-[-0.4%] ">
                                        Register Here
                                    </button>

                                </Link>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            <Newsletter />

            <Footer />

        </>
    )
}


export default JoinCareGiver