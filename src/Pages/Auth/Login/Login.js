import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow-none p-3 mb-5 bg-light rounded">
                    <h1 className="text-center fw-bolder">Login</h1>
                    <div className='text-dark text-center fw-bolder'>
                        <p> New Here? <Link to='/register' className='text-success text-decoration-none fw-bold'>Create An Account</Link></p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-3">
                            <input type="email" className='form-control' name="email" id="" placeholder='Enter Email' required />
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" className='form-control' name="password" id="" placeholder='Enter Password' required />
                        </div>
                        <button type="submit" className="btn btn-info w-100 p-2 fw-bold">Login</button>

                    </form>

                    <div className='text-dark text-end fw-bolder mt-2'>
                        <p> Change New? <Link to='/resetpassword' className='text-success text-decoration-none fw-bold'>Reset Password </Link></p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Login;