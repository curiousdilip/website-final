"use client";
import { useState } from "react";
import Link from "next/link";
import "./header.scss";
import Image from "next/image";
export default function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleMenuToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleLinkClick = () => {
    setIsChecked(false);
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav-bar">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/img/logo-white.svg"
                  alt="dilip kumar website logo"
                  width={40}
                  height={40}
                  aria-label="logo for my website"
                  priority="intrinsic"
                />
              </Link>
            </div>
            <input
              type="checkbox"
              id="check"
              checked={isChecked}
              onChange={handleMenuToggle}
            />
            <ul className="menu">
              <li>
                <Link href="/about" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={handleLinkClick}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/uses" onClick={handleLinkClick}>
                  Uses
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resume" onClick={handleLinkClick}>
                  resume
                </Link>
              </li>
            </ul>
            <label htmlFor="check" className="close-menu">
              <i className="bi bi-x-lg"></i>
            </label>
            <label htmlFor="check" className="open-menu">
              <i className="bi bi-list"></i>
            </label>
          </div>
        </nav>
      </header>
    </>
  );
}
