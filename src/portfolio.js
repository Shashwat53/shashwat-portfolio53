/* Change this file to get your personal Portfolio */

/* NOTE: For resume buttons to work, copy your PDFs into:
   public/resume/Kumar_Shashwat_Resume.pdf      // Tech resume (1-page)
   public/resume/FINAL_RESUME_DSI.pdf           // DSI resume (academic)
*/

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

// in src/portfolio.js
const greeting = {
  username: "Shashwat Kumar",
  title: "Hi, I'm Shashwat",
  subTitle: emoji(
    "🎓 MS in Data Science @ Columbia University.\n" +
      "⚙️ Data Scientist working at the intersection of LLMs, RAG, & intelligent data pipelines\n" +
      "💼 At Intuit, built GenAI spend-alert & Creative-analysis pipelines; at Nokia, designing AI-driven anomaly detection & root-cause automation engines.\n" +
      "🧩 Interests: AI/ML pipelines, agentic AI systems, clustering, & multimodal embeddings."
  ),
  // Use PUBLIC_URL so it works when the site is served from a subpath
  resumeLink:
    "https://drive.google.com/file/d/1O9dahKAjayW1YezpXUfuV-hi_ig8ozPN/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Shashwat53",
  linkedin: "https://www.linkedin.com/in/shashwatkumar53/",
  gmail: "shashwat.kumar@columbia.edu",
  kaggle: "https://www.kaggle.com/shashwat0503",
  display: true
};

// Skills Section
// Skills Sectionx
const skillsSection = {
  title: "Skills",
  subTitle: "",

  // skills: [
  //   emoji("⚡ Data Engineering: Databricks & Spark ETL, Delta modeling, and fuzzy matching for analytics-ready data"),
  //   emoji("⚡ Forecasting: clustering and time-series models (Prophet, BiLSTM, DeepAR) for demand predictions"),
  //   emoji("⚡ Retrieval Systems: FAISS, BGE, and Neo4j for hybrid search, grounding, and RAG pipelines"),
  //   emoji("⚡ LLMs & Agents: fine-tuning (LoRA/QLoRA), prompt engineering, LangChain agents, and LLM-as-a-judge"),
  //   emoji("⚡ Multimodal AI: SigLip, V-JEPA, and CLAP for vision, video, and audio intelligence"),
  //   emoji("⚡ MLOps & Deployment: FastAPI, Docker, MLflow, and Superglue orchestration on AWS and GCP")
  // ],
  skills: [
    emoji("⚡ Data Engineering: ETL pipelines, Delta tables & Fuzzy matching"),
    emoji("⚡ Forecasting: Clustering & time-series (Prophet, BiLSTM, DeepAR)"),
    emoji("⚡ Retrieval: FAISS, BGE, Neo4j for hybrid RAG search"),
    emoji("⚡ LLMs: LoRA/QLoRA, Prompting, agentic AI, LLM-as-judge"),
    emoji("⚡ Multimodal AI: SigLip, V-JEPA, CLAP, Jina AI embeddings"),
    emoji("⚡ MLOps: FastAPI, Docker, MLflow, Superglue on AWS/GCP")
  ],
  // ✅ All of these class names are valid Font Awesome 5 icons
  softwareSkills: [
    // 🔹 Core Languages
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    // 🔹 AI / ML / DL
    {skillName: "Transformers", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "BERT", fontAwesomeClassname: "fas fa-magnet"},
    {skillName: "Computer Vision", fontAwesomeClassname: "fas fa-eye"},
    {skillName: "LangChain", fontAwesomeClassname: "fas fa-link"},
    {skillName: "Vector DB", fontAwesomeClassname: "fas fa-layer-group"},
    {
      skillName: "Knowledge Graphs",
      fontAwesomeClassname: "fas fa-project-diagram"
    },

    // 🔹 Data & Infrastructure
    {skillName: "PySpark", fontAwesomeClassname: "fas fa-bolt"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Databricks", fontAwesomeClassname: "fas fa-cloud"},

    // 🔹 DevOps / MLOps
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    // { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-cogs" },
    // { skillName: "FastAPI", fontAwesomeClassname: "fas fa-rocket" },
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    // { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },

    // 🔹 Cloud Providers
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "GCP", fontAwesomeClassname: "fab fa-google"},
    // { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },

    // 🔹 Front-End (optional, keep if portfolio uses it)
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    // { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js"}
    // { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },

    // 🔹 Monitoring & Analytics
    // { skillName: "MLflow", fontAwesomeClassname: "fas fa-chart-line" },
  ],
  display: true
};

