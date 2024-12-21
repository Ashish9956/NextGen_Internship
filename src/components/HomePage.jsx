import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset="1" stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/login"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute top-8 left-0 w-[32rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://www.ox.ac.uk/sites/files/oxford/media_wysiwyg/Collaboration%20values_simplified%20rw_0.png"
              alt="App screenshot"
              width="1824"
              height="1080"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <h3 className="text-center text-3xl font-bold text-gray-800 mb-8">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900">Feature 1</h4>
              <p className="text-gray-600 mt-2">
                Simplify your tasks and increase efficiency with our tool.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900">Feature 2</h4>
              <p className="text-gray-600 mt-2">
                Seamlessly integrate with your existing systems.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900">Feature 3</h4>
              <p className="text-gray-600 mt-2">
                Get 24/7 support from our dedicated team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
