import { SetStateAction, useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import '../app/globals.css';
import Image from "next/image";
import Link from "next/link";
import Checksvg from '../public/assests/CheckSvg.svg';
import { Newsletter } from "@/app/components/Newsletter";
import { Footer } from "@/app/components/Footer";
import { motion } from 'framer-motion';

const PaymentPlans = {
  quarterly: [
    { id: 1, amount: 30000.00, plan: "Per Quarter, Per Beneficiary.", header: "Pink Diamond Plan", benefit: "2m", mortuaryExpenses: "90 days", casketType: "Basic casket provided.", tombType: "Basic tomb preparation" , noProff: 4, noDays: 1,  dayType: 1, consult: "Free consultation."},
    { id: 2, amount: 60000.00, plan: "Per Quarter, Per Beneficiary.", header: "Blue Diamond Plan", benefit: "4m", mortuaryExpenses: "180 days", casketType: "Modern casket provided.", tombType: "Basic tomb preparation", noProff: 5, noDays: 2 ,  dayType: 2, consult: "Free consultation." },
    { id: 3, amount: 90000.00, plan: "Per Quarter, Per Beneficiary.", header: "Red Diamond Plan", benefit: "8m", mortuaryExpenses: "365 days", casketType: "High Premium casket provided.", tombType: "Advanced tomb preparation", noProff: 5, noDays: 3 , dayType: "+ streaming of funeral for up to 3", consult: "Free consultation + dedicated event manager." },
  ],
  biannual: [
    { id: 1, amount: 60000.00, plan: "Per Bi-Annual, Per Beneficiary.", header: "Pink Diamond Plan", benefit: "2m", mortuaryExpenses: "90 days", casketType: "Basic casket provided.", tombType: "Basic tomb preparation", noProff: 4, noDays: 1 ,  dayType: 1, consult: "Free consultation."},
    { id: 2, amount: 90000.00, plan: "Per Bi-Annual, Per Beneficiary.", header: "Blue Diamond Plan", benefit: "4m", mortuaryExpenses: "180 days", casketType: "Modern casket provided", tombType: "Basic tomb preparation", noProff: 5, noDays: 2, dayType: 2 , consult: "Free consultation."},
    { id: 3, amount: 150000.00, plan: "Per Bi-Annual, Per Beneficiary.", header: "Red Diamond Plan", benefit: "8m", mortuaryExpenses: "365 days", casketType: "High Premium casket provided.", tombType: "Advanced tomb preparation", noProff: 5, noDays: 3 , dayType: "+ streaming of funeral for up to  3days", consult: "Free consultation + dedicated event manager."},
  ],
  annual: [
    { id: 1, amount: 90000.00, plan: "Per Annual, Per Beneficiary.", header: "Pink Diamond Plan", benefit: "2m", mortuaryExpenses: "90 days", casketType: "Basic casket provided.", tombType: "Basic tomb preparation", noProff: 4, noDays: 1, dayType: 1 , consult: "Free consultation."},
    { id: 2, amount: 150000.00, plan: "Per Annual, Per Beneficiary.", header: "Blue Diamond Plan", benefit: "4m", mortuaryExpenses: "180 days", casketType: "Modern casket provided.", tombType: "Basic tomb preparation", noProff: 5, noDays: 2 , dayType: 2 , consult: "Free consultation."},
    { id: 3, amount: 250000.00, plan: "Per Annual, Per Beneficiary.", header: "Red Diamond Plan", benefit: "8m", mortuaryExpenses: "365 days", casketType: "High Premium casket provided.", tombType: "Advanced tomb preparation", noProff: 5, noDays: 3, dayType: "+ streaming of funeral for up to 3 3days", consult: "Free consultation + dedicated event manager." },
  ],
};

const PaymentPlanKeys = ['quarterly', 'biannual', 'annual'] as const;
type PaymentPlanKey = typeof PaymentPlanKeys[number];
const Cover = () => {
  const [selectedPlan, setSelectedPlan] = useState(PaymentPlans.annual);
  const [selectedButton, setSelectedButton] = useState('annual');

 
  const handleButtonClick = (button: PaymentPlanKey) => {
    setSelectedPlan(PaymentPlans[button]);
    setSelectedButton(button);
  };


  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };


  return (
    <>
      <Navbar />
      <div className="lg:pt-32 pt-16">
        <div className="flex flex-col justify-center items-center">
          <motion.h1 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="lg:max-w-[935px] max-w-[350px] lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] tracking-[-1px] text-center text-Fozanova-Black">
            Subscribe to Solace Farewell Cover, Get Up To ₦1,000,000 Cashback on Every<br/> 5 Subscriptions Paid.
          </motion.h1>
          <motion.p 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="lg:pt-[30px] pt-[20px] lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%] lg:max-w-[930px] max-w-[350px] text-p-grey text-center">
            Solace Farewell Cover (SFC) is a form of funeral management package that provides funeral expenses coverage to subscribers on behalf of themselves or their loved ones in the case of their demise. While your plan is active, we automatically reimburse you with up to ₦1,000,000 for every five subscriptions paid, depending<br/> on your plan type, if no loss of self or a loved one occurs during that period.
          </motion.p>
        </div>

        <div className="pt-20">
          <div className="lg:flex lg:flex-row flex flex-col gap-[30px] items-center justify-center lg:gap-20">
            {Object.keys(PaymentPlans).map(key => (
              <button
                key={key}
                onClick={() => handleButtonClick(key as 'quarterly' | 'biannual' | 'annual')}
                className={`${selectedButton === key ? 'border-[1px] border-[#DBA73B] bg-[#FDF9F1]' : ''} text-Fozanova-gold lg:text-[17px] text-[15px] lg:leading-[24px] leading-[22px] font-semibold p-[8px] rounded-[4px]`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)} Payment
              </button>
            ))}
          </div>

          <div className="lg:pt-20 pt-[27px]">
            <div className="lg:flex lg:flex-row flex flex-col items-center justify-center gap-10">
              {selectedPlan.map(plan => (
                <div key={plan.id} className="bg-Fazanova-white border-[1px] border-[#EFF0F6] rounded-[8px] max-w-[373px] py-[30px] px-[48px] h-[1120px] ">
                  <h6 className="font-semibold text-center text-[22px] text-Fozanova-Black leading-[30px] lg:leading-[36px] lg:text-[24px]">{plan.header}</h6>
                  <h1 className="text-center text-[40px] text-Fozanova-Black lg:leading-[54.84px] leading-[50px] pt-[25px]">₦{plan.amount.toLocaleString()}</h1>
                  <p className="text-center max-w-[123px] mx-auto text-[15px] text-p-grey lg:leading-[22px] leading-[20px] tracking-[-0.2px] font-normal lg:text-[17px]">{plan.plan}</p>

                  <div className="pt-[30px] lg:pt-[35px]">
                    <div className="flex flex-col justify-center items-center">
                      <Link href="/farewellcoversubscriptionform" >
                        <button className="lg:text-[17px] text-[15px] font-semibold rounded-[8px] lg:leading-[24px] leading-[22px] mx-auto text-Fazanova-white bg-Fozanova-gold w-[240px] h-[48px]">
                          Subscribe
                        </button>
                      </Link>
                      <p className="text-center lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4px] font-medium text-Fozanova-gold max-w-[269px] pt-[25px]">
                        Service Benefits worth ₦{plan.benefit} (T&C Apply)
                      </p>
                    </div>

                    {[
                      "Intrastate corpse transportation to mortuary",
                      `Mortuary expenses covered for up to ${plan.mortuaryExpenses}.`,
                      `${plan.casketType}`,
                      "Musical band for procession.",
                      "Intrastate transportation to lying in state venue.",
                      "Venue setup and decoration.",
                      "Intrastate transportation to church.",
                      `${plan.tombType}` ,
                      "Intrastate transportation to burial ground.",
                      ` ${plan.noProff} professional undertakers for ${plan.noDays} days.`,
                      `Professional video coverage for ${plan.dayType} day.`,
                       `${plan.consult}`,
                    ].map((benefit, index) => (
                      <div key={index} className="pt-[20px]">
                        <div className="flex gap-[5px] items-start">
                          <Image src={Checksvg} alt="Checksvg" />
                          <p>{benefit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <Newsletter />

      <Footer />
    </>
  );
};

export default Cover;
