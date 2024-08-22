import { Navbar } from "@/app/components/Navbar";
import Image from "next/image";
import { Newsletter } from "@/app/components/Newsletter";
import { Footer } from "@/app/components/Footer";
import '../app/globals.css'
import LaceImg from '../public/assests/LaceImg.png'
import ComingSoonSvg from '../public/assests/ComingSoon.svg'
import JoinTheWaitingListSvg from '../public/assests/JoinTheWaitingListImg.svg'
import Form from "@/app/components/Form";
import { motion } from 'framer-motion'; 









const LaceAI = () => {

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

        <div className="lg:pt-32 pt-20">
            <div className="flex flex-col justify-center items-center">
              <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              >
                <Image width={143} height={40} src={ComingSoonSvg } alt="ComingSoonSvg" />
              </motion.div>
              

              <motion.h1 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
              className="pt-[10px] font-normal lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] text-Fozanova-Black tracking-[-1px] max-w-[935px] text-center">Lace AI is a Revolutionary Health Intelligence System for Better Health Management.
              </motion.h1>

              <motion.p 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="pt-[15px] font-normal tracking-[-0.4%] lg:text-[17px] text-[15px] text-p-grey lg:leading-[26px] leading-[22px] max-w-[930px] text-center ">It will integrate wearable health sensors that monitor vital signs, utilizing proprietary AI algorithms to analyze health data, identify trends and trigger alerts for potential health issues. Lace AI would enable timely 
              medical interventions and improve chronic disease management in Africa.</motion.p>

              <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              className="lg:pt-20 pt-14 p-[20px] lg:p-0 max-w-[1058px]">
                <Image className="rounded-[32px] object-cover" src={LaceImg} alt="LaceImg" />
              </motion.div>
          </div>


          <div className="lg:pt-16">
            <div className="flex flex-col items-center justify-center">
              <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              >
                <Image src={JoinTheWaitingListSvg } alt="JoinTheWaitingListSvg " />
              </motion.div>
              

              <motion.h1 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="lg:max-w-[800px] max-w-[350px] lg:text-[48px] text-[40px] text-Fozanova-Black leading-[50px] lg:leading-[58px] font-normal text-center">Join hundreds on the waiting list to experience Lace AI in Africa</motion.h1>
              <motion.p 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="text-p-grey lg:leading-[26px] leading-[22px] text-center tracking-[-0.2px] max-w-[742px] lg:text-[18px] text-[16px]">Fill the form below and you will be among the first enjoy our freebies when we launch Lace AI.</motion.p>
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
  