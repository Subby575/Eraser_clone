"use client"
import React, { useState, useEffect } from 'react';
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const [logo, setLogo] = useState('/logo-no-background.png'); // default logo for light mode

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    const path = usePathname().slice(6, 20);
    console.log(path);

    const menuItems = ["Feature", "Pricing", "Contact"];

    useEffect(() => {
        const root = document.documentElement;
        const observer = new MutationObserver(() => {
            const isDarkMode = root.classList.contains('dark');
            setLogo(isDarkMode ? '/logo-no-background.png' : '/logo-no-background.png');
        });

        observer.observe(root, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="fixed top-0 w-full z-50 bg-gray-50 dark:bg-gray-800 shadow-md overflow-hidden">
                <header className="py-2 md:py-3">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <a href="/" title="" className="flex rounded outline-none ">
                                    <img className="w-auto h-8" src={logo} alt="SlateFlow" />
                                </a>
                            </div>

                            <div className="flex lg:hidden">
                                <button type="button" className="text-gray-900 dark:text-white" onClick={toggleMenu}>
                                    {!expanded ? (
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    ) : (
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                                {menuItems.map((item, index) => (
                                    <a key={index} href={`#${item}`} title="" className={`text-base font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50  ${path === item ? 'text-gray-400 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}> {item} </a>
                                ))}
                            </div>

                            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                                <LoginLink className="text-base font-medium text-gray-900 dark:text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 "> Login </LoginLink>
                                <RegisterLink className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 dark:bg-gray-700 border border-transparent rounded-xl hover:bg-gray-600 dark:hover:bg-gray-500 font-pj  " role="button">
                                    Sign up
                                </RegisterLink>
                            </div>
                        </div>

                        {expanded && (
                            <nav>
                                <div className="px-1 py-8">
                                    <div className="grid gap-y-7">
                                        {menuItems.map((item, index) => (
                                            <a key={index} href={`#${item}`} className={`flex items-center p-3 -m-3 text-base font-medium text-gray-900 dark:text-white transition-all duration-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 ${path === item ? 'text-gray-400 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}> {item} </a>
                                        ))}
                                        <LoginLink className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 dark:text-white transition-all duration-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Login </LoginLink>
                                        <RegisterLink className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 dark:bg-gray-700 border border-transparent rounded-xl hover:bg-gray-600 dark:hover:bg-gray-500 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                                            Sign up
                                        </RegisterLink>
                                    </div>
                                </div>
                            </nav>
                        )}
                    </div>
                </header>
            </div>
        </>
    );
};

export default Navbar;
