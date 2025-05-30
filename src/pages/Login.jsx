import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);

      if (data.role === 'Admin') navigate('/admin');
      else if (data.role === 'Vendor') navigate('/vendor');
      else if (data.role === 'SuperAdmin') navigate('/superadmin');
      else navigate('/user');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition-all"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Don't have an account? Register as:</p>
          <div className="flex justify-center gap-3 mt-2 flex-wrap">
            <a href="/user" className="text-blue-600 hover:underline">User</a>
            <a href="/vendor" className="text-green-600 hover:underline">Vendor</a>
            <a href="/admin" className="text-blue-700 hover:underline">Admin</a>
            <a href="/superadmin" className="text-purple-700 hover:underline">SuperAdmin</a>
          </div>
        </div>
      </div>
    </div>
  );
}
