import React, { useState } from 'react';
import { s1List, s1Content, s1Tags, s2List, s2Content, s2Tags, s3List, s3Content, s3Tags, s4List, s4Content, s4Tags } from '../Content/services-content';

const ServiceSection = ({ title, tags, list }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState);
    };

    const List = ({ items }) => (
        <ul className="text-gray-600 list-disc md:text-left marker:text-red-600 z-10 my-5 mx-5 md:my-20 md:mx-20 md:text-xl">
            {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    );

    const Tags = ({ items }) => (
        <div className="flex flex-wrap gap-2 py-1.5 text-xs font-medium text-white justify-center">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center ${getRandomColor()} px-2 py-1 rounded-full`}
                >
                    {item}
                </div>
            ))}
        </div>
    );

    const getRandomColor = () => {
        const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-yellow-500"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <div>
            <h1 className='text-black pt-4'>{title}</h1>
            <div className="text-gray-500 dark:text-gray-400">
                <Tags items={tags} />
            </div>
            <div className="mt-2">
                <a
                    className="hs-collapse-toggle inline-flex items-center gap-x-2 text-blue-600 cursor-pointer"
                    onClick={toggleCollapse}
                    aria-expanded={!isCollapsed}
                    id={`hs-show-hide-collapse-${title}`}
                    data-hs-collapse={`#hs-show-hide-collapse-heading-${title}`}>
                    <span className={isCollapsed ? 'block' : 'hidden'}>Read more</span>
                    <span className={isCollapsed ? 'hidden' : 'block'}>Read less</span>
                    <svg
                        className={`hs-collapse-open:rotate-180 w-2.5 h-2.5`}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"/>
                    </svg>
                </a>
            </div>
            <div
                id={`hs-show-hide-collapse-heading-${title}`}
                className={`hs-collapse ${isCollapsed ? 'hidden' : 'block'} w-full overflow-hidden transition-[height] duration-300`}
                aria-labelledby={`hs-show-hide-collapse-${title}`}>
                <div className="text-gray-500 dark:text-gray-400">
                    <List items={list} />
                    {list.length > 3 && (
                        <button
                            className="text-blue-600 cursor-pointer mt-2"
                            onClick={toggleCollapse}
                        >
                            Read less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const ServicesList = () => {
    const services = [
        { id: 's1', title: s1Content.title, tags: s1Tags, list: s1List },
        { id: 's2', title: s2Content.title, tags: s2Tags, list: s2List },
        { id: 's3', title: s3Content.title, tags: s3Tags, list: s3List },
        { id: 's4', title: s4Content.title, tags: s4Tags, list: s4List }
    ];

    return (
        <div>
            {services.map(service => (
                <ServiceSection key={service.id} title={service.title} tags={service.tags} list={service.list} />
            ))}
        </div>
    );
};

export default ServicesList;
