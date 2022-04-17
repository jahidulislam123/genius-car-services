import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to detail: {serviceId}</h2>
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