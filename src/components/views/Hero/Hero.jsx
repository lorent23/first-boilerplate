import React from "react"
import "./Hero.css";
import {Link} from "react-router-dom";
import Button from "../../reusable-components/Button";
import RobotLottieAnimation from "../Lottie-Animations/Robot";
import ChipLottieAnimation from "../Lottie-Animations/Chip";
import Partners from "../../reusable-components/Partners/Partners";
import {HeroContent, AboutContent} from "..//..//reusable-components/Content/hero-content";

export default function Hero() {
    const renderButton = (text, to) => (
        <Button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-8 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link to={to}>
                {text}
            </Link>
        </Button>
    );

    const renderAnimation = (AnimationComponent) => (
        <div className="md:mx-auto md:w-12 animate__animated animate__fadeIn">
            <AnimationComponent/>
        </div>
    );

    return (
        <div className="hero__bg md:mt-12 section__1">
            <div className="container p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 md:p-16 animate__animated animate__fadeIn">
                        <h1
                            className="font-sans text-3xl md:text-5xl leading-8 md:leading-14 font-semibold text-center md:text-left">
                            {HeroContent.title}
                        </h1>
                        <p
                            className="text-inherit text-base md:text-xl leading-6 md:leading-9 font-normal mt-2 md:mt-6 text-center md:text-left">
                            {HeroContent.description}
                        </p>
                        <div className="flex justify-center md:justify-start">
                            {renderButton(HeroContent.buttonText, "/about")}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        {renderAnimation(RobotLottieAnimation)}
                    </div>
                </div>
            </div>
            <div className="about__bg section__2">
                <div className="container p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 md:p-16 animate__animated animate__fadeIn">
                            <h1
                                className="font-sans text-2xl md:text-5xl leading-8 md:leading-14 font-semibold text-center md:text-left text-black">
                                {AboutContent.title}
                            </h1>
                            <p
                                className="md:text-base leading-6 md:leading-9 font-normal mt-2 md:mt-6 text-center md:text-left text-black">
                                {AboutContent.description}
                            </p>
                            <div className="flex justify-center md:justify-start">
                                {renderButton(AboutContent.buttonText, "/about")}
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-center items-center animate__animated animate__fadeIn">
                            <div className="md:mx-auto md:w-16 lg:w-12">
                                {renderAnimation(ChipLottieAnimation)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Partners/>
        </div>
    );
}