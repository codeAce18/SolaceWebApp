import Image from 'next/image';
import '../app/globals.css'
import OvalSvg from '../public/assests/Oval.svg'
import SendSvg from '../public/assests/Send.svg'


const LaceAiSuccess = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh]">
            <div className="relative">
                <Image width={100} height={100} src={OvalSvg} alt="OvalSvg" />
                <div className="absolute top-[40px] right-[30px] left-[35px] bottom-[30px]">
                    <Image src={SendSvg} alt="SendSvg" />
                </div>
            </div>

            <h1 className="font-normal text-[32px] leading-[38px] text-[#121933] ">Congratulations!</h1>

            <p className="lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%] text-[#7A7D9C] max-w-[534px] text-center">Your details have been submitted successfully. You will be update from time-to-time on the progress we are making before the official launch of Lace AI</p>

            <a href="/" className="pt-20">
                <button className="bg-[#DBA73B] lg:text-[17px] text-[15px] font-semibold text-white py-[15px] lg:px-[200px] px-[80px] rounded-[8px]">
                    Return to homepage
                </button>
            </a>
        </div>
    )
}


export default LaceAiSuccess