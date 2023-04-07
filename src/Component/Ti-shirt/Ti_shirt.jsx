import React from 'react';

const Ti_shirt = ({ tiShirt }) => {
    const {picture , price,name,gender} =tiShirt;


    return (
        <>
            <div className="card card-compact w-full h-full  bg-base-100 ">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Band: {name}</h2>
                    <p>{gender}</p>
                    <h1>Price ${price}</h1>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Ti_shirt;
