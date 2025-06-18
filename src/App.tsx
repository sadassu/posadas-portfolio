import LogoSlider from "./components/LogoSlider";
import NavigationBar from "./components/NavigationBar";
import EducationTimeline from "./components/EducationTimeline";
import Home from "./components/Home";
import Skills from "./components/Skills";
import usePreferredTheme from "./hooks/usePreferedTheme.tsx";

function App() {
  usePreferredTheme();

  return (
    <div className="min-h-screen text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
      <NavigationBar />
      <Home />
      <LogoSlider />
      <EducationTimeline />
      <Skills />

      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Angelo Posadas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
