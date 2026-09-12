/**
 * Courses Mock Dataset
 * Used for /courses, /courses/:slug, and course comparison.
 */

export const coursesData = [
  {
    id: "course_btech",
    slug: "btech",
    name: "Bachelor of Technology (B.Tech / B.E.)",
    shortName: "B.Tech",
    degreeLevel: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    stream: "Engineering & Technology",
    overview: "Bachelor of Technology (B.Tech) is the most sought-after professional undergraduate engineering degree in India. Designed to equip students with mathematical rigour, algorithmic thinking, and technical implementation skills, B.Tech graduates spearhead advancements across Artificial Intelligence, Cloud Infrastructure, Robotics, and Smart Manufacturing.",
    specializations: [
      "Computer Science & Engineering (CSE)",
      "Artificial Intelligence & Machine Learning (AI & ML)",
      "Data Science & Analytics",
      "Electronics & Communication Engineering (ECE)",
      "Information Technology (IT)",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical & Electronics Engineering (EEE)"
    ],
    eligibility: "Candidates must have passed 10+2 examination with Physics and Mathematics as compulsory subjects, alongside Chemistry, Biotechnology, or Computer Science. A minimum aggregate of 75% for NITs/IITs (60% for state/private universities) is mandated.",
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "MET", "KCET", "COMEDK UGET", "MHT CET", "WBJEE"],
    averageFees: "₹1.2 Lakh - ₹4.5 Lakh per year",
    averageSalary: "₹6.5 LPA - ₹18.5 LPA",
    highestSalary: "₹50 LPA - ₹1.2 Crore+",
    topCareers: ["Software Development Engineer", "Data Scientist", "Cloud Architect", "Robotics Engineer", "Product Manager", "Cybersecurity Analyst"],
    curriculumHighlights: [
      "Sem 1-2: Foundation in Engineering Mathematics, Object-Oriented Programming, Physics, and Digital Electronics.",
      "Sem 3-4: Data Structures & Algorithms, Computer Architecture, Discrete Math, Database Management Systems.",
      "Sem 5-6: Operating Systems, Computer Networks, Machine Learning, Compiler Design, Electives.",
      "Sem 7-8: Capstone Industry Projects, Distributed Systems, Cloud Computing, Major Internship."
    ],
    faqs: [
      {
        q: "What is the difference between B.E. and B.Tech in India?",
        a: "Conceptually both degrees are equivalent and recognized by AICTE. Historically, B.E. emphasizes theoretical scientific fundamentals while B.Tech emphasizes practical application, but today universities use both interchangeably."
      },
      {
        q: "What rank is required in JEE Main for top NITs?",
        a: "For top branches like Computer Science in premier NITs (Trichy, Surathkal, Warangal, MNIT Jaipur), candidates typically need an All India CRL rank under 8,000 in General category."
      }
    ]
  },
  {
    id: "course_mba",
    slug: "mba",
    name: "Master of Business Administration (MBA / PGDM)",
    shortName: "MBA",
    degreeLevel: "Postgraduate",
    duration: "2 Years (4 Semesters / 6 Trimesters)",
    stream: "Management",
    overview: "Master of Business Administration (MBA) is India's premier postgraduate degree for building strategic decision-makers, financial analysts, and corporate leaders. Combining case study pedagogy, industry internships, and leadership bootcamps, the program accelerates career velocity into top consulting firms, investment banks, and consumer giants.",
    specializations: [
      "Finance & Investment Banking",
      "Marketing & Brand Strategy",
      "Business Analytics & Big Data",
      "Operations & Supply Chain Management",
      "Human Resource Management (HRM)",
      "Consulting & Strategic Management"
    ],
    eligibility: "Bachelor's Degree in any discipline from a recognized university with at least 50% aggregate marks (45% for reserved categories). Final year undergraduate students are also eligible to apply.",
    entranceExams: ["CAT (Common Admission Test)", "XAT", "SNAP", "NMAT by GMAC", "CMAT", "MAT", "GMAT"],
    averageFees: "₹4.0 Lakh - ₹28.0 Lakh total program fee",
    averageSalary: "₹10.5 LPA - ₹34.0 LPA",
    highestSalary: "₹45 LPA - ₹1.1 Crore+",
    topCareers: ["Management Consultant", "Investment Banker", "Product Marketing Head", "Supply Chain Director", "HR Business Partner"],
    curriculumHighlights: [
      "Core 1st Year: Managerial Economics, Financial Accounting, Organizational Behavior, Marketing Science, Operations Research.",
      "Summer Internship: 8-10 weeks hands-on corporate project.",
      "Electives 2nd Year: Advanced Corporate Finance, Mergers & Acquisitions, Digital Marketing, AI for Business Strategy, Capstone Simulation."
    ],
    faqs: [
      {
        q: "Is work experience mandatory for doing an MBA in India?",
        a: "No, work experience is not mandatory for standard 2-year MBA/PGDM programs, though 1-3 years of quality work experience provides extra points in shortlisting at top IIMs and B-schools."
      }
    ]
  },
  {
    id: "course_bca",
    slug: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    shortName: "BCA",
    degreeLevel: "Undergraduate",
    duration: "3 Years (6 Semesters)",
    stream: "Computer Applications & IT",
    overview: "Bachelor of Computer Applications (BCA) provides an intensive, software-first alternative to traditional engineering degrees. Focused on programming languages, web architecture, cloud deployment, and database administration, it prepares graduates for immediate employment across IT service and product firms.",
    specializations: [
      "Full Stack Web Development",
      "Cloud Computing & DevOps",
      "Data Analytics & Python",
      "Cybersecurity & Ethical Hacking",
      "Mobile App Development (Flutter/React Native)"
    ],
    eligibility: "Candidates must have passed 10+2 in any stream (Science, Commerce, Arts) with minimum 50% marks. Some universities require Mathematics or Computer Science in 12th standard.",
    entranceExams: ["CUET UG", "IPU CET", "SET", "University Entrance Tests"],
    averageFees: "₹70,000 - ₹2.2 Lakh per year",
    averageSalary: "₹4.2 LPA - ₹8.5 LPA",
    highestSalary: "₹18 LPA - ₹25 LPA",
    topCareers: ["Full Stack Developer", "Software QA Engineer", "System Administrator", "Database Analyst", "Technical Support Specialist"],
    curriculumHighlights: [
      "C, C++, Java, and Python Programming",
      "Web Technologies (HTML5, CSS3, JavaScript, React)",
      "Database Systems (SQL & MongoDB)",
      "Operating Systems & Linux Fundamentals",
      "Cloud Infrastructure and Containerization"
    ],
    faqs: [
      {
        q: "Can non-science students pursue BCA?",
        a: "Yes! Most top universities allow commerce and humanities students with 10+2 Mathematics or Informatics Practices to enroll in BCA."
      }
    ]
  },
  {
    id: "course_bba",
    slug: "bba",
    name: "Bachelor of Business Administration (BBA / BMS)",
    shortName: "BBA",
    degreeLevel: "Undergraduate",
    duration: "3 Years (6 Semesters)",
    stream: "Management",
    overview: "Bachelor of Business Administration (BBA) is the gateway undergraduate program for students aspiring to build business acumen early. Covering accounting, organizational behavior, marketing dynamics, and corporate law, it sets an ideal foundation for higher studies like MBA or early careers in corporate operations.",
    specializations: [
      "Marketing Management",
      "Finance & Fintech",
      "Digital Marketing & E-Commerce",
      "International Business",
      "Human Resource Management"
    ],
    eligibility: "10+2 from any recognized board with a minimum of 50% aggregate marks.",
    entranceExams: ["IPMAT (IIM Indore/Rohtak)", "JIPMAT", "CUET UG", "SET (Symbiosis)", "NPAT (NMIMS)"],
    averageFees: "₹80,000 - ₹3.5 Lakh per year",
    averageSalary: "₹4.5 LPA - ₹9.5 LPA",
    highestSalary: "₹18 LPA - ₹28 LPA",
    topCareers: ["Business Development Executive", "Financial Analyst Trainee", "Marketing Associate", "Operations Coordinator"],
    curriculumHighlights: [
      "Principles of Management & Microeconomics",
      "Financial Accounting & Costing",
      "Consumer Behavior & Market Research",
      "Business Communication & Negotiation",
      "Entrepreneurship & Startup Management"
    ],
    faqs: [
      {
        q: "Is IPMAT a good option after Class 12?",
        a: "Yes, IPMAT offers direct entry into the prestigious 5-Year Integrated Program in Management at IIM Indore, IIM Rohtak, and IIM Ranchi straight after school."
      }
    ]
  },
  {
    id: "course_mca",
    slug: "mca",
    name: "Master of Computer Applications (MCA)",
    shortName: "MCA",
    degreeLevel: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    stream: "Computer Applications",
    overview: "Master of Computer Applications (MCA) is a master's degree that places graduates on par with B.Tech/M.Tech computer science engineers. Covering advanced software architecture, algorithmic design, cloud computing, and AI engineering.",
    specializations: [
      "Artificial Intelligence & Machine Learning",
      "Cloud Architecture & Microservices",
      "Full Stack Engineering",
      "Information Security & Cryptography"
    ],
    eligibility: "BCA / B.Sc (Computer Science) / B.Sc (IT) or any Bachelor's degree with Mathematics at 10+2 or graduation level with minimum 50% marks.",
    entranceExams: ["NIMCET (for NITs)", "MAH MCA CET", "CUET PG", "TANCET", "State Entrance Tests"],
    averageFees: "₹90,000 - ₹2.5 Lakh per year",
    averageSalary: "₹7.2 LPA - ₹16.0 LPA",
    highestSalary: "₹35 LPA - ₹52 LPA",
    topCareers: ["Senior Software Engineer", "Backend Architect", "DevOps Engineer", "Data Engineer"],
    curriculumHighlights: [
      "Advanced Data Structures & Algorithms in Java/C++",
      "Modern Web Frameworks & Microservices",
      "Cloud Platforms (AWS / GCP / Azure)",
      "Machine Learning Algorithms & Deep Learning",
      "Industry Project & Internship"
    ],
    faqs: [
      {
        q: "Is MCA 2 years or 3 years now?",
        a: "As per AICTE regulations, the MCA program has been officially reduced to a 2-year intensive curriculum across all recognized Indian universities."
      }
    ]
  },
  {
    id: "course_cs",
    slug: "computer-science",
    name: "Computer Science and Engineering (CSE)",
    shortName: "CSE",
    degreeLevel: "Undergraduate / Postgraduate",
    duration: "4 Years",
    stream: "Engineering & Technology",
    overview: "Computer Science and Engineering is the highest-ranked and most coveted specialization in Indian technical education. It encompasses hardware-software integration, algorithm optimization, distributed databases, artificial intelligence, and operating systems.",
    specializations: [
      "Artificial Intelligence & Machine Learning",
      "Distributed Cloud Systems",
      "Cyber Security & Cryptography",
      "Internet of Things (IoT)",
      "Computer Vision & Robotics"
    ],
    eligibility: "10+2 with Physics, Mathematics, and Chemistry with at least 60-75% aggregate marks + JEE Main/State CET.",
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "COMEDK UGET", "KCET"],
    averageFees: "₹1.5 Lakh - ₹4.0 Lakh per year",
    averageSalary: "₹9.5 LPA - ₹24.0 LPA",
    highestSalary: "₹65 LPA - ₹1.5 Crore",
    topCareers: ["Software Architect", "Full Stack Engineer", "Machine Learning Specialist", "Site Reliability Engineer", "Tech Lead"],
    curriculumHighlights: [
      "Data Structures, Graph Theory & Algorithms",
      "Computer System Architecture & Microprocessors",
      "Database Systems and Scalable Storage",
      "Distributed Systems & Cloud Architecture",
      "Artificial Intelligence & Natural Language Processing"
    ],
    faqs: [
      {
        q: "Why is CSE in such high demand?",
        a: "CSE offers the widest career versatility, the highest median starting packages, and remote global employment opportunities across tech conglomerates, high-frequency trading firms, and startups."
      }
    ]
  }
];
