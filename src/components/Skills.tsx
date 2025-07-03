import Card from "./Card";

interface CardContent {
  id: number;
  img?: string;
  title?: string;
  description?: string;
  tags?: string[];
}

const Skill = () => {
  const cardContent: CardContent[] = [
    {
      id: 1,
      img: "/posadas-portfolio/assets/img/medmart.webp",
      title: "Thesis I",
      description:
        "Our thesis website, hosted on Hostinger's VPS, features an inventory system and point-of-sale tracking with sales graphs.",
      tags: ["Laravel", "Tailwind", "VPS", "PHP"],
    },
    {
      id: 2,
      img: "/posadas-portfolio/assets/img/bigbrew.webp",
      title: "Thesis II",
      description:
        "Commissioned thesis website by Classmates, deployed using Web-Hosting of Hostinger",
      tags: ["Laravel", "Tailwind", "PHP"],
    },
    {
      id: 3,
      img: "/posadas-portfolio/assets/img/kandahar.webp",
      title: "Thesis III",
      description:
        "Commissioned thesis website by Classmates, deployed using Web-Hosting of Hostinger",
      tags: ["Laravel", "Tailwind", "PHP"],
    },
    {
      id: 4,
      img: "/posadas-portfolio/assets/img/appchara.webp",
      title: "Thesis IV",
      description:
        "Commissioned thesis website by Classmates, deployed using Web-Hosting of Hostinger",
      tags: ["Laravel", "Tailwind", "PHP"],
    },
    {
      id: 5,
      img: "/posadas-portfolio/assets/img/balse.webp",
      title: "Thesis V",
      description: "Commissioned thesis that accepts student enrollment forms",
      tags: ["Laravel", "Tailwind", "PHP", "Demo"],
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "JavaScript",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Backend",
      skills: ["Laravel", "PHP", "Firebase", "MySQL", "SQLite", "Node.js"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
          />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "VS Code", "VPS", "Hostinger", "Linux"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-orange-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.867 19.125h.008v.008h-.008v-.008Z"
          />
        </svg>
      ),
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative solutions with modern
            technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative bg-white dark:bg-gray-800 m-[2px] rounded-2xl p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors duration-300">
                    {category.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                  {category.title}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Featured Projects
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of thesis projects showcasing practical applications of
            my skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardContent.map((card) => (
            <div
              key={card.id}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Card content={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
