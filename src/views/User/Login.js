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
        <div>
            <h1>로그인</h1>
            <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
            <button onClick={handleSignInWithFacebook}>Sign in with Facebook</button>
        </div>
    );
}

export default Login;