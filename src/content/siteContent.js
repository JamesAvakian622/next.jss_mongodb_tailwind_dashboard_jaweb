/**
 * Content for the James Avakian site pages.
 *
 * Each entry is keyed by URL slug ("/site/:slug") and is rendered by the
 * generic <SitePage /> component. To add a page, drop a new object here —
 * no JSX or routing changes required.
 *
 * Schema:
 *   {
 *     title:      string         Page H1
 *     subtitle?:  string         Optional kicker shown under the H1
 *     hero?:      string         Optional hero image URL
 *     sections:   Section[]      Body sections in order
 *   }
 *
 * Section:
 *   { heading?: string, paragraphs?: string[], bullets?: string[] }
 *
 * Content was copied from the user's own site (jamesavakian.com /
 * jamesavakian.netlify.app), per their explicit instruction.
 */
const siteContent = {
  about: {
    title: "About Me",
    subtitle: "James L. Avakian",
    hero: "https://jamesavakian.netlify.app/me.jpg",
    heroSize: "half",
    sections: [
      {
        paragraphs: [
          "I'm a Los Angeles-based software engineer and full-stack developer with decades of experience building scalable web platforms and mobile applications. My work spans ReactJS, Next.js, SwiftUI, and the MERN stack, with a deep focus on clean architecture, SEO optimization, and user-centered design.",
          "I started several years ago after I graduated from California Polytechnic State University in Engineering Technology. I bought a Corvette because it is a great car and I was an employee for General Motors, then sold the car since I was out of work. I got myself to Santa Barbara and got odd jobs and paid rent. I worked on a hiring freeze at Hughes Aircraft in El Segundo.",
          "After looking for work without luck, I got creative and wrote and designed mechanical software patents for measuring eyeglasses by stylus, and a second document with complete pencil drawings designed a non-contact method for measuring by camera and compact disk. Then I submitted many government grant proposals to NASA, Army, and National Science Foundations for $50,000 Phase One Small Business Innovation Research money. Without luck, I continued to look for work.",
          "So back then, I continued to learn C/C++, HTML, Visual C++, Swift, Xamarin, and currently React.JS five years ago. Then I started Optical Automation, LLC, and now I specialize in Next.js, MongoDB, and SwiftUI Mobile App Production by Agentic AI development, leveraging modern frameworks and intelligent automation to deliver high-quality software solutions for web and mobile platforms.",
        ],
      },
      {
        heading: "What I Do",
        bullets: [
          "Full-stack web development with React.js, Next.js, Styled Components, TailwindCSS and MongoDB",
          "Native SwiftUI and Android mobile app development for iPhone, iPad, and Watch and also Android Cellphone and Tablets",
          "Agentic AI integration and automation pipelines",
          "SEO architecture with JSON-LD, metadata, and semantic HTML",
          "Cloud database solutions with MongoDB Atlas",
        ],
      },
      {
        heading: "My Approach",
        paragraphs: [
          "I believe in building software that's not just functional, but elegant. Every project I take on emphasizes clean code, modular design, and long-term maintainability. I leverage the latest AI tools and development frameworks to accelerate delivery while maintaining the highest standards of quality and performance.",
        ],
      },
      {
        heading: "Let's Connect",
        paragraphs: [
          "Whether you're looking to build a new platform, optimize an existing system, or explore what's possible with modern web and mobile technology, I'd love to hear from you. Feel free to reach out through the contact page or connect with me on social media.",
        ],
      },
    ],
  },

  background: {
    title: "Background",
    subtitle: "Some of my background before React and Agentic AI development.",
    hero: "https://jamesavakian.netlify.app/images/background-neon.jpg",
    sections: [],
  },

  contact: {
    title: "Contact Me",
    subtitle:
      "Say hello — suggestions, updates, or technical support.",
    sections: [
      {
        heading: "Get in Touch",
        paragraphs: [
          "I'm always excited to connect with fellow programmers, innovators, and car enthusiasts.",
          "Whether you have a project idea, want to collaborate, or just want to share in the excitement of technology and performance, feel free to reach out and send me an email: jamesavakian62@yahoo.com",
          "For business inquiries or technical support, please use the contact form above. I typically respond within 24-48 hours.",
        ],
      },
    ],
  },

  portfolio: {
    title: "Portfolio",
    subtitle: "Selected work and ongoing projects.",
    video: {
      src: "/oa2026.mp4",
      // Optional poster image: drop a still at public/oa2026-poster.jpg
      poster: "/oa2026-poster.jpg",
      autoPlay: true,
      muted: true,
      loop: true,
    },
    sections: [
      {
        paragraphs: [
          "A curated showcase of websites, mobile apps, and product lines built under Optical Automation, LLC.",
        ],
      },
    ],
  },

  products: {
    title: "Products",
    subtitle:
      "Software titles I have designed and am currently preparing.",
    sections: [
      {
        heading: "Optical Automation — Web & Mobile Suite",
        paragraphs: [
          "SwiftUI, iPhone, iPad, Android, Tablet, Phone — Megamenu, metadata-driven navigation, offline mode, cloud sync, AI-powered insights. Built end-to-end at OpticalAutomation.com with Next.js, MongoDB, and a metadata-first content pipeline.",
        ],
        card: {
          title: "Optical Automation",
          url: "https://opticalautomation2026.netlify.app",
          image: "/image2.png",
          alt: "Optical Automation 2026 site preview",
        },
      },
      {
        heading: "MyZR1X — Corvette ZR1 / ZR1X Site",
        paragraphs: [
          "MyZR1.com is the flagship of the My Corvette Series — a Next.js + MongoDB site dedicated to the C8 Corvette ZR1 and ZR1X. Track-bred dynamics coverage, owner stories, gallery, mods, docs, and a community sign-in surface, all behind Clerk authentication with JSON-LD and per-page metatags driving SEO discoverability.",
        ],
        card: {
          title: "MyZR1X",
          url: "http://www.MyZr1x.com",
          image: "/image1.png",
          alt: "MyZR1 / MyZR1X site preview",
        },
      },
      {
        heading: "Domains — Personal Digital Hub",
        paragraphs: [
          "These are the web services I provide. My1Domains.netlify.app is the personal digital hub framework I license out: enterprise-grade authentication, modern UI, and resource pages wired together with cutting-edge technology by Optical Automation, LLC. Drop-in branding, SEO, and content blocks for any domain in the My Corvette Series or beyond.",
        ],
        card: {
          title: "Domains",
          url: "https://my1domains.netlify.app",
          image: "/image3.png",
          alt: "My1Domains site preview",
        },
      },
      {
        heading: "MyDeskView, MyPersonalOrganizer, MyBusinessOrganizer",
        paragraphs: [
          "Desktop productivity suite — proprietary ecosystem for high-efficiency workflow access. MyPersonalOrganizer.netlify.app is the live preview: integrated software at your fingertips, with sports / finance / lists / tasks / tools / health surfaces, customizable per user.",
        ],
        card: {
          title: "Organizer",
          url: "https://mypersonalorganizer.netlify.app",
          image: "/image4.png",
          alt: "MyPersonalOrganizer site preview",
        },
      },
      {
        heading: "Technology And Times — Web & Mobile Suite",
        paragraphs: [
          "SwiftUI, iPhone, iPad, Android, Tablet, Phone — Metadata-driven navigation, offline mode, cloud sync, AI-powered insights.",
        ],
      },
      {
        heading: "America Rediscovered — Web & Mobile Archive",
        paragraphs: [
          "SwiftUI, iPhone, iPad, Android, Tablet, Phone — Long-form editorial content, semantic search, dynamic typography.",
        ],
      },
      {
        heading: "Sixty Applications",
        paragraphs: [
          "SwiftUI, iPhone, iPad, Android, Tablet, Phone — Learning, Business, Lifestyle, Nature, DIY.",
        ],
      },
    ],
  },

  technology: {
    title: "Software",
    subtitle:
      "The software and the technology I work with.",
    hero: "/screen.png",
    sections: [
      {
        heading: "ReactJS: Crafting Exceptional User Experiences",
        paragraphs: [
          "React empowers the creation of dynamic, responsive interfaces that communicate your message with precision and elegance. Through reusable components and efficient state management, every interaction becomes meaningful. The result: digital experiences that resonate with users and deliver content in ways traditional websites cannot match — words flow seamlessly, images load instantly, and media plays flawlessly.",
        ],
      },
      {
        heading: "NextJS: Performance Meets Communication",
        paragraphs: [
          "NextJS transforms how information reaches your audience. With Server-Side Rendering and Static Site Generation, content loads at lightning speed while maintaining perfect SEO. Your words appear instantly in search results, your images are optimized for every device, and your media streams without buffering.",
        ],
      },
      {
        heading: "Styled Components: Visual Excellence in Every Pixel",
        paragraphs: [
          "Styled Components enables pixel-perfect design. Every color, transition, and visual element is crafted to enhance your message. Words are framed in beauty, images are showcased with elegance, and media is presented with professional polish.",
        ],
      },
      {
        heading: "Modern JavaScript: The Foundation",
        paragraphs: [
          "Built on modern JavaScript (ES6+) and enhanced with TypeScript, this stack delivers information with uncompromising speed and reliability. Code quality translates directly to user experience: faster load times, optimized images, and flawless media across all devices.",
        ],
      },
    ],
  },

  ecommerce: {
    title: "🛒 eCommerce",
    subtitle: "Online store and retail platform.",
    hero: "https://jamesavakian.netlify.app/images/ecommerce-money.jpg",
    sections: [
      {
        paragraphs: [
          "An evolving retail and digital commerce surface that combines wholesale sourcing, modern storefront UX, and SEO-driven product discoverability.",
        ],
      },
    ],
  },

  electronics: {
    title: "⚡ Electronics",
    hero: "https://jamesavakian.netlify.app/images/electronics-corvette.png",
    sections: [
      {
        heading: "Consumer Electronics",
        paragraphs: [
          "Explore the latest in consumer electronics technology, from smartphones to smart home devices. Focus is on quality products that enhance everyday life through innovative design and cutting-edge technology.",
        ],
      },
      {
        heading: "Audio Equipment",
        paragraphs: [
          "High-fidelity audio systems, professional-grade speakers, headphones, and amplifiers. Coverage spans home theater setups to portable audio solutions for music enthusiasts.",
        ],
      },
      {
        heading: "Computing Hardware",
        paragraphs: [
          "From powerful workstations to efficient laptops, the hardware that powers modern software development. Graphics cards, processors, storage solutions, and peripherals that enhance productivity.",
        ],
      },
      {
        heading: "Musical Instruments & Gear",
        paragraphs: [
          "Electronic musical instruments including synthesizers, digital audio workstations, and recording equipment. See the dedicated Musical Instruments page for video demonstrations.",
        ],
      },
    ],
  },

  "music-instruments": {
    title: "🎸 Musical Instruments",
    subtitle: "The greatest guitars, bass, drums, and synthesizers.",
    hero: "/guit.png",
    heroSize: "half",
    youtube: {
      id: "2jQYOHZrxQQ",
      title: "Featured musical instruments video",
    },
    sections: [
      {
        heading: "Roland Integra-7",
        paragraphs: [
          "Professional sound module with SuperNATURAL synth engine.",
        ],
      },
      { heading: "Roland Drums", paragraphs: ["Electronic drum kit performance."] },
      {
        heading: "Fender Jazz Bass with Six Speaker Amp",
        paragraphs: ["Classic bass guitar with powerful amplification."],
      },
      {
        heading: "Fender Jazz Bass Performance",
        paragraphs: ["Additional bass guitar showcase."],
      },
      {
        heading: "Gibson Les Paul Special",
        paragraphs: ["Legendary electric guitar with classic tone."],
      },
    ],
  },

  music: {
    title: "🎵 Music",
    subtitle: "Performances and recordings I keep coming back to.",
    sections: [
      {
        heading: "Featured Short",
        youtube: {
          id: "kpzTMIxbNRs",
          title: "Featured Short",
        },
      },
      {
        heading: "Featured Set",
        youtube: {
          id: "gWmECLnMKGk",
          title: "Featured Set",
        },
      },
      {
        paragraphs: [
          "Music has been part of my life since the Ludwig drum kit days. A rotating set of clips below — solo recordings of my own and tracks from the bands that shaped how I hear rhythm and arrangement.",
        ],
      },
      {
        heading: "Clarinet Performance",
        paragraphs: [
          "A solo clarinet performance recorded in a small studio room flanked by two horse-themed watercolor prints. Quiet, focused playing with a warm tone and clean phrasing.",
        ],
        gallery: [
          {
            src: "/images/music/clarinet-performance.jpg",
            alt: "Clarinet solo performance — studio with watercolor horse prints",
          },
        ],
        youtube: {
          id: "9bypncc9ZHU",
          title: "Clarinet Performance",
        },
      },
      {
        heading: "Jethro Tull",
        paragraphs: [
          "Ian Anderson and Jethro Tull — a band that shaped my taste for theatrical, layered rock arrangements with acoustic guitar at the center.",
        ],
        gallery: [
          {
            src: "/images/music/jethro-tull.jpg",
            alt: "Ian Anderson on stage with acoustic guitar — Jethro Tull",
          },
        ],
        youtube: {
          id: "hFYOcOBPkzg",
          title: "Jethro Tull",
        },
      },
      {
        heading: "Billy Cobham — Spectrum",
        paragraphs: [
          "Billy Cobham's Spectrum is the record that taught me what fusion drumming could be. Cobham was one of my earliest heroes alongside John McLaughlin and the Mahavishnu Orchestra.",
        ],
        gallery: [
          {
            src: "/images/music/billy-cobham-spectrum.jpg",
            alt: "Billy Cobham — Spectrum album cover",
          },
        ],
        youtube: {
          id: "ptsgQ1uYqkA",
          title: "Billy Cobham — Spectrum",
        },
      },
      {
        heading: "King Crimson — Lizard",
        paragraphs: [
          "King Crimson's Lizard — illuminated-manuscript cover art and writing that still feels ahead of its time. Side B's title suite remains one of the most ambitious pieces in the prog catalogue.",
        ],
        gallery: [
          {
            src: "/images/music/king-crimson-lizard.jpg",
            alt: "King Crimson — Lizard album track listing and cover",
          },
        ],
        youtube: {
          id: "Zx4FOsyetMs",
          title: "King Crimson — Lizard",
        },
      },
    ],
  },

  jblze: {
    title: "🎶 Jason Bonham's Led Zeppelin Evening (JBLZE)",
    subtitle:
      "Celebrating 50 Years of Physical Graffiti — American Tour 2026",
    hero: "/image-15.png",
    heroSize: "half",
    sections: [
      {
        heading: "Featured Date",
        paragraphs: [
          "MAY 23 — Los Angeles, CA · The Greek Theatre, 7:30 PM. Jason Bonham's Led Zeppelin Evening returns to LA on a multi-month North American run, performing Physical Graffiti in full alongside the rest of the Zeppelin catalog.",
        ],
      },
      {
        heading: "About JBLZE",
        paragraphs: [
          "Drummer Jason Bonham — son of the late Led Zeppelin drummer John Bonham — leads the JBLZE band through a career-spanning live experience. The 2026 American tour celebrates the 50th anniversary of Physical Graffiti, with the album played in full plus a deep set of Led Zeppelin classics.",
        ],
      },
      {
        heading: "Selected 2026 Tour Dates",
        bullets: [
          "May 19 — Saratoga, CA · The Mountain Winery",
          "May 21 — San Diego, CA · Humphrey's Concerts by the Bay",
          "May 22 — Las Vegas, NV · Pearl Concert Theater",
          "May 23 — Los Angeles, CA · The Greek Theatre",
          "May 24 — Highland, CA · Yaamava' Resort",
          "May 27 — Fort Worth, TX · Will Rogers Auditorium",
          "May 29 — Shreveport, LA · Shreveport Municipal Auditorium",
          "May 30 — Baton Rouge, LA · L'Auberge Casino and Hotel",
          "May 31 — Birmingham, AL · Avondale Brewing Company",
          "June 2 — Knoxville, TN · Tennessee Theatre",
          "June 3 — Greenville, SC · Peace Center",
          "June 5 — Columbus, OH · Mershon Auditorium",
          "June 6 — Charles Town, WV · The Event Center at Hollywood Casino",
          "June 7 — Hershey, PA · Hershey Theatre",
          "August 13 — Pocatello, ID · Portneuf Health Trust Amphitheatre",
          "August 15 — Shelton, WA · Little Creek Casino Resort",
          "August 16 — Vancouver, BC · Orpheum Theatre",
          "August 18 — Salem, OR · Elsinore Theatre",
          "August 20 — Fresno, CA · Warnors Theatre",
          "August 21 — Paso Robles, CA · Vina Robles Amphitheatre",
        ],
      },
      {
        heading: "Tickets & Info",
        paragraphs: [
          "Official tour site: https://www.jasonbonhamtour.com — tickets are sold via Ticketmaster and the individual venue box offices. The Greek Theatre date is presented by Nederlander Concerts; admission is restricted to ages 5 and up.",
        ],
      },
      {
        heading: "Merchandise",
        paragraphs: [
          "Hoodies and tees from the JBLZE 2025 World Tour and the Celebrating 50 Years of Physical Graffiti Fall 2025 run. Drop product images into /public/images/jblze/ to populate the gallery below.",
        ],
        gallery: [
          { src: "/images/jblze/merch-hoodie-1.png", alt: "JBLZE hoodie — Bonham silhouette" },
          { src: "/images/jblze/merch-hoodie-2.png", alt: "JBLZE hoodie — Physical Graffiti building" },
          { src: "/images/jblze/merch-tee-tour.png", alt: "JBLZE 2025 World Tour tee" },
          { src: "/images/jblze/merch-tee-traveler.png", alt: "Traveler of Both Time & Space tee" },
          { src: "/images/jblze/merch-tee-zoso.png", alt: "Zoso art tee" },
          { src: "/images/jblze/merch-tee-tiedye.png", alt: "JBLZE tie-dye tee" },
          { src: "/images/jblze/merch-tee-fall2025.png", alt: "Fall 2025 tour tee" },
          { src: "/images/jblze/merch-tee-poster.png", alt: "JBLZE poster tee" },
        ],
      },
    ],
  },

  "cool-jimmy": {
    title: "🏎️ Cool Jimmy",
    subtitle:
      "Corvettes, the C8 Z06, and the long road from a Hughes paycheck to the ZR1X dream.",
    hero: "/CoolJimmy.png",
    heroSize: "third",
    sections: [
      {
        heading: "How He Got A #5 QUAL",
        paragraphs: [
          "Cool Jimmy is the alter ego behind the Corvette obsession — the place where my software life and the Chevrolet performance car world meet. From the early Stingray I bought after Hughes Aircraft, to following every release through the C8 generation, the love of the lines, the engineering, and the culture has never let up.",
          "This page is the home for Corvette stories, photos, and links to the My Corvette Series of domains: MyZR1.com, MyZR1X, GrandSport, GrandSportX, MyZ06, and MyStingray (www.my-stingray.com).",
        ],
      },
      {
        heading: "Featured Coverage",
        paragraphs: [
          "Brink of Speed — \"He Took Delivery of a Corvette MOST Won't EVER See in Person.\" A walk-around of an exceptionally rare C8 Z06 build, framed by the #5 QUAL story. Watch on YouTube and follow the Brink of Speed channel for more delivery and review videos.",
        ],
        // Search-based embed: top Brink of Speed result for the #5 QUAL ZR1X
        // Quail walk-around plays automatically. Pin a specific video by
        // replacing `query` with `id: "<videoId>"`.
        youtube: {
          query: "Brink of Speed Corvette ZR1X Quail #5 silver",
          title:
            "Brink of Speed — He Took Delivery of a Corvette MOST Won't EVER See",
        },
      },
      {
        heading: "My Corvette Series Domains",
        bullets: [
          "MyZR1.com — flagship ZR1 / ZR1X site",
          "MyZR1X.com — pre-release sample of the next-gen ZR1X site",
          "GrandSport.com / GrandSportX.com — Grand Sport coverage",
          "MyZ06.com — Z06 builds, deliveries, and ownership",
          "My-Stingray.com — Stingray history and current generation",
          "TheCorvetteReporter.com — news, opinions, and editorial",
        ],
      },
      {
        heading: "Stack",
        paragraphs: [
          "Each Corvette site is built on Next.js + MongoDB with Clerk authentication and SEO-optimized via JSON, JSON-LD, and per-page metatags covering title, description, and purpose. Agent-assisted development pipelines keep them shipping fast.",
        ],
      },
    ],
  },

  headlines: {
    title: "📰 Headlines",
    subtitle:
      "Happening now in tech, hardware, and the people moving them forward.",
    sections: [
      {
        heading: "Apple — MacBook Ultra with M6 Ultra Confirmed",
        paragraphs: [
          "Apple has a confirmed update: the MacBook is moving toward an Ultra-class chip in a portable laptop. The forthcoming MacBook Ultra is expected to ship with an Apple-designed M6 Ultra processor, bringing desktop-tier silicon into a notebook footprint for the first time.",
          "The headline change is performance density. Pulling the M-series Ultra package into a MacBook means the workloads that traditionally required a Mac Studio or Mac Pro — large-model machine learning, multi-stream 8K editing, complex 3D and CAD scenes — become viable on a battery-powered, take-anywhere machine. Combined with Apple's unified memory architecture, that translates into very fast model load times and high sustained throughput in pro creative apps.",
          "Watch for confirmed launch pricing, configurations, thermal envelope, and battery life numbers as Apple publishes the official launch date. From a developer standpoint, agentic workflows, on-device AI, and local Next.js / SwiftUI build pipelines all benefit directly from this kind of step change in portable compute.",
        ],
        gallery: [
          {
            src: "/images/headlines/macbook-ultra-m6.jpg",
            alt: "MacBook Ultra launch date — M6 processor",
          },
        ],
      },
    ],
  },

  sitemap: {
    title: "🗺️ Site Map",
    subtitle: "Every page on this site, organized by section.",
    sections: [
      {
        heading: "Home",
        bullets: [
          "Dashboard — /",
          "Introduction — /intro",
        ],
      },
      {
        heading: "About",
        bullets: [
          "About Me — /site/about",
          "Background — /site/background",
          "Cool Jimmy — /site/cool-jimmy",
          "Things I Like — /site/like",
          "Photos — /site/photos",
          "Contact — /site/contact",
          "Site Map — /site/sitemap",
        ],
      },
      {
        heading: "Work",
        bullets: [
          "Portfolio — /site/portfolio",
          "Products — /site/products",
          "Software — /site/technology",
          "eCommerce — /site/ecommerce",
          "Electronics — /site/electronics",
          "Future Vision — /site/future",
        ],
      },
      {
        heading: "Media",
        bullets: [
          "Music — /site/music",
          "JBLZE — Jason Bonham — /site/jblze",
          "Musical Instruments — /site/music-instruments",
          "Videos — /site/videos",
          "Videos 2 — /site/videos2",
          "Jokes — /site/jokes",
        ],
      },
      {
        heading: "Resources",
        bullets: [
          "Documents — /site/documents",
          "Headlines — /site/headlines",
          "Dislikes — /site/dislikes",
          "Future — /site/future",
        ],
      },
      {
        heading: "Demo / TailAdmin",
        bullets: [
          "Calendar — /calendar",
          "Profile — /profile",
          "Form Elements — /forms/form-elements",
          "Form Layout — /forms/form-layout",
          "Tables — /tables",
          "Contact Me (Settings) — /settings",
          "Chart — /chart",
          "UI Alerts — /ui/alerts",
          "UI Buttons — /ui/buttons",
          "Sign In — /auth/signin",
          "Sign Up — /auth/signup",
        ],
      },
      {
        heading: "Legal (external — Optical Automation)",
        bullets: [
          "Terms of Use — opticalautomation.com/terms-of-use",
          "Privacy Policy — opticalautomation.com/privacy-policy",
          "Content Policy — opticalautomation.com/content-policy",
          "Cookie Policy — opticalautomation.com/cookie-policy",
        ],
      },
    ],
  },

  jokes: {
    title: "😄 Tech Jokes & Humor",
    subtitle: "A little humor to brighten your day.",
    sections: [
      {
        bullets: [
          "Why do programmers prefer dark mode? Because light attracts bugs!",
          "Why do Java developers wear glasses? Because they can't C#!",
          "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
          "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!",
          "How many programmers does it take to change a light bulb? None. It's a hardware problem!",
          "Why do programmers always mix up Halloween and Christmas? Because Oct 31 = Dec 25!",
          "What's a programmer's favorite hangout place? Foo Bar!",
          "Why did the developer go broke? Because he used up all his cache!",
          "What do you call a computer that sings? A-Dell!",
          "Why do Python programmers have low self-esteem? They're constantly comparing themselves to others!",
        ],
      },
    ],
  },

  like: {
    title: "Things I Like",
    hero: "/vette.png",
    sections: [
      {
        heading: "People & Connection",
        paragraphs: [
          "I'm energized by people who carry confidence, warmth, and a sense of fun. I'm especially drawn to women with personality and presence — the kind who know who they are, laugh easily, and bring a spark into any moment. I appreciate authenticity, good conversation, and the kind of chemistry that makes time feel lighter.",
        ],
      },
      {
        heading: "Cars, Corvettes & Automotive Culture",
        paragraphs: [
          "I've always had a deep appreciation for cars, especially Corvettes — the lines, the engineering, the history, the attitude. I enjoy the culture around them: weekend drives, car meets, design evolution, and the way performance machines blend art with mechanics. There's something grounding about a well-built engine and a clean, purposeful design.",
        ],
      },
      {
        heading: "The Internet, Tech & Curiosity",
        paragraphs: [
          "I like the endless discovery the internet offers — tools, ideas, communities, and the constant evolution of how we build and connect. It's a space where curiosity turns into knowledge and knowledge turns into systems. I enjoy exploring new platforms, experimenting with tech, and following the threads that lead to unexpected insights.",
        ],
      },
      {
        heading: "Work, Craft & Building Things",
        paragraphs: [
          "I genuinely like the work I do. There's satisfaction in architecting systems, refining ideas, and building things that scale. I enjoy the rhythm of engineering — clean code, modular design, and the feeling of shipping something that's both elegant and functional. Work becomes enjoyable when it's purposeful, creative, and technically sharp.",
        ],
      },
      {
        heading: "The Beach, Sun & Being Outside",
        paragraphs: [
          "The beach is one of my favorite resets — sun, sand, ocean air, and the simplicity of being outside. I like the balance it brings: a place to think, unwind, or just enjoy the moment. There's something about the coastline that clears the mind and makes everything feel a little more open.",
        ],
      },
    ],
  },

  dislikes: {
    title: "👎 Dislikes",
    subtitle: "Things I'd happily live without.",
    sections: [
      {
        paragraphs: [
          "Placeholder — content coming soon. The matching page on jamesavakian.com lists pet peeves and counterpoint to the Things I Like list.",
        ],
      },
    ],
  },

  videos: {
    title: "🎬 Videos",
    subtitle:
      "Curated favorites — performances and recordings I keep going back to.",
    sections: [
      {
        heading: "Mahavishnu Orchestra — Birds of Fire",
        paragraphs: [
          "John McLaughlin, Billy Cobham, Jan Hammer, Jerry Goodman, Rick Laird. Title track from the 1973 album.",
        ],
        youtube: { id: "BO5UMK0_LrU", title: "Mahavishnu Orchestra — Birds of Fire" },
      },
      {
        heading: "Yes — Roundabout (Live)",
        paragraphs: [
          "From the 1972 era. Squire, Howe, Wakeman, Anderson, Bruford in full flight.",
        ],
        youtube: { id: "CLFBrhPiCEo", title: "Yes — Roundabout" },
      },
      {
        heading: "Emerson, Lake & Palmer — Lucky Man",
        paragraphs: [
          "The Greg Lake ballad with one of the earliest Moog solos in rock.",
        ],
        youtube: { id: "wOQGuq4_VJk", title: "ELP — Lucky Man" },
      },
      {
        heading: "King Crimson — 21st Century Schizoid Man",
        paragraphs: [
          "The opening salvo from In the Court of the Crimson King — still bracing decades later.",
        ],
        youtube: { id: "B5KU8XZ8tfY", title: "King Crimson — 21st Century Schizoid Man" },
      },
      {
        heading: "Led Zeppelin — Kashmir (Live)",
        paragraphs: [
          "The Physical Graffiti centerpiece — the perfect bridge to the JBLZE tour page.",
        ],
        youtube: { id: "co6WMzDOh1o", title: "Led Zeppelin — Kashmir" },
      },
    ],
  },

  videos2: {
    title: "🎬 Videos 2",
    subtitle:
      "A second set of favorites — engineering, design, and the road ahead.",
    sections: [
      {
        heading: "Corvette ZR1X — Quail Silver Limited Edition",
        paragraphs: [
          "Brink of Speed walks around the matte-silver ZR1X Quail Edition.",
        ],
        youtube: {
          query: "Brink of Speed Corvette ZR1X Quail Silver",
          title: "Corvette ZR1X Quail Silver",
        },
      },
      {
        heading: "Apple — MacBook Ultra (M6) Concept",
        paragraphs: [
          "Concept and analysis coverage of the rumored M6 Ultra MacBook.",
        ],
        youtube: {
          query: "Apple MacBook M6 Ultra concept launch",
          title: "Apple MacBook M6 Ultra",
        },
      },
      {
        heading: "Next.js — App Router Deep Dive",
        paragraphs: [
          "The framework powering Optical Automation's site delivery — server components, streaming, metadata.",
        ],
        youtube: {
          query: "Next.js app router deep dive",
          title: "Next.js App Router",
        },
      },
      {
        heading: "SwiftUI — Modern iOS App Architecture",
        paragraphs: [
          "How SwiftUI is shaping mobile app builds across iPhone, iPad, and Watch.",
        ],
        youtube: {
          query: "SwiftUI modern app architecture WWDC",
          title: "SwiftUI Architecture",
        },
      },
      {
        heading: "Cursor 2.0 — Agentic Coding Workflow",
        paragraphs: [
          "AI-assisted Visual Studio Code workflow used to ship Optical Automation projects.",
        ],
        youtube: {
          query: "Cursor 2.0 agentic coding workflow",
          title: "Cursor 2.0 Workflow",
        },
      },
    ],
  },

  documents: {
    title: "📄 Documents",
    subtitle: "Reference docs, specs, and write-ups.",
    sections: [
      {
        paragraphs: [
          "Placeholder — content coming soon. PDFs and write-ups will be linked here.",
        ],
      },
    ],
  },

  photos: {
    title: "📷 Photo Gallery",
    subtitle: "Cars, motorcycles, wildlife, and nature.",
    sections: [
      {
        paragraphs: [
          "A rolling collection of personal photography spanning Corvettes, motocross, jaguars, eagles, and more. Click any image to open it in a new tab. Tiles whose images aren't yet uploaded are hidden automatically.",
        ],
      },
      {
        heading: "Cars & Motorcycles",
        gallery: [
          {
            src: "/image-1.png",
            alt: "Cars & Motorcycles — image 1",
          },
          {
            src: "/image-2.png",
            alt: "Cars & Motorcycles — image 2",
          },
          {
            src: "/image-3.png",
            alt: "Cars & Motorcycles — image 3",
          },
          {
            src: "/images/photos/zr1x-red-stripes-top.jpg",
            alt: "Black ZR1X with red dual stripes — top-down view",
          },
          {
            src: "/images/photos/corvette-concept-rear.jpg",
            alt: "Silver Corvette concept — rear quarter on wet pavement",
          },
          {
            src: "/images/photos/corvette-c8-red-gold-wheels.jpg",
            alt: "Red C8 with gold wheels at a Michelin / Mobil show",
          },
          {
            src: "/images/photos/corvette-eray-configurator.jpg",
            alt: "Corvette E-Ray configurator — white convertible with blue stripes",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-1.png",
            alt: "Corvettes at the drag strip",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-2.png",
            alt: "Motocross jump",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-3.png",
            alt: "Motorcycle flip",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-4.png",
            alt: "Paragon Performance",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-5.png",
            alt: "Orange Corvette C8",
          },
        ],
      },
      {
        heading: "Wildlife & Nature",
        gallery: [
          {
            src: "/image-10.png",
            alt: "Wildlife & Nature — image 10",
          },
          {
            src: "/image-11.png",
            alt: "Wildlife & Nature — image 11",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-6.jpg",
            alt: "Jaguar in stream",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-7.jpg",
            alt: "Firefighter in action",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-8.jpg",
            alt: "Man with jaguar",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-9.png",
            alt: "Eagle in flight",
          },
          {
            src: "https://jamesavakian.netlify.app/images/photos-10.png",
            alt: "Cheetahs and porcupine",
          },
        ],
      },
    ],
  },

  future: {
    title: "Future Vision",
    subtitle: "California Coastline — where vision meets possibility.",
    hero: "https://jamesavakian.netlify.app/images/california-beach.png",
    heroSize: "half",
    sections: [
      {
        heading: "1. Financial Gains Through Tax Lien Real Estate",
        paragraphs: [
          "Tax lien real estate investing offers a powerful path to high-yield returns by leveraging state-regulated interest rates that can range from moderate to exceptionally strong depending on the jurisdiction. By targeting states with favorable redemption penalties and competitive bidding structures, it's possible to consistently achieve returns in the 20–30% range while maintaining a relatively low barrier to entry. This approach builds long-term wealth through a combination of interest income, potential property acquisition, and compounding reinvestment.",
        ],
      },
      {
        heading: "2. Software Development and Mobile App Expansion",
        paragraphs: [
          "Strategy centers on creating high-value, cross-platform mobile applications for iPhone, iPad, Android phones, and Android tablets, supported by a strong web presence and metadata-driven architecture. Engineering expertise in Next.js, TailwindCSS, MongoDB, and agentic AI systems ensures each product is scalable, maintainable, and future-proof. This creates a sustainable revenue stream built on downloads, subscriptions, and long-term customer engagement.",
        ],
      },
      {
        heading: "3. eCommerce Retail Sales Using Wholesale Imports",
        paragraphs: [
          "Leverages global sourcing by purchasing high-demand products from China at wholesale prices and reselling them through a modern online storefront. Combining competitive pricing with professional product images, clear descriptions, and secure payment processing creates a retail environment that attracts everyday consumers looking for value and convenience.",
        ],
      },
    ],
  },
};

export default siteContent;
