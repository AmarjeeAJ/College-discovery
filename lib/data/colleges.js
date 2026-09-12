/**
 * College Mock Dataset
 * Mirrors future MongoDB 'colleges' collection.
 * Ready for REST API GET /api/colleges and GET /api/colleges/:slug
 */

export const collegesData = [
  {
    id: "col_1",
    slug: "mnit-jaipur",
    name: "Malaviya National Institute of Technology",
    shortName: "MNIT Jaipur",
    type: "Public / Institute of National Importance",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 1963,
    campusArea: "317 Acres",
    accreditation: "AICTE, NBA Accredited",
    nirfRanking: 37,
    rating: 4.6,
    reviewsCount: 420,
    coverImage: "/images/colleges/mnit-jaipur.jpg",
    campusImages: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Architecture"],
    feesRange: "₹1.5 Lakh - ₹2.2 Lakh per year",
    annualFeeNumeric: 185000,
    hostelFee: "₹45,000 per year",
    placementRate: "92%",
    averagePackage: 13.8,
    highestPackage: 64.0,
    entranceExams: ["JEE Main", "GATE", "CAT", "CCMT"],
    featured: true,
    tagline: "Premier National Engineering & Research Institute in the Heart of Jaipur",
    description: "Malaviya National Institute of Technology Jaipur (MNIT) is one of the premier National Institutes of Technology in India, declared as an Institute of National Importance by the Ministry of Education, Government of India. Spread across 317 lush green acres in Malviya Nagar, Jaipur, it fosters cutting-edge technical education, innovation incubators, and exceptional industry recruitment.",
    courses: [
      {
        id: "c_mnit_1",
        name: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        seats: 132,
        annualFee: "₹1,85,000",
        avgPackage: "₹18.5 LPA",
        eligibility: "10+2 with Physics, Mathematics & Chemistry (Min 75% aggregate) + JEE Main Rank"
      },
      {
        id: "c_mnit_2",
        name: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        seats: 120,
        annualFee: "₹1,85,000",
        avgPackage: "₹15.2 LPA",
        eligibility: "10+2 with PCM + JEE Main valid rank"
      },
      {
        id: "c_mnit_3",
        name: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        seats: 115,
        annualFee: "₹1,85,000",
        avgPackage: "₹11.4 LPA",
        eligibility: "10+2 with PCM + JEE Main valid rank"
      },
      {
        id: "c_mnit_4",
        name: "MBA in Management Studies",
        duration: "2 Years",
        seats: 60,
        annualFee: "₹1,60,000",
        avgPackage: "₹9.8 LPA",
        eligibility: "Graduation with 60% + CAT/CMAT/GMAT percentile"
      }
    ],
    eligibility: "Candidates must have passed 10+2 with Physics, Mathematics, and Chemistry with a minimum of 75% aggregate marks (65% for SC/ST). Admissions are processed strictly through Central Seat Allocation Board (CSAB) / JoSAA counselling based on JEE Main ranks.",
    admissionProcess: [
      "Appear for JEE Main national examination conducted by NTA.",
      "Register for Joint Seat Allocation Authority (JoSAA) / CSAB counselling.",
      "Fill choices of MNIT Jaipur and preferred branch according to merit.",
      "Undergo online document verification upon seat allotment.",
      "Complete physical reporting, hostel allotment, and semester fee submission at the Jaipur campus."
    ],
    recruiters: ["Google", "Microsoft", "Amazon", "Texas Instruments", "Goldman Sachs", "Tata Motors", "L&T", "Samsung R&D", "Oracle", "Qualcomm"],
    facilities: [
      "High-Performance Computing Cluster",
      "Central Library with 2,50,000+ Titles",
      "Incubation & Innovation Cell",
      "12 Student Hostels with High-Speed Wi-Fi",
      "Olympic-size Sports Complex",
      "24x7 Medical Health Centre"
    ],
    scholarships: "Central Sector Scholarship Scheme for Top Class Education, Merit-cum-Means Scholarships, and Fee Waivers for Economically Weaker Section (EWS) candidates as per Government of India norms.",
    cutoffs: [
      { branch: "Computer Science Engineering", round1Rank: 4200, closingRank: 5650 },
      { branch: "Electronics & Communication", round1Rank: 9800, closingRank: 12400 },
      { branch: "Electrical Engineering", round1Rank: 15200, closingRank: 19800 }
    ],
    faqs: [
      {
        q: "What is the average package for CSE at MNIT Jaipur?",
        a: "The average CTC for the Computer Science & Engineering department stands at approximately ₹18.5 LPA, with the top 20% receiving offers exceeding ₹28 LPA."
      },
      {
        q: "Does MNIT Jaipur offer direct admission through management quota?",
        a: "No. MNIT Jaipur is a Central Government Institute of National Importance. Admissions for B.Tech are 100% merit-based through JEE Main and JoSAA/CSAB counselling."
      }
    ]
  },
  {
    id: "col_2",
    slug: "manipal-university-jaipur",
    name: "Manipal University Jaipur",
    shortName: "MUJ",
    type: "Private State University",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2011,
    campusArea: "122 Acres",
    accreditation: "NAAC A+ Accredited, UGC Recognized",
    nirfRanking: 64,
    rating: 4.5,
    reviewsCount: 380,
    coverImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    campusImages: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "Computer Science", "BCA", "BBA"],
    feesRange: "₹2.9 Lakh - ₹3.8 Lakh per year",
    annualFeeNumeric: 320000,
    hostelFee: "₹1,20,000 per year",
    placementRate: "88%",
    averagePackage: 8.5,
    highestPackage: 42.0,
    entranceExams: ["MET (Manipal Entrance Test)", "JEE Main", "CAT", "CLAT"],
    featured: true,
    tagline: "World-Class Infrastructure and Global Pedagogy in Rajasthan",
    description: "Manipal University Jaipur (MUJ) has redefined private higher education in North India with its sprawling 122-acre modern campus on Jaipur-Ajmer Expressway. Renowned for innovative pedagogy, industry-sponsored laboratories, and global exchange tie-ups, MUJ offers accredited degrees in Engineering, Management, Law, and Design.",
    courses: [
      {
        id: "c_muj_1",
        name: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        seats: 360,
        annualFee: "₹3,40,000",
        avgPackage: "₹9.6 LPA",
        eligibility: "10+2 with minimum 50% in PCM + MET / JEE Main"
      },
      {
        id: "c_muj_2",
        name: "MBA (Dual Specialization)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹4,20,000",
        avgPackage: "₹8.2 LPA",
        eligibility: "Graduation with 50% aggregate + CAT/MAT/CMAT score"
      },
      {
        id: "c_muj_3",
        name: "BA LLB (Hons)",
        duration: "5 Years Integrated",
        seats: 120,
        annualFee: "₹2,10,000",
        avgPackage: "₹6.8 LPA",
        eligibility: "10+2 with 50% aggregate + CLAT / LSAT score"
      },
      {
        id: "c_muj_4",
        name: "BCA (Computer Applications)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹1,60,000",
        avgPackage: "₹5.5 LPA",
        eligibility: "10+2 in any stream with Mathematics/Computer application"
      }
    ],
    eligibility: "Candidates require a minimum 50% aggregate in 10+2 with Physics, Mathematics, and one optional science subject. Selection is based on Manipal Entrance Test (MET) score or JEE Main percentile.",
    admissionProcess: [
      "Submit online application via the MUJ admission portal.",
      "Register and appear for Manipal Entrance Test (MET) or submit JEE Main scorecard.",
      "Attend online counselling session and lock course preference.",
      "Verify educational credentials and submit initial admission fee installment.",
      "Attend campus orientation."
    ],
    recruiters: ["Dell", "Amazon", "Accenture", "Infosys", "Deloitte", "Adani Group", "Capgemini", "Cognizant"],
    facilities: ["Air-Conditioned Academic Blocks", "Fintech & Robotics Research Hubs", "Multi-Cuisine Food Courts", "Olympic Size Swimming Pool", "Indoor Badminton & Squash Courts"],
    scholarships: "TMA Pai Merit Scholarships, Rajasthan Domicile Fee Concession, and Sports Achiever Awards up to 50% tuition waiver.",
    cutoffs: [
      { branch: "CSE Core", round1Rank: 6200, closingRank: 8400 },
      { branch: "Data Science & AI", round1Rank: 8900, closingRank: 11200 }
    ],
    faqs: [
      {
        q: "Is hostel accommodation compulsory at MUJ?",
        a: "Hostel is optional for students living locally in Jaipur, but highly recommended for outstation students due to world-class amenities."
      }
    ]
  },
  {
    id: "col_3",
    slug: "jecrc-university-jaipur",
    name: "JECRC University",
    shortName: "JECRC Jaipur",
    type: "Private University",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2012,
    campusArea: "32 Acres",
    accreditation: "NAAC Accredited, UGC Recognized",
    nirfRanking: 112,
    rating: 4.3,
    reviewsCount: 310,
    coverImage: "/images/colleges/campus-fallback.jpg",
    campusImages: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Engineering", "B.Tech", "Management", "BCA", "MCA", "BBA"],
    feesRange: "₹1.4 Lakh - ₹2.2 Lakh per year",
    annualFeeNumeric: 175000,
    hostelFee: "₹85,000 per year",
    placementRate: "86%",
    averagePackage: 6.8,
    highestPackage: 34.0,
    entranceExams: ["JEE Main", "REAP", "JU Entrance Test"],
    featured: false,
    tagline: "Driven by Culture of Innovation and High Campus Placements",
    description: "JECRC University in Jaipur is celebrated for its deep industry partnerships, practical technical learning, and track record in campus placements. Offering programs across Engineering, IT, Management, and Humanities, JECRC equips students with in-demand certifications and real-world project portfolios.",
    courses: [
      {
        id: "c_ju_1",
        name: "B.Tech in Computer Science & AI",
        duration: "4 Years",
        seats: 300,
        annualFee: "₹1,85,000",
        avgPackage: "₹7.4 LPA",
        eligibility: "10+2 with PCM (Min 55%) + JEE Main / REAP"
      },
      {
        id: "c_ju_2",
        name: "BCA (Cloud Computing & DevOps)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹1,10,000",
        avgPackage: "₹5.2 LPA",
        eligibility: "10+2 with Mathematics/Computer applications"
      }
    ],
    eligibility: "Pass in 10+2 examination with minimum 50% aggregate marks in PCM. Direct entry and REAP counselling pathways available.",
    admissionProcess: [
      "Submit application through online portal or physical admission desk.",
      "Counselling assessment based on 10+2 and JEE Main scores.",
      "Seat reservation and document validation."
    ],
    recruiters: ["TCS", "Wipro", "Capgemini", "Amazon", "Hexaware", "Zensar", "LTI Mindtree"],
    facilities: ["Makerspace Lab", "Incubation Centre", "Digital Library", "Hostels with Mess", "Cricket Ground"],
    scholarships: "Merit scholarship up to 30% on tuition fee for 85%+ score in 10+2 board examinations.",
    cutoffs: [
      { branch: "CSE AI & ML", round1Rank: 24000, closingRank: 38000 }
    ],
    faqs: [
      {
        q: "What is the average package at JECRC University?",
        a: "The overall average package is around ₹6.8 LPA, with CSE branches recording packages up to ₹8 LPA on average."
      }
    ]
  },
  {
    id: "col_4",
    slug: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    type: "Public / Institute of National Importance",
    city: "New Delhi",
    state: "Delhi NCR",
    establishedYear: 1961,
    campusArea: "320 Acres",
    accreditation: "Institute of Eminence (IoE), AICTE",
    nirfRanking: 2,
    rating: 4.9,
    reviewsCount: 940,
    coverImage: "/images/colleges/iit-delhi.jpg",
    campusImages: [
      "/images/colleges/campus-fallback.jpg"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Universities"],
    feesRange: "₹2.2 Lakh - ₹2.5 Lakh per year",
    annualFeeNumeric: 220000,
    hostelFee: "₹35,000 per year",
    placementRate: "97%",
    averagePackage: 25.8,
    highestPackage: 120.0,
    entranceExams: ["JEE Advanced", "CAT", "GATE"],
    featured: true,
    tagline: "India's Foremost Epicenter of Technological Breakthroughs and Research",
    description: "IIT Delhi is a globally acclaimed technology institution located in Hauz Khas, New Delhi. Consistently ranked #2 in NIRF Engineering and recognized as an Institute of Eminence, IIT Delhi is the launchpad for prominent global CEOs, tech visionaries, and researchers.",
    courses: [
      {
        id: "c_iitd_1",
        name: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        seats: 99,
        annualFee: "₹2,20,000",
        avgPackage: "₹36.5 LPA",
        eligibility: "Top ranks in JEE Advanced after qualifying JEE Main"
      },
      {
        id: "c_iitd_2",
        name: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        seats: 120,
        annualFee: "₹2,20,000",
        avgPackage: "₹26.2 LPA",
        eligibility: "JEE Advanced top rank"
      }
    ],
    eligibility: "Must qualify JEE Main and rank in top bracket of JEE Advanced. 75% aggregate in 10+2.",
    admissionProcess: [
      "Qualify JEE Main.",
      "Secure high rank in JEE Advanced.",
      "Participate in JoSAA national counselling.",
      "Physical reporting at Hauz Khas campus."
    ],
    recruiters: ["Google", "Apple", "Microsoft", "Jane Street", "Goldman Sachs", "McKinsey", "BCG", "Intel"],
    facilities: ["Central Research Facility", "Supercomputer Padum", "Design Innovation Centre", "Modern Hostels", "Gymkhana"],
    scholarships: "100% Tuition Fee waiver for SC/ST and students with family income under ₹1 Lakh.",
    cutoffs: [
      { branch: "CSE", round1Rank: 35, closingRank: 115 }
    ],
    faqs: [
      {
        q: "What was the highest package at IIT Delhi?",
        a: "International offers have exceeded ₹1.2 Crore per annum, with domestic packages touching ₹85 LPA."
      }
    ]
  },
  {
    id: "col_5",
    slug: "dtu-delhi",
    name: "Delhi Technological University",
    shortName: "DTU Delhi",
    type: "State Government University",
    city: "New Delhi",
    state: "Delhi NCR",
    establishedYear: 1941,
    campusArea: "164 Acres",
    accreditation: "NAAC A+ Accredited, NBA",
    nirfRanking: 29,
    rating: 4.7,
    reviewsCount: 650,
    coverImage: "/images/colleges/dtu-delhi.jpg",
    campusImages: [
      "/images/colleges/campus-fallback.jpg"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Universities"],
    feesRange: "₹1.9 Lakh - ₹2.3 Lakh per year",
    annualFeeNumeric: 210000,
    hostelFee: "₹52,000 per year",
    placementRate: "93%",
    averagePackage: 15.4,
    highestPackage: 62.5,
    entranceExams: ["JEE Main", "JAC Delhi", "CAT"],
    featured: true,
    tagline: "Pioneering Technical Legacy Formerly Known as Delhi College of Engineering (DCE)",
    description: "Delhi Technological University (DTU), formerly Delhi College of Engineering, has a rich legacy dating back to 1941. Situated on a sprawling 164-acre campus in Rohini, Delhi, DTU is renowned for its intense student engineering societies, super-mileage vehicle teams, and phenomenal placements.",
    courses: [
      {
        id: "c_dtu_1",
        name: "B.Tech in Software Engineering",
        duration: "4 Years",
        seats: 180,
        annualFee: "₹2,10,000",
        avgPackage: "₹19.2 LPA",
        eligibility: "10+2 with 60% in PCM + JEE Main rank via JAC Delhi"
      },
      {
        id: "c_dtu_2",
        name: "B.Tech in Mathematics & Computing",
        duration: "4 Years",
        seats: 120,
        annualFee: "₹2,10,000",
        avgPackage: "₹18.0 LPA",
        eligibility: "10+2 PCM + JEE Main via JAC Delhi"
      }
    ],
    eligibility: "Admissions to B.Tech are conducted via Joint Admission Counselling (JAC) Delhi based on JEE Main CRL ranks (85% Delhi Region Quota, 15% Outside Delhi).",
    admissionProcess: [
      "Appear for JEE Main exam.",
      "Register for JAC Delhi counselling.",
      "Choice filling of DTU engineering branches.",
      "Seat allotment and physical document verification."
    ],
    recruiters: ["Uber", "Google", "Amazon", "Samsung", "Texas Instruments", "Morgan Stanley", "Adobe"],
    facilities: ["Knowledge Park", "Central Computer Centre", "14 Student Hostels", "Open Air Theatre", "Sports Stadium"],
    scholarships: "Delhi Government Merit-cum-Means Financial Assistance Scheme.",
    cutoffs: [
      { branch: "Computer Engineering (Delhi)", round1Rank: 7800, closingRank: 11500 },
      { branch: "Computer Engineering (Outside Delhi)", round1Rank: 2400, closingRank: 3900 }
    ],
    faqs: [
      {
        q: "What is the quota division for DTU admissions?",
        a: "85% of total seats are reserved for students passing 12th from schools located in the National Capital Territory of Delhi, and 15% for Outside Delhi candidates."
      }
    ]
  },
  {
    id: "col_6",
    slug: "rv-college-of-engineering-bangalore",
    name: "RV College of Engineering",
    shortName: "RVCE Bangalore",
    type: "Autonomous Private College (VTU)",
    city: "Bangalore",
    state: "Karnataka",
    establishedYear: 1963,
    campusArea: "52 Acres",
    accreditation: "NAAC A+ Grade, NBA Tier-1",
    nirfRanking: 43,
    rating: 4.7,
    reviewsCount: 520,
    coverImage: "/images/colleges/rvce-bangalore.jpg",
    campusImages: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Engineering", "B.Tech", "Computer Science", "MCA"],
    feesRange: "₹2.5 Lakh - ₹4.5 Lakh per year",
    annualFeeNumeric: 280000,
    hostelFee: "₹1,10,000 per year",
    placementRate: "95%",
    averagePackage: 14.5,
    highestPackage: 58.0,
    entranceExams: ["KCET", "COMEDK UGET", "Management Quota"],
    featured: true,
    tagline: "Bangalore's Highest Ranked Private Engineering Institution",
    description: "Located on Mysore Road in Bengaluru, RV College of Engineering (RVCE) is considered the gold standard of private engineering education in South India. Benefiting directly from its location in India's Silicon Valley, RVCE boasts near 100% placement records in elite tech product firms.",
    courses: [
      {
        id: "c_rvce_1",
        name: "B.E. in Computer Science & Engineering",
        duration: "4 Years",
        seats: 180,
        annualFee: "₹2,80,000",
        avgPackage: "₹19.4 LPA",
        eligibility: "10+2 with 50% in PCM + KCET / COMEDK"
      },
      {
        id: "c_rvce_2",
        name: "B.E. in Artificial Intelligence & Machine Learning",
        duration: "4 Years",
        seats: 60,
        annualFee: "₹2,80,000",
        avgPackage: "₹18.1 LPA",
        eligibility: "10+2 with 50% in PCM + COMEDK / KCET"
      }
    ],
    eligibility: "Minimum 50% in 10+2 with Physics, Mathematics, and Chemistry. Valid COMEDK or KCET score required for merit seats.",
    admissionProcess: [
      "Appear for Karnataka CET (Karnataka students) or COMEDK UGET (All India).",
      "Attend centralised counselling rounds.",
      "Allotted students report to RVCE Bangalore campus with original testimonials."
    ],
    recruiters: ["Atlassian", "Cisco", "Amazon", "Intel", "Bosch", "Directi", "Goldman Sachs", "Nvidia"],
    facilities: ["Nvidia Deep Learning Lab", "Cisco Networking Academy", "Clean Energy Centre", "Hostels", "Robotics Club"],
    scholarships: "Rashtreeya Sikshana Samithi Trust (RSST) merit-cum-means awards.",
    cutoffs: [
      { branch: "CSE (COMEDK)", round1Rank: 280, closingRank: 420 },
      { branch: "ISE (COMEDK)", round1Rank: 520, closingRank: 780 }
    ],
    faqs: [
      {
        q: "What is the COMEDK cutoff for RVCE CSE?",
        a: "RVCE CSE typically closes within rank 400 to 500 in COMEDK round 1."
      }
    ]
  },
  {
    id: "col_7",
    slug: "iim-ahmedabad",
    name: "Indian Institute of Management Ahmedabad",
    shortName: "IIM Ahmedabad",
    type: "Public / Institute of National Importance",
    city: "Ahmedabad",
    state: "Gujarat",
    establishedYear: 1961,
    campusArea: "102 Acres",
    accreditation: "EQUIS, AACSB Accredited",
    nirfRanking: 1,
    rating: 4.95,
    reviewsCount: 1100,
    coverImage: "/images/colleges/iim-ahmedabad.jpg",
    campusImages: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Management", "MBA", "Universities"],
    feesRange: "₹25 Lakh - ₹28 Lakh total program fee",
    annualFeeNumeric: 1300000,
    hostelFee: "Included in course fee",
    placementRate: "100%",
    averagePackage: 34.2,
    highestPackage: 115.0,
    entranceExams: ["CAT", "GMAT"],
    featured: true,
    tagline: "India's Pinnacle Business School and Harvard-Style Case Pedagogy Hub",
    description: "The Indian Institute of Management Ahmedabad (IIMA) is widely acknowledged as the leading business school in the Asia-Pacific region. Ranked #1 in NIRF Management, IIMA's two-year PGP program produces global corporate leaders, policy shapers, and unicorn founders.",
    courses: [
      {
        id: "c_iima_1",
        name: "Post Graduate Program in Management (MBA)",
        duration: "2 Years",
        seats: 385,
        annualFee: "₹13,00,000",
        avgPackage: "₹34.2 LPA",
        eligibility: "Bachelor's Degree in any discipline (Min 50%) + Top 99+ Percentile in CAT"
      },
      {
        id: "c_iima_2",
        name: "PGP in Food and Agri-Business Management (FABM)",
        duration: "2 Years",
        seats: 50,
        annualFee: "₹12,00,000",
        avgPackage: "₹23.5 LPA",
        eligibility: "Bachelor's degree in Agriculture/Allied streams or any discipline + CAT"
      }
    ],
    eligibility: "Graduate degree with minimum 50% or equivalent CGPA. Admission is strictly via CAT score, Analytical Writing Test (AWT), and Personal Interview (PI).",
    admissionProcess: [
      "Appear for CAT examination.",
      "Shortlisting based on CAT percentile, 10th, 12th, and graduation marks, plus academic diversity.",
      "Attend Analytical Writing Test (AWT) & Personal Interview.",
      "Final offer release and matriculation."
    ],
    recruiters: ["McKinsey & Co", "Boston Consulting Group", "Bain & Company", "Goldman Sachs", "Morgan Stanley", "Tata Administrative Services"],
    facilities: ["Vikram Sarabhai Library", "Historic Louis Kahn Campus & New Campus", "Case Method Discussion Halls", "Residential Dorms"],
    scholarships: "Special Need-Based Scholarship Scheme (SNBSS) ensuring no student is deprived due to economic hardship.",
    cutoffs: [
      { branch: "PGP General", round1Rank: 99.5, closingRank: 99.85 }
    ],
    faqs: [
      {
        q: "What is the CAT percentile required for IIM Ahmedabad?",
        a: "While the minimum eligibility cutoff is 80 percentile, competitive calls for general engineering males typically start at 99.6+ percentile."
      }
    ]
  },
  {
    id: "col_8",
    slug: "symbiosis-institute-of-business-management-pune",
    name: "Symbiosis Institute of Business Management",
    shortName: "SIBM Pune",
    type: "Private Deemed University",
    city: "Pune",
    state: "Maharashtra",
    establishedYear: 1978,
    campusArea: "300 Acres",
    accreditation: "NAAC A++ Grade (CGPA 3.58/4)",
    nirfRanking: 17,
    rating: 4.8,
    reviewsCount: 460,
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    campusImages: [
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Management", "MBA"],
    feesRange: "₹12 Lakh - ₹14 Lakh per year",
    annualFeeNumeric: 1320000,
    hostelFee: "₹1,45,000 per year",
    placementRate: "100%",
    averagePackage: 26.7,
    highestPackage: 49.0,
    entranceExams: ["SNAP (Symbiosis National Aptitude Test)"],
    featured: true,
    tagline: "Hilltop Lavale Campus Delivering Leadership in Marketing, Finance & HR",
    description: "Nestled on the scenic hills of Lavale in Pune, SIBM Pune is the flagship business school of Symbiosis International (Deemed University). Known for student-driven governance, premier executive mentorship, and FMCG recruitments, it stands among India's top 15 B-schools.",
    courses: [
      {
        id: "c_sibm_1",
        name: "Master of Business Administration (MBA)",
        duration: "2 Years",
        seats: 180,
        annualFee: "₹13,20,000",
        avgPackage: "₹26.7 LPA",
        eligibility: "Bachelor's degree with 50% + SNAP percentile"
      },
      {
        id: "c_sibm_2",
        name: "MBA in Innovation & Entrepreneurship",
        duration: "2 Years",
        seats: 60,
        annualFee: "₹9,80,000",
        avgPackage: "₹16.5 LPA",
        eligibility: "Graduate in any field with 50% + SNAP score"
      }
    ],
    eligibility: "Graduation with minimum 50% marks (45% for SC/ST). Candidates must qualify the Symbiosis National Aptitude Test (SNAP).",
    admissionProcess: [
      "Register and appear for SNAP exam.",
      "Apply to SIBM Pune specifically.",
      "Shortlisted candidates undergo Group Exercise (GE) and Personal Interaction (PI).",
      "Merit list published based on SNAP (50%) + GE-PI (50%)."
    ],
    recruiters: ["Hindustan Unilever", "P&G", "ITC", "Barclays", "JPMorgan Chase", "Accenture Strategy", "Google"],
    facilities: ["Bicycle-friendly Hill Campus", "Central Amphitheatre", "Modern Library", "Hostels with Valley Views"],
    scholarships: "Symbiosis Foundation Merit Scholarships for SNAP toppers.",
    cutoffs: [
      { branch: "MBA Core", round1Rank: 98.2, closingRank: 98.7 }
    ],
    faqs: [
      {
        q: "What SNAP cutoff is needed for SIBM Pune?",
        a: "The expected SNAP cutoff for SIBM Pune is around 98.5+ percentile for the General category."
      }
    ]
  },
  {
    id: "col_9",
    slug: "aiims-new-delhi",
    name: "All India Institute of Medical Sciences",
    shortName: "AIIMS New Delhi",
    type: "Autonomous Apex Medical Institute",
    city: "New Delhi",
    state: "Delhi NCR",
    establishedYear: 1956,
    campusArea: "115 Acres",
    accreditation: "MCI/NMC Recognized, Institute of National Importance",
    nirfRanking: 1,
    rating: 4.98,
    reviewsCount: 1420,
    coverImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    campusImages: [
      "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Medical", "Universities"],
    feesRange: "₹1,628 total course fee",
    annualFeeNumeric: 1628,
    hostelFee: "Nominal (~₹500 per year)",
    placementRate: "100%",
    averagePackage: 18.0,
    highestPackage: 45.0,
    entranceExams: ["NEET UG", "INI CET"],
    featured: true,
    tagline: "India's Apex Institution for Medical Science, Healthcare and Clinical Research",
    description: "AIIMS New Delhi is the pinnacle of healthcare education in India. Ranked consistently as the #1 medical institute in India, AIIMS combines rigorous clinical training, subsidized healthcare for millions, and cutting-edge biomedical research.",
    courses: [
      {
        id: "c_aiims_1",
        name: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        duration: "5.5 Years (incl. Internship)",
        seats: 125,
        annualFee: "₹1,628",
        avgPackage: "₹18.0 LPA",
        eligibility: "10+2 with Physics, Chemistry, Biology & English (Min 60%) + Top NEET UG All India Rank"
      },
      {
        id: "c_aiims_2",
        name: "B.Sc (Hons) Nursing",
        duration: "4 Years",
        seats: 96,
        annualFee: "₹2,400",
        avgPackage: "₹8.5 LPA",
        eligibility: "10+2 PCB + AIIMS Nursing Entrance Exam"
      }
    ],
    eligibility: "Candidates must be at least 17 years old with 60% aggregate in PCB in Class 12. Admission to MBBS is strictly through NEET UG All India Quota counselling.",
    admissionProcess: [
      "Clear NEET UG with top All India Rank (AIR 1 - 60 for General category).",
      "Participate in Medical Counselling Committee (MCC) 15% AIQ rounds.",
      "Report to Ansari Nagar campus for clinical fitness check and documentation."
    ],
    recruiters: ["Apollo Hospitals", "Max Healthcare", "Fortis", "NHS UK", "Johns Hopkins", "WHO"],
    facilities: ["Trauma Centre", "National Brain Research Lab", "Residential Hostels", "Advanced Surgical Simulators"],
    scholarships: "Government of India scholarships and research fellowships.",
    cutoffs: [
      { branch: "MBBS", round1Rank: 1, closingRank: 55 }
    ],
    faqs: [
      {
        q: "What is the annual MBBS fee at AIIMS Delhi?",
        a: "The total 5.5-year MBBS fee including hostel is under ₹6,000, heavily subsidized by the Government of India."
      }
    ]
  },
  {
    id: "col_10",
    slug: "national-law-school-of-india-university-bangalore",
    name: "National Law School of India University",
    shortName: "NLSIU Bangalore",
    type: "State Autonomous Law University",
    city: "Bangalore",
    state: "Karnataka",
    establishedYear: 1987,
    campusArea: "23 Acres",
    accreditation: "Bar Council of India (BCI) Recognized, NAAC A Grade",
    nirfRanking: 1,
    rating: 4.9,
    reviewsCount: 390,
    coverImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    campusImages: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Law", "Universities"],
    feesRange: "₹3.5 Lakh - ₹4.0 Lakh per year",
    annualFeeNumeric: 375000,
    hostelFee: "₹80,000 per year",
    placementRate: "98%",
    averagePackage: 17.5,
    highestPackage: 45.0,
    entranceExams: ["CLAT (Common Law Admission Test)"],
    featured: true,
    tagline: "The Premier National Law School and Fountainhead of Modern Indian Legal Education",
    description: "Established in 1987 in Nagarbhavi, Bangalore, NLSIU is India's foremost institution for legal studies. It pioneered the five-year integrated B.A., LL.B. (Hons.) curriculum in India and consistently ranks #1 across NIRF Law rankings.",
    courses: [
      {
        id: "c_nlsiu_1",
        name: "B.A., LL.B. (Hons.) Integrated",
        duration: "5 Years",
        seats: 240,
        annualFee: "₹3,75,000",
        avgPackage: "₹18.0 LPA",
        eligibility: "10+2 with 45% aggregate + CLAT Rank (Top 100 AIR)"
      },
      {
        id: "c_nlsiu_2",
        name: "LL.M. (Master of Laws)",
        duration: "1 Year",
        seats: 100,
        annualFee: "₹2,60,000",
        avgPackage: "₹12.5 LPA",
        eligibility: "LL.B. degree with 50% aggregate + CLAT PG score"
      }
    ],
    eligibility: "Successful completion of 10+2 with at least 45% marks (40% for SC/ST). Selection is purely on the basis of merit in the Common Law Admission Test (CLAT).",
    admissionProcess: [
      "Appear for national CLAT exam.",
      "Register for Consortium of NLUs counselling.",
      "Seat allocation based on CLAT ranking.",
      "Formal admission completion at Bangalore campus."
    ],
    recruiters: ["Shardul Amarchand Mangaldas", "Cyril Amarchand Mangaldas", "AZB & Partners", "Trilegal", "Khaitan & Co", "Herbert Smith Freehills", "Linklaters"],
    facilities: ["Sri Narayan Rao Melgiri Memorial National Law Library", "Moot Court Halls", "Hostels with Wi-Fi", "Legal Services Clinic"],
    scholarships: "Need-based financial aid ensuring eligible students receive up to 100% waiver on tuition and accommodation.",
    cutoffs: [
      { branch: "BA LLB (Hons)", round1Rank: 1, closingRank: 95 }
    ],
    faqs: [
      {
        q: "What rank is required in CLAT for NLSIU Bangalore?",
        a: "For General category candidates, NLSIU Bangalore typically closes within the top 95 to 110 All India Ranks."
      }
    ]
  },
  {
    id: "col_11",
    slug: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    type: "Public / Institute of National Importance",
    city: "Mumbai",
    state: "Maharashtra",
    establishedYear: 1958,
    campusArea: "550 Acres",
    accreditation: "Institute of Eminence, AICTE",
    nirfRanking: 3,
    rating: 4.95,
    reviewsCount: 1250,
    coverImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    campusImages: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Engineering", "B.Tech", "Management", "Universities"],
    feesRange: "₹2.2 Lakh - ₹2.4 Lakh per year",
    annualFeeNumeric: 228000,
    hostelFee: "₹38,000 per year",
    placementRate: "98%",
    averagePackage: 27.5,
    highestPackage: 140.0,
    entranceExams: ["JEE Advanced", "CAT", "GATE", "CEED"],
    featured: true,
    tagline: "The Foremost Choice for Top 100 JEE Advanced Rankers Located in Powai",
    description: "Located near Powai Lake in Mumbai, IIT Bombay is celebrated as India's dream technical university. Known for unmatched research facilities, legendary entrepreneurship culture, and hosting Asia's largest college festival (Mood Indigo), IIT Bombay shapes the vanguard of engineering and deep-tech founders.",
    courses: [
      {
        id: "c_iitb_1",
        name: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        seats: 171,
        annualFee: "₹2,28,000",
        avgPackage: "₹38.2 LPA",
        eligibility: "Top 65 All India Ranks in JEE Advanced"
      },
      {
        id: "c_iitb_2",
        name: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        seats: 110,
        annualFee: "₹2,28,000",
        avgPackage: "₹28.4 LPA",
        eligibility: "JEE Advanced top 300 rank"
      }
    ],
    eligibility: "Rank in top percentile of JEE Advanced with 75% in Class 12.",
    admissionProcess: [
      "Qualify JEE Main then secure top rank in JEE Advanced.",
      "Participate in JoSAA counselling.",
      "Powai campus document submission."
    ],
    recruiters: ["Jane Street", "Qualcomm", "Google", "Rubrik", "Optiver", "Micron", "Sony Japan", "Tower Research"],
    facilities: ["SINE Startup Incubator", "Nanofabrication Facility", "Powai Lake Campus Walkways", "Gymkhana", "Hostels"],
    scholarships: "Free Mess and Institute Merit-cum-Means waivers.",
    cutoffs: [
      { branch: "CSE", round1Rank: 1, closingRank: 67 }
    ],
    faqs: [
      {
        q: "What rank is required for CSE at IIT Bombay?",
        a: "Historically, IIT Bombay Computer Science closes within the top 60-67 All India Ranks in JEE Advanced."
      }
    ]
  },
  {
    id: "col_12",
    slug: "amity-university-jaipur",
    name: "Amity University Jaipur",
    shortName: "Amity Jaipur",
    type: "Private University",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2008,
    campusArea: "152 Acres",
    accreditation: "NAAC A+ Grade, UGC Recognized",
    nirfRanking: 89,
    rating: 4.2,
    reviewsCount: 290,
    coverImage: "/images/colleges/campus-fallback.jpg",
    campusImages: [
      "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80"
    ],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=120&q=80",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "BBA", "BCA"],
    feesRange: "₹1.6 Lakh - ₹2.8 Lakh per year",
    annualFeeNumeric: 195000,
    hostelFee: "₹75,000 per year",
    placementRate: "85%",
    averagePackage: 6.2,
    highestPackage: 30.0,
    entranceExams: ["Amity JEE", "JEE Main", "CAT", "MAT", "CUET"],
    featured: false,
    tagline: "Modern Hi-Tech Residential Campus on Delhi-Jaipur Highway",
    description: "Amity University Rajasthan (Jaipur) offers a residential university experience against the scenic backdrop of the Aravalli hills on the Delhi-Jaipur Highway. Equipped with cyber-security labs, moot courts, and international student exchange programs.",
    courses: [
      {
        id: "c_amity_1",
        name: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        seats: 180,
        annualFee: "₹1,95,000",
        avgPackage: "₹6.8 LPA",
        eligibility: "10+2 with 60% in PCM + Amity JEE / JEE Main"
      },
      {
        id: "c_amity_2",
        name: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹1,40,000",
        avgPackage: "₹4.8 LPA",
        eligibility: "10+2 in any stream with 50% minimum"
      }
    ],
    eligibility: "Pass in 10+2 with 60% aggregate. Direct admission pathways for candidates with 80%+ in CBSE/ICSE.",
    admissionProcess: [
      "Online application on Amity portal.",
      "Video interview and aptitude assessment.",
      "Admission letter issued with merit scholarship details."
    ],
    recruiters: ["Capgemini", "IBM", "HCL", "Ernst & Young", "Wipro", "TCS"],
    facilities: ["152 Acre Eco-friendly Campus", "Golf Course & Shooting Range", "Residential Hostels", "Amity Innovation Incubator"],
    scholarships: "100% Scholarship for 93%+ aggregate in Class 12.",
    cutoffs: [
      { branch: "CSE", round1Rank: 12000, closingRank: 25000 }
    ],
    faqs: [
      {
        q: "Does Amity Jaipur provide bus transportation from Jaipur city?",
        a: "Yes, luxury AC buses operate across all major sectors of Jaipur, Vaishali Nagar, Mansarovar, and Malviya Nagar."
      }
    ]
  }
];
