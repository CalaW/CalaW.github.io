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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
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
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
