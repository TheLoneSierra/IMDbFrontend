import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import SignupForm from './auth/SignupForm';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const addUserToFirestore = async () => {         //adding user to firestore
    try {
      await addDoc(collection(db, "users"), {
        fullName: formData.fullName,
        email: formData.email,
      });
    } catch (error) {
      console.error("Error while registering the user in Firestore", error);
    }
  };

  const handleSubmit = async () => {
    setError(null);  //  error state
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await addUserToFirestore();
      navigate('/');
    } catch (error) {
      setError("Failed to create an account. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <img className="h-10 w-16 mb-6" src='../src/assets/IMDbLogo.png' alt="IMDb Logo" />
      <div className="bg-white p-8 rounded-lg border border-gray-400 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <SignupForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleNavigate={handleNavigate}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-7">
        <ul className="flex space-x-10 text-sm">
          <li className="text-blue-700 hover:text-red-500 hover:underline cursor-pointer">Help</li>
          <li className="text-blue-700 hover:text-red-500 hover:underline cursor-pointer">Condition of use</li>
          <li className="text-blue-700 hover:text-red-500 hover:underline cursor-pointer">Privacy Notice</li>
        </ul>
        <p className="text-sm mt-3">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Signup;
