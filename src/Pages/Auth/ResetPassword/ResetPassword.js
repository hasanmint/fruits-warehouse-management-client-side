import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const ResetPassword = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const handleResetBtn = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter your Email Address');
        }
    }
    return (
        <div className='container'>
            <div className="row mt-5 mb-5">
                <h2 className='display-4 text-center '>Reset Password</h2>
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleResetBtn}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input ref={emailRef} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn btn-info w-100">Submit</button>
                    </form>
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default ResetPassword;