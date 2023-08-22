import React from 'react';
import ServiceImage from '../../assets/svr/services-and-products.png';
import ServicesList from '../../reusable-components/ServicesList/ServicesList';

export default function ServicesSection() {

    const ServicesImage = () => (
        <div className="mx-auto md:px-0 flex justify-center items-center">
            <img className="" src={ServiceImage} alt="services" />
        </div>
    );

    return (
        <div className="bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center pb-6 md:h-screen md:pt-12 md:mt-8">
                <div className="py-8 mx-auto max-w-screen-xl px-4">
                    <ServicesImage />
                </div>
                <div className="w-full md:w-3/4 px-4">
                    <ServicesList />
                </div>
            </div>
        </div>
    );
}
