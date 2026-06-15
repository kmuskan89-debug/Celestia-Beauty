"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
    rememberMe: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { login, signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        const result = await login(formData.email, formData.password);
        if (result.success) {
          router.push("/");
        } else {
          setError(result.error || "Failed to sign in.");
        }
      } else {
        if (!formData.agree) {
          setError("You must agree to the Terms and Privacy Policy.");
          setLoading(false);
          return;
        }
        const result = await signup(formData.name, formData.email, formData.password);
        if (result.success) {
          router.push("/");
        } else {
          setError(result.error || "Failed to create account.");
        }
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex-1 flex min-h-[calc(100vh-100px)] bg-zinc-50 font-sans items-center justify-center p-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row shadow-[0_15px_50px_rgba(255,95,31,0.06)] rounded-2xl overflow-hidden bg-white border border-zinc-100 my-8">
        
        {/* Left Side: Editorial Brand Showcase (Desktop only) */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 text-white p-12 flex-col justify-between relative overflow-hidden">
          {/* Background mesh grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:20px_30px] pointer-events-none" />
          
          {/* Subtle neon glowing orb */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-orange-400/25 blur-[80px]" />
          
          <div className="relative z-10">
            <Link href="/" className="font-serif text-2xl font-extrabold tracking-wider text-white">
              Celestia<span className="text-amber-200">.</span>
            </Link>
          </div>
          
          <div className="relative z-10 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-100">
              Exclusive Access
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight">
              Access Your Personal Beauty Drawer
            </h2>
            <p className="text-xs lg:text-sm text-orange-50 max-w-sm leading-relaxed">
              Join the Celestia circle to track orders, curate your beauty wishlist, write reviews, and receive member-only drops.
            </p>
          </div>
          
          <div className="relative z-10 text-[10px] text-orange-200">
            &copy; {new Date().getFullYear()} Celestia Beauty. Clean cosmetics.
          </div>
        </div>

        {/* Right Side: Interactive Login/Register Form */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-sm w-full mx-auto flex flex-col gap-5">
            
            {/* Header section */}
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-2xl font-extrabold text-zinc-900 tracking-tight">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h3>
              <p className="text-[11px] text-zinc-500">
                {isLogin 
                  ? "Enter your credentials to access your drawer." 
                  : "Sign up today to discover tailored cosmetics drops."}
              </p>
            </div>

            {/* Error Alert Box */}
            {error && (
              <div className="bg-rose-50 border border-rose-100 text-rose-600 rounded-lg p-3 text-[11px] leading-relaxed flex gap-2 items-start shadow-sm">
                <svg className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              
              {/* Full name input (Only visible in Register mode) */}
              {!isLogin && (
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-xs outline-none text-zinc-800 focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/10 transition-all"
                  />
                </div>
              )}

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane.doe@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-xs outline-none text-zinc-800 focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/10 transition-all"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Password
                  </label>
                  {isLogin && (
                    <Link href="#forgot" className="text-[10px] font-bold text-orange-500 hover:text-orange-600 transition-colors">
                      Forgot?
                    </Link>
                  )}
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-xs outline-none text-zinc-800 focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/10 transition-all"
                />
              </div>

              {/* Remember Me or Agree Checkbox */}
              {isLogin ? (
                <label className="flex items-center gap-2 text-[11px] text-zinc-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="accent-orange-500 h-3.5 w-3.5 rounded border-zinc-300 text-orange-500 focus:ring-orange-500"
                  />
                  Remember me for 30 days
                </label>
              ) : (
                <label className="flex items-start gap-2 text-[11px] text-zinc-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="agree"
                    required
                    checked={formData.agree}
                    onChange={handleInputChange}
                    className="accent-orange-500 h-3.5 w-3.5 rounded border-zinc-300 text-orange-500 focus:ring-orange-500 mt-0.5"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="#terms" className="font-bold text-orange-500 hover:text-orange-600">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="#privacy" className="font-bold text-orange-500 hover:text-orange-600">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white text-[11px] font-bold py-2.5 rounded-lg transition-colors shadow-md mt-2 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>{isLogin ? "Signing In..." : "Creating Account..."}</span>
                  </>
                ) : (
                  isLogin ? "Sign In" : "Create Account"
                )}
              </button>

            </form>

            {/* Toggle Switch */}
            <div className="text-center text-[11px] text-zinc-600 border-t border-zinc-100 pt-4 mt-2">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="bg-transparent border-none p-0 cursor-pointer font-bold text-orange-500 hover:text-orange-600 transition-colors text-[11px]"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
