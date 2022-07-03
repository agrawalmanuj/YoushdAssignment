import React from 'react'
import { Navigate, Route } from 'react-router-dom'

const PrivateWrapper = ({ children }) => {
    return localStorage.getItem("access-token") ? children : <Navigate to="/login" />;
};

export default PrivateWrapper;