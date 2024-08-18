import Image from 'next/image';
import '../app/globals.css'
// import FarewellCoverForm from '@/app/components/FarewellCoverForm';
import PharmacyForm from '@/app/components/PharmacyForm'
import { Navbar } from '@/app/components/Navbar';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';


const PartnerPharmacyForm = () => {
    return (
        <>
        <Navbar />
        <div className="lg:pt-32 pt-16">
            <h1 className="font-normal lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] tracking-[-1px] text-center max-w-[935px] mx-auto text-[#121933]">Solace Partnership Form for Pharmacy Owners, Nationwide</h1>
            <PharmacyForm />
            <div>
                <Newsletter />

                <Footer />
            </div>
        </div>
        </>
    )
}


export default PartnerPharmacyForm;