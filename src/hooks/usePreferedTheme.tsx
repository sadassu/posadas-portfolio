/**
 * usePreferredTheme - A custom hook to automatically apply the user's preferred color scheme (dark or light mode)
 * by adding or removing the 'dark' class on the document's root element.
 */

import { useEffect } from "react";

const usePreferredTheme = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (mediaQuery.matches) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);
};

export default usePreferredTheme;
