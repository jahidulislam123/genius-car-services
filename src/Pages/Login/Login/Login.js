import { async } from '@firebase/util';
import { updatePassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';


const Login = () => {
  const emailRef =useRef('');
  const passwordRef=useRef('');
  const navigate =useNavigate();
  const location=useLocation();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";
  let errorElement ;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (error || sending ) {
    errorElement=<p>Error: {error?.message}</p>
      
  }
  const resetPassword=async()=>{
    const email=emailRef.current.value;
   if(email){
    await sendPasswordResetEmail(email);
    toast('sent email');
   }
   else{
     toast("please ender your email address");
   }

  }
  if(loading ){
    return <Loading></Loading>
  }
  if(user){
    // navigate(from, { replace: true });
  }
       
        const handleSubmit = async event=>{
            event.preventDefault();
            const email=emailRef.current.value;
            const password =passwordRef.current.value;

            console.log(email,password);
           await signInWithEmailAndPassword(email, password);
           const {data}=await axios.post('https://mighty-ocean-08356.herokuapp.com/login', {email});
          //  console.log(data);
          localStorage.setItem('accessToken', data);
          navigate(from, { replace: true });
        }

        const navigateRegister =event =>{
            navigate ("/register");
        }
    return (

     

     
        <div className='container w-50 mx-auto'>
           <Helmet>
                <title>login-genious car service</title>
            </Helmet>
            <h2 className='text-primary mt-2 text-center'>please loging </h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
 
    <Form.Control ref={passwordRef} type="password" placeholder="Password"  required/>
  </Form.Group>
  
  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
    Login
  </Button>
</Form>
{errorElement}

<p>new to genius car  <Link to="/register" className='text-primary  pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>
<p className='pe-2'>Forget Passsword  ?<button  className='btn btn-link text-primary  pe-auto text-decoration-none' onClick={resetPassword}> Reset Password </button></p>
<SocialLogin></SocialLogin>
<ToastContainer/>
        </div>
    );
};

export default Login;