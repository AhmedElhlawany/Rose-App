import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Occasions", href: "/occasions" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <footer className="w-full bg-[#2D2E32] text-white py-16 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Left Section: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="relative w-48 h-48">
             <Image 
                src="/assets/images/logo.png" // Ensure your logo path is correct
                alt="Rose Logo" 
                fill 
                className="object-contain"
             />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-medium text-softpink-300">Rose E-Commerce App</h3>
            <p className="text-sm text-zinc-100">All rights reserved | {currentYear}</p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-softpink-300 font-semibold text-lg mb-6">Discover our website</h4>
          <ul className="grid grid-cols-1 gap-y-2 text-center md:text-left">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-zinc-100 hover:text-maroon-50 transition-colors text-sm font-light"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Newsletter */}
        <div className="flex flex-col items-center md:items-start w-full">
          <div className="mb-6 text-center md:text-left">
            <h4 className="text-softpink-300 font-semibold text-lg">Get <span className="text-maroon-50">20%</span> Off Discount Coupon</h4>
            <p className="text-zinc-500 text-sm mt-1">By subscribing to our newsletter</p>
          </div>

          <div className="relative w-full max-w-md">
            <div className="flex items-center bg-zinc-600 rounded-full pl-4 border border-transparent  transition-all">
              <Input 
                type="email" 
                placeholder="Enter Your Email" 
                className="bg-transparent border-none text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 h-10"
              />
              <Button 
                className="bg-maroon-50 hover:bg-white h-10 text-maroon-700 rounded-full px-6 py-4 flex items-center gap-2 font-medium transition-all group"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;