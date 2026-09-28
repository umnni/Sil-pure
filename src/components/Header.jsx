import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiDroplet,
  FiSun,
} from "react-icons/fi";

import logo from "../assets/images/logo.png";
import ringImage from "../assets/images/1.png";

const shopColumns = [
  {
    title: "For Her",
    links: [
      "Rings",
      "Earrings",
      "Necklaces",
      "Bracelets",
      "Anklets",
      "Toe Rings",
    ],
  },
  {
    title: "Shop For Him",
    links: ["Men's Rings", "Men's Bracelets", "Men's Chains"],
  },
  {
    title: "Shop By Occasion",
    links: ["Daily Wear", "Office Wear", "Festive", "Wedding"],
  },
  {
    title: "Gifting",
    links: ["For Her", "For Him", "For Mom", "For Sister", "Under ₹1,999"],
  },
];

const navLinks = [
  { label: "New Arrivals", href: "/shop" },
  { label: "Rings", href: "/shop" },
  { label: "Earrings", href: "/shop" },
  { label: "Necklaces", href: "/shop" },
  { label: "Bracelets", href: "/shop" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("silpure-theme") || "ocean";
    }
    return "ocean";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.toggle("sky-mode", theme === "sky");
    localStorage.setItem("silpure-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "ocean" ? "sky" : "ocean"));
  };

  return (
    <>
      <header className="site-header sticky top-0 z-50 bg-white">
        {/* TOP BAR */}
        <div className="bg-[var(--c-063653)] px-4 py-2.5 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 text-[10px] font-medium tracking-[0.18em] sm:gap-9 sm:text-xs">
            <span>FREE SHIPPING</span>

            <span className="h-3 w-px bg-white/30" />

            <span>925 STERLING SILVER</span>

            <span className="hidden h-3 w-px bg-white/30 sm:block" />

            <span className="hidden sm:inline">EASY RETURNS</span>
          </div>
        </div>

        {/* OFFER BAR */}
        <div className="bg-[var(--c-eaf4f7)] px-4 py-2.5 text-center text-xs text-[var(--c-063653)]">
          Get <span className="font-bold">10% OFF</span> on your first order.
          Use code{" "}
          <span className="font-bold tracking-wide">WELCOME10</span>
        </div>

        {/* MAIN HEADER */}
        <div className="relative border-b border-[var(--c-dfecef)] bg-white">
          <div className="mx-auto flex h-[115px] max-w-[1500px] items-center justify-between px-5 lg:px-10">
            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-[var(--c-082f49)] lg:hidden"
            >
              <FiMenu size={24} />
            </button>

            {/* LOGO */}
            <Link to="/" className="shrink-0">
              <img
                src={logo}
                alt="Silpure"
                className="h-[65px] w-auto object-contain sm:h-[72px]"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
              <Link
                to="/"
                className="text-[14px] font-medium tracking-wide text-[var(--c-173c4e)] transition hover:text-[var(--c-087ca7)]"
              >
                HOME
              </Link>

              {/* SHOP MEGA MENU */}
              <div className="group static">
                <button className="flex items-center gap-1.5 py-10 text-[14px] font-medium tracking-wide text-[var(--c-173c4e)] transition group-hover:text-[var(--c-087ca7)]">
                  SHOP
                  <FiChevronDown
                    size={15}
                    className="transition duration-300 group-hover:rotate-180"
                  />
                </button>

                {/* FULL WIDTH DROPDOWN */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-full
                    z-50
                    translate-y-2
                    border-t
                    border-[var(--c-e3ecef)]
                    bg-white
                    opacity-0
                    shadow-[0_25px_60px_rgba(3,47,73,0.14)]
                    transition-all
                    duration-300

                    group-hover:pointer-events-auto
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <div className="mx-auto grid max-w-[1450px] grid-cols-[1fr_270px] gap-10 px-10 py-10">
                    {/* LINKS */}
                    <div className="grid grid-cols-4 gap-10">
                      {shopColumns.map((column) => (
                        <div key={column.title}>
                          <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.19em] text-[var(--c-073653)]">
                            {column.title}
                          </h4>

                          <div className="space-y-4">
                            {column.links.map((item) => (
                              <Link
                                key={item}
                                to="/shop"
                                className="block text-[15px] text-[var(--c-587482)] transition duration-200 hover:translate-x-1 hover:text-[var(--c-087ca7)]"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* RIGHT FEATURE CARD */}
                    <Link
                      to="/shop"
                      className="group/card relative h-[320px] overflow-hidden bg-[var(--c-eef7f9)]"
                    >
                      <img
                        src={ringImage}
                        alt="Silpure jewellery collection"
                        className="h-full w-full object-cover transition duration-700 group-hover/card:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-032d47)]/85 via-[var(--c-032d47)]/5 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-white/80">
                          Silpure Edit
                        </p>

                        <h3
                          className="mt-2 text-2xl"
                          style={{
                            fontFamily: "Georgia, 'Times New Roman', serif",
                          }}
                        >
                          Everyday Elegance
                        </h3>

                        <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em]">
                          Explore
                          <FiChevronRight />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="whitespace-nowrap text-[14px] font-medium tracking-wide text-[var(--c-173c4e)] transition hover:text-[var(--c-087ca7)]"
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </nav>

            {/* ICONS */}
            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
              {/* THEME TOGGLE: Deep Ocean <-> Sky Blue */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                title={theme === "ocean" ? "Switch to Sky Blue" : "Switch to Deep Ocean"}
                className="theme-accent relative flex h-10 w-10 items-center justify-center rounded-full text-[var(--c-123e53)] transition hover:bg-[var(--c-eef7f9)]"
              >
                {theme === "ocean" ? <FiDroplet size={19} /> : <FiSun size={19} />}
              </button>

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--c-123e53)] transition hover:bg-[var(--c-eef7f9)]"
              >
                <FiSearch size={20} />
              </button>

              <Link
                to="/account"
                className="hidden h-10 w-10 items-center justify-center rounded-full text-[var(--c-123e53)] transition hover:bg-[var(--c-eef7f9)] sm:flex"
              >
                <FiUser size={20} />
              </Link>

              <Link
                to="/wishlist"
                className="hidden h-10 w-10 items-center justify-center rounded-full text-[var(--c-123e53)] transition hover:bg-[var(--c-eef7f9)] sm:flex"
              >
                <FiHeart size={20} />
              </Link>

              <Link
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-[var(--c-123e53)] transition hover:bg-[var(--c-eef7f9)]"
              >
                <FiShoppingBag size={20} />

                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--c-0b668d)] text-[9px] text-white">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div
          className={`overflow-hidden border-b border-[var(--c-e1ecef)] bg-white transition-all duration-300 ${
            searchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-4xl items-center gap-3 px-6 py-5">
            <FiSearch className="text-[var(--c-73929f)]" size={20} />

            <input
              type="text"
              placeholder="Search rings, earrings, necklaces..."
              className="w-full bg-transparent text-sm text-[var(--c-183b4d)] outline-none placeholder:text-[var(--c-8ca3ad)]"
            />

            <button onClick={() => setSearchOpen(false)}>
              <FiX size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/45 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute left-0 top-0 h-full w-[88%] max-w-[380px] overflow-y-auto bg-white transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[var(--c-e2edf0)] px-5 py-5">
            <img
              src={logo}
              alt="Silpure"
              className="h-[55px] w-auto object-contain"
            />

            <button onClick={() => setMobileOpen(false)}>
              <FiX size={25} />
            </button>
          </div>

          <div className="p-5">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[var(--c-edf2f4)] py-4 text-sm font-medium text-[var(--c-143e52)]"
            >
              Home
            </Link>

            <button
              onClick={() => setMobileShopOpen(!mobileShopOpen)}
              className="flex w-full items-center justify-between border-b border-[var(--c-edf2f4)] py-4 text-sm font-medium text-[var(--c-143e52)]"
            >
              Shop

              <FiChevronDown
                className={`transition ${
                  mobileShopOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileShopOpen && (
              <div className="bg-[var(--c-f7fbfc)] px-4 py-3">
                {shopColumns[0].links.map((item) => (
                  <Link
                    key={item}
                    to="/shop"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 text-sm text-[var(--c-5f7984)]"
                  >
                    {item}
                    <FiChevronRight size={14} />
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-[var(--c-edf2f4)] py-4 text-sm font-medium text-[var(--c-143e52)]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/wishlist"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 border-b border-[var(--c-edf2f4)] py-4 text-sm text-[var(--c-143e52)]"
            >
              <FiHeart />
              Wishlist
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}