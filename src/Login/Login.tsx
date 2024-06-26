// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users, { User } from '../helpers/api/users';

interface LoginProps {
  onLogin: (role: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [ setErrorMessage] = useState<string | null>(null);

  const handleLoginClick = () => {
    const usernameInput = document.getElementById('login') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const username = usernameInput.value;
    const password = passwordInput.value;

    const user = users.find((u: User) => u.username === username && u.password === password);

    if (user) {
      setErrorMessage(null);
      alert(`You have logged in successfully. Welcome, ${username}!`);

      navigate('/dashboard');
      onLogin(user.id <= 5 ? 'voter' : 'admin');
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
      alert('Invalid username or password. Please try again.');
      return; // Prevent navigation for invalid login
    }
  };

  return (
    <div>
<div className="relative py-3 w-96 ml-96 left-48  mt-36">
  <div
    className="relative px-4 py-10 bg-gray-300 mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
  >
    <div className="max-w-md mx-auto text-white">
      <div className="flex items-center space-x-5 justify-center">
      </div>
      <div className="mt-5">
        <label
          className="font-semibold text-sm text-black pb-1 block"
         
          >Username</label
        >
        <input
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white text-black focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
          type="text"
          id="login"
        />
        <label
          className="font-semibold text-sm text-black pb-1 block"
          
          >Password</label
        >
        <input
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white text-black focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
          type="password"
          id="password"
        />
      </div>
      <div className="text-right mb-4">
        <a
          className="text-xs font-display font-semibold text-gray-500 hover:text-gray-400 cursor-pointer"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="flex justify-center items-center">
        <div> 
        </div>
      </div>
      <div className="mt-5">
        <button
          className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
         
          onClick={handleLoginClick}
        >
          Log in
        </button>
      </div>
      <div className="flex items-center justify-between mt-4"> 
      
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
       
        
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      </div>
    </div>
  </div>
</div>

            
        </div>
    )
}

export default Login

  

