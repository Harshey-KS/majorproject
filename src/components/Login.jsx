  import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { signIn } from "../authFirebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isLoading, error } = useLogin();

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(email, password);
    // if (await login(email, password)) {
    // }
    navigate("/home");
  };

  return (
    <div className="flex justify-between mx-8 gap-4">
      
      <form
        className="bg-white rounded-xl m-2 h-4/5 pt-2 px-2 shadowBig"
        onSubmit={submitForm}
      >
        <div className=" mt-4 flex flex-col justify-center items-center">
          <div className="flex">
            <MdOutlineEmail className="mt-0.5 h-5 w-5 text-gray-400 mr-1" />
            <label
              htmlFor="username"
              className="block text-gray-400 font-medium"
            >
              Email
            </label>
          </div>
          <input
            type="email"
            placeholder="xyz@spit.ac.in"
            name="username"
            id="username"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            value={email}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className=" mt-4 flex flex-col justify-center items-center">
          <div className="flex">
            <RiLockPasswordFill className=" h-5 w-5 text-gray-400 mr-1" />
            <label
              htmlFor="password"
              className="block text-gray-400 font-medium"
            >
              Password
            </label>
          </div>
          <input
            type="password"
            placeholder=""
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            value={password}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full"
          />
        </div>
        <div className="text-blue-500 text-sm mb-4 flex justify-center items-center ml-4">
          <a className="hover:underline">Forgot Password?</a>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-900 shadowBig hover:bg-gray-400 hover:text-gray-600 text-white font-bold py-2 mb-6 px-8 mx-[70px] duration-300 rounded-lg text-sm"
          >
            LOGIN
          </button>
          <div className="w-full flex font-medium justify-between">
            <hr className="w-1/2 h-[1px] bg-gray-300" />
            <div className="-mt-3 mx-2 text-sm font-medium text-gray-500 ">
              OR
            </div>
            <hr className="w-1/2 h-[1px] bg-gray-300" />
          </div>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="bg-slate-100 hover:bg-slate-300 text-gray-500 font-bold py-2 px-8 text-sm rounded-lg shadowBig ml-2 duration-200"
            onClick={async () => {
              const user = await signIn();
              if (user) {
                if (await login(user.email, user.password, true)) {
                  navigate("/dashboard");
                }
              }
            }}
          >
            <div className="flex">
              <img
                src="https://i.stack.imgur.com/22WR2m.png"
                alt=""
                className="rounded-full h-5 w-5 mt-0.5 mr-2 "
              />{" "}
              <p>LOGIN WITH GOOGLE</p>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;