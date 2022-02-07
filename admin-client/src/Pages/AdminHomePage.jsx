import React, { Fragment } from 'react';
import LoginNavbar from '../Components/Navbar/Navbar';
import AdminHome from '../Components/AdminHome/AdminHome'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AdminHomePage() {

    const navigate = useNavigate()
    useEffect(() => {
        const sessionToken = localStorage.getItem('adminToken')
        if(!sessionToken){
            navigate('/admin/login')
        }
    },[])

  return (
        <Fragment>
            <LoginNavbar />
            <AdminHome />
        </Fragment>
    );
}

export default AdminHomePage;
