import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 border-t border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <p className="flex items-center space-x-2 text-white text-sm md:text-base">
            <span> Made By</span>
            <span className="text-red-500 font-semibold">Aditya Negi</span>
      
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
