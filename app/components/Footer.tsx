import Image from "next/image"
import Link from 'next/link'


import solaceLogo from '../../public/assests/Solace Logo.svg';
// import MailSvg from '../../public/assests/Mail.svg'
import CallSvg from '../../public/assests/call.svg'
import TiktokSvg from '../../public/assests/Tiktok.svg'
import YoutubeSvg from '../../public/assests/youtub.svg'
import FacebookSvg from '../../public/assests/facebooksocial.svg'
import LinkedInSvg from '../../public/assests/Linkedin.svg'

const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Cover', path: '/cover' },
    { name: 'Lace AI', path: '/lace-ai' },
    { name: 'Career', path: '/career' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ];

export function Footer() {
    return(

        <>
        <div className="pt-20 ">
        
            <div className="bg-[#121933] py-[50px] ">
                <div className="footer-bg pb-[30px] border-b-[1px] max-w-[1280px] mx-auto border-b-[#FFFFFF80]   lg:flex items-center justify-center gap-80">
                    <div>
                        <a href="/">
                            <Image className="mx-auto lg:mx-0" src={solaceLogo} alt="FooterLogo" />
                        </a>
                    </div>
                    <div className=" lg:flex gap-20 items-center">
                        {footerLinks.map((item, index) => (
                            <Link key={index} href={item.path} passHref>
                            <p className="Footer-links pt-[20px] lg:pt-0 mx-auto lg:mx-0 text-center text-Fazanova-white transition-all hover:text-Fozanova-gold lg:text-[17px] text-[15px] font-medium leading-[27px] tracking-[-0.2%]">{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="max-w-[1280px] mx-auto lg:flex items-center gap-56 justify-center border-b-[1px]  border-b-[#FFFFFF80]">
                    <div className="">
                        <h6 className="pt-[30px] text-center lg:text-[20px] text-[17px] lg:leading-[20px] leading-[17px] font-semibold text-white">Coverage</h6>
                        <p className="pb-[30px] mx-auto text-white pt-[10px] lg:text-[17px] text-[15px] lg:leading-[26px] tracking-[-0.4%] max-w-[219px] text-center ">36 States of the Federation Including the FCT, Abuja.</p>
                    </div>
                    <div>
                        <h6 className="text-center lg:text-[20px] text-[17px] leading-[17px] lg:leading-[20px] font-semibold text-white pt-[30px]">Address</h6>
                        <p className="mx-auto pb-[30px] pt-[10px] max-w-[264px] text-white text-[17px] text-center">Plot 750, Aminu Kano Crescent, Wuse 2, Abuja.</p>
                    </div>

                    <div>
                        <h6 className="text-center lg:text-[20px] text-[17px] leading-[20px] font-semibold text-white  pt-[30px]">Contact</h6>
                        <div className="justify-center lg:justify-end flex items-center gap-[5px] pt-[10px]">
                            {/* <Image src={MailSvg} alt="emailSvg" /> */}
                            <span className="text-white">support@solace.com.ng</span>
                        </div>
                        <div className="justify-center lg:justify-end  pb-[30px] flex items-center gap-[5px] pt-[10px]">
                            <Image src={CallSvg} alt="callSvg" />
                            <span className="text-white">(+234 ) 802 7564 943</span>
                        </div>
                    </div>
                </div>


                <div className=" lg:flex items-center justify-between max-w-[1280px] mx-auto pt-[25px]">
                    <p className="lg:max-w-[781px] max-w-[300px] mx-auto lg:mx-0 text-center lg:text-left lg:text-[12px] text-[10px] font-normal leading=[18px] tracking-[0.4px] text-white">© 2024 Gmonie Technologies Ltd. All rights reserved. Solace is a health technology platform, not an insurance company or a bank. All services are provided by our licensed partners. By using this website, you accept our <span className="text-[#DBA73B]">Terms of Use</span>  and <span className="text-[#DBA73B]">Privacy Policy.</span></p>


                    <div className="flex items-center gap-[15px] justify-center lg:justify-end pt-[10px]">
                        <a href="/">
                            <Image width={13.87} height={16} src={TiktokSvg} alt="tiktoksvg" />
                        </a>
                        <a href="/">
                            <Image width={22.83} height={16} src={YoutubeSvg} alt="youtubesvg" />
                        </a>
                        <a href="/">
                            <Image width={7.47} height={16} src={FacebookSvg} alt="facebookSvg"/>
                        </a>
                        <a href="/">
                            <Image width={16.94} height={16} src={LinkedInSvg} alt="linkedinSvg" />
                        </a>
                    </div>
                </div>
            </div>

                
                 

           
        </div>
        </>
    )
}