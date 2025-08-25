import { Routes, Route } from "react-router";

import Header from "@/components/Header";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import CoinDetailsPage from "@/pages/CoinDetailsPage";
import NotFoundPage from "@/pages/NotFoundPage";

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coins/:id" element={<CoinDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}
