import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
