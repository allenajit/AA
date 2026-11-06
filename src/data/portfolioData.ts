import {
  PersonalInfo,
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  AchievementItem,
  CertificationItem,
} from '../types/portfolio';

/* =========================================================================
   CENTRALIZED PORTFOLIO DATA FILE
   Personal brand data for: ALLEN AJIT (First-Year Engineering Student)
   You can easily update text, placeholders, links, and credentials below.
   ========================================================================= */

export const personalInfo: PersonalInfo = {
  name: "Allen Ajit",
  firstName: "Allen",
  lastName: "Ajit",
  initials: "AA",
  role: "First-Year Engineering Student & Innovator",
  academicStage: "1st Year Undergraduate (B.Tech)",
  collegeName: "[Your College / Engineering Institute Name]", // EDITABLE PLACEHOLDER: e.g. "College of Engineering Trivandrum" or "Model Engineering College"
  engineeringBranch: "[Your Engineering Branch — e.g. B.Tech Computer Science / Electronics]", // EDITABLE PLACEHOLDER
  graduationYear: "2028",
  headline: "Engineering Ideas Into Intelligent Solutions",
  tagline: "First-year engineering student exploring software development, artificial intelligence, cybersecurity, and practical hardware innovations to solve real-world problems.",
  bio: [
    "I am an ambitious first-year engineering student driven by curiosity for emerging technologies and a passion for engineering practical, high-impact digital solutions. I believe engineering is the ultimate bridge between conceptual ideas and human utility.",
    "My current focus is grounded in mastering programming foundations with Python and diving deeply into modern web technologies (HTML, CSS, and JavaScript). Simultaneously, I am exploring artificial intelligence, voice biometric authentication, cybersecurity principles, and embedded systems.",
    "Whether architecting defensive AI frameworks like VoiceTrust for Smart India Hackathon 2026 or formulating grassroots innovation initiatives for YIP Kerala, I approach every challenge with rigorous curiosity, an honest learning mindset, and the determination to build things that matter."
  ],
  focusAreas: [
    {
      title: "Artificial Intelligence & Voice Biometrics",
      description: "Researching acoustic analysis, deepfake voice detection, and multi-signal identity verification architectures.",
      icon: "Cpu"
    },
    {
      title: "Software & Web Development",
      description: "Building strong fundamentals in Python, modern web standards (HTML/CSS/JS), and modern component-driven interfaces.",
      icon: "Code2"
    },
    {
      title: "Cybersecurity & Anti-Fraud Systems",
      description: "Understanding social-engineering patterns, authentication vectors, credential security, and proactive threat mitigation.",
      icon: "ShieldAlert"
    },
    {
      title: "Engineering Innovation & Prototyping",
      description: "Combining hardware microcontrollers, sensor telemetry, and software to solve tangible societal problems.",
      icon: "Lightbulb"
    }
  ],
  location: "Kerala, India",
  email: "allenajit.engineering@example.com", // EDITABLE PLACEHOLDER: Update with your real contact email
  resumePath: "/resume.pdf", // EDITABLE: Place your actual resume PDF inside the /public folder named "resume.pdf"
  availability: {
    status: 'Open for Hackathons',
    text: "Open for technical hackathons, student innovation teams, & engineering mentorship",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/allenajit", // EDITABLE PLACEHOLDER: replace with your GitHub username
      username: "allenajit",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/allenajit", // EDITABLE PLACEHOLDER: replace with your LinkedIn profile
      username: "allenajit",
      icon: "Linkedin",
    },
    {
      platform: "Email",
      url: "mailto:allenajit.engineering@example.com", // EDITABLE PLACEHOLDER
      username: "allenajit.engineering@example.com",
      icon: "Mail",
    },
  ],
  stats: [
    {
      label: "Academic Focus",
      value: "1st",
      suffix: " Year",
      description: "B.Tech Engineering Foundation"
    },
    {
      label: "Flagship SIH 2026",
      value: "PS",
      suffix: " 26104",
      description: "AI Voice Cloning Defense Architecture"
    },
    {
      label: "Innovation Track",
      value: "YIP",
      suffix: " Kerala",
      description: "Young Innovators Programme Candidate"
    },
    {
      label: "Core Stacks",
      value: "Python",
      suffix: " + Web",
      description: "Algorithm & Full-stack Exploration"
    }
  ]
};

