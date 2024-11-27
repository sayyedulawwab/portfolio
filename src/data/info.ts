export const info = {
  baseUrl: 'https://sayyedulawwab.netlify.app/',
  name: 'Muhammad Sayyedul Awwab',
  headline: 'Software Engineer | .NET Core | Aspiring Software Architect',
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

  projects: [
    {
      title: 'E-commerce Microservices',
      description: `E-commerce Microservices with Catalog, Identity, Ordering, Cart, Payment services using Clean Architecture, Domain Driven Design, CQRS, RabbitMQ message broker for Inter-service communication and Ocelot for API Gateway`,
      thumbnail:
        'https://raw.githubusercontent.com/sayyedulawwab/EcommerceMicroservices/refs/heads/main/EcommerceMicroservice.png',
      liveUrl: '',
      githubUrl: 'https://github.com/sayyedulawwab/EcommerceMicroservices',
      built_with: [
        'Clean Architecture',
        'Domain Driven Design (DDD)',
        'CQRS',
        'Microservices',
        'ASP.NET Core Web API',
        'RabbitMQ',
        'Redis',
        'Docker',
      ],
    },
    {
      title: 'Ecommerce API',
      description: `Ecommerce API for managing products, categories, user authentication, reviews, and orders seamlessly within an ecommerce platform.`,
      thumbnail:
        'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      liveUrl: '',
      githubUrl: 'https://github.com/sayyedulawwab/EcommerceApp',
      built_with: [
        'Clean Architecture',
        'Domain Driven Design (DDD)',
        'CQRS',
        'Repository Pattern',
        'ASP.NET Core Web API',
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
        'Layered Architecture',
        'Repository Pattern',
        'ASP.NET Core Web API',
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

  experience: [
    {
      position: 'Software Engineer',
      company: 'Echologyx Ltd.',
      location: 'Dhaka, Bangladesh',
      startDate: 'Oct 2024',
      endDate: 'Present',
      description: '',
    },
    {
      position: 'Junior Software Engineer',
      company: 'Bdjobs.com Limited',
      location: 'Dhaka, Bangladesh',
      startDate: 'Sep 2022',
      endDate: 'Sep 2024',
      description: '',
    },
  ],

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
        title: '.NET Core',
        logo: '/assets/images/logo-dotnetcore.svg',
      },
      {
        title: 'SQL Server',
        logo: '/assets/images/logo-sqlserver.svg',
      },
      // {
      //   title: 'PostgreSQL',
      //   logo: '/assets/images/logo-postgresql.svg',
      // },
      {
        title: 'MongoDB',
        logo: '/assets/images/logo-mongodb.svg',
      },
      {
        title: 'Redis',
        logo: '/assets/images/logo-redis.svg',
      },
      {
        title: 'Docker',
        logo: '/assets/images/logo-docker.svg',
      },
      // {
      //   title: 'NodeJS',
      //   logo: '/assets/images/logo-nodejs.svg',
      // },
      // {
      //   title: 'React',
      //   logo: '/assets/images/logo-react.svg',
      // },
      // {
      //   title: 'Tailwind',
      //   logo: '/assets/images/logo-tailwind.svg',
      // },
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
      // {
      //   title: 'Visual Studio',
      //   logo: '/assets/images/logo-vs.svg',
      // },
      // {
      //   title: 'Visual Studio Code',
      //   logo: '/assets/images/logo-vscode.svg',
      // },
    ],
  },

  recommendations: [
    {
      name: 'Mohammad Rafiqul Islam',
      headline: 'Head of Product @Bdjobs',
      avatar:
        'https://eu.ui-avatars.com/api/?name=Mohammad+Rafiqul+Islam&size=250',
      description: `"I have had the privilege of working with Muhammad Sayyedul Awwab @bdjobs, and I can confidently say he is an exceptional software engineer with a rare combination of technical expertise and business acumen.
      <br><br>
      Awwab is a professional software engineer who approaches every task with precision and dedication. He has an innate ability to understand product requirements thoroughly, ensuring the technical solutions he develops align seamlessly with business goals. His work consistently reflects a deep understanding of how to fulfill business objectives through the thoughtful application of cutting-edge technologies.
      <br><br>
      One of Awwab's greatest strengths is his adaptability. He stays ahead of the curve by quickly adopting new technologies, integrating them effectively into his work, and delivering innovative solutions that drive success. What truly stands out is Awwab’s dedication and passion for his craft. Whether it's collaborating with cross-functional teams, debugging complex issues, or delivering scalable and efficient systems, he brings his best to every project.
      <br><br>
      Awwab is not only a talented engineer but also a reliable and inspiring colleague. I wholeheartedly recommend him to any organization looking for a skilled, forward-thinking software engineer who consistently delivers results."`,
    },
    {
      name: 'Mizanur Rahman Hridu',
      headline: 'Jr. SDE @ TechnoNext, Ex Bdjobs.com Ltd',
      avatar:
        'https://eu.ui-avatars.com/api/?name=Mizanur+Rahman+Hridu&size=250',
      description: `"I had the pleasure of working closely with Muhammad Sayyedul Awwab and learned a great deal from him. He was instrumental in assisting me during my early days at bdjobs, providing invaluable support and guidance. Together, we collaborated on various projects, including the development of the Job postings system for bdjobs' employer site (recruiter.bdjobs.com) and numerous bug fixes. Additionally, we worked together on a personal Ecommerce project, implementing clean architecture principles. Muhammad is a remarkably positive, honest, and hardworking individual. His optimistic outlook and dedication to his work were truly inspiring. I highly recommend Muhammad for any endeavor he pursues."`,
    },
  ],
};
