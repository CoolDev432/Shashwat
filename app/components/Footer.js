// components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-8 px-6 rounded-t-3xl">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Branding */}
                <div className="text-center md:text-left flex gap-3 items-center justify-between">
                    <h2 className="text-2xl font-bold">ss<span className="text-orange-500">.</span></h2>
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                {/* Social links */}
                <div className="flex space-x-6 text-2xl">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors ml-2">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors ml-2">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:youremail@example.com" className="hover:text-orange-500 transition-colors ml-2">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
