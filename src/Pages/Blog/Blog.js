import React from 'react';
import blog1 from '../../img/blog/blog1.jpg';
import blog2 from '../../img/blog/blog2.jpg';
import blog3 from '../../img/blog/blog3.jpg';

const Blog = () => {
    return (
        <>
            <section class="py-5 text-center container">
                <div class="row py-lg-3">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Blog Posts</h1>
                        <p class="lead text-muted">Our recent articles about Organic</p>
                       
                    </div>
                </div>
            </section>

            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={blog1} alt="" width="100%" height="100%" />

                                <div class="card-body">
                                    <p class="card-text">Winter Produce Can Lighten Up January</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                
                                            <button type="button" class="btn btn-sm btn-outline-success">Read More</button>
                                        </div>
                                        <small class="text-muted">9 May,2021</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={blog2} alt="" width="100%" height="100%" />

                                <div class="card-body">
                                    <p class="card-text">Summer Resources From the AFF</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">

                                            <button type="button" class="btn btn-sm btn-outline-success">Read More</button>
                                        </div>
                                        <small class="text-muted">9 May,2021</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={blog3} alt="" width="100%" height="100%" />

                                <div class="card-body">
                                    <p class="card-text">A Decade of Building Consumer Trust</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">

                                            <button type="button" class="btn btn-sm btn-outline-success">Read More</button>
                                        </div>
                                        <small class="text-muted">9 May,2021</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;