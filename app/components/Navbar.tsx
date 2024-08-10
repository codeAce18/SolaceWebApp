"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import solaceLogo from '../../public/assests/Solace Logo.svg';
import Menu from '../../public/assests/Menu.svg';
import Close from '../../public/assests/x-lg.svg'; // The Close icon

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Cover', path: '/cover' },
  { name: 'Lace AI', path: '/lace-ai' },
  { name: 'Career', path: '/career' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Blog', path: 'https://gmonie.com.ng/blog/' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="lg:fixed top-0 left-0 right-0  flex w-full items-center justify-between px-[20px] py-[14px]   z-50 bg-Fozanova-Black">
      <div className="flex flex-start items-center w-[100%]">
        <a href="/">
            <Image className="lg:w-[200px]" width={186} height={42} src={solaceLogo} alt="solaceLogo" />
        </a>

        <div className="hidden lg:flex items-center  lg:gap-x-[45px] xl:pl-28 lg:pl-10 md:pl-10">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.path} passHref>
              <p className="text-Fazanova-white transition-all hover:text-Fozanova-gold text-[17px] font-medium leading-24">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-end">
        <Image
          src={Menu}
          alt="MenuBtn"
          className="lg:hidden cursor-pointer"
          onClick={toggleMenu}
        />

        <button className="hidden p-[8px, 30px, 8px, 30px] bg-Fozanova-gold text-white text-[17px] lg:w-[261px] lg:h-[40px] font-semibold rounded-md leading-24 lg:block">
          <Link href="/healthy-elders-club">
            <p>Join Healthy Elders Club</p>
          </Link>
        </button>
      </div>

      <div className={`fixed top-0 left-0 w-64 h-full bg-Fozanova-Black transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-20`}>
        <div className="flex justify-end gap-[50px]  p-4">
            <a href="/">
              <Image width={130} height={150} src={solaceLogo} alt='solacenavLogo' />
            </a>
          <Image width={25} src={Close} alt="CloseBtn" className="cursor-pointer" onClick={toggleMenu} />
        </div>
        <div className="flex flex-col items-start px-8">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.path} passHref>
              <p className="text-Fazanova-white text-[16px] hover:text-Fozanova-gold font-medium my-4" onClick={toggleMenu}>{item.name}</p>
            </Link>
          ))}

            <button className=" py-[4px] px-[8px] bg-Fozanova-gold text-white text-[16px] lg:w-[261px] lg:h-[40px] font-semibold rounded-md leading-24">
              <Link href="/healthy-elders-club">
                <p>Join Healthy Elders Club</p>
              </Link>
            </button>
        </div>
      </div>
    </nav>
  );
}



// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import solaceLogo from '../../public/assests/Solace Logo.svg';
// import Menu from '../../public/assests/Menu.svg';
// import Close from '../../public/assests/x-lg.svg'; // The Close icon

// const navLinks = [
//   { name: 'About', path: '/about' },
//   { name: 'Cover', path: '/cover' },
//   { name: 'Lace AI', path: '/lace-ai' },
//   { name: 'Career', path: '/career' },
//   { name: 'FAQ', path: '/faq' },
//   { name: 'Blog', path: '/blog' },
// ];

// export function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="lg:fixed top-0 left-0 right-0 flex w-full items-center justify-between px-[20px] py-[14px] lg:mt-[10px] lg:rounded-lg z-50 bg-Fozanova-Black lg:container mx-auto">
//       <div className="flex flex-start items-center w-[100%]">
//         <a href="/">
//             <Image className="lg:w-[200px]" width={186} height={42} src={solaceLogo} alt="solaceLogo" />
//         </a>

//         <div className="hidden lg:flex items-center  lg:gap-x-[45px] xl:pl-28 lg:pl-10 md:pl-10">
//           {navLinks.map((item, index) => (
//             <Link key={index} href={item.path} passHref>
//               <p className="text-Fazanova-white transition-all hover:text-Fozanova-gold text-[17px] font-medium leading-24">{item.name}</p>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-end">
//         <Image
//           src={Menu}
//           alt="MenuBtn"
//           className="lg:hidden cursor-pointer"
//           onClick={toggleMenu}
//         />

//         <button className="hidden p-[8px, 30px, 8px, 30px] bg-Fozanova-gold text-white text-[17px] lg:w-[261px] lg:h-[40px] font-semibold rounded-md leading-24 lg:block">
//           <a href="#">
//             Join Healthy Elders Club
//           </a>
//         </button>
//       </div>

//       <div className={`fixed top-0 left-0 w-64 h-full bg-Fozanova-Black transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-20`}>
//         <div className="flex justify-end gap-[50px]  p-4">
//             <a href="/">
//               <Image width={130} height={150} src={solaceLogo} alt='solacenavLogo' />
//             </a>
//           <Image width={25} src={Close} alt="CloseBtn" className="cursor-pointer" onClick={toggleMenu} />
//         </div>
//         <div className="flex flex-col items-start px-8">
//           {navLinks.map((item, index) => (
//             <Link key={index} href={item.path} passHref>
//               <p className="text-Fazanova-white text-[16px] hover:text-Fozanova-gold font-medium my-4" onClick={toggleMenu}>{item.name}</p>
//             </Link>
//           ))}


//             <button className=" py-[4px] px-[8px] bg-Fozanova-gold text-white text-[16px] lg:w-[261px] lg:h-[40px] font-semibold rounded-md leading-24">
//                 <a href="/">
//                     Join Healthy Elders Club
//                 </a>
//             </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
