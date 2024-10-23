"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isMobileMenuOpen ? "bg-white" : "bg-white/70 backdrop-blur-md"
      )}
    >
      <div className="text-xl font-bold">
        <Link href="/" className="flex gap-2 items-center text-primary">
          <img alt="" src={"/logo.png"} width={50} height={50} />
          AI-CuaDong
        </Link>
      </div>

      <div className="flex items-center md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-primary focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className="hidden md:flex items-center space-x-6 text-primary font-semibold">
        <Link href="#about">About</Link>
        <Link href="#tech">Technology</Link>
        <Link href="#member">Members</Link>
        <Link href="#case-studies">Case Studies</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white py-4 px-4 shadow-md flex flex-col items-start space-y-4 text-primary font-semibold md:hidden">
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="#tech" onClick={() => setIsMobileMenuOpen(false)}>
            Technology
          </Link>
          <Link href="#member" onClick={() => setIsMobileMenuOpen(false)}>
            Members
          </Link>
          <Link href="#case-studies" onClick={() => setIsMobileMenuOpen(false)}>
            Case Studies
          </Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
