import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

export default function Home() {
    const { currentUser, loading } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = async () => {
        if (window.confirm("Are you sure you want to log out?")) { 
            try {
                const auth = getAuth();
                auth.signOut()
                    .then(() => {
                        alert('You are logged out!');
                    })
                    .catch(error => {
                        console.error(error);
                    });

            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleBackdropClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div className="p-6">
                <header className='flex items-center justify-between mb-5'>
                    <h1 className='font-bold'>Mi Tango</h1>
                    {currentUser ? (
                        <div className="flex items-center relative">
                            <button type="button" className="flex items-center relative cursor-pointer" onClick={handleDropdownToggle}>
                                <img src={currentUser.photoURL} alt="User Photo" className="w-10 h-10 rounded-full" />
                                {/* <p className='ml-2 underline'>{currentUser.displayName}</p> */}
                            </button>
                            {isDropdownOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={handleBackdropClick}></div>
                                    <nav className="bg-white shadow rounded-xl mt-2 absolute top-full right-0 w-[12rem] z-20">
                                        <h1 className='sr-only'>Menu</h1>
                                        <div className='px-4 py-3'>
                                            <p className="font-bold">{currentUser.displayName}</p>
                                            <p className="text-sm text-slate-500">{currentUser.email}</p>
                                        </div>
                                        <hr />
                                        <div className='pt-4 pb-2'>
                                            <h2 className="text-sm px-4 mb-3 font-bold text-slate-500">Followings</h2>
                                            <div className='border-gray-200'>
                                                <Link className="block px-4 py-2 hover:bg-slate-100 flex items-center" to="/following_milongas">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 me-2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                                    </svg>
                                                    <span className='flex-auto'>Milongas</span>
                                                </Link>
                                            </div>
                                            <div className='border-gray-200'>
                                                <Link className="block px-4 py-2 hover:bg-slate-100 flex items-center" to="/following_places">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 me-2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                                    </svg>
                                                    <span className='flex-auto'>Places</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='pt-4 pb-2'>
                                            <h2 className="text-sm px-4 mb-3 font-bold text-slate-500">Organizer</h2>
                                            <div className='border-gray-200'>
                                                <Link className="block px-4 py-2 hover:bg-slate-100 flex items-center" to="/following_milongas">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 me-2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                                    </svg>
                                                    <span className='flex-auto'>My Milongas</span>
                                                </Link>
                                            </div>
                                            <div className='border-gray-200'>
                                                <Link className="block px-4 py-3 hover:bg-slate-100 flex items-center" to="/new_milonga">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                    <span>New Milonga</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='border-gray-200'>
                                            <button onClick={handleLogout} className='flex px-4 py-3 w-full items-center hover:bg-slate-100'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> 
                                                </svg>
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </nav>
                                </>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className='rounded-full border border-slate-500 px-4 py-2'>Login</Link>
                    )}
                </header>
                <Link to="/milonga/luminoso">루미노소</Link>
            </div>
        </>
    );
}
