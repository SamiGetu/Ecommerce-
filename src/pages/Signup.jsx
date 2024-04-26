import { useState } from "react";
import google from "../assets/Icons/google.png";
import facebook from "../assets/Icons/facebook (1).png";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Signup with:", name, email, password, confirmPassword);
    // Here you would typically handle the signup logic, like calling an API.
    if (password === confirmPassword) {
      // Proceed with API signup
    } else {
      alert("Passwords do not match!");
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google signup logic
  };

  const handleFacebookLogin = () => {
    // Implement Facebook signup logic
  };

  return (
    <>
      <Helmet title="SignUp">
        <section>
          <div className="flex items-center justify-center h-screen">
            <div className="p-8 bg-white shadow-lg rounded-lg  lg:w-[30%]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
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
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-3 text-sm font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
                >
                  Sign Up
                </button>
                <div className="flex justify-between">
                  <Link to={"/login"}>
                    <button
                      type="button"
                      className="text-sm text-blue-500 hover:underline focus:outline-none"
                    >
                      Already have an account? Login
                    </button>
                  </Link>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="p-2 focus:outline-none"
                    >
                      <img
                        src={google}
                        width={"30rem"}
                        height={"30rem"}
                        alt="Google sign-in"
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
                        alt="Facebook sign-in"
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

export default SignUp;
