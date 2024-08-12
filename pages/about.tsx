import { Navbar }  from '@/app/components/Navbar'
import "../app/globals.css";
import Image from 'next/image';
import { motion } from 'framer-motion';  // Import framer-motion

import AboutImg from '../public/assests/AboutImg.png'
import AboutUsImg from '../public/assests/AboutUaImg.png'
import AboutUsSvg from '../public/assests/AboutUsSvg.svg'
import OurValueSvg from '../public/assests/OurValues.svg'
import HeartsSvg from '../public/assests/heart.svg'
import InnovationSvg from '../public/assests/InnovationSvg.svg'
import PartnershipSvg from '../public/assests/PartnershipSvg.svg'
import CustomercentricSvg from '../public/assests/CustomerCentricSvg.svg'
import SustainabilitySvg from '../public/assests/SustainabilitySvg.svg'
import ExcellenceSvg from '../public/assests/ExcellenceSvg.svg'
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';

const About = () => {

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
        <motion.h1 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="font-normal lg:text-[48px] text-[35px] tracking-[-1px] text-center lg:max-w-[935px] max-w-[600px] mx-auto text-Fozanova-Black lg:leading-[58px] leading-[50px] lg:h-[174px]"
        >
          Our goal is to become the leading provider of wellness and farewell services to 14.8 million Nigerians aged 60 years and above.
        </motion.h1>

        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="pt-16 px-[20px] lg:px-0 max-w-[1058px] mx-auto"
        >
          <Image className="rounded-xl object-cover" src={AboutImg} alt="AboutImg" />
        </motion.div>

        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-20 px-[20px] lg:px-0"
        >
          <div className="bg-Fazanova-white rounded-[32px] border-[1px] border-[#EFF0F6] max-w-[1157px] mx-auto py-[36px] px-[28px] lg:flex items-center justify-center gap-10">
            <div className="flex flex-col gap-y-[20px]">
              <motion.div variants={imageVariants} initial="hidden" animate="visible" transition={{ duration: 0.8 }}>
                <Image className="mx-auto lg:mx-0" width={143} height={40} src={AboutUsSvg} alt="aboutUsSvg" />
              </motion.div>
              <p className="font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[20px] text-p-grey max-w-[501px] tracking-[-0.4%] mx-auto">At Solace, we specialize in enabling the provision of top-quality elderly care services that go beyond ensuring that the older adults are free from illnesses or diseases. We leverage on our proprietary AI model to provide proactive and holistic care for the elderly, catering to their general well-being.</p>
              <p className="font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[20px] text-p-grey max-w-[501px] tracking-[-0.4%] mx-auto">Solace started as a personal project while one of the founders was mastering User Experience design in 2022. During the research phase of the healthtech project, he discovered that most seniors in Nigeria aged 60 years and above dont enjoy their seniorhood because there is no solution that takes proper care of their total well-being.</p>
              <p className="font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[20px] text-p-grey max-w-[501px] tracking-[-0.4%] mx-auto">The two co-founders, Paul and Precious, decided to address this significant problem. We built Solace to provide comfort to the elderly through top-quality service offerings powered by innovative technology.</p>
            </div>
            <motion.div variants={imageVariants} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.3 }} className="max-w-[553px] pt-[40px] lg:pt-0 mx-auto">
              <Image className="rounded-[20px] object-cover" src={AboutUsImg} alt="AboutUsImage" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={textVariants} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4 }} className="pt-20">
          <div className="flex flex-col items-center justify-center">
            <motion.div variants={imageVariants} initial="hidden" animate="visible" transition={{ duration: 0.8 }}>
              <Image width={143} height={40} src={OurValueSvg} alt="OurvaluesSvg" />
            </motion.div>
            <h1 className="text-center font-normal lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] tracking-[-1px] text-[#1B152B] max-w-[800px]">We are driven by strong core values</h1>
            <p className="pt-[10px] text-center font-normal lg:text-[17px] text-[15px] leading-[27px] tracking-[-0.2px] text-p-grey lg:max-w-[800px] max-w-[400px]">Our core values are essentially our guiding principles, the beliefs that inform every action we take and every decision we make. Below are the values in which the Solace brand is built on.</p>
          </div>

          <div className="p-10">
            <div className="flex justify-center items-center">
              <motion.div 
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8 }}
                className="bg-Fazanova-white rounded-[16px] border-[1px] border-[#EFF0F6] py-[47px] px-[32px] max-w-[1055px] grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-20 lg:gap-y-36 gap-y-28"
              >
                <div className="lg:border-r-[1px] border-r-[#EFF0F6] lg:pr-8 flex flex-col justify-center items-center">
                  <Image className="mx-auto" width={36} height={36} src={HeartsSvg} alt="HeartSvg" />
                  <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal lg:leading-[32px] leading-[30px] text-Fozanova-Black">Empathy</h1>
                  <p className="pt-5 text-center max-w-[231px] font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%] text-p-grey">We prioritize understanding your challenges. By seeing things from your perspective, we craft solutions that truly address your pain points.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image className="mx-auto" width={36} height={36} src={InnovationSvg} alt="innovationSvg" />
                  <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal leading-[32px] text-Fozanova-Black">Innovation</h1>
                  <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey">We spark innovation in the elderly care industry through a culture of creativity and constant improvement on our platform. There is excellence in all we do.</p>
                </div>
                <div className="lg:border-l-[1px] border-l-[#EFF0F6] lg:pl-8 flex flex-col justify-center items-center">
                  <Image className="mx-auto" width={45} height={36} src={PartnershipSvg} alt="partnershipSvg" />
                  <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal leading-[32px] text-Fozanova-Black">Partnership</h1>
                  <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey">We unlock greater value for our clients by partnering on a global scale, empowering success across Africa. Partnership for better service delivery all the time.</p>
                </div>
                <div className="lg:border-r-[1px] border-r-[#EFF0F6] lg:pr-8 flex flex-col justify-center items-center">
                  <Image className="mx-auto" width={36} height={36} src={CustomercentricSvg} alt="customerCentricSvg" />
                  <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal leading-[32px] text-Fozanova-Black">Customer Centric</h1>
                  <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey"> Putting our customers is at the heart of everything we do, delivering exceptional experiences and exceeding their expectations.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image className="mx-auto" width={36} height={36} src={SustainabilitySvg} alt="sustainabilitySvg" />
                  <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal leading-[32px] text-Fozanova-Black">Sustainability</h1>
                  <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey">Creating a positive impact through environmental and social responsibility initiatives. Together, we are building a sustainable future the next generation.</p>
                </div>
                <div className="lg:border-l-[1px] border-l-[#EFF0F6] lg:pl-8 flex flex-col justify-center items-center">
                  <Image className="mx-auto" width={36} height={36} src={ExcellenceSvg} alt="excellenceSvg" />
                  <h1 className="pt-5 text-center max-w-[262px] lg:text-[28px] text-[24px] font-normal leading-[32px] text-Fozanova-Black">Excellence</h1>
                  <p className="pt-5 text-center max-w-[262px] font-normal text-[17px] leading-[26px] tracking-[-0.4%] text-p-grey">Pursuing excellence in all aspects of our work, setting high standards and striving for continuous growth and improvement.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
