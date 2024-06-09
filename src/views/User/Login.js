import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';

function Login() {
    const handleSignInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleSignInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className='p-6'>
            <header className='flex items-center'>
                <button onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <h1 className='ms-4'>Login</h1>
            </header>
            <h2 className='mt-4 text-center font-bold mb-4'>Sign in with</h2>
            <ul className='w-[50%] mx-auto'>
                <li className='mb-4'><button className="w-full rounded-full border border-slate-500 px-4 py-2" onClick={handleSignInWithGoogle}>Google</button></li>
                <li className='mb-4'><button className="w-full rounded-full border border-slate-500 px-4 py-2" onClick={handleSignInWithFacebook}>Facebook</button></li>
            </ul>
        </div>
    );
}

export default Login;