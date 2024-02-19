import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, error } = useLogin();

  const submitForm = async (e) => {
    e.preventDefault();
    if (await login(email, password)) {
      console.log("helo");
      navigate("/dashboard");
    }
  };

  return (
    <form className="border-2 border-blue-500 p-4" onSubmit={submitForm}>
      <p className="text-lg font-bold mb-4">Login</p>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="xyz@spit.ac.in"
          name="username"
          id="username"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          value={email}
          className="border border-gray-300 rounded-md w-full p-2 mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="********"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          value={password}
          className="border border-gray-300 rounded-md w-full p-2 mt-1"
        />
      </div>
      <div className="text-blue-500 mb-4">
        <a className="hover:underline">Forgot Password?</a>
        <div className=" text-red-400">{error}</div>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </button>
      </div>
      <div className="mb-4">
        {/* <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            if (user) {
              if (await login(user.email, user.password)) {
                navigate("/dashboard");
              }
            }
          }}
        > */}
          {/* <i className="fab fa-google fa-1x"></i> Log in with Google
        </button> */}
      </div>

    </form>
  );
};

export default Register;
