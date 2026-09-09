import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#020b12] text-gray-300 px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-4">
          Terms & <span className="text-blue-500">Conditions</span>
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last Updated: September 2026
        </p>

        <div className="space-y-10">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Use of the Website
            </h2>

            <p className="leading-7">
              CineVerse is a movie discovery and information platform.
              You agree to use the website for lawful purposes and not to
              misuse or interfere with the website or its services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Movie Information
            </h2>

            <p className="leading-7">
              Movie information displayed on CineVerse may include titles,
              descriptions, ratings, images, release dates, and other
              metadata obtained through third-party services.
            </p>

            <p className="leading-7 mt-3">
              We try to keep information accurate, but we cannot guarantee
              that all information is complete, accurate, or up to date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Third-Party Services
            </h2>

            <p className="leading-7">
              CineVerse uses third-party services such as TMDB to provide
              movie-related information. CineVerse does not control these
              third-party services and is not responsible for changes,
              interruptions, or errors originating from them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Content and Images
            </h2>

            <p className="leading-7">
              Movie posters, backdrops, logos, and other movie-related
              materials may belong to their respective copyright owners.
              CineVerse does not claim ownership of third-party movie content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. User Conduct
            </h2>

            <p className="leading-7 mb-3">
              Users must not:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Attempt to damage or disrupt the website</li>
              <li>Use the website for illegal activities</li>
              <li>Attempt unauthorized access</li>
              <li>Upload malicious software</li>
              <li>Abuse or overload website services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Website Availability
            </h2>

            <p className="leading-7">
              We may modify, update, suspend, or discontinue parts of the
              website at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Disclaimer
            </h2>

            <p className="leading-7">
              CineVerse is provided on an "as available" basis. We do not
              guarantee that the website will always be available,
              error-free, or completely accurate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Changes to These Terms
            </h2>

            <p className="leading-7">
              We may update these Terms & Conditions from time to time.
              Any changes will be posted on this page.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

export default Terms;