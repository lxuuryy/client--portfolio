import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jared Gillespie",
  description: "Capturing moments that last a lifetime. Explore my portfolio showcasing a blend of artistic vision and technical precision. Specializing in [insert types of photography, e.g., landscape, portrait, event], I strive to create stunning visuals that tell a story and evoke emotions. Contact me to discuss how we can bring your vision to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        
        <Navbar />
        {children}
        
        </body>
       
    </html>
  );
}
