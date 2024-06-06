import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';


export default function Home() {
    const auth = useAuth();
    const { currentUser, loading } = auth;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="container mx-auto px-4 sm:container sm:mx-auto sm:px-4">
                <header className='flex justify-between p-5 bg-blue-100'>
                    <h1 className='text-3xl font-bold underline'>Mi Tango</h1>
                    <div className="flex items-center">
                        <img src={currentUser.photoURL} alt="User Photo" className="w-10 h-10 rounded-full" />
                        <p className='text-xl ml-2'>{currentUser.displayName}</p>
                        <button onClick={handleDropdownToggle} className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isDropdownOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </header>
                {isDropdownOpen && (
                    <div className="p-4 bg-white shadow-md rounded-xl mt-2 absolute">
                       <Link to="/newmilonga">밀롱가 만들기</Link>
                    </div>
                )}
            </div>
        </>
    );
}