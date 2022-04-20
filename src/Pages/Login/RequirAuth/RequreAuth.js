import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequreAuth = ({children}) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user,loading] = useAuthState(auth);
    
    const location=useLocation();
    if(loading){
        <Loading></Loading>
    }
    
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(!user.emailVerified){
        return <div>
            <h3 className='text-danger'>Your Email is not varifired
            </h3>
            <h5 className='text-success'>Please verify your Email address</h5>
         <button className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
       sent Verification email email 
      </button>
      <ToastContainer></ToastContainer>
        </div>
        
    }
    
    return children;
};

export default RequreAuth;