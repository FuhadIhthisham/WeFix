import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WorkerNavbar from '../Components/NavBar/WorkerNavbar';
import WorkerHome from '../Components/WorkerHome/WorkerHome';

function WorkerHomePage() {

  const navigate = useNavigate()

  useEffect(() => {
    const workerToken = localStorage.getItem('workerToken')
    if(!workerToken){
      navigate('/worker/login')
    }
  },[])

  return (
    <>
        <WorkerNavbar />
        <WorkerHome />
    </>
);
}

export default WorkerHomePage;
