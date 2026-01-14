"use client"; // 1. Mark as client component

import React from 'react';
import { 
  Search, MapPin, ChevronDown, Heart, 
  ShoppingCart, Bell, Home, Gift, 
  LayoutGrid, PartyPopper, Headset, Info 
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';
import Link from 'next/link'; // 2. Use Next.js Link
import { usePathname } from 'next/navigation'; // 3. Import usePathname

// 4. Define Nav Items structure
const NAV_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Products", href: "/products", icon: Gift },
  { label: "Categories", href: "/categories", icon: LayoutGrid },
  { label: "Occasions", href: "/occasions", icon: PartyPopper },
  { label: "Contact", href: "/contact", icon: Headset },
  { label: "About", href: "/about", icon: Info },
];

const Header = () => {
  const pathname = usePathname(); // 5. Get current path

  return (
    <header className="w-full bg-white shadow-sm">
      {/* --- Top Row --- */}
      <div className=" mx-auto px-4 py-4 flex items-center gap-6">
        
        {/* Logo & Delivery */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/assets/images/logo.png" width={60} height={60} alt="Logo" />
          </Link>

          <div className="hidden lg:flex flex-col text-sm border-l pl-6 border-gray-200">
            <span className="text-gray-400">Deliver to:</span>
            <div className="flex items-center gap-1 text-red-800 font-semibold">
              <MapPin className="h-4 w-4" />
              <span>Cairo</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            type="text" 
            placeholder="What awesome gift are you looking for?" 
            className="w-full pl-10 h-12 rounded-lg border-gray-200 focus-visible:ring-red-800"
          />
        </div>

        {/* User Actions & Icons */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-col items-start text-sm outline-none">
              <span className="text-gray-400 text-xs">Hello</span>
              <div className="flex items-center gap-1 font-semibold text-red-900">
                Jonathan <ChevronDown className="h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Orders</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="h-8 w-[1px] bg-gray-200 mx-2" />

          <div className="flex items-center gap-5 text-gray-600">
            <button className="hover:text-red-800"><Heart className="h-6 w-6" /></button>
            
            <button className="relative hover:text-red-800">
              <ShoppingCart className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-600 hover:bg-red-600">8</Badge>
            </button>

            <button className="relative hover:text-red-800">
              <Bell className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-600 hover:bg-red-600">8</Badge>
            </button>
          </div>

          <div className="h-8 w-[1px] bg-gray-200 mx-2" />

          <button className="text-sm font-medium hover:text-red-800">العربية</button>
        </div>
      </div>

      {/* --- Bottom Navigation Row --- */}
      <nav className="w-full bg-[#701a1a] text-white overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink 
              key={link.href}
              href={link.href}
              label={link.label}
              icon={<link.icon size={18} />}
              // 6. Logic: active if pathname matches href
              active={pathname === link.href} 
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

// Sub-component for Nav Links
const NavLink = ({ 
  icon, 
  label, 
  href, 
  active 
}: { 
  icon: React.ReactNode, 
  label: string, 
  href: string, 
  active: boolean 
}) => (
  <Link 
    href={href} 
    className={`
      flex items-center gap-2 text-sm font-medium py-3 px-1 transition-all relative whitespace-nowrap
      ${active ? 'text-white' : 'text-white/70 hover:text-white'}
    `}
  >
    {icon}
    {label}
    {/* 7. Underline indicator for active tab */}
    {active && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-t-sm" />
    )}
  </Link>
);

export default Header;