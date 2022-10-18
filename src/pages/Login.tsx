import React from "react";

const Login = () => {
  return (
    <div className=" bg-[#ecf0f1] w-screen h-screen flex justify-center items-center">
      <div className=" w-2/4 h-2/4 rounded-lg  flex">
        <div className="w-2/5 h-full bg-[#58af9c] rounded-l-lg"></div>
        <div className=" rounded-r-lg bg-white w-2/4 h-full flex flex-col  items-center justify-center">
          <label className=" m-6 w-2/3 h-10">
            <input
              type="email"
              name=""
              id=""
              className="bg-gray-300 text-center w-full h-full"
              placeholder="UserName"
            />
          </label>
          <label className="w-2/3 h-10">
            <input
              type="password"
              name=""
              id=""
              className="bg-gray-300 text-center w-full h-full"
              placeholder="Password"
            />
          </label>
          <button
            type="submit"
            className="w-1/3 bg-blue-500 m-6 p-4 rounded-full"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
