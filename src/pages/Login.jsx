import { useState } from "react";
import googel from "../assets/Icons/google.png";
import facebook from "../assets/Icons/facebook (1).png";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login with:", email, password);
    // Here you would typically handle the login logic,
    // like calling an API.
  };

  const handleCreateAccount = () => {
    // Redirect to the create account page
    // Example: history.push("/create-account")
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login logic
  };

  return (
    <>
      <Helmet title="LogIn">
        <section>
          <div className="flex items-center justify-center h-screen">
            <div className="p-8 bg-white shadow-lg rounded-lg lg:h-[60%] lg:w-[30%]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-3 text-sm font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
                >
                  Log In
                </button>
                <div className="flex justify-between">
                  <Link to={"/signup"}>
                    <button
                      type="button"
                      onClick={handleCreateAccount}
                      className="text-sm text-blue-500 hover:underline focus:outline-none"
                    >
                      Dont have an account? Create one
                    </button>
                  </Link>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="p-2 focus:outline-none"
                    >
                      <img
                        src={googel}
                        width={"30rem"}
                        height={"30rem"}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      onClick={handleFacebookLogin}
                      className="p-2 focus:outline-none"
                    >
                      <img
                        src={facebook}
                        width={"30rem"}
                        height={"30rem"}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default Login;
