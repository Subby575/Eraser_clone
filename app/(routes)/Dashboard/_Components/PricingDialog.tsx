import React from 'react'
import { DialogClose, DialogFooter } from '@/components/ui/dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
function PricingDialog() {
  return (
    <>
      <DialogContent className='max-w-4xl'>
        <DialogHeader>
          <DialogTitle>Upgrade Plan</DialogTitle>
          <DialogDescription>

          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="">
          <DialogClose asChild>
            {/* <div className="mx-auto my-auto  max-w-3xl mt-24 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                <div
                  className="rounded-2xl border bg-gradient-to-r from-yellow-600 to-red-600 dark:border-sky-50 border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
                >
                  <div className="text-center">
                    <h2 className="text-lg font-medium dark:text-sky-50 text-gray-300">
                      Pro
                      <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 sm:mt-4">
                      <strong className="text-3xl font-bold text-gray-200 dark:text-sky-50 sm:text-4xl"> 5$ </strong>

                      <span className="text-sm font-medium text-gray-100 dark:text-sky-100">/month</span>
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      <span className="text-gray-200 dark:text-sky-50"> Unlimited Files </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      <span className="text-gray-200 dark:text-sky-50"> 7+ teams </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      <span className="text-gray-200 dark:text-sky-50"> Email support </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      <span className="text-gray-200 dark:text-sky-50"> Help center access </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      <span className="text-gray-200 dark:text-sky-50"> Community access </span>
                    </li>
                  </ul>
                  {/* <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden my-2 h-12 w-52 rounded-md bg-amber-800 p-2 flex justify-center items-center font-extrabold">
                    <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-amber-900 delay-150 group-hover:delay-75"></div>
                    <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-amber-800 delay-150 group-hover:delay-100"></div>
                    <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-amber-700 delay-150 group-hover:delay-150"></div>
                    <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-amber-600 delay-150 group-hover:delay-200"></div>
                    <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-amber-500 delay-150 group-hover:delay-300"></div>
                    <p className="z-10">Discover More</p>
                  </button> */}


{/*
                  <a
                    href="#"
                    className="mt-8 block rounded-full border border-indigo-600 bg-black px-12 py-3 text-center text-sm 
                    dark:hover:bg-slate-900
                    font-medium text-white hover:bg-indigo-700 hover:ring-1 
         hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get Started
                  </a>
                </div>

                <div className="rounded-2xl   dark:bg-neutral-900 border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                  <div className="text-center">
                    <h2 className="text-lg font-medium dark:text-sky-50 text-gray-900">
                      Starter
                      <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 sm:mt-4">
                      <strong className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-sky-50"> 0$ </strong>

                      <span className="text-sm font-medium text-gray-700 dark:text-sky-100">/month</span>
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      <span className="text-gray-700 dark:text-sky-50"> 5 Files Included </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      <span className="text-gray-700 dark:text-sky-50"> 3 teams </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      <span className="text-gray-700 dark:text-sky-50"> Community access </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      <span className="text-gray-700 dark:text-sky-50"> Email Support </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className=" py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
      {/* <!-- left side - start --> */}
      <div className="w-full rounded-lg bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-100 sm:text-3xl">Free Tier</h3>
          <p className="text-gray-300">Starter</p>
        </div>

        <div className="mb-4 space-x-2">
          <span className="text-4xl font-bold text-gray-100">$0</span>
          <span className="text-2xl text-gray-300 line-through">$5</span>
        </div>

        <ul className="mb-6 space-y-2 text-gray-300">
          {/* <!-- feat - start --> */}
          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>5 Files Included</span>
          </li>
          {/* <!-- feat - end -->

          <!-- feat - start --> */}
          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>3 teams</span>
          </li>
          {/* <!-- feat - end -->

          <!-- feat - start --> */}
          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Email support</span>
          </li>
          {/* <!-- feat - end --> */}
        </ul>

        {/* <a href="#" className="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base">Get the Basic Bundle</a> */}
      </div>
      {/* <!-- left side - end -->

      <!-- right side - start --> */}
      <div className="w-full rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-400 p-6 shadow-xl sm:w-1/2 sm:p-8">
        <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Pro Bundle</h3>
            <p className="text-indigo-100">Premium</p>
          </div>

          <span className="order-first inline-block rounded-full bg-indigo-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none">Best value</span>
        </div>

        <div className="mb-4 space-x-2">
          <span className="text-4xl font-bold text-white">$10</span>
          <span className="text-2xl text-indigo-100 line-through">$20</span>
        </div>

        <ul className="mb-6 space-y-2 text-indigo-100">
          {/* <!-- feat - start --> */}
          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Unlimited Files</span>
          </li>
          {/* <!-- feat - end -->

          <!-- feat - start --> */}
          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>7+ teams</span>
          </li>
          {/* <!-- feat - end -->

          <!-- feat - start --> */}
          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Community Access</span>
          </li>
          {/* <!-- feat - end -->

          <!-- feat - start --> */}
          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Help Center Access</span>
          </li>
          {/* <!-- feat - end -->

          <!-- feat - start --> */}
          <li className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Email Support</span>
          </li>
          {/* <!-- feat - end --> */}
        </ul>

        <a href="#" className="block rounded-lg bg-indigo-200 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-300 focus-visible:ring active:bg-indigo-400 md:text-base">Get the Pro Bundle</a>
      </div>
      {/* <!-- right side - end --> */}
    </div>
    </div>
    </div>
          </DialogClose >
        </DialogFooter >
      </DialogContent >
    </>
  )
}

export default PricingDialog 