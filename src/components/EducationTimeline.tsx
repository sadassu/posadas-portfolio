import React, { useEffect } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationEntry {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | "Present";
  description?: string;
}

const educationData: EducationEntry[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Technology",
    institution: "Batangas State University",
    location: "Balayan, Batangas",
    startYear: 2021,
    endYear: 2025,
    description:
      "Major in Business Analytics. Focused on data analysis, software development, and system integration.",
  },
  {
    id: 2,
    degree: "Senior High School Diploma",
    institution: "Immaculate Conception College of Balayan",
    location: "Balayan, Batangas",
    startYear: 2018,
    endYear: 2020,
    description:
      "Graduated in STEM track with a strong foundation in programming and mathematics.",
  },
  {
    id: 3,
    degree: "Junior High School Diploma",
    institution: "Balayan National High School",
    location: "Balayan, Batangas",
    startYear: 2014,
    endYear: 2018,
    description: "",
  },
];

/**
 * This component uses IntersectionObserver to add or remove the "is-visible" class
 * on elements with "fade-in-section", "slide-in-left", or "slide-in-right" classes
 * based on their visibility in the viewport (at least 20% visible).
 * Cleans up the observer on unmount.
 */

const EducationTimeline: React.FC = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    document
      .querySelectorAll(".fade-in-section, .slide-in-left, .slide-in-right")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="max-w-6xl mx-auto p-6 min-h-screen my-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Educational Journey
        </h1>
        <p className="text-lg text-gray-600">
          My academic achievements and milestones
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-blue-300"></div>

        {educationData.map((entry, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={entry.id}
              className={`relative mb-12 last:mb-0 ${
                isLeft ? "slide-in-left" : "slide-in-right"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div
                className={`w-5/12 bg-white dark:bg-gray-700  rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 
                  ${isLeft ? "mr-auto" : "ml-auto"}
                  `}
              >
                {/* Header */}
                <div
                  className={`flex flex-col md:flex-row items-start justify-between mb-4
                    ${isLeft ? "text-left" : "text-right"}
                    `}
                >
                  <div
                    className={`flex-1 
                    ${isLeft ? "order-1" : "order-2"}`}
                  >
                    <h3
                      className={`text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center 
                        ${isLeft ? "justify-start" : "justify-end"}
                        `}
                    >
                      <GraduationCap
                        className={`w-10 h-10 text-blue-600 ${
                          isLeft ? "mr-2" : "ml-2 order-2"
                        }`}
                      />
                      {entry.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-1">
                      {entry.institution}
                    </h4>
                    <div
                      className={`flex items-center text-gray-600 dark:text-gray-200 text-sm mb-2 ${
                        isLeft ? "justify-start" : "justify-end"
                      }`}
                    >
                      <MapPin
                        className={`w-4 h-4 ${
                          isLeft ? "mr-1" : "ml-1 order-2"
                        }`}
                      />
                      {entry.location}
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div
                    className={`bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center  mb-2 md:mb-0
                      ${
                      isLeft ? "order-2 md:ml-4 md:order-2" : "order-1 md:mr-4 md:order-1"
                      }`}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    {entry.startYear} - {entry.endYear}
                  </div>
                </div>

                {/* Description */}
                {entry.description && (
                  <p
                    className={`text-gray-700 dark:text-gray-300 mb-4 leading-relaxed ${
                      isLeft ? "text-left" : "text-right"
                    }`}
                  >
                    {entry.description}
                  </p>
                )}

                <div
                  className={`flex flex-wrap gap-4 items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationTimeline;
