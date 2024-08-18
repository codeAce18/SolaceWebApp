import Image from 'next/image';
import '../app/globals.css'
import PharmacyForm from '@/app/components/HospitalForm'
import { Navbar } from '@/app/components/Navbar';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';
import HospitalForm from '@/app/components/HospitalForm';


const PartnerHospitalForm = () => {
    return (
        <>
        <Navbar />
        <div className="lg:pt-32 pt-16">
            <h1 className="font-normal lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] tracking-[-1px] text-center max-w-[935px] mx-auto text-[#121933]">Solace Partnership Form for Hospital & Clinic Owners, Nationwide</h1>
            <HospitalForm />
            <div>
                <Newsletter />

                <Footer />
            </div>
        </div>
        </>
    )
}


export default PartnerHospitalForm;