import React from "react";
import { Link } from "react-router-dom";
import "/style.css";

export default function NavbarMega() {
  return (
    <>
      <nav className="z-50">
        <ul className="flex items-center justify-center py-5 font-semibold text-black dark:!text-white">
          <li className="group relative px-3 py-2">
            <button className="hover:opacity-1000 cursor-default">
              Products
            </button>
            <div className="invisible absolute top-0 -left-72 z-50 min-w-[820px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
              <div className="relative top-6 w-full rounded-xl bg-black p-6 shadow-2xl">
                <div className="absolute top-0 z-0 h-10 w-10 translate-x-0 rotate-45 transform rounded-sm bg-black transition-transform duration-500 ease-in-out group-hover:translate-x-[12rem]"></div>

                <div className="relative z-10">
                  <p className="mb-5 text-center text-[23px] font-medium tracking-wide text-white">
                    Cool Jimmy Software
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <ul className="text-left text-[15px]">
                        <li>
                          <a
                            href="http://www.MyZr1X.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            MyZR1 / ZR1X
                            <p className="font-normal text-gray-300">
                              Top left · MyZr1X.com
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.GrandSport.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            MyGrand Sport / MyGrandSportX
                            <p className="font-normal text-gray-300">
                              GrandSport.com
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.MyZ06.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            MyZ06
                            <p className="font-normal text-gray-300">
                              MyZ06.com
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <ul className="text-left text-[15px]">
                        <li>
                          <a
                            href="http://www.CoolJimmy.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            Cool Jimmy
                            <p className="font-normal text-gray-300">
                              CoolJimmy.com
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.my-stingray.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            MyStingray
                            <p className="font-normal text-gray-300">
                              my-stingray.com
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.TheCorvetteReporter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            The Corvette Reporter
                            <p className="font-normal text-gray-300">
                              TheCorvetteReporter.com
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Third column — software product titles */}
                    <div className="text-center">
                      <ul className="text-left text-[15px]">
                        <li>
                          <Link
                            to="/site/products"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            Optical Automation
                            <p className="font-normal text-gray-300">
                              Web &amp; Mobile Suite
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/site/products"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            Technology And Times
                            <p className="font-normal text-gray-300">
                              Web &amp; Mobile Suite
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/site/products"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            America Rediscovered
                            <p className="font-normal text-gray-300">
                              Web &amp; Mobile Archive
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/site/products"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            MyDeskView Suite
                            <p className="font-normal text-gray-300">
                              Personal &amp; Business Organizer
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/site/products"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            Sixty Applications
                            <p className="font-normal text-gray-300">
                              Learning, Business, Lifestyle
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* More → links to the full Products page */}
                  <div className="mt-5 flex justify-center border-t border-white/10 pt-4">
                    <Link
                      to="/site/products"
                      className="text-[15px] font-semibold text-sky-300 transition hover:text-sky-200"
                    >
                      More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="group relative px-3 py-2">
            <button className="hover:opacity-1000 cursor-default">
              Mobile Apps
            </button>
            <div className="invisible absolute top-0 -left-48 z-50 min-w-[560px] max-w-[calc(100vw-2rem)] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100 sm:left-1/2 sm:-translate-x-1/2">
              <div className="relative top-6 w-full rounded-xl bg-black p-6 shadow-2xl">
                <div className="absolute top-0 z-0 h-10 w-10 translate-x-0 rotate-45 transform rounded-sm bg-black transition-transform duration-500 ease-in-out group-hover:translate-x-[12rem]"></div>

                <div className="relative z-10">
                  <div className="mb-5 border-b border-strokedark pb-4 text-center">
                    <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      Mobile Apps
                    </p>
                    <p className="mt-1.5 text-sm font-normal text-gray-300 sm:text-base">
                      Apple iOS iPhone, iPad, and Watch
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <ul className="pt-10 text-left text-[15px]">
                        <li>
                          <a
                            href="http://www.MyZr1X.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            MyZR1 / ZR1X
                            <p className="font-normal text-gray-300">
                              Top left · MyZr1X.com
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.GrandSport.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            MyGrand Sport / MyGrandSportX
                            <p className="font-normal text-gray-300">
                              GrandSport.com
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.MyZ06.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            MyZ06
                            <p className="font-normal text-gray-300">
                              MyZ06.com
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <p className="text-[23px] font-medium tracking-wide text-white">
                        Cool Jimmy Software
                      </p>
                      <ul className="mt-3 text-left text-[15px]">
                        <li>
                          <a
                            href="http://www.CoolJimmy.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            Cool Jimmy
                            <p className="font-normal text-gray-300">
                              CoolJimmy.com
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.my-stingray.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            MyStingray
                            <p className="font-normal text-gray-300">
                              my-stingray.com
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.TheCorvetteReporter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                          >
                            The Corvette Reporter
                            <p className="font-normal text-gray-300">
                              TheCorvetteReporter.com
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="group relative px-3 py-2">
            <button className="cursor-default hover:opacity-50">
              Solutions
            </button>
            <div className="invisible absolute top-0 -left-2 z-50 min-w-[260px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
              <div className="relative top-6 w-full rounded-xl bg-black p-6 shadow-xl">
                <div className="absolute top-0 z-0 h-10 w-10 -translate-x-4 rotate-45 transform rounded-sm bg-black transition-transform duration-500 ease-in-out group-hover:translate-x-3"></div>
                <div className="relative z-10">
                  <p className="text-[13px] font-medium uppercase tracking-wider text-gray-300">
                    Use cases
                  </p>
                  <ul className="mt-3 text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-semibold text-white hover:text-gray-200"
                      >
                        Creators
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-semibold text-white hover:text-gray-200"
                      >
                        Streamers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-semibold text-white hover:text-gray-200"
                      >
                        Influence
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-semibold text-white hover:text-gray-200"
                      >
                        Programming
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-semibold text-white hover:text-gray-200"
                      >
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group relative px-3 py-2">
            <button className="cursor-default hover:opacity-50">
              Developers
            </button>
            <div className="invisible absolute top-0 -left-48 z-50 min-w-[560px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
              <div className="relative top-6 w-full rounded-xl bg-black p-6 shadow-xl">
                <div className="absolute top-0 z-0 h-10 w-10 translate-x-0 rotate-45 transform rounded-sm bg-black transition-transform duration-500 ease-in-out group-hover:translate-x-[12.65rem]"></div>

                <div className="relative z-10">
                  <a
                    href="#"
                    className="-mx-2 block rounded-lg p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-white/10 hover:text-white"
                  >
                    Documentation
                    <p className="font-normal text-gray-300">
                      Start integrating in no time
                    </p>
                  </a>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-[13px] font-medium uppercase tracking-wider text-gray-300">
                        Get started
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block py-1 font-normal text-white hover:text-gray-200"
                          >
                            Libraries and SDKs
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1 font-normal text-white hover:text-gray-200"
                          >
                            Plugins
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1 font-normal text-white hover:text-gray-200"
                          >
                            Code samples
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1 font-normal text-white hover:text-gray-200"
                          >
                            Tutorials
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[13px] font-medium uppercase tracking-wider text-gray-300">
                        Guides
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block py-1 font-normal text-white hover:text-gray-200"
                          >
                            Accept online payments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1 font-normal text-white hover:text-gray-200"
                          >
                            Editing video like a pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1 font-normal text-white hover:text-gray-200"
                          >
                            Automation techniques
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1 font-normal text-white hover:text-gray-200"
                          >
                            Create stunning effects
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="group relative px-3 py-2">
            <button className="cursor-default hover:opacity-50">
              Resources
            </button>
            <div className="invisible absolute top-0 -left-2 z-50 min-w-[200px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
              <div className="relative top-6 w-full rounded-xl bg-black p-6 shadow-xl">
                <div className="absolute top-0 z-0 h-10 w-10 -translate-x-4 rotate-45 transform rounded-sm bg-black transition-transform duration-500 ease-in-out group-hover:translate-x-3"></div>
                <div className="relative z-10">
                  <ul className="text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-normal text-white hover:text-gray-200"
                      >
                        Get Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-normal text-white hover:text-gray-200"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-normal text-white hover:text-gray-200"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-normal text-white hover:text-gray-200"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1 font-normal text-white hover:text-gray-200"
                      >
                        News &amp; Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group relative px-3 py-2">
            <a href="#" className="cursor-default hover:opacity-50">
              Pricing
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
