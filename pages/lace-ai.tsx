import { Navbar } from "@/app/components/Navbar";
import Image from "next/image";
import { Newsletter } from "@/app/components/Newsletter";
import { Footer } from "@/app/components/Footer";
// import { Button } from 'antd';



import '../app/globals.css'
import LaceImg from '../public/assests/LaceImg.png'
import ComingSoonSvg from '../public/assests/ComingSoon.svg'
import JoinTheWaitingListSvg from '../public/assests/JoinTheWaitingListImg.svg'
import Form from "@/app/components/Form";






const LaceAI = () => {
    return (

      <>

        <Navbar />

        <div className="lg:pt-32 pt-20">
            <div className="flex flex-col justify-center items-center">
              <Image width={143} height={40} src={ComingSoonSvg } alt="ComingSoonSvg" />

              <h1 className="pt-[10px] font-normal lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] text-Fozanova-Black tracking-[-1px] max-w-[935px] text-center">Lace AI is a Revolutionary Health Intelligence System for Better Health Management.</h1>

              <p className="pt-[15px] font-normal tracking-[-0.4%] lg:text-[17px] text-[15px] text-p-grey lg:leading-[26px] leading-[22px] max-w-[930px] text-center ">It will integrate wearable health sensors that monitor vital signs, utilizing proprietary AI algorithms to analyze health data, identify trends and trigger alerts for potential health issues. Lace AI would enable timely 
              medical interventions and improve chronic disease management in Africa.</p>

              <div className="lg:pt-20 pt-14 p-[20px] lg:p-0 max-w-[1058px]">
                <Image className="rounded-[32px] object-cover" src={LaceImg} alt="LaceImg" />
              </div>
          </div>


          <div className="lg:pt-16">
            <div className="flex flex-col items-center justify-center">
              <Image src={JoinTheWaitingListSvg } alt="JoinTheWaitingListSvg " />

              <h1 className="max-w-[800px] lg:text-[48px] text-[40px] text-Fozanova-Black leading-[58px] font-normal text-center">Join hundreds on the waiting list to experience Lace AI in Africa</h1>
              <p className="text-p-grey lg:leading-[26px] leading-[22px] text-center tracking-[-0.2px] max-w-[742px] lg:text-[18px] text-[16px]">Fill the form below and you will be among the first enjoy our freebies when we launch Lace AI.</p>
            </div>
          </div>

        </div>

        <Form />

        <Newsletter />

        <Footer />
        

      </>
    );
  };
  
export default LaceAI;
  