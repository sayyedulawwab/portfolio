export const info = {
  baseUrl: 'https://sayyedulawwab.com/',
  name: 'Muhammad Sayyedul Awwab',
  headline:
    'Muhammad Sayyedul Awwab — Software Engineer | .NET Core | Talks about backend and software architecture',
  resume: {
    url: '/assets/documents/Muhammad-Sayyedul-Awwab.pdf',
    logo: '/assets/images/logo-download-resume.svg',
  },
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
    medium: {
      url: 'https://medium.com/@sayyedulawwab',
      logo: '/assets/images/monogram-medium.svg',
    },
  },

  projects: [
    {
      title: 'E-commerce Microservices',
      description: `E-commerce Microservices with Catalog, Identity, Ordering, Cart, Payment services using Clean Architecture, Domain Driven Design, CQRS, RabbitMQ message broker for Inter-service communication and Ocelot for API Gateway`,
      thumbnail: '/assets/images/EcommerceMicroservice.webp',
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
      title: 'Real time Chat Application with SignalR',
      description: `Designed and implemented backend service for a real-time chat application. Built a demo frontend client with React to integrate with backend. Implemented features like auth, room management (create or joining a room), conversation management (creating group or one-to-one chats). Developed one-to-one or group conversations using web sockets with SignalR.`,
      thumbnail: '/assets/images/RealtimeChat.jpg',
      liveUrl: '',
      githubUrl: 'https://github.com/sayyedulawwab/ChatService',
      built_with: [
        'Clean Architecture',
        'Domain Driven Design (DDD)',
        'CQRS',
        'ASP.NET Core Web API',
        'SignalR',
        'MS SQL Server',
        'MongoDB',
        'Redis',
        'Docker',
      ],
    },
    {
      title: 'Ecommerce API (Monolith)',
      description: `Ecommerce API for managing products, categories, user authentication, reviews, and orders seamlessly within an ecommerce platform.`,
      thumbnail: '/assets/images/EcommerceAPI.webp',
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
        'Contributed to the migration of The Job Posting system of Bdjobs.com Employer panel from legacy tech to ASP.NET Core and Angular. built the API using ASP.NET Core following Layered Architecture and Repository Pattern.',
      thumbnail: '/assets/images/recruiter-bdjobs-jobposting.webp',
      liveUrl: 'https://recruiter.bdjobs.com/jobposting/job-information',
      built_with: [
        'Layered Architecture',
        'Repository Pattern',
        'ASP.NET Core Web API',
      ],
    },
  ],

  experience: [
    {
      position: 'Senior Programmer',
      company: 'Epyllion Group',
      location: 'Dhaka, Bangladesh',
      startDate: 'July 2025',
      endDate: 'Present',
      description: '',
    },
    {
      position: 'Software Engineer',
      company: 'Echologyx Ltd. UK',
      location: 'Dhaka, Bangladesh',
      startDate: 'Oct 2024',
      endDate: 'July 2025',
      description: '',
    },
    {
      position: 'Junior Software Engineer',
      company: 'Bdjobs.com Ltd.',
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
      {
        title: 'Python',
        logo: '/assets/images/logo-python.svg',
      },
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
      {
        title: 'PostgreSQL',
        logo: '/assets/images/logo-postgresql.svg',
      },
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
      // {
      //   title: 'GitHub',
      //   logo: '/assets/images/logo-github.svg',
      // },
      {
        title: 'Azure DevOps',
        logo: '/assets/images/logo-azure.svg',
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
      name: 'Shoaib Shahriar',
      headline:
        'Senior .NET Backend Engineer | C#, ASP.NET Core, Microservices, REST APIs | Azure DevOps | TDD | Lead-Level Delivery Experience',
      avatar: '/assets/images/recommendation-mri.png',
      description: [
        `I first met Awwab during his interview, where his confidence and technical depth immediately stood out, especially given his two years of experience. In the technical test, he not only completed all mandatory tasks but also tackled the optional ones, quickly learning and implementing new concepts along the way. This demonstrated his dedication to development and his genuine aspiration to become a software architect. Since joining, Awwab has consistently impressed with his quick learning, strong debugging abilities, and exceptional problem-solving skills. I am confident he will be an invaluable asset to any team, and I strongly recommend him for future opportunities.`,
      ],
    },
    {
      name: 'Rafat Ahmad',
      headline:
        'Backend systems engineer owning distributed, high-risk business workflows | Tech Architect | Agile Practitioner | .NET Expert | Fullstack | Thinker | Continuous Learner',
      avatar: '/assets/images/recommendation-mri.png',
      description: [
        `I had the pleasure of working with Awwab, and it was truly a great experience. He is polite, easygoing, and a genuine talent with a strong eagerness to learn. His attention to detail and technical depth are highly impressive and very promising. I especially enjoyed our technical discussions, which were both insightful and engaging. I am confident that Awwab will go far in his pursuit of success.`,
      ],
    },
    {
      name: 'Mohammad Rafiqul Islam',
      headline: 'Head of Product @Bdjobs',
      avatar: '/assets/images/recommendation-mri.png',
      description: [
        `I have had the privilege of working with Muhammad Sayyedul Awwab @bdjobs, and I can confidently say he is an exceptional software engineer with a rare combination of technical expertise and business acumen.`,

        `Awwab is a professional software engineer who approaches every task with precision and dedication. He has an innate ability to understand product requirements thoroughly, ensuring the technical solutions he develops align seamlessly with business goals. His work consistently reflects a deep understanding of how to fulfill business objectives through the thoughtful application of cutting-edge technologies.`,

        `One of Awwab's greatest strengths is his adaptability. He stays ahead of the curve by quickly adopting new technologies, integrating them effectively into his work, and delivering innovative solutions that drive success. What truly stands out is Awwab’s dedication and passion for his craft. Whether it's collaborating with cross-functional teams, debugging complex issues, or delivering scalable and efficient systems, he brings his best to every project.`,

        `Awwab is not only a talented engineer but also a reliable and inspiring colleague. I wholeheartedly recommend him to any organization looking for a skilled, forward-thinking software engineer who consistently delivers results.`,
      ],
    },
    {
      name: 'Mizanur Rahman Hridu',
      headline: 'Jr. SDE @ TechnoNext, Ex Bdjobs.com Ltd',
      avatar: '/assets/images/recommendation-mrh.png',
      description: [
        `I had the pleasure of working closely with Muhammad Sayyedul Awwab and learned a great deal from him. He was instrumental in assisting me during my early days at bdjobs, providing invaluable support and guidance. Together, we collaborated on various projects, including the development of the Job postings system for bdjobs' employer site (recruiter.bdjobs.com) and numerous bug fixes.`,
        `Additionally, we worked together on a personal Ecommerce project, implementing clean architecture principles. Muhammad is a remarkably positive, honest, and hardworking individual. His optimistic outlook and dedication to his work were truly inspiring. I highly recommend Muhammad for any endeavor he pursues.`,
      ],
    },
  ],
};