/* =========================================================================
   HONEST SKILLS & TECHNOLOGIES
   Representing the learning journey accurately:
   - Python: Programming skill
   - HTML, CSS, JavaScript: Technologies currently learning
   - Tools: Daily developer toolchain
   - Currently Exploring: Next-frontier interests (AI, Cybersec, IoT)
   ========================================================================= */

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    badge: "Core Language",
    description: "Algorithmic thinking, problem-solving, and foundational script architecture",
    skills: [
      {
        name: "Python",
        category: "programming",
        stage: "Proficient",
        icon: "FileCode",
        description: "Primary programming language used for algorithmic problem solving, automation scripting, and logic implementation."
      },
      {
        name: "C Programming",
        category: "programming",
        stage: "Foundational",
        icon: "Cpu",
        description: "Academic foundation in procedural programming, memory structures, pointers, and fundamental computer science theory."
      },
    ]
  },
  {
    id: "web",
    title: "Web Development",
    badge: "Actively Learning",
    description: "Constructing modern, accessible, and responsive user interfaces",
    skills: [
      {
        name: "HTML5",
        category: "web",
        stage: "Currently Learning",
        icon: "Globe",
        description: "Semantic structure, accessible document outlines, forms, and modern web standards."
      },
      {
        name: "CSS3 & Modern Styling",
        category: "web",
        stage: "Currently Learning",
        icon: "Palette",
        description: "Responsive layout design (Flexbox, CSS Grid), micro-transitions, Dark Luxury UI tokens, and Tailwind utility classes."
      },
      {
        name: "JavaScript (ES6+)",
        category: "web",
        stage: "Currently Learning",
        icon: "Terminal",
        description: "DOM manipulation, asynchronous operations (fetch/promises), modern syntax, and interactive client logic."
      },
      {
        name: "React & TypeScript Basics",
        category: "web",
        stage: "Actively Exploring",
        icon: "Code2",
        description: "Component architecture, reactive state hooks, and type safety principles used to construct this very portfolio."
      },
    ]
  },
  {
    id: "tools",
    title: "Tools & Environments",
    badge: "Developer Workflow",
    description: "Essential toolchain powering consistent, version-controlled development",
    skills: [
      {
        name: "Git & GitHub",
        category: "tools",
        stage: "Proficient",
        icon: "GitBranch",
        description: "Source code version control, repository organization, branch workflows, and collaborative project management."
      },
      {
        name: "VS Code",
        category: "tools",
        stage: "Proficient",
        icon: "Layers",
        description: "Primary development environment customized with linting, debugging, and extensions for streamlined coding."
      },
      {
        name: "Command Line / Terminal",
        category: "tools",
        stage: "Proficient",
        icon: "Terminal",
        description: "Bash / PowerShell commands, environment configuration, package management, and file system navigation."
      },
    ]
  },
  {
    id: "exploring",
    title: "Currently Exploring",
    badge: "Future Horizons",
    description: "Emerging domains driving personal technical curiosity and hackathon research",
    skills: [
      {
        name: "AI & Acoustic Analysis",
        category: "exploring",
        stage: "Actively Exploring",
        icon: "Activity",
        description: "Studying spectral audio features (pitch, frequency, tone jitter) and synthetic speech detection models for VoiceTrust."
      },
      {
        name: "Cybersecurity & Anti-Spoofing",
        category: "exploring",
        stage: "Actively Exploring",
        icon: "ShieldAlert",
        description: "Understanding caller identity spoofing, conversational social-engineering analysis, and defensive digital safeguards."
      },
      {
        name: "IoT & Hardware Sensors",
        category: "exploring",
        stage: "Actively Exploring",
        icon: "Zap",
        description: "Experimenting with microcontrollers (Arduino/ESP32), sensor telemetry, and hardware-software interaction for YIP Kerala."
      },
    ]
  }
];

/* =========================================================================
   FEATURED PROJECTS
   1. Flagship: VoiceTrust — Multi-Signal Voice Identity Firewall (SIH 2026 PS 26104)
   2. YIP Kerala Innovation Project (with editable parameters)
   3. Engineering Projects Showcase (Expandable academic/programming labs)
   ========================================================================= */

