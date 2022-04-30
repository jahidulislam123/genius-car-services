import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const Cheackout = () => {
    const {servicesId}=useParams();
    const [service]=useServiceDetails(servicesId);
    const [user,setUser]=useState({
        name: 'Akbar the great ',
        email: "akbar@moomo.taj",
        address: 'tajmahal road md.pur',
        phone: '01729948299'
    });

   const handleAddressChange =event =>{
    //    const newvalue=event.target.value;
      const {address,...rest}=user;
      const newAddress =event.target.value;
      const newUser ={address:newAddress,...rest};
      console.log(newUser);
      setUser(newUser);
    //   console.log(address,rest);
      
   }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order :{service.name}</h2>
            <form >
                <input className='w-100 mb-2' value={user.name} type="text"name="name" placeholder='Name' required />
                <br />
                <input className='w-100 mb-2' value={user.email} type="email"name="email" placeholder='Email' required />
                <br />
                <input className='w-100 mb-2' value={service.name} type="text"name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' onChange={handleAddressChange} value={user.address} type="text"name="address" placeholder='address' required />
                <br />
                <input className='w-100 mb-2' value={user.phone} type="text"name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value='Please Order' />
            </form>
        </div>
    );
};

export default Cheackout;