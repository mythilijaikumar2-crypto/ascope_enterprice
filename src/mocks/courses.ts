export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type CourseMode = 'Online' | 'Offline' | 'Hybrid';

export interface CourseModule {
  title: string;
  duration: string;
  lessons: string[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice: number;
  level: CourseLevel;
  duration: string; // e.g. "3 Months"
  mode: CourseMode;
  trainerId: string;
  rating: number;
  enrolledCount: number;
  syllabus: CourseModule[];
  faqs: { question: string; answer: string }[];
}

export const mockCourses: Course[] = [
  {
    id: "c-1",
    title: "Python Full Course",
    slug: "python-full-course",
    categorySlug: "development",
    categoryName: "Development",
    description: "Master Python programming from scratch to advanced topics. Covers variables, control structures, functions, OOPs, databases, and core application development.",
    longDescription: "This comprehensive course is designed to build your core programming skills using Python. Starting from variables and expressions, you will advance to complex structures including file processing, object-oriented designs, and data access layers. Ideal for beginners wishing to build a solid backend foundation.",
    price: 11999,
    originalPrice: 14399,
    level: "Beginner",
    duration: "3 Months",
    mode: "Hybrid",
    trainerId: "tr-7",
    rating: 4.8,
    enrolledCount: 1240,
    syllabus: [
      {
        title: "Module 1: Introduction to Python & Basic Syntax",
        duration: "3 Weeks",
        lessons: ["Variable assignments and dynamic typing", "Arithmetic operators & expressions", "Conditional execution structures", "Iterative loops & execution blocks"]
      },
      {
        title: "Module 2: Structured Data & Functional Programming",
        duration: "4 Weeks",
        lessons: ["Python Lists, Tuples, Dictionaries, and Sets", "Function scoping, arguments, and return types", "Exception handling and try-catch validation block", "Reading and writing files dynamically"]
      },
      {
        title: "Module 3: Object-Oriented Programming (OOPs)",
        duration: "3 Weeks",
        lessons: ["Classes, objects, constructors, and instances", "Inheritance, method overriding, and polymorphism", "Encapsulation, module imports, and namespace isolation"]
      },
      {
        title: "Module 4: Database Integration & Capstone",
        duration: "2 Weeks",
        lessons: ["SQL Database connections using SQLite/PostgreSQL", "CRUD operations and transaction integrity", "Building a command-line inventory tracking application"]
      }
    ],
    faqs: [
      { question: "Is prior coding experience required?", answer: "No, this course starts from absolute basics and requires no previous coding knowledge." },
      { question: "Are certificates provided upon completion?", answer: "Yes, verified Ascope Tech course certificates are issued to graduating students." }
    ]
  },
  {
    id: "c-2",
    title: "Java Full Stack Development",
    slug: "java-full-stack",
    categorySlug: "development",
    categoryName: "Development",
    description: "Become a proficient Full Stack developer. Learn Java, Spring Boot microservices, Hibernate ORM, SQL, and modern React frontend architectures.",
    longDescription: "Our signature Java Full Stack bootcamp is designed to transform candidates into enterprise-ready developers. You will dive deep into Core Java OOPs, relational database modeling with Hibernate, build microservice meshes using Spring Boot, and integrate modern, high-performance React client layouts.",
    price: 19999,
    originalPrice: 23999,
    level: "Intermediate",
    duration: "6 Months",
    mode: "Offline",
    trainerId: "tr-2",
    rating: 4.9,
    enrolledCount: 1560,
    syllabus: [
      {
        title: "Module 1: Core Java & Data Structures",
        duration: "6 Weeks",
        lessons: ["OOPs principles in Java", "Java Collections Framework and Generics", "Exception handling, stream APIs, and multi-threading", "File I/O operations and build tools (Maven)"]
      },
      {
        title: "Module 2: Relational Databases & Hibernate",
        duration: "5 Weeks",
        lessons: ["SQL schema DDL/DML, joins, and indexing", "JDBC basics and transaction management", "Hibernate ORM mapping configurations", "Entity relationships: One-to-Many, Many-to-Many"]
      },
      {
        title: "Module 3: Spring Boot Microservices",
        duration: "7 Weeks",
        lessons: ["Spring Core, Dependency Injection, and IOC containers", "Spring Boot starter templates and web MVC REST controllers", "Spring Data JPA, repository layers, and query DSL", "Spring Security, JWT validations, and route guard filters"]
      },
      {
        title: "Module 4: React Client Integration",
        duration: "6 Weeks",
        lessons: ["React component structure, JSX, props, and states", "REST API integration using Axios with auto-interceptors", "React Router SPA configurations", "Tailwind CSS styling and responsive layout designs"]
      }
    ],
    faqs: [
      { question: "Do we work on real enterprise projects?", answer: "Yes, you will build and deploy a multi-service SaaS billing app as your graduation capstone." },
      { question: "What placement opportunities exist?", answer: "Our graduates gain direct access to Zoho, TCS, Freshworks, and other corporate partner recruitment pipelines." }
    ]
  },
  {
    id: "c-3",
    title: "Cyber Security and Ethical Hacking",
    slug: "cyber-security-ethical-hacking",
    categorySlug: "development",
    categoryName: "Development",
    description: "Learn penetration testing, system hardening, and network protocol audits. Protect corporate networks and mitigate web application vulnerability exposures.",
    longDescription: "Step into the high-demand field of cybersecurity. This course provides comprehensive training on OWASP Top 10 vulnerabilities, network protocol packet analysis, system penetration testing, Linux command structures, and configuring firewalls/intrusion prevention tools.",
    price: 25999,
    originalPrice: 31199,
    level: "Advanced",
    duration: "6 Months",
    mode: "Hybrid",
    trainerId: "tr-8",
    rating: 4.9,
    enrolledCount: 980,
    syllabus: [
      {
        title: "Module 1: Linux Fundamentals & Networking Security",
        duration: "6 Weeks",
        lessons: ["Linux command line, user permissions, and scripting", "TCP/IP models, routing protocols, and subnet scoping", "Network packet sniffing using Wireshark", "Port scanning, host discovery, and Nmap diagnostics"]
      },
      {
        title: "Module 2: Ethical Hacking & Metasploit Exploits",
        duration: "6 Weeks",
        lessons: ["Understanding penetration test lifecycles", "Finding system exposures, buffer overflows, and privilege elevations", "Running automated exploits using Metasploit framework", "Social engineering vectors and credential harvesting mitigation"]
      },
      {
        title: "Module 3: Web Application Vulnerabilities (OWASP Top 10)",
        duration: "8 Weeks",
        lessons: ["SQL Injection (SQLi) attacks and parameters bypass", "Cross-Site Scripting (XSS) and Session Hijacking prevention", "Broken Authentication and Role authorization exposures", "Securing API endpoints and audit logging configurations"]
      },
      {
        title: "Module 4: Hardening & Incident Mitigation",
        duration: "4 Weeks",
        lessons: ["Setting up firewalls (IPtables, UFW) and VPN tunnels", "Configuring Intrusion Detection Systems (Snort)", "Incident response reporting and post-breach diagnostics"]
      }
    ],
    faqs: [
      { question: "Do we get hands-on lab access?", answer: "Yes, you will receive full access to our local virtual laboratories containing simulated vulnerable networks." },
      { question: "Are certification preparations included?", answer: "Yes, this course fully aligns with CEH (Certified Ethical Hacker) curriculum objectives." }
    ]
  },
  {
    id: "c-4",
    title: "Cloud Computing",
    slug: "cloud-computing",
    categorySlug: "development",
    categoryName: "Development",
    description: "Architect secure, fault-tolerant cloud infrastructures on AWS. Master virtualization, virtual networking, database hosting, serverless nodes, and CI/CD tools.",
    longDescription: "AWS dominates modern cloud workloads. This course covers core AWS architectures (EC2, VPC, RDS, S3), security policies (IAM), serverless scripting (Lambda), container engines (Docker), and Git-driven continuous integrations (GitHub Actions).",
    price: 14999,
    originalPrice: 17999,
    level: "Intermediate",
    duration: "4 Months",
    mode: "Online",
    trainerId: "tr-2",
    rating: 4.7,
    enrolledCount: 1100,
    syllabus: [
      {
        title: "Module 1: AWS Core Compute & Virtual Storage",
        duration: "4 Weeks",
        lessons: ["Virtualization concepts and launching AWS EC2 instances", "Local, block, and object storage configurations (EBS, S3)", "Autoscaling groups and Application Load Balancer setups"]
      },
      {
        title: "Module 2: Cloud Networking & IAM Security",
        duration: "4 Weeks",
        lessons: ["Structuring custom VPCs, subnets, and routing maps", "Managing Security Groups, Network ACLs, and NAT Gateways", "IAM Policies, Role permissions, and SSO configurations"]
      },
      {
        title: "Module 3: Cloud Databases & Serverless Compute",
        duration: "4 Weeks",
        lessons: ["Deploying hosted relational databases (RDS PostgreSQL)", "DynamoDB NoSQL schemas and caching configurations", "AWS Lambda serverless functions and API Gateway routers"]
      },
      {
        title: "Module 4: DevOps & Continuous Integration",
        duration: "4 Weeks",
        lessons: ["Containerizing web applications using Docker", "CI/CD pipelines automation using GitHub Actions", "Deploying infrastructure using Terraform modules"]
      }
    ],
    faqs: [
      { question: "Does this prepare us for AWS certifications?", answer: "Yes, the syllabus maps to the AWS Certified Solutions Architect - Associate exam." }
    ]
  },
  {
    id: "c-5",
    title: "Mastering in Python and C Programming",
    slug: "mastering-python-c-programming",
    categorySlug: "development",
    categoryName: "Development",
    description: "Form a dual-layered programming foundation. Master memory management, pointers, and performance in C alongside modular automation in Python.",
    longDescription: "Learn computational foundations from both low-level and high-level perspectives. You will master standard C memory allocations, structures, and pointer configurations alongside Python modules, automation patterns, data files processing, and algorithm runtimes.",
    price: 19999,
    originalPrice: 23999,
    level: "Beginner",
    duration: "3 Months",
    mode: "Offline",
    trainerId: "tr-6",
    rating: 4.8,
    enrolledCount: 820,
    syllabus: [
      {
        title: "Module 1: Low-Level Logic in C",
        duration: "4 Weeks",
        lessons: ["Variables declarations, syntax, and formatting", "Pointers, dereferencing, and memory addresses", "Static arrays and dynamic memory allocations (malloc, free)", "Structures, Unions, and header imports"]
      },
      {
        title: "Module 2: Algorithmic Foundations",
        duration: "4 Weeks",
        lessons: ["Sorting algorithms: Bubble, Quick, and Merge sorting", "Searching algorithms: Binary search and Hash tables", "Memory stack configurations vs Heap data segments"]
      },
      {
        title: "Module 3: High-Level Automation with Python",
        duration: "4 Weeks",
        lessons: ["Comparing C syntax with Python modular models", "Using Python standard libraries, OS scripts, and file parsing", "Designing core application flow charts and executing custom packages"]
      }
    ],
    faqs: [
      { question: "Why learn both C and Python?", answer: "C teaches you how computers manage memory under the hood, while Python teaches you how to build fast automation tools. Together, they create elite programming intuition." }
    ]
  },
  {
    id: "c-6",
    title: "Digital Marketing",
    slug: "digital-marketing",
    categorySlug: "marketing",
    categoryName: "Marketing",
    description: "Accelerate online customer acquisitions. Master Search Engine Optimization (SEO), Google Analytics metrics, and social media advertising setups.",
    longDescription: "Drive real business metrics in a digital economy. This course covers structured keyword optimizations, backlink audits, Google Search Console setups, pay-per-click setups (PPC), Facebook/Instagram Ads Managers, and content marketing strategy.",
    price: 9999,
    originalPrice: 11999,
    level: "Beginner",
    duration: "3 Months",
    mode: "Online",
    trainerId: "tr-3",
    rating: 4.6,
    enrolledCount: 750,
    syllabus: [
      {
        title: "Module 1: Search Engine Optimization (SEO)",
        duration: "4 Weeks",
        lessons: ["On-page optimization: Title tags, headings, and schema maps", "Off-page backlinking audits and domain authority scoring", "Keyword research matrices and competition assessments", "Configuring Google Analytics 4 & Search Console properties"]
      },
      {
        title: "Module 2: Paid Advertising & Search Marketing (SEM)",
        duration: "4 Weeks",
        lessons: ["Building PPC campaigns in Google Ads Manager", "Audience scoping, demographic filtering, and bidding models", "Social media campaigns in Meta Business Suite", "Designing tracking pixels and conversion retargeting funnels"]
      },
      {
        title: "Module 3: Content Marketing & Analytics Reports",
        duration: "4 Weeks",
        lessons: ["Content calendars, copywriting, and graphics briefs", "Email marketing pipelines and automation flows (Mailchimp)", "Aggregating KPIs and building dashboard summaries (Looker Studio)"]
      }
    ],
    faqs: [
      { question: "Do we run live ad campaigns?", answer: "Yes, students work with sandbox budgets to set up and manage live search ads campaigns." }
    ]
  },
  {
    id: "c-7",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    categorySlug: "design",
    categoryName: "Design",
    description: "Master modern user-centric interfaces. Learn prototyping in Figma, research methodologies, design system structures, and responsive layouts.",
    longDescription: "Interface layout is a key success factor for software. This course provides comprehensive training on user journey planning, wireframing, high-fidelity prototypes in Figma, typography, spacing matrices, component libraries, and testing user interactions.",
    price: 9999,
    originalPrice: 11999,
    level: "Intermediate",
    duration: "3 Months",
    mode: "Hybrid",
    trainerId: "tr-3",
    rating: 4.8,
    enrolledCount: 890,
    syllabus: [
      {
        title: "Module 1: Design Principles & User Research",
        duration: "4 Weeks",
        lessons: ["Understanding visual hierarchies, grids, and padding layouts", "Typography pairings, responsive typography, and accessibility (A11y)", "Conducting user research interviews and drafting user personas", "Mapping user journeys and flowchart wireframes"]
      },
      {
        title: "Module 2: High-Fidelity UI Design in Figma",
        duration: "4 Weeks",
        lessons: ["Working with Figma vectors, frames, and groups", "Creating responsive layouts using Figma Auto-Layout", "Building local design systems: Color palettes, typography presets, icons", "Structuring reusable components and variables variants"]
      },
      {
        title: "Module 3: Advanced Prototyping & Handoffs",
        duration: "4 Weeks",
        lessons: ["Smart-Animate transitions, scroll indicators, hover states", "Interactive components and variables transitions", "Conducting usability tests and collecting feedback sessions", "Preparing code specification exports and developer handoffs asset packets"]
      }
    ],
    faqs: [
      { question: "Is artistic talent required?", answer: "No, UI/UX design is structured around scientific user-behavior rules and spatial grid layouts." }
    ]
  },
  {
    id: "c-8",
    title: "Data Science and Machine Learning",
    slug: "data-science-machine-learning",
    categorySlug: "data-science",
    categoryName: "Data Science",
    description: "Analyze complex business datasets and construct predictive models. Learn NumPy, Pandas, Scikit-Learn algorithms, and SQL data modeling.",
    longDescription: "Data runs the modern economy. In this intensive program, you will learn data manipulation libraries, stats frameworks, machine learning models (Regression, Random Forests, SVMs), model performance validation pipelines, and databases CRUD setups.",
    price: 19999,
    originalPrice: 23999,
    level: "Advanced",
    duration: "6 Months",
    mode: "Offline",
    trainerId: "tr-5",
    rating: 4.9,
    enrolledCount: 1040,
    syllabus: [
      {
        title: "Module 1: Scientific Programming & Data Wrangling",
        duration: "6 Weeks",
        lessons: ["Advanced Python programming, lists, and collections", "Data manipulation using Pandas DataFrames", "Numerical operations using NumPy multidimensional arrays", "Data cleaning protocols: Outliers detection and missing values profiling"]
      },
      {
        title: "Module 2: Exploratory Analytics & Data Querying",
        duration: "5 Weeks",
        lessons: ["Relational databases, SQL subqueries, groupings, and joins", "Statistical visualization using Matplotlib and Seaborn", "Probability distributions, hypothesis testing, and stats significance"]
      },
      {
        title: "Module 3: Machine Learning Algorithms",
        duration: "8 Weeks",
        lessons: ["Supervised learning: Linear and Logistic Regressions", "Decision Trees, Random Forests, and Gradient Boosting engines", "Unsupervised learning: K-Means clustering and PCA compression", "Building ML pipelines in Scikit-Learn"]
      },
      {
        title: "Module 4: Model Validation & Deployments",
        duration: "5 Weeks",
        lessons: ["Model evaluation metrics: Precision, Recall, F1-Score, ROC-AUC", "Cross-validation and hyperparameter tuning (GridSearchCV)", "Saving model states and building REST endpoints using Flask"]
      }
    ],
    faqs: [
      { question: "Do we work on real datasets?", answer: "Yes, you will process large-scale commercial datasets from Kaggle and other verified public directories." }
    ]
  },
  {
    id: "c-9",
    title: "Python and Data Science",
    slug: "python-data-science",
    categorySlug: "data-science",
    categoryName: "Data Science",
    description: "Launch your data career. Learn Python programming fundamentals, stats models, and data visualization tools for analytics pipelines.",
    longDescription: "An entry-level gateway into data analytics. You will learn Python syntax foundations, work with stats libraries, manipulate files, perform SQL queries, and construct clean, presentation-ready dashboard visuals.",
    price: 16999,
    originalPrice: 20399,
    level: "Intermediate",
    duration: "4 Months",
    mode: "Hybrid",
    trainerId: "tr-7",
    rating: 4.8,
    enrolledCount: 920,
    syllabus: [
      {
        title: "Module 1: Python Basics & Collections",
        duration: "4 Weeks",
        lessons: ["Python scripting setups and core data types", "Control flows, loops, and custom function definitions", "Working with files, CSV loaders, and JSON objects"]
      },
      {
        title: "Module 2: Data Manipulation & Visuals",
        duration: "4 Weeks",
        lessons: ["Pandas DataFrame structures and grouping statistics", "Matplotlib plots, histograms, scatter configurations", "NumPy array computations and algebraic setups"]
      },
      {
        title: "Module 3: Relational SQL & Exploratory Analysis",
        duration: "4 Weeks",
        lessons: ["Writing SQL queries, aggregate filters, joins", "Exploratory Data Analysis (EDA) walkthrough workflows", "Drawing business insights and presenting report decks"]
      },
      {
        title: "Module 4: Machine Learning Introduction",
        duration: "4 Weeks",
        lessons: ["Introduction to predictive modeling concepts", "Setting up linear regression models", "Evaluating classification accuracy scores"]
      }
    ],
    faqs: [
      { question: "Is this suitable for aspiring Data Analysts?", answer: "Yes, this course is tailored specifically for entry-level analyst roles." }
    ]
  }
];

export default mockCourses;
