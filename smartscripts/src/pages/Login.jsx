import React from "react";
import LoginImg from "../assets/Login.png";



export default function Login() { 
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'> 
        <img className='w-full h-full object-cover'src={LoginImg} alt="" /> 
      </div>

      <div className="bg-yellow-800 flex flex-col justify-center">
        <form className="max-w[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounde-lg"> 
          <h2 className="text-4xl dark:text-white font-bold text-center">Selamat Datang di Pusat Bantuan LPDP!</h2>
          <div>
            <label>Username</label>
            <input type="text" placeholder='Masukkan username anda'/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder='Masukkan password Anda'/>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}