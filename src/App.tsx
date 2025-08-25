import { Routes, Route } from "react-router";

import Header from "@/components/Header";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </ThemeProvider>
  );
}
