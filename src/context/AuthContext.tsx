'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve stored authentication details on mount
    const storedToken = localStorage.getItem('celestia_token');
    const storedUser = localStorage.getItem('celestia_user');

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored auth details:', error);
        localStorage.removeItem('celestia_token');
        localStorage.removeItem('celestia_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error || 'Login failed' };
      }

      setToken(data.token);
      setUser(data.user);

      localStorage.setItem('celestia_token', data.token);
      localStorage.setItem('celestia_user', JSON.stringify(data.user));
      document.cookie = `celestia_token=${data.token}; path=/; max-age=604800; SameSite=Lax`;

      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'A network error occurred' };
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error || 'Signup failed' };
      }

      setToken(data.token);
      setUser(data.user);

      localStorage.setItem('celestia_token', data.token);
      localStorage.setItem('celestia_user', JSON.stringify(data.user));
      document.cookie = `celestia_token=${data.token}; path=/; max-age=604800; SameSite=Lax`;

      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'A network error occurred' };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('celestia_token');
    localStorage.removeItem('celestia_user');
    document.cookie = 'celestia_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
