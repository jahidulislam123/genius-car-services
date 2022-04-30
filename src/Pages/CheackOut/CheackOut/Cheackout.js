import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const Cheackout = () => {
    const {servicesId}=useParams();
    const [service]=useServiceDetails(servicesId);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order :{service.name}</h2>
            <form >
                <input type="text"name="name" placeholder='name' required />
            </form>
        </div>
    );
};

export default Cheackout;