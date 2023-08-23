import React from "react";
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/solid';

const PartnersLink = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-center hover:text-gray-400 transition duration-300 cursor-pointer">
                <Link to="/partners" onClick={() => window.scrollTo(0, 0)} className="text-lg font-semibold mb-2">More</Link>
                <div>
                    <ChevronDownIcon className="h-8 w-8 text-gray-300 hover:text-gray-400 transition duration-300 cursor-pointer" />
                </div>
            </div>
  );
};

export default PartnersLink;
