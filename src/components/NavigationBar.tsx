import { useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScroll";
import { useActiveSection } from "../hooks/useActiveSection";

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scroll = useScrollPosition();
  const icons: Array<{ path: string; id: string }> = [
    { path: "/posadas-portfolio/assets/home.svg", id: "home" },
    { path: "/posadas-portfolio/assets/skills.svg", id: "skills" },
    { path: "/posadas-portfolio/assets/about.svg", id: "about" },
  ];

  const activeSection = useActiveSection(icons.map((icon) => icon.id));

  useEffect(() => {
    if (scroll.y > 150) {
      setIsVisible(scroll.y < scroll.lastY);
    } else {
      setIsVisible(true);
    }
  }, [scroll.y, scroll.lastY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full bg-gray-100 dark:bg-gray-800 p-4 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-6">
          {icons.map(({ path, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`transition-all duration-300 p-2 rounded-lg 
                ${
                  activeSection === id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 dark:hover:bg-gray-700"
                }`}
            >
              <img
                src={path}
                alt={id}
                className={`h-6 w-6 ${
                  activeSection === id ? "invert" : "dark:invert"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
