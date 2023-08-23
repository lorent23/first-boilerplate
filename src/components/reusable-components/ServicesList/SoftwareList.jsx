import React from 'react';

const SoftwareList = () => {

    return (
        <div className="p-8 bg-gray-900">
    <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Project Development Stages</h2>
        <p className="mb-6">
            <span className="text-blue-500 font-semibold">Stage 1 and 2:</span> Planning & Analysis<br />
            Defining the requirements of the application, both functional and nonfunctional.
        </p>
        <p className="mb-6">
            <span className="text-blue-500 font-semibold">Stage 3:</span> Design<br />
            Translate the business needs into technical plans. Just like building a house, you need to make plans before starting the construction.
        </p>
        <p className="mb-6">
            <span className="text-blue-500 font-semibold">Stage 4:</span> Implementation<br />
            The translation of plans into applications or components, building the walls.
        </p>
        <p className="mb-6">
            <span className="text-blue-500 font-semibold">Stage 5:</span> Testing & Integration<br />
            Ensuring everything is working both in a functional and non-functional way.
        </p>
        <p>
            <span className="text-blue-500 font-semibold">Stage 6:</span> Maintenance<br />
            After the application is done, we need to go to production. Ensuring the application is running as expected.
        </p>
    </div>
</div>

    );
};

export default SoftwareList;
