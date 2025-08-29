import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export function useAdminAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  // Verify token with server
  const { data: user, isLoading, error } = useQuery({
    queryKey: ['/api/admin/me'],
    queryFn: async () => {
      if (!token) return null;
      
      const response = await fetch('/api/admin/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      return response.json();
    },
    enabled: !!token,
    retry: false,
  });

  // Handle authentication errors
  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error]);

  const login = (newToken: string, userData: AdminUser) => {
    setToken(newToken);
    setIsAuthenticated(true);
    localStorage.setItem('adminToken', newToken);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminToken');
  };

  return {
    user,
    token,
    isAuthenticated: isAuthenticated && !!user && !error,
    isLoading,
    login,
    logout,
  };
}