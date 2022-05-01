import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Cheackout = () => {
    const {servicesId}=useParams();
    const [service]=useServiceDetails(servicesId);
    const [user]=useAuthState(auth);
//     const [user,setUser]=useState({
//         name: 'Akbar the great ',
//         email: "akbar@moomo.taj",
//         address: 'tajmahal road md.pur',
//         phone: '01729948299'
//     });

//    const handleAddressChange =event =>{
//     //    const newvalue=event.target.value;
//       const {address,...rest}=user;
//       const newAddress =event.target.value;
//       const newUser ={address:newAddress,...rest};
//       console.log(newUser);
//       setUser(newUser);
//     //   console.log(address,rest);
      
//    }

const handlePlaceOrder =(event)=>{
    event.preventDefault();
    const order ={
        email: user.email,
        service: service.name,
        servicesId : servicesId,
        address: event.target.address.value,
        phone: event.target.phone.value,
    }
    axios.post('https://mighty-ocean-08356.herokuapp.com/order',order)
    .then(Response=>{
        const {data}=Response;
        if(data.insertedId){
            toast('Your order is book !!!');
            event.target.reset();
        }
    })

}


    return (
        <div className='w-50 mx-auto'>
            <h2>Please order :{service.name}</h2>
            <form onSubmit={handlePlaceOrder} >
                <input className='w-100 mb-2' value={user?.displayName} type="text"name="name" placeholder='Name' required  readOnly disabled/>
                <br />
                <input className='w-100 mb-2' value={user?.email} type="email"name="email" placeholder='Email' required  readOnly disabled/>
                <br />
                <input className='w-100 mb-2' value={service.name} type="text"name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text"name="address" placeholder='address' required />
                <br />
                <input className='w-100 mb-2' value={user.phone} type="text"name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value='Please Order' />
            </form>
        </div>
    );
};

export default Cheackout;