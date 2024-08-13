import { useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import Image from "next/image";
import '../app/globals.css';

import PlusSvg from '../public/assests/PlusIcon.svg';
import MinusSvg from '../public/assests/minus.svg';
import FrequentSvg from '../public/assests/Frequentlyasked.svg';
import { Newsletter } from "@/app/components/Newsletter";
import { Footer } from "@/app/components/Footer";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: any[] = [

    {
      question: 'Is Solace a Financial Institution?',
      answer:
      'No, Solace is not a financial institution. At Solace, we specialize in enabling the provision of top-quality elderly care services that go beyond ensuring that the older adults are free from illnesses or diseases. Our goal is to become the leading provider of wellness and farewel services to 14.8 million Nigerians aged 60 years and above.',
    },

    {
      question: 'What can I use the Solace app for?',
      answer:
        'The Solace web or mobile app provides users with access to on-demand caregivers, teleconsultation, and personalized wellness plans for the elderly. Solace members enjoy cashback on medical expenses nationwide and receive farewell cover of up to ₦8 million in the event of their passing.',
    },

    {
      question: 'How does the Solace Farewell Cover work?',
      answer:
        'To subscribe to Solace Farewell Cover, visit www.solace.com.ng. Register as a Solace user, provide the necessary details of the beneficiary, select a farewell cover that aligns with your preferences, proceed with the payment and receive instant notification, confirming your subscription.',
    },

    {
      question: 'Who is eligible to buy a Solace Farewell Cover?',
      answer:
        'Individuals aged 18 and above can purchase Solace Farewell Cover for their loved ones as their beneficiary from anywhere in the world. However,  its important to note that the designated beneficiary must be at least 60 years old at the time of subscription.',
    },

    {
      question: 'Who is  ineligible for Solace Farewell Cover benefits?',
      answer:
        'Individuals aged 60 or older with terminal illnesses, like cancer or severe organ failure and the likes are ineligible due to their high-risk status, which could compromise the sustainability of the cover. We expect full disclosure of the health status of the beneficiary during the process of registration.',
    },

    {
      question: 'What are the farewell cover plan values?',
      answer:
        'The farewell cover plans offer varying service benefits tailored to different needs: Pink Diamond plan (₦2 million), Blue Diamond (₦4 million) and Red Diamond plan (₦8 million). These amounts ensure comprehensive coverage for funeral expenses, including funeral arrangements and related costs, easing the financial burden on the bereaved family.',
    },


    {
      question: 'How secure is the Solace app?',
      answer:
        'Solace app prioritizes user security by complying with NDPR regulations and implementing robust security measures, including top-tier encryption and stringent KYC processes. These measures ensure the confidentiality and integrity of users&#39; personal information, reducing the risk of data breaches or identity theft of any kind.',
    },

    {
      question: 'Is Solace open for partnership?',
      answer:
        'Yes. Partnership is one of our core values at Solace and on it we believe we can constantly surpass our customers expectations. We unlock greater value for our clients by partnering on a global scale, empowering success across Africa. We are open to partnering with all stakeholders to constantly provide better service delivery to all our users, all the time.',
    },

    {
      question: 'How does Solace Healthy Elders Club work?',
      answer:
        'Register yourself or your beneficiary on Solace website or mobile app and make payment of ₦1,000 membership fee, paid annually. Within a few days your membership card is sent to your address and activated upon making your first medical expense on the app.',
    },


    {
      question: 'What are the benefits of joining the Healthy Elders Club?',
      answer:
        'Solace Healthy Elders Club is designed to give older adults special privileges and cashbacks at partner Pharmacies, Hospitals and Laboratories nationwide. We help each member save up to ₦550,000 on their medical bills while giving them the rare opportunity to get treated like VIPs.',
    },

    {
      question: 'Is Solace available in other countries?',
      answer:
        'Not yet. We are currently focusing on the Nigerian market before expanding to other African countries. We aim global but chose to conquer the Nigeria market by becoming the leading provider of wellness and farewell services to 14.8 million Nigerians aged 60 years and above.',
    },

    {
      question: 'Does Solace vet its caregivers?',
      answer:
        'Absolutely. The process of engaging Doctors, Nurses, Non-Medical Caregivers,Therapists and Nutritionists follows stringent standards to ensure we only work with true professionals. We work with well-vetted professionals in partnership with associated regulatory and licensing bodies.',
    },


    {
      question: 'How do I get and share my referral code?',
      answer:
        'Once you sign up as a User or Partner on Solace mobile app or website, you will receive a referral code via email. Share it on social media using the share button or by copying it from the Solace mobile app or email sent to you.',
    },


    {
      question: 'Where do I enter my friends referral code?',
      answer:
        'For your friend to get their referral commission for referring you, you must enter the referral code they sent you in the input field on the payment page while paying for a subscription on the Solace website or mobile app. Your friend will be notified instantly via email.',
    },


    {
      question: 'Where can I promote my code and will I be notified when used?',
      answer:
        'You can easily promote your referral code on social media, blogs, forums and within your network. You will be notified via email or within the Solace app as soon as your referral code is used. Download brand assets on the Solace website to create awesome banners to promote your referral code.',
    },


    {
      question: 'How do I collect and track my rewards?',
      answer:
        'You can track your referral bonus on the Solace mobile app by going to the referral section of your account. You will see all the data regarding your referral code such as how many people you have referred and your total referral bonus. Request for withdrawals referral bonus on the mobile app easily.',
    },

    {
      question: 'What makes Solace different from others?',
      answer:
        'We go beyond providing doctor visits that cater to the health of the elderly; we offer a more proactive and holistic solution to the well-being of older adults aged 60 and above. We are the first to offer a dignified farewell solution for the elderly in the event of their passing. We leverage advanced Artificial Intelligence to provide innovative healthcare solutions.',
    },

    {
      question: 'How can I fund my Solace app?',
      answer:
        'Funding your Solace app is simple with more than one option. You can fund your Solace app by transferring funds from any bank app or PoS into your Solace app. Additionally, you can fund your Solace account through direct debit or by linking your debit card to your Solace account.',
    },

    {
      question: 'Can I withdraw from my Solace app?',
      answer:
        'Solace is not a banking app. The wallet feature is for making medical expenses at partner Pharmacies, Hospitals and Laboratories nationwide in exchange for benefits such as cashbacks of up to 25%, priority services for the elderly, special in-app features and other amazing benefits.',
    },


    {
      question: 'Do I need to download the Solace app?',
      answer:
        'Yes. Solace offers all of its solutions through mobile devices, making them more accessible for older adults in Africa. The Solace mobile app is available on the Google Play Store for Android users and on the Apple Store for iOS users.',
    },


    {
      question: 'Are there new features to expect on the Solace app?',
      answer:
        'Yes, we are developing an AI model that will integrate wearable health sensors to monitor vital signs. Our proprietary AI algorithms will analyze health data, identify trends and trigger alerts for potential health issues. We are also investing in Health IoT technologies for the elderly.',
    },


    {
      question: 'Can I cancel my subscription at any time?',
      answer:
        'Yes, you can cancel your subscription at any time. Ensure you review the cancellation policy, follow the required steps and obtain a confirmation of cancellation to avoid future charges. However, we will hate to see you leave us and we hope you wont have to cancel your subscription with us.',
    },

    {
      question: 'How to contact Solace for support?',
      answer:
        'For assistance, users can reach out to Solace via email at support@solace.com.ng or by calling +234 802 756 4943. Additionally, users can engage with Solace through its social media channels for prompt support and assistance. Solace&#39;s customer support team is dedicated to addressing users queries promptly.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="lg:pt-32 pt-20">
        <div className="flex flex-col items-center justify-center">
          <Image width={291} height={40} src={FrequentSvg} alt="FrequentSvg" />
          <h1 className="text-center text-Fozanova-Black max-w-[800px] lg:text-[48px] text-[40px] leading-[50px] tracking-[-1px] lg:leading-[58px]">
            Answers to some of your questions
          </h1>
          <p className="text-center lg:max-w-[720px] max-w-[300px] pt-[20px] lg:text-[17px] text-[15px] font-normal lg:leading-[26px] leading-[22px] tracking-[-0.4%] text-p-grey">
            Didn&apos;t find the answers you were looking for? Contact us at{' '}
            <span className="text-Fozanova-gold">support@solace.com.ng</span>
          </p>
        </div>

        <div className="lg:pt-20 pt-16  p-4 max-w-[522px] lg:max-w-[1136px] mx-auto">
          <div className="grid grid-cols-1  mx-auto gap-6">
              {faqData.map((item, index) => (
                <>
                <div key={index} className="border-b border-Fozanova-Black py-4 max-w-[1058px] w-full">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h1 className="text-lg text-Fozanova-Black lg:text-[20px] text-[17px] lg:leading-[27.42px] leading-[25px] tracking-[-0.96px] font-semibold">{item.question}</h1>
                      {openIndex === index ? (
                        <Image src={MinusSvg} alt="MinusSvg" width={26} height={26} />
                      ) : (
                        <Image src={PlusSvg} alt="PlusSvg" width={20} height={20} />
                      )}
                    </div>
                    {openIndex === index && (
                      <p className="mt-2  text-p-grey lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%]">{item.answer}</p>
                    )}
                  </div></>
              ))}

          </div>
        </div> 
      </div>

       <Newsletter />

       <Footer />
    </>
  );
};

export default FAQ;
