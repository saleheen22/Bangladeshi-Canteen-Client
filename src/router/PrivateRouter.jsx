import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <PacmanLoader color="rgba(54, 215, 183, 1)" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRouter;