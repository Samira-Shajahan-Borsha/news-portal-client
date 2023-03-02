import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <h1>This is Home Component : {news.length}</h1>
        </div>
    );
};

export default Home;