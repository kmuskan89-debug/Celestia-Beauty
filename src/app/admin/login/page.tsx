"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "../../../context/AdminContext";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { triggerToast } = useAdmin();
  const router = useRouter();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error || "Login failed.";
        setError(errorMsg);
        triggerToast(errorMsg, "error");
        setLoading(false);
        return;
      }

      triggerToast("Admin authenticated successfully. Welcome back, Mira Nair!");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      const networkError = "A network error occurred. Please try again.";
      setError(networkError);
      triggerToast(networkError, "error");
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen px-4 bg-[#FAF6F5]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#ff5f1f]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ffb085]/10 blur-3xl pointer-events-none"></div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white border border-[#f2e7e3] rounded-3xl shadow-xl p-8 md:p-10 relative z-10 space-y-8 text-left">
        {/* Branding header */}
        <div className="text-center space-y-2.5">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#ff5f1f]/10 border border-[#ff5f1f]/20 text-[#ff5f1f] text-2xl font-serif font-bold shadow-md shadow-[#ff5f1f]/5">
            C.
          </div>
          <h2 className="text-2xl font-bold text-[#2d2422] tracking-tight">Admin Portal Login</h2>
          <p className="text-xs text-[#7a6e6a]">Authenticate to access management features</p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold animate-shake">
            <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLoginSubmit} className="space-y-5">
          {/* Email input */}
          <div className="space-y-1.5 flex flex-col align-start">
            <label className="text-[10px] font-bold text-[#7a6e6a] uppercase tracking-wider">Email Address</label>
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3.5 flex items-center text-[#7a6e6a]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="admin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
                required
              />
            </div>
          </div>

          {/* Password input */}
          <div className="space-y-1.5 flex flex-col align-start">
            <label className="text-[10px] font-bold text-[#7a6e6a] uppercase tracking-wider">Secret Password</label>
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3.5 flex items-center text-[#7a6e6a]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-[#7a6e6a] hover:text-[#ff5f1f] transition-all cursor-pointer"
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember me / Return links */}
          <div className="flex items-center justify-between text-xs pt-1">
            <Link
              href="/"
              className="text-[#ff5f1f] hover:text-[#c2410c] hover:underline font-semibold"
            >
              Return to Store
            </Link>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 bg-[#ff5f1f] hover:bg-[#c2410c] text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-[#ff5f1f]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Verifying Secret...</span>
              </>
            ) : (
              <span>Authenticate & Enter</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
