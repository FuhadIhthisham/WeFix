import React, { useEffect } from 'react';
import LoginForm from '../Components/WorkerLogin/LoginForm';
import WorkerNavbar from '../Components/NavBar/WorkerNavbar';
import { useNavigate } from 'react-router-dom';

function WorkerLoginPage() {

  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = localStorage.getItem("workerToken");
    if (sessionToken) {
      navigate("/worker");
    } else {
      navigate("/worker/login");
    }
  }, []);

  return (
      <>
        <WorkerNavbar />
        <LoginForm />
      </>
  );
}

export default WorkerLoginPage;
