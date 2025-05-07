// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'googlesky', // Extracted from socialLinks.github
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [], // No projects in the extracted data
    },
  },
  seo: {
    title: 'Portfolio of Hieu Le',
    description: 'Senior DevOps Engineering / Site Reliability Engineering',
    imageURL: '',
  },
  social: {
    linkedin: 'googlesky', // Extracted from socialLinks.linkedin
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '9845363/zu-vn', // Extracted from socialLinks.stackoverflow
    skype: '',
    telegram: 'googlesky', // Extracted from socialLinks.telegram
    website: '',
    phone: '0975 669 775', // Extracted from socialLinks.phone
    email: 'hieulp@1devops.io', // Extracted from socialLinks.email
  },
  resume: {
    fileUrl: 'LePhuongHieu - Resume.pdf', // Path relative to the public directory
  },
  skills: [
    'AWS (RDS, EC2, ASG, EKS, S3, Round53, IAM, AMI, MSK, ElasticCache, Security Hub)',
    'Gitlab-CI / GitOps',
    'Bash-script',
    'Terraform',
    'Helm/Helmfile',
    'Spark/Flink',
    'Prowler/Trivy/Falco/OPA/Docker Sec',
    'Microsoft Azure',
    'Kubernetes (AKS)',
    'Python/Golang',
    'TiDB/MySQL',
    'Memcache/Redis/Kafka',
    'Ansible',
    'Jenkins',
    'Shell script',
    'Networking',
    'Docker',
    'OpenShift / AWS',
    'Jfrog products',
    'OpenStack',
    'Grafana, Prometheus, Node Exporter',
    'Robot framework',
    'C/C++, Java, JavaScript',
    'Spring MVC',
    'MariaDB',
    'Hadoop, Kafka, Impala, Apache Kudu',
    'Apache/Tomcat',
    'JIRA, Confluence',
    'Git',
    'PHP',
    'Bootstrap',
    'P2P protocol',
    'Linux/Windows/Unix',
    'File sharing service (Samba/NFS)',
  ],
  experiences: [
    {
      company: 'Parcel Perform',
      position: 'DevOps',
      from: 'July 2021',
      to: 'December 2022',
      companyLink: '',
      description:
        'Parcel Perform is company working in logicstic. Parcel Perform is the leading delivery experience platform. It enables modern e-commerce enterprises to create unique end-to-end customer journeys and optimize logistics operations with powerful data integrations, parcel tracking, delivery notifications and logistics performance reports in real-time.\n\nResponsibilities:\n- CI/CD\n- Dev-Ops services\n- Communication as DevOps\n- Build the deployment system\n- Optimize and fix bug\n- Blue team\n\nTechnologies:\n- AWS (RDS, EC2, ASG, EKS, S3, Round53, IAM, AMI, MSK, ElasticCache, Security Hub...)\n- Gitlab-CI / GitOps\n- Bash-script\n- Terraform\n- Helm/Helmfile\n- Spark/Flink\n- Prowler/Trivy/Falco/OPA/Docker Sec',
    },
    {
      company: 'Home Credit',
      position: 'DevOps',
      from: 'August 2021',
      to: 'July 2022',
      companyLink: '',
      description:
        'They are a finance company. HomeX is core system provide documentation service and disbursement service. My responsibilities is keep it safe and stable, contributing the CI/CD and working flow that is survival of Sale, Remote Sale in particular and Home Credit in general.\n\nResponsibilities:\n- CI/CD\n- Dev-Ops services\n- Communication as DevOps\n- Build the deployment system\n- Improve CI/CD work flow\n\nTechnologies:\n- Microsoft Azure (Alert, Postgresql, Oracle Database, WAF,…)\n- Kuberneties (AKS)\n- Python/Golang for Tooling',
    },
    {
      company: 'VNG',
      position: 'Site Reliability & DevOps For Zalopay',
      from: 'June 2020',
      to: 'July 2021',
      companyLink: '',
      description:
        'They are a e-Wallet company. They provide financial technology and payment gateway for many other companies for many years. My role and responsibility are collaborating with developer for deploy infrastructure, application, … When something wrong happened, I am is the first line they call.\n\nResponsibilities:\n- Setup and maintain infrastructure:\n  - Servers\n  - Infrastructure services (k8s, tidb…)\n- Setup CI/CD.\n- Troubleshooting/investigate incidents.\n- Build the deployment system\n- Improve CI/CD work flow\n\nTechnologies:\n- Kubernetes\n    - Ingress\n    - Metallb\n    - RBAC\n    - …\n- TiDB/MySQL\n- Memcache/Redis/Kafka\n- Ansible\n- Jenkins scripted pipeline\n- Linux/Windows/Unix\n- Shell script \n- Python/Golang\n- Networking',
    },
    {
      company: 'TMA - A HEALTHCARE PROJECT',
      position: 'DevOps',
      from: 'December 2019',
      to: 'June 2020',
      companyLink: '',
      description:
        'They have a huge of data from their clients. They want to use Azure to process them to an expected format for features in the future.\n\nResponsibilities:\n- Setup and maintain Azure pipeline. \n- Collect data from sources and process with Data Factory. \n- Store data with expected format.\n\nTechnologies:\n- Azure\n- Python',
    },
    {
      company: 'TMA - KBTG',
      position: 'DevOps',
      from: 'March 2019',
      to: 'December 2019',
      companyLink: '',
      description:
        'They are a bank. They provide financial technology for many other companies for many years. The DevOps project helped to improve their software development process by apply cloud and automation techniques. They have more than 100 projects still keep running and updating in financial technology.\n\nResponsibilities:\n- Setup and maintain CI/CD to build and testing the product, includes:\n    - Testing environment deployment\n    - Functional Tests\n- Build the deployment system\n- Maintain and manage automatically many kinds of servers, includes:\n    - Linux server\n    - IBM Unix\n    - Windows \n- Improve CI/CD work flow\n\nTechnologies:\n- OpenShift / AWS\n- Docker\n- Jenkins scripted pipeline\n- Linux/Windows/Unix\n- Shell script \n- Python\n- Jfrog products\n- Networking',
    },
    {
      company: 'TMA - CONTENT DELIVERY NETWORK',
      position: 'DevOps',
      from: 'January 2019',
      to: 'March 2019',
      companyLink: '',
      description:
        'The product enables network service providers to build their own content delivery network (aka CDN) for streaming videos, leveraging network intelligence and subscriber data. This enables them to capitalize on growing consumer demand for rich digital media on any screen.\n\nResponsibilities:\n- Set up and maintain CI/CD to build and testing the product, includes:\n    - Testing environment deployment\n    - Functional Tests\n    - Performance Tests\n    - Security Tests\n- Build the deployment system\n\nTechnologies:\n- Kubernetes \n- Jenkins pipeline\n- Gitlab-CI\n- Terraform\n- Puppet\n- OpenStack\n- Grafana, Prometheus, Node Exporter\n- Docker\n- Python\n- Robot framework',
    },
    {
      company: 'TMA - NETWORK PERFORMANCE MANAGEMENT SYSTEM',
      position: 'DevOps',
      from: 'July 2018',
      to: 'December 2018',
      companyLink: '',
      description:
        "The product is a web application that monitors performance of multivendor, multi-application and provide both historical and near-real-time views covering everything from Networks Devices and Server to VoIP and Web traffic to mission-critical applications and network resources. The product also supports Big Data Analytic feature, which is built based on big data technologies such as Hadoop, Impala, Kafka, Kafka connect, Apache Kudu. The product is using a lot of technology such as C/C++, Java, JavaScript, Python… DevOps will develop pipeline to build and deploy the product to customer's artifactory. Networking skills are needed to work remote in customer's systems and understood how customer's systems work.\n\nResponsibilities:\n- Develop build pipeline in Customer's Kubernetes \n- Change from build in dedicated servers to cloud. \n- Register and carry out procedures for the product in customer's systems.\n\nTechnologies:\n- Kubernetes \n- Networking \n- Cloud Enterprise \n- C++, Java\n- JavaScript, Shell script\n- Spring MVC\n- MariaDB \n- Hadoop, Kafka, Impala, Apache Kudu\n- Apache/Tomcat\n- JIRA, Confluence\n- Git",
    },
    {
      company: 'TMA - Hoang Vu Labs',
      position: 'DevOps',
      from: 'May 2018',
      to: 'July 2018',
      companyLink: '',
      description:
        'The product is a desktop application control a machine that used to check food quality running in a Windows machine. The desktop application will set and get information from a Zedboard to control the machine to check food quality. The information will store in a server for user can view in future with cloud support. The product using many technologies such as Spring MVC, C/C++, C#... and various types of equipment such as server Linux, embedded devices, and cloud. DevOps have mission to create pipeline to continuous integration / continuous delivery, build server build based on Linux and docker, auto scale build flow, deploy firmware and server services to server and Zedboard.\n\nResponsibilities:\n- Apply CI/CD to build and deploy the product.\n- Develop pipeline and shell script. \n- Create setup package.\n\nTechnologies:\n- Networking \n- Jenkins pipeline\n- Linux, Windows\n- Cloud Enterprise \n- C/C++, C#, Java\n- Jenkins pipeline, Shell script\n- MariaDB \n- Git',
    },
    {
      company: 'HDVnBits.Org',
      position: 'SysAdmin',
      from: 'May 2012',
      to: '2017',
      companyLink: '',
      description:
        'HDVnBits.Org is a torrent website with 300k users in total and 75k users active same time in its heyday. It is a file sharing service and streaming in P2P protocol that uses MySQL and PHP, Bootstrap.\n\nResponsibilities:\n- Backup and maintain website\n- Develop new feature\n- Manage users and file sharing\n\nTechnologies:\n- PHP\n- Bootstrap\n- Git\n- MySQL\n- P2P protocol\n- Linux \n- File sharing service (Samba/NFS)\n- Networking',
    },
    {
      company: 'LRC - CTU',
      position: 'Helpdesk',
      from: 'September 2009',
      to: 'July 2013',
      companyLink: '',
      description:
        'CTU has an e-Library, I am a helpdesk guy to support users using Linux computers and resolve their problems with network and computer.\n\nResponsibilities:\n- Repair computer \n- Resolve problems (includes network problem and computer problem)\n- Install infrastructure\n\nTechnologies:\n- Networking\n- Hardware',
    },
    {
      company: 'Cara Cafe',
      position: 'IT Support',
      from: 'September 2011',
      to: 'May 2013',
      companyLink: '',
      description:
        "It name's Cara Coffee, a big coffee shop in Can Tho City. It has 3 branches in 3 places and my task is to make the huge data in 3 branches synchronize with each other\n\nResponsibilities:\n- Backup and maintain file sharing service\n- Design network\n- Security\n\nTechnologies:\n- P2P protocol\n- Linux/Windows\n- File sharing service (Samba/NFS)\n- Networking",
    },
  ],
  certifications: [
    {
      name: 'Cisco Certified Network Association (CCNA)',
      body: 'Can Tho University, ISSUED 05-2013 – EXPIRED 2014',
      year: '2013',
      link: '',
    },
    {
      name: 'Secondrate Branch Open Source',
      body: 'ACM ICPC, ISSUED 08-12-2017',
      year: '2017',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'CAN THO UNIVERSITY',
      degree: 'Communications and computer networks',
      from: '2015',
      to: '2018',
      description:
        "Based on Vietnam's law on higher education, the BECNDC has its objectives (POs) aligned with CTU's mission. After graduation from the BECNDC program, students will:\n- PO1: Memorize basic knowledge of law, security and defense, political and social science; build physical health, ethics, social awareness, and professional responsibility according to current regulations;\n- PO2: Present basic knowledge of mathematics and science applicable in computer network and data communication;\n- PO3: Integrate fundamental knowledge and skills in computer science and information technology that enable them to study related fields or graduate programmes;\n- PO4: Analyze and apply specialized knowledge and skills to meet practical needs of an individual or an organization in the field of computer network and data communication in the context of Industry 4.0;\n- PO5: Develop communication skills, presentations skills, teamwork skills, foreign language competence, professional and creative working style, and entrepreneurship to meet the requirements of globalization and lifelong learning.",
    },
  ],
  publications: [
    // Keeping empty as no publications data in the extracted JSON
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
