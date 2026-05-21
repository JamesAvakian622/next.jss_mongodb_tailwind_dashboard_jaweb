/**
 * Shared list of featured site cards.
 *
 * Used in two places so they stay in sync:
 *  - Dashboard (src/pages/Dashboard/Analytics.jsx) — top row of cards
 *  - Products page (siteContent.js → SitePage card grid)
 *
 * Drop the four screenshots into /public:
 *   public/image1.png  (MyZR1X)
 *   public/image2.png  (Optical Automation)
 *   public/image3.png  (My1Domains)
 *   public/image4.png  (MyPersonalOrganizer)
 */
const dashboardSites = [
  {
    title: "MyZR1X",
    url: "http://www.MyZr1x.com",
    image: "/image1.png",
    alt: "MyZR1 / MyZR1X site preview",
  },
  {
    title: "Software",
    url: "https://opticalautomation2026.netlify.app",
    image: "/image2.png",
    alt: "Optical Automation 2026 site preview",
  },
  {
    title: "Domains",
    url: "https://my1domains.netlify.app",
    image: "/image3.png",
    alt: "My1Domains site preview",
  },
  {
    title: "Organizer",
    url: "https://mypersonalorganizer.netlify.app",
    image: "/image4.png",
    alt: "MyPersonalOrganizer site preview",
  },
];

export default dashboardSites;
