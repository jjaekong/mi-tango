import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function Home() {
    const currentUser = useAuth();

    console.log('currentUser ==> ', currentUser);

    return (
        <div>
            <h1>Home Page</h1>
            {currentUser ? (
                <p>Welcome, {currentUser.displayName}</p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}