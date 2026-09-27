export const personalInfo = {
  name: "Aditya Anand",
  titlePrimary: "Software Development Engineer",
  titleSub: "Cloud & DevOps Specialist",
  tagline: "Bridging full-stack software craftsmanship with resilient, multi-cloud infrastructure and zero-idle cost serverless architecture.",
  location: "Roorkee, India",
  email: "a.adityaanand@outlook.com",
  phone: "+91 9199838594",
  education: {
    degree: "B.Tech — Computer Science and Engineering",
    institution: "Haridwar University, Roorkee",
    duration: "2023 – 2027"
  },
  socials: {
    github: "https://github.com/adityaanand-dev",
    linkedin: "https://linkedin.com/in/anand-aditya01",
    email: "mailto:a.adityaanand@outlook.com"
  },
  resumes: {
    sde: {
      label: "SDE Resume (.docx)",
      path: "/resumes/AdityaAnand_SDE.docx",
      badge: "Software Engineering Focus"
    },
    cloud: {
      label: "Cloud & DevOps Resume (.docx)",
      path: "/resumes/AdityaAnand_Cloud and DevOps.docx",
      badge: "Cloud / DevOps Focus"
    }
  }
};

export const domainModes = {
  all: {
    id: "all",
    label: "Hybrid / All-Round",
    tagline: "Software & Cloud Systems Engineer",
    subtext: "Viewing the full spectrum: clean full-stack code married to automated multi-cloud infrastructure.",
    accentColor: "indigo"
  },
  sde: {
    id: "sde",
    label: "SDE Perspective",
    tagline: "Software Development Engineer",
    subtext: "Spotlighting frontend/backend development, RESTful APIs, modern React, and clean architectural design.",
    accentColor: "emerald"
  },
  cloud: {
    id: "cloud",
    label: "Cloud & DevOps Perspective",
    tagline: "Cloud & DevOps Engineer",
    subtext: "Spotlighting AWS & Azure architecture, Terraform IaC, CI/CD automation, and multi-cloud disaster recovery.",
    accentColor: "sky"
  }
};

export const skillsData = [
  {
    category: "Cloud Platforms",
    domain: "cloud",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: "Advanced", detail: "Lambda, API Gateway, S3, DynamoDB, SES, CloudFront, IAM, Cognito, EC2, RDS, VPC, Route 53, CloudWatch", highlight: true },
      { name: "Azure", level: "Proficient", detail: "PostgreSQL Flexible Server, VNet, Blob Storage, Traffic Manager, VMs, NSGs, Azure Monitor", highlight: true },
      { name: "Cloudflare", level: "Proficient", detail: "DNS Failover, Load Balancing, Edge Security, Health Checks" }
    ]
  },
  {
    category: "IaC, DevOps & CI/CD",
    domain: "cloud",
    icon: "GitBranch",
    skills: [
      { name: "Terraform", level: "Proficient", detail: "Multi-cloud infrastructure provisioning, state locking, modular IaC", highlight: true },
      { name: "GitHub Actions", level: "Proficient", detail: "Automated test & deploy pipelines, CloudFront invalidation, S3 sync", highlight: true },
      { name: "Docker", level: "Fundamentals", detail: "Containerization, Dockerfile optimization, multi-stage builds" },
      { name: "Linux & Bash", level: "Intermediate", detail: "Shell scripting, process management, automated server maintenance" },
      { name: "Git", level: "Advanced", detail: "Branching strategies, Git flow, collaborative open source workflows" }
    ]
  },
  {
    category: "Backend & Systems",
    domain: "sde",
    icon: "Server",
    skills: [
      { name: "Python (FastAPI)", level: "Advanced", detail: "Async endpoints, Pydantic data validation, OpenAPI specs, microservices", highlight: true },
      { name: "Java", level: "Proficient", detail: "Object-oriented design patterns, core data structures, algorithms", highlight: true },
      { name: "Node.js & Express", level: "Intermediate", detail: "REST API microservices, async event loops, middleware design" },
      { name: "REST API Architecture", level: "Advanced", detail: "Clean contract design, rate limiting, JWT/Cognito auth, status codes", highlight: true }
    ]
  },
  {
    category: "Frontend Development",
    domain: "sde",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", detail: "Hooks, component lifecycles, state management, modern modular architecture", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", detail: "Async/await, closures, promises, functional programming" },
      { name: "Tailwind CSS", level: "Advanced", detail: "Responsive design, dark/light themes, animations, glassmorphism", highlight: true },
      { name: "HTML5 / CSS3", level: "Mastery", detail: "Semantic markup, accessibility (a11y), CSS Grid & Flexbox" }
    ]
  },
  {
    category: "Databases & Storage",
    domain: "all",
    icon: "Database",
    skills: [
      { name: "DynamoDB (NoSQL)", level: "Proficient", detail: "Single-table design principles, DynamoDB Streams, event-driven triggers", highlight: true },
      { name: "PostgreSQL", level: "Proficient", detail: "Logical replication across clouds, relational modeling, indexing", highlight: true },
      { name: "Amazon S3 & Azure Blob", level: "Proficient", detail: "Object storage lifecycle rules, automated bidirectional syncing", highlight: true }
    ]
  }
];

