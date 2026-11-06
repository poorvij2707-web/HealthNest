import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HealthProvider } from "../context/HealthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HealthNest - Personal Health Manager",
  description: "Manage your personal health in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HealthProvider>
          {children}
        </HealthProvider>
      </body>
    </html>
  );
}