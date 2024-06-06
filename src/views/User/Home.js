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
            <div className="p-5 container mx-auto px-4 sm:container sm:mx-auto sm:px-4">
                <header className='flex items-center justify-between'>
                    <h1 className='text-xl font-bold underline'>Mi Tango</h1>
                    {currentUser && (
                        <div className="flex items-center relative">
                            <div className="flex items-center relative cursor-pointer" onClick={handleDropdownToggle}>
                                <img src={currentUser.photoURL} alt="User Photo" className="w-10 h-10 rounded-full" />
                                <p className='text-xl ml-2'>{currentUser.displayName}</p>
                            </div>
                            {isDropdownOpen && (
                                <div className="p-4 bg-white shadow-md rounded-xl mt-2 absolute top-full right-0 w-[10rem]">
                                    <Link to="/newmilonga">밀롱가 만들기</Link>
                                </div>
                            )}
                        </div>
                    )}
                </header>
            </div>
        </>
    );
}
