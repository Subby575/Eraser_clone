"use client"
import React, { useState } from 'react';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import Navbar from '../_Components/Navbar';
import PricingDialog from '../(routes)/Dashboard/_Components/PricingDialog';
// import { StickyScroll } from '../_Components/sticky-scroll-reveal';
import { StickyScrollRevealDemo } from '../_Components/Feature';
import {TextRevealByWord} from '../_Components/Word-scroll';
import Pricing from '../_Components/Pricing';
import { Footer } from '../_Components/Footer';
const LandingPage: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    // const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    //     if (darkMode) {
    //         document.documentElement.classList.remove('dark');
    //     } else {
    //         document.documentElement.classList.add('dark');
    //     }
    // };

    return (
        <>
            <Navbar/>
            <section className={`pt-12 md:mt-20 overflow-y-hidden  dark:bg-gradient-to-r from-slate-500 to-slate-800 bg-gray-50 sm:pt-16`}>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className={`px-6 text-lg dark:text-gray-300 text-gray-600 font-inter`}>
                            Transform the way you collaborate and create.
                        </h1>
                        <h1 className={`mt-5 text-4xl font-bold leading-tight sm:leading-tight sm:text-5xl dark:text-gray-100  text-neutral-700 lg:text-6xl lg:leading-tight font-pj`}>
                            Unleash Your Creativity,Document
                            <span className="relative inline-flex sm:inline">
                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                <span className="relative"> Seamlessly. </span>
                            </span>
                        </h1>

                        <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                            <LoginLink
                                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 
                                dark:bg-gray-50 dark:text-slate-900
                                border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Get Started
                            </LoginLink>
                        </div>

                        <p className={`mt-8 text-base dark:text-gray-400  text-gray-500 font-inter`}>
                            60 Days free trial · No credit card required
                        </p>
                    </div>
                </div>

                <div className={`pb-12 mt-4 dark:bg-gradient-to-r from-slate-500 to-slate-800  bg-white`}>
                    <div className="relative">
                        <div className="absolute inset-0 h-2/3 bg-gray-50 dark:bg-gradient-to-r from-slate-500 to-slate-800"></div>
                        <div className="relative mx-auto overflow-hidden flex justify-center">
                            <div className="lg:max-w-5xl md:mx-auto lg:mx-auto">
                                <img className="transform scale-110" src="/Feature.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <button
                onClick={toggleDarkMode}
                className="fixed bottom-4 right-4 p-2 bg-gray-900 dark:bg-gray-900 text-white rounded-full focus:outline-none"
            >
                Toggle Dark Mode
            </button> */}
            <div id='Feature' className='dark:bg-gradient-to-r from-slate-500 to-slate-800'>
                <div className='h-[160vh] w-screen'>

            <TextRevealByWord text="Why Our Platform is Your Next Best Friend" />
                </div>
                <StickyScrollRevealDemo/>
                {/* <Feats/> */}
            </div>
            <div id='Pricing' className='h-screen bg-white dark:bg-gradient-to-r from-slate-500 to-slate-800'>

            <Pricing/>
            </div>
            <div id='Contact'>
                <Footer/>
            </div>
        </>
    );
};

export default LandingPage;
