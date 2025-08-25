import { ThemeProvider } from "@/providers/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>App</div>
    </ThemeProvider>
  );
}
