import React from "react";
import AuthForm from "./AuthForm.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      {/* Optional Header */}
      <header className="app-header">
        <h1 className="app-title">Welcome Back 👋</h1>
      </header>

      {/* Auth Form */}
      <main className="app-main">
        <AuthForm />
      </main>

      {/* Optional Footer */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
