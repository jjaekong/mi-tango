import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function Home() {
    const auth = useAuth();
    const { currentUser, loading } = auth;

    return (
        <div className='p-5 px-4 bg-blue-100'>
            <h1 className='text-3xl font-bold underline'>Mi Tango</h1>
            {currentUser && !loading ? (
                <p className='text-xl'>Welcome, {currentUser.displayName}</p>
            ) : (
                <p className='text-xl'>You are not logged in.</p>
            )}
        </div>
    );
}