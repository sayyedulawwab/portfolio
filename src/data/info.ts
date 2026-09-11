/**
 * Single source of truth for the site.
 *
 * RULE: nothing goes in this file unless it is a fact Muhammad has stated.
 * No invented metrics, no invented reasoning, no technologies that have not
 * been established. If a section cannot be filled honestly, leave it empty —
 * the components hide empty sections rather than render filler.
 *
 * `source` marks where a capability comes from:
 *   'work'     — used in professional work
 *   'projects' — used in personal projects
 *   'writing'  — studied and written about publicly
 */

export const site = {
  url: 'https://sayyedulawwab.com',
  name: 'Muhammad Sayyedul Awwab',
  shortName: 'Muhammad Sayyedul Awwab',
  locale: 'en_US',
  analyticsId: import.meta.env.PUBLIC_GA_ID ?? '',
} as const;

export const info = {
  name: 'Muhammad Sayyedul Awwab',
  role: 'Backend Software Engineer',
  location: 'Dhaka, Bangladesh',
  careerStart: '2022-09-07',

  /** What I build. Broad by default; the domain is marked as history, not identity. */
  positioning:
    'I build backend systems — the APIs, the data models, and the logic underneath them. Most of my work so far has been business software, where the difficulty comes from the number of rules and exceptions rather than from traffic.',

  /** Direction. Widening the range of problems, and the longer-term architecture goal. */
  direction:
    'I want to keep widening that: systems where the pressure comes from scale and performance as much as from complexity. Longer term I am working toward software architecture — designing systems that stay reliable and maintainable as they grow, and guiding teams through those decisions.',

  /** The line that turns the page toward the reader. */
  invitation:
    'If you build systems too — whether you are starting out or years ahead of me — or you are hiring and this looks relevant, I would like to hear from you.',

  resume: {
    url: '/assets/documents/Muhammad-Sayyedul-Awwab.pdf',
  },

  socialMedia: {
    github: { label: 'GitHub', url: 'https://github.com/sayyedulawwab' },
    linkedin: {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sayyedulawwab/',
    },
    medium: { label: 'Medium', url: 'https://medium.com/@sayyedulawwab' },
    email: { label: 'Email', url: 'mailto:sayyedulawwab@gmail.com' },
  },

  experience: [
    {
      position: 'Senior Programmer',
      company: 'Epyllion Group',
      location: 'Dhaka, Bangladesh',
      startDate: '2025-07',
      endDate: 'Present',
      context:
        'An HRMS and enterprise business platform being built from the ground up by a small engineering team.',
      highlights: [
        'Backend engineering across modules covering employee profiles, permissions and authorization scopes, approval workflows, performance and KPI management, notifications, reporting, attendance, and payroll-related functionality.',
        'The difficulty here is business-rule complexity rather than raw traffic: enterprise rules that vary by department, hierarchy, role and document type, over operational data covering 25000+ employees.',
        'Built in .NET Core with Clean Architecture, CQRS, feature-oriented organisation, Result pattern, DDD, FluentValidation, and Dapper over SQL Server.',
        'Delivered through Azure DevOps and hosted on IIS.',
      ],
    },
    {
      position: 'Software Engineer',
      company: 'Echologyx Ltd.',
      location: 'Dhaka, Bangladesh',
      startDate: '2024-10',
      endDate: '2025-07',
      context: 'Distributed .NET Core systems built as microservices.',
      highlights: [
        'Worked on .NET Core microservices using CQRS, Clean Architecture and Repository patterns, with messaging between services.',
        'Wrote automated tests and worked within an Azure DevOps delivery process.',
        'This is where I started treating service boundaries and integration as design problems in their own right — how services communicate, what that costs to deploy and operate, and what you give up when you split a system apart.',
      ],
    },
    {
      position: 'Junior Software Engineer',
      company: 'Bdjobs.com Ltd.',
      location: 'Dhaka, Bangladesh',
      startDate: '2022-09',
      endDate: '2024-09',
      context:
        'recruiter.bdjobs.com and related business applications, including a large body of legacy code.',
      highlights: [
        'Modernised legacy ASP Classic functionality into .NET Core Web APIs.',
        'Resolved 200+ production and application issues.',
        'Built invoice automation that significantly reduced manual work.',
      ],
    },
  ],

  capabilities: [
    {
      title: 'Backend & application architecture',
      items: [
        { name: 'C#, .NET Core' },
        { name: 'REST APIs' },
        { name: 'Clean Architecture' },
        { name: 'Feature-oriented organisation' },
        { name: 'Vertical Slice Architecture' },
        { name: 'CQRS' },
        { name: 'Repository pattern' },
        { name: 'Result pattern' },
        { name: 'Domain-Driven Design' },
        { name: 'Modular Monolith' },
        { name: 'Unit Testing, Integration Testing' },
        { name: 'SignalR / WebSockets' },
      ],
    },
    {
      title: 'Data',
      items: [
        { name: 'Relational data modelling' },
        { name: 'SQL Server' },
        { name: 'EF Core, Dapper' },
        { name: 'MongoDB' },
        { name: 'Redis' },
      ],
    },
    {
      title: 'Distributed systems & integration',
      items: [
        { name: 'Microservices' },
        { name: 'Domain Events and Integration Events' },
        { name: 'Messaging between services' },
        { name: 'RabbitMQ' },
        { name: 'API gateway (Ocelot/YARP)' },
      ],
    },
    {
      title: 'Delivery & operations',
      items: [
        { name: 'Azure DevOps, CI/CD pipelines' },
        { name: 'IIS' },
        { name: 'Docker' },
      ],
    },
  ],

  /**
   * Honest signal, and the section most portfolios refuse to show.
   * Only what you are genuinely working through right now. Empty = hidden.
   */
  currentlyLearning: [] as { topic: string; note?: string }[],

  projects: [
    {
      title: 'E-commerce Microservices',
      description:
        'Catalog, Identity, Ordering, Cart and Payment services built with Clean Architecture, DDD and CQRS. RabbitMQ for inter-service communication and Ocelot as the API gateway. Later refactored to introduce a shared kernel with a consistent error-handling approach, and to organise each service around vertical slices.',
      githubUrl: 'https://github.com/sayyedulawwab/EcommerceMicroservices',
      liveUrl: '',
      built_with: [
        '.NET Core',
        'Clean Architecture',
        'DDD',
        'CQRS',
        'RabbitMQ',
        'Redis',
        'Docker',
      ],
      /** Slugs of articles where I wrote up the decisions behind this project. */
      writeups: [
        'first-attempt-to-build-microservice-based-ecommerce-api-with-net-core-clean-architecture-and-ddd',
        'refactoring-the-e-commerce-microservice-project-introducing-a-shared-kernel-and-enhanced-error-handling',
        'leveraging-vertical-slice-architecture-with-clean-architecture-for-scalable-maintainable-systems',
      ],
    },
    {
      title: 'Real-time chat service',
      description:
        'Backend service for one-to-one and group messaging over WebSockets with SignalR, covering authentication, room management and conversation management. A small React client was built only to exercise the API.',
      githubUrl: 'https://github.com/sayyedulawwab/ChatService',
      liveUrl: '',
      built_with: [
        '.NET Core',
        'SignalR',
        'Clean Architecture',
        'DDD',
        'CQRS',
        'SQL Server',
        'MongoDB',
        'Redis',
        'Docker',
      ],
      writeups: ['building-a-real-time-chat-service-with-net-core-and-signalr'],
    },
    {
      title: 'E-commerce API (monolith)',
      description:
        'API for products, categories, authentication, reviews and orders. Built before the microservices version, using Clean Architecture, DDD and CQRS with the Repository pattern.',
      githubUrl: 'https://github.com/sayyedulawwab/EcommerceApp',
      liveUrl: '',
      built_with: [
        '.NET Core',
        'Clean Architecture',
        'DDD',
        'CQRS',
        'Redis',
        'Docker',
      ],
      writeups: [
        'a-comprehensive-guide-to-designing-an-api-from-scratch-with-aspnet-core-and-clean-architecture-domain-driven-design-cqrs',
      ],
    },
    {
      title: 'Job posting system, Bdjobs.com',
      description:
        'Contributed to migrating the Bdjobs employer panel job posting system from legacy technology to .NET Core and Angular. I built the API using .NET Core with a layered architecture and the Repository pattern.',
      githubUrl: '',
      liveUrl: 'https://recruiter.bdjobs.com/jobposting/job-information',
      built_with: ['.NET Core', 'Layered architecture', 'Repository pattern'],
      writeups: [],
    },
  ],

  recommendations: [
    {
      name: 'Mohammad Rafiqul Islam',
      headline: 'Head of Product, Bdjobs',
      avatar: '/assets/images/recommendation-rafiq.jpg',
      /** Exact excerpt from the text below. Never paraphrase inside quote marks. */
      pullQuote:
        'a rare combination of technical expertise and business acumen',
      description: [
        'I have had the privilege of working with Muhammad Sayyedul Awwab @bdjobs, and I can confidently say he is an exceptional software engineer with a rare combination of technical expertise and business acumen.',
        'Awwab is a professional software engineer who approaches every task with precision and dedication. He has an innate ability to understand product requirements thoroughly, ensuring the technical solutions he develops align seamlessly with business goals. His work consistently reflects a deep understanding of how to fulfill business objectives through the thoughtful application of cutting-edge technologies.',
        "One of Awwab's greatest strengths is his adaptability. He stays ahead of the curve by quickly adopting new technologies, integrating them effectively into his work, and delivering innovative solutions that drive success. Whether it's collaborating with cross-functional teams, debugging complex issues, or delivering scalable and efficient systems, he brings his best to every project.",
        'Awwab is not only a talented engineer but also a reliable and inspiring colleague. I wholeheartedly recommend him to any organization looking for a skilled, forward-thinking software engineer who consistently delivers results.',
      ],
    },
    {
      name: 'Shoaib Shahriar',
      headline: 'Software Developer (.NET / SharePoint), Deloitte',
      avatar: '/assets/images/recommendation-shoaib.jpg',
      pullQuote: '',
      description: [
        'I first met Awwab during his interview, where his confidence and technical depth immediately stood out, especially given his two years of experience. In the technical test, he not only completed all mandatory tasks but also tackled the optional ones, quickly learning and implementing new concepts along the way. This demonstrated his dedication to development and his genuine aspiration to become a software architect.',
        'Since joining, Awwab has consistently impressed with his quick learning, strong debugging abilities, and exceptional problem-solving skills. I am confident he will be an invaluable asset to any team, and I strongly recommend him for future opportunities.',
      ],
    },
    {
      name: 'Rafat Ahmad',
      headline: 'Senior Software Engineer, Astha.IT',
      avatar: '/assets/images/recommendation-rafat.jpg',
      pullQuote: '',
      description: [
        'I had the pleasure of working with Awwab, and it was truly a great experience. He is polite, easygoing, and a genuine talent with a strong eagerness to learn. His attention to detail and technical depth are highly impressive and very promising.',
        'I especially enjoyed our technical discussions, which were both insightful and engaging. I am confident that Awwab will go far in his pursuit of success.',
      ],
    },
    {
      name: 'Mizanur Rahman Hridu',
      headline: 'Software Engineer, TechnoNext',
      avatar: '/assets/images/recommendation-hridu.jpg',
      pullQuote: '',
      description: [
        "I had the pleasure of working closely with Muhammad Sayyedul Awwab and learned a great deal from him. He was instrumental in assisting me during my early days at bdjobs, providing invaluable support and guidance. Together, we collaborated on various projects, including the development of the Job postings system for bdjobs' employer site (recruiter.bdjobs.com) and numerous bug fixes.",
        'Additionally, we worked together on a personal Ecommerce project, implementing clean architecture principles. Muhammad is a remarkably positive, honest, and hardworking individual. His optimistic outlook and dedication to his work were truly inspiring.',
      ],
    },
  ],
} as const;

export type Info = typeof info;
