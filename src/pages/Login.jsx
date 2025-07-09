import React from 'react';
import { useNavigate } from 'react-router-dom';
import dashboardImage from '../assets/LoginImage.png';
import LoginLogo from '/LoginLogo.svg';
import Vector1 from '/Vector1.svg'
import Vector2 from '/Vector2.svg'
import Vector3 from '/Vector3.svg'
import Vector4 from '/Vector4.svg'
import Vector5 from '/vector5.svg'
import Vector6 from '/vector6.svg'

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="w-full min-h-screen flex font-jakarta">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-20 bg-white">
        <div className="max-w-md w-full mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <img src={LoginLogo} alt="App Logo" className="w-[58px] h-[48px]" />
            <h1 className="text-[44px] font-semibold text-[#333333] font-jakarta">App Name</h1>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] font-semibold text-[#323130] mb-1 text-start">Sign Up</h2>
          <p className="text-sm text-[#737373] mb-6 text-start ">Enter email ID And Password To login</p>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-[#323130] font-bold mb-1 block text-start">Email</label>
            <div className="flex items-center border border-[#D9D9D9] rounded-md px-3 py-2">
              <input
                type="email"
                placeholder="Enter Email ID"
                className="w-full outline-none text-sm text-[#737373] bg-transparent"
              />
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 9.5L10 16L7.5 13.5M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5Z" stroke="#1A71F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm text-[#323130] font-bold mb-1 block text-start">Password</label>
            <div className="flex items-center border border-[#D9D9D9] rounded-md px-3 py-2">
              <input
                type="password"
                placeholder="Enter password"
                className="w-full outline-none text-sm text-[#737373] bg-transparent"
              />
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4.5L9.87868 10.3787M20 20.5L14.1213 14.6213M9.87868 10.3787C9.33579 10.9216 9 11.6716 9 12.5C9 14.1569 10.3431 15.5 12 15.5C12.8284 15.5 13.5784 15.1642 14.1213 14.6213M9.87868 10.3787L14.1213 14.6213M6.76821 7.26821C4.72843 8.59899 2.96378 10.526 2 12.4998C3.74646 16.0764 8.12201 19.5 11.9998 19.5C13.7376 19.5 15.5753 18.8124 17.2317 17.7317M9.76138 5.84717C10.5114 5.62316 11.2649 5.5 12.0005 5.5C15.8782 5.5 20.2531 8.92398 22 12.5002C21.448 13.6302 20.6336 14.7449 19.6554 15.7412" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>


            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-[#1A71F6]" />
              <span className="text-[#333333] font-bold">Remember me ?</span>
            </label>
            <button className="text-[#1A71F6] font-medium">Forget Password</button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#1A71F6] text-white py-2.5 rounded-md text-sm font-medium"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex w-1/2 relative bg-[#1A71F6] justify-center items-center overflow-hidden">
        {/* Decorative Ellipse */}
        <div className="absolute w-[500px] h-[600px] bg-[#FF7E4BDB] rounded-full top-[30%] left-[10%] blur-3xl opacity-50 z-0"></div>
        <div className="">
          <img src={Vector1} alt="vector" className='absolute top-0 left-0'/>
          <img src={Vector2} alt="vector" className='absolute top-0 right-5'/>
          <img src={Vector3} alt="vector" className='absolute top-0 right-0'/>
          <img src={Vector4} alt="vector" className='absolute top-[50%] right-0'/>
          <img src={Vector5} alt="vector" className='absolute bottom-0 right-[50%]'/>
          <img src={Vector6} alt="vector" className='absolute bottom-0 right-[40%]'/>
        </div>
        {/* Dashboard Image */}
        <div className="z-10 w-[90%] max-w-[580px]">
          <img src={dashboardImage} alt="Dashboard Preview" className="rounded-2xl shadow-lg" />
          <div className="mt-10 text-white text-center px-4">
            <h2 className="text-[22px] font-semibold leading-snug mb-2">
              Easy-to-Use Dashboard for Managing Your School Business.
            </h2>
            <p className="text-sm opacity-80 leading-relaxed">
              Streamline Your Business Management with Our User-Friendly Dashboard.
              Simplify complex tasks, track key metrics, and make informed decisions effortlessly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