export const experienceData = [
  {
    role: "Cloud Intern",
    company: "Aarsh AI Technologies",
    location: "Remote",
    period: "June 2026 – July 2026",
    domain: "cloud",
    type: "Internship",
    description: "Architected LaunchPad, a serverless student career portal engineered for zero idle-cost infrastructure and instant elasticity.",
    keyPoints: [
      "Architected LaunchPad: a serverless student career portal using React, AWS Lambda, API Gateway, DynamoDB, SES, S3, and GitHub Actions.",
      "Decoupled React frontend from Lambda microservices via API Gateway to achieve zero idle-cost infrastructure.",
      "Engineered Cognito authentication with granular role-based access control (Student / Recruiter / Admin).",
      "Automated CI/CD deployments through GitHub Actions, ensuring consistent and reproducible release pipelines."
    ],
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "SES", "S3", "Cognito", "React", "GitHub Actions"]
  },
  {
    role: "AI / ML Intern",
    company: "Microsoft TechSaksham",
    location: "Remote",
    period: "Dec 2024 – Feb 2025",
    domain: "sde",
    type: "Internship",
    description: "Engineered deep learning computer vision models for agriculture diagnosis with state-of-the-art explainability.",
    keyPoints: [
      "Built a high-precision potato leaf disease classifier (Early Blight, Late Blight, Healthy).",
      "Trained and benchmarked a custom CNN reaching 95.67% test accuracy against fine-tuned Inception and ResNet50 models.",
      "Implemented Grad-CAM heatmap visualization to provide transparent interpretability for agritech users.",
      "Evaluated model performance through rigorous ROC/AUC curves and confusion-matrix analysis."
    ],
    tech: ["Python", "TensorFlow", "CNN", "ResNet50", "Inception", "Grad-CAM", "Computer Vision"]
  },
  {
    role: "Freelance Website Developer",
    company: "Independent Client Engagement",
    location: "India",
    period: "2026",
    domain: "sde",
    type: "Client Work",
    description: "End-to-end full-stack web engineering and hosting delivery for real clients.",
    keyPoints: [
      "Delivered a full-stack responsive website end-to-end: development, domain purchase, DNS configuration, deployment, and live hosting.",
      "Took full ownership of the software delivery lifecycle from UX wireframes to production deployment.",
      "Managed client expectations, iterative feedback milestones, and ongoing SLA maintenance."
    ],
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "DNS", "Hostinger", "Web Performance"]
  }
];

