import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md text-center md:text-left">
          <div className="text-5xl font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light mt-4">Sorry, we couldn't find this page.</p>
          <p className="mb-8 mt-2">But don't worry, you can find plenty of other things on our homepage.</p>
          <button 
            onClick={() => navigate('/')} 
            className="px-4 py-2 text-sm font-medium shadow text-white transition duration-150 rounded-lg focus:outline-none bg-blue-600 hover:bg-blue-700"
          >
            Back to Homepage
          </button>
        </div>
        <div className="max-w-lg mt-8 md:mt-0 md:ml-10">
         
          <img src="/assets/404.svg" alt="Page Not Found" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
