export const profile = {
  name: "Nishith P",
  handle: "NishithP2004",
  title: "Software Engineer Intern | Developer | AI and Cloud Builder",
  email: "me@nishithp.page",
  personalEmail: "nishithp11@gmail.com",
  website: "https://nishithp.page",
  github: "https://github.com/NishithP2004",
  linkedin: "https://www.linkedin.com/in/nishith-p",
  x: "https://twitter.com/nishithp2004",
  orcid: "https://orcid.org/0009-0008-7680-9013",
  scholar: "https://scholar.google.com/citations?user=XiymEBEAAAAJ&hl=en",
  location: "Bangalore, India",
  summary:
    "Developer, researcher, and tech enthusiast building at the intersection of AI agents, cloud-native systems, security automation, virtual cloud browsers, and full-stack product experiences.",
  socials: [
    ["Email", "mailto:me@nishithp.page", "envelope"],
    ["Website", "https://nishithp.page", "globe"],
    ["GitHub", "https://github.com/NishithP2004", "github"],
    ["LinkedIn", "https://www.linkedin.com/in/nishith-p", "linkedin"],
    ["Medium", "https://medium.com/@nishithp", "medium"],
    ["Hugging Face", "https://huggingface.co/NishithP2004", "huggingFace"],
    ["Kaggle", "https://www.kaggle.com/nishithp", "kaggle"],
    ["Facebook", "https://www.facebook.com/nishithp2004", "facebook"],
    ["Instagram", "https://www.instagram.com/nishith_2004/", "instagram"],
    ["Twitter", "https://twitter.com/nishithp2004", "twitter"],
    ["Snapchat", "https://www.snapchat.com/add/nishith_p", "snapchat"],
    ["YouTube", "https://www.youtube.com/@nishithp", "youtube"],
    ["Google Scholar", "https://scholar.google.com/citations?user=XiymEBEAAAAJ&hl=en", "googleScholar"],
    ["GitLab", "https://www.gitlab.com/nishithp2004", "gitlab"],
    ["ORCID", "https://orcid.org/0009-0008-7680-9013", "globe"],
  ],
}

