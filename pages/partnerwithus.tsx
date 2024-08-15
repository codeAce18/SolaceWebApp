import Image from "next/image"
import { Navbar } from "@/app/components/Navbar"
import { Footer } from "@/app/components/Footer"
import { Newsletter } from "@/app/components/Newsletter"
import PharmacyIcon from '../public/assests/Pharmacyicon.svg'
import HospitalIcon from '../public/assests/Hospitalicon.svg'
import LabouratoryIcon from '../public/assests/LabIcon.svg'
import Link from "next/link"
import '../app/globals.css'




const partnerwithus = () => {
  return (
    <>
        <Navbar />
        <div className="lg:pt-32 pt-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] tracking-[-1px] text-center font-normal text-Fozanova-Black lg:max-w-[935px] max-w-[370px]">Partner with Solace to give the elderly special privileges and benefits for their comfort.</h1>

                <p className="pt-[20px] lg:text-[17px] text-[15px] tracking-[-0.4%] lg:leading-[26px] leading-[22px] text-p-grey text-center font-normal lg:max-w-[930px] max-w-[300px]">We offer a prestigious Solace Smart Membership Card to over 500,000 members nationwide to unlock exclusive <br />benefits such as priority services, cashback on medical expenses and other privileges at partner<br /> pharmacies, hospitals and laboratories nationwide.  </p>
            </div>

            <div className="lg:pt-16 pt-10 p-5 lg:p-0">
                <div className="rounded-[16px] bg-Fazanova-white max-w-[714px] lg:h-[176px] p-10 mx-auto lg:flex lg:flex-row flex flex-col items-center justify-center gap-20">
                    <div className="lg:border-r-[1px] border-r-[#EFF0F6] lg:pr-8 pr-0">
                        <Image className="mx-auto" src={PharmacyIcon} alt="PharmacyIcon" />
                        <h6 className="text-center lg:text-[20px] text-[17px] text-Fozanova-Black lg:leading-[27.42px] leading-[25px] tracking-[-0.96px] pt-[5px] font-medium">Pharmacies</h6>
                        <Link href="/">
                            <h6 className="text-center  text-Fozanova-gold lg:text-[17px] text-[15px] tracking-[-0.4%] lg:leading-[26px] leading-[22px]">Register Here</h6>
                        </Link>
                    </div>

                    <div>
                        <Image className="mx-auto" src={HospitalIcon} alt="HospitalIcon" />
                        <h6 className="text-center lg:text-[20px] text-[17px] text-Fozanova-Black lg:leading-[27.42px] leading-[25px] tracking-[-0.96px] pt-[5px]  font-medium">Hospitals & Clinics</h6>
                        <Link href="/">
                            <h6 className="text-center  text-Fozanova-gold lg:text-[17px] text-[15px] tracking-[-0.4%] lg:leading-[26px] leading-[22px]">Register Here</h6>
                        </Link>
                    </div>


                    <div className="lg:border-l-[1px] border-l-[#EFF0F6] lg:pl-8 p-0">
                        <Image className="mx-auto" src={LabouratoryIcon} alt="LabouratoryIcon" />
                        <h6 className="text-center lg:text-[20px] text-[17px] text-Fozanova-Black lg:leading-[27.42px] leading-[25px] tracking-[-0.96px] pt-[5px] font-medium">Laboratories</h6>
                        <Link href="/">
                            <h6 className="text-center text-Fozanova-gold lg:text-[17px] text-[15px] tracking-[-0.4%] lg:leading-[26px] leading-[22px]">Register Here</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <Newsletter />

        <Footer />

    </>
    
  )
}

export default partnerwithus