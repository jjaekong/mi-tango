import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const NewMilonga = () => {
    const [milongaName, setMilongaName] = useState('');
    const [milongaId, setMilongaId] = useState('');

    const handleMilongaNameChange = (event) => {
        setMilongaName(event.target.value);
    };

    const handleMilongaIdChange = (event) => {
        setMilongaId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const db = getFirestore();
            const currentUser = getAuth().currentUser;

            // 밀롱가 ID 중복 체크
            const milongaDoc = await getDoc(doc(db, `${process.env.NODE_ENV}.milongas`, milongaId));
            console.log(milongaDoc);
            if (milongaDoc.exists()) {
                alert('Milonga ID already exists!');
                return;
            }

            await setDoc(doc(db, `${process.env.NODE_ENV}.milongas`, milongaId), {
                milongaId: milongaId,
                milongaName: milongaName,
                createdAt: serverTimestamp(),
                createdBy: currentUser.uid
            });

            // Document successfully written
            alert('Milonga created successfully!');

            // Reset the input fields
            setMilongaId('');
            setMilongaName('');

            // Redirect to the newly created milonga URL
            window.location.href = '/milonga/' + milongaId;
        } catch (error) {
            // An error occurred
            console.error('Error creating milonga:', error);
        }
    };

    return (
        <div className="p-5 container mx-auto">
            <div className="flex items-center mb-4">
                <button onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <h1 className="text-xl font-bold ms-2">Create New Milonga</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="milongaName" className="block text-gray-700 mb-2">Milonga Name:</label>
                    <input
                        type="text"
                        id="milongaName"
                        value={milongaName}
                        onChange={handleMilongaNameChange}
                        required
                        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="milongaId" className="block text-gray-700 mb-2">Milonga ID:</label>
                    <input
                        type="text"
                        id="milongaId"
                        value={milongaId}
                        required
                        onChange={handleMilongaIdChange}
                        pattern="[A-Za-z0-9_-]{8,}"
                        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="milongaId" className="block text-gray-700 mb-2">Milonga URL (Preview):</label>
                    <input
                        type="url"
                        id="milongaURL"
                        value={'https://mi-tang.com/milonga/' + milongaId}
                        readOnly
                        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 readonly:bg-gray-100"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Create</button>
            </form>
        </div>
    );
};

export default NewMilonga;