export const sections = [
  {
    id: "about",
    command: "about",
    title: "About",
    icon: "user",
    itemIcon: "terminal",
    kicker: "whoami",
    body:
      "I’m a software engineer and researcher drawn to the point where ambitious technical ideas become useful, dependable products.",
    statement:
      "I enjoy working end to end—from exploring an idea to shaping the infrastructure, interface, and details that make it useful.",
    focus: "AI agents / cloud-native systems / security automation / product engineering",
    highlights: [
      {
        label: "Now",
        title: "Software Engineer Intern at Deepwatch",
        detail: "Building production software in a hybrid engineering team while deepening work in AI agents, generative AI, and cloud-native development.",
      },
      {
        label: "Education",
        title: "B.Tech in Computer Science Engineering",
        detail: "Amrita Vishwa Vidyapeetham, Bengaluru · 2022–2026 · CGPA 8.9.",
      },
      {
        label: "Beyond code",
        title: "Community leadership and early recognition",
        detail: "Beta Microsoft Student Ambassador, former CodeChef ASEB Vice President, Google Code-in 2019 Finalist, and Google Code To Learn 2019 Winner.",
      },
    ],
  },
  {
    id: "experience",
    command: "experience",
    title: "Work Experience",
    icon: "briefcase",
    kicker: "cat experience.log",
    body:
      "Current and independent work across software engineering, responsible disclosure, and applied security research.",
    experiences: [
      {
        role: "Software Engineer Intern",
        company: "Deepwatch",
        url: "https://deepwatch.com",
        type: "Internship",
        dates: "Feb 2026 - Present",
        location: "Bengaluru, Karnataka, India · Hybrid",
        bullets: [
          "Current SDE internship focused on software engineering delivery in a hybrid product engineering environment.",
          "Applying full-stack, cloud, automation, and security-minded engineering practices to production work.",
        ],
      },
      {
        role: "Independent Security Researcher (Bug Bounty & Responsible Disclosure)",
        company: "Microsoft",
        type: "Freelance",
        dates: "Sep 2024 - Present",
        location: "Remote",
        bullets: [
          "Reported security vulnerabilities via Microsoft's Coordinated Vulnerability Disclosure (CVD) program.",
          "Focus areas: web application security, access control, XSS, and business logic vulnerabilities.",
          "Experienced with responsible disclosure, reproduction steps, and impact assessment.",
        ],
      },
    ],
  },
  {
    id: "projects",
    command: "projects",
    title: "Projects",
    icon: "code",
    kicker: "ls ./projects",
    body:
      "A selection of research-grade and product-minded builds spanning AI agents, online assessment, sandboxed browsers, voice-first security simulation, browser automation, semantic search, and realtime systems.",
    items: [
      {
        name: "CraveLens",
        year: "2026",
        description:
          "Privacy-first Chrome extension that detects food in YouTube videos with on-device FoodNet and Gemma 3n inference, then uses a LangGraph ReAct agent and authenticated Swiggy MCP tools to prepare a personalized, discount-aware cart with live progress and an explicit confirmation gate.",
        tags: ["On-device AI", "Gemma 3n", "LangGraph", "Swiggy MCP"],
        liveUrl: "https://cravelens.nishithp.page/",
        sourceUrl: "https://github.com/NishithP2004/CraveLens",
        sourceLabel: "Source code",
      },
      {
        name: "RuneLabs",
        year: "2025",
        description:
          "Production-ready coding and assessment platform for designing, running, and reviewing technical contests end to end. It combines an online judge with configurable MCQ workflows, rich Markdown and TeX authoring, S3-backed media, interactive D3 analytics, detailed participant reports, public profiles, and responsive student and admin experiences.",
        tags: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
        liveUrl: "https://runelabs.ignitestudents.club",
      },
      {
        name: "Spectra",
        year: "2025",
        description:
          "Session-based AI orchestration platform using Dockerized microservices on Kubernetes, specialized multi-agents, sandboxed browsers, Kali tooling, MCP integrations, and RTMP session recording.",
        tags: ["Kubernetes", "AI Agents", "MCP", "Sandboxed Browsers"],
        liveUrl: "https://devpost.com/software/spectra-2npte7",
        sourceUrl: "https://github.com/NishithP2004/spectra",
        sourceLabel: "Source code",
      },
      {
        name: "BaseScript",
        year: "2025",
        description:
          "Baseline-aware scripting language for web automation with real-time CSS compatibility intelligence, Docker, Redis, live browser VNC, and YAML compilation targets for Puppeteer, Playwright, and Selenium.",
        tags: ["Browser Automation", "YAML", "Playwright", "Selenium"],
        liveUrl: "https://devpost.com/software/basescript",
        sourceUrl: "https://github.com/NishithP2004/BaseScript",
        sourceLabel: "Source code",
      },
      {
        name: "VishNet",
        year: "2025",
        description:
          "AI-powered vishing simulation and defense platform combining LLM-driven personas, ElevenLabs voice cloning, Neo4j PII graph extraction, Twilio call automation, Redis orchestration, and streaming Gemini/LangChain responses.",
        tags: ["Security", "Voice AI", "Simulation", "Analytics"],
        liveUrl: "https://devpost.com/software/vishnet-ai-powered-vishing-simulation-defence",
        sourceUrl: "https://github.com/NishithP2004/VishNet",
        sourceLabel: "Source code",
      },
      {
        name: "OncoTrack",
        year: "2025",
        description:
          "Clinical AI support system for oral cancer progression analysis using a fine-tuned Meta-Llama-3.1-8B model, Streamlit and Flask interfaces, document upload, visualizations, AI summaries, and a multilingual RAG assistant.",
        tags: ["Healthcare AI", "LLMs", "RAG", "Streamlit"],
        sourceUrl: "https://github.com/NishithP2004?tab=repositories&q=OncoTrack",
        sourceLabel: "Search source",
      },
      {
        name: "Detecting AI-Generated Text",
        year: "2024",
        description:
          "Realtime scalable distributed computing approach for AI-generated text detection using Kubernetes, Kafka, ML pipelines, and LoRA-based LLM fine-tuning.",
        tags: ["Kubernetes", "Kafka", "LoRA", "LLMs"],
        sourceUrl: "https://github.com/NishithP2004?tab=repositories&q=ai-generated-text",
        sourceLabel: "Search source",
      },
      {
        name: "NeoPentesting",
        year: "2024",
        description:
          "Voice-activated framework for automated penetration testing with a Burp Suite extension, hierarchical multi-agent orchestration, and Raspberry Pi voice input.",
        tags: ["Security", "Agents", "Burp Suite", "Voice UI"],
        sourceUrl: "https://github.com/NishithP2004?tab=repositories&q=NeoPentesting",
        sourceLabel: "Search source",
      },
      {
        name: "Nexus Search",
        year: "2024",
        description:
          "Semantic search engine using knowledge graphs, vector indexing, scalable crawling, and Gemini-powered answer enrichment.",
        tags: ["Semantic Search", "Graph DB", "Vectors", "Gemini"],
        sourceUrl: "https://github.com/NishithP2004?tab=repositories&q=Nexus",
        sourceLabel: "Search source",
      },
      {
        name: "Project X",
        year: "2023",
        description:
          "AI-powered Azure education platform that transforms static documents into dynamic learning experiences with RAG, chat, quiz generation, curated resources, AI podcasts, and Twilio-driven persona discussions.",
        tags: ["React", "Java", "Azure", "Cosmos DB"],
        liveUrl: "https://devpost.com/software/project-x-xgo16d",
        sourceUrl: "https://github.com/NishithP2004?tab=repositories&q=Project-X",
        sourceLabel: "Search source",
      },
      {
        name: "GPS Tracker for College Bus",
        year: "2023",
        description:
          "Realtime bus tracking system with secure auth, Google Maps, Socket.IO updates, and WhatsApp notifications.",
        tags: ["Maps", "Socket.IO", "Realtime", "Auth"],
        sourceUrl: "https://github.com/NishithP2004?tab=repositories&q=GPS",
        sourceLabel: "Search source",
      },
    ],
  },
  {
    id: "journey",
    command: "journey",
    title: "Journey",
    icon: "terminal",
    kicker: "git log --story",
    body:
      "From early open-source experiments and school leadership to four years of building, competing, leading, and learning at Amrita.",
  },
  /*
  {
    id: "browser-lab",
    command: "browser",
    title: "Cloud Browser Lab",
    icon: "cloudflare",
    kicker: "open cloud://browser",
    body:
      "A creative product window inspired by Spectra-style virtual cloud browsers: isolated browser sessions, remote UI automation, event telemetry, session streaming, and secure shareable workspaces.",
    highlights: [
      "Ephemeral browser sessions with clean-room execution and noVNC-style remote access",
      "Cloudflare Browser Rendering-inspired edge automation with Playwright, screenshots, links, and markdown extraction patterns",
      "Playwright and automation hooks exposed to agents through MCP-style tooling",
      "Streaming viewport preview with command logs, task memory, and optional session recording",
      "Kubernetes-ready session provisioning for isolated multi-user workloads",
    ],
  },
  */
  {
    id: "skills",
    command: "skills",
    title: "Skills",
    icon: "code",
    kicker: "cat skills.json",
    body:
      "Differentiated strengths in AI agents, cloud infrastructure, browser automation, backend engineering, retrieval, product interfaces, and security.",
    groups: [
      ["AI & Agents", "robot", "LangChain / LangGraph", "MCP", "Ollama", "Langfuse", "Google ADK"],
      ["Cloud & Infrastructure", "cloudflare", "Microsoft Azure", "Google Cloud", "AWS", "Cloudflare", "Docker", "Kubernetes"],
      ["Automation & Browser Systems", "desktop", "Chrome Extensions", "Playwright", "Puppeteer", "Selenium", "Chrome automation", "noVNC"],
      ["Backend & APIs", "server", "Node.js", "Express", "Python", "Java", "Azure Functions", "Socket.IO"],
      ["Data & Retrieval", "database", "Vector DBs", "Neo4j", "Redis", "MongoDB", "Azure Cosmos DB", "Firebase", "SQLite"],
      ["Frontend", "code", "React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      ["Security", "shield", "Burp Suite", "Kali Linux tooling", "Nmap", "SQLMap", "CyberChef"],
    ],
  },
  {
    id: "education",
    command: "education",
    title: "Education",
    icon: "graduationCap",
    itemIcon: "graduationCap",
    kicker: "cat education.md",
    body:
      "A consistent academic path through computer science, grounded in strong school-level performance and four years of engineering study.",
    items: [
      {
        id: "btech-cse",
        level: "Undergraduate",
        period: "2022–2026",
        qualification: "B.Tech · Computer Science Engineering",
        institution: "Amrita Vishwa Vidyapeetham",
        location: "Bengaluru",
        result: "8.9",
        resultLabel: "CGPA",
        featured: true,
      },
      {
        id: "isc-computer-science",
        level: "Senior Secondary",
        period: "ISC · Grade 12",
        qualification: "Computer Science",
        institution: "Bishop Cotton Boys' School",
        location: "Bengaluru",
        result: "98%",
        resultLabel: "Score",
      },
      {
        id: "icse-science",
        level: "Secondary",
        period: "ICSE · Grade 10",
        qualification: "Science",
        institution: "Bishop Cotton Boys' School",
        location: "Bengaluru",
        result: "96.6%",
        resultLabel: "Score",
      },
    ],
  },
  {
    id: "contact",
    command: "contact",
    title: "Contact",
    icon: "envelope",
    kicker: "ssh nishith",
    body:
      "Open to research collaborations, product internships, cloud/AI projects, and security tooling conversations.",
    links: [
      ...profile.socials,
    ],
  },
]

export const commands = [
  "help",
  "about",
  "experience",
  "projects",
  "journey",
  "gallery",
  "credentials",
  "achievements",
  // "browser",
  "skills",
  "education",
  "contact",
  "repo",
  "sudo",
  "clear",
]

export const sectionByCommand = sections.reduce((acc, section) => {
  acc[section.command] = section
  return acc
}, {})

sectionByCommand.gallery = sectionByCommand.journey
sectionByCommand.credentials = sectionByCommand.journey
sectionByCommand.achievements = sectionByCommand.journey
