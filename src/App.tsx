import useTheme from "./hooks/useTheme";
import LogoSlider from "./components/LogoSlider";
import NavigationBar from "./components/NavigationBar";
import EducationTimeline from "./components/EducationTimeline";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Footer from "./components/Footer.tsx";

function App() {
  // Use the custom hook to manage theme state
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      data-theme={theme}
      className="min-h-screen text-gray-800 bg-white dark:bg-gray-900 dark:text-white"
    >
      <button
        onClick={toggleTheme}
        className="fixed top-20 right-10 z-50 p-2 rounded-lg ml-6 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        <img
          src={
            theme === "light"
              ? "/posadas-portfolio/assets/sun.svg"
              : "/posadas-portfolio/assets/moon.svg"
          }
          alt="Theme Toggle"
          className="h-6 w-6"
        />
      </button>
      <NavigationBar />
      <Home />
      <LogoSlider />
      <Skills />
      <EducationTimeline />
      <Footer />
    </div>
  );
}

export default App;
