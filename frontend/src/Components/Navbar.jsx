import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Netflix_logo.png";
import profile from "../assets/Netflix-avatar.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Tv Show", to: "/tv" },
    { label: "Popular & News", to: "/popular" },
    { label: "My List", to: "/mylist" },
  ];

  return (
    <nav className="bg-[#111] text-white w-full max-w-full px-4 py-3 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Netflix logo" className="h-8 w-auto" />
          </Link>

          <ul className="hidden min-w-0 items-center gap-5 text-gray-100 sm:flex">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm font-medium hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:inline-flex">
            <button
              type="button"
              onClick={() => setShowSearch((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            >
              <SearchIcon />
            </button>

            {showSearch && (
              <div className="absolute right-0 top-full z-20 mt-2 w-full max-w-xs rounded-md bg-[#222] p-2 shadow-lg sm:max-w-sm">
                <input
                  ref={inputRef}
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className="w-full rounded-md border border-white/10 bg-[#111] px-3 py-2 text-white outline-none focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/30"
                />
              </div>
            )}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <img src={profile} alt="Profile" className="h-8 w-8 rounded-full" />
            <ArrowDropDownIcon className="text-white" />
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E50914] sm:hidden"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mt-3 space-y-3 rounded-md bg-[#111] p-4 shadow-sm sm:hidden">
          <div className="rounded-md border border-white/10 bg-[#222] p-2">
            <input
              ref={inputRef}
              type="text"
              name="search"
              placeholder="Search..."
              className="w-full rounded-md border border-white/10 bg-[#222] px-3 py-2 text-white outline-none focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/30"
            />
          </div>

          <div className="space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-white/10 pt-3">
            <img src={profile} alt="Profile" className="h-8 w-8 rounded-full" />
            <ArrowDropDownIcon className="text-white" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
