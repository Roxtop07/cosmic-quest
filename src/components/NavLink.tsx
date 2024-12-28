import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-white/90 font-medium hover:text-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:bg-clip-text transition-colors"
    >
      {children}
    </a>
  );
}