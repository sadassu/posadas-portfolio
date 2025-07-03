const Home = () => {
  return (
    <section id="home" className="h-[90svh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 orbitron">Angelo Posadas</h1>
        <p className="text-2xl text-gray-400">Aspiring Web Developer</p>
        <div className="mt-8">
          <a
            href="https://github.com/sadassu"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 hover:bg-gray-800 text-gray-700 hover:text-white px-6 py-3 rounded-full inline-block mt-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
