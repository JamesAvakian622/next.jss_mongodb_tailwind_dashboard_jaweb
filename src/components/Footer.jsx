import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

/**
 * Footer — six-column wide layout matching the JamesAvakian.com reference:
 *
 *   Biography | About Me | Entertainment | Technology | Resources | Legal
 *
 * Headings are blue and the brand name is centered above. Social icons
 * sit at the bottom inside a thin divider. External legal pages point at
 * OpticalAutomation.com (matching the source site).
 */

const FOOTER_GROUPS = [
  {
    heading: "Biography",
    links: [
      { label: "James", to: "/intro" },
      { label: "Portfolio", to: "/site/portfolio" },
      { label: "Like", to: "/site/like" },
      { label: "Dislikes", to: "/site/dislikes" },
      { label: "Photos", to: "/site/photos" },
    ],
  },
  {
    heading: "About Me",
    links: [
      { label: "About Me", to: "/site/about" },
      { label: "Contact Us", to: "/site/contact" },
      { label: "Jokes", to: "/site/jokes" },
      { label: "Background", to: "/site/background" },
      { label: "Products", to: "/site/products" },
      { label: "Videos", to: "/site/videos" },
      { label: "Site Map", to: "/site/sitemap" },
    ],
  },
  {
    heading: "Entertainment",
    links: [
      { label: "Music", to: "/site/music" },
      { label: "Videos", to: "/site/videos" },
      { label: "Videos 2", to: "/site/videos2" },
    ],
  },
  {
    heading: "Technology",
    links: [
      { label: "Software", to: "/site/technology" },
      { label: "eCommerce", to: "/site/ecommerce" },
      { label: "Electronics", to: "/site/electronics" },
      { label: "Musical Instruments", to: "/site/music-instruments" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documents", to: "/site/documents" },
      { label: "Future", to: "/site/future" },
    ],
  },
  {
    heading: "Legal",
    // Legal pages live on opticalautomation.com per the source site.
    external: true,
    links: [
      { label: "Terms of Use", href: "https://www.opticalautomation.com/terms-of-use" },
      { label: "Privacy Policy", href: "https://www.opticalautomation.com/privacy-policy" },
      { label: "Content Policy", href: "https://www.opticalautomation.com/content-policy" },
      { label: "Cookie Policy", href: "https://www.opticalautomation.com/cookie-policy" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100091998258369",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "X",
    href: "https://x.com/javakian2025",
    path: "M18.244 2H21.5l-7.34 8.39L22.5 22h-6.66l-5.21-6.81L4.5 22H1.24l7.84-8.96L1.5 2h6.83l4.7 6.21L18.24 2zm-1.17 18h1.83L7.02 4H5.05l12.02 16z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/optical-automation/posts/?feedView=all",
    path: "M20.45 20.45h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.353V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.45H3.554V9h3.565v11.45z",
  },
  {
    label: "GitHub",
    href: "http://www.github.com/JamesAvakian622",
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl px-6 py-10 lg:px-10">
        {/* Cool Jimmy hero above the brand name */}
        <div className="flex justify-center">
          <img
            src="/CoolJimmy.png"
            alt="Cool Jimmy"
            loading="lazy"
            className="h-auto w-40 sm:w-48"
          />
        </div>

        {/* Centered brand */}
        <div className="mt-4 text-center">
          <Link
            to="/"
            className="text-2xl font-bold text-sky-400 hover:text-sky-300"
          >
            James Avakian
          </Link>
        </div>

        {/* Six-column nav grid */}
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="mb-4 text-sm font-semibold text-sky-400">
                {group.heading}
              </h2>
              <ul className="space-y-3 text-sm">
                {group.links.map((link) =>
                  group.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-white/80 hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + centered social row */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <ul className="flex justify-center gap-8">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-sky-400 transition hover:text-sky-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs text-white/60">
            © 2026, Cool Jimmy, All rights reserved · Optical Automation, LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
