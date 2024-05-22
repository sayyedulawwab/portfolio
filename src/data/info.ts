export const info = {
  baseUrl: 'https://sayyedulawwab.netlify.app/',
  name: 'Muhammad Sayyedul Awwab',
  role: 'Software Engineer',
  about: `
    Driven Software Engineer with ${parseFloat(((new Date().getTime() - new Date('2022-09-07').getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1))} years of hands-on experience at Bdjobs, contributing to the migration of legacy systems to cutting-edge technologies. Played a pivotal role in the successful migration of the Job Posting system to ASP.NET Core Web API playing a pivotal role in developing the backend within a collaborative team environment. Eager to excel in the software engineering track, my career ambitions include evolving into a seasoned software architect. Passionate about staying at the forefront of technology trends, I'm dedicated to making impactful contributions to the field. Whether you're seeking a skilled professional for software engineering services or looking to enhance your team with someone committed to continuous learning and innovation, let's connect. I'm excited to explore how my expertise aligns with your unique needs and contribute to the success of your projects.
    `,

  experience: [
    {
      name: 'Bdjobs.com Limited',
      location: 'Dhaka, Banglades',
      startDate: 'Sep 2022',
      endDate: 'Present',
      description: [
        '- Developing screens and UI components for the web application using React and Tailwind.',
        '- Fixing UI issues and integrating backend APIs with Redux Saga.',
      ],
    },
  ],

  education: [
    {
      name: 'Pakistan Institute of Professional Science & Technology (PIPS-TECH)',
      location: 'Karāchi, Sindh, Pakistan',
      startDate: '2019',
      endDate: '2022',
      description: [
        'Diploma of Associate Engineering,  Computer Information Technology (CIT)',
      ],
    },
  ],

  socialMedia: {
    github: {
      url: 'https://github.com/sayyedulawwab',
      logo: '/assets/images/logo-github.svg',
    },
    email: {
      url: 'mailto:sayyedulawwab@gmail.com',
      logo: '/assets/images/envelope-regular.svg',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/sayyedulawwab/',
      logo: '/assets/images/linkedin-brands.svg',
    },
  },

  skills: {
    languages: [
      {
        title: 'C#',
        logo: '/assets/images/logo-csharp.svg',
      },
      {
        title: 'JavaScript',
        logo: '/assets/images/logo-javascript.svg',
      },
      // {
      //   title: 'Python',
      //   logo: '/assets/images/logo-python.svg',
      // },
      // {
      //   title: 'HTML',
      //   logo: '/assets/images/logo-html.svg',
      // },
      // {
      //   title: 'CSS',
      //   logo: '/assets/images/logo-css.svg',
      // },
    ],
    frameworks: [
      {
        title: 'ASP.NET Core',
        logo: '/assets/images/logo-dotnetcore.svg',
      },
      // {
      //   title: 'NodeJS',
      //   logo: '/assets/images/logo-nodejs.svg',
      // },
      {
        title: 'React',
        logo: '/assets/images/logo-react.svg',
      },
      {
        title: 'Tailwind',
        logo: '/assets/images/logo-tailwind.svg',
      },
    ],
    tools: [
      {
        title: 'Git',
        logo: '/assets/images/logo-git.svg',
      },
      {
        title: 'GitHub',
        logo: '/assets/images/logo-github.svg',
      },
      {
        title: 'Visual Studio',
        logo: '/assets/images/logo-vs.svg',
      },
      {
        title: 'Visual Studio Code',
        logo: '/assets/images/logo-vscode.svg',
      },
    ],
  },

  projects: [
    {
      title: 'Ecommerce API',
      description: `Ecommerce API for managing products, categories, user authentication, reviews, and orders seamlessly within an ecommerce platform.`,
      thumbnail:
        'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      liveUrl: '',
      githubUrl:
        'https://github.com/sayyedulawwab/EcommerceApp/tree/clean-architecture-v1',
      built_with: [
        'ASP.NET Core Web API',
        'Clean Architecture',
        'Domain Driven Design (DDD)',
        'CQRS with Mediator Pattern',
        'Repository Pattern',
        'Redis',
        'Docker',
      ],
    },
    {
      title: 'Job Posting System of Bdjobs.com',
      description:
        'Contributed to the migration of The Job Posting system of Bdjobs.com Employer panel from legacy system to ASP.NET Core and Angular. built the API using ASP.NET Core following layered architecture in a team setting.',
      thumbnail: '/assets/images/recruiter-bdjobs-jobposting.png',
      liveUrl: 'https://recruiter.bdjobs.com/jobposting/job-information',
      built_with: [
        'ASP.NET Core Web API',
        'Layered Architecture',
        'Repository Pattern',
      ],
    },
    // {
    //   title: 'MERN Shop',
    //   thumbnail:
    //     'https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    //   liveUrl: '',
    //   githubUrl: 'https://github.com/sayyedulawwab/mern-shop',
    //   built_with: ['React', 'Node', 'Express', 'MongoDB'],
    // },
    // {
    //   title: 'Covid 19 Tracker',
    //   thumbnail:
    //     'https://raw.githubusercontent.com/sayyedulawwab/covid-19-tracker/main/covid-19-tracker.png',
    //     liveUrl: 'https://covid-19-tracker-7b7422.netlify.app/',
    //     githubUrl: 'https://github.com/sayyedulawwab/covid-19-tracker',
    //   built_with: [
    //     'React',
    //     'disease.sh - Open Disease Data API',
    //     'Deployed using Netlify',
    //   ],
    // },
    // {
    //   title: 'Netflix Clone',
    //   thumbnail:
    //     'https://raw.githubusercontent.com/sayyedulawwab/netflix-front-clone/main/netflix-front-clone.png',
    //     liveUrl: 'https://netflix-front-clone.web.app/',
    //   githubUrl: 'https://github.com/sayyedulawwab/netflix-front-clone',
    //   built_with: [
    //     'React',
    //     'The Movie Database (TMDB) API',
    //     'Deployed using Firebase',
    //   ],
    // },
    // {
    //   title: 'Weatherio',
    //   thumbnail:
    //     'https://raw.githubusercontent.com/sayyedulawwab/weatherio/main/weatherio.png',
    //     liveUrl: 'https://weatherio-76a5a8.netlify.app/',
    //   githubUrl: 'https://github.com/sayyedulawwab/weatherio',
    //   built_with: ['React', 'OpenWeather API', 'Deployed using Netlify'],
    // },
    // {
    //   title: 'Checkout page',
    //   thumbnail:
    //     'https://raw.githubusercontent.com/sayyedulawwab/checkout-page/main/checkout-page-desktop.png',
    //     liveUrl: 'https://epic-villani-dd2a49.netlify.app/',
    //   githubUrl: 'https://github.com/sayyedulawwab/checkout-page',
    //   built_with: ['HTML', 'CSS', 'JavaScript'],
    // },
    // {
    //   title: 'Recipe page',
    //   // thumbnail: 'https://raw.githubusercontent.com/sayyedulawwab/recipe-page/main/recipe-blog-desktop.png',
    //   thumbnail: '/assets/images/recipe-blog-desktop.png',
    //   liveUrl: 'https://hardcore-morse-56bb64.netlify.app/',
    //   githubUrl: 'https://github.com/sayyedulawwab/recipe-page',
    //   built_with: ['HTML', 'CSS'],
    // },
    // {
    //   title: 'My Team page',
    //   thumbnail:
    //     'https://raw.githubusercontent.com/sayyedulawwab/my-team-page/main/my-team-page-desktop.png',
    //   liveUrl: 'https://peaceful-leavitt-0e6de1.netlify.app/',
    //   githubUrl: 'https://github.com/sayyedulawwab/my-team-page',
    //   built_with: ['HTML', 'CSS'],
    // },
    // {
    //   title: 'My Gallery',
    //   thumbnail:
    //     'https://raw.githubusercontent.com/sayyedulawwab/my-gallery/main/my-gallery-desktop.png',
    //   liveUrl: 'https://lucid-swanson-8a784c.netlify.app/',
    //   githubUrl: 'https://github.com/sayyedulawwab/my-gallery',
    //   built_with: ['HTML', 'CSS'],
    // },
    // {
    //   title: 'Interior Consultant',
    //   // thumbnail: 'https://raw.githubusercontent.com/sayyedulawwab/interior-consultant/main/interior-consultant-desktop.png',
    //   thumbnail: '/assets/images/interior-consultant-desktop.png',
    //   liveUrl: 'https://awesome-jang-98c7ed.netlify.app/',
    //   githubUrl: 'https://github.com/sayyedulawwab/interior-consultant',
    //   built_with: ['HTML', 'CSS'],
    // },
    // {
    //   title: 'Edie Homepage',
    //   // thumbnail: 'https://raw.githubusercontent.com/sayyedulawwab/edie-homepage/main/edie-desktop.png',
    //   thumbnail: '/assets/images/edie-desktop.png',
    //   liveUrl: 'https://keen-shaw-b09835.netlify.app/',
    //   githubUrl: 'https://github.com/sayyedulawwab/edie-homepage',
    //   built_with: ['HTML', 'CSS'],
    // },
    // {
    //   title: '404 NOT FOUND',
    //   thumbnail:
    //     'https://raw.githubusercontent.com/sayyedulawwab/404-not-found/main/404-desktop.png',
    //   liveUrl: 'https://flamboyant-jepsen-af0878.netlify.app/',
    //   githubUrl: 'https://github.com/sayyedulawwab/404-not-found',
    //   built_with: ['HTML', 'CSS'],
    // },
  ],
};
