import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ti_shirt from '../Ti-shirt/Ti_shirt';

const Home = () => {
    const tiShirts = useLoaderData();
    return (
        <div className='grid  md:grid-cols-12 mt-7'>
            <div className='col-span-8'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        tiShirts.map(tiShirt => <Ti_shirt
                            key={tiShirt._id}
                            tiShirt={tiShirt}
                        />)
                    }
                </div>

            </div>
            <div className='col-span-4'>

            </div>
        </div>
    );
};

export default Home;