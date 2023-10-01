import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Donation from './Donation';
import Card from '../Components/Card/Card';




const Home = () => {
const LoadData=useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
           {

        LoadData.map(donation => <Card key={donation.id}donation={donation}></Card>)

           }
        </div>
    );
};

export default Home;