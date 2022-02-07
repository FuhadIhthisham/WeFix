import React, { Fragment, useEffect } from 'react';
import LoginNavbar from '../Components/Navbar/Navbar'
import LoginForm from '../Components/AdminLogin/AdminLogin'
import { useNavigate } from 'react-router-dom';

function AdminLoginPage() {

    const navigate = useNavigate()
    useEffect(() => {
        const sessionToken = localStorage.getItem('adminToken')
        if(sessionToken){
            navigate('/admin')
        } else {
            navigate('/admin/login')
        }
    },[])

    return (
        <Fragment>
            <LoginNavbar />
            <LoginForm />
        </Fragment>
    );
}

export default AdminLoginPage;
