import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "motion/react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import AdminPage from "./pages/AdminPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage";

export default function App() {
  const location = useLocation();

  return (
    <div
      className="
        flex min-h-screen
        flex-col bg-[#090d14]
        text-slate-200
      "
    >
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />} />

            <Route path="/blog/:slug" element={<PostPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
