// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-adaptive-vision-based-control-of-redundant-robots-with-null-space-interaction-for-human-robot-collaboration-is-accepted-by-icra-2022",
          title: 'Our paper “Adaptive Vision-Based Control of Redundant Robots with Null-Space Interaction for Human-Robot...',
          description: "",
          section: "News",},{id: "news-i-received-china-national-scholarship-highest-scholarship-given-by-the-chinese-government-top-0-1",
          title: 'I received China National Scholarship. Highest scholarship given by the Chinese government, top...',
          description: "",
          section: "News",},{id: "news-graduated-from-tsinghua-university-purple-heart",
          title: 'Graduated from Tsinghua University :purple_heart:',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240629-grad/";
            },},{id: "projects-aruco-tracking-drone",
          title: 'Aruco tracking drone',
          description: "Course project for Contemporary Electronic System Design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Aruco_Tracking_Drone/";
            },},{id: "projects-jump-point-search",
          title: 'Jump Point Search',
          description: "Course project for artificial intelligence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Jump_Point_Search/";
            },},{id: "projects-marine-classification",
          title: 'Marine Classification',
          description: "Course project for artificial intelligence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Marine_Classification/";
            },},{id: "projects-mesh-simplification",
          title: 'Mesh Simplification',
          description: "Course project for data structure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Mesh_Simplification/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/65/4423-87", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65@%63%61%6C%61%77.%63%63", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/CalaW", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/辰-陈-b2a303203", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2588-7376", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WV7thfcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
