import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='bg-gray-100 px-10'>
        {/* <footer className="bg-gradient-to-r from-gray-500 to-indigo-500 text-white"> */}
        <footer className="bg-gray-300 ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-10 lg:py-12">
                <div className=" flex justify-between gap-8">
                    <div>
                        <h2 className="mb-6 text-lg font-semibold uppercase tracking-wide">Resources</h2>
                        <ul className="text-gray-600 font-medium space-y-4">
                            <li>
                                <Link to="#" className="hover:text-blue-600 hover:underline">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-blue-600 hover:underline">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold uppercase tracking-wide">Follow Us</h2>
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href="https://github.com/AbyssFillers"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-80"
                                >
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt="GitHub logo"
                                        className="w-6 h-6"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-80"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                        alt="Twitter logo"
                                        className="w-6 h-6"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold uppercase tracking-wide">Legal</h2>
                        <ul className="text-gray-600 font-medium space-y-4">
                            <li>
                                <Link to="#" className="hover:text-blue-600 hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-blue-600 hover:underline">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-400 pt-6 flex justify-between items-center text-sm">
                    <span>© 2024 Abyss Fillers. All rights reserved.</span>
                    <div className="flex space-x-6">
                        <Link to="#" className="hover:text-blue-600 hover:underline">
                            Contact Us
                        </Link>
                        <Link to="/about" className="hover:text-blue-600 hover:underline">
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
}
