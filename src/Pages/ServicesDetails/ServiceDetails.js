import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const ServiceDetails = () => {
    const { servicesId } = useParams();
    const [service] =useServiceDetails(servicesId);

    // console.log(servicesId);
   
    return (
        <div>
            <h2>you are about  to book: {service.name}</h2>
            <h3>HI tomra kemon aco </h3>
            <div className='text-center'>
                <Link to={`/checkout/${servicesId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;