export const projects: Project[] = [
  {
    id: "voicetrust",
    title: "VoiceTrust — Multi-Signal Voice Identity Firewall",
    tagline: "AI-Powered Real-Time Detection and Prevention of Voice Cloning Impersonation Attacks",
    category: "Flagship AI Security",
    year: "2026",
    status: "Proposed Solution Architecture",
    featured: true,
    badge: "SIH 2026 • Flagship Project",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "Python",
      "Acoustic Spectral Analysis",
      "Voice Cloning Detection",
      "Identity Verification",
      "Social-Engineering NLP",
      "Multi-Tier Risk Engine"
    ],
    metrics: [
      "SIH 2026 Problem Statement ID: 26104",
      "7-Stage Real-Time Pipeline",
      "Multi-Signal Defense Architecture",
      "Low / Medium / High Risk Alerts"
    ],
    hackathonInfo: {
      name: "Smart India Hackathon 2026",
      problemStatementId: "26104",
      psTitle: "AI-Powered Real-Time Detection and Prevention of Voice Cloning Impersonation Attacks",
      track: "Cybersecurity & Artificial Intelligence"
    },
    description: "A comprehensive AI-powered voice security architecture designed for Smart India Hackathon 2026 (Problem Statement ID 26104) that goes beyond basic spam-call detection by combining acoustic spectral analysis, caller identity verification, and conversation-level fraud assessment.",
    longDescription: "VoiceTrust is an innovative conceptual security framework engineered to counter the exponential rise of AI-generated deepfake voice scams and executive impersonation fraud. Developed as a solution for Smart India Hackathon 2026 (Problem Statement ID 26104), VoiceTrust aims to provide real-time call protection by analyzing multiple independent signals simultaneously rather than relying solely on superficial caller ID databases.",
    problemStatement: "Modern generative audio and neural vocoders enable malicious actors to clone human voices with chilling precision using mere seconds of reference audio. Traditional caller-ID tools only detect known flagged phone numbers, leaving victims defenseless against high-stakes social-engineering scams where attackers spoof familiar voices (family members, bank officials, senior executives) to solicit emergency wire transfers, OTPs, PINs, and credentials.",
    solutionOverview: "VoiceTrust proposes a multi-signal identity firewall that operates directly on the audio stream during incoming calls. By decomposing incoming audio into acoustic characteristics, comparing synthetic artifact markers, cross-referencing biometric identity, and analyzing conversational intent in real time, VoiceTrust generates continuous threat scores and issues immediate LOW, MEDIUM, or HIGH risk alerts to safeguard users.",
    voiceTrustSpecs: {
      keyHighlights: [
        "Goes beyond basic spam-call filters by assessing real-time acoustic authenticity, caller identity, and conversational intent.",
        "Detects neural vocoder phase artifacts, pitch micro-tremors, frequency anomalies, and spectral tone discrepancies characteristic of AI cloning.",
        "Parses speech streams for high-stress social engineering tactics: urgent money transfers, OTP solicitations, password requests, and fabricated authority.",
        "Multi-tiered warning system that can alert users visually, prompt verification challenges, or disrupt suspect audio channels.",
        "Transparently presented as an engineered solution design and research prototype under Smart India Hackathon 2026 PS 26104."
      ],
      workflow: [
        {
          stepNumber: 1,
          name: "Voice Input",
          shortDesc: "Real-time call audio stream capture",
          detail: "Captures the incoming caller's raw audio stream through low-latency telemetry buffers with noise reduction filtering.",
          icon: "Mic"
        },
        {
          stepNumber: 2,
          name: "Acoustic Analysis",
          shortDesc: "Spectral, pitch, and frequency decomposition",
          detail: "Extracts Mel-Frequency Cepstral Coefficients (MFCCs), spectral centroid, pitch trajectory, formant jitter, and harmonic ratios.",
          icon: "Activity"
        },
        {
          stepNumber: 3,
          name: "Voice-Cloning Detection",
          shortDesc: "Synthetic neural artifact identification",
          detail: "Scans for neural vocoder synthesis fingerprints, unnatural vocal boundary transitions, robotic phase anomalies, and lack of human breathing cadence.",
          icon: "Cpu"
        },
        {
          stepNumber: 4,
          name: "Identity Verification",
          shortDesc: "Acoustic biometric cross-referencing",
          detail: "Compares current vocal characteristics against enrolled biometric acoustic profiles or trusted voice prints to detect caller impersonation.",
          icon: "UserCheck"
        },
        {
          stepNumber: 5,
          name: "Conversation Analysis",
          shortDesc: "Intent and social-engineering semantic parsing",
          detail: "Transcribes and evaluates live conversation context for urgent demands, OTP requests, PIN inquiries, bank transfer orders, and coercion cues.",
          icon: "MessageSquareWarning"
        },
        {
          stepNumber: 6,
          name: "Risk Scoring Engine",
          shortDesc: "Dynamic multi-signal risk algorithm",
          detail: "Combines acoustic authenticity score, biometric mismatch delta, and conversational threat triggers into a real-time consolidated risk index.",
          icon: "Gauge"
        },
        {
          stepNumber: 7,
          name: "Real-Time Warning",
          shortDesc: "Tiered actionable user alerts & safeguards",
          detail: "Displays immediate on-screen warnings categorized as LOW, MEDIUM, or HIGH risk, with options to trigger verification questions or terminate the call.",
          icon: "AlertOctagon"
        }
      ],
      signals: [
        {
          title: "Acoustic & Spectral Characteristics",
          description: "Deconstructs fundamental frequency (F0), spectral tilt, tone inflection, and jitter to spot unnatural synthetic audio generation.",
          metrics: ["Pitch micro-variation", "Formant transitions", "Phase coherence"],
          icon: "Waves"
        },
        {
          title: "Voice Cloning & Deepfake Artifacts",
          description: "Detects neural vocoder synthesis flaws, algorithmic artifact bursts, and unnatural audio cutoffs invisible to the human ear.",
          metrics: ["Vocoder fingerprinting", "Spectral smoothness delta", "Breathing absence"],
          icon: "Binary"
        },
        {
          title: "Caller Identity Biometrics",
          description: "Verifies whether the caller's acoustic signature matches the claimed identity or trusted contact voice profile.",
          metrics: ["Vocal tract geometry", "Enrollment match score", "Impersonation index"],
          icon: "ShieldCheck"
        },
        {
          title: "Social-Engineering Intent Analysis",
          description: "Monitors spoken dialogue for psychological manipulation tactics, artificial urgency, and requests for sensitive credentials.",
          metrics: ["Urgency keyword density", "Financial request detection", "OTP/PIN solicitation alerts"],
          icon: "SearchAlert"
        }
      ],
      riskTiers: [
        {
          tier: "LOW",
          scoreRange: "0 - 35%",
          status: "Authentic & Verified",
          actionRequired: "Normal call operation; continuous silent monitoring for unexpected context shifts.",
          color: "emerald"
        },
        {
          tier: "MEDIUM",
          scoreRange: "36 - 70%",
          status: "Suspicious Voice / Unverified Caller",
          actionRequired: "Visual HUD warning displayed: 'Caller voice pattern deviates from authentic baseline. Do not share OTPs.'",
          color: "amber"
        },
        {
          tier: "HIGH",
          scoreRange: "71 - 100%",
          status: "High Probability Cloned Voice / Impersonation Attack",
          actionRequired: "Urgent red alert overlay: 'WARNING: Cloned voice & high-fraud urgency detected. Verification required before continuing.'",
          color: "rose"
        }
      ]
    }
  },
  {
    id: "yip-kerala",
    title: "YIP Kerala Innovation Project [Editable Initiative]",
    tagline: "Grassroots Engineering Solution for Young Innovators Programme (YIP) Kerala",
    category: "Innovation / YIP Kerala",
    year: "2025",
    status: "Active Innovation Track",
    featured: true,
    badge: "YIP Kerala • Innovation Track",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "Hardware Prototyping",
      "Sensor Telemetry",
      "Python Scripting",
      "Microcontroller (ESP32 / Arduino)",
      "Systems Engineering"
    ],
    metrics: [
      "Young Innovators Programme Track",
      "Hardware + Software Prototyping",
      "Societal Impact Focus",
      "Status: Proposal & Lab Design"
    ],
    description: "A structured innovation project developed for the Young Innovators Programme (YIP) Kerala under K-DISC, aimed at formulating practical engineering solutions for regional and societal challenges. Contains fully editable fields for final project specifics.",
    longDescription: "The Young Innovators Programme (YIP) by Kerala Development and Innovation Strategic Council (K-DISC) provides a platform for engineering students to transform innovative ideas into deployable prototypes. This project card is structured with clear editable fields so that as our engineering team finalizes the exact submission title, hardware components, and measurable impact metrics, the portfolio can be updated effortlessly without changing any code.",
    problemStatement: "[EDITABLE FIELD] Problem Statement: Specify the societal, agricultural, environmental, or community problem your YIP project addresses (e.g. smart agricultural soil-moisture telemetry, affordable assistive technology for elderly individuals, or energy monitoring in educational institutions).",
    solutionOverview: "[EDITABLE FIELD] Proposed Solution: Outline the engineering approach, methodology, hardware-software integration, and user-centric features your team has designed to resolve the problem effectively.",
    yipSpecs: {
      initiativeName: "YIP Kerala Innovation Initiative [Name to be confirmed]",
      problemArea: "[Editable: Define specific challenge — e.g. Community resource management / Environmental monitoring]",
      proposedSolution: "[Editable: Detail how your hardware-software prototype resolves the core bottleneck]",
      hardwareComponents: [
        "Microcontroller Unit (ESP32 / Arduino Uno / Raspberry Pi Pico)",
        "Sensor Array (Environmental, Ultrasonic, or Electrical transducers)",
        "Power Regulation & Battery Telemetry Module",
        "Prototyping Circuit & Breadboard Assembly"
      ],
      softwareComponents: [
        "Python Data Logging & Analysis Scripts",
        "Microcontroller C/C++ Firmware",
        "Lightweight Telemetry Dashboard / Web Interface",
        "Automated Threshold Alert System"
      ],
      targetImpact: [
        "[Editable Metric 1: e.g. 35% reduction in resource wastage or response delay]",
        "[Editable Metric 2: Accessible, low-cost bill of materials suitable for local adoption]",
        "[Editable Metric 3: Real-time telemetry accessible without specialized industrial hardware]"
      ],
      isEditableNotice: true
    }
  },
  {
    id: "python-engineering-toolkit",
    title: "Python Algorithmic Toolkit & Automation Suite",
    tagline: "Modular Python utility library for data processing, algorithm analysis, and file automation",
    category: "Engineering & Software",
    year: "2024 - 2025",
    status: "Prototype & Lab Build",
    featured: false,
    badge: "Core Programming Project",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "Python 3",
      "Data Structures & Algorithms",
      "CLI Utilities",
      "File I/O Automation",
      "Modular Architecture"
    ],
    metrics: [
      "15+ Automated Script Modules",
      "Clean PEP 8 Architecture",
      "Algorithmic Complexity Benchmarks",
      "Extensible CLI Interface"
    ],
    description: "A modular, cleanly documented Python library created to sharpen fundamental software engineering skills: efficient data structures, file system batch processors, mathematical matrix solvers, and automation scripts.",
    longDescription: "As part of my first-year engineering focus on mastering Python, I built this modular toolkit to apply computer science theory to practical command-line utilities. The project contains custom implementations of core sorting and searching algorithms, file batching utilities, and automated log parsers designed with strict modularity and documentation.",
    problemStatement: "Repetitive academic data handling and algorithmic problem solving often require bespoke scripting. Developing a consolidated, well-structured utility toolkit reinforces code modularity, algorithmic efficiency analysis (Big-O), and clean Python idioms.",
    solutionOverview: "Organized into distinct packages: algorithms (searching, sorting, recursion), file utilities (batch rename, text extraction, format conversion), and CLI tools built with argparse for intuitive terminal usage.",
    engineeringSpecs: {
      domain: "Computer Science Foundations & Practical Scripting",
      labType: "Independent Academic Project",
      keyDeliverables: [
        "Interactive CLI menu for testing sorting algorithms with runtime benchmarks",
        "Batch file reorganization and metadata extraction script",
        "Reusable mathematical helper modules for linear algebra & statistics"
      ],
      learningTakeaways: [
        "Deepened understanding of time/space complexity and recursion limits",
        "Mastery of Python error handling, context managers, and modular packaging",
        "Writing maintainable docstrings and structured unit tests"
      ]
    }
  },
  {
    id: "sensor-telemetry-lab",
    title: "Microcontroller Sensor Telemetry & Electronics Lab",
    tagline: "Academic hardware-software interfacing lab exploring real-time sensor data acquisition",
    category: "Hardware & IoT",
    year: "2024 - 2025",
    status: "Prototype & Lab Build",
    featured: false,
    badge: "Hardware & Electronics",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "Microcontroller Programming",
      "Serial Communication (UART)",
      "Analog / Digital Sensors",
      "Python Telemetry Plotter",
      "Circuit Prototyping"
    ],
    metrics: [
      "Real-Time Serial Telemetry",
      "Multi-Sensor Interface",
      "Hardware Threshold Alarms",
      "Hands-On Breadboard Assembly"
    ],
    description: "Hands-on engineering laboratory project connecting microcontrollers with physical sensors (ultrasonic, temperature, light), transmitting live serial telemetry to a Python desktop plotter.",
    longDescription: "Developed as an exploratory bridge between electronics hardware and software engineering. The project interfaces analog and digital sensors with a microcontroller board, translates physical phenomena into electrical signals, and streams serial data to a Python script that logs readings and generates threshold warnings.",
    problemStatement: "Understanding how software interacts with the physical world requires practical experience with voltage dividers, ADC sampling, signal noise, and serial communication protocols.",
    solutionOverview: "Constructed on a breadboard with regulated power distribution. Written microcontroller firmware reads sensor values at configured intervals and transmits formatted packets over serial (USB-UART), where a Python script plots real-time trends.",
    engineeringSpecs: {
      domain: "Basic Electrical & Electronics Engineering Interfacing",
      labType: "Academic Engineering Workshop & Lab Experiment",
      keyDeliverables: [
        "Calibrated multi-sensor breadboard circuit with status LED indicators",
        "Firmware routines for continuous ADC reading and noise averaging",
        "Python serial reader logging timestamps and triggering audible threshold alerts"
      ],
      learningTakeaways: [
        "Hands-on grasp of analog-to-digital conversion and debounce logic",
        "Interfacing hardware over serial communication ports",
        "Debugging hardware wiring faults vs firmware logic bugs"
      ]
    }
  },
  {
    id: "creative-developer-portfolio",
    title: "Personal Portfolio & Web Architecture",
    tagline: "Award-winning Dark Luxury personal brand website engineered with Vite, React, and Tailwind CSS",
    category: "Engineering & Software",
    year: "2026",
    status: "Completed Concept",
    featured: false,
    badge: "Web Engineering",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "Vite",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Router"
    ],
    metrics: [
      "100% Accessible & Responsive",
      "Dark Luxury Visual Identity",
      "Dynamic SIH 26104 Detail View",
      "Zero Broken Links / Placeholders"
    ],
    description: "A production-grade, highly responsive personal portfolio website engineered from scratch with a custom Dark Luxury design system, electric-lime accents, fluid motion choreography, and centralized data architecture.",
    longDescription: "Designed to set an uncompromising benchmark for student portfolios. Rather than relying on generic templates, this web application was built with modular React components, strict TypeScript contracts, accessible contrast standards, and an interactive presentation of flagship engineering projects.",
    problemStatement: "Most student websites are generic, lack clear personal brand identity, and fail to convey technical curiosity and project depth effectively to hackathon judges, mentors, and future recruiters.",
    solutionOverview: "Created a bespoke Dark Luxury design system with Urbanist typography, working dark/light theme switching, interactive VoiceTrust workflow visualization, and centralized data files for seamless maintenance.",
    engineeringSpecs: {
      domain: "Modern Frontend Engineering & Design Systems",
      labType: "Personal Production Application",
      keyDeliverables: [
        "Complete responsive SPA with React Router support for project deep-dives",
        "Interactive 7-step VoiceTrust workflow visualizer",
        "Centralized portfolio data structure with editable placeholders"
      ],
      learningTakeaways: [
        "Component modularity and state management in React 18",
        "TypeScript interface modeling for complex multi-tier data structures",
        "Responsive typography scaling and accessible color tokens"
      ]
    }
  }
];

