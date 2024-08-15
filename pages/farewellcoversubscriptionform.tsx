import Image from 'next/image';
import '../app/globals.css'
import FarewellCoverForm from '@/app/components/FarewellCoverForm';
import { Navbar } from '@/app/components/Navbar';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';


const FarewellCoverSubscriptionForm = () => {
    return (
        <>
        <Navbar />
        <div className="lg:pt-32 pt-16">
            <FarewellCoverForm />
            <div>
                <Newsletter />

                <Footer />
            </div>
        </div>
        </>
    )
}


export default FarewellCoverSubscriptionForm;