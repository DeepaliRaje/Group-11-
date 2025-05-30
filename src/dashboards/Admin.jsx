import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', phone: '', address: '', department: '', authKey: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, role: 'Admin' }),
    });
    const data = await res.json();
    if (data.success) navigate('/login');
    else alert('Registration failed');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Admin Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" type="text" onChange={handleChange} placeholder="Full Name" required className="w-full p-3 border rounded" />
          <input name="email" type="email" onChange={handleChange} placeholder="Email" required className="w-full p-3 border rounded" />
          <input name="password" type="password" onChange={handleChange} placeholder="Password" required className="w-full p-3 border rounded" />
          <input name="phone" type="tel" onChange={handleChange} placeholder="Phone Number" required className="w-full p-3 border rounded" />
          <textarea name="address" onChange={handleChange} placeholder="Address" required className="w-full p-3 border rounded"></textarea>
          <input name="department" type="text" onChange={handleChange} placeholder="Department (e.g., Orders)" required className="w-full p-3 border rounded" />
          <input name="authKey" type="password" onChange={handleChange} placeholder="Authorization Key" required className="w-full p-3 border rounded" />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Register</button>
        </form>
      </div>
    </div>
  );
}