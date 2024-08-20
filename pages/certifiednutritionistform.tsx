import Image from 'next/image';
import '../app/globals.css'
import { Navbar } from '@/app/components/Navbar';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';
import NutritionistForm from '@/app/components/NutritionistForm';


const CertifiedNutritionForm = () => {
    return (
        <>
        <Navbar />
        <div className="lg:pt-32 pt-16">
            <h1 className="font-normal lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] tracking-[-1px] text-center max-w-[935px] mx-auto text-[#121933]">Registration Form for Certified Nutritionists</h1>
            <NutritionistForm />
            <div>
                <Newsletter />

                <Footer />
            </div>
        </div>
        </>
    )
}


export default CertifiedNutritionForm;