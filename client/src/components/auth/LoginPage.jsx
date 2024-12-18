// src/components/auth/LoginPage.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();
  const [loginMethod, setLoginMethod] = useState('email');
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.emailOrUsername) {
      errors.emailOrUsername = loginMethod === 'email' 
        ? 'Email is required' 
        : 'Username is required';
    } else if (loginMethod === 'email' && !/\S+@\S+\.\S+/.test(formData.emailOrUsername)) {
      errors.emailOrUsername = 'Email address is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Attempt login
    const success = await login(formData.emailOrUsername, formData.password);
    if (success) {
      navigate('/dashboard');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo Section */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm opacity-50"></div>
              <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 w-10 h-10 rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-lg">NS</div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                Nurse-Sync
              </span>
              <span className="text-xs text-slate-500 -mt-1">Healthcare Management</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-600">
            Please sign in to your account
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Login Method Toggle */}
          <div className="flex rounded-lg border border-slate-300 p-1">
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                loginMethod === 'email'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setLoginMethod('email')}
            >
              Email
            </button>
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                loginMethod === 'username'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setLoginMethod('username')}
            >
              Username
            </button>
          </div>

          {/* Email/Username Input */}
          <div>
            <label htmlFor="emailOrUsername" className="block text-sm font-medium text-slate-700">
              {loginMethod === 'email' ? 'Email address' : 'Username'}
            </label>
            <input
              id="emailOrUsername"
              name="emailOrUsername"
              type={loginMethod === 'email' ? 'email' : 'text'}
              required
              className={`mt-1 block w-full px-3 py-2 border ${
                formErrors.emailOrUsername ? 'border-red-300' : 'border-slate-300'
              } rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500`}
              placeholder={loginMethod === 'email' ? 'name@company.com' : 'username'}
              value={formData.emailOrUsername}
              onChange={handleInputChange}
            />
            {formErrors.emailOrUsername && (
              <p className="mt-1 text-sm text-red-500">{formErrors.emailOrUsername}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className={`mt-1 block w-full px-3 py-2 border ${
                formErrors.password ? 'border-red-300' : 'border-slate-300'
              } rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500`}
              value={formData.password}
              onChange={handleInputChange}
            />
            {formErrors.password && (
              <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-slate-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-slate-600">
          Not registered yet?{' '}
          <a href="/register" className="font-medium text-emerald-600 hover:text-emerald-500">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;