export const projectsData = [
  {
    id: "multicloud-dr",
    title: "Multi-Cloud Disaster Recovery System",
    subtitle: "High Availability Active-Standby Architecture across AWS & Azure",
    domain: "cloud",
    status: "ONGOING",
    featured: true,
    metrics: [
      { label: "Target Availability", value: "99.99%" },
      { label: "Data Loss Target", value: "Near-Zero RPO" },
      { label: "IaC Automation", value: "100% Terraform" }
    ],
    description: "Architected a multi-cloud enterprise disaster recovery framework across AWS and Azure using Terraform IaC. Eliminates single-vendor dependencies and guarantees continuous uptime through automated DNS failover and bidirectional stateful synchronization.",
    architectureDetails: {
      title: "Active-Standby Multi-Cloud Topology",
      summary: "Cloudflare Load Balancing health probes monitor primary AWS endpoints. In case of region degradation, traffic instantly shifts to Azure backup.",
      steps: [
        "Infrastructure provisioned declaratively via reusable Terraform modules for both AWS VPC and Azure VNet.",
        "Stateful replication between Amazon S3 and Azure Blob Storage driven by DynamoDB Streams and Lambda triggers.",
        "PostgreSQL Logical Replication maintains near real-time synchronization between AWS RDS and Azure Flexible Server.",
        "Cloudflare Load Balancer executes continuous health checks against custom FastAPI `/health` microservices, triggering auto-failover."
      ]
    },
    tech: ["AWS", "Azure", "Terraform", "PostgreSQL", "Cloudflare", "FastAPI", "Node.js", "Docker"],
    github: "https://github.com/adityaanand-dev"
  },
  {
    id: "launchpad-portal",
    title: "LaunchPad Serverless Career Portal",
    subtitle: "Event-driven, Zero Idle-Cost Recruitment Platform",
    domain: "sde",
    status: "COMPLETED",
    featured: true,
    metrics: [
      { label: "Idle Infrastructure Cost", value: "$0.00 / mo" },
      { label: "Auth Security", value: "Cognito RBAC" },
      { label: "Delivery Pipeline", value: "GitHub Actions" }
    ],
    description: "Designed and developed during the Aarsh AI internship: a microservice-powered student recruitment portal. Uses an event-driven serverless architecture that scales from zero to thousands of concurrent users with zero idle server overhead.",
    architectureDetails: {
      title: "Decoupled Serverless Microservices",
      summary: "Single Page Application hosted on S3/CloudFront with secure API Gateway routes to AWS Lambda functions and Amazon DynamoDB.",
      steps: [
        "React frontend communicates with AWS Lambda microservices through RESTful API Gateway endpoints.",
        "DynamoDB provides low-latency single-digit millisecond query response times for user profiles and job applications.",
        "Transactional email notifications sent asynchronously via Amazon SES upon application status changes.",
        "Role-based authentication partitioned for Students, Recruiters, and Platform Admins via Amazon Cognito user pools."
      ]
    },
    tech: ["React.js", "AWS Lambda", "API Gateway", "DynamoDB", "SES", "S3", "Cognito", "Tailwind CSS"],
    github: "https://github.com/adityaanand-dev"
  },
  {
    id: "serverless-portfolio-aws",
    title: "AWS Cloud-Native Serverless Web Infrastructure",
    subtitle: "Global Edge CDN & Automated Invalidation Pipeline",
    domain: "cloud",
    status: "COMPLETED",
    featured: true,
    metrics: [
      { label: "CI/CD Push Duration", value: "<15s" },
      { label: "Edge Caching", value: "CloudFront CDN" },
      { label: "Security Policy", value: "Least-Privilege IAM" }
    ],
    description: "High-performance portfolio delivery pipeline deployed to Amazon S3 and accelerated globally through CloudFront CDN with TLS 1.3 encryption. Backed by a pay-per-use contact service on AWS Lambda and DynamoDB.",
    architectureDetails: {
      title: "Edge-Accelerated Static Delivery + Serverless Microservice",
      summary: "Every git commit triggers automated build, S3 sync, and edge cache invalidation.",
      steps: [
        "GitHub Actions builds production assets and syncs them to private Amazon S3 buckets.",
        "Automated CloudFront edge cache invalidation propagates updates across all global edge locations in seconds.",
        "Interactive contact submissions trigger an API Gateway endpoint running a lightweight Lambda function storing leads into DynamoDB.",
        "Configured with zero hardcoded credentials using environment secrets and least-privilege IAM roles."
      ]
    },
    tech: ["AWS Lambda", "Amazon S3", "CloudFront", "DynamoDB", "GitHub Actions", "IAM"],
    github: "https://github.com/adityaanand-dev"
  },
  {
    id: "plant-disease-classifier",
    title: "Potato Leaf Disease Classification & Explainability",
    subtitle: "Deep Learning CNN with Grad-CAM Visual Heatmaps",
    domain: "sde",
    status: "COMPLETED",
    featured: false,
    metrics: [
      { label: "Test Accuracy", value: "95.67%" },
      { label: "Visual Interpretability", value: "Grad-CAM" },
      { label: "Model Architecture", value: "Custom CNN" }
    ],
    description: "Developed during the Microsoft TechSaksham program: a computer vision system classifying Early Blight, Late Blight, and Healthy potato leaves. Enhanced with Grad-CAM heatmap visualization to help farmers and agronomists understand model decision boundaries.",
    architectureDetails: {
      title: "Computer Vision Pipeline with Explainable AI",
      summary: "Preprocessing, data augmentation, deep convolutional feature extraction, and gradient-weighted class activation mapping.",
      steps: [
        "Engineered an automated preprocessing pipeline with contrast adjustment and synthetic data augmentation.",
        "Trained a custom deep convolutional neural network, benchmarked against fine-tuned InceptionV3 and ResNet50.",
        "Generated Grad-CAM overlays highlighting exact leaf regions influencing classification decisions.",
        "Validated with precision-recall curves, confusion matrices, and ROC/AUC scores."
      ]
    },
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Grad-CAM", "NumPy", "Matplotlib"],
    github: "https://github.com/adityaanand-dev"
  },
  {
    id: "stock-price-predictor",
    title: "Time-Series Stock Forecasting Model",
    subtitle: "Deep Recurrent Neural Network with Streamlit Dashboard",
    domain: "sde",
    status: "COMPLETED",
    featured: false,
    metrics: [
      { label: "Architecture", value: "LSTM RNN" },
      { label: "Data Pipeline", value: "yfinance / Pandas" },
      { label: "Interface", value: "Streamlit GUI" }
    ],
    description: "Predictive financial time-series model leveraging Long Short-Term Memory (LSTM) recurrent neural networks to capture temporal patterns and market volatility from multi-year historical stock data.",
    architectureDetails: {
      title: "Time-Series Ingestion & Forecasting Workflow",
      summary: "Historical price ingestion, rolling normalization, multi-timestep sequencing, and interactive visualization.",
      steps: [
        "Automated ingestion pipeline fetching historical ticker data via yfinance.",
        "Data normalization using MinMaxScaler and rolling window sequence generation.",
        "Stacked LSTM layers with dropout regularization to mitigate overfitting.",
        "Interactive Streamlit dashboard allowing users to select tickers, customize forecast windows, and analyze moving averages."
      ]
    },
    tech: ["Python", "TensorFlow", "LSTM", "Streamlit", "Pandas", "NumPy", "yfinance"],
    github: "https://github.com/adityaanand-dev"
  }
];

export const certificationsData = [
  {
    title: "AWS SimuLearn: Cloud Practitioner",
    issuer: "AWS Training and Certification",
    date: "April 2026",
    credentialId: "AWS-SimuLearn-CP",
    domain: "cloud",
    description: "Validated hands-on fundamentals across AWS cloud architecture, security, compute, networking, and cost management."
  },
  {
    title: "Cloud Infrastructure and Services (4-Credit Course)",
    issuer: "SWAYAM / NPTEL (IGNOU & BAOU)",
    date: "July 2026",
    score: "80%",
    domain: "cloud",
    description: "Comprehensive university-accredited examination covering enterprise cloud models, virtualization, hypervisors, and storage fabrics."
  },
  {
    title: "Getting Started with AI & Journey to Cloud",
    issuer: "IBM SkillsBuild",
    date: "February 2026",
    domain: "all",
    description: "Envisioning cloud solutions, cognitive computing architectures, and cloud-native AI integration paradigms."
  },
  {
    title: "Microsoft TechSaksham AI: Transformative Learning",
    issuer: "Microsoft & TechSaksham",
    date: "February 2025",
    domain: "sde",
    description: "Deep learning fundamentals, computer vision architectures, neural networks, and model deployment."
  }
];
