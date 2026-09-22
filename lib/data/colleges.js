/**
 * College Mock Dataset
 * Comprehensive, verified database for top Indian universities, engineering colleges,
 * B-schools, medical institutes, and law faculties with direct admission & counselling support.
 * All coverImage paths reference authentic real photographs in /images/colleges/{slug}.jpg.
 */

export const collegesData = [
  {
    id: "col_1",
    slug: "mnit-jaipur",
    aliases: ["malaviya-national-institute-of-technology", "mnit"],
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
    coverImage: "/images/colleges/mnit.jpg",
    campusImages: [
          "/images/colleges/mnit.jpg",
          "/images/colleges/mnit2.jpeg",
          "/images/colleges/mnit3.avif",
          "/images/colleges/mnit-jaipur.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Architecture", "Universities"],
    feesRange: "₹1.5 Lakh - ₹2.2 Lakh per year",
    annualFeeNumeric: 185000,
    hostelFee: "₹45,000 per year",
    placementRate: "92%",
    averagePackage: 13.8,
    highestPackage: 64.0,
    entranceExams: ["JEE Main", "GATE", "CAT", "CCMT"],
    featured: true,
    directAdmission: false,
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
    aliases: ["muj", "manipal-jaipur"],
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
    coverImage: "/images/colleges/manipal-university-1.webp",
    campusImages: [
          "/images/colleges/manipal-university-1.webp",
          "/images/colleges/manipal2.webp",
          "/images/colleges/manipal-university-jaipur.jpg",
          "/images/colleges/manipal-university-jaipur-2.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "Computer Science", "BCA", "BBA", "Universities"],
    feesRange: "₹2.9 Lakh - ₹3.8 Lakh per year",
    annualFeeNumeric: 320000,
    hostelFee: "₹1,20,000 per year",
    placementRate: "88%",
    averagePackage: 8.5,
    highestPackage: 42.0,
    entranceExams: ["MET (Manipal Entrance Test)", "JEE Main", "CAT", "CLAT", "Direct Admission"],
    featured: true,
    directAdmission: true,
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
    eligibility: "Candidates require a minimum 50% aggregate in 10+2 with Physics, Mathematics, and one optional science subject. Selection is based on Manipal Entrance Test (MET) score, JEE Main percentile, or direct merit quota counselling.",
    admissionProcess: [
      "Submit online application via the MUJ admission portal or counselor desk.",
      "Register and appear for Manipal Entrance Test (MET) or submit JEE Main scorecard.",
      "Attend counselling session and lock course preference.",
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
    id: "col_vgu_jaipur",
    slug: "vgu-jaipur",
    aliases: ["vivekananda-global-university-jaipur", "vgu"],
    name: "Vivekananda Global University",
    shortName: "VGU Jaipur",
    type: "Private University",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2012,
    campusArea: "45 Acres",
    accreditation: "NAAC A+ Accredited (3.28 CGPA), UGC & AICTE Approved, BCI & PCI Approved",
    nirfRanking: 88,
    rating: 4.5,
    reviewsCount: 340,
    coverImage: "/images/colleges/vgu.webp",
    campusImages: [
          "/images/colleges/vgu.webp",
          "/images/colleges/vgu-jaipur.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "Computer Science", "BCA", "Universities", "Design", "Pharmacy", "Agriculture"],
    feesRange: "₹1.1 Lakh - ₹2.2 Lakh per year",
    annualFeeNumeric: 145000,
    hostelFee: "₹85,000 per year",
    placementRate: "89%",
    averagePackage: 6.5,
    highestPackage: 54.0,
    entranceExams: ["VGUCET", "JEE Main", "CUET", "CAT", "MAT", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "NAAC A+ Multidisciplinary Research & Innovation University in Pink City",
    description: "Vivekananda Global University (VGU), Jaipur is a premier NAAC A+ accredited private multidisciplinary university situated across a 45-acre green campus in Jagatpura, Jaipur. Recognized by UGC, AICTE, BCI, and PCI, VGU offers over 100+ comprehensive undergraduate, postgraduate, and doctoral programs spanning Engineering & Technology, Computer Applications, Management, Law, Design, Applied Sciences, and Pharmacy. With cutting-edge research incubators, Mitsubishi Electric and Siemens robotics labs, global university exchange partnerships, and on-campus direct admissions through dedicated counselors, VGU delivers industry-aligned pedagogy, experiential project learning, and high placement outcomes.",
    courses: [
      {
        id: "c_vgu_1",
        name: "B.Tech in Computer Science & Engineering (AI & ML / Cloud)",
        duration: "4 Years",
        seats: 240,
        annualFee: "₹1,75,000",
        avgPackage: "₹7.2 LPA",
        eligibility: "10+2 with PCM (Min 50% aggregate) + JEE Main / VGUCET / Direct Merit"
      },
      {
        id: "c_vgu_2",
        name: "MBA (Dual Specialization in Business Analytics, Marketing, HR, Finance)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹1,60,000",
        avgPackage: "₹6.8 LPA",
        eligibility: "Bachelor's Degree in any discipline with 50% aggregate + CAT/MAT/CUET"
      },
      {
        id: "c_vgu_3",
        name: "BCA (Cloud Computing & Artificial Intelligence)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹95,000",
        avgPackage: "₹5.0 LPA",
        eligibility: "10+2 in any stream with Mathematics or Computer Applications"
      },
      {
        id: "c_vgu_4",
        name: "B.A. LL.B. / B.B.A. LL.B. (5-Year Integrated)",
        duration: "5 Years",
        seats: 120,
        annualFee: "₹1,20,000",
        avgPackage: "₹5.8 LPA",
        eligibility: "10+2 with minimum 45% aggregate + CLAT / LSAT / Direct Counselling"
      },
      {
        id: "c_vgu_5",
        name: "B.Des in Fashion & Interior Design",
        duration: "4 Years",
        seats: 60,
        annualFee: "₹1,40,000",
        avgPackage: "₹5.5 LPA",
        eligibility: "10+2 in any stream with creative aptitude"
      }
    ],
    eligibility: "Candidates must have passed 10+2 with 50% aggregate (45% for reserved categories) with relevant subjects (PCM for Engineering, Any stream for Management/Law/Arts). Admissions are processed via VGUCET, CUET, JEE Main, or through direct institutional merit and counseling quotas.",
    admissionProcess: [
      "Submit online or on-campus admission enquiry form with academic details.",
      "One-on-one session with senior academic counselors for stream selection and eligibility check.",
      "Appear for VGUCET entrance/scholarship assessment or submit valid JEE/CUET/CAT scorecards.",
      "Provisional seat reservation, scholarship allocation, and document validation.",
      "Formal admission completion, hostel room allotment, and orientation attendance."
    ],
    recruiters: ["TCS", "Wipro", "Infosys", "Cognizant", "Amazon", "Capgemini", "Byju's", "L&T Infotech", "Samsung", "HCL Technologies"],
    facilities: [
      "Mitsubishi Electric Centre of Excellence",
      "Siemens Automation & Robotics Lab",
      "Central Digital Library with 50,000+ volumes",
      "Hostels with AC/Non-AC options & Wi-Fi",
      "Makerspace Design Labs",
      "Full-sized Sports Complex & Gymnasium"
    ],
    scholarships: "Merit-based scholarships up to 100% tuition waiver for 90%+ in 10+2 / graduation, sports achievers, defense personnel wards, and special girl child fee concessions.",
    cutoffs: [
      { branch: "CSE (AI & Data Science)", round1Rank: 18000, closingRank: 32000 },
      { branch: "MBA Core", round1Rank: 70, closingRank: 85 }
    ],
    faqs: [
      {
        q: "What is the highest package at Vivekananda Global University (VGU Jaipur)?",
        a: "The highest international package at VGU Jaipur touched ₹54 LPA, with the average package for CSE and Management branches ranging between ₹6.5 LPA and ₹7.5 LPA."
      },
      {
        q: "Does VGU Jaipur offer direct on-campus admission?",
        a: "Yes, Vivekananda Global University offers direct admission for eligible candidates through its authorized counseling desk based on 10+2 / graduation merit and VGUCET scorecards."
      }
    ]
  },
  {
    id: "col_jagannath_jaipur",
    slug: "jagannath-university",
    aliases: ["jagannath-university-jaipur"],
    name: "Jagannath University",
    shortName: "Jagannath University Jaipur",
    type: "Private University",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2008,
    campusArea: "50 Acres",
    accreditation: "NAAC Accredited, UGC Recognized, AICTE, BCI & PCI Approved",
    nirfRanking: 145,
    rating: 4.2,
    reviewsCount: 280,
    coverImage: "/images/colleges/jagannath-university.jpg",
    campusImages: [
      "/images/colleges/jagannath-university.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "Computer Science", "BCA", "Universities", "Pharmacy", "Agriculture", "Commerce", "BBA"],
    feesRange: "₹90,000 - ₹1.8 Lakh per year",
    annualFeeNumeric: 125000,
    hostelFee: "₹75,000 per year",
    placementRate: "85%",
    averagePackage: 5.8,
    highestPackage: 27.0,
    entranceExams: ["JUEE", "JEE Main", "CUET", "MAT", "Direct Admission"],
    featured: false,
    directAdmission: true,
    tagline: "Industry-Driven Multidisciplinary Education & Practical Learning Hub in Rajasthan",
    description: "Jagannath University, Jaipur is a prominent statutory private university established in 2008 across a lush 50-acre campus near Chaksu, Jaipur. Approved by UGC, AICTE, BCI, PCI, and NCTE, Jagannath University delivers career-focused education across Engineering, Management, Law, Computer Applications, Pharmacy, Agriculture, and Physiotherapy. The university is widely recognized for its experiential learning pedagogy, industry-sponsored labs, international collaborations, and strong direct admission counselor support.",
    courses: [
      {
        id: "c_jnu_jpr_1",
        name: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        seats: 180,
        annualFee: "₹1,40,000",
        avgPackage: "₹6.2 LPA",
        eligibility: "10+2 with PCM (Min 45%) + JEE Main / JUEE / Direct Merit"
      },
      {
        id: "c_jnu_jpr_2",
        name: "MBA in Marketing & Finance",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹1,30,000",
        avgPackage: "₹5.8 LPA",
        eligibility: "Graduation with 50% aggregate + CAT/MAT/CMAT"
      },
      {
        id: "c_jnu_jpr_3",
        name: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        seats: 90,
        annualFee: "₹85,000",
        avgPackage: "₹4.5 LPA",
        eligibility: "10+2 with Mathematics/Information Practices"
      },
      {
        id: "c_jnu_jpr_4",
        name: "B.Sc (Hons) Agriculture",
        duration: "4 Years",
        seats: 120,
        annualFee: "₹95,000",
        avgPackage: "₹4.8 LPA",
        eligibility: "10+2 with PCB/PCM/Agriculture (Min 50%)"
      }
    ],
    eligibility: "Pass in 10+2 examination with minimum 45-50% marks in relevant subjects. Direct institutional admission and merit scholarships available based on Class 12 board marks.",
    admissionProcess: [
      "Submit application through online portal or physical admission desk.",
      "Counselling assessment based on 10+2 marks and JUEE entrance exam.",
      "Seat reservation and document validation.",
      "Fee installment payment and orientation."
    ],
    recruiters: ["Infosys", "TCS", "HCL", "ICICI Bank", "Kotak Mahindra", "Axis Bank", "Reliance Retail"],
    facilities: ["Agricultural Research Farms", "Computer & AI Laboratories", "Moot Court Hall", "Hostels with Mess", "Sports Ground"],
    scholarships: "Merit scholarships up to 40% fee waiver for students with 80%+ marks in qualifying examinations.",
    cutoffs: [
      { branch: "CSE Core", round1Rank: 28000, closingRank: 45000 }
    ],
    faqs: [
      {
        q: "Is Jagannath University Jaipur approved by UGC and AICTE?",
        a: "Yes, Jagannath University is recognized by UGC under Section 2(f) of the UGC Act 1956 and accredited with relevant regulatory councils including AICTE, BCI, and PCI."
      }
    ]
  },
  {
    id: "col_jnu_jaipur",
    slug: "jaipur-national-university",
    aliases: ["jnu-jaipur"],
    name: "Jaipur National University",
    shortName: "JNU Jaipur",
    type: "Private University",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2007,
    campusArea: "170 Acres",
    accreditation: "NAAC Accredited, UGC Recognized, AICTE, MCI/NMC, BCI, PCI & INC Approved",
    nirfRanking: 92,
    rating: 4.3,
    reviewsCount: 410,
    coverImage: "/images/colleges/jnu.webp",
    campusImages: [
          "/images/colleges/jnu.webp",
          "/images/colleges/jnu1.webp",
          "/images/colleges/jnu2.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Medical", "MBBS", "Law", "Pharmacy", "Computer Science", "Universities", "Nursing"],
    feesRange: "₹1.2 Lakh - ₹3.5 Lakh per year",
    annualFeeNumeric: 160000,
    hostelFee: "₹80,000 per year",
    placementRate: "87%",
    averagePackage: 6.4,
    highestPackage: 32.0,
    entranceExams: ["JNU CET", "JEE Main", "NEET UG", "CUET", "CAT", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "Pioneering NAAC-Accredited Multidisciplinary & Medical University with 170-Acre Campus",
    description: "Jaipur National University (JNU), Jaipur is one of Rajasthan's largest multidisciplinary private universities, sprawling over 170 acres across multiple modern campuses in Jagatpura. Established in 2007, JNU offers accredited programs across Engineering, Medical Sciences & JNU Medical College & Hospital (MCI/NMC approved), Management, Pharmacy, Law, Biotechnology, Nursing, and Mass Communication. Equipped with advanced clinical simulation centers, incubation hubs, and active corporate recruitment ties, JNU is a prime destination for direct admission and academic excellence.",
    courses: [
      {
        id: "c_jnu_jp_1",
        name: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        seats: 240,
        annualFee: "₹1,65,000",
        avgPackage: "₹6.8 LPA",
        eligibility: "10+2 with PCM (Min 50%) + JEE Main / JNU CET / Direct Merit"
      },
      {
        id: "c_jnu_jp_2",
        name: "MBA (Hospital & Healthcare / Dual Specialization)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹1,80,000",
        avgPackage: "₹6.5 LPA",
        eligibility: "Bachelor's Degree with 50% + CAT/MAT/CMAT"
      },
      {
        id: "c_jnu_jp_3",
        name: "B.Pharm (Bachelor of Pharmacy)",
        duration: "4 Years",
        seats: 100,
        annualFee: "₹1,15,000",
        avgPackage: "₹5.2 LPA",
        eligibility: "10+2 with PCB/PCM (Min 50%)"
      },
      {
        id: "c_jnu_jp_4",
        name: "BA LL.B. (Hons) Integrated Law",
        duration: "5 Years",
        seats: 120,
        annualFee: "₹1,10,000",
        avgPackage: "₹5.5 LPA",
        eligibility: "10+2 with 45% aggregate + CLAT / Merit"
      }
    ],
    eligibility: "Candidates must have passed 10+2 with minimum 50% aggregate in required subjects. Admissions are offered via JNU Entrance Test, national entrance scores, and direct merit seat counselling.",
    admissionProcess: [
      "Submit application on JNU admission portal or visit on-campus counseling cell.",
      "Document assessment and branch allotment by admission counselors.",
      "Fee payment and confirmation of seat."
    ],
    recruiters: ["Amazon", "Bosch", "Decathlon", "Fortis Healthcare", "Metacube", "Syntel", "Wipro"],
    facilities: ["1000+ Bedded Teaching Hospital", "Biotechnology & Robotics Labs", "Central Library", "Separate AC Hostels for Boys & Girls", "Sports Arena"],
    scholarships: "Merit scholarships up to 50% for 90%+ marks in 10+2, scholarships for defense personnel wards and sports achievers.",
    cutoffs: [
      { branch: "CSE", round1Rank: 22000, closingRank: 38000 }
    ],
    faqs: [
      {
        q: "Does JNU Jaipur have an attached medical hospital?",
        a: "Yes, JNU has an attached 1000+ bedded super-specialty hospital and medical research institute providing live clinical exposure to students."
      }
    ]
  },
  {
    id: "col_dbs_dehradun",
    slug: "doon-business-school",
    aliases: ["dbs-dehradun"],
    name: "Doon Business School",
    shortName: "DBS Dehradun",
    type: "AICTE Approved Autonomous B-School & University Institute",
    city: "Dehradun",
    state: "Uttarakhand",
    establishedYear: 2007,
    campusArea: "15 Acres",
    accreditation: "AICTE Approved, UGC Recognized, Affiliated to UTU & HNBGU",
    nirfRanking: 78,
    rating: 4.4,
    reviewsCount: 360,
    coverImage: "/images/colleges/doon1.webp",
    campusImages: [
          "/images/colleges/doon1.webp",
          "/images/colleges/doon.webp",
          "/images/colleges/doon2.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Management", "MBA", "Computer Science", "BCA", "BBA", "Universities", "Commerce", "Mass Communication"],
    feesRange: "₹2.4 Lakh - ₹4.2 Lakh per year",
    annualFeeNumeric: 290000,
    hostelFee: "₹95,000 per year",
    placementRate: "94%",
    averagePackage: 8.2,
    highestPackage: 24.0,
    entranceExams: ["CAT", "MAT", "XAT", "CMAT", "DBS Aptitude Test", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "Premier Industry-Integrated Management & Analytics B-School in the Foothills of Himalayas",
    description: "Doon Business School (DBS), Dehradun is widely regarded as one of North India's premier business schools, nestled in Selaqui, Dehradun against the serene Himalayan foothills. AICTE-approved and UGC-recognized, DBS is celebrated for its industry-embedded PGDM and MBA programs featuring SAP certification, Bloomberg terminal training, French/German language modules, and live corporate internships in Delhi NCR and Mumbai.",
    courses: [
      {
        id: "c_dbs_1",
        name: "PGDM (AICTE Approved Dual Specialization with SAP & Analytics)",
        duration: "2 Years",
        seats: 180,
        annualFee: "₹3,90,000",
        avgPackage: "₹8.8 LPA",
        eligibility: "Graduation in any discipline (Min 50%) + CAT/MAT/XAT/CMAT score"
      },
      {
        id: "c_dbs_2",
        name: "MBA (Affiliated to Uttarakhand Technical University)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹2,70,000",
        avgPackage: "₹7.5 LPA",
        eligibility: "Graduation with 50% marks + National Entrance Exam / Merit"
      },
      {
        id: "c_dbs_3",
        name: "BBA (Global / Business Analytics / Digital Marketing)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹1,60,000",
        avgPackage: "₹5.8 LPA",
        eligibility: "10+2 in any stream with minimum 50% aggregate"
      },
      {
        id: "c_dbs_4",
        name: "BCA (Data Science & Cloud Computing)",
        duration: "3 Years",
        seats: 90,
        annualFee: "₹1,40,000",
        avgPackage: "₹5.4 LPA",
        eligibility: "10+2 with Mathematics/Computer Applications"
      }
    ],
    eligibility: "Graduate in any stream with minimum 50% aggregate (45% for reserved category). Selection through GD/PI based on CAT/MAT/CMAT/XAT score or direct interview performance.",
    admissionProcess: [
      "Submit online application form with academic marks and entrance exam details.",
      "Participate in online or on-campus Personal Interview (PI) & Group Discussion.",
      "Offer letter issued with scholarship eligibility.",
      "Seat reservation and registration confirmation."
    ],
    recruiters: ["Deloitte", "KPMG", "HDFC Bank", "ICICI Prudential", "Berger Paints", "Amazon", "Tech Mahindra", "Dabur"],
    facilities: ["Bloomberg Trading Terminal Lab", "SAP Certified Training Center", "Modern Boardrooms", "Himalayan View Hostels", "Gym & Cafeteria"],
    scholarships: "Up to 90% scholarship on tuition fee for 90%+ percentile in CAT/MAT and outstanding academic achievers.",
    cutoffs: [
      { branch: "PGDM General", round1Rank: 75, closingRank: 88 }
    ],
    faqs: [
      {
        q: "What certifications are included in DBS Dehradun PGDM?",
        a: "DBS PGDM includes SAP ERP certifications, Bloomberg market terminal access, digital marketing certifications, and foreign language training at no additional cost."
      }
    ]
  },
  {
    id: "col_upes_dehradun",
    slug: "upes-dehradun",
    aliases: ["upes", "upes-dehradun", "university-of-petroleum-and-energy-studies", "upes-university", "upes-dehradun-uttarakhand"],
    name: "UPES Dehradun",
    shortName: "UPES",
    type: "Private University",
    city: "Dehradun",
    state: "Uttarakhand",
    establishedYear: 2003,
    campusArea: "44 Acres",
    accreditation: "NAAC A Grade, UGC Recognized, AIU, BCI, QS 5-Star Rating",
    nirfRanking: 52,
    rating: 4.6,
    reviewsCount: 620,
    coverImage: "/images/colleges/upes.webp",
    campusImages: [
          "/images/colleges/upes.webp",
          "/images/colleges/upes1.webp",
          "/images/colleges/upes2.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "Design", "Computer Science", "Universities", "Health Sciences"],
    feesRange: "₹3.2 Lakh - ₹4.8 Lakh per year",
    annualFeeNumeric: 380000,
    hostelFee: "₹1,60,000 per year",
    placementRate: "96%",
    averagePackage: 10.2,
    highestPackage: 50.0,
    entranceExams: ["UPESEAT", "JEE Main", "CAT", "MAT", "ULSAT", "Direct Merit Quota"],
    featured: true,
    directAdmission: true,
    tagline: "QS 5-Star Rated Energy, Tech & Law Powerhouse in Dehradun with 96% Placements",
    description: "University of Petroleum and Energy Studies (UPES), Dehradun is an internationally acclaimed NAAC A-grade multidisciplinary university established in 2003 in Bidholi and Kandoli campuses, Dehradun. With QS 5-Star ratings for employability, academic development, and facilities, UPES offers cutting-edge B.Tech, MBA, Law (School of Law), Design, and Health Sciences programs with specialized industry tracks in Cloud Computing, AI, Petroleum & Energy, Cyber Security, and Corporate Law.",
    courses: [
      {
        id: "c_upes_1",
        name: "B.Tech in Computer Science & Engineering (Cloud / AI-ML / Cyber Security)",
        duration: "4 Years",
        seats: 480,
        annualFee: "₹4,20,000",
        avgPackage: "₹12.5 LPA",
        eligibility: "10+2 with PCM (Min 50%) + UPESEAT / JEE Main / Board Merit"
      },
      {
        id: "c_upes_2",
        name: "MBA (Oil & Gas / Business Analytics / Aviation / Logistics)",
        duration: "2 Years",
        seats: 180,
        annualFee: "₹4,80,000",
        avgPackage: "₹11.0 LPA",
        eligibility: "Graduation with 50% + UPESMET / CAT / MAT / CMAT"
      },
      {
        id: "c_upes_3",
        name: "B.A. LL.B. / B.B.A. LL.B. (Hons)",
        duration: "5 Years",
        seats: 240,
        annualFee: "₹3,40,000",
        avgPackage: "₹8.5 LPA",
        eligibility: "10+2 with 50% + ULSAT / CLAT / Board Merit"
      }
    ],
    eligibility: "Minimum 50% marks in 10+2 with PCM for B.Tech; 50% marks in graduation for MBA. Direct admission pathways available via Board Merit (80%+ in CBSE/ICSE/State Boards).",
    admissionProcess: [
      "Submit application on UPES online portal or through designated counselor.",
      "Appear for UPESEAT/ULSAT or submit JEE Main/CLAT/CAT scores.",
      "Participate in centralized counseling and slot booking.",
      "Verification of documents and payment of admission fee."
    ],
    recruiters: ["Schlumberger", "Shell", "ExxonMobil", "Microsoft", "Amazon", "L&T", "Deloitte", "Tata Consultancy Services"],
    facilities: ["Advanced Energy & Computing Labs", "Moot Court Complex", "Multi-Cuisine Dining", "Himalayan View Residential Hostels", "Indoor Sports Arena"],
    scholarships: "Up to 100% tuition fee waiver for academic board toppers, Uttarakhand domicile concessions, and female student scholarships.",
    cutoffs: [
      { branch: "CSE Core", round1Rank: 8500, closingRank: 16000 }
    ],
    faqs: [
      {
        q: "What is the placement record at UPES Dehradun?",
        a: "UPES maintains a verified 96%+ placement record across all schools, with highest packages reaching ₹50 LPA for technical and energy branches."
      }
    ]
  },
  {
    id: "col_3",
    slug: "jecrc-university",
    aliases: ["jecrc-university-jaipur", "jecrc"],
    name: "JECRC University",
    shortName: "JECRC Jaipur",
    type: "Private University",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2012,
    campusArea: "32 Acres",
    accreditation: "NAAC Accredited, UGC Recognized, AICTE & BCI Approved",
    nirfRanking: 112,
    rating: 4.4,
    reviewsCount: 480,
    coverImage: "/images/colleges/jecrc-university.jpg",
    campusImages: [
      "/images/colleges/jecrc-university.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Computer Science", "BCA", "MCA", "BBA", "Universities", "Law", "Sciences"],
    feesRange: "₹1.4 Lakh - ₹2.2 Lakh per year",
    annualFeeNumeric: 175000,
    hostelFee: "₹85,000 per year",
    placementRate: "90%",
    averagePackage: 7.2,
    highestPackage: 44.0,
    entranceExams: ["JEE Main", "REAP", "JU Entrance Test", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "Industry-Collaborated Engineering, AI & Management Hub Driven by Top Placements",
    description: "JECRC University, Jaipur is celebrated across North India for its deep industry collaborations, practical technical learning ecosystems, and outstanding placement track record. Located in Sitapura Industrial Area, Jaipur, JECRC partners with Microsoft, AWS, TCS, and Google for specialized technical curriculum. Offering B.Tech in CSE/AI-ML, BCA, MCA, MBA, and Allied Sciences, JECRC provides active direct admission counselor guidance, high scholarship waivers, and robust corporate hiring.",
    courses: [
      {
        id: "c_ju_1",
        name: "B.Tech in Computer Science & Engineering (AI & ML / Cloud)",
        duration: "4 Years",
        seats: 360,
        annualFee: "₹1,85,000",
        avgPackage: "₹7.8 LPA",
        eligibility: "10+2 with PCM (Min 55%) + JEE Main / REAP / Direct Merit"
      },
      {
        id: "c_ju_2",
        name: "BCA (Cloud Computing & DevOps)",
        duration: "3 Years",
        seats: 180,
        annualFee: "₹1,15,000",
        avgPackage: "₹5.5 LPA",
        eligibility: "10+2 with Mathematics/Computer applications"
      },
      {
        id: "c_ju_3",
        name: "MBA (Dual Specialization in Finance, HR, Marketing & Analytics)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹1,60,000",
        avgPackage: "₹6.8 LPA",
        eligibility: "Graduation with 50% + CAT/MAT/CMAT"
      }
    ],
    eligibility: "Pass in 10+2 examination with minimum 50% aggregate marks in PCM. Direct entry and REAP counselling pathways available.",
    admissionProcess: [
      "Submit application through online portal or physical admission desk.",
      "Counselling assessment based on 10+2 and JEE Main scores.",
      "Seat reservation and document validation.",
      "Confirmation and hostel allotment."
    ],
    recruiters: ["TCS", "Wipro", "Capgemini", "Amazon", "Hexaware", "Zensar", "LTI Mindtree", "Microsoft"],
    facilities: ["Makerspace Lab", "Incubation Centre", "Digital Library", "Hostels with Mess", "Cricket Ground"],
    scholarships: "Merit scholarship up to 35% on tuition fee for 85%+ score in 10+2 board examinations.",
    cutoffs: [
      { branch: "CSE AI & ML", round1Rank: 24000, closingRank: 38000 }
    ],
    faqs: [
      {
        q: "What is the average package at JECRC University?",
        a: "The overall average package is around ₹7.2 LPA, with CSE branches recording packages up to ₹8.5 LPA on average."
      }
    ]
  },
  {
    id: "col_poddar_jaipur",
    slug: "poddar-institutions",
    aliases: ["poddar-group-of-institutions-jaipur", "poddar-college"],
    name: "Poddar Group of Institutions",
    shortName: "Poddar Institutions Jaipur",
    type: "NAAC Accredited Premier Private Institute (Affiliated to Univ of Rajasthan / RTU)",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 1998,
    campusArea: "12 Acres",
    accreditation: "NAAC Accredited, AICTE Approved, UGC Recognized, Affiliated to University of Rajasthan & RTU",
    nirfRanking: 138,
    rating: 4.3,
    reviewsCount: 290,
    coverImage: "/images/colleges/poddar-institutions.jpg",
    campusImages: [
      "/images/colleges/poddar-institutions.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Management", "MBA", "Commerce", "BBA", "Computer Science", "BCA", "Design", "Universities", "Pharmacy"],
    feesRange: "₹80,000 - ₹1.6 Lakh per year",
    annualFeeNumeric: 110000,
    hostelFee: "₹70,000 per year",
    placementRate: "88%",
    averagePackage: 5.6,
    highestPackage: 24.0,
    entranceExams: ["CAT", "MAT", "CMAT", "Direct Merit Quota", "Rajasthan Univ Merit"],
    featured: false,
    directAdmission: true,
    tagline: "Reputed Management, Commerce & Applied IT Institute in Jaipur with High ROI",
    description: "Poddar Group of Institutions, Jaipur (affiliated to University of Rajasthan and Rajasthan Technical University, NAAC-accredited & AICTE-approved) is one of Jaipur's most established educational institutions since 1998. Located in Mansarovar and Vatika campuses, Poddar offers flagship MBA, PGDM, BBA, BCA, B.Com, Design, and Pharmacy programs known for affordable fee structures, startup incubators, and dedicated on-campus direct admissions.",
    courses: [
      {
        id: "c_pod_1",
        name: "MBA / PGDM (Dual Specialization)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹1,45,000",
        avgPackage: "₹6.0 LPA",
        eligibility: "Bachelor's degree with 50% + CMAT/MAT/CAT or Direct Merit"
      },
      {
        id: "c_pod_2",
        name: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹80,000",
        avgPackage: "₹4.8 LPA",
        eligibility: "10+2 in any stream (Min 48%)"
      },
      {
        id: "c_pod_3",
        name: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹75,000",
        avgPackage: "₹4.6 LPA",
        eligibility: "10+2 in any stream (Min 48%)"
      }
    ],
    eligibility: "Passed 10+2 with minimum 48% marks for UG; Graduation with 50% for PG courses. Direct admission and counselor support available.",
    admissionProcess: [
      "Submit application online or at Mansarovar admission office.",
      "Counselling interaction and verification of 10+2 / UG marksheets.",
      "Seat allotment and payment of registration fee."
    ],
    recruiters: ["TCS", "Wipro", "HDFC Bank", "ICICI Bank", "Genpact", "Concentrix", "Teleperformance"],
    facilities: ["Computer Laboratories", "Library & Reading Rooms", "Incubation Center", "Auditorium", "Hostel Facilities"],
    scholarships: "Merit scholarships up to 30% for 80%+ marks in qualifying examinations.",
    cutoffs: [
      { branch: "MBA General", round1Rank: 60, closingRank: 80 }
    ],
    faqs: [
      {
        q: "Is Poddar Group of Institutions affiliated with University of Rajasthan?",
        a: "Yes, Poddar is affiliated with the University of Rajasthan and Rajasthan Technical University (RTU), Kota for technical programs."
      }
    ]
  },
  {
    id: "col_jklu_jaipur",
    slug: "jklu-jaipur",
    aliases: ["jk-lakshmipat-university-jaipur", "jklu"],
    name: "JK Lakshmipat University",
    shortName: "JKLU Jaipur",
    type: "Private University (JK Organisation)",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2011,
    campusArea: "30 Acres",
    accreditation: "NAAC A Grade, UGC Recognized, AICTE Approved",
    nirfRanking: 98,
    rating: 4.5,
    reviewsCount: 310,
    coverImage: "/images/colleges/jklu.webp",
    campusImages: [
          "/images/colleges/jklu.webp",
          "/images/colleges/jklu1.jpeg",
          "/images/colleges/jklu.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Design", "Computer Science", "BBA", "BCA", "Universities"],
    feesRange: "₹1.8 Lakh - ₹2.9 Lakh per year",
    annualFeeNumeric: 230000,
    hostelFee: "₹90,000 per year",
    placementRate: "92%",
    averagePackage: 8.4,
    highestPackage: 37.0,
    entranceExams: ["JEE Main", "JKLU MET", "CUET", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "Where Design, Technology & Business Converge Under the Prestigious JK Organisation",
    description: "JK Lakshmipat University (JKLU), Jaipur is a forward-looking private university founded by the 125-year-old JK Organisation. Located on Ajmer Road, Jaipur, JKLU integrates design thinking, technology, and business leadership through project-based pedagogy in collaboration with international institutions like Olin College of Engineering (USA) and Edinburgh Napier University (UK). JKLU offers premier B.Tech, B.Des, BBA, and MBA programs with exceptional faculty and placement records.",
    courses: [
      {
        id: "c_jklu_1",
        name: "B.Tech in Computer Science & Engineering (AI/ML & Cloud)",
        duration: "4 Years",
        seats: 180,
        annualFee: "₹2,65,000",
        avgPackage: "₹9.2 LPA",
        eligibility: "10+2 with PCM (Min 60%) + JEE Main / JKLU MET / Direct Merit"
      },
      {
        id: "c_jklu_2",
        name: "B.Des (Interaction / Product / Interdisciplinary Design)",
        duration: "4 Years",
        seats: 60,
        annualFee: "₹2,75,000",
        avgPackage: "₹8.0 LPA",
        eligibility: "10+2 in any stream + JKLU Design Aptitude Test"
      },
      {
        id: "c_jklu_3",
        name: "MBA (Business Analytics, Marketing, Operations & Finance)",
        duration: "2 Years",
        seats: 60,
        annualFee: "₹2,80,000",
        avgPackage: "₹8.5 LPA",
        eligibility: "Graduation with 50% + CAT/MAT/CMAT"
      }
    ],
    eligibility: "Minimum 60% aggregate in 10+2 with PCM for B.Tech; 50% in any stream for Design and Business courses. Merit admission quota available based on Class 12 percentage.",
    admissionProcess: [
      "Submit application on JKLU admissions portal or through academic counselor.",
      "Participate in online interaction/interview with department faculty.",
      "Merit list publication and scholarship sanction.",
      "Seat reservation and fee confirmation."
    ],
    recruiters: ["Amazon", "Flipkart", "Infosys", "TCS", "JK Tyre", "JK Paper", "LTI Mindtree", "Robomq"],
    facilities: ["Makerspace 3D Prototyping Lab", "Design Studios", "Green Residential Hostels", "Indoor Gymnasium", "Wi-Fi Campus"],
    scholarships: "Up to 100% scholarship for JEE Main top rankers and 90%+ Class 12 board marks.",
    cutoffs: [
      { branch: "CSE", round1Rank: 15000, closingRank: 28000 }
    ],
    faqs: [
      {
        q: "What international partnerships does JKLU Jaipur have?",
        a: "JKLU has academic tie-ups with Olin College of Engineering (USA), University of Florida, and Edinburgh Napier University for student exchange and joint research."
      }
    ]
  },
  {
    id: "col_12",
    slug: "amity-jaipur",
    aliases: ["amity-university-jaipur", "amity-rajasthan"],
    name: "Amity University Jaipur",
    shortName: "Amity Jaipur",
    type: "Private University",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2008,
    campusArea: "152 Acres",
    accreditation: "NAAC A+ Grade, UGC Recognized, AICTE, BCI, COA & PCI Approved",
    nirfRanking: 89,
    rating: 4.4,
    reviewsCount: 380,
    coverImage: "/images/colleges/amityuniversity_10db382a74.webp",
    campusImages: [
          "/images/colleges/amityuniversity_10db382a74.webp",
          "/images/colleges/amity2.jpg",
          "/images/colleges/amity3.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "BBA", "BCA", "Universities", "Design", "Psychology", "Biotechnology"],
    feesRange: "₹1.6 Lakh - ₹2.8 Lakh per year",
    annualFeeNumeric: 195000,
    hostelFee: "₹75,000 per year",
    placementRate: "88%",
    averagePackage: 7.0,
    highestPackage: 38.0,
    entranceExams: ["Amity JEE", "JEE Main", "CAT", "MAT", "CUET", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "152-Acre World-Class Residential Campus on Delhi-Jaipur Highway with 100+ Programs",
    description: "Amity University Rajasthan (Jaipur) offers a world-class residential university experience against the scenic backdrop of the Aravalli hills on the Delhi-Jaipur Expressway. Part of the global Amity Education Group, the campus is NAAC A+ accredited and houses state-of-the-art cyber-security centers, moot courts, biotechnology labs, and golf academy. Offering UG, PG, and doctoral programs, Amity Jaipur features swift direct admissions via counselor assistance and 100% merit scholarships.",
    courses: [
      {
        id: "c_amity_1",
        name: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        seats: 240,
        annualFee: "₹2,10,000",
        avgPackage: "₹7.5 LPA",
        eligibility: "10+2 with 60% in PCM + Amity JEE / JEE Main / Direct Merit"
      },
      {
        id: "c_amity_2",
        name: "MBA (International Business / Marketing / HR / Finance)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹2,80,000",
        avgPackage: "₹7.2 LPA",
        eligibility: "Graduation with 50% + CAT/MAT/CMAT or Direct Assessment"
      },
      {
        id: "c_amity_3",
        name: "B.A. LL.B. (Hons) 5-Year Integrated",
        duration: "5 Years",
        seats: 120,
        annualFee: "₹1,80,000",
        avgPackage: "₹6.2 LPA",
        eligibility: "10+2 with 50% + CLAT / Direct Admission"
      },
      {
        id: "c_amity_4",
        name: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹1,40,000",
        avgPackage: "₹5.2 LPA",
        eligibility: "10+2 in any stream with 50% minimum"
      }
    ],
    eligibility: "Pass in 10+2 with 55-60% aggregate. Direct admission fast-track pathways for candidates with 80%+ in CBSE/ICSE.",
    admissionProcess: [
      "Online application on Amity portal or via counselor desk.",
      "Video interview / aptitude assessment.",
      "Admission letter issued with merit scholarship details.",
      "Fee payment and hostel allotment."
    ],
    recruiters: ["Capgemini", "IBM", "HCL", "Ernst & Young", "Wipro", "TCS", "Accenture", "Amazon"],
    facilities: ["152 Acre Eco-friendly Campus", "Golf Course & Shooting Range", "Residential Hostels", "Amity Innovation Incubator", "Central Library"],
    scholarships: "100% Scholarship for 93%+ aggregate in Class 12; 50% scholarship for 88%+ in Class 12.",
    cutoffs: [
      { branch: "CSE", round1Rank: 12000, closingRank: 25000 }
    ],
    faqs: [
      {
        q: "Does Amity Jaipur provide bus transportation from Jaipur city?",
        a: "Yes, luxury AC buses operate across all major sectors of Jaipur, Vaishali Nagar, Mansarovar, and Malviya Nagar."
      }
    ]
  },
  {
    id: "col_bennett_greaternoida",
    slug: "bennett-university",
    aliases: ["bennett", "bennet", "bennet-university", "bennett-university", "bennett-university-greater-noida", "times-group-university"],
    name: "Bennett University",
    shortName: "Bennett Greater Noida",
    type: "Private University (The Times Group)",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    establishedYear: 2016,
    campusArea: "68 Acres",
    accreditation: "NAAC A+ Accredited (3.46 CGPA), UGC Recognized, AICTE Approved, BCI Approved",
    nirfRanking: 48,
    rating: 4.6,
    reviewsCount: 510,
    coverImage: "/images/colleges/benet1.webp",
    campusImages: [
          "/images/colleges/benet1.webp",
          "/images/colleges/benet.jpg",
          "/images/colleges/benet2.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "Computer Science", "BBA", "BCA", "Media", "Universities"],
    feesRange: "₹3.2 Lakh - ₹4.5 Lakh per year",
    annualFeeNumeric: 360000,
    hostelFee: "₹1,50,000 per year",
    placementRate: "95%",
    averagePackage: 11.2,
    highestPackage: 120.0,
    entranceExams: ["JEE Main", "SAT", "CUET", "CAT", "Direct Merit Quota"],
    featured: true,
    directAdmission: true,
    tagline: "The Times Group's NAAC A+ Flagship Tech & Media University in Delhi NCR",
    description: "Bennett University, Greater Noida is a premier NAAC A+ accredited private university founded by The Times Group (Bennett, Coleman & Co. Ltd.) in 2016. Spanning a futuristic 68-acre campus in Greater Noida (Delhi NCR), Bennett offers top-tier programs in Computer Science & Engineering (with international academic tie-ups with Georgia Tech), Management, Law, Media, and Liberal Arts. Recognized as one of the fastest-growing universities with domestic packages touching ₹57 LPA and international offers up to ₹1.2 Cr.",
    courses: [
      {
        id: "c_bennett_1",
        name: "B.Tech in Computer Science & Engineering (AI / Data Science / Blockchain)",
        duration: "4 Years",
        seats: 480,
        annualFee: "₹3,95,000",
        avgPackage: "₹12.8 LPA",
        eligibility: "10+2 with PCM (Min 60%) + JEE Main / SAT / 12th Board Merit"
      },
      {
        id: "c_bennett_2",
        name: "MBA (Media Management, Business Analytics, Finance, Marketing)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹4,50,000",
        avgPackage: "₹10.5 LPA",
        eligibility: "Graduation with 50% + CAT/XAT/MAT/CUET or Direct Interview"
      },
      {
        id: "c_bennett_3",
        name: "B.A. LL.B. / B.B.A. LL.B. (Hons)",
        duration: "5 Years",
        seats: 180,
        annualFee: "₹3,40,000",
        avgPackage: "₹8.2 LPA",
        eligibility: "10+2 with 50% + CLAT / LSAT / Board Merit"
      },
      {
        id: "c_bennett_4",
        name: "BCA (Artificial Intelligence & Full Stack)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹1,80,000",
        avgPackage: "₹6.5 LPA",
        eligibility: "10+2 in any stream with Mathematics/Computer applications"
      }
    ],
    eligibility: "Class 12 with minimum 60% aggregate in PCM for B.Tech. Direct merit admission seats available based on 10+2 board percentage and JEE Main scores.",
    admissionProcess: [
      "Submit online application on Bennett portal with academic scores.",
      "Counseling review and seat allotment based on JEE percentile or Class 12 merit.",
      "Provisional admission letter issuance and fee installment payment."
    ],
    recruiters: ["Microsoft", "Amazon", "Google", "Goldman Sachs", "Deloitte", "Adobe", "Times Internet", "Capgemini"],
    facilities: ["Supercomputing AI Lab (NVIDIA DGX)", "Times Media Studio & Production House", "Olympic Size Swimming Pool", "Fully Air-Conditioned Hostels", "Indoor Sports Arena"],
    scholarships: "Up to 100% tuition fee scholarships for 95%+ in Class 12 or 95+ percentile in JEE Main.",
    cutoffs: [
      { branch: "CSE AI Core", round1Rank: 25000, closingRank: 48000 }
    ],
    faqs: [
      {
        q: "What is Bennett University's highest placement package?",
        a: "Bennett University's highest international package touched ₹1.2 Crore per annum, with domestic tech offers exceeding ₹57 LPA."
      }
    ]
  },
  {
    id: "col_geeta_panipat",
    slug: "geeta-university",
    aliases: ["geeta-university-panipat"],
    name: "Geeta University",
    shortName: "Geeta University Panipat",
    type: "Private University",
    city: "Panipat",
    state: "Haryana",
    establishedYear: 2022,
    campusArea: "25 Acres",
    accreditation: "UGC Recognized, AICTE, BCI, PCI & NCTE Approved",
    nirfRanking: 160,
    rating: 4.2,
    reviewsCount: 220,
    coverImage: "/images/colleges/geeta-university.jpg",
    campusImages: [
      "/images/colleges/geeta-university.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "Pharmacy", "Computer Science", "BCA", "BBA", "Agriculture", "Universities"],
    feesRange: "₹90,000 - ₹1.7 Lakh per year",
    annualFeeNumeric: 120000,
    hostelFee: "₹75,000 per year",
    placementRate: "84%",
    averagePackage: 5.4,
    highestPackage: 28.0,
    entranceExams: ["GUTS (Geeta University Test)", "JEE Main", "CUET", "Direct Admission"],
    featured: false,
    directAdmission: true,
    tagline: "70+ Future-Ready Programs in Engineering, Law & Management on GT Road Haryana",
    description: "Geeta University, Panipat is a dynamic UGC-recognized private university situated on the Delhi-NCR GT Road corridor in Haryana. Offering over 70+ future-ready programs across 10 constituent schools—including Engineering & Technology, Management, Pharmacy, Law, Agriculture, and Health Sciences—Geeta University emphasizes skill-based education, robotics labs, industry internships, and direct counselor-assisted admissions.",
    courses: [
      {
        id: "c_geeta_1",
        name: "B.Tech in Computer Science & Engineering (AI/ML & Cyber Security)",
        duration: "4 Years",
        seats: 180,
        annualFee: "₹1,40,000",
        avgPackage: "₹6.0 LPA",
        eligibility: "10+2 with PCM (Min 45%) + GUTS / JEE Main / Direct Merit"
      },
      {
        id: "c_geeta_2",
        name: "MBA (Dual Specialization)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹1,30,000",
        avgPackage: "₹5.6 LPA",
        eligibility: "Graduation with 50% aggregate + CAT/MAT/Direct"
      },
      {
        id: "c_geeta_3",
        name: "B.Pharm (Bachelor of Pharmacy)",
        duration: "4 Years",
        seats: 100,
        annualFee: "₹1,10,000",
        avgPackage: "₹4.8 LPA",
        eligibility: "10+2 with PCB/PCM (Min 50%)"
      }
    ],
    eligibility: "Passed 10+2 with minimum 45-50% in relevant stream. Fast-track direct admission and scholarship assessment via GUTS.",
    admissionProcess: [
      "Submit application on university website or campus admission desk.",
      "Counseling interview and document evaluation.",
      "Seat reservation and fee submission."
    ],
    recruiters: ["Infosys", "Wipro", "Tech Mahindra", "Amazon", "HCL", "IBM", "Byju's"],
    facilities: ["Robotics & Automation Labs", "Moot Court", "Modern Library", "Hostels with Mess", "Sports Grounds"],
    scholarships: "GUTS scholarship offering up to 100% tuition waiver for meritorious students.",
    cutoffs: [
      { branch: "CSE", round1Rank: 32000, closingRank: 55000 }
    ],
    faqs: [
      {
        q: "Where is Geeta University located?",
        a: "Geeta University is located on NH-44 (GT Road) in Panipat, Haryana, within easy commuting distance from Delhi NCR and Chandigarh."
      }
    ]
  },
  {
    id: "col_rit_roorkee",
    slug: "rit-roorkee",
    aliases: ["roorkee-institute-of-technology"],
    name: "Roorkee Institute of Technology",
    shortName: "RIT Roorkee",
    type: "Autonomous Institute (Affiliated to UTU & UBTER)",
    city: "Roorkee",
    state: "Uttarakhand",
    establishedYear: 2005,
    campusArea: "20 Acres",
    accreditation: "NAAC A++ Grade (CGPA 3.61/4), AICTE Approved, UGC Recognized, Affiliated to UTU",
    nirfRanking: 105,
    rating: 4.5,
    reviewsCount: 310,
    coverImage: "/images/colleges/roorki1.webp",
    campusImages: [
          "/images/colleges/roorki1.webp",
          "/images/colleges/roorki.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Computer Science", "BCA", "MCA", "BBA", "Pharmacy", "Agriculture", "Universities"],
    feesRange: "₹1.1 Lakh - ₹1.8 Lakh per year",
    annualFeeNumeric: 135000,
    hostelFee: "₹72,000 per year",
    placementRate: "91%",
    averagePackage: 6.8,
    highestPackage: 56.0,
    entranceExams: ["JEE Main", "UKSEE", "CUET", "CAT", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "Prestigious NAAC A++ Accredited Engineering & Tech Institute in Roorkee",
    description: "Roorkee Institute of Technology (RIT), Roorkee is an elite NAAC A++ accredited technical institute (CGPA 3.61/4) located in the educational hub of Roorkee, Uttarakhand. Established in 2005, RIT offers industry-designed B.Tech programs in Computer Science, AI & ML, Data Science, alongside MBA, MCA, Pharmacy, and Agriculture. Known for its Apple iOS developer lab, coding bootcamps, and top tech placements with Microsoft, Amazon, and Tata Technologies.",
    courses: [
      {
        id: "c_rit_1",
        name: "B.Tech in Computer Science & Engineering (AI & ML / Data Science)",
        duration: "4 Years",
        seats: 180,
        annualFee: "₹1,50,000",
        avgPackage: "₹7.4 LPA",
        eligibility: "10+2 with PCM (Min 50%) + JEE Main / UKSEE / Direct Merit"
      },
      {
        id: "c_rit_2",
        name: "MBA (Marketing, HR, Finance, International Business)",
        duration: "2 Years",
        seats: 90,
        annualFee: "₹1,40,000",
        avgPackage: "₹6.5 LPA",
        eligibility: "Graduation with 50% + CAT/MAT/CMAT or Direct Assessment"
      },
      {
        id: "c_rit_3",
        name: "B.Sc (Hons) Agriculture",
        duration: "4 Years",
        seats: 120,
        annualFee: "₹90,000",
        avgPackage: "₹5.0 LPA",
        eligibility: "10+2 with PCB/PCM/Agriculture"
      }
    ],
    eligibility: "Minimum 50% in 10+2 with PCM for engineering. Direct admission seats and state quota counseling via Uttarakhand Technical University.",
    admissionProcess: [
      "Submit application form online or through official counseling desk.",
      "Counseling assessment based on 10+2 marks and entrance scores.",
      "Document verification, seat reservation, and hostel allotment."
    ],
    recruiters: ["Microsoft", "Amazon", "Tata Technologies", "Infosys", "Wipro", "Capgemini", "Cognizant", "Tommy Hilfiger"],
    facilities: ["Apple iOS Developer Lab", "Robotics & IoT Research Center", "Digital Library", "Separate AC/Non-AC Hostels", "Sports Stadium"],
    scholarships: "Merit scholarships up to 100% on tuition fee for 90%+ in 10+2, scholarships for Uttarakhand domicile students and girl students.",
    cutoffs: [
      { branch: "CSE", round1Rank: 16000, closingRank: 32000 }
    ],
    faqs: [
      {
        q: "What is RIT Roorkee's NAAC accreditation grade?",
        a: "RIT Roorkee is accredited with the highest NAAC A++ Grade with a 3.61 CGPA out of 4."
      }
    ]
  },
  {
    id: "col_sgvu_jaipur",
    slug: "suresh-gyan-vihar-university",
    aliases: ["suresh-gyan-vihar-university", "gyan-vihar-university", "sgvu", "sgvu-jaipur", "suresh-gyan-viihar-university", "suresh-gyan-vihar"],
    name: "Suresh Gyan Vihar University",
    shortName: "SGVU Jaipur",
    type: "Private University",
    city: "Jaipur",
    state: "Rajasthan",
    establishedYear: 2008,
    campusArea: "32 Acres",
    accreditation: "NAAC A+ Accredited (3.32 CGPA), UGC Recognized, AICTE, PCI & AIU Approved",
    nirfRanking: 76,
    rating: 4.4,
    reviewsCount: 390,
    coverImage: "/images/colleges/sgvu.jpg",
    campusImages: [
          "/images/colleges/sgvu.jpg",
          "/images/colleges/sgvu1.webp",
          "/images/colleges/sgvu2.jpg",
          "/images/colleges/sgvu3.webp"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Pharmacy", "Computer Science", "BCA", "BBA", "Agriculture", "Universities", "Hotel Management"],
    feesRange: "₹1.1 Lakh - ₹2.1 Lakh per year",
    annualFeeNumeric: 140000,
    hostelFee: "₹78,000 per year",
    placementRate: "88%",
    averagePackage: 6.2,
    highestPackage: 36.0,
    entranceExams: ["SGVUEE", "JEE Main", "CUET", "CAT", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "First NAAC A+ Private University in Rajasthan with NIRF-Ranked School of Pharmacy",
    description: "Suresh Gyan Vihar University (SGVU), Jaipur is the first private university in Rajasthan to be accredited with NAAC 'A+' grade (3.32 CGPA). Located in Jagatpura, Jaipur, SGVU encompasses 10 specialized academic departments including its NIRF-ranked School of Pharmacy, Engineering & Technology, Business Management, Applied Sciences, and Agriculture. Offering direct admission support, global student mobility, and active corporate recruitment.",
    courses: [
      {
        id: "c_sgvu_1",
        name: "B.Tech in Computer Science & Engineering (Cloud / AI-ML)",
        duration: "4 Years",
        seats: 240,
        annualFee: "₹1,60,000",
        avgPackage: "₹6.8 LPA",
        eligibility: "10+2 with PCM (Min 50%) + SGVUEE / JEE Main / Direct Merit"
      },
      {
        id: "c_sgvu_2",
        name: "B.Pharm (NIRF Ranked School of Pharmacy)",
        duration: "4 Years",
        seats: 100,
        annualFee: "₹1,30,000",
        avgPackage: "₹5.8 LPA",
        eligibility: "10+2 with PCB/PCM (Min 50%)"
      },
      {
        id: "c_sgvu_3",
        name: "MBA (Digital Marketing, Finance, HR, Supply Chain)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹1,60,000",
        avgPackage: "₹6.4 LPA",
        eligibility: "Graduation with 50% + CAT/MAT/CMAT or Direct Admission"
      }
    ],
    eligibility: "Pass in 10+2 with 50% aggregate in required science/commerce/arts streams. Direct admission quota available via counselor desk.",
    admissionProcess: [
      "Submit application on SGVU admission portal or at Jagatpura admission desk.",
      "Appear for SGVUEE scholarship exam or present 10+2 merit scorecards.",
      "Seat reservation and document validation."
    ],
    recruiters: ["Google", "Amazon", "Infosys", "TCS", "Cipla", "Sun Pharma", "Lupin", "Cognizant"],
    facilities: ["NIRF Ranked Pharmacy Labs", "Renewable Energy Research Center", "Digital Library", "Separate Hostels with Mess", "Open Air Theatre"],
    scholarships: "Up to 100% scholarship for high academic scorers, single girl child scholarships, and sports quota awards.",
    cutoffs: [
      { branch: "CSE", round1Rank: 21000, closingRank: 36000 }
    ],
    faqs: [
      {
        q: "Is Suresh Gyan Vihar University NAAC A+ accredited?",
        a: "Yes, SGVU was the first private university in Rajasthan to receive NAAC 'A+' accreditation with a 3.32 CGPA."
      }
    ]
  },
  {
    id: "col_bmu_gurgaon",
    slug: "bml-munjal-university",
    aliases: ["bml-munjal-university", "bmu", "bmu-gurgaon", "bml-munjal", "bml-munjilal-university", "bml-munjal-university-gurgaon"],
    name: "BML Munjal University",
    shortName: "BMU Gurgaon",
    type: "Private University (The Hero Group)",
    city: "Gurgaon",
    state: "Haryana",
    establishedYear: 2014,
    campusArea: "50 Acres",
    accreditation: "NAAC A Grade, UGC Recognized, AICTE & BCI Approved",
    nirfRanking: 72,
    rating: 4.6,
    reviewsCount: 430,
    coverImage: "/images/colleges/bml.webp",
    campusImages: [
          "/images/colleges/bml.webp",
          "/images/colleges/bml.jpeg",
          "/images/colleges/bml1.avif",
          "/images/colleges/bml2.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "Computer Science", "BBA", "Commerce", "Universities"],
    feesRange: "₹2.8 Lakh - ₹4.2 Lakh per year",
    annualFeeNumeric: 310000,
    hostelFee: "₹1,40,000 per year",
    placementRate: "94%",
    averagePackage: 9.8,
    highestPackage: 40.0,
    entranceExams: ["JEE Main", "SAT", "BMU-SAT", "CAT", "NMAT", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "Hero Group Founded Industry-Immersive University Mentored by Imperial College London",
    description: "BML Munjal University (BMU), Gurgaon is a world-class private university founded in 2014 by the promoters of the Hero Group. Located in Sidhrawali on NH-48 in Gurgaon (Delhi NCR), BMU was mentored by Imperial College London. BMU emphasizes experiential 45% hands-on learning, maker-spaces, and deep corporate linkages for B.Tech CSE, MBA, BBA, and Law students with high-paying placements across consulting, tech, and automotive sectors.",
    courses: [
      {
        id: "c_bmu_1",
        name: "B.Tech in Computer Science & Engineering (AI, Cyber Security, Data Science)",
        duration: "4 Years",
        seats: 300,
        annualFee: "₹3,40,000",
        avgPackage: "₹11.2 LPA",
        eligibility: "10+2 with PCM (Min 60%) + JEE Main / BMU-SAT / Board Merit"
      },
      {
        id: "c_bmu_2",
        name: "MBA (Business Analytics, Operations, Finance, Marketing)",
        duration: "2 Years",
        seats: 120,
        annualFee: "₹4,20,000",
        avgPackage: "₹9.5 LPA",
        eligibility: "Graduation with 50% + CAT/NMAT/XAT/GMAT or BMU-MAT"
      },
      {
        id: "c_bmu_3",
        name: "BBA (Family Business / Digital Marketing / Finance)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹2,80,000",
        avgPackage: "₹7.0 LPA",
        eligibility: "10+2 in any stream (Min 60%)"
      }
    ],
    eligibility: "Class 12 with minimum 60% aggregate in PCM/Commerce/Arts. Direct admission pathways available based on academic merit and counselor interviews.",
    admissionProcess: [
      "Submit application on BMU portal.",
      "Participate in case analysis / personal interview with admissions panel.",
      "Provisional admission offer with merit scholarship letter.",
      "Fee payment and enrollment."
    ],
    recruiters: ["Hero MotoCorp", "Amazon", "KPMG", "Deloitte", "EY", "ServiceNow", "Hyundai", "Nestle"],
    facilities: ["Siemens Centre of Excellence", "Maker Space Lab", "Modern Residential Hostels", "Executive Classrooms", "Sports Complex"],
    scholarships: "Dean's Scholarships and Hero Group Merit Scholarships providing up to 100% tuition waivers.",
    cutoffs: [
      { branch: "CSE", round1Rank: 20000, closingRank: 42000 }
    ],
    faqs: [
      {
        q: "Who founded BML Munjal University?",
        a: "BMU was founded by the promoters of the Hero Group (named after visionary industrialist Brijmohan Lall Munjal)."
      }
    ]
  },
  {
    id: "col_cu_mohali",
    slug: "chandigarh-university",
    aliases: ["chandigarh", "chandigarh-university", "cu", "cu-mohali", "chandigarh-university-punjab", "chandigarh-group", "cgc"],
    name: "Chandigarh University",
    shortName: "CU Mohali",
    type: "Private University",
    city: "Mohali",
    state: "Punjab",
    establishedYear: 2012,
    campusArea: "200 Acres",
    accreditation: "NAAC A+ Accredited (3.28 CGPA), UGC Recognized, ABET & NBA Accredited, AICTE, BCI, PCI",
    nirfRanking: 27,
    rating: 4.6,
    reviewsCount: 920,
    coverImage: "/images/colleges/cu1.jpg",
    campusImages: [
          "/images/colleges/cu1.jpg",
          "/images/colleges/cu2.jpeg",
          "/images/colleges/cu3.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Computer Science", "BCA", "Law", "Pharmacy", "Universities", "Hotel Management", "Animation"],
    feesRange: "₹1.4 Lakh - ₹2.6 Lakh per year",
    annualFeeNumeric: 180000,
    hostelFee: "₹90,000 per year",
    placementRate: "95%",
    averagePackage: 9.5,
    highestPackage: 170.0,
    entranceExams: ["CUCET", "JEE Main", "CAT", "MAT", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "Top NIRF Ranked NAAC A+ University in North India with 900+ Corporate Recruiters",
    description: "Chandigarh University (CU), Mohali is a globally recognized NAAC A+ accredited private university situated across 200 sprawling acres on NH-05, Mohali (Chandigarh Tricity). Ranked among India's top universities by NIRF (#27 in Universities), CU holds prestigious ABET and NBA accreditations. With 900+ top multinational recruiters (including Microsoft, Google, Amazon, and IBM) visiting campus annually and record international offers up to ₹1.7 Crore, CU is a national leader in higher education and direct admissions.",
    courses: [
      {
        id: "c_cu_1",
        name: "B.Tech in Computer Science & Engineering (AI/ML, Cloud, Cyber Security, Blockchain)",
        duration: "4 Years",
        seats: 720,
        annualFee: "₹2,10,000",
        avgPackage: "₹10.5 LPA",
        eligibility: "10+2 with PCM (Min 50%) + CUCET / JEE Main / Direct Merit"
      },
      {
        id: "c_cu_2",
        name: "MBA (Strategic HR, Business Analytics, Banking & FinTech, Digital Marketing)",
        duration: "2 Years",
        seats: 360,
        annualFee: "₹2,40,000",
        avgPackage: "₹9.2 LPA",
        eligibility: "Graduation with 50% + CUCET / CAT / MAT"
      },
      {
        id: "c_cu_3",
        name: "B.A. LL.B. / B.B.A. LL.B. (Hons)",
        duration: "5 Years",
        seats: 240,
        annualFee: "₹1,60,000",
        avgPackage: "₹6.8 LPA",
        eligibility: "10+2 with 50% + CLAT / CUCET"
      },
      {
        id: "c_cu_4",
        name: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        seats: 240,
        annualFee: "₹1,20,000",
        avgPackage: "₹5.8 LPA",
        eligibility: "10+2 in any stream with 50%"
      }
    ],
    eligibility: "10+2 with minimum 50% aggregate marks for UG programs; graduation with 50% for PG. Admissions conducted via CUCET national scholarship entrance exam and direct merit counselling.",
    admissionProcess: [
      "Register online for CUCET entrance examination and counselor session.",
      "Appear for online CUCET test for scholarship evaluation up to 100%.",
      "Course choice locking and provisional seat allotment.",
      "Document verification, fee payment, and campus hostel booking."
    ],
    recruiters: ["Microsoft", "Google", "Amazon", "IBM", "Adobe", "Cognizant", "Deloitte", "Flipkart", "Oracle", "SAP"],
    facilities: ["30+ Industry Sponsored Research Labs", "Central Library with 1.5 Lakh Books", "Air-Conditioned Hostels for 15,000+ Students", "Chandigarh Tricity Transport", "Multi-Cuisine Food Courts"],
    scholarships: "₹170 Crore CUCET scholarship pool offering up to 100% fee waivers for 90%+ scores.",
    cutoffs: [
      { branch: "CSE AI-ML", round1Rank: 10000, closingRank: 22000 }
    ],
    faqs: [
      {
        q: "What is Chandigarh University's NIRF rank?",
        a: "Chandigarh University is ranked #27 among all universities in India in the NIRF rankings."
      },
      {
        q: "How many companies visit Chandigarh University for campus placements?",
        a: "More than 900 multinational corporate recruiters visit Chandigarh University annually, generating over 9,000+ job offers."
      }
    ]
  },
  {
    id: "col_lpu_phagwara",
    slug: "lpu-campus",
    aliases: ["lpu", "lpu-university", "lovely-professional-university", "lpu-campus", "lpu-phagwara", "lpu-jalandhar"],
    name: "Lovely Professional University",
    shortName: "LPU Phagwara",
    type: "Private University",
    city: "Phagwara",
    state: "Punjab",
    establishedYear: 2005,
    campusArea: "600 Acres",
    accreditation: "NAAC A++ Accredited (3.68 CGPA), UGC Recognized, ICAR, AICTE, BCI, PCI & COA Approved",
    nirfRanking: 38,
    rating: 4.6,
    reviewsCount: 1150,
    coverImage: "/images/colleges/lpu1.jpg",
    campusImages: [
      "/images/colleges/lpu1.jpg",
      "/images/colleges/lpu.webp",
      "/images/colleges/lpu3.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Computer Science", "BCA", "Law", "Pharmacy", "Agriculture", "Universities", "Design", "Architecture"],
    feesRange: "₹1.4 Lakh - ₹2.8 Lakh per year",
    annualFeeNumeric: 190000,
    hostelFee: "₹90,000 per year",
    placementRate: "95%",
    averagePackage: 9.2,
    highestPackage: 300.0,
    entranceExams: ["LPUNEST", "JEE Main", "CUET", "CAT", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "India's Largest 600-Acre NAAC A++ Campus with 30,000+ Students from 50+ Countries",
    description: "Lovely Professional University (LPU), Phagwara is India's largest single-campus private university, spanning over 600 acres on GT Road between Jalandhar and Phagwara, Punjab. Accredited with NAAC A++ (highest grade 3.68/4) and recognized by UGC, ICAR, AICTE, and BCI, LPU hosts over 30,000 students from 50+ countries. Offering 400+ multidisciplinary programs in B.Tech, MBA, Law, Agriculture, Pharmacy, and Design, LPU boasts international packages touching ₹3 Crore per annum, massive scholarship funds via LPUNEST, and direct counselor admission channels.",
    courses: [
      {
        id: "c_lpu_1",
        name: "B.Tech in Computer Science & Engineering (AI/ML, Data Science, Cyber Security, IoT)",
        duration: "4 Years",
        seats: 1200,
        annualFee: "₹2,40,000",
        avgPackage: "₹10.2 LPA",
        eligibility: "10+2 with PCM (Min 60%) + LPUNEST / JEE Main / Direct Merit"
      },
      {
        id: "c_lpu_2",
        name: "MBA (Hospital & Healthcare, Business Analytics, International Business, FinTech)",
        duration: "2 Years",
        seats: 480,
        annualFee: "₹2,80,000",
        avgPackage: "₹8.8 LPA",
        eligibility: "Graduation with 55% + LPUNEST / CAT / MAT / CMAT"
      },
      {
        id: "c_lpu_3",
        name: "B.Sc (Hons) Agriculture (ICAR Accredited)",
        duration: "4 Years",
        seats: 240,
        annualFee: "₹1,80,000",
        avgPackage: "₹6.2 LPA",
        eligibility: "10+2 with PCB/PCM/Agriculture (Min 60%) + LPUNEST"
      },
      {
        id: "c_lpu_4",
        name: "B.A. LL.B. / B.B.A. LL.B. (Hons)",
        duration: "5 Years",
        seats: 240,
        annualFee: "₹1,60,000",
        avgPackage: "₹6.5 LPA",
        eligibility: "10+2 with 50% + CLAT / LPUNEST"
      }
    ],
    eligibility: "Class 12 with minimum 60% aggregate in PCM/relevant subjects for B.Tech; 55% in graduation for MBA. Direct admission and scholarship allocation governed via LPUNEST and 10+2 merit scores.",
    admissionProcess: [
      "Submit LPUNEST application online or visit regional counseling office.",
      "Appear for online LPUNEST exam or submit JEE Main / CAT scorecards.",
      "Complete online/in-person counseling, seat allotment, and scholarship locking.",
      "Submit educational credentials, complete fee payment, and reserve hostel accommodation."
    ],
    recruiters: ["Google", "Microsoft", "Amazon", "Cognizant", "Capgemini", "Apple", "Oracle", "Cisco", "Bosch", "Morgan Stanley"],
    facilities: ["Uni-Mall with 100+ Stores & Supermarket", "Olympic Size All-Weather Swimming Pool", "Indoor Stadium for 10,000 Spectators", "Hospital & Emergency Care on Campus", "Automated Central Library", "Hostels Housing 25,000+ Students"],
    scholarships: "Up to ₹1.5 Lakh per year scholarship based on LPUNEST score, JEE Main percentile, 12th board marks, and sports achievements.",
    cutoffs: [
      { branch: "CSE AI-ML", round1Rank: 8000, closingRank: 18000 }
    ],
    faqs: [
      {
        q: "What was the highest package offered to an LPU student?",
        a: "An LPU student received a record international package offer of ₹3 Crore per annum, with hundreds of domestic offers exceeding ₹20 LPA to ₹64 LPA."
      },
      {
        q: "Is LPU NAAC A++ accredited?",
        a: "Yes, Lovely Professional University has been awarded NAAC A++ Grade with an exceptional 3.68 CGPA out of 4, the highest among private universities in India."
      }
    ]
  },
  {
    id: "col_4",
    slug: "iit-delhi",
    aliases: ["indian-institute-of-technology-delhi"],
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
    coverImage: "/images/colleges/iit-delhi-1.jpg",
    campusImages: [
          "/images/colleges/iit-delhi-1.jpg",
          "/images/colleges/iit-delhi-2.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Universities"],
    feesRange: "₹2.2 Lakh - ₹2.5 Lakh per year",
    annualFeeNumeric: 220000,
    hostelFee: "₹35,000 per year",
    placementRate: "97%",
    averagePackage: 25.8,
    highestPackage: 120.0,
    entranceExams: ["JEE Advanced", "CAT", "GATE"],
    featured: true,
    directAdmission: false,
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
    aliases: ["delhi-technological-university", "dce"],
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
    coverImage: "/images/colleges/dtu1.webp",
    campusImages: [
          "/images/colleges/dtu1.webp",
          "/images/colleges/dtu2.jpeg",
          "/images/colleges/dtu3.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Universities"],
    feesRange: "₹1.9 Lakh - ₹2.3 Lakh per year",
    annualFeeNumeric: 210000,
    hostelFee: "₹52,000 per year",
    placementRate: "93%",
    averagePackage: 15.4,
    highestPackage: 62.5,
    entranceExams: ["JEE Main", "JAC Delhi", "CAT"],
    featured: true,
    directAdmission: false,
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
    aliases: ["rvce", "rvce-bangalore"],
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
    coverImage: "/images/colleges/rvc1.jpg",
    campusImages: [
          "/images/colleges/rvc1.jpg",
          "/images/colleges/rvce.jpeg",
          "/images/colleges/rvc.jpeg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Computer Science", "MCA"],
    feesRange: "₹2.5 Lakh - ₹4.5 Lakh per year",
    annualFeeNumeric: 280000,
    hostelFee: "₹1,10,000 per year",
    placementRate: "95%",
    averagePackage: 14.5,
    highestPackage: 58.0,
    entranceExams: ["KCET", "COMEDK UGET", "Management Quota", "Direct Admission"],
    featured: true,
    directAdmission: true,
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
    eligibility: "Minimum 50% in 10+2 with Physics, Mathematics, and Chemistry. Valid COMEDK, KCET, or institutional merit management quota pathway.",
    admissionProcess: [
      "Appear for Karnataka CET (Karnataka students) or COMEDK UGET (All India).",
      "Attend centralised counselling rounds or apply through institutional quota.",
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
    aliases: ["iima"],
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
      "/images/colleges/iim-ahmedabad.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Management", "MBA", "Universities"],
    feesRange: "₹25 Lakh - ₹28 Lakh total program fee",
    annualFeeNumeric: 1300000,
    hostelFee: "Included in course fee",
    placementRate: "100%",
    averagePackage: 34.2,
    highestPackage: 115.0,
    entranceExams: ["CAT", "GMAT"],
    featured: true,
    directAdmission: false,
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
        a: "While the minimum eligibility cutoff is 80 percentile, competitive calls for general engineering candidates typically start at 99.6+ percentile."
      }
    ]
  },
  {
    id: "col_8",
    slug: "symbiosis-institute-of-business-management-pune",
    aliases: ["sibm-pune", "sibm"],
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
    coverImage: "/images/colleges/symbiosis-institute-of-business-management-pune.jpg",
    campusImages: [
      "/images/colleges/symbiosis-institute-of-business-management-pune.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Management", "MBA", "Universities"],
    feesRange: "₹12 Lakh - ₹14 Lakh per year",
    annualFeeNumeric: 1320000,
    hostelFee: "₹1,45,000 per year",
    placementRate: "100%",
    averagePackage: 26.7,
    highestPackage: 49.0,
    entranceExams: ["SNAP (Symbiosis National Aptitude Test)"],
    featured: true,
    directAdmission: false,
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
    aliases: ["aiims-delhi"],
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
    coverImage: "/images/colleges/aiims-new-delhi.jpg",
    campusImages: [
      "/images/colleges/aiims-new-delhi.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Medical", "Universities"],
    feesRange: "₹1,628 total course fee",
    annualFeeNumeric: 1628,
    hostelFee: "Nominal (~₹500 per year)",
    placementRate: "100%",
    averagePackage: 18.0,
    highestPackage: 45.0,
    entranceExams: ["NEET UG", "INI CET"],
    featured: true,
    directAdmission: false,
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
    aliases: ["nlsiu", "nlsiu-bangalore"],
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
    coverImage: "/images/colleges/national-law-school-of-india-university-bangalore.jpg",
    campusImages: [
      "/images/colleges/national-law-school-of-india-university-bangalore.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Law", "Universities"],
    feesRange: "₹3.5 Lakh - ₹4.0 Lakh per year",
    annualFeeNumeric: 375000,
    hostelFee: "₹80,000 per year",
    placementRate: "98%",
    averagePackage: 17.5,
    highestPackage: 45.0,
    entranceExams: ["CLAT (Common Law Admission Test)"],
    featured: true,
    directAdmission: false,
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
    aliases: ["iitb"],
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
    coverImage: "/images/colleges/iit-bombay-1.jpeg",
    campusImages: [
          "/images/colleges/iit-bombay-1.jpeg",
          "/images/colleges/iit-bombay-2.jpg",
          "/images/colleges/iit-bombay-3.avif"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "Universities"],
    feesRange: "₹2.2 Lakh - ₹2.4 Lakh per year",
    annualFeeNumeric: 228000,
    hostelFee: "₹38,000 per year",
    placementRate: "98%",
    averagePackage: 27.5,
    highestPackage: 140.0,
    entranceExams: ["JEE Advanced", "CAT", "GATE", "CEED"],
    featured: true,
    directAdmission: false,
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
    id: "col_amity_noida",
    slug: "amity-university-noida",
    aliases: ["amity-noida", "amity-university-noida", "amity-university", "amity-delhi-ncr", "amity"],
    name: "Amity University Noida",
    shortName: "Amity Noida",
    type: "Private University",
    city: "Noida",
    state: "Uttar Pradesh",
    establishedYear: 2005,
    campusArea: "60 Acres",
    accreditation: "NAAC A+ Grade (3.27 CGPA), UGC Recognized, AICTE, BCI, COA, PCI & WASC (USA) Accredited",
    nirfRanking: 35,
    rating: 4.6,
    reviewsCount: 890,
    coverImage: "/images/colleges/amity2.jpg",
    campusImages: [
          "/images/colleges/amity2.jpg",
          "/images/colleges/amity3.jpeg",
          "/images/colleges/amityuniversity_10db382a74.webp"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Law", "Computer Science", "BCA", "BBA", "Universities", "Design", "Psychology", "Biotechnology", "Journalism"],
    feesRange: "₹2.2 Lakh - ₹4.5 Lakh per year",
    annualFeeNumeric: 260000,
    hostelFee: "₹1,10,000 per year",
    placementRate: "94%",
    averagePackage: 8.8,
    highestPackage: 61.75,
    entranceExams: ["Amity JEE", "JEE Main", "CAT", "MAT", "CUET", "CLAT", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "Flagship 60-Acre Campus in Delhi NCR with Global WASC (USA) & NAAC A+ Accreditations",
    description: "Amity University Noida is the flagship campus of the global Amity Education Group, spread across 60 hi-tech acres in Sector 125, Noida (Delhi NCR). Recognized as one of India's premier private research universities, Amity Noida holds prestigious NAAC A+ accreditation and WASC (USA) global accreditation. Offering 250+ undergraduate, postgraduate, and doctoral degrees in Computer Science, Artificial Intelligence, Business Management, Law, Biotechnology, and Mass Media, Amity Noida features 500+ top multinational recruiters, state-of-the-art incubation hubs, and fast-track counselor admissions.",
    courses: [
      {
        id: "c_amity_nd_1",
        name: "B.Tech in Computer Science & Engineering (AI & Data Science)",
        duration: "4 Years",
        seats: 480,
        annualFee: "₹3,40,000",
        avgPackage: "₹10.5 LPA",
        eligibility: "10+2 with PCM (Min 60%) + Amity JEE / JEE Main / Direct Fast-track"
      },
      {
        id: "c_amity_nd_2",
        name: "MBA (International Business / Marketing / HR / Finance)",
        duration: "2 Years",
        seats: 240,
        annualFee: "₹4,20,000",
        avgPackage: "₹9.2 LPA",
        eligibility: "Graduation with 50% + CAT/MAT/CMAT/GMAT or Direct Interview"
      },
      {
        id: "c_amity_nd_3",
        name: "B.A. LL.B. / B.B.A. LL.B. (Hons)",
        duration: "5 Years",
        seats: 240,
        annualFee: "₹2,90,000",
        avgPackage: "₹7.5 LPA",
        eligibility: "10+2 with 50% aggregate + CLAT / Direct Admission"
      },
      {
        id: "c_amity_nd_4",
        name: "BCA (Cloud Computing & Artificial Intelligence)",
        duration: "3 Years",
        seats: 180,
        annualFee: "₹1,80,000",
        avgPackage: "₹6.2 LPA",
        eligibility: "10+2 in any stream with Mathematics/Computer Applications"
      }
    ],
    eligibility: "10+2 with minimum 60% aggregate in PCM for Engineering; Graduation with 50% for MBA. Direct admission on fast-track for candidates with 80%+ in CBSE/ICSE board examinations.",
    admissionProcess: [
      "Submit online application on Amity admission portal or via counselor desk.",
      "Complete video interview / aptitude assessment.",
      "Offer letter issued with merit scholarship details.",
      "Fee installment payment and hostel confirmation."
    ],
    recruiters: ["Microsoft", "Amazon", "Google", "Ernst & Young", "Deloitte", "KPMG", "Wipro", "TCS", "Accenture", "Adobe", "PwC"],
    facilities: [
      "High-Tech Computing & AI Labs",
      "Moot Court Complex",
      "Central Digital Library with 2,00,000+ Books",
      "Air-Conditioned Hostels",
      "Olympic-Size Sports Arena",
      "Amity Innovation Incubator"
    ],
    scholarships: "100% Scholarship for 93%+ in Class 12; 50% for 88%+ in Class 12; Fast-track direct admission for high achievers.",
    cutoffs: [
      { branch: "CSE AI & ML", round1Rank: 8500, closingRank: 19000 }
    ],
    faqs: [
      {
        q: "Is Amity University Noida UGC and NAAC approved?",
        a: "Yes, Amity University Noida is UGC recognized, NAAC A+ accredited, and accredited by WASC Senior College and University Commission (USA)."
      },
      {
        q: "What is the highest package at Amity University Noida?",
        a: "The highest international package at Amity University touched ₹61.75 LPA, with over 11,000+ placement offers generated in recent recruitment seasons."
      }
    ]
  },
  {
    id: "col_cgc_chandigarh",
    slug: "cgc-jhanjeri-chandigarh",
    aliases: ["cgc", "cgc-chandigarh", "chandigarh-group-of-colleges", "cgc-jhanjeri", "cgc-landran", "chandigarh-group"],
    name: "Chandigarh Group of Colleges",
    shortName: "CGC Chandigarh",
    type: "Autonomous Technical & Management Institute / Group of Colleges",
    city: "Mohali",
    state: "Punjab",
    establishedYear: 2001,
    campusArea: "50 Acres",
    accreditation: "NAAC A+ Accredited (3.46 CGPA), AICTE & PCI Approved, Affiliated to I.K. Gujral PTU",
    nirfRanking: 85,
    rating: 4.5,
    reviewsCount: 680,
    coverImage: "/images/colleges/chandigarh-university.jpg",
    campusImages: [
      "/images/colleges/chandigarh-university.jpg"
    ],
    logo: "/emblem.png",
    stream: ["Engineering", "B.Tech", "Management", "MBA", "Computer Science", "BCA", "BBA", "Pharmacy", "Universities", "Commerce"],
    feesRange: "₹95,000 - ₹1.7 Lakh per year",
    annualFeeNumeric: 125000,
    hostelFee: "₹75,000 per year",
    placementRate: "93%",
    averagePackage: 7.6,
    highestPackage: 54.75,
    entranceExams: ["CGC Josh", "JEE Main", "PTU CET", "Direct Admission"],
    featured: true,
    directAdmission: true,
    tagline: "NAAC A+ Premier Engineering & Management Group in Chandigarh Tricity with 850+ Recruiters",
    description: "Chandigarh Group of Colleges (CGC Jhanjeri / Landran) is one of North India's foremost educational conglomerates in Mohali, Chandigarh Tricity. Established in 2001 with NAAC A+ accreditation, CGC delivers high-demand degree programs in B.Tech Computer Science (AI/ML, Data Science), MBA, BCA, BBA, and Pharmacy. With a 360-degree pre-placement training program (360-DPTP), 850+ visiting multinational recruiters, packages touching ₹54.75 LPA, and ₹12 Crore CGC Josh scholarship funds, CGC offers unmatched academic ROI and direct admission pathways.",
    courses: [
      {
        id: "c_cgc_1",
        name: "B.Tech in Computer Science & Engineering (AI/ML & Data Science)",
        duration: "4 Years",
        seats: 360,
        annualFee: "₹1,45,000",
        avgPackage: "₹8.2 LPA",
        eligibility: "10+2 with PCM (Min 50%) + CGC Josh / JEE Main / Direct Merit"
      },
      {
        id: "c_cgc_2",
        name: "MBA (Finance, HR, Marketing, Business Analytics)",
        duration: "2 Years",
        seats: 180,
        annualFee: "₹1,35,000",
        avgPackage: "₹7.4 LPA",
        eligibility: "Graduation with 50% + CAT/MAT/CMAT or CGC Josh"
      },
      {
        id: "c_cgc_3",
        name: "BCA (Artificial Intelligence & Web Technologies)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹95,000",
        avgPackage: "₹5.6 LPA",
        eligibility: "10+2 in any stream (Min 50%)"
      },
      {
        id: "c_cgc_4",
        name: "BBA (Digital Marketing & Financial Services)",
        duration: "3 Years",
        seats: 120,
        annualFee: "₹95,000",
        avgPackage: "₹5.4 LPA",
        eligibility: "10+2 in any stream (Min 50%)"
      }
    ],
    eligibility: "10+2 with minimum 50% in PCM for Engineering; Graduation with 50% for MBA. Direct admission and CGC Josh scholarship quota available based on 10+2 board marks.",
    admissionProcess: [
      "Apply online via CGC admission portal or through admission counselor desk.",
      "Appear for CGC Josh scholarship exam or submit 10+2 / JEE Main score.",
      "Provisional seat allocation and document verification.",
      "Fee installment payment and hostel booking."
    ],
    recruiters: ["Microsoft", "Amazon", "Capgemini", "Cognizant", "Wipro", "TCS", "Accenture", "Infosys", "IBM", "Adobe"],
    facilities: [
      "Innovation & Entrepreneurship Cell",
      "High-Speed Computing Hubs",
      "Central Air-Cooled Hostels",
      "Chandigarh Tricity Bus Fleet",
      "Sports Arena"
    ],
    scholarships: "₹12 Crore CGC Josh scholarship pool offering up to 100% tuition fee waiver for academic merit and board toppers.",
    cutoffs: [
      { branch: "CSE Core", round1Rank: 14000, closingRank: 32000 }
    ],
    faqs: [
      {
        q: "What is CGC Jhanjeri's highest package?",
        a: "CGC students have secured highest packages up to ₹54.75 LPA, with over 8,500+ placement offers generated annually across 850+ companies."
      },
      {
        q: "Is CGC approved by AICTE and NAAC accredited?",
        a: "Yes, Chandigarh Group of Colleges is NAAC A+ accredited with a 3.46 CGPA and approved by AICTE and PCI."
      }
    ]
  }
];