/* =========================================================================
   EDUCATION
   Accurate 1st-year engineering student background with editable placeholders
   ========================================================================= */

export const educationData: EducationItem[] = [
  {
    id: "btech-engineering",
    degree: "Bachelor of Technology (B.Tech)",
    field: "[Your Engineering Branch — e.g. Computer Science and Engineering]", // EDITABLE PLACEHOLDER
    institution: "[Your Engineering College / Institute Name]", // EDITABLE PLACEHOLDER
    location: "Kerala, India",
    period: "2024 — 2028 (Expected)",
    currentYear: "First Year Undergraduate",
    grade: "First-Year Enrolled", // EDITABLE: e.g. "SGPA: 8.8 / 10" or "In Progress"
    highlights: [
      "Currently in First Year of undergraduate engineering studies, building strong mathematical and algorithmic fundamentals.",
      "Active participant in technical symposiums, hackathon ideation cells, and engineering innovation initiatives.",
      "Engaged in hands-on laboratories: Programming in Python, Basic Electrical & Electronics Engineering, and Engineering Physics.",
      "Formed collaborative project teams for Smart India Hackathon 2026 (VoiceTrust) and YIP Kerala."
    ],
    relevantCoursework: [
      "Problem Solving & Python Programming",
      "Engineering Mathematics (Calculus & Linear Algebra)",
      "Basic Electrical & Electronics Engineering",
      "Engineering Physics & Scientific Computing",
      "Foundations of Computing Systems"
    ],
    isPlaceholder: true
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Education (12th Grade / Plus Two)",
    field: "Science Stream (Physics, Chemistry, Mathematics, Computer Science)",
    institution: "[Your Higher Secondary School Name]", // EDITABLE PLACEHOLDER
    location: "Kerala, India",
    period: "Completed 2024",
    currentYear: "Secondary Completion",
    grade: "[Your Percentage / Grade — e.g. 90%+ / A+]", // EDITABLE PLACEHOLDER
    highlights: [
      "Strong foundation in core physical sciences, analytical problem solving, and introductory computing concepts.",
      "Developed initial passion for coding, algorithms, and engineering innovation.",
      "Participated in school science and mathematics exhibitions and competitive examinations."
    ],
    relevantCoursework: [
      "Physics & Mechanics",
      "Chemistry",
      "Mathematics & Analytical Geometry",
      "Computer Science Fundamentals"
    ],
    isPlaceholder: true
  }
];

