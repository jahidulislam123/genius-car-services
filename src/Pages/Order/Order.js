import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from './api/axios';

const Order = () => {
    const [user]=useAuthState(auth);
    const [orders,setOrders]=useState([]);
    const navigate =useNavigate();
    useEffect(()=>{
        const getOrders =async()=>{
            const email =user.email;
            const url =`https://mighty-ocean-08356.herokuapp.com/order?email=${email}`;
           try{
            const {data}=await axiosPrivate.get(url);
            setOrders(data);
           }
           catch(error){
               console.log(error.message);
               if(error.response.status===403||error.response.status===404){
                   signOut(auth);
                navigate('/login');
               }

           }
            
        }
        getOrders();
        
    },[])
    return (
        <div className='w-50 mx-auto bg-light p-4 border mt-4'>
            <h3>your order {orders.length}</h3>
            {
                orders.map(order=><div key={order._id}>
                    <p>{order.email} :{order.service}</p>
                </div>)
            }
        </div>
    );
};

export default Order;