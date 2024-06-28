import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_wxplg3w', 'template_ikh9epa', form.current, '3Np3vR6tlRrOkhf5w')
                .then(
                    () => {
                        toast('Message Send Successfully!')
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        toast('Error Occured, Try again!')
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <>
            {/* 
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="user_message" required />
                <input type="submit" value="Send" />
            </form> */}


            <form ref={form} onSubmit={sendEmail} className=''>
                <section className="text-neutral-500 dark:bg-gradient-to-r from-slate-500 to-slate-800 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl title-font mb-4 dark:text-white font-bold">Contact Us</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-400 dark:text-gray-50">Name</label>
                                        <input type="text" id="name" name="user_name" className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:bg-sky-50 focus:ring-2  text-base outline-none focus:text-gray-900
                                        text-gray-50
                                         py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-400 dark:text-gray-50">Email</label>
                                        <input type="email" id="email" name="user_email" className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:bg-sky-50 focus:ring-2  text-base outline-none 
                                        focus:text-gray-900
                                        text-gray-50
                                         0 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-400 dark:text-gray-50">Message</label>
                                        <textarea id="message" name="user_message" className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:bg-sky-50 focus:ring-2  text-base outline-none focus:text-gray-900
                                        text-gray-50
                                        dark:text-black
                                         0 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button type='submit' className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </form>
            <footer className="dark:bg-slate-900 bg-white">
  <div className="mx-auto max-w-screen-xl px-4 pb-8  sm:px-6 lg:px-8">


    <div
      className=" border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between"
    >
      <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
        <li>
          <a href="#" className="dark:text-neutral-50 text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
        </li>

        <li>
          <a href="#" className="text-gray-500 dark:text-neutral-50 transition hover:opacity-75"> Privacy Policy </a>
        </li>

        <li>
          <a href="#" className="text-gray-500 dark:text-neutral-50 transition hover:opacity-75"> Cookies </a>
        </li>
      </ul>

      <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
        <li>
          <a
            href="https://twitter.com/SubhamBane44079"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 dark:text-neutral-50 transition hover:opacity-75"
          >
            <span className="sr-only">Twitter</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Subby575"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 dark:text-neutral-50 transition hover:opacity-75"
          >
            <span className="sr-only">GitHub</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/subham-banerjee-7696a524a/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 dark:text-neutral-50 transition hover:opacity-75"
          >
            <span className="sr-only">Linkedin</span>

                <Linkedin />
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
        </>
    );
};
