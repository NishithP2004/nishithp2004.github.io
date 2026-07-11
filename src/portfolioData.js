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
      "I build practical AI and cloud systems with a bias for useful interfaces: distributed browser sandboxes, agentic security tooling, semantic search, educational platforms, and scalable full-stack apps.",
    highlights: [
      "B.Tech CSE graduate from Amrita Vishwa Vidyapeetham, Bangalore",
      "Software Engineer Intern at Deepwatch, building production software in a hybrid engineering team",
      "Currently working on AI agents and learning deeper generative AI frameworks, app development, and Docker workflows",
      "GitHub Developer Program Member, GitHub Pro user, and active open-source builder",
      "Beta Microsoft Student Ambassador and former CodeChef ASEB Vice President",
      "Google Code-in 2019 Finalist and Google Code To Learn 2019 Winner",
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
      "A selection of research-grade and product-minded builds spanning AI agents, sandboxed browsers, voice-first security simulation, browser automation, semantic search, and realtime systems.",
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
    id: "achievements",
    command: "achievements",
    title: "Achievements",
    icon: "trophy",
    itemIcon: "trophy",
    kicker: "cat awards.log",
    body:
      "Recognition across design, security research, AI learning, academics, and open-source competitions.",
    items: [
      "Adobe Fund for Design grant, 2024 - $1,500",
      "Microsoft M365 Security Bounty, 2024 - $6,000",
      "Honorable Mention, Microsoft Developers AI Learning Hackathon, 2024 - $400",
      "SSF 2021 Awardee, Office of the Principal Scientific Adviser to the GOI",
      "OCA-Rev Scipio Merit Award, ISC Science topper",
      "Google Code To Learn 2019 Winner",
      "Google Code-in 2019 Finalist"
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
      "Academic foundation in computer science with strong performance in school-level science and computing.",
    items: [
      "B.Tech Computer Science Engineering, Amrita Vishwa Vidyapeetham, Bangalore, 2022-2026, CGPA 8.9",
      "ISC Grade 12 Computer Science, Bishop Cotton Boys School, 98%",
      "ICSE Grade 10 Science, Bishop Cotton Boys School, 96.6%",
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
  // "browser",
  "skills",
  "achievements",
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
