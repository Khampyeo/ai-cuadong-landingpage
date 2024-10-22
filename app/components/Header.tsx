"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white/70 backdrop-blur-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-xl font-bold">
        <Link href="/" className="flex gap-2 items-center text-primary">
          <img alt="" src={"/logo.png"} width={50} height={50} />
          AI-CuaDong
        </Link>
      </div>

      <nav className="flex items-center space-x-6 text-primary font-semibold">
        <Link href="#about">About</Link>
        <Link href="#tech">Technology</Link>
        <Link href="#member">Members</Link>
        <Link href="#case-studies">Case Studies</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;