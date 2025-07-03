const Footer = () => {
  return (
    <footer className="bg-zinc-800 dark:bg-gray-800 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4">
        <div className="px-4 text-center">
          <p className=" text-gray-400">
            © 2025 Angelo Posadas. All rights reserved.
          </p>
          <div>
            <p className=" text-gray-400 text-center mt-4">
              Made with ❤️ using React and Tailwind CSS
            </p>
          </div>
        </div>
        <div className="px-4 text-center">
          <a
            href="https://github.com/sadassu"
            target="_blank"
            rel="noopener noreferrer"
            className=" px-6 py-3 rounded-full inline-block mt-4"
          >
            <img
              src="/posadas-portfolio/assets/github.svg"
              alt="github logo"
              className="w-10 filter invert "
            />
          </a>
          <a
            href="https://www.facebook.com/akiioooo"
            target="_blank"
            rel="noopener noreferrer"
            className=" px-6 py-3 rounded-full inline-block mt-4"
          >
            <img
              src="/posadas-portfolio/assets/facebook.svg"
              alt="facebook logo"
              className="w-10 filter invert "
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
