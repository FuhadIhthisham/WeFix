import React from 'react';
import SignupForm from '../Components/WorkerSignup/Signup';
import WorkerNavbar from '../Components/NavBar/WorkerNavbar';

function WorkerSignupPage() {
  return (
        <>
            <WorkerNavbar />
            <SignupForm />
        </>
    );
}

export default WorkerSignupPage;