/* =========================================================================
   EXPERIENCE & INITIATIVES
   Authentic early-stage engineering, hackathon, and teamwork experiences
   (No fabricated corporate job claims)
   ========================================================================= */

export const experienceData: ExperienceItem[] = [
  {
    id: "sih-2026-voicetrust",
    role: "Project Lead & Solution Architect (VoiceTrust)",
    organization: "Smart India Hackathon 2026 (SIH 2026)",
    location: "Kerala, India / National",
    period: "2025 — Present",
    current: true,
    type: "Hackathon Initiative",
    description: "Leading the architectural design and research ideation for Project VoiceTrust under Problem Statement ID 26104 ('AI-Powered Real-Time Detection and Prevention of Voice Cloning Impersonation Attacks').",
    achievements: [
      "Formulated the 7-stage end-to-end multi-signal defense pipeline combining acoustic analysis, voice-cloning detection, biometric identity verification, and real-time conversation risk scoring.",
      "Conducted extensive literature research on deepfake voice synthesis vectors, neural vocoder acoustic artifacts, and social-engineering coercion patterns.",
      "Designed the multi-tier alert engine (LOW, MEDIUM, HIGH) detailing how actionable user warnings mitigate financial fraud and credential theft.",
      "Coordinating technical presentation slides, architecture flowcharts, and research documentation for team submissions."
    ],
    technologies: [
      "Problem Statement 26104",
      "AI Voice Security",
      "Acoustic Signal Processing",
      "Cybersecurity Defense",
      "System Architecture"
    ]
  },
  {
    id: "yip-kerala-innovator",
    role: "Student Innovator & Idea Lead",
    organization: "Young Innovators Programme (YIP Kerala - K-DISC)",
    location: "Kerala, India",
    period: "2024 — Present",
    current: true,
    type: "Innovation Track",
    description: "Participating in Kerala's flagship youth innovation platform to identify regional societal bottlenecks and formulate practical, technology-driven engineering solutions.",
    achievements: [
      "Collaborating in a student engineering team to survey real-world user challenges and outline hardware-software feasibility models.",
      "Drafting structured innovation proposals including problem definition, component bills of materials, and target societal impact metrics.",
      "Engaging with mentor feedback sessions to iterate on prototype practicality and low-cost implementation."
    ],
    technologies: [
      "YIP Kerala Track",
      "Hardware Prototyping",
      "Python Data Logging",
      "Systems Innovation",
      "Feasibility Analysis"
    ]
  },
  {
    id: "college-workshops-teamwork",
    role: "Engineering Student Developer & Workshop Participant",
    organization: "College Technical Clubs & Engineering Laboratories",
    location: "Kerala, India",
    period: "2024 — Present",
    current: true,
    type: "Workshop & Lab",
    description: "Active engagement in technical workshops, hands-on programming bootcamps, and engineering laboratories.",
    achievements: [
      "Completed hands-on laboratory sessions in Python programming, circuit design, and basic microcontroller interfacing.",
      "Collaborated with peers on pair-programming exercises, debugging challenges, and micro-projects.",
      "Continuously building independent coding projects to solidify academic theory into practical muscle memory."
    ],
    technologies: [
      "Python 3",
      "HTML/CSS/JS",
      "Git & GitHub",
      "Electronics Lab Instruments",
      "Team Collaboration"
    ]
  },
  {
    id: "future-internship-placeholder",
    role: "[Future Engineering Internship / Research Fellowship Placeholder]",
    organization: "[Target Tech Company / Research Lab Placeholder]",
    location: "Remote / Hybrid / On-site",
    period: "Upcoming (Summer 2025 / 2026)",
    current: false,
    type: "Internship (Upcoming)",
    description: "Editable card placeholder reserved for upcoming engineering internships, industrial training, or faculty research assistantships as my academic journey advances.",
    achievements: [
      "Placeholder ready for real responsibilities, technical contributions, and project outcomes once completed.",
      "Demonstrates proactive career planning and readiness for practical software and engineering opportunities."
    ],
    technologies: [
      "Software Engineering",
      "Applied AI / ML",
      "Web Technologies",
      "Professional Mentorship"
    ],
    isPlaceholder: true
  }
];

