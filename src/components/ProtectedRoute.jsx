
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getRole, isAuthenticated } from '../utils/auth';

export default function ProtectedRoute({ children, role }) {
  const auth = isAuthenticated();
  const currentRole = getRole();

  if (!auth) return <Navigate to="/login" />;
  if (role && currentRole !== role && currentRole !== 'SuperAdmin') return <Navigate to="/login" />;
  return children;
}