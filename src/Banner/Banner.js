import React from 'react';
import banner from '../img/banner.jpg';

const Banner = () => {
    return (

        <>
            <div className="container-fluid bg-body">
                <div class=" col-xxl-8 sm-gy-3">
                    <div class="row flex-lg-row-reverse align-items-center  py-1 mb-5">
                        <div class=" col-sm-12 col-lg-6  p-3 mb-5 bg-body rounded">
                            <img src={banner} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="600" height="450" loading="lazy" />
                        </div>
                        <div class="col-lg-6">
                            
                            <h1 class="display-5 fw-bold lh-1  mb-3"><span className='text-success'>Fruits Warehouse</span></h1>
                            <h3 className="">Fress Farm Products</h3>
                            <p>100% certifiled-organic mix of fruit and veggies.Perfect for Weekly cooking and sancking!</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" class="btn btn-info px-4 me-md-2">See More</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
};

export default Banner;