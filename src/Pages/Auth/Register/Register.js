import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    let emailError;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleNevigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/inventories');
    }


    if (user) {
        navigate(from, { replace: true });
    }



    if (error) {

        emailError = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='container mt-5 mb-5'>
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow-none p-3 mb-5 bg-light rounded">
                        <h1 className="text-center fw-bolder">Register</h1>
                        <div className='text-dark text-center fw-bolder'>
                            <p> Already have an Account ? <Link to='/login' className='text-success text-decoration-none fw-bold' onClick={handleNevigateLogin}>Please Login</Link></p>
                        </div>
                        <form onSubmit={handleRegister}>
                            <div className="form-group mb-3">
                                <input type="text" className='form-control' name="name" id="" placeholder='Full Name' required />
                            </div>

                            <div className="form-group mb-3">
                                <input type="email" className='form-control' name="email" id="" placeholder='Enter Email' required />
                            </div>

                            <div className="form-group mb-3">
                                <input type="password" className='form-control' name="password" id="" placeholder='Enter Password' required />
                            </div>
                            <button type="submit" className="btn btn-info w-100 fw-bold p-2">Register</button>
                        </form>
                        <p className='mt-3 text-center'>{emailError}</p>
                        <div className='text-dark text-end fw-bolder mt-2'>
                            <p> New Here? <Link to='/resetpassword' className='text-success text-decoration-none fw-bold'>Reset Password </Link></p>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;