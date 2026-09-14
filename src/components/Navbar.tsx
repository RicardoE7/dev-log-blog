import {
  IconCode,
  IconLayoutDashboard,
  IconLogin2,
  IconLogout2,
} from "@tabler/icons-react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
      transition
      ${isActive ? "text-cyan-400" : "text-slate-400 hover:text-white"}
    `;

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-white/[0.07]
        bg-[#090d14]/85
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto flex h-16
          max-w-6xl items-center
          justify-between px-5
          sm:px-8
        "
      >
        <Link
          to="/"
          className="
            flex items-center gap-2
            font-mono text-sm
            font-semibold text-white
          "
        >
          <span
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              border border-cyan-400/20
              bg-cyan-400/10
              text-cyan-400
            "
          >
            <IconCode size={18} />
          </span>

          <span>
            dev
            <span className="text-cyan-400">.</span>
            log
          </span>
        </Link>

        <nav
          className="
            flex items-center gap-5
            font-mono text-xs
            sm:gap-7
          "
        >
          <NavLink to="/blog" className={navLinkClass}>
            Articles
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink to="/admin" className={navLinkClass}>
                <span
                  className="
                    flex items-center gap-1.5
                  "
                >
                  <IconLayoutDashboard size={15} />

                  <span
                    className="
                      hidden sm:inline
                    "
                  >
                    Admin
                  </span>
                </span>
              </NavLink>

              <button
                onClick={handleLogout}
                className="
                  flex items-center gap-1.5
                  text-slate-400
                  transition
                  hover:text-white
                "
              >
                <IconLogout2 size={15} />

                <span
                  className="
                    hidden sm:inline
                  "
                >
                  Log Out
                </span>
              </button>
            </>
          ) : (
            <NavLink to="/login" className={navLinkClass}>
              <span
                className="
                  flex items-center gap-1.5
                "
              >
                <IconLogin2 size={15} />

                <span>Log In</span>
              </span>
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
