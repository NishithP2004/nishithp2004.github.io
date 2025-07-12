const help = `### ❓ Available Commands

Here are the commands you can use:

*   **about**: 👨‍💻 Who is Nishith?
*   **projects**: 🚀 View my key projects.
*   **skills**: 🛠️ List of my technical skills.
*   **volunteering**: 🤝 My leadership and community roles.
*   **roadmap**: 🗺️ My goals and future plans.
*   **education**: 🎓 My educational background.
*   **achievements**: 🏆 List of my awards and accomplishments.
*   **contact**: 📬 How to get in touch with me.
*   **sudo**: 🔒 Request admin privileges.
*   **clear**: ✨ Clear the terminal screen.`

const about = `### 👋 About Me

I am a passionate Student of Technology with expertise in **Full Stack Development**, **Generative AI**, and **Cloud Computing**. I am committed to driving impactful projects, continuous learning, and pursuing opportunities with pioneering organizations that value collaboration and mutual growth. 🚀`

const projects = `### 🚀 My Projects

🤖 **Detecting AI-Generated Text: A Realtime Scalable Distributed Computing Approach (2024)**
*   Engineered a scalable, Kubernetes-based system for real-time AI-generated text detection, orchestrating data pipelines with Kafka.
*   Implemented ML pipelines, fine-tuning LLMs using LoRA for robust deployment.

🎤 **NeoPentesting: A Voice-Activated Framework for Automated Penetration Testing (2024)**
*   Spearheaded the development of an AI-powered, voice-activated Burp Suite extension for automated penetration testing.
*   Implemented a hierarchical multi-agent framework and integrated voice recognition via Raspberry Pi 5 for hands-free operation.

🔍 **Nexus Search: Unveiling the Power of Semantic Search (2024)**
*   Architected and developed a semantic search engine using knowledge graphs, vector indexing, and LLMs.
*   Engineered a scalable web crawler and integrated Google Gemini for enhanced search results.

🎓 **Project X: The power of knowledge in the palm of your hands (2023)**
*   Created an educational platform with a React JS and Java front-end, managed by microservices in Azure Functions.
*   Leveraged Google's PaLM API and Gemini Pro LLMs and implemented efficient data storage using Azure Cosmos DB.

🚌 **GPS Tracker for College Bus (2023)**
*   Designed and implemented a real-time bus tracking system with secure authentication, leveraging the Google Maps API.
*   Integrated real-time updates via SocketIO and WhatsApp notifications for enhanced student convenience.`

const skills = `### 🛠️ Technical Skills

*   **💻 Frontend**: HTML, CSS, JavaScript, React JS
*   **⚙️ Backend**: Node JS
*   **⌨️ Programming Languages (Basics)**: C/C++, Java
*   **🗃️ DBMS**: Firebase, Azure Cosmos DB (Vector Database), Neo4j (Graph Database), Redis
*   **☁️ Cloud Computing**: Google Cloud Platform, Microsoft Azure
*   **🔧 Tools**: LangChain, Docker, Kubernetes`

const volunteering = `### 🤝 Volunteering & Leadership

*   **👨‍💻 β - Microsoft Student Ambassador** (2024-present)
    *   Serving as a campus leader to foster a strong technical community and share knowledge about Microsoft technologies.
*   **🧑‍💼 Vice President, CodeChef ASEB** (09/2023 - 09/2024)
    *   Led the university's CodeChef chapter, organizing coding competitions, workshops, and mentorship sessions to promote competitive programming.
`

const roadmap = `### 🗺️ My Roadmap

My primary focus is on deepening my expertise in **Generative AI**, **Full Stack Development**, and **Cloud Computing**. I am actively seeking opportunities to:
*   🎯 Contribute to impactful, large-scale projects at pioneering organizations.
*   🌱 Engage in continuous learning to stay at the forefront of technology.
*   🤝 Collaborate with teams that foster mutual growth and innovation.

My ultimate goal is to leverage technology to build robust and scalable solutions that solve real-world problems. ✨`

const education = `### 🎓 Education

*   **🏫 Amrita Vishwa Vidyapeetham, Bangalore** (10/2022 - Present)
    *   B.Tech, Computer Science Engineering
*   **🏫 Bishop Cotton Boy's School, Bangalore** (08/2020 - 07/2022)
    *   ISC (Grade 12), Computer Science - **98%**
*   **🏫 Bishop Cotton Boy's School, Bangalore** (2009 - 2020)
    *   ICSE (Grade 10), Science - **96.6%**`

const achievements = `### 🏆 Awards & Achievements

*   🎨 **Adobe Fund for Design** (2024) - Awarded a grant of **$1,500**.
*   🛡️ **Microsoft M365 Security Bounty** (09/2024) - Earned a **$6,000** bounty.
*   💻 **Honorable Mention - Microsoft Developers AI Learning Hackathon** (07/2024) - Awarded a Cash Prize of **$400**.
*   🇮🇳 **SSF 2021 Awardee** (2022) - Recognized by the Office of the Principal Scientific Adviser to the GOI.
*   🥇 **OCA-Rev Scipio Merit Award** (2022) - ISC Topper in Science.
*   🥇 **Google Code To Learn 2019 Winner** - Recognized by Google India.
*   ⭐ **Google Code-in 2019 Finalist** - Finalist in the global Google Open Source program.`

const contact = `### 📬 Contact Information

*   **📧 Email**: [nishithp11@gmail.com](mailto:nishithp11@gmail.com)
*   **🌐 Website**: [nishithp.page](https://nishithp.page)
*   **💼 LinkedIn**: [linkedin.com/in/nishith-p](https://www.linkedin.com/in/nishith-p)
*   **🐙 GitHub**: [github.com/NishithP2004](https://github.com/NishithP2004)`

const sudo = `🚫 User guest is not in the sudoers file. This incident will be reported. 🚨`

export default {
    help,
    about,
    projects,
    skills,
    volunteering,
    roadmap,
    education,
    achievements,
    contact,
    sudo
}