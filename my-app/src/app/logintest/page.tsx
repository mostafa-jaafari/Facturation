import React from 'react'
import './test.css';

export default function page() {
  return (
<main className="gradient-bg min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    {/* <!-- Logo and Header --> */}
    <div className="text-center">
      <h1 className="text-3xl font-bold gradient-text">Luxe Facturation</h1>
      <h2 className="mt-6 text-2xl font-bold">Sign in to your account</h2>
      <p className="mt-2 text-sm text-gray-400">
        Access your financial dashboard
      </p>
    </div>
    
    {/* <!-- Login Form --> */}
    <div className="login-card rounded-xl p-8 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10 blur-3xl"></div>
      
      <form className="mt-8 space-y-6" action="#" method="POST">
        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email address</label>
            <div className="mt-1">
              <input id="email" name="email" type="email" required 
                className="input-field appearance-none block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900" 
                placeholder="youremail@company.com" />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition duration-150">
                Forgot your password?
              </a>
            </div>
            <div className="mt-1">
              <input id="password" name="password" type="password" required 
                className="input-field appearance-none block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900" 
                placeholder="••••••••" />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="checkbox-primary h-4 w-4 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Remember me
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <button type="submit" className="btn-primary w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900">
            Sign in
          </button>
        </div>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <a href="#" className="w-full inline-flex justify-center py-3 px-4 rounded-lg shadow-sm bg-gray-800 hover:bg-gray-700 transition duration-150 text-sm font-medium text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
          
          <div>
            <a href="#" className="w-full inline-flex justify-center py-3 px-4 rounded-lg shadow-sm bg-gray-800 hover:bg-gray-700 transition duration-150 text-sm font-medium text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="text-center mt-4">
      <p className="text-sm text-gray-400">
        Don't have an account?
        <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition duration-150">
          Sign up for free
        </a>
      </p>
    </div>
  </div>
    </main>
  )
}
