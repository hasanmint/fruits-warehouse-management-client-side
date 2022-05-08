import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className='display-5 fw-bold lh-1 mb-5 mt-5 text-success text-center'>My Blogs</h2>
                    <h2 className='display-5 text-center'>Question With Answer</h2>
                    <div className='question'>
                        <h5>Q: 1 What is the difference between Javascript and Node.JS ?</h5>
                        <p><h5>Ans:</h5>

                            <div>
                                <b>Javascript:</b>
                                <br></br>
                                1. Javascript is a programming language that is used for writing scripts on the website. <br></br>
                                2. Javascript is designed to build network-centric applications.<br></br>
                                3. Javascript is capable enough to add HTML and play with the DOM.<br></br>
                                4. Javascript is used in frontend development.<br></br>
                                5. Javascript frameworks are RamdaJS, TypedJS, etc.<br></br>
                                6. Various companies use JavaScript like Google, Shopify, Udacity, Sendgrid, Groupon, Okta, Instacart, etc.

                            </div>
                            <div className='mt-3'>
                                <b>Node.JS:</b>
                                <br></br>
                                1. NodeJS is a Javascript runtime environment.<br></br>
                                2. NodeJS's designed for data-intensive real-time applications that run on several platforms.<br></br>
                                3. Nodejs does not have capability to add HTML tags.<br></br>
                                4. Nodejs is used in server-side development.<br></br>
                                5. Some of the Nodejs modules are Lodash, express etc.<br></br>
                                6. Various companies use Node Js like Netflix, Hapi, Walmart, Paypal, Linkedin, Trello, Medium, eBay, etc.
                            </div>

                        </p>
                    </div>
                    <div className='question'>
                        <h5>Q:2. When should you use nodejs and when should you use mongodb ?</h5>
                        <p><h5>Ans:</h5>

                            <div>
                                <p className="text-justify">
                                    MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.

                                    NodeJS's responsibilty is especially to execute your application.
                                    MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.

                                </p>
                            </div>
                        </p>
                    </div>

                    <div className='question'>
                        <h5>Q: 3. What is the difference between SQL and NoSQL ??</h5>
                        <p><h5>Ans:</h5>

                            <div>
                                <b>SQL:</b>
                                <br></br>
                                1. Structured query language (SQL). <br></br>
                                2. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).<br></br>
                                3. SQL databases are table based databases.<br></br>
                                4. SQL databases have a predefined schema.<br></br>
                                5. SQL databases are vertically scalable.<br></br>
                                6. SQL example Oracle, Postgres, and MS-SQL.

                            </div>
                            <div className='mt-3'>
                                <b>NoSQL:</b>
                                <br></br>
                                1. No declarative query language.<br></br>
                                2. Non-relational or distributed database system..<br></br>
                                3. NoSQL databases can be document based, key-value pairs, graph databasess.<br></br>
                                4. NoSQL databases use dynamic schema for unstructured data..<br></br>
                                5. NoSQL databases are horizontally scalable.<br></br>
                                6. NoSQL example is MongoDB, Redis, Neo4j, Cassandra, Hbase.
                            </div>

                        </p>
                    </div>

                    <div className='question'>
                        <h5>Q: 4. What is the purpose of jwt and how does it work?</h5>
                        <p className='text-justify'><h5>Ans:</h5>

                            <div>
                                JWT means JSON Web Token, is an open standard used to share security information between two parties a client and a server. Each JWT contains encoded JSON objects, including a set of claims. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                                The JOSE (JSON Object Signing and Encryption) header contains the type of token JWT in this case and the signing algorithm.
                                There are a JSON Web Token consists of 3 parts separated by a period.1.header, 2.payload, 3.signature.
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;