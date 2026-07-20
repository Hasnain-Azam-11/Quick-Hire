import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FF6B00] rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">Q</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your QuickHire account</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#0A0A0A] mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#F5F5F5] border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:border-[#FF6B00] focus:ring-[#FF6B00]/20"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#0A0A0A] mb-2 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F5F5] border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:border-[#FF6B00] focus:ring-[#FF6B00]/20 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF6B00]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-[#FF6B00] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 px-6 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 bg-[#FF6B00] text-white hover:bg-[#FF7A1A] hover:shadow-lg hover:shadow-orange-500/30"
          >
            Sign In
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-4 px-6 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-[#0A0A0A] hover:bg-[#F5F5F5]"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account? 
          <Link to="/register" className="text-[#FF6B00] hover:underline ml-1">
            Register here
          </Link>
        </div>

        <div className="mt-4 text-center">
          <Link to="/admin-dashboard" className="text-xs text-gray-400 hover:text-[#FF6B00]">
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;