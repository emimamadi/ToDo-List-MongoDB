import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Todo List",
  description: "Todo List with MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="w-9/12  bg-slate-700 mx-auto my-5 p-4 border rounded-lg ">
          {children}
        </div>
      </body>
    </html>
  );
}
