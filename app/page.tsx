import "./globals.css";


import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Discovery } from "./components/Discovery";
import { Mission } from "./components/Mission";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { Network } from "./components/Network";
import { GetCard } from "./components/GetCard";
import { PartnerWithUs } from "./components/PartnerWithUs";
import { Testimonials } from "./components/Testimonials";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
   <>

    <Navbar />
    <Hero />
    <Discovery />
    <Mission />
    <Partners />
    <Services />
    <Network />
    <GetCard />
    <PartnerWithUs />
    <Testimonials />
    <Newsletter />
    <Footer />
   </>
 );
}


