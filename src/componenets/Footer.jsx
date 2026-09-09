import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#020b12] text-gray-400 border-t border-gray-800 ">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo / About */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Cine<span className="text-blue-500">Verse</span>
            </h1>

            <p className="text-sm leading-6 max-w-sm">
              Discover movies, explore trending titles, watch trailers,
              and find your next favorite movie all in one place.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#071b2b] hover:bg-blue-600 hover:text-white transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#071b2b] hover:bg-blue-600 hover:text-white transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#071b2b] hover:bg-blue-600 hover:text-white transition"
              >
                ▶
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#071b2b] hover:bg-blue-600 hover:text-white transition"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-5">
              Explore
            </h2>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/trending"
                  className="hover:text-blue-400 transition"
                >
                  Trending
                </Link>
              </li>

              <li>
                <Link
                  to="/movies"
                  className="hover:text-blue-400 transition"
                >
                  Popular Movies
                </Link>
              </li>

              <li>
                <Link
                  to="/upcoming"
                  className="hover:text-blue-400 transition"
                >
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-5">
              Categories
            </h2>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/genre/28/action" className="hover:text-blue-400 transition">
                  Action
                </Link>
              </li>

              <li>
                <Link to="/genre/35/comedy" className="hover:text-blue-400 transition">
                  Comedy
                </Link>
              </li>

              <li>
                <Link to="/genre/53/thriller" className="hover:text-blue-400 transition">
                  Thriller
                </Link>
              </li>

              <li>
                <Link to="/genre/27/horror" className="hover:text-blue-400 transition">
                  Horror
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-5">
              Support
            </h2>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/About" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to='/contact' className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link to='/privacypolicy' className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to='/terms&conditions' className="hover:text-blue-400 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p>
            © 2026 CineVerse. All rights reserved.
          </p>

          <p>
            Powered by{" "}
            <span className="text-blue-400 font-medium">
              TMDB
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;