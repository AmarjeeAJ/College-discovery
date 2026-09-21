/**
 * Locations Mock Dataset
 * Used for /locations, /locations/:city, and location cards.
 */

export const locationsData = [
  {
    id: "loc_jaipur",
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tagline: "North India's Fastest Growing Educational and IT-Innovation Hub",
    coverImage: "/images/locations/jaipur.jpg",
    description: "Known globally as the Pink City, Jaipur has rapidly evolved into one of North India's premier higher education destinations. With premier government institutes like MNIT Jaipur, SMS Medical College, and Rajasthan University alongside top-tier private universities like Manipal University Jaipur and JECRC, Jaipur offers exceptional academic quality at significantly lower living costs compared to metropolitan hubs.",
    collegeCount: 84,
    popularStreams: ["B.Tech & Engineering", "Medical (MBBS)", "Management (MBA)", "Architecture", "Law"],
    averageLivingCost: "₹8,000 - ₹15,000 / month (Hostel & Food)",
    topUniversities: [
      "Malaviya National Institute of Technology (MNIT)",
      "Manipal University Jaipur (MUJ)",
      "Vivekananda Global University (VGU)",
      "JECRC University",
      "JK Lakshmipat University (JKLU)",
      "Suresh Gyan Vihar University (SGVU)",
      "Amity University Jaipur",
      "Jaipur National University (JNU)"
    ],
    whyStudyHere: [
      "Affordable Cost of Living: Quality hostel and PG accommodations available at 40-50% lower costs than Delhi or Mumbai.",
      "Thriving IT & Startup Ecosystem: Presence of Mahindra World City SEZ hosting Infosys, Genpact, JCB, and Deutsche Bank offices.",
      "High Safety & Quality of Life: Consistently ranked among the safest educational cities in North India for male and female students alike.",
      "Superb Connectivity: High-speed Vande Bharat trains and international airport connecting Delhi NCR in under 3.5 hours."
    ],
    studentLife: "Students in Jaipur enjoy a balanced lifestyle blending academic rigor with heritage, vibrant cafe cultures in C-Scheme and Malviya Nagar, and peaceful green residential campuses across Sitapura and Ajmer Road.",
    faqs: [
      {
        q: "Why should I choose Jaipur for B.Tech over Delhi NCR?",
        a: "Jaipur offers equal campus placement opportunities at institutes like MNIT, MUJ, VGU, and JECRC, with substantially lower tuition and living expenses, zero extreme pollution issues, and a peaceful academic campus culture."
      },
      {
        q: "What are the key technical colleges in Jaipur?",
        a: "MNIT Jaipur (NIT), Manipal University Jaipur, VGU Jaipur, JECRC University, JKLU, Amity Jaipur, and SGVU are among the major universities."
      }
    ]
  },
  {
    id: "loc_delhi",
    slug: "delhi",
    name: "Delhi NCR",
    state: "Delhi & NCR",
    tagline: "India's Capital and Epicenter of National Academic Excellence",
    coverImage: "/images/locations/delhi.jpg",
    description: "Delhi NCR encompasses New Delhi, Noida, Gurgaon, and Greater Noida. It hosts the country's densest concentration of apex educational institutes including IIT Delhi, AIIMS, DTU, NSUT, and Delhi University, surrounded by multinational corporate headquarters.",
    collegeCount: 190,
    popularStreams: ["Engineering", "Management", "Medical", "Law", "Commerce", "Design"],
    averageLivingCost: "₹14,000 - ₹24,000 / month",
    topUniversities: [
      "IIT Delhi",
      "Delhi Technological University (DTU)",
      "Bennett University (Greater Noida)",
      "BML Munjal University (Gurgaon)",
      "Netaji Subhas University of Technology (NSUT)",
      "AIIMS New Delhi",
      "Jamia Millia Islamia",
      "Guru Gobind Singh Indraprastha University (GGSIPU)"
    ],
    whyStudyHere: [
      "Epicenter of Corporate HQs: Unrivaled access to Fortune 500 corporate internships in Cyber City Gurgaon and Noida.",
      "Top Public Institutions: Home to premier government universities offering top-tier education at subsidized fees.",
      "Delhi Metro Connectivity: World-class transit system connecting every college and residential student hub seamlessly."
    ],
    studentLife: "Electrifying student life spanning North and South Campus cultural festivals, political debates, national libraries, and co-working hubs.",
    faqs: [
      {
        q: "What is JAC Delhi counselling?",
        a: "JAC Delhi is the joint seat allocation process for admission to premier government engineering colleges in Delhi: DTU, NSUT, IIIT Delhi, and IGDTUW."
      }
    ]
  },
  {
    id: "loc_bangalore",
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    tagline: "Silicon Valley of India and Tech Recruitment Powerhouse",
    coverImage: "/images/locations/bangalore.jpg",
    description: "Bengaluru is India's tech and innovation capital. Housing over 400 global capability centers (GCCs), research labs, and India's top software powerhouses, Bangalore offers engineering and management students unparalleled industry exposure and live project opportunities.",
    collegeCount: 160,
    popularStreams: ["Computer Science & Engineering", "Information Science", "MBA", "Law", "AI & Robotics"],
    averageLivingCost: "₹15,000 - ₹26,000 / month",
    topUniversities: [
      "Indian Institute of Science (IISc)",
      "RV College of Engineering (RVCE)",
      "BMS College of Engineering",
      "MS Ramaiah Institute of Technology",
      "NLSIU Bangalore",
      "IIM Bangalore"
    ],
    whyStudyHere: [
      "Direct Proximity to Global Tech Giants: Microsoft, Google, Intel, Cisco, and Nvidia offices located minutes from campuses.",
      "Top Startup Density: Highest number of tech startups and venture incubators in India.",
      "World-Renowned Law & Science: Hosts IISc and National Law School of India University."
    ],
    studentLife: "Pleasant year-round weather, diverse multicultural student community, tech meetups, hackathons, and vibrant food streets in Koramangala and Indiranagar.",
    faqs: [
      {
        q: "How can outside-Karnataka students get admission to top Bangalore engineering colleges?",
        a: "All-India students can take the COMEDK UGET entrance examination or apply through direct institutional merit quotas."
      }
    ]
  },
  {
    id: "loc_mumbai",
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    tagline: "India's Financial Capital and High-Impact Corporate Launchpad",
    coverImage: "/images/locations/mumbai.jpg",
    description: "Mumbai is the financial, commercial, and media heartbeat of India. From IIT Bombay in scenic Powai to premier management institutes like JBIMS and SPJIMR, Mumbai offers direct pipelines to banking, capital markets, and Fortune 500 conglomerates.",
    collegeCount: 120,
    popularStreams: ["Finance & MBA", "Engineering & Tech", "Media & Communication", "Medicine"],
    averageLivingCost: "₹16,000 - ₹28,000 / month",
    topUniversities: [
      "IIT Bombay",
      "Veermata Jijabai Technological Institute (VJTI)",
      "Jamnalal Bajaj Institute of Management Studies (JBIMS)",
      "SPJIMR Mumbai",
      "ICT Mumbai"
    ],
    whyStudyHere: [
      "Financial Nerve Center: Immediate access to RBI, BSE, NSE, and global investment banking desks.",
      "Unrivaled Industry Interface: Top corporate guest lecturers and round-the-year live consulting projects.",
      "Highest Safe Metropolis: Safe public transit running 24x7 via Mumbai Local and Metro networks."
    ],
    studentLife: "Fast-paced, vibrant coastal lifestyle with iconic Marine Drive, college festivals (Mood Indigo, Malhar), and thriving youth networking circles.",
    faqs: [
      {
        q: "Which entrance exam is used for engineering admissions in Mumbai?",
        a: "Admissions to Maharashtra state colleges use MHT-CET and JEE Main scores through the CAP rounds."
      }
    ]
  },
  {
    id: "loc_dehradun",
    slug: "dehradun",
    name: "Dehradun",
    state: "Uttarakhand",
    tagline: "India's Education Capital in the Serene Foothills of the Himalayas",
    coverImage: "/images/colleges/upes-dehradun.jpg",
    description: "Nestled in the Doon Valley, Dehradun is known as the School and Higher Education Capital of India. Home to prestigious institutions like UPES Dehradun, Doon Business School, Graphic Era, and Forest Research Institute, it provides an inspiring academic climate, top placement records, and clean air.",
    collegeCount: 65,
    popularStreams: ["Petroleum & Energy", "Computer Science (AI/ML)", "Management (MBA)", "Law", "Agriculture"],
    averageLivingCost: "₹9,000 - ₹16,000 / month",
    topUniversities: [
      "UPES Dehradun",
      "Doon Business School (DBS)",
      "Graphic Era University",
      "DIT University",
      "IMS Unison University"
    ],
    whyStudyHere: [
      "Peaceful Academic Ambiance: Pollution-free green environment ideal for deep technical and managerial research.",
      "Industry Specializations: Leading hub for Energy, Petroleum, Aviation, and Environmental Law programs.",
      "Proximity to Delhi NCR: Excellent connectivity via expressways, Vande Bharat, and Jolly Grant Airport."
    ],
    studentLife: "Scenic weekend treks to Mussoorie and Rishikesh, pleasant weather, vibrant cafes, and tight-knit multicultural student communities.",
    faqs: [
      {
        q: "What makes UPES and DBS in Dehradun popular among students?",
        a: "UPES and DBS offer specialized industry-integrated curriculum, QS 5-star facilities, and consistent 90%+ placement records with Fortune 500 companies."
      }
    ]
  },
  {
    id: "loc_chandigarh",
    slug: "chandigarh",
    name: "Chandigarh Tricity",
    state: "Punjab & Chandigarh",
    tagline: "The City Beautiful: North India's Leading Technical and Innovation Corridor",
    coverImage: "/images/colleges/chandigarh-university.jpg",
    description: "Chandigarh Tricity (comprising Chandigarh, Mohali, and Panchkula) has emerged as North India's major tech and university corridor. Housing top-ranked institutions like Chandigarh University (CU), Punjab University, PEC, CGC Jhanjeri & Landran, and nearby Lovely Professional University (LPU), it offers a world-class urban experience with unbeatable campus placement records.",
    collegeCount: 110,
    popularStreams: ["B.Tech & AI", "Management (MBA)", "Pharmacy", "Law", "Computer Applications (BCA)"],
    averageLivingCost: "₹10,000 - ₹18,000 / month",
    topUniversities: [
      "Chandigarh University (CU Mohali)",
      "Lovely Professional University (LPU)",
      "Chandigarh Group of Colleges (CGC)",
      "Punjab Engineering College (PEC)",
      "Panjab University (PU Chandigarh)"
    ],
    whyStudyHere: [
      "Mega Placement Drives: Over 900+ multinational corporate recruiters visit Chandigarh universities annually.",
      "Smart City Infrastructure: India's cleanest and best-planned city with superior student housing and transport.",
      "Thriving IT Park & SEZs: Growing presence of Infosys, Tech Mahindra, and startup accelerators in Rajiv Gandhi IT Park Mohali."
    ],
    studentLife: "Sector 17 & 35 vibrant lifestyle, Sukhna Lake, modern student multiplexes, concerts, and tech hackathons across university campuses.",
    faqs: [
      {
        q: "How are placements in Chandigarh universities like CU and CGC?",
        a: "Chandigarh University and CGC regularly host 850-900+ companies including Microsoft, Google, Amazon, and IBM, offering packages up to ₹54.75 LPA to ₹1.7 Crore."
      }
    ]
  },
  {
    id: "loc_roorkee",
    slug: "roorkee",
    name: "Roorkee",
    state: "Uttarakhand",
    tagline: "India's Historic Engineering Cradle and Technical Innovation Hub",
    coverImage: "/images/colleges/rit-roorkee.jpg",
    description: "Roorkee holds legendary status as India's oldest engineering cradle. Beyond IIT Roorkee, the city houses elite NAAC A++ technical colleges like Roorkee Institute of Technology (RIT), fostering a high-density technical culture with state-of-the-art coding and robotics centers.",
    collegeCount: 35,
    popularStreams: ["Engineering (B.Tech)", "Data Science & AI", "Management (MBA)", "Agriculture", "Pharmacy"],
    averageLivingCost: "₹7,500 - ₹13,000 / month",
    topUniversities: [
      "Roorkee Institute of Technology (RIT)",
      "IIT Roorkee",
      "COER University"
    ],
    whyStudyHere: [
      "Centuries of Engineering Heritage: A city deeply rooted in technical scholarship, research, and innovation.",
      "High Academic ROI: Quality technical education at budget-friendly tuition and hostel costs.",
      "Top Recruiter Pipelines: Direct recruitment drives from Microsoft, Amazon, Tata Technologies, and Wipro."
    ],
    studentLife: "Disciplined and focused campus learning, active student clubs, coding hackathons, and easy rail connectivity to Delhi NCR and Dehradun.",
    faqs: [
      {
        q: "Why choose RIT Roorkee for B.Tech?",
        a: "RIT Roorkee is NAAC A++ accredited (3.61 CGPA) with specialized Apple iOS labs, high placement track records, and direct admission counselling."
      }
    ]
  }
];
