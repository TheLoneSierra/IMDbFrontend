import React from 'react';

const SignupForm = ({ formData, handleInputChange, handleSubmit, handleNavigate }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}>
      <div className="mb-4">
        <label className="block text-black mb-2">Your Name</label>
        <input
          type="text"
          placeholder="First and last name"
          className="w-full px-2 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          value={formData.fullName}
          name="fullName"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-black mb-2">Email</label>
        <input
          type="email"
          className="w-full px-2 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-black mb-2">Password</label>
        <input
          type="password"
          placeholder="at least 8 characters"
          className="w-full px-2 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          value={formData.password}
          name="password"
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-1 rounded-lg font-semibold"
      >
        Create your IMDb account
      </button>
      <p className="mt-7 text-black font-light">
        Already have an account?{' '}
        <a onClick={handleNavigate} className="text-blue-600 font-light cursor-pointer">
          Sign In
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
