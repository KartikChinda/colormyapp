import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ColorMyApp",
  description: "Welcome to Colormyapp, a website that provides you with color palettes submitted from people around the world, along with mockup templates on how that palette will look on your very own app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className=" bg-[#5552ff]">
        <div className="bg-white mb-10 md:mt-16 mt-10 w-[85%] mx-auto border-4 border-black ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
