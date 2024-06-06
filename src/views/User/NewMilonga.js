import React, { useState } from 'react';

const NewMilonga = () => {
    const [milongaName, setMilongaName] = useState('');
    const [milongaId, setMilongaId] = useState('');

    const handleMilongaNameChange = (event) => {
        setMilongaName(event.target.value);
    };

    const handleMilongaIdChange = (event) => {
        setMilongaId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to save the Milonga information to the database
        console.log('Milonga Name:', milongaName);
        console.log('Milonga ID:', milongaId);
        // Redirect or show success message
    };

    return (
        <div className="p-5 container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create New Milonga</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="milongaName" className="block text-gray-700 mb-2">Milonga Name:</label>
                    <input
                        type="text"
                        id="milongaName"
                        value={milongaName}
                        onChange={handleMilongaNameChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="milongaId" className="block text-gray-700 mb-2">Milonga ID:</label>
                    <input
                        type="text"
                        id="milongaId"
                        value={milongaId}
                        onChange={handleMilongaIdChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Create</button>
            </form>
        </div>
    );
};

export default NewMilonga;