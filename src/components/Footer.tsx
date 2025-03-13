import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">AIoT Smart Cart</h3>
            <p className="text-gray-400">
              Revolutionizing the retail experience with AI and IoT technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Arab Academy for Science, Technology, and Maritime Transport
            </p>
            <a
              href="mailto:contact@aiotsmartcart.com"
              className="text-blue-400 hover:text-blue-300"
            >
              contact@aiotsmartcart.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                GitHub
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Institution</h3>
            <a href="https://aast.edu" target="_blank" rel="noopener noreferrer">
              <img
                src="https://aast.edu/en/about/img/aast-logo-white.png"
                alt="AAST Logo"
                className="h-12"
              />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} AIoT Smart Cart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;