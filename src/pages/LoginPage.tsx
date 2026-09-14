import { IconLock, IconLogin2, IconTerminal2 } from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

import PageTransition from "../components/PageTransition";

import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <PageTransition>
      <section
        className="
          mx-auto flex min-h-[70vh]
          max-w-md items-center
          px-5 py-20
          sm:px-8
        "
      >
        <div
          className="
            w-full rounded-2xl
            border border-white/[0.08]
            bg-[#0d131d]/80
            p-7 shadow-2xl
            shadow-black/30
            sm:p-9
          "
        >
          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              border border-cyan-400/20
              bg-cyan-400/10
              text-cyan-400
            "
          >
            <IconLock size={21} />
          </div>

          <div
            className="
              mt-7 flex items-center
              gap-2 font-mono
              text-[11px]
              text-cyan-400
            "
          >
            <IconTerminal2 size={14} />
            authentication_required
          </div>

          <h1
            className="
              mt-3 text-3xl
              font-semibold
              tracking-tight
              text-white
            "
          >
            Admin access
          </h1>

          <p
            className="
              mt-3 leading-7
              text-slate-400
            "
          >
            Authenticate to access the publishing dashboard.
          </p>

          <button
            onClick={handleLogin}
            className="
              mt-8 flex w-full
              items-center
              justify-center gap-2
              rounded-lg
              bg-cyan-400
              px-5 py-3
              font-mono text-xs
              font-bold text-[#071018]
              transition
              hover:bg-cyan-300
            "
          >
            <IconLogin2 size={17} />
            Log In
          </button>

          <p
            className="
              mt-5 text-center
              font-mono text-[10px]
              text-slate-600
            "
          >
            // simulated authentication
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
