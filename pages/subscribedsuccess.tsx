import Image from 'next/image';
import '../app/globals.css'
import Covetti from '../public/assests/Covetti.svg'
import OvalSvg from '../public/assests/Oval.svg'
import SendSvg from '../public/assests/Send.svg'


const SubscribedSuccess = () => {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-[100vh]">
            <div className="relative">
                <Image width={100} height={100} src={OvalSvg} alt="OvalSvg" />
                <div className="absolute top-[40px] right-[30px] left-[35px] bottom-[30px]">
                    <Image src={SendSvg} alt="SendSvg" />
                </div>
            </div>

            <div className='absolute top-0 left-0 right-0 w-full'>
                <Image className="object-cover" width={1280} height={276.27} src={Covetti} alt=" CovettiBg" />
            </div>

                

            <h1 className="pt-10 font-normal text-[32px] leading-[38px] text-[#121933] text-center">Payment Made Successfully</h1>

            <p className="lg:text-[17px] pt-[10px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%] text-[#7A7D9C] max-w-[534px] text-center">Your payment was made successfully. Check your email for your receipt of payment. Thank you for subscribing. </p>

            <a href="/" className="pt-16">
                <button className="bg-[#DBA73B] lg:text-[17px] text-[15px] font-semibold text-white py-[15px] lg:px-[200px] px-[80px] rounded-[8px]">
                    Return to homepage
                </button>
            </a>
        </div>
    )
}


export default SubscribedSuccess