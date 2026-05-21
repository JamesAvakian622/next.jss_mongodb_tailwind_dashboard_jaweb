import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * App shell with fixed sidebar + header and a scrolling main column.
 *
 * The right column owns vertical scrolling (`overflow-y-auto`), so any page
 * with content taller than the viewport scrolls inside the main frame
 * rather than the whole document. The footer is rendered at the end of the
 * main column so it scrolls with the page content and is always reachable.
 */
const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-whiten text-body dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-whiten dark:bg-boxdark-2">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="flex-1">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
