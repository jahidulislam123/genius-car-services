import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate =useNavigate()
    const navigateLogin =()=>{
        navigate('/login')
    }

    const handleRegister =(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const eamil=event.target.email.value;
        const password=event.target.password.value;

    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Registration</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='your name'/>
                <br />
                <input type="email" name="email" id=""placeholder='your email' required /> 
                <br />
                <input type="password" name="password" id="" placeholder='password' required />
                <br />
                <input type="submit" value="register" />


            </form>
           Already have an account?  <Link to="/login" className='text-danger  pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link>

        </div>
    );
};

export default Register;