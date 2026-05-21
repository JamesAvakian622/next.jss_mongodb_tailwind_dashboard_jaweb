import React from "react";

import LogoIcon from "../images/logo/logo-icon.svg";
import DropdownNotification from "./DropdownNotification";
import DropdownMessage from "./DropdownMessage";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import ClerkSignedInUser from "./ClerkSignedInUser";
import DropdownUser from "./DropdownUser";
import DarkModeSwitcher from "./DarkModeSwitcher";
import HeaderSocials from "./HeaderSocials";
import { Link } from "react-router-dom";
import NavbarMega from "./NavbarMega";
import "./Header.css";

const clerkEnabled = Boolean(
  import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
);
const Header = (props) => {
  return (
    <>
      <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
        <div className="headerNav">
          <div className="... z-40">
            <NavbarMega />
          </div>
        </div>
        <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              aria-controls="sidebar"
              aria-expanded={props.sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                props.setSidebarOpen(!props.sidebarOpen);
              }}
              className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "!w-full delay-300"
                    }`}
                  ></span>
                  <span
                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "delay-400 !w-full"
                    }`}
                  ></span>
                  <span
                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "!w-full delay-500"
                    }`}
                  ></span>
                </span>
                <span className="absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "!h-0 !delay-[0]"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "!h-0 !delay-200"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}

            <Link className="block flex-shrink-0 lg:hidden" to="/">
              <img src={LogoIcon} alt="Logo" />
            </Link>
          </div>

          <div className="flex items-center gap-3 px-20 2xsm:gap-10">
            <ul className="flex items-center gap-2 2xsm:gap-4">
              {/* <!-- Dark Mode Toggler --> */}
              <DarkModeSwitcher />
              {/* <!-- Dark Mode Toggler --> */}

              {/* <!-- Notification Menu Area --> */}
              <DropdownNotification />
              {/* <!-- Notification Menu Area --> */}

              {/* <!-- Chat Notification Area --> */}
              <DropdownMessage />
              {/* <!-- Chat Notification Area --> */}
            </ul>

            {/* <!-- Social Icons --> */}
            <HeaderSocials />

            {/* <!-- User / Clerk --> */}
            {clerkEnabled ? (
              <>
                <SignedIn>
                  <ClerkSignedInUser />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="redirect" forceRedirectUrl="/">
                    <button
                      type="button"
                      className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90"
                    >
                      Sign in
                    </button>
                  </SignInButton>
                </SignedOut>
              </>
            ) : (
              <DropdownUser />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
