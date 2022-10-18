import React from "react";

const Login = () => {
  return (
    <div className=" bg-gray-700 w-screen h-screen flex justify-center items-center">
      <div className=" w-2/4 h-80 bg-gray-300">
        <h1>Faca Login</h1>
        <div className="w-full h-full flex flex-col  items-center justify-center">
          <label className=" m-6">
            <span className="m-6">Email :</span>
            <input type="email" name="" id="" />
          </label>
          <label>
            <span className="m-6">Senha:</span>
            <input type="password" name="" id="" />
          </label>
          <button type="submit" className=" bg-blue-500 m-6 p-4">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
