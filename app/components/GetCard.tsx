import Image from "next/image";
import Vector from '../../public/assests/Vector.svg';
import SolaceCardBanner from '../../public/assests/SolaceCardBanner.svg';

export function GetCard() {
    return (
        <div className="pt-32">
            <div className="relative  lg:rounded-[18px] bg-[#6B5AED] max-w-[1058px] lg:h-[446.5px] h-[395px] overflow-hidden mx-auto flex items-center">
                <div className="relative z-10 flex flex-col items-start mx-auto lg:mx-0 pl-10">
                    <h1 className="text-Fazanova-white lg:text-[52px] text-[40px] lg:leading-[58px] leading-[50px] font-normal tracking-[-1px] lg:max-w-[520px] max-w-[290px]">
                        Save up to ₦1.8M yearly on elderly medical expenses.
                    </h1>

                    <a href="/" className="inline-flex items-center lg:pt-16 pt-10">
                        <button
                            className="lg:text-[20px] text-[15px] font-semibold leading-[24px] rounded-[16.43px] py-[12.32px] px-[24.65px] border-[2px] border-white text-Fazanova-white shadow-lg flex items-center"
                            style={{
                                background: 'linear-gradient(270deg, #8D7EFF 0.08%, #6B5AED 96.5%)'
                            }}
                        >
                            Get a Solace Card
                            <span className="ml-2">
                                <Image src={Vector} alt="ArrowRight" />
                            </span>
                        </button>
                    </a>
                </div>

                <div className="absolute top-[-139px] right-[-250px] bottom-0">
                    <Image width={700} height={460} src={SolaceCardBanner} alt="solaceCardBanner" className="object-cover hidden lg:flex" />
                </div>
            </div>
        </div>
    );
}






// import Image from "next/image";
// import Vector from '../../public/assests/Vector.svg';
// import SolaceCardBanner from '../../public/assests/SolaceCardBanner.svg';

// export function GetCard() {
//     return (
//         <div className="pt-32">
//             <div className="relative rounded-[18px] bg-[#6B5AED] max-w-[1058px] h-[446.5px] overflow-hidden mx-auto flex items-center">
//                 <div className="relative z-10 flex flex-col items-start pl-10">
//                     <h1 className="text-Fazanova-white text-[52px] leading-[58px] font-normal tracking-[-1px] max-w-[520px]">
//                         Save up to ₦1.8M yearly on elderly medical expenses.
//                     </h1>

//                     <a href="/" className="inline-flex items-center mt-4">
//                         <button
//                             className="rounded-[16.43px] py-[12.32px] px-[24.65px] border-[2px] border-white text-Fazanova-white shadow-lg"
//                             style={{
//                                 background: 'linear-gradient(270deg, #8D7EFF 0.08%, #6B5AED 96.5%)'
//                             }}
//                         >
//                             Get a Solace Card
//                             <span className="ml-2">
//                                 <Image src={Vector} alt="ArrowRight" />
//                             </span>
//                         </button>
//                     </a>
//                 </div>

//                 <div className="absolute top-[-139px] right-[-250px] bottom-0">
//                     <Image width={700} height={460} src={SolaceCardBanner} alt="solaceCardBanner" className="object-cover hidden lg:flex" />
//                 </div>
//             </div>
//         </div>
//     );
// }









// import Image from "next/image";
// import Vector from '../../public/assests/Vector.svg';
// import SolaceCardBanner from '../../public/assests/SolaceCardBanner.svg';

// export function GetCard() {
//     return (
//         <div className="pt-32">
//             <div className="relative rounded-[18px] bg-[#6B5AED] max-w-[1058px] h-[446.5px] overflow-hidden mx-auto flex items-center">
//                 <div className="relative z-10 flex flex-col items-start pl-10">
//                     <h1 className="text-Fazanova-white text-[52px] leading-[58px] font-normal tracking-[-1px] max-w-[520px]">
//                         Save up to ₦1.8M yearly on elderly medical expenses.
//                     </h1>

//                     <a href="/" className="inline-flex items-center mt-4 py-[12.32px] px-[24.65px] rounded-[16.43px]  border-[2px] border-[white]">
//                         <button className="rounded-lg shadow-lg text-Fazanova-white">
//                             Get a Solace Card
//                         </button>
//                         <span className="ml-2">
//                             <Image src={Vector} alt="ArrowRight" />
//                         </span>
//                     </a>
//                 </div>

//                 <div className="absolute top-[-139px] right-[-250px] bottom-0">
//                     <Image width={700} height={460} src={SolaceCardBanner} alt="solaceCardBanner" className="object-cover hidden lg:flex" />
//                 </div>
//             </div>
//         </div>
//     );
// }


// background: linear-gradient(270deg, #8D7EFF 0.08%, #6B5AED 96.5%);




// import Image from "next/image"
// import Vector from '../../public/assests/Vector.svg'
// import SolaceCardBanner from '../../public/assests/SolaceCardBanner.svg'

// export function GetCard() {
//     return (
//         <div className="pt-32">
//             <div className="relative bg-[#6B5AED] max-w-[1058px] h-[446.5px] overflow-hidden mx-auto flex items-center justify-center">
//                 <div className="z-10">
//                     <h1 className="text-[52px] leading-[58px] font-normal tracking-[-1px] max-w-[520px]">Save up to ₦1.8M yearly on elderly medical expenses.</h1>

//                     <a href="/" className="inline-flex items-center mt-4">
//                         <button className="bg-white text-[#6B5AED] px-4 py-2 rounded-lg shadow-lg">
//                             Get a Solace Card
//                         </button>
//                         <span className="ml-2">
//                             <Image src={Vector} alt="ArrowRight" />
//                         </span>
//                     </a>
//                 </div>

//                 <div className="absolute top-0 right-0 bottom-0">
//                     <Image width={450} height={560} src={SolaceCardBanner} alt="solaceCardBanner" className="object-cover" />
//                 </div>
//             </div>
//         </div>
//     )
// }






// import Image from "next/image"
// import Vector from '../../public/assests/Vector.svg'
// import SolaceCardBanner from '../../public/assests/SolaceCardBanner.svg'




// export function GetCard() {
//     return (
//         <div className="pt-32">
//             <div className="bg-[#6B5AED] max-w-[1058px] h-[446.5px] overflow-hidden mx-auto flex items-center justify-center">
//                 <div>
//                     <h1 className="text-[52px] leading-[58px] font-normal tracking-[-1px] max-w-[520px]">Save up to ₦1.8M yearly on elderly medical expenses.</h1>

//                     <a href="/">
//                         <button>
//                             Get a Solace Card
//                         </button>
//                         <span>
//                             <Image src={Vector} alt="ArrowRight" />
//                         </span>
//                     </a>
//                 </div>


//                 <div>
//                     <div>
//                         <Image  width={450} height={560} src={SolaceCardBanner} alt="solaceCardBanner" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }