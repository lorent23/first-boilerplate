import React from "react";
import "./About.css";
import Image from '../..//assets/certifications/cert1.png'
import { aboutText } from "..//..//reusable-components/Content/about-text";
import { quote } from "..//..//reusable-components/Content/about-text";
import { aboutList } from "..//..//reusable-components/Content/about-text";


const SectionTitle = ({ text }) => (
    <h1 className="text-4xl md:text-6xl text-center relative z-10 mt-20 text-white">
      {text}
    </h1>
  );

  const SectionTitle2 = ({ text }) => (
    <h1 className="text-4xl md:text-6xl z-10 mt-20 text-black">
      {text}
    </h1>
  );
  
  const AboutText = ({ title, content }) => (
    <div className="container mx-auto px-4 md:px-0">
      <div>
        <p className="pt-4 pb-4 text-4xl italic leading-none tracking-tight md:text-4xl lg:text-4xl text-white">
          {title}
        </p>
        <p className="md:text-xl leading-6 md:leading-9 font-normal mt-2 md:mt-6 pb-8 text-center text-white">
          {content}
        </p>
      </div>
    </div>
  );
  
  const AboutBlockquote = ({ quote }) => (
    <blockquote className="p-8 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
      <p className="text-xl text-center italic font-medium leading-relaxed text-gray-900 dark:text-white">
        {quote}
      </p>
    </blockquote>
  );
  
  const AboutImage = () => (
    <div className="mx-auto md:px-0 flex justify-center items-center">
      <img className="" src={Image} alt="services" />
    </div>
  );
  
  const AboutList = ({ items }) => (
    <ul className="text-gray-600 list-disc md:text-left marker:text-red-600 z-10 my-20 mx-20 md:text-xl">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

export default function About() {
    const backgroundImageUrl = "url(https://cdn.pixabay.com/photo/2021/03/11/23/17/fingerprint-6088316_1280.png)";
    return (
        <section>
        <div className="relative pt-40 pb-32">
          <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
            style={{ backgroundImage: backgroundImageUrl }}>
          </div>
          <SectionTitle text="About FIRST" />
        </div>
        <div className="aboutus__bg">
          <AboutText title={aboutText.title} content={aboutText.content} />
        </div>
        <div className="Contact__Us bg-gray-800 pt-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto px-4 md:px-0">
            <SectionTitle text="First Quote" />
            <AboutBlockquote quote={quote} />
          </div>
        </div>
        <div className="Contact__Us bg-white pt-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto px-4 md:px-0">
            <AboutImage />
            <div>
              <SectionTitle2 text="First Team" />
              <AboutList items={aboutList} />
            </div>
          </div>
        </div>
      </section>
    );
}
