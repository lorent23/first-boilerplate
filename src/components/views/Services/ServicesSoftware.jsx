import React from 'react';
import Cyber from '../../assets/softwaresolutions/softwaresolutions.jpg';
import SoftwareList from '../../reusable-components/ServicesList/SoftwareList';


export default function ServicesSoftware() {

    const ServicesCybersec = () => (
        <div className="mx-auto md:px-0 flex justify-center items-center">
            <img className="" src={Cyber} alt="services" />
        </div>
    );

    return (
        <div className="bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center pb-6 md:h-screen md:pt-12 md:mt-8 animate__animated animate__fadeIn">
                <div className="py-8 mx-auto max-w-screen-xl px-4">
                    <ServicesCybersec />
                </div>
                <div className="w-full md:w-3/4 px-4">
                    <SoftwareList />
                </div>
            </div>
        </div>
    );
}