/* =========================================================================
   ACHIEVEMENTS & HONORS
   Hackathons, competitions, and academic milestones with editable fields
   ========================================================================= */

export const achievementsData: AchievementItem[] = [
  {
    id: "sih-2026-selection",
    title: "Smart India Hackathon 2026 — Project VoiceTrust Proposal",
    organization: "Ministry of Education Innovation Cell / SIH 2026",
    year: "2026",
    category: "Hackathon",
    statusBadge: "Active Candidate",
    description: "Engineered and submitted the multi-signal Voice Identity Firewall architecture for Problem Statement ID 26104, addressing the urgent national need for real-time voice-cloning defense."
  },
  {
    id: "yip-kerala-nomination",
    title: "Young Innovators Programme (YIP Kerala) Track Candidate",
    organization: "Kerala Development and Innovation Strategic Council (K-DISC)",
    year: "2025",
    category: "Innovation Track",
    statusBadge: "Active Innovation Track",
    description: "Selected to participate in the prestigious state-wide innovation initiative aimed at transforming student concepts into deployable societal solutions."
  },
  {
    id: "academic-excellence-placeholder",
    title: "Academic & Competitive Science / Mathematics Distinctions",
    organization: "[Your School / College Board Placeholder]",
    year: "2024",
    category: "Academic Distinction",
    statusBadge: "Verified Milestone",
    description: "Demonstrated consistent academic excellence in mathematics, physical sciences, and introductory computing throughout pre-university education.",
    isPlaceholder: true
  },
  {
    id: "technical-competition-placeholder",
    title: "[Editable Achievement Placeholder — e.g. Coding Competition / Tech Fest Prize]",
    organization: "[College Tech Fest / Event Organizer Name]",
    year: "2025",
    category: "Technical Competition",
    statusBadge: "Upcoming Milestone",
    description: "Easily update this card with your actual event awards, coding quiz certificates, or hackathon recognitions as you participate in more events.",
    isPlaceholder: true
  }
];

