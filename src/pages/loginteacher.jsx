import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, error } = useLogin();

  const submitForm = async (e) => {
    e.preventDefault();
    navigate("/home")
    // if (await login(email, password)) {
    //   console.log("helo");
    //   navigate("/dashboard");
    // }
  };

  return (
    // <form className="border-2 border-blue-800 p-4" onSubmit={submitForm}>
    //   <p className="text-lg font-bold mb-4">Login</p>
    //   <div className="mb-4">
    //     <label htmlFor="username" className="block text-black-700">
    //       Email
    //     </label>
    //     <input
    //       type="email"
    //       placeholder="xyz@spit.ac.in"
    //       name="username"
    //       id="username"
    //       onChange={(e) => {
    //         setEmail(e.currentTarget.value);
    //       }}
    //       value={email}
    //       className="border border-gray-300 rounded-md w-full p-2 mt-1"
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label htmlFor="password" className="block text-black-700">
    //       Password
    //     </label>
    //     <input
    //       type="password"
    //       placeholder="********"
    //       name="password"
    //       id="password"
    //       onChange={(e) => {
    //         setPassword(e.currentTarget.value);
    //       }}
    //       value={password}
    //       className="border border-gray-300 rounded-md w-full p-2 mt-1"
    //     />
    //   </div>
    //   <div className="text-black-500 mb-4">
    //     <a className="hover:underline">Forgot Password?</a>
    //     <div className=" text-red-400">{error}</div>
    //   </div>

    //   <div className="mb-4">
    //     <button
    //       type="submit"
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //     >
    //       Log in
    //     </button>
    //   </div>
    //   <div className="mb-4">
    //     {/* <button
    //       type="button"
    //       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    //       onClick={async () => {
    //         // const user = await signIn();
    //         if (user) {
    //           if (await login(user.email, user.password)) {
    //             navigate("/dashboard");
    //           }
    //         }
    //       }}
    //     >
    //       <i className="fab fa-google fa-1x"></i> Log in with Google
    //     </button> */}
    //   </div>

    // </form>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            // alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={submitForm}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
  );
};

export default Login;
