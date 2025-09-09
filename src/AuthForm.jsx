import React, { useState } from "react";

export default function AuthForm() {
  const [mode, setMode] = useState("login"); // "login" | "signup" | "reset"
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

    if (mode === "login") {
      console.log("Logging in with:", formData);
    } else if (mode === "signup") {
      console.log("Signing up with:", formData);
    } else if (mode === "reset") {
      console.log("Resetting password for:", formData.email);
    }
  };

  return (
    <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-200">
      {/* Tabs (only for login/signup) */}
      {mode !== "reset" && (
        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ${
              mode === "login"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => { setMode("signup"); }}
            className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ${
              mode === "signup"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Sign Up
          </button>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sign Up → Needs Name */}
        {mode === "signup" && (
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

        {/* Email Field (all modes need this) */}
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

        {/* Password only for login/signup */}
        {mode !== "reset" && (
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
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          {mode === "login"
            ? "Login"
            : mode === "signup"
            ? "Create Account"
            : "Send Reset Link"}
        </button>
      </form>

      {/* Extra Links */}
      {mode === "login" && (
        <p className="mt-6 text-sm text-gray-500 text-center">
          Forgot your password?{" "}
          <button
            onClick={() => setMode("reset")}
            className="text-blue-600 font-medium hover:underline"
          >
            Reset it
          </button>
        </p>
      )}

      {mode === "reset" && (
        <p className="mt-6 text-sm text-gray-500 text-center">
          Remembered your password?{" "}
          <button
            onClick={() => setMode("login")}
            className="text-blue-600 font-medium hover:underline"
          >
            Back to Login
          </button>
        </p>
      )}
    </div>
  );
}
