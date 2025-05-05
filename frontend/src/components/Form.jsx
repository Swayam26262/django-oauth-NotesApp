import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Determine if we're on login or register page
  const isLogin = method === "login";
  const formTitle = isLogin ? "Login" : "Create Account";
  const buttonText = isLogin ? "Sign In" : "Sign Up";
  const alternateText = isLogin ? "Need an account?" : "Already have an account?";
  const alternateLinkText = isLogin ? "Register" : "Login";
  const alternatePath = isLogin ? "/register" : "/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!username || !password) {
      setError("Please enter both username and password");
      setLoading(false);
      return;
    }

    if (!isLogin && !confirmPassword) {
      setError("Please confirm your password");
      setLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const userData = { username, password };
      
      const res = await api.post(route, userData);
      
      if (isLogin) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.error("API Error:", err.response?.data);
      const errorMessage = err.response?.data?.detail || 

                         err.response?.data?.username?.[0] ||
                         err.response?.data?.password?.[0] ||
                         "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleAlternateClick = () => {
    navigate(alternatePath);
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form-card">
        <h2 className="auth-form-title">
          {formTitle}
        </h2>
        
        {error && (
          <div className="auth-form-error">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label 
              htmlFor="username" 
              className="form-label"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Enter your username"
            />
          </div>
          

          
          <div className="form-group">
            <label 
              htmlFor="password" 
              className="form-label"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Enter your password"
            />
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label 
                htmlFor="confirmPassword" 
                className="form-label"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
                placeholder="Confirm your password"
              />
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className={`auth-button ${loading ? 'button-loading' : ''}`}
          >
            {loading ? "Processing..." : buttonText}
          </button>
        </form>
        
        <div className="auth-alternate">
          <p className="alternate-text">
            {alternateText}{" "}
            <button
              onClick={handleAlternateClick}
              className="alternate-link"
            >
              {alternateLinkText}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;