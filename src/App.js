import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased">
      {/* Tailwind CSS Script - Will be loaded externally by the environment */}
      {/* Font Inter - Will be loaded externally by the environment */}

      {/* Header Section (Placeholder) */}
      <header className="py-4 px-6 md:px-12 bg-white shadow-sm rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-700">DrMinMinBrand</a>
          <nav>
            {/* Add navigation links here if needed */}
            {/* Example: <a href="#features" className="text-gray-600 hover:text-indigo-700 mx-3">Features</a> */}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16 md:py-24 overflow-hidden rounded-b-lg">
        {/* Optional background pattern for visual interest */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'.2\'%3E%3Cpath d=\'M36 34.5c-.328-.158-1.547-.665-3.08-.857-1.39-.176-2.923-.284-4.22-.505-1.905-.316-5.003-1.01-7.85-2.007-2.618-.916-5.65-2.316-8.7-4.14C9.006 20.395 6.78 18.237 4.532 15.6 2.378 13.067.588 9.947 0 7.398v-3.37L.065 0h34.821v34.5zM0 36.634v-.002C2.193 36.5 4.385 36.502 6.578 36.502c2.193 0 4.385-.002 6.578-.002h.001c2.18.002 4.364.004 6.544.004h.001c2.2-.002 4.4-.004 6.6-.004h.001c2.18-.002 4.364-.004 6.544-.004H40V23.774L35.918 20.21l-3.328-3.064c-1.3-.96-2.858-1.745-4.482-2.376-2.507-.98-5.3-1.577-7.988-1.72-2.73-.146-5.32-.016-7.89.378-2.66.41-5.337 1.157-7.9 2.213L0 17.584v19.05zM60 0v1.737L.632 60H0v-1.737L59.368 0H60zm-35.179 28.5L24 28.647v-.001c1.206.19 2.414.24 3.62.24h.001c1.196.002 2.394.004 3.59.004h.001c1.206-.002 2.414-.004 3.62-.004h.001c1.196-.002 2.394-.004 3.59-.004h.001c1.206-.002 2.414-.004 3.62-.004h.001c1.196-.002 2.394-.004 3.59-.004h.001c1.206-.002 2.414-.004 3.62-.004H60V25.292L56.082 21.728l-3.328-3.064c-1.3-.96-2.858-1.745-4.482-2.376-2.507-.98-5.3-1.577-7.988-1.72-2.73-.146-5.32-.016-7.89.378-2.66.41-5.337 1.157-7.9 2.213L24 22.844v5.656zm2.348 9.15h.001l-.001.002c-1.196.002-2.394.004-3.59.004h-.001c-1.206-.002-2.414-.004-3.62-.004h-.001c-1.196-.002-2.394-.004-3.59-.004h-.001c-1.206-.002-2.414-.004-3.62-.004h-.001c-1.196-.002-2.394-.004-3.59-.004h-.001c-1.206-.002-2.414-.004-3.62-.004h-.001c-1.196-.002-2.394-.004-3.59-.004H0v20.081l4.082 3.564 3.328 3.064c1.3.96 2.858 1.745 4.482 2.376 2.507.98 5.3 1.577 7.988 1.72 2.73.146 5.32.016 7.89-.378 2.66-.41 5.337-1.157 7.9-2.213l4.082-3.564V37.65zm-2.349-1.002c-.172-.084-.805-.333-2.022-.487-1.16-.134-2.44-.21-3.518-.352-1.58-.21-4.168-.7-6.54-1.493-2.355-.785-5.06-1.905-7.8-3.268-2.58-1.267-4.96-2.658-7.23-4.225-2.016-1.378-3.818-2.846-5.34-4.398-1.575-1.602-2.766-3.29-3.414-4.996L0 7.398v3.37L.632 0H35.53v36.632zm-.001-1.002c.172.084.805.333 2.022.487 1.16.134 2.44.21 3.518.352 1.58.21 4.168.7 6.54 1.493 2.355.785 5.06 1.905 7.8 3.268 2.58 1.267 4.96 2.658 7.23 4.225 2.016 1.378 3.818 2.846 5.34 4.398 1.575 1.602 2.766 3.29 3.414 4.996l.588 2.551v-3.37L59.368 60H24.47v-36.632zM36 34.5c-.328-.158-1.547-.665-3.08-.857-1.39-.176-2.923-.284-4.22-.505-1.905-.316-5.003-1.01-7.85-2.007-2.618-.916-5.65-2.316-8.7-4.14C9.006 20.395 6.78 18.237 4.532 15.6 2.378 13.067.588 9.947 0 7.398v-3.37L.065 0h34.821v34.5zM0 36.634v-.002C2.193 36.5 4.385 36.502 6.578 36.502c2.193 0 4.385-.002 6.578-.002h.001c2.18.002 4.364.004 6.544.004h.001c2.2-.002 4.4-.004 6.6-.004h.001c2.18-.002 4.364-.004 6.544-.004H40V23.774L35.918 20.21l-3.328-3.064c-1.3-.96-2.858-1.745-4.482-2.376-2.507-.98-5.3-1.577-7.988-1.72-2.73-.146-5.32-.016-7.89.378-2.66.41-5.337 1.157-7.9 2.213L0 17.584v19.05zM60 0v1.737L.632 60H0v-1.737L59.368 0H60zm-35.179 28.5L24 28.647v-.001c1.206.19 2.414.24 3.62.24h.001c1.196.002 2.394.004 3.59.004h.001c1.206-.002 2.414-.004 3.62-.004h.001c1.196-.002 2.394-.004 3.59-.004h.001c1.206-.002 2.414-.004 3.62-.004h.001c1.196-.002 2.394-.004 3.59-.004h.001c1.206-.002 2.414-.004 3.62-.004H60V25.292L56.082 21.728l-3.328-3.064c-1.3-.96-2.858-1.745-4.482-2.376-2.507-.98-5.3-1.577-7.988-1.72-2.73-.146-5.32-.016-7.89.378-2.66.41-5.337 1.157-7.9 2.213L24 22.844v5.656zm2.348 9.15h.001l-.001.002c-1.196.002-2.394.004-3.59.004h-.001c-1.206-.002-2.414-.004-3.62-.004h-.001c-1.196-.002-2.394-.004-3.59-.004h-.001c-1.206-.002-2.414-.004-3.62-.004h-.001c-1.196-.002-2.394-.004-3.59-.004h-.001c-1.206-.002-2.414-.004-3.62-.004h-.001c-1.196-.002-2.394-.004-3.59-.004H0v20.081l4.082 3.564 3.328 3.064c1.3.96 2.858 1.745 4.482 2.376 2.507.98 5.3 1.577 7.988 1.72 2.73.146 5.32.016 7.89-.378 2.66-.41 5.337-1.157 7.9-2.213l4.082-3.564V37.65zm-2.349-1.002c-.172-.084-.805-.333-2.022-.487-1.16-.134-2.44-.21-3.518-.352-1.58-.21-4.168-.7-6.54-1.493-2.355-.785-5.06-1.905-7.8-3.268-2.58-1.267-4.96-2.658-7.23-4.225-2.016-1.378-3.818-2.846-5.34-4.398-1.575-1.602-2.766-3.29-3.414-4.996L0 7.398v3.37L.632 0H35.53v36.632zm-.001-1.002c.172.084.805.333 2.022.487 1.16.134 2.44.21 3.518.352 1.58.21 4.168.7 6.54 1.493 2.355.785 5.06 1.905 7.8 3.268 2.58 1.267 4.96 2.658 7.23 4.225 2.016 1.378 3.818 2.846 5.34 4.398 1.575 1.602 2.766 3.29 3.414 4.996l.588 2.551v-3.37L59.368 60H24.47v-36.632z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Unlock Your <span className="text-yellow-300">Social Media Potential</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Master the art of creating engaging content that captivates your audience and drives real results for your business.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75">
              Enroll Now & Transform Your Presence
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://placehold.co/500x350/667EEA/FFFFFF?text=Engaging+Content"
              alt="Social Media Content"
              className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-md object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x350/667EEA/FFFFFF?text=Placeholder+Image"; }}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            What You'll Achieve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 text-5xl mb-4">✨</div> {/* Icon Placeholder */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Craft Irresistible Content</h3>
              <p className="text-gray-700">
                Learn the secrets to creating posts, videos, and stories that stop the scroll and resonate deeply.
              </p>
            </div>
            {/* Benefit Card 2 */}
            <div className="bg-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 text-5xl mb-4">📈</div> {/* Icon Placeholder */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Boost Engagement & Reach</h3>
              <p className="text-gray-700">
                Discover strategies to organically grow your audience, likes, comments, and shares.
              </p>
            </div>
            {/* Benefit Card 3 */}
            <div className="bg-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 text-5xl mb-4">💰</div> {/* Icon Placeholder */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Convert Followers into Clients</h3>
              <p className="text-gray-700">
                Turn your social media presence into a powerful lead-generation and sales machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules/Curriculum Section (Placeholder) */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            What You'll Learn (Course Modules)
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            A comprehensive curriculum designed to take you from beginner to social media content master.
            (Detailed module breakdown would go here)
          </p>
          <div className="flex justify-center">
            <button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-300">
              View Full Curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-16 md:py-20 text-center rounded-t-lg">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join hundreds of successful creators and entrepreneurs who transformed their online presence.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-4 px-10 rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75">
            Yes, I Want to Master Social Content!
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 rounded-t-lg">
        <div className="container mx-auto px-6 md:px-12 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-indigo-300 hover:text-indigo-100 mx-2">Privacy Policy</a>
            <span className="mx-1">|</span>
            <a href="#" className="text-indigo-300 hover:text-indigo-100 mx-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
