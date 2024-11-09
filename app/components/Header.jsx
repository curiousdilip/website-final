"use client";
import { useState } from "react";
import Link from "next/link";
import "./header.scss";

export default function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleMenuToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleLinkClick = () => {
    setIsChecked(false); // Uncheck the checkbox when a link is clicked
  };

  return (
    <>
      <header>
        <nav>
          <ul className="nav-bar">
            <li className="logo">
              <Link href="/">
                <img src="/img/logo-white.svg" />
              </Link>
            </li>
            <input
              type="checkbox"
              id="check"
              checked={isChecked}
              onChange={handleMenuToggle}
            />
            <span className="menu">
              <li>
                <Link href="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" onClick={handleLinkClick}>
                  Work
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
              <label htmlFor="check" className="close-menu">
                <i className="bi bi-x-lg"></i>
              </label>
            </span>
            <label htmlFor="check" className="open-menu">
              <i className="bi bi-list"></i>
            </label>
          </ul>
        </nav>
      </header>
    </>
  );
}