/* =========================================================================
   CERTIFICATIONS
   Foundational technical certifications with editable fields
   ========================================================================= */

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-python-foundations",
    title: "Python Programming & Algorithmic Foundations",
    issuer: "[Editable Issuer — e.g. Cisco Networking Academy / Coursera / Kaggle]",
    issueDate: "2024",
    credentialId: "PY-FND-[EDITABLE-ID]",
    verifyUrl: "https://example.com/verify/python-cert",
    skills: ["Python 3", "Data Structures", "Modular Programming", "Algorithm Design"],
    isPlaceholder: true
  },
  {
    id: "cert-web-fundamentals",
    title: "Responsive Web Design & Web Standards (HTML, CSS, JS)",
    issuer: "[Editable Issuer — e.g. FreeCodeCamp / Meta / University]",
    issueDate: "2024",
    credentialId: "WEB-DEV-[EDITABLE-ID]",
    verifyUrl: "https://example.com/verify/web-cert",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"],
    isPlaceholder: true
  },
  {
    id: "cert-cybersecurity-intro",
    title: "Introduction to Cybersecurity & Digital Threat Awareness",
    issuer: "[Editable Issuer — e.g. Cisco / Google / Coursera]",
    issueDate: "2024",
    credentialId: "SEC-FND-[EDITABLE-ID]",
    verifyUrl: "https://example.com/verify/cybersecurity-cert",
    skills: ["Threat Vectors", "Authentication", "Social Engineering", "Network Hygiene"],
    isPlaceholder: true
  },
  {
    id: "cert-future-placeholder",
    title: "[Editable Certification Placeholder — e.g. Cloud Foundations / AI Course]",
    issuer: "[Upcoming Certification Provider]",
    issueDate: "2025",
    credentialId: "CERT-[EDITABLE-ID]",
    verifyUrl: "https://example.com/verify/placeholder",
    skills: ["Emerging Technologies", "Continuous Learning", "Engineering Skills"],
    isPlaceholder: true
  }
];
