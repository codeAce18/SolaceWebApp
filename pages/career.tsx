import { Navbar } from "@/app/components/Navbar";
import Image from "next/image";

import '../app/globals.css'


import CareerImage from '../public/assests/CareerImage.png'
import CareerImg from '../public/assests/CareerImg.png'
import CareerSvg from '../public/assests/Career.svg'
import PerksSvg from '../public/assests/PerksSvg.svg'
import CircularArrow from '../public/assests/CircularArrow.svg'
import { Newsletter } from "@/app/components/Newsletter";
import { Footer } from "@/app/components/Footer";

const Career = () => {
    return (

      <>

        <Navbar />

        <div className="lg:pt-32 pt-16">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-normal lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] text-Fozanova-Black max-w-[935px] tracking-[-1px]">Join us, let&apos;s give the elderly solace</h1>

            <p className="lg:pt-[20px] pt-[16px] text-[15px] lg:text-[17px] tracking-[-0.4%] leading-[22px] max-w-[930px] text-center text-p-grey lg:leading-[26px]">Looking for an opportunity to showcase your skills and bring your creativity to live? Join our global team of talented workforce today and be part of the team revolutionizing the elderly care industry in Africa. </p>

            <Image className="lg:pt-20 pt-16" width={765} height={765} src={CareerImg} alt="CareerImg" />
          </div>



          <div className="pt-16">
              <div className="lg:flex lg:flex-row flex flex-col-reverse items-center justify-center gap-10">
                <div className="p-[20px] lg:p-0">
                  <Image className="lg:rounded-[32px] rounded-[20px]" width={561} height={407} src={CareerImage} alt="CareerImage" />
                </div>


                <div>
                  <Image className="pb-[15px] mx-auto lg:mx-0" width={87} height={40} src={PerksSvg} alt="PerksSvg" />

                  <h1 className="text-center lg:text-left font-normal text-Fozanova-Black text-[40px] lg:text-[48px] lg:leading-[58px] leading-[50px] tracking-[-0.4%] max-w-[422px]">Perks That Go Beyond Borders</h1>

                  <p className="pt-[30px] text-center lg:text-left text-[15px] text-p-grey lg:text-[17px] leading-[22px] lg:leading-[26px] max-w-[417px]">Enjoy flexible work environments, cultural diversity, personal development opportunities, travel adventures, wellness benefits and competitive compensation.</p>
                </div>
              </div>
          </div>


          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 max-w-[1058px] gap-6 pt-10 mx-auto">
              <div className="border-[1px] border-[#EFF0F6] lg:rounded-[8px] lg:max-w-[570px] mx-auto lg:mx-0 py-[22px] px-[20px]  bg-Fazanova-white">
                <h1 className="border-b-[1px] border-b-[#D9D9D9] pb-[10px] lg:text-[20px] text-[17px] font-normal leading-[27.42px] tracking-[-0.96px] text-Fozanova-Black">Flexible Work Environment</h1>

                <p className="text-[15px] pt-[10px] lg:text-[17px] text-p-grey lg:leading-[26px] leading-[22px] tracking-[-0.4%] max-w-[492px] ">Enjoy the freedom to work from anywhere in the world, whether it&apos;s the comfort of your home office or the excitement of a new city. Embrace a work-life balance that suits your needs.</p>
              </div>

              <div className="border-[1px] border-[#EFF0F6] lg:rounded-[8px] max-w-[570px]  mx-auto lg:mx-0 py-[22px] px-[20px]  bg-Fazanova-white">
                <h1 className="lg:text-[20px] border-b-[1px] border-b-[#D9D9D9] pb-[10px] text-[17px] font-normal leading-[27.42px] tracking-[-0.96px] text-Fozanova-Black">Cultural Diversity</h1>

                <p className="text-[15px] pt-[10px] lg:text-[17px] text-p-grey lg:leading-[26px] leading-[22px] tracking-[-0.4%] max-w-[492px] ">Experience the richness of working with a global team. Collaborate with professionals from different backgrounds, cultures, and perspectives, fostering creativity, innovation, and personal growth.</p>
              </div>

              <div className="border-[1px] border-[#EFF0F6] rounded-[8px] max-w-[570px]  mx-auto lg:mx-0 py-[22px] px-[20px]  bg-Fazanova-white">
                <h1 className="lg:text-[20px] border-b-[1px] border-b-[#D9D9D9] pb-[10px] text-[17px] font-normal leading-[27.42px] tracking-[-0.96px] text-Fozanova-Black">Personal Development</h1>

                <p className="text-[15px] lg:text-[17px] text-p-grey lg:leading-[26px] leading-[22px] tracking-[-0.4%] max-w-[492px] ">Gain access to a wide range of learning and development opportunities. From training programs to conferences, sharpen your skills and expand your knowledge to stay ahead in the ever-evolving industry.</p>
              </div>

              <div className="border-[1px] border-[#EFF0F6] lg:rounded-[8px] max-w-[570px]  mx-auto lg:mx-0 py-[22px] px-[20px]  bg-Fazanova-white">
                <h1 className="lg:text-[20px] border-b-[1px] border-b-[#D9D9D9] pb-[10px] text-[17px] font-normal leading-[27.42px] tracking-[-0.96px] text-Fozanova-Black">Travel Opportunities</h1>

                <p className="text-[15px] lg:text-[17px] pt-[10px] text-p-grey lg:leading-[26px] leading-[22px] tracking-[-0.4%] max-w-[492px] ">Embark on exciting journeys and visit different locations as part of your job. Engage in on-site collaborations, attend conferences, or simply enjoy the experience of working in diverse environments.</p>
              </div>

              <div className="border-[1px] border-[#EFF0F6] lg:rounded-[8px] max-w-[570px]  mx-auto lg:mx-0 py-[22px] px-[20px]  bg-Fazanova-white">
                <h1 className="lg:text-[20px] border-b-[1px] border-b-[#D9D9D9] pb-[10px] text-[17px] font-normal leading-[27.42px] tracking-[-0.96px] text-Fozanova-Black">Wellness Benefits</h1>

                <p className="text-[15px] lg:text-[17px] pt-[10px] text-p-grey lg:leading-[26px] leading-[22px] tracking-[-0.4%] max-w-[492px] ">Enjoy robust HMO cover from the day of your confirmation. We ensure our staff’s health are covered by providing them with health insurance plan that ensures that we have a healthy workforce, worldwide. </p>
              </div>

              <div className="border-[1px] border-[#EFF0F6] lg:rounded-[8px] max-w-[570px]  mx-auto lg:mx-0 py-[22px] px-[20px]  bg-Fazanova-white">
                <h1 className="lg:text-[20px] border-b-[1px] border-b-[#D9D9D9] pb-[10px] text-[17px] font-normal leading-[27.42px] tracking-[-0.96px] text-Fozanova-Black">Competitive Compensation</h1>

                <p className="text-[15px] lg:text-[17px] pt-[10px] text-p-grey lg:leading-[26px] leading-[22px] tracking-[-0.4%] max-w-[492px] ">Benefit from a competitive compensation package that recognizes your skills and contributions. Enjoy the perks of a global company that values your expertise and rewards you accordingly.</p>
              </div>
            </div>
          </div>

          <div className="lg:pt-32 pt-20">
            <div className="flex flex-col justify-center items-center">
              <Image className="mx-auto" src={CareerSvg} alt="CareerSvg" />

              <h1 className="font-normal lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] tracking-[-1px] text-center lg:max-w-[800px] max-w-[300px]">New job opportunities</h1>

              <p className="text-p-grey lg:text-[17px] text-[15px] font-normal lg:leading-[26px] leading-[22px] tracking-[-0.4%] lg:max-w-[720px] max-w-[300px] text-center">Browse through vacancies. internships and job postings at Solace.</p>
            </div>
          </div>



          <div className="pt-[30px]">
            <div className="grid grid-cols-1 gap-y-[25px]">
              <div className="mx-auto py-[22px] border-[1px] rounded-[8px] border-[#EFF0F6]  px-[20px] flex items-center max-w-[1065px] bg-Fazanova-white gap-20">
                <div>
                  <h1 className="text-[#272422] max-w-[800px]   lg:text-[20px] text-[17px] font-normal leading-[27.42px] tracking-[-0.96px]">Business Developers</h1>
                  <h6 className="text-p-grey pt-[5px]">Full Time - <span className="text-[#121933]">Remote</span></h6>
                  <p className="lg:text-[17px] text-[15px] text-p-grey leading-[26px] tracking-[0.4%]">Solace is in need of a result-oriented Business Developer in Lagos, Port Harcourt and Abuja. <span className="text-Fozanova-gold"> Read more.</span></p>
                </div>

                <div>
                  <a href="/">
                    <Image className="hidden lg:flex" src={CircularArrow} alt="CircularArrow" />
                  </a>
                </div>
              </div>


              <div className="mx-auto gap-[64px] flex border-[1px] border-[#EFF0F6] rounded-[8px]  items-center py-[22px] px-[20px] bg-Fazanova-white">
                <div>
                  <h1 className="text-[#272422] text-[20px] max-w-[800px] font-normal leading-[27.42px] tracking-[-0.96px]">Fullstack Mobile Developer</h1>
                  <h6 className="text-p-grey pt-[5px]">Full Time - <span className="text-[#121933]">Remote</span></h6>
                  <p className="lg:text-[17px] text-[15px] text-p-grey leading-[26px] tracking-[0.4%]">Solace is in need of an experienced Fullstack mobile developer from Nigeria, Pakistan or India.<span className="text-Fozanova-gold"> Read more.</span></p>
                </div>

                <div>
                  <a href="/">
                    <Image className="hidden lg:flex" src={CircularArrow} alt="CircularArrow" />
                  </a>
                </div>
              </div>


              <div className="mx-auto gap-24 border-[1px]  border-[#EFF0F6] rounded-[8px]  flex items-center py-[22px] px-[20px]  bg-Fazanova-white">
                <div>
                  <h1 className="text-[#272422] text-[20px] font-normal leading-[27.42px] tracking-[-0.96px]">Generative AI Engineer</h1>
                  <h6 className="text-p-grey pt-[5px]">Full Time - <span className="text-[#121933]">Remote</span></h6>
                  <p className="lg:text-[17px] text-[15px] text-p-grey leading-[26px] tracking-[0.4%]">Solace is in need of an experienced Generative AI Engineer from Nigeria, Pakistan or India.<span className="text-Fozanova-gold"> Read more.</span></p>
                </div>

                <div>
                  <a href="/">
                    <Image className="hidden lg:flex" src={CircularArrow} alt="CircularArrow" />
                  </a>
                </div>
              </div>


              <div className="mx-auto gap-24 border-[1px] border-[#EFF0F6] rounded-[8px] flex items-center py-[22px] px-[20px]  bg-Fazanova-white">
                <div>
                  <h1 className="text-[#272422] text-[20px] max-w-[800px] font-normal leading-[27.42px] tracking-[-0.96px]">Funeral Managers</h1>
                  <h6 className="text-p-grey pt-[5px]">Full Time - <span className="text-[#121933]">Remote</span></h6>
                  <p className="lg:text-[17px] text-[15px] text-p-grey leading-[26px] tracking-[0.4%]">Solace is in need of a result-oriented Funeral Manager in Lagos, Port Harcourt and Abuja.<span className="text-Fozanova-gold"> Read more.</span></p>
                </div>

                <div>
                  <a href="/">
                    <Image className="hidden lg:flex" src={CircularArrow} alt="CircularArrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Newsletter />

        <Footer />

      </>
    );
  };
  
  export default Career;
  