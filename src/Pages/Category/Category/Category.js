import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <h1>This Category has news : {news.length}</h1>
        </div>
    );
};

export default Category;