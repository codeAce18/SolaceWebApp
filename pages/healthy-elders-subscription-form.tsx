import Image from 'next/image';
import '../app/globals.css'
import HealthyEldersForm from '@/app/components/HealthyEldersForm';
import { Navbar } from '@/app/components/Navbar';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';


const HealthyEldersSubscriptionForm = () => {
    return (
        <>
        <Navbar />
        <div className="lg:pt-32 pt-16">
            <HealthyEldersForm />
            <div>
                <Newsletter />

                <Footer />
            </div>
        </div>
        </>
    )
}


export default HealthyEldersSubscriptionForm