import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border bg-white dark:bg-black"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
