import React from 'react';
import Banner from '../../Banner/Banner';
import Blog from '../Blog/Blog';
import CallToAction from '../CallToAction/CallToAction';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Blog></Blog>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;