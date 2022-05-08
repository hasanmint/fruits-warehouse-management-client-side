import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className='bg-success'>
            <div className="row  text-center mb-5 mt-5">
                <div class="jumbotron mt-5">
                    <h1 class=" fw-bold text-white">Get a Free Stock Product </h1>
                    <h5 class=" fw-bold text-white">Free Registration</h5>
                    <p>
                        <Link to="/" >
                            <p className='btn btn-light  fw-bold'>Requect A Callback</p>
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default CallToAction;