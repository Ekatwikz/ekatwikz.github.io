// gitprofile.config.ts

const CONFIG = {
  linkedin: {
    recommendations: {
      // using a hakked version of: https://dash.elfsight.com/widget/create/linkedin-recommendations
      display: true,
      widgetid: 'b2c73b61-7309-439f-ab03-e6f0a63b4128',
      header: 'Recommendations',
    },
  },

  github: {
    username: 'ekatwikz', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      showStats: false, // Display star/fork count?
      manual: {
        // Properties for manually specifying projects
        projects: [
          'ekatwikz/Basic-Arkanoid',
          'ekatwikz/led-memory-game',
          'ekatwikz/Algorithms-and-Computability',
          'ekatwikz/SEng2-2023',
          'ekatwikz/katwikOpsys',
          'ekatwikz/multiThreadGame',
          'ekatwikz/matlabProject',
          'ekatwikz/katwitool',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Demos',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: "HPC-GPU Programming Group's Site",
          description:
            'Internship project. Overhauled and greatly improved layout created by previous team. Brought an exponential speed boost to existing maintenance workflow via efficient utilisation of Docker, Shell and Github Actions. Expanded modes of content delivery, and enhanced site using Gatsby, TypeScript, HTML and CSS.',
          imageUrl: 'https://i.imgur.com/16RUGs0.png',
          link: 'https://hpcgpu.mini.pw.edu.pl/',
        },
        {
          title: 'Image Filtering Desktop Application',
          description:
            'Video demo. Created a desktop application using WPF and C#, which can be used to edit images using a multitude of hand-crafted, manually implemented image processing algorithms. Used image-hashing based optimizations to speed up computationally expensive operations.',
          imageUrl: 'https://i.imgur.com/jO3dtnV.jpeg',
          link: 'https://www.youtube.com/watch?v=hxlHTQnwwKA&list=PLk6u9j48w-dbdu2Wh8Fk4PAVldUqaNHrZ',
        },
        {
          title: 'Hex2048',
          description:
            'Game demo. Used React and an external randomization API to create a fun, interactive and dynamic experience, putting a geometric twist on the well known 2048 game.',
          imageUrl: 'https://i.imgur.com/KvdyHXL.png',
          link: 'http://ekatwikzhex2048.surge.sh',
        },
        {
          title: 'OIOIOI@PW Deployment',
          description:
            "Internship project. Created a web system installation for the faculty’s competitive programming team for contest preparation, closely mirroring the systems used in major competitions. Marked the first use of the faculty's new Swarm provisions.",
          imageUrl: 'https://i.imgur.com/JjKNVfS.png',
          link: 'https://oioioi.mini.pw.edu.pl/',
        },
        {
          title: 'WebGL Demo',
          description:
            'Used three.js to create a unique and interactive web experience (camera can be controlled by clicking and dragging, or a touchscreen).',
          imageUrl: 'https://i.imgur.com/vVRUsLq.png',
          link: 'https://ekatwikz.github.io/three.js_practice/',
        },
        {
          title: 'Realtime GPU Raycasting',
          description:
            'Video demo. Created a desktop application which used CUDA to draw directly onto a GL buffer, using the phong model to shade a densely packed scene of a thousand spheres, with enough efficiency to sustain a framerate suitable for realtime interactivity. All calculations and rendering were implemented by hand.',
          imageUrl: 'https://i3.ytimg.com/vi/V-m8WJZGBAU/maxresdefault.jpg',
          link: 'https://www.youtube.com/watch?v=V-m8WJZGBAU&list=PLk6u9j48w-dbdu2Wh8Fk4PAVldUqaNHrZ',
        },
        {
          title: 'Geospatial Intelligence Tool Demo',
          description:
            'Used React and the Haversine formula to create a simple yet powerful tool which can be used as the basis of a rough estimate for fuel costs of a naval journey.',
          imageUrl: 'https://i.imgur.com/hGWUmY8.png',
          link: 'https://geospatial-application.vercel.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio - Emmanuel Katwikirize',
    description:
      "Emmanuel Katwikirize's software portfolio. I am an ambitious, fast learner, with a passion for programming and creative problem solving. Feel free to contact me.",
    imageURL: 'https://ekatwikz.com/preview.jpg',
  },
  social: {
    linkedin: 'emanuel-katwik',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+48 579618306',
    email: 'ekatwikz@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'CUDA',
    'C#',
    'Java',
    'Rust',
    'Python',
    'Shell',
    'GNU Make',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'React',
    'Next.js',
    'Gatsby',
    'Spring Boot',
    'Rocket.rs',
    'REST APIs',
    'Docker',
    'Github Actions',
    'Relational Databases',
    'SQL',
    'Git CLI',
    'Github',
    'Java Swing',
    'WinAPI',
    'WinForms',
    'WPF',
    'OpenGL',
    'GLFW',
    'WebGL',
    'three.js',
    'LaTeX',
    'Doxygen',
  ],
  experiences: [],
  certifications: [],
  educations: [
    {
      institution: 'Warsaw University of Technology',
      degree: 'BSc. Computer Science and Information Systems',
      from: 'October 2020',
      to: 'February 2024',
      grade: '4.5',
    },
    {
      // institution: 'Cambridge Assessment International Examinations',
      degree: 'Cambridge CIE A Levels',
      from: 'September 2017',
      to: 'June 2019',
      grade: 'AAB (Equivalent: 4.7)',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['nord', 'dim', 'valentine'],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
