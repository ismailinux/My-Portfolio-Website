export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Stanley Nnamani',
    position: 'Fullstack Software Engineer & AI Engineer',
    img: 'assets/review1.png',
    review:
      'Working with Ismail was a fantastic experience. He crafted the frontend of a savings and loans app I was building with a modern, sleek design. His attention to detail and dedication to quality are exceptional. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'David Ogbonda',
    position: 'Backend Engineer',
    img: 'assets/review2.png',
    review:
      'Working with Ismail was an outstanding experience. He developed the frontend of his EHR app, a personal project with a backend engineer friend, delivering a sleek, intuitive design. His creativity and commitment to excellence truly shine through. He’s a true professional! Fantastic work.',
  },
];

export const myProjects = [
  {
    title: 'AliExpress Clone - E-Commerce Web App',
    desc: 'AliExpress Clone is a dynamic e-commerce platform that reimagines online shopping with a seamless user experience. It ensures top performance for modern e-commerce needs.',
    subdesc:
      'Built as a Software-as-a-Service app with Vue.js, Nuxt.js, Tailwind CSS, Supabase, Prisma, and Stripe for secure payments, it offers scalability, product browsing, and efficient checkout.',
    href: 'https://aliexpress-clone-ismail.netlify.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vuejs.png',
      },
      {
        id: 2,
        name: 'Nuxt.js',
        path: '/assets/nuxtjs.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Supabase',
        path: '/assets/supabase-logo-icon.png',
      },
    ],
  },
  {
    title: 'Unsplash Clone - Photo Sharing Platform',
    desc: 'Unsplash Clone is a simple photo-viewing app that leverages the Unsplash API for image discovery. It offers a streamlined platform for users to explore stunning visuals effortlessly.',
    subdesc:
      'With Unsplash Clone, users browse captivating images seamlessly, powered by Vue, Nuxt, SCSS, and Axios for a responsive, API-driven design. It’s a straightforward project.',
    href: 'https://cowrywise-frontend-test2.netlify.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#F7F7F7',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vuejs.png',
      },
      {
        id: 2,
        name: 'Nuxt.js',
        path: '/assets/nuxtjs.png',
      },
      {
        id: 3,
        name: 'SCSS',
        path: '/assets/sass.png',
      },
      {
        id: 4,
        name: 'Axios',
        path: '/assets/axios.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Linux',
    level: 'Intermediate',
    duration: '2020 - Present',
    title: "As a passionate Linux hobbyist, I’ve delved into the system’s intricacies, experimenting with configurations and commands. Currently, I’m undergoing training to become a Linux System Administrator, honing my skills in system management, troubleshooting, and optimizing performance for robust development environments.",
    icon: '/assets/linux-logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Docker',
    level: 'Intermediate',
    duration: '2023 - present',
    title: "I utilize Docker as a key tool, focusing primarily on database management to create isolated, efficient environments. This approach allows me to streamline data handling, ensure consistency across setups, and enhance deployment workflows with a containerized approach.",
    icon: '/assets/docker-logo.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Jest',
    level: 'Beginner',
    duration: '2024 - present',
    title: "I’m actively learning Jest to master unit testing, exploring its capabilities to write and run tests that validate code functionality. This process is strengthening my ability to ensure code reliability and maintain high-quality standards in my development practice.",
    icon: '/assets/jest-logo.png',
    animation: 'salute',
  },
];
