import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { servicesId } = useParams();
    console.log(servicesId);
    const [service ,setService]=useState({});
    useEffect(()=>{
        const url=`http://localhost:5000/service/${servicesId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data));

    },[])
    return (
        <div>
            <h2>you are about  to detail: {service.name}</h2>
            <h3>HI tomra kemon aco </h3>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;