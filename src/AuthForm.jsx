import React, { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData);
    } else {
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-300 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,#00000040_1px,transparent_0)] bg-[length:24px_24px] animate-pulse"></div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-gray-200">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ${
              isLogin
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ${
              !isLogin
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Extra Links */}
        {isLogin && (
          <p className="mt-6 text-sm text-gray-500 text-center">
            Forgot your password?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Reset it
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
