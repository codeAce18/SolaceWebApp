"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import TestimonialImg1 from '../../public/assests/Testimonials1.png';
import TestimonialImg2 from '../../public/assests/Testimonial2.png';
import TestimonialImg3 from '../../public/assests/Testimonial3.png';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  imgSrc: StaticImageData; // Ensures TypeScript compatibility with image imports
}

const testimonials: Testimonial[] = [
  {
    text: "Solace Farewell Cover is the first of its kind in Nigeria, if not in the whole of Africa. Subscribing to Solace Farewell cover has given me peace of mind, knowing that my my fathers farewell expenses are covered up to ₦8 million. The most interesting part is that, I will receive up to ₦1,000,000 in reimbursement for every five subscriptions I pay if papa hasnt joined his ancestors. This is simply amazing and recommendable! Thank you Solace for this innovative service.",
    name: "Mrs. Amarachi Chukwuemaka",
    role: "Accountant/Consultant",
    imgSrc: TestimonialImg1,
  },
  {
    text: "I am thoroughly impressed with the value Solace Health Club offers. For just ₦1,000 I registered my mother as a member. She now receives cashback and VVIP treatment at partner pharmacies, hospitals, clinics, and laboratories nationwide. Solace Health Club will help me save up to ₦250k on her medical bills this year, while she enjoys first-class medical services anytime, anywhere. I highly recommend Solace Health Club with confidence.",
    name: "Mr. Atenaga Collins",
    role: "Founder/CEO Aco Multimedia.",
    imgSrc: TestimonialImg2,
  },
  {
    text: "Paul's passion for creating innovative solutions to improve the well-being of older adults in Africa is truly inspiring. I can testify to his ability to innovate when he served under my supervision at Tochstone Ltd between 2010 to 2012. His ability to think without-the-box and execute on his ideas sets him apart as a leader. I have no doubt that Solace will continue to achieve great success under his leadership and I highly recommend partnering with Solace now at the early stage of their growth.",
    name: "Pastor Tunde Ojo",
    role: "CEO, Touchstone Limited",
    imgSrc: TestimonialImg3,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Clean up on unmount
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const goToSlide = (index: number) => {
    stopAutoSlide();
    setCurrentIndex(index);
    startAutoSlide();
  };

  const goToPrevious = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    startAutoSlide();
  };

  const goToNext = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    startAutoSlide();
  };

  return (
    <div className="pt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="lg:text-[48px] text-[39px] lg:leading-[58px] leading-[50px] text-center font-normal tracking-[-1px] text-Fozanova-Black max-w-[529px] lg:max-w-[600px]">
          Don't take our words for it
        </h1>
      </div>

      <div className="pt-10 p-[20px]">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="lg:flex lg:flex-row flex-shrink-0 min-w-full lg:max-w-[1058px] max-w-full rounded-[32px] border-[1px] border-[#EFF0F6] bg-Fazanova-white flex flex-col-reverse gap-10 items-center justify-center py-[45px] px-[32px]">
                <div>
                  <p className="font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[24px] tracking-[-0.4%] max-w-[440px] text-p-grey">{testimonial.text}</p>
                  <h5 className="pt-[35px] lg:text-[20px] text-[17px] leading-[24.2px] tracking-[-0.96px] font-medium text-Fozanova-Black">{testimonial.name}</h5>
                  <p className="lg:text-[17px] text-[15px] font-normal leading-[26px] tracking-[-0.4%] text-Fozanova-Black">{testimonial.role}</p>
                </div>
                <div>
                  <Image className="rounded-[20px]" width={495} height={335} src={testimonial.imgSrc} alt={`TestimonialImg${index + 1}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button onClick={goToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#121933] text-white p-2 rounded-full">
            &#8249;
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#121933] text-white p-2 rounded-full">
            &#8250;
          </button>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-gray-900' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
