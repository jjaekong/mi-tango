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
        if (window.confirm('로그아웃 하시겠습니까?')) { 
            try {
                const auth = getAuth();
                auth.signOut()
                    .then(() => {
                        alert('로그아웃 되었습니다.');
                    })
                    .catch(error => {
                        console.error(error);
                    });

            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <div className="p-5 container mx-auto px-4 sm:container sm:mx-auto sm:px-4">
                <header className='flex items-center justify-between'>
                    <h1 className='text-xl font-bold underline'>Mi Tango</h1>
                    {currentUser ? (
                        <div className="flex items-center relative">
                            <div className="flex items-center relative cursor-pointer" onClick={handleDropdownToggle}>
                                <img src={currentUser.photoURL} alt="User Photo" className="w-10 h-10 rounded-full" />
                                <p className='text-xl ml-2'>{currentUser.displayName}</p>
                            </div>
                            {isDropdownOpen && (
                                <div className="p-4 bg-white shadow-md rounded-xl mt-2 absolute top-full right-0 w-[10rem]">
                                    <Link to="/new_milonga">밀롱가 만들기</Link>
                                    <button onClick={handleLogout}>로그아웃</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login">로그인</Link>
                    )}
                </header>
            </div>
        </>
    );
}
