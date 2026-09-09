import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#020b12] text-gray-300 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-6">
          About <span className="text-blue-500">CineVerse</span>
        </h1>

        <p className="text-lg leading-8 mb-8">
          CineVerse is a movie discovery platform designed for movie lovers
          who want to explore movies, discover trending titles, and find
          information about their favorite movies.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Mission
          </h2>

          <p className="leading-7">
            Our mission is to make discovering movies easier and more
            enjoyable. CineVerse brings useful movie information together in
            one clean and easy-to-use platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What You Can Do
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Discover trending and popular movies</li>
            <li>Explore movie details and ratings</li>
            <li>Watch available movie trailers</li>
            <li>Browse movies by categories</li>
            <li>Discover similar and recommended movies</li>
            <li>Explore upcoming movies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Movie Information
          </h2>

          <p className="leading-7">
            CineVerse uses the TMDB API to retrieve movie-related information
            such as movie titles, posters, backdrops, descriptions, ratings,
            and other metadata.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            CineVerse is not endorsed or certified by TMDB.
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;