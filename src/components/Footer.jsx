import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  FiInstagram,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const popularLinks = [
  "Silver Rings",
  "925 Silver Earrings",
  "Silver Bracelets",
  "Silver Necklaces",
  "Daily Wear Jewellery",
  "Office Wear Jewellery",
  "Jewellery Under ₹1999",
  "Gifts For Her",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--c-062f4f)] text-white">
      {/* NEWSLETTER */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[var(--c-9cc9da)]">
              The Silpure Circle
            </p>

            <h2
              className="text-3xl font-normal sm:text-4xl"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              A little sparkle in your inbox.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
              Be the first to discover new collections, private offers and
              stories from Silpure.
            </p>
          </div>

          <div className="flex border-b border-white/40">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/45"
            />

            <button className="flex items-center gap-2 whitespace-nowrap py-4 text-xs font-semibold uppercase tracking-[0.15em]">
              Subscribe
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-1">
<Link to="/" className="inline-block">
  <img
    src={logo}
    alt="Silpure"
    className="h-[72px] w-auto object-contain brightness-0 invert"
  />
</Link>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">
              Modern jewellery thoughtfully designed for everyday moments,
              crafted to become a part of your story.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-[var(--c-062f4f)]"
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-[var(--c-062f4f)]"
              >
                <FiFacebook />
              </a>
            </div>
          </div>

          {/* HELP */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">
              Help
            </h4>

            <div className="space-y-3 text-sm text-white/55">
              <Link className="block hover:text-white" to="#">
                Shipping Policy
              </Link>
              <Link className="block hover:text-white" to="#">
                Returns & Refunds
              </Link>
              <Link className="block hover:text-white" to="#">
                Track Your Order
              </Link>
              <Link className="block hover:text-white" to="#">
                Jewellery Care
              </Link>
              <Link className="block hover:text-white" to="#">
                Size Guide
              </Link>
            </div>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">
              About
            </h4>

            <div className="space-y-3 text-sm text-white/55">
              <Link className="block hover:text-white" to="/about">
                Our Story
              </Link>
              <Link className="block hover:text-white" to="#">
                Craftsmanship
              </Link>
              <Link className="block hover:text-white" to="/blog">
                Journal
              </Link>
              <Link className="block hover:text-white" to="/contact">
                Contact Us
              </Link>
              <Link className="block hover:text-white" to="#">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">
              Shop
            </h4>

            <div className="space-y-3 text-sm text-white/55">
              <Link className="block hover:text-white" to="/shop">
                New Arrivals
              </Link>
              <Link className="block hover:text-white" to="/shop">
                Rings
              </Link>
              <Link className="block hover:text-white" to="/shop">
                Earrings
              </Link>
              <Link className="block hover:text-white" to="/shop">
                Necklaces
              </Link>
              <Link className="block hover:text-white" to="/shop">
                Best Sellers
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/55">
              <div className="flex gap-3">
                <FiPhone className="mt-1 shrink-0 text-[var(--c-93c6d8)]" />
                <span>
                  Customer Support
                  <br />
                  +91 00000 00000
                </span>
              </div>

              <div className="flex gap-3">
                <FiMail className="mt-1 shrink-0 text-[var(--c-93c6d8)]" />
                <span>support@silpure.in</span>
              </div>

              <div className="flex gap-3">
                <FiMapPin className="mt-1 shrink-0 text-[var(--c-93c6d8)]" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* POPULAR SEARCHES */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">
            Popular Searches
          </h4>

          <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2 text-xs leading-6 text-white/45">
            {popularLinks.map((item, index) => (
              <span key={item}>
                <Link to="/shop" className="transition hover:text-white">
                  {item}
                </Link>
                {index !== popularLinks.length - 1 && (
                  <span className="ml-2 text-white/20">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Silpure. All Rights Reserved.</p>

          <div className="flex flex-wrap gap-4">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>RUPAY</span>
            <span>UPI</span>
            <span>COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}