// Education Section
/* TIP: logos below use existing placeholder images from the template to avoid build errors.
   After you add your own PNGs under src/assets/images/, swap the require() paths. */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Columbia University",
      logo: require("./assets/images/columbiaLogo.png"),
      subHeader: "M.S. in Data Science (GPA ~3.75/4)",
      duration: "Aug 2024 – Dec 2025",
      desc: "Coursework & projects spanning applied AI & ML systems.",
      descBullets: [
        "Capstone: Intelligent Policy Assistant (RAG + KG + Llama/Qwen) for healthcare policy automation.",
        "Core Coursework: Applied ML, Deep Learning for NLP, Business Applications of LLMs, Statistical Inference & Modeling, Forecasting."
      ]
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vitLogo.png"),
      subHeader: "B.Tech in Computer Science & Engineering (CGPA 9.1/10)",
      duration: "Aug 2020 – Jun 2024",
      desc: "Comprehensive foundation in ML & software engineering systems.",
      descBullets: [
        "Core Coursework: AI, Machine Learning, Data Mining, Parallel & Distributed Computing, Image Processing, DBMS, & OOP (Java)."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false,
  experience: [
    {Stack: "LLMs & Retrieval (RAG/KG)", progressPercentage: "85%"},
    {Stack: "Computer Vision / OCR", progressPercentage: "80%"},
    {Stack: "MLOps, ETL & Analytics", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

// Work experience section
/* Logos use placeholders to keep build green. Add your own logos later and update require() paths. */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Intelligence Co-op",
      company: "Nokia",
      companylogo: require("./assets/images/nokia.png"),
      date: "Sep 2025 – Present",
      location: "New York, NY",
      descBullets: [
        "Location: New York, NY",
        "Root cause analysis with temporal & graph based clustering, BERTopic for telecom alarms.",
        "Agentic LLM + RAG for KPI insights, explainability, and anomaly explanations.",
        "Stack: Python, Transformers, RAG, LLMs, BERTopic, GNNs"
      ]
    },
    {
      role: "AI & Data Science Intern",
      company: "Intuit",
      companylogo: require("./assets/images/intuitLogo.jpeg"),
      date: "May 2025 – Aug 2025",
      location: "Bay Area, CA",
      descBullets: [
        "Location: Bay Area, CA",
        "Built an LLM-powered spend alert agent to detect weekly anomalies in ad spend.",
        "Applied fuzzy matching and clustering using multimodal embeddings for creative analytics.",
        "Stack: Databricks, PySpark, AWS S3, LLMs, Whisper, Jina, KeyBERT, Siglip"
      ]
    },
    {
      role: "AI Engineer Intern",
      company: "IBM",
      companylogo: require("./assets/images/Ibm.png"),
      date: "Dec 2023 – Jun 2024",
      location: "Pune, India",
      descBullets: [
        "Location: Pune",
        "Deployed a RAG chatbot (Mistral-7B + Redis) for enterprise Q&A, reducing retrieval latency by 75%.",
        "Doc extraction with CogVLM, OCR, Sentence-Transformers → 94%  precision.",
        "Stack: Mistral-7B, Redis, Sentence-Transformers, Tesseract, RAG"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Jio Platforms",
      companylogo: require("./assets/images/relianceLogo.png"),
      date: "May 2023 – Jul 2023",
      location: "Mumbai",
      descBullets: [
        "Location: Mumbai",
        "Leveraged YOLOv7 and EasyOCR pipeline for text/object extraction on pharma imagery.",
        "88% parsing accuracy on 10K+ samples; automated batch metadata & inventory tracking.",
        "Stack: YOLOv7, OpenCV, EasyOCR, Regex, Tableau"
      ]
    }
  ]
};

/* Open Source section to show GitHub pinned projects */
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Research & Publications",
  subtitle: "Selected work across industry & academia",
  projects: [
    {
      image: require("./assets/images/kpmg.jpeg"),
      projectName: "Intelligent Policy Assistant",
      projectDesc:
        "Built a RAG-powered healthcare policy assistant using BGE-M3 and Neo4j KG for accurate Q&A over Medicaid documents.",
      footerLink: [
        {
          name: "Columbia_Capstone-KPMG",
          url: "https://github.com/Shashwat53/Columbia_Capstone-KPMG"
        }
      ]
    },
    {
      image: require("./assets/images/elsevier.png"),
      projectName: "Predictive Analytics for COVID-19 Pharma Data",
      projectDesc:
        "Applied MapReduce and Apriori algorithms to extract association rules from large COVID-19 datasets.",
      footerLink: [
        {
          name: "Read Paper (Elsevier)",
          url: "https://pdf.sciencedirectassets.com/280203/1-s2.0-S1877050923X00143/1-s2.0-S1877050923021063/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLWVhc3QtMSJHMEUCIQDnvhr4%2BYKDnj9tLMGaMTKNxCaJppccwNe7FBZuY2mScwIgN7LT5nK%2B3PY5o8eFwiA4wylDA1u7g6RiJYR77Qella4qvAUI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDJCpdWe%2F3XCztMy1JSqQBeBSm8SQO9%2Bxi%2FY64%2B9gZaVeT%2FiE9CzcE2kCkcvVUcISa%2BNpf3VuFgnAvO09C7Hb2TGe2KfPCRiwZpcO%2FE893YSwGbePVv01Sjz%2BsnZI4PfCXd1p6ZK96%2FXflykapGj%2BkZx%2FkyRw7hMDvn2NDdUN2HTk6xVV97rxxcXffI1XQQiRUN%2BT06n9UtmZG2b8AYpYhb16mdijBhR8sAg9cluIH5O%2Bz%2FLi%2BlBSGskw7VA829deMxi66SgNJV%2BhWIjvxkUrYGeXRqiQBIlTtj48KokGstYgFMaUXThCUJ8poK%2FjTFgQN8FA7flR2d5GYWO9Ca56A0Pk1bx9JMsf1xRKK5otgVqfrkz1%2BNLMwhKTIWObK%2BCUVvzEOFIPiMFQLyz4sZhPcL%2B94PpWowcX8Ax5sz2t5r7sRLNzSqlOOIlV89zLF15v8LrIcDK1XDF1cruBYOCtbtxu%2B0O3sWlZimRxnRZYaQIOehVbmf%2BMngjODyguzeOtuXA%2Fu3ZPl0cF%2B9kkjJ0RvyM1Kohvt9GKaERM%2BWesyD0mW8YBYs9QWHMyObv%2B3UgcqeuHDCdeVql4STCm989dbSYCyFLghtabFgmV09mFPp4h2cPgu16zpN6NdTaT6z%2B76rb3n%2BhUTzpqvynDOveFpK%2FkINreHM34q8dv6ZSrXj9RsJjqO4B3RQ%2B2MUPDUAcXddSg9XggwfUg4KvCE7c4q3npMpAZJAj2ZS%2F27BWLiDGFO6%2B%2B%2BgKqrpq2XtrDUdD9oOQzCp0V8kEY%2FsK5r%2FpFLmLxibQODH6IMXULkFs%2BLlqTP9H6B5yemdyVyoz70BJTs40ce2RyX4N6G48XqhZeL6xm%2F2856ulrfJcPBe7FTRJu9vVDd1%2FcyoN%2FN2MhkzlAMPqw2scGOrEBj%2FsJdtaHPJrg54F%2BJGqDDQ3xhgZS1JBcijbLIOjCFiD2D2r4MFm66ZcLfxkFw16%2FYQiJVhmf2ZtzxQzqZuTt5Q1vD5Px8kEbFpAb8gy2j2qthiarH2mSUJ4ck9O6Tqq8I7jRxGD77dHNXlGSnBtzumCWPx8zPJt0LOud2rASXxf4GafMdffB44oorK38WAtmD8kVzEXO6Tt%2BZRpjol5QfcXgeb3mQzFHzpNPCaBdPhSF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251020T212455Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY56LS3EZN%2F20251020%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1118b165f644c021a98b96e9c5ccc13a714c7435e554c321d16959729720d845&hash=dc078f2ec3156d233ed7cfc216fd75e41f51fcc8627c1b1e85b9a83c8967f1d2&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1877050923021063&tid=spdf-5aff745d-e6cc-4a4c-a897-81765d778d8c&sid=8f967aab9dd624462d5844e8b6250bc5a9e1gxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=1b135c565404565000&rr=991b95b42dfdc47a&cc=us"
        }
      ]
    },
    {
      image: require("./assets/images/springer.png"),
      projectName: "SecureCloudX: Secure Cloud Storage",
      projectDesc:
        "Cloud encryption framework that uses threshold Cryptography & Digital Signatures for data privacy.",
      footerLink: [
        {
          name: "Read Paper (Springer)",
          url: "https://link.springer.com/chapter/10.1007/978-3-031-81458-7_6"
        }
      ]
    },
    {
      image: require("./assets/images/e3s.jpeg"),
      projectName: "Cropable: Crop Disease Detection System",
      projectDesc:
        "Developed a CNN-based web app for crop disease detection and treatment recommendation.",
      footerLink: [
        {
          name: "Read Paper (E3S)",
          url: "https://www.e3s-conferences.org/articles/e3sconf/pdf/2024/21/e3sconf_icecs2024_01001.pdf"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section (also holding resume links)
const achievementSection = {
  title: emoji("Achievements & Links 🏆"),
  subtitle: "Highlights and useful links",
  achievementsCards: [
    {
      title: "Resumes",
      subtitle: "Download my latest resumes",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Resume",
      footerLink: [
        {name: "Tech Resume (PDF)", url: "/resume/Kumar_Shashwat_Resume.pdf"},
        {name: "DSI Resume (PDF)", url: "/resume/FINAL_RESUME_DSI.pdf"},
        {name: "GitHub", url: "https://github.com/Shashwat53"},
        {name: "LinkedIn", url: "https://www.linkedin.com/in/shashwatkumar53/"}
      ]
    }
  ],
  display: false
};

// Blogs Section (set to false unless you have Medium posts)
const blogSection = {
  title: "Blogs",
  subtitle:
    "I like writing about applied AI, retrieval, and analytics when time allows.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections
const talkSection = {
  title: "Talks",
  subtitle: emoji("Invited talks & workshops"),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Long-form thoughts on AI and data",
  podcast: [],
  display: false
};

// Resume Section (shows a tile in the UI; the actual button is greeting.resumeLink)
const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact  ☎️"),
  subtitle:
    "Open to full-time roles in AI/ML/Data Science starting Jan 2026. Let’s connect.",
  number: "+1 (917) 295-7422",
  email_address: "shashwat.kumar@columbia.edu"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
