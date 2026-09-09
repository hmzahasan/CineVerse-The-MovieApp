import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#020b12] text-gray-300 px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-4">
          Privacy <span className="text-blue-500">Policy</span>
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last Updated: September 2026
        </p>

        <div className="space-y-10">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>

            <p className="leading-7">
              Depending on the features you use, CineVerse may collect
              information such as basic account information, information
              submitted through contact forms, website preferences, and
              technical information such as browser and device information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. How We Use Information
            </h2>

            <p className="leading-7 mb-3">
              Information may be used to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Improve the website</li>
              <li>Respond to questions and feedback</li>
              <li>Understand how users interact with the website</li>
              <li>Detect and prevent technical or security problems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Cookies and Local Storage
            </h2>

            <p className="leading-7">
              CineVerse may use browser technologies such as cookies or
              local storage to remember user preferences and improve the
              user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Third-Party Services
            </h2>

            <p className="leading-7">
              CineVerse uses third-party services, including TMDB, to
              retrieve movie information. These services may have their
              own privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Data Security
            </h2>

            <p className="leading-7">
              We take reasonable measures to protect information handled
              by the website. However, no online service can guarantee
              complete security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Children's Privacy
            </h2>

            <p className="leading-7">
              CineVerse does not knowingly collect unnecessary personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. External Links
            </h2>

            <p className="leading-7">
              Our website may contain links to third-party websites or
              services. We are not responsible for the privacy practices
              or content of external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Changes to This Privacy Policy
            </h2>

            <p className="leading-7">
              This Privacy Policy may be updated from time to time.
              Changes will be posted on this page along with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              9. Contact Us
            </h2>

            <p className="leading-7">
              If you have questions about this Privacy Policy, you can
              contact us at:
            </p>

            <p className="text-blue-400 mt-3">
              support@cineverse.com
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

export default Privacy;