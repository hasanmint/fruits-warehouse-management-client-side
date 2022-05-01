import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../img/social/google-icon.svg';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let googleError;
    if (error) {

        googleError = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/inventories');
    }


    return (
        <>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-info'></div>
                <div className='m-2'>Or</div>
                <div style={{ height: '2px' }} className='w-50 bg-info'></div>
            </div>
            <p>{googleError}</p>
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-light w-100">
                    <img src={google} alt="google" width={30} height={30} />
                    Google SignIn</button>
            </div>

        </>
    );
};

export default SocialLogin;