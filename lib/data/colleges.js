/**
 * College Mock Dataset
 * Comprehensive, verified database for top Indian universities, engineering colleges,
 * B-schools, medical institutes, and law faculties with direct admission & counselling support.
 * All coverImage paths reference authentic real photographs in /images/colleges/{slug}.jpg.
 */

export const collegesData = [
  {
    "id": "col_1",
    "slug": "mnit-jaipur",
    "aliases": [
      "malaviya-national-institute-of-technology",
      "mnit"
    ],
    "name": "Malaviya National Institute of Technology",
    "shortName": "MNIT Jaipur",
    "type": "Public / Institute of National Importance",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 1963,
    "campusArea": "317 Acres",
    "accreditation": "AICTE, NBA Accredited",
    "nirfRanking": 37,
    "rating": 4.6,
    "reviewsCount": 420,
    "coverImage": "/images/colleges/mnit.jpg",
    "campusImages": [
      "/images/colleges/mnit.jpg",
      "/images/colleges/mnit2.jpeg",
      "/images/colleges/mnit3.avif",
      "/images/colleges/mnit-jaipur.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Architecture",
      "Universities"
    ],
    "feesRange": "₹1.5 Lakh - ₹2.2 Lakh per year",
    "annualFeeNumeric": 185000,
    "hostelFee": "₹45,000 per year",
    "placementRate": "92%",
    "averagePackage": 13.8,
    "highestPackage": 64,
    "entranceExams": [
      "JEE Main",
      "GATE",
      "CCMT"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "Premier National Engineering & Research Institute in the Heart of Jaipur",
    "description": "Malaviya National Institute of Technology Jaipur (MNIT) is one of the premier National Institutes of Technology in India, declared as an Institute of National Importance by the Ministry of Education, Government of India. Spread across 317 lush green acres in Malviya Nagar, Jaipur, it fosters cutting-edge technical education, innovation incubators, and exceptional industry recruitment.",
    "courses": [
      {
        "id": "c_mnit_1",
        "name": "B.Tech in Computer Science and Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 132,
        "annualFee": "₹1,85,000",
        "avgPackage": "₹18.5 LPA",
        "specializations": [
          "Artificial Intelligence",
          "Cybersecurity",
          "Cloud Architecture",
          "Data Engineering"
        ],
        "eligibility": "10+2 with Physics, Mathematics & Chemistry (Min 75% aggregate) + JEE Main Rank"
      },
      {
        "id": "c_mnit_2",
        "name": "B.Tech in Electronics & Communication Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹1,85,000",
        "avgPackage": "₹15.2 LPA",
        "specializations": [
          "VLSI Design",
          "Embedded Systems",
          "5G Communications"
        ],
        "eligibility": "10+2 with PCM + JEE Main valid rank"
      },
      {
        "id": "c_mnit_3",
        "name": "B.Tech in Mechanical Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 115,
        "annualFee": "₹1,85,000",
        "avgPackage": "₹11.4 LPA",
        "specializations": [
          "Robotics & Automation",
          "Thermal Systems",
          "Mechatronics"
        ],
        "eligibility": "10+2 with PCM + JEE Main valid rank"
      },
      {
        "id": "c_mnit_4",
        "name": "B.Tech in Civil Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹1,60,000",
        "avgPackage": "₹9.8 LPA",
        "specializations": [
          "Structural Engineering",
          "Environmental Tech",
          "Smart Infrastructure"
        ],
        "eligibility": "10+2 with PCM + JEE Main valid rank"
      },
      {
        "id": "c_mnit_5",
        "name": "M.Tech in VLSI Design & Microelectronics",
        "degreeLevel": "Postgraduate",
        "department": "Engineering & Tech",
        "duration": "2 Years",
        "seats": 30,
        "annualFee": "₹1,20,000",
        "avgPackage": "₹19.2 LPA",
        "specializations": [
          "Analog Circuit Design",
          "SoC Architecture",
          "Semiconductor Physics"
        ],
        "eligibility": "B.Tech/B.E. in ECE/EE with qualifying GATE score"
      },
      {
        "id": "c_mnit_6",
        "name": "M.Tech in Computer Engineering (AI & Data Science)",
        "degreeLevel": "Postgraduate",
        "department": "Engineering & Tech",
        "duration": "2 Years",
        "seats": 35,
        "annualFee": "₹1,20,000",
        "avgPackage": "₹17.5 LPA",
        "specializations": [
          "Deep Learning",
          "High Performance Computing",
          "Distributed Systems"
        ],
        "eligibility": "B.Tech in CSE/IT or MCA with valid GATE score"
      }
    ],
    "news": [
      {
        "id": "news_mnit_1",
        "title": "JoSAA 2026 Round 2 Seat Allocation Matrix & Physical Reporting Schedule",
        "date": "Sep 22, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "All candidates allotted B.Tech seats at MNIT Jaipur in JoSAA Round 2 must complete document verification online and download the provisional seat allotment letter before September 28.",
        "badge": "Critical Update",
        "link": "#enquiry-section"
      },
      {
        "id": "news_mnit_2",
        "title": "Phase 1 Placement Drive 2026: 280+ Offers Recorded with Highest Domestic CTC of ₹64 LPA",
        "date": "Aug 30, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Marquee tech recruiters including Google, Microsoft, Texas Instruments, and Qualcomm conclude initial placement round with 92% of the eligible CSE and ECE batch placed.",
        "badge": "Placement Report",
        "link": "#placements"
      },
      {
        "id": "news_mnit_3",
        "title": "Call for Applications: Sponsored M.Tech and Ph.D Autumn 2026 Session",
        "date": "Aug 14, 2026",
        "category": "Exam",
        "isUrgent": false,
        "summary": "MNIT Dean (Academic) invites applications for industry-sponsored research scholars and full-time doctoral fellowships across technical departments.",
        "badge": "Academic Circular"
      }
    ],
    "eligibility": "Candidates must have passed 10+2 with Physics, Mathematics, and Chemistry with a minimum of 75% aggregate marks (65% for SC/ST). Admissions are processed strictly through Central Seat Allocation Board (CSAB) / JoSAA counselling based on JEE Main ranks.",
    "admissionProcess": [
      "Appear for JEE Main national examination conducted by NTA.",
      "Register for Joint Seat Allocation Authority (JoSAA) / CSAB counselling.",
      "Fill choices of MNIT Jaipur and preferred branch according to merit.",
      "Undergo online document verification upon seat allotment.",
      "Complete physical reporting, hostel allotment, and semester fee submission at the Jaipur campus."
    ],
    "recruiters": [
      "Google",
      "Microsoft",
      "Amazon",
      "Texas Instruments",
      "Goldman Sachs",
      "Tata Motors",
      "L&T",
      "Samsung R&D",
      "Oracle",
      "Qualcomm"
    ],
    "facilities": [
      "High-Performance Computing Cluster",
      "Central Library with 2,50,000+ Titles",
      "Incubation & Innovation Cell",
      "12 Student Hostels with High-Speed Wi-Fi",
      "Olympic-size Sports Complex",
      "24x7 Medical Health Centre"
    ],
    "scholarships": "Central Sector Scholarship Scheme for Top Class Education, Merit-cum-Means Scholarships, and Fee Waivers for Economically Weaker Section (EWS) candidates as per Government of India norms.",
    "cutoffs": [
      {
        "branch": "Computer Science Engineering",
        "round1Rank": 4200,
        "closingRank": 5650
      },
      {
        "branch": "Electronics & Communication",
        "round1Rank": 9800,
        "closingRank": 12400
      },
      {
        "branch": "Electrical Engineering",
        "round1Rank": 15200,
        "closingRank": 19800
      }
    ],
    "faqs": [
      {
        "q": "What is the average package for CSE at MNIT Jaipur?",
        "a": "The average CTC for the Computer Science & Engineering department stands at approximately ₹18.5 LPA, with the top 20% receiving offers exceeding ₹28 LPA."
      },
      {
        "q": "Does MNIT Jaipur offer direct admission through management quota?",
        "a": "No. MNIT Jaipur is a Central Government Institute of National Importance. Admissions for B.Tech are 100% merit-based through JEE Main and JoSAA/CSAB counselling."
      }
    ],
    "metaTitle": "Malaviya National Institute of Technology Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for Malaviya National Institute of Technology (MNIT Jaipur), Jaipur. Check NIRF rank #37, course fees (₹1.5 Lakh - ₹2.2 Lakh per year), cutoff ranks, 92% placements with avg package ₹13.8 LPA, and application deadlines."
  },
  {
    "id": "col_2",
    "slug": "manipal-university-jaipur",
    "aliases": [
      "muj",
      "manipal-jaipur"
    ],
    "name": "Manipal University Jaipur",
    "shortName": "MUJ",
    "type": "Private State University",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 2011,
    "campusArea": "122 Acres",
    "accreditation": "NAAC A+ Accredited, UGC Recognized",
    "nirfRanking": 64,
    "rating": 4.5,
    "reviewsCount": 380,
    "coverImage": "/images/colleges/manipal-university-1.webp",
    "campusImages": [
      "/images/colleges/manipal-university-1.webp",
      "/images/colleges/manipal2.webp",
      "/images/colleges/manipal-university-jaipur.jpg",
      "/images/colleges/manipal-university-jaipur-2.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "Computer Science",
      "BCA",
      "BBA",
      "Universities"
    ],
    "feesRange": "₹2.9 Lakh - ₹3.8 Lakh per year",
    "annualFeeNumeric": 320000,
    "hostelFee": "₹1,20,000 per year",
    "placementRate": "88%",
    "averagePackage": 8.5,
    "highestPackage": 42,
    "entranceExams": [
      "MET (Manipal Entrance Test)",
      "JEE Main",
      "CAT",
      "CLAT",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "World-Class Infrastructure and Global Pedagogy in Rajasthan",
    "description": "Manipal University Jaipur (MUJ) has redefined private higher education in North India with its sprawling 122-acre modern campus on Jaipur-Ajmer Expressway. Renowned for innovative pedagogy, industry-sponsored laboratories, and global exchange tie-ups, MUJ offers accredited degrees in Engineering, Management, Law, and Design.",
    "courses": [
      {
        "id": "c_muj_1",
        "name": "B.Tech in Computer Science & Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 360,
        "annualFee": "₹3,40,000",
        "avgPackage": "₹9.6 LPA",
        "specializations": [
          "AI & Machine Learning",
          "Cybersecurity",
          "Data Science",
          "Cloud & IoT"
        ],
        "eligibility": "10+2 with minimum 50% in PCM + MET / JEE Main"
      },
      {
        "id": "c_muj_2",
        "name": "MBA (Dual Specialization)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹4,20,000",
        "avgPackage": "₹8.2 LPA",
        "specializations": [
          "Finance & FinTech",
          "Marketing & Growth",
          "Business Analytics",
          "Human Resources"
        ],
        "eligibility": "Graduation with 50% aggregate + CAT/MAT/CMAT score"
      },
      {
        "id": "c_muj_3",
        "name": "BA LLB (Hons)",
        "degreeLevel": "Undergraduate",
        "department": "Law",
        "duration": "5 Years Integrated",
        "seats": 120,
        "annualFee": "₹2,10,000",
        "avgPackage": "₹6.8 LPA",
        "specializations": [
          "Corporate Law",
          "Cyber Law",
          "Constitutional Law",
          "IPR"
        ],
        "eligibility": "10+2 with 50% aggregate + CLAT / LSAT score"
      },
      {
        "id": "c_muj_4",
        "name": "BCA (Computer Applications)",
        "degreeLevel": "Undergraduate",
        "department": "Computer Applications",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹1,60,000",
        "avgPackage": "₹5.5 LPA",
        "specializations": [
          "Full Stack Web Dev",
          "Cloud Systems",
          "UX/UI Design"
        ],
        "eligibility": "10+2 in any stream with Mathematics/Computer application"
      }
    ],
    "news": [
      {
        "id": "news_muj_1",
        "title": "MET 2026 Final Phase Counselling & Direct Seat Verification Open",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions office notifies last call for vacant seats in B.Tech CSE and Data Science branches. Candidates can apply through the authorized Jaipur counselor portal.",
        "badge": "Direct Admission",
        "link": "#enquiry-section"
      },
      {
        "id": "news_muj_2",
        "title": "MUJ Management Conclave 2026: Top Industry Leaders Address MBA Cohort",
        "date": "Sep 10, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "TAPMI School of Business at MUJ hosts annual CEO Summit featuring keynotes on AI in enterprise strategy and sustainable logistics.",
        "badge": "Leadership Summit"
      },
      {
        "id": "news_muj_3",
        "title": "Campus Recruitment Season Begins: Over 110 MNCs Scheduled for On-Campus Drives",
        "date": "Aug 20, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Deloitte, Dell, Amazon, and Accenture commence pre-placement talks for graduating 2026 B.Tech, BCA, and MBA batches.",
        "badge": "Placement Drive",
        "link": "#placements"
      }
    ],
    "eligibility": "Candidates require a minimum 50% aggregate in 10+2 with Physics, Mathematics, and one optional science subject. Selection is based on Manipal Entrance Test (MET) score, JEE Main percentile, or direct merit quota counselling.",
    "admissionProcess": [
      "Submit online application via the MUJ admission portal or counselor desk.",
      "Register and appear for Manipal Entrance Test (MET) or submit JEE Main scorecard.",
      "Attend counselling session and lock course preference.",
      "Verify educational credentials and submit initial admission fee installment.",
      "Attend campus orientation."
    ],
    "recruiters": [
      "Dell",
      "Amazon",
      "Accenture",
      "Infosys",
      "Deloitte",
      "Adani Group",
      "Capgemini",
      "Cognizant"
    ],
    "facilities": [
      "Air-Conditioned Academic Blocks",
      "Fintech & Robotics Research Hubs",
      "Multi-Cuisine Food Courts",
      "Olympic Size Swimming Pool",
      "Indoor Badminton & Squash Courts"
    ],
    "scholarships": "TMA Pai Merit Scholarships, Rajasthan Domicile Fee Concession, and Sports Achiever Awards up to 50% tuition waiver.",
    "cutoffs": [
      {
        "branch": "CSE Core",
        "round1Rank": 6200,
        "closingRank": 8400
      },
      {
        "branch": "Data Science & AI",
        "round1Rank": 8900,
        "closingRank": 11200
      }
    ],
    "faqs": [
      {
        "q": "Is hostel accommodation compulsory at MUJ?",
        "a": "Hostel is optional for students living locally in Jaipur, but highly recommended for outstation students due to world-class amenities."
      }
    ],
    "metaTitle": "Manipal University Jaipur Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for Manipal University Jaipur (MUJ), Jaipur. Check NIRF rank #64, course fees (₹2.9 Lakh - ₹3.8 Lakh per year), cutoff ranks, 88% placements with avg package ₹8.5 LPA, and application deadlines."
  },
  {
    "id": "col_vgu_jaipur",
    "slug": "vgu-jaipur",
    "aliases": [
      "vivekananda-global-university-jaipur",
      "vgu"
    ],
    "name": "Vivekananda Global University",
    "shortName": "VGU Jaipur",
    "type": "Private University",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 2012,
    "campusArea": "45 Acres",
    "accreditation": "NAAC A+ Accredited (3.28 CGPA), UGC & AICTE Approved, BCI & PCI Approved",
    "nirfRanking": 88,
    "rating": 4.5,
    "reviewsCount": 340,
    "coverImage": "/images/colleges/vgu.webp",
    "campusImages": [
      "/images/colleges/vgu.webp",
      "/images/colleges/vgu-jaipur.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "Computer Science",
      "BCA",
      "Universities",
      "Design",
      "Pharmacy",
      "Agriculture"
    ],
    "feesRange": "₹1.1 Lakh - ₹2.2 Lakh per year",
    "annualFeeNumeric": 145000,
    "hostelFee": "₹85,000 per year",
    "placementRate": "89%",
    "averagePackage": 6.5,
    "highestPackage": 54,
    "entranceExams": [
      "VGUCET",
      "JEE Main",
      "CUET",
      "CAT",
      "MAT",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "NAAC A+ Multidisciplinary Research & Innovation University in Pink City",
    "description": "Vivekananda Global University (VGU), Jaipur is a premier NAAC A+ accredited private multidisciplinary university situated across a 45-acre green campus in Jagatpura, Jaipur. Recognized by UGC, AICTE, BCI, and PCI, VGU offers over 100+ comprehensive undergraduate, postgraduate, and doctoral programs spanning Engineering & Technology, Computer Applications, Management, Law, Design, Applied Sciences, and Pharmacy. With cutting-edge research incubators, Mitsubishi Electric and Siemens robotics labs, global university exchange partnerships, and on-campus direct admissions through dedicated counselors, VGU delivers industry-aligned pedagogy, experiential project learning, and high placement outcomes.",
    "courses": [
      {
        "id": "c_vgu_1",
        "name": "B.Tech in Computer Science & Engineering (AI & ML / Cloud)",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,75,000",
        "avgPackage": "₹7.2 LPA",
        "specializations": [
          "Artificial Intelligence & ML",
          "Cloud Computing",
          "Cybersecurity",
          "IoT"
        ],
        "eligibility": "10+2 with PCM (Min 50% aggregate) + JEE Main / VGUCET / Direct Merit"
      },
      {
        "id": "c_vgu_2",
        "name": "MBA (Dual Specialization)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹1,60,000",
        "avgPackage": "₹6.8 LPA",
        "specializations": [
          "Business Analytics",
          "Supply Chain",
          "FinTech",
          "Human Resources"
        ],
        "eligibility": "Bachelor's Degree in any discipline with 50% aggregate + CAT/MAT/CUET"
      },
      {
        "id": "c_vgu_3",
        "name": "BCA (Cloud Computing & Artificial Intelligence)",
        "degreeLevel": "Undergraduate",
        "department": "Computer Applications",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹95,000",
        "avgPackage": "₹5.0 LPA",
        "specializations": [
          "Web Technologies",
          "Python & Data Analytics",
          "Cyber Defense"
        ],
        "eligibility": "10+2 in any stream with Mathematics or Computer Applications"
      },
      {
        "id": "c_vgu_4",
        "name": "B.A. LL.B. / B.B.A. LL.B. (5-Year Integrated)",
        "degreeLevel": "Undergraduate",
        "department": "Law",
        "duration": "5 Years",
        "seats": 120,
        "annualFee": "₹1,20,000",
        "avgPackage": "₹5.8 LPA",
        "specializations": [
          "Corporate Law",
          "Criminal Law",
          "Constitutional Law"
        ],
        "eligibility": "10+2 with minimum 45% aggregate + CLAT / LSAT / Direct Counselling"
      },
      {
        "id": "c_vgu_5",
        "name": "B.Des in Fashion & Interior Design",
        "degreeLevel": "Undergraduate",
        "department": "Design",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹1,40,000",
        "avgPackage": "₹5.5 LPA",
        "specializations": [
          "Fashion Design",
          "Interior Architecture",
          "Visual Communication"
        ],
        "eligibility": "10+2 in any stream with creative aptitude"
      }
    ],
    "news": [
      {
        "id": "news_vgu_1",
        "title": "VGUCET 2026 Scholarship Exam Phase 3 Registration Deadlines",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Merit scholarship applications for up to 100% tuition concession closing this weekend. Direct spot counselling available on Jaipur campus.",
        "badge": "Scholarship Notice",
        "link": "#enquiry-section"
      },
      {
        "id": "news_vgu_2",
        "title": "International Internship Tie-up with Siemens & Mitsubishi Electric Labs",
        "date": "Sep 05, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Faculty of Engineering signs MoU enabling hands-on industrial training in advanced robotics and industrial automation.",
        "badge": "Industry Collaboration"
      }
    ],
    "eligibility": "Candidates must have passed 10+2 with 50% aggregate (45% for reserved categories) with relevant subjects (PCM for Engineering, Any stream for Management/Law/Arts). Admissions are processed via VGUCET, CUET, JEE Main, or through direct institutional merit and counseling quotas.",
    "admissionProcess": [
      "Submit online or on-campus admission enquiry form with academic details.",
      "One-on-one session with senior academic counselors for stream selection and eligibility check.",
      "Appear for VGUCET entrance/scholarship assessment or submit valid JEE/CUET/CAT scorecards.",
      "Provisional seat reservation, scholarship allocation, and document validation.",
      "Formal admission completion, hostel room allotment, and orientation attendance."
    ],
    "recruiters": [
      "TCS",
      "Wipro",
      "Infosys",
      "Cognizant",
      "Amazon",
      "Capgemini",
      "Byju's",
      "L&T Infotech",
      "Samsung",
      "HCL Technologies"
    ],
    "facilities": [
      "Mitsubishi Electric Centre of Excellence",
      "Siemens Automation & Robotics Lab",
      "Central Digital Library with 50,000+ volumes",
      "Hostels with AC/Non-AC options & Wi-Fi",
      "Makerspace Design Labs",
      "Full-sized Sports Complex & Gymnasium"
    ],
    "scholarships": "Merit-based scholarships up to 100% tuition waiver for 90%+ in 10+2 / graduation, sports achievers, defense personnel wards, and special girl child fee concessions.",
    "cutoffs": [
      {
        "branch": "CSE (AI & Data Science)",
        "round1Rank": 18000,
        "closingRank": 32000
      },
      {
        "branch": "MBA Core",
        "round1Rank": 70,
        "closingRank": 85
      }
    ],
    "faqs": [
      {
        "q": "What is the highest package at Vivekananda Global University (VGU Jaipur)?",
        "a": "The highest international package at VGU Jaipur touched ₹54 LPA, with the average package for CSE and Management branches ranging between ₹6.5 LPA and ₹7.5 LPA."
      },
      {
        "q": "Does VGU Jaipur offer direct on-campus admission?",
        "a": "Yes, Vivekananda Global University offers direct admission for eligible candidates through its authorized counseling desk based on 10+2 / graduation merit and VGUCET scorecards."
      }
    ],
    "metaTitle": "Vivekananda Global University Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for Vivekananda Global University (VGU Jaipur), Jaipur. Check NIRF rank #88, course fees (₹1.1 Lakh - ₹2.2 Lakh per year), cutoff ranks, 89% placements with avg package ₹6.5 LPA, and application deadlines."
  },
  {
    "id": "col_jagannath_jaipur",
    "slug": "jagannath-university",
    "aliases": [
      "jagannath-university-jaipur"
    ],
    "name": "Jagannath University",
    "shortName": "Jagannath University Jaipur",
    "type": "Private University",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 2008,
    "campusArea": "50 Acres",
    "accreditation": "NAAC Accredited, UGC Recognized, AICTE, BCI & PCI Approved",
    "nirfRanking": 145,
    "rating": 4.2,
    "reviewsCount": 280,
    "coverImage": "/images/colleges/jagannath-university.jpg",
    "campusImages": [
      "/images/colleges/jagannath-university.jpg",
      "/images/colleges/jaganath.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "Computer Science",
      "BCA",
      "Universities",
      "Pharmacy",
      "Agriculture",
      "Commerce",
      "BBA"
    ],
    "feesRange": "₹90,000 - ₹1.8 Lakh per year",
    "annualFeeNumeric": 125000,
    "hostelFee": "₹75,000 per year",
    "placementRate": "85%",
    "averagePackage": 5.8,
    "highestPackage": 27,
    "entranceExams": [
      "JUEE",
      "JEE Main",
      "CUET",
      "MAT",
      "Direct Admission"
    ],
    "featured": false,
    "directAdmission": true,
    "tagline": "Industry-Driven Multidisciplinary Education & Practical Learning Hub in Rajasthan",
    "description": "Jagannath University, Jaipur is a prominent statutory private university established in 2008 across a lush 50-acre campus near Chaksu, Jaipur. Approved by UGC, AICTE, BCI, PCI, and NCTE, Jagannath University delivers career-focused education across Engineering, Management, Law, Computer Applications, Pharmacy, Agriculture, and Physiotherapy. The university is widely recognized for its experiential learning pedagogy, industry-sponsored labs, international collaborations, and strong direct admission counselor support.",
    "courses": [
      {
        "id": "c_jagan_1",
        "name": "B.Tech in Computer Science & Engineering (Cloud & AI)",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹1,40,000",
        "avgPackage": "₹5.5 LPA",
        "specializations": [
          "Cloud Computing",
          "AI & Machine Learning",
          "Cybersecurity"
        ],
        "eligibility": "10+2 with PCM (Min 50% aggregate) + JUEE / JEE Main / Direct Merit"
      },
      {
        "id": "c_jagan_2",
        "name": "MBA (Dual Specialization in Marketing, Finance, HR)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 60,
        "annualFee": "₹1,50,000",
        "avgPackage": "₹6.0 LPA",
        "specializations": [
          "Marketing & E-Commerce",
          "Finance & Banking",
          "Human Resources"
        ],
        "eligibility": "Graduation with minimum 50% marks in any discipline + CAT/MAT/CMAT"
      },
      {
        "id": "c_jagan_3",
        "name": "B.A. LL.B. / B.B.A. LL.B. (5-Year Integrated)",
        "degreeLevel": "Undergraduate",
        "department": "Law",
        "duration": "5 Years",
        "seats": 120,
        "annualFee": "₹1,10,000",
        "avgPackage": "₹4.8 LPA",
        "specializations": [
          "Corporate Law",
          "Criminal Law",
          "Constitutional Law"
        ],
        "eligibility": "10+2 in any stream with minimum 45% aggregate + CLAT / LSAT / JUEE"
      },
      {
        "id": "c_jagan_4",
        "name": "B.Sc (Hons) in Agriculture",
        "degreeLevel": "Undergraduate",
        "department": "Agriculture",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹90,000",
        "avgPackage": "₹4.2 LPA",
        "specializations": [
          "Agronomy",
          "Horticulture",
          "Plant Breeding"
        ],
        "eligibility": "10+2 with Science (PCB/PCM) or Agriculture with min 50% marks"
      },
      {
        "id": "c_jagan_5",
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "degreeLevel": "Undergraduate",
        "department": "Pharmacy",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹1,05,000",
        "avgPackage": "₹4.5 LPA",
        "specializations": [
          "Pharmaceutics",
          "Pharmacology",
          "Medicinal Chemistry"
        ],
        "eligibility": "10+2 with Physics, Chemistry, Biology/Maths with min 50% aggregate"
      }
    ],
    "eligibility": "Pass in 10+2 examination with minimum 45-50% marks in relevant subjects. Direct institutional admission and merit scholarships available based on Class 12 board marks.",
    "admissionProcess": [
      "Submit application through online portal or physical admission desk.",
      "Counselling assessment based on 10+2 marks and JUEE entrance exam.",
      "Seat reservation and document validation.",
      "Fee installment payment and orientation."
    ],
    "recruiters": [
      "Infosys",
      "TCS",
      "HCL",
      "ICICI Bank",
      "Kotak Mahindra",
      "Axis Bank",
      "Reliance Retail"
    ],
    "facilities": [
      "Agricultural Research Farms",
      "Computer & AI Laboratories",
      "Moot Court Hall",
      "Hostels with Mess",
      "Sports Ground"
    ],
    "scholarships": "Merit scholarships up to 40% fee waiver for students with 80%+ marks in qualifying examinations.",
    "cutoffs": [
      {
        "branch": "CSE Core",
        "round1Rank": 28000,
        "closingRank": 45000
      }
    ],
    "faqs": [
      {
        "q": "Is Jagannath University Jaipur approved by UGC and AICTE?",
        "a": "Yes, Jagannath University is recognized by UGC under Section 2(f) of the UGC Act 1956 and accredited with relevant regulatory councils including AICTE, BCI, and PCI."
      }
    ],
    "metaTitle": "Jagannath University Jaipur Admission 2026: Fees, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for Jagannath University Jaipur (NAAC A). Check B.Tech, MBA, Law, Agriculture fee structures, direct admission procedure, and highest placement package.",
    "news": [
      {
        "id": "news_jagan_1",
        "title": "Jagannath University JUEE 2026 Phase 2 Registration & Direct Spot Counselling Open",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions office notifies last call for vacant seats in B.Tech CSE, Law, and Agriculture. Direct counselling available on Sitapura and Chaksu campuses.",
        "badge": "Direct Admission",
        "link": "#enquiry-section"
      },
      {
        "id": "news_jagan_2",
        "title": "Annual Placement Drive 2026: 85% Students Placed with Highest Package of ₹16 LPA",
        "date": "Sep 08, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Over 80 recruiters including Infosys, ICICI Bank, and Bosch concluded campus recruitment drives with strong packages for graduating batches.",
        "badge": "Placement Report",
        "link": "#placements"
      },
      {
        "id": "news_jagan_3",
        "title": "Chaksu Campus Expands Agricultural Research Farm with Hi-Tech Polyhouse Setup",
        "date": "Aug 18, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Department of Agriculture inaugurates 25-acre organic farming demonstration plot for experiential student learning.",
        "badge": "Campus Innovation"
      }
    ]
  },
  {
    "id": "col_jnu_jaipur",
    "slug": "jaipur-national-university",
    "aliases": [
      "jnu-jaipur"
    ],
    "name": "Jaipur National University",
    "shortName": "JNU Jaipur",
    "type": "Private University",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 2007,
    "campusArea": "170 Acres",
    "accreditation": "NAAC Accredited, UGC Recognized, AICTE, MCI/NMC, BCI, PCI & INC Approved",
    "nirfRanking": 92,
    "rating": 4.3,
    "reviewsCount": 410,
    "coverImage": "/images/colleges/jnu.webp",
    "campusImages": [
      "/images/colleges/jnu.webp",
      "/images/colleges/jnu1.webp",
      "/images/colleges/jnu2.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "Pharmacy",
      "Computer Science",
      "Universities"
    ],
    "feesRange": "₹1.2 Lakh - ₹3.5 Lakh per year",
    "annualFeeNumeric": 160000,
    "hostelFee": "₹80,000 per year",
    "placementRate": "87%",
    "averagePackage": 6.4,
    "highestPackage": 32,
    "entranceExams": [
      "JNU CET",
      "JEE Main",
      "NEET UG",
      "CUET",
      "CAT",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "Pioneering NAAC-Accredited Multidisciplinary & Medical University with 170-Acre Campus",
    "description": "Jaipur National University (JNU), Jaipur is one of Rajasthan's largest multidisciplinary private universities, sprawling over 170 acres across multiple modern campuses in Jagatpura. Established in 2007, JNU offers accredited programs across Engineering, Medical Sciences & JNU Medical College & Hospital (MCI/NMC approved), Management, Pharmacy, Law, Biotechnology, Nursing, and Mass Communication. Equipped with advanced clinical simulation centers, incubation hubs, and active corporate recruitment ties, JNU is a prime destination for direct admission and academic excellence.",
    "courses": [
      {
        "id": "c_jnu_1",
        "name": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        "degreeLevel": "Undergraduate",
        "department": "Medical & Health Sciences",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "seats": 150,
        "annualFee": "₹19,50,000",
        "avgPackage": "₹12.0 LPA (Resident Doctor)",
        "specializations": [
          "Clinical Medicine",
          "General Surgery",
          "Pediatrics",
          "Obstetrics & Gynecology"
        ],
        "eligibility": "10+2 with PCB (Min 50% marks) + Valid NEET UG rank through state/central counselling"
      },
      {
        "id": "c_jnu_2",
        "name": "B.Tech in Computer Science & Engineering (AI & Data Science)",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,65,000",
        "avgPackage": "₹6.5 LPA",
        "specializations": [
          "Artificial Intelligence",
          "Big Data Analytics",
          "Cyber Security"
        ],
        "eligibility": "10+2 with PCM (Min 50% aggregate) + JEE Main / JNU Entrance"
      },
      {
        "id": "c_jnu_3",
        "name": "MBA (Hospital & Healthcare Management / Dual Specialization)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 60,
        "annualFee": "₹1,80,000",
        "avgPackage": "₹7.2 LPA",
        "specializations": [
          "Hospital Administration",
          "Healthcare Analytics",
          "Corporate Finance"
        ],
        "eligibility": "Graduation with minimum 50% aggregate marks + CAT/MAT/CMAT"
      },
      {
        "id": "c_jnu_4",
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "degreeLevel": "Undergraduate",
        "department": "Pharmacy",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "₹1,20,000",
        "avgPackage": "₹4.8 LPA",
        "specializations": [
          "Pharmaceutical Technology",
          "Clinical Pharmacy"
        ],
        "eligibility": "10+2 with Physics, Chemistry, Biology/Maths with min 50% marks"
      },
      {
        "id": "c_jnu_5",
        "name": "BCA (Artificial Intelligence & Full Stack)",
        "degreeLevel": "Undergraduate",
        "department": "Computer Applications",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹95,000",
        "avgPackage": "₹4.5 LPA",
        "specializations": [
          "Web Technologies",
          "Python Programming",
          "Cloud Systems"
        ],
        "eligibility": "10+2 in any stream with Mathematics or Computer Applications"
      }
    ],
    "eligibility": "Candidates must have passed 10+2 with minimum 50% aggregate in required subjects. Admissions are offered via JNU Entrance Test, national entrance scores, and direct merit seat counselling.",
    "admissionProcess": [
      "Submit application on JNU admission portal or visit on-campus counseling cell.",
      "Document assessment and branch allotment by admission counselors.",
      "Fee payment and confirmation of seat."
    ],
    "recruiters": [
      "Amazon",
      "Bosch",
      "Decathlon",
      "Fortis Healthcare",
      "Metacube",
      "Syntel",
      "Wipro"
    ],
    "facilities": [
      "1000+ Bedded Teaching Hospital",
      "Biotechnology & Robotics Labs",
      "Central Library",
      "Separate AC Hostels for Boys & Girls",
      "Sports Arena"
    ],
    "scholarships": "Merit scholarships up to 50% for 90%+ marks in 10+2, scholarships for defense personnel wards and sports achievers.",
    "cutoffs": [
      {
        "branch": "CSE",
        "round1Rank": 22000,
        "closingRank": 38000
      }
    ],
    "faqs": [
      {
        "q": "Does JNU Jaipur have an attached medical hospital?",
        "a": "Yes, JNU has an attached 1000+ bedded super-specialty hospital and medical research institute providing live clinical exposure to students."
      }
    ],
    "metaTitle": "Jaipur National University Admission 2026: Fees, MBBS, Cutoffs & Placements",
    "metaDescription": "Verified 2026 admission guide for Jaipur National University (JNU Jaipur). View MBBS, B.Tech, MBA fees, NEET cutoff ranks, 1,000-bed hospital facilities, and direct counseling support.",
    "news": [
      {
        "id": "news_jnu_1",
        "title": "NEET UG 2026 State Counselling: Vacant MBBS Seats Verification Notice",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Rajasthan State NEET UG medical counseling board releases round 2 seat allotment matrix for JNU Institute of Medical Sciences (150 MBBS seats).",
        "badge": "NEET Counselling",
        "link": "#enquiry-section"
      },
      {
        "id": "news_jnu_2",
        "title": "JNU Super-Speciality Hospital Inaugurates Advanced 24x7 Cath Lab and Trauma Center",
        "date": "Sep 04, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "New modern facility enhances clinical training exposure for medical and nursing undergraduates at Jagatpura campus.",
        "badge": "Hospital Update"
      },
      {
        "id": "news_jnu_3",
        "title": "Campus Placements 2026: Healthcare & IT Recruiter Drive Concludes Successfully",
        "date": "Aug 15, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Apollo Hospitals, Fortis, Infosys, and TCS recruit over 450 students from medical, engineering, and management departments.",
        "badge": "Placement Drive",
        "link": "#placements"
      }
    ]
  },
  {
    "id": "col_dbs_dehradun",
    "slug": "doon-business-school",
    "aliases": [
      "dbs-dehradun"
    ],
    "name": "Doon Business School",
    "shortName": "DBS Dehradun",
    "type": "AICTE Approved Autonomous B-School & University Institute",
    "city": "Dehradun",
    "state": "Uttarakhand",
    "establishedYear": 2007,
    "campusArea": "15 Acres",
    "accreditation": "AICTE Approved, UGC Recognized, Affiliated to UTU & HNBGU",
    "nirfRanking": 78,
    "rating": 4.4,
    "reviewsCount": 360,
    "coverImage": "/images/colleges/doon1.webp",
    "campusImages": [
      "/images/colleges/doon1.webp",
      "/images/colleges/doon.webp",
      "/images/colleges/doon2.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Management",
      "MBA",
      "Computer Science",
      "BCA",
      "BBA",
      "Universities",
      "Commerce",
      "Mass Communication"
    ],
    "feesRange": "₹2.4 Lakh - ₹4.2 Lakh per year",
    "annualFeeNumeric": 290000,
    "hostelFee": "₹95,000 per year",
    "placementRate": "94%",
    "averagePackage": 8.2,
    "highestPackage": 24,
    "entranceExams": [
      "CAT",
      "MAT",
      "XAT",
      "CMAT",
      "DBS Aptitude Test",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "Premier Industry-Integrated Management & Analytics B-School in the Foothills of Himalayas",
    "description": "Doon Business School (DBS), Dehradun is widely regarded as one of North India's premier business schools, nestled in Selaqui, Dehradun against the serene Himalayan foothills. AICTE-approved and UGC-recognized, DBS is celebrated for its industry-embedded PGDM and MBA programs featuring SAP certification, Bloomberg terminal training, French/German language modules, and live corporate internships in Delhi NCR and Mumbai.",
    "courses": [
      {
        "id": "c_dbs_1",
        "name": "PGDM (Global / Dual Specialization with SAP & Harvard Certifications)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 180,
        "annualFee": "₹4,20,000",
        "avgPackage": "₹8.5 LPA",
        "specializations": [
          "FinTech & Investment Banking",
          "Marketing & Growth Strategy",
          "Business Analytics",
          "Supply Chain"
        ],
        "eligibility": "Bachelor's Degree in any discipline with min 50% aggregate + CAT/MAT/XAT/CMAT score"
      },
      {
        "id": "c_dbs_2",
        "name": "MBA (Affiliated to Uttarakhand Technical University - UTU)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹2,75,000",
        "avgPackage": "₹7.2 LPA",
        "specializations": [
          "Finance",
          "Marketing",
          "Human Resources",
          "International Business"
        ],
        "eligibility": "Graduation with 50% marks (45% for reserved category) + MAT/CAT/UTU Counselling"
      },
      {
        "id": "c_dbs_3",
        "name": "BBA (Global / Industry Immersion Track)",
        "degreeLevel": "Undergraduate",
        "department": "Management",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹1,85,000",
        "avgPackage": "₹5.5 LPA",
        "specializations": [
          "Digital Marketing",
          "Entrepreneurship",
          "Financial Services"
        ],
        "eligibility": "10+2 in any stream with minimum 50% aggregate marks"
      },
      {
        "id": "c_dbs_4",
        "name": "BCA (Full Stack Software Development & Cloud)",
        "degreeLevel": "Undergraduate",
        "department": "Computer Applications",
        "duration": "3 Years",
        "seats": 60,
        "annualFee": "₹1,25,000",
        "avgPackage": "₹5.0 LPA",
        "specializations": [
          "Full Stack Python/React",
          "Cloud Architecture",
          "Data Analytics"
        ],
        "eligibility": "10+2 with Mathematics/Computer Science with minimum 50% marks"
      },
      {
        "id": "c_dbs_5",
        "name": "B.Com (Hons) with Integrated CA / ACCA Preparation",
        "degreeLevel": "Undergraduate",
        "department": "Commerce",
        "duration": "3 Years",
        "seats": 60,
        "annualFee": "₹1,20,000",
        "avgPackage": "₹4.8 LPA",
        "specializations": [
          "Auditing & Taxation",
          "Corporate Accounting"
        ],
        "eligibility": "10+2 with Commerce or Mathematics with min 50% aggregate"
      }
    ],
    "eligibility": "Graduate in any stream with minimum 50% aggregate (45% for reserved category). Selection through GD/PI based on CAT/MAT/CMAT/XAT score or direct interview performance.",
    "admissionProcess": [
      "Submit online application form with academic marks and entrance exam details.",
      "Participate in online or on-campus Personal Interview (PI) & Group Discussion.",
      "Offer letter issued with scholarship eligibility.",
      "Seat reservation and registration confirmation."
    ],
    "recruiters": [
      "Deloitte",
      "KPMG",
      "HDFC Bank",
      "ICICI Prudential",
      "Berger Paints",
      "Amazon",
      "Tech Mahindra",
      "Dabur"
    ],
    "facilities": [
      "Bloomberg Trading Terminal Lab",
      "SAP Certified Training Center",
      "Modern Boardrooms",
      "Himalayan View Hostels",
      "Gym & Cafeteria"
    ],
    "scholarships": "Up to 90% scholarship on tuition fee for 90%+ percentile in CAT/MAT and outstanding academic achievers.",
    "cutoffs": [
      {
        "branch": "PGDM General",
        "round1Rank": 75,
        "closingRank": 88
      }
    ],
    "faqs": [
      {
        "q": "What certifications are included in DBS Dehradun PGDM?",
        "a": "DBS PGDM includes SAP ERP certifications, Bloomberg market terminal access, digital marketing certifications, and foreign language training at no additional cost."
      }
    ],
    "metaTitle": "Doon Business School Dehradun Admission 2026: Fees, PGDM Placements & Cutoffs",
    "metaDescription": "Complete verified 2026 guide for Doon Business School (DBS Dehradun). Explore PGDM, MBA, BBA fee structures, average placement package of ₹8.5 LPA, highest ₹24 LPA, and admission dates.",
    "news": [
      {
        "id": "news_dbs_1",
        "title": "DBS Global PGDM Admissions 2026: Round 2 GD/PI Interviews Online & On-Campus",
        "date": "Sep 22, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Shortlisted candidates for PGDM 2026 batch can schedule their online personal interview slots. Merit scholarships up to 40% based on CAT/MAT scores.",
        "badge": "Interview Call",
        "link": "#enquiry-section"
      },
      {
        "id": "news_dbs_2",
        "title": "Doon Business School Placement 2026: 95% Batch Placed with Average Package ₹8.5 LPA",
        "date": "Aug 28, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Deloitte, Ernst & Young, HDFC Bank, and Berger Paints hire over 250 graduating MBA and PGDM management trainees.",
        "badge": "Placement Milestone",
        "link": "#placements"
      },
      {
        "id": "news_dbs_3",
        "title": "Annual Himalayan Youth Leadership Summit & Entrepreneurship Bootcamp Announced",
        "date": "Aug 10, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Incubation center invites 50+ startup founders and angel investors to Dehradun campus for venture pitches.",
        "badge": "E-Summit"
      }
    ]
  },
  {
    "id": "col_upes_dehradun",
    "slug": "upes-dehradun",
    "aliases": [
      "upes",
      "upes-dehradun",
      "university-of-petroleum-and-energy-studies",
      "upes-university",
      "upes-dehradun-uttarakhand"
    ],
    "name": "UPES Dehradun",
    "shortName": "UPES",
    "type": "Private University",
    "city": "Dehradun",
    "state": "Uttarakhand",
    "establishedYear": 2003,
    "campusArea": "44 Acres",
    "accreditation": "NAAC A Grade, UGC Recognized, AIU, BCI, QS 5-Star Rating",
    "nirfRanking": 52,
    "rating": 4.6,
    "reviewsCount": 620,
    "coverImage": "/images/colleges/upes.webp",
    "campusImages": [
      "/images/colleges/upes.webp",
      "/images/colleges/upes1.webp",
      "/images/colleges/upes2.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "Design",
      "Computer Science",
      "Universities",
      "Health Sciences"
    ],
    "feesRange": "₹3.2 Lakh - ₹4.8 Lakh per year",
    "annualFeeNumeric": 380000,
    "hostelFee": "₹1,60,000 per year",
    "placementRate": "96%",
    "averagePackage": 10.2,
    "highestPackage": 50,
    "entranceExams": [
      "UPESEAT",
      "JEE Main",
      "CAT",
      "MAT",
      "ULSAT",
      "Direct Merit Quota"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "QS 5-Star Rated Energy, Tech & Law Powerhouse in Dehradun with 96% Placements",
    "description": "University of Petroleum and Energy Studies (UPES), Dehradun is an internationally acclaimed NAAC A-grade multidisciplinary university established in 2003 in Bidholi and Kandoli campuses, Dehradun. With QS 5-Star ratings for employability, academic development, and facilities, UPES offers cutting-edge B.Tech, MBA, Law (School of Law), Design, and Health Sciences programs with specialized industry tracks in Cloud Computing, AI, Petroleum & Energy, Cyber Security, and Corporate Law.",
    "courses": [
      {
        "id": "c_upes_1",
        "name": "B.Tech in Computer Science & Engineering (Cloud, AI & ML, Cyber)",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 480,
        "annualFee": "₹3,85,000",
        "avgPackage": "₹9.2 LPA",
        "specializations": [
          "Artificial Intelligence & Machine Learning",
          "Cloud Computing & Virtualization",
          "Cyber Security",
          "DevOps"
        ],
        "eligibility": "10+2 with PCM (Min 50% aggregate) + UPESEAT / JEE Main / Board Merit"
      },
      {
        "id": "c_upes_2",
        "name": "B.Tech in Petroleum & Energy Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹3,60,000",
        "avgPackage": "₹8.8 LPA",
        "specializations": [
          "Upstream Petroleum",
          "Gas Engineering",
          "Renewable Energy Systems"
        ],
        "eligibility": "10+2 with PCM (Min 50% aggregate) + UPESEAT / JEE Main"
      },
      {
        "id": "c_upes_3",
        "name": "MBA (Energy Trading, Oil & Gas, Aviation, Business Analytics)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 180,
        "annualFee": "₹5,40,000",
        "avgPackage": "₹10.5 LPA",
        "specializations": [
          "Oil & Gas Management",
          "Power & Renewable Energy",
          "Aviation Management",
          "Logistics & Supply Chain"
        ],
        "eligibility": "Graduation with min 50% marks + UPESMET / CAT / MAT / XAT / CMAT"
      },
      {
        "id": "c_upes_4",
        "name": "BA LLB (Hons) / BBA LLB (Hons) with Energy & Cyber Law",
        "degreeLevel": "Undergraduate",
        "department": "Law",
        "duration": "5 Years",
        "seats": 180,
        "annualFee": "₹3,20,000",
        "avgPackage": "₹7.5 LPA",
        "specializations": [
          "Energy Law",
          "Cyber Law & Intellectual Property",
          "Corporate Law"
        ],
        "eligibility": "10+2 in any stream with minimum 50% marks + ULSAT / CLAT / LSAT"
      },
      {
        "id": "c_upes_5",
        "name": "B.Des (Transportation & Industrial Design / UX)",
        "degreeLevel": "Undergraduate",
        "department": "Design",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹3,50,000",
        "avgPackage": "₹8.0 LPA",
        "specializations": [
          "Transportation Design",
          "Product Design",
          "User Experience (UX)"
        ],
        "eligibility": "10+2 in any stream with creative aptitude + UPESDAT / UCEED"
      }
    ],
    "eligibility": "Minimum 50% marks in 10+2 with PCM for B.Tech; 50% marks in graduation for MBA. Direct admission pathways available via Board Merit (80%+ in CBSE/ICSE/State Boards).",
    "admissionProcess": [
      "Submit application on UPES online portal or through designated counselor.",
      "Appear for UPESEAT/ULSAT or submit JEE Main/CLAT/CAT scores.",
      "Participate in centralized counseling and slot booking.",
      "Verification of documents and payment of admission fee."
    ],
    "recruiters": [
      "Schlumberger",
      "Shell",
      "ExxonMobil",
      "Microsoft",
      "Amazon",
      "L&T",
      "Deloitte",
      "Tata Consultancy Services"
    ],
    "facilities": [
      "Advanced Energy & Computing Labs",
      "Moot Court Complex",
      "Multi-Cuisine Dining",
      "Himalayan View Residential Hostels",
      "Indoor Sports Arena"
    ],
    "scholarships": "Up to 100% tuition fee waiver for academic board toppers, Uttarakhand domicile concessions, and female student scholarships.",
    "cutoffs": [
      {
        "branch": "CSE Core",
        "round1Rank": 8500,
        "closingRank": 16000
      }
    ],
    "faqs": [
      {
        "q": "What is the placement record at UPES Dehradun?",
        "a": "UPES maintains a verified 96%+ placement record across all schools, with highest packages reaching ₹50 LPA for technical and energy branches."
      }
    ],
    "metaTitle": "UPES Dehradun Admission 2026: Courses, Fees, Placements (₹52 LPA) & Cutoffs",
    "metaDescription": "Complete guide for UPES Dehradun 2026. Explore B.Tech CSE, Petroleum Engineering, MBA, Law, Design fees, UPESEAT cutoffs, 95% placements with highest CTC ₹52 LPA, and scholarships.",
    "news": [
      {
        "id": "news_upes_1",
        "title": "UPESEAT & UPESMET 2026 Registrations Open: Direct Merit Counselling for 2026 Intake",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "University opens application portal for 2026 engineering, management, and law intakes. Merit scholarship up to 30% available on first-come basis.",
        "badge": "Admissions 2026",
        "link": "#enquiry-section"
      },
      {
        "id": "news_upes_2",
        "title": "Placement Report 2026: 95% Placement Rate with Highest Package of ₹52 LPA",
        "date": "Aug 29, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Top tech and global energy recruiters including Microsoft, Shell, Schlumberger, Amazon, and ONGC recruit over 2,200 graduating students.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_upes_3",
        "title": "Global Academic Collaboration: Dual Degree Pathways with Top European Universities",
        "date": "Aug 12, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "UPES signs MoU with universities in UK and Germany offering semester abroad and credit transfer opportunities for engineering cohorts.",
        "badge": "Global Tie-up"
      }
    ]
  },
  {
    "id": "col_3",
    "slug": "jecrc-university",
    "aliases": [
      "jecrc-university-jaipur",
      "jecrc"
    ],
    "name": "JECRC University",
    "shortName": "JECRC Jaipur",
    "type": "Private University",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 2012,
    "campusArea": "32 Acres",
    "accreditation": "NAAC Accredited, UGC Recognized, AICTE & BCI Approved",
    "nirfRanking": 112,
    "rating": 4.4,
    "reviewsCount": 480,
    "coverImage": "/images/colleges/jecrec1.jpg",
    "campusImages": [
      "/images/colleges/jecrec1.jpg",
      "/images/colleges/jecrec.jpg",
      "/images/colleges/jecrec2.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Computer Science",
      "BCA",
      "MCA",
      "BBA",
      "Universities",
      "Law",
      "Sciences"
    ],
    "feesRange": "₹1.4 Lakh - ₹2.2 Lakh per year",
    "annualFeeNumeric": 175000,
    "hostelFee": "₹85,000 per year",
    "placementRate": "90%",
    "averagePackage": 7.2,
    "highestPackage": 44,
    "entranceExams": [
      "JEE Main",
      "REAP",
      "JU Entrance Test",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "Industry-Collaborated Engineering, AI & Management Hub Driven by Top Placements",
    "description": "JECRC University, Jaipur is celebrated across North India for its deep industry collaborations, practical technical learning ecosystems, and outstanding placement track record. Located in Sitapura Industrial Area, Jaipur, JECRC partners with Microsoft, AWS, TCS, and Google for specialized technical curriculum. Offering B.Tech in CSE/AI-ML, BCA, MCA, MBA, and Allied Sciences, JECRC provides active direct admission counselor guidance, high scholarship waivers, and robust corporate hiring.",
    "courses": [
      {
        "id": "c_jecrc_1",
        "name": "B.Tech in Computer Science & Engineering (AI & ML / Cloud)",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 360,
        "annualFee": "₹1,75,000",
        "avgPackage": "₹7.5 LPA",
        "specializations": [
          "Artificial Intelligence & Machine Learning",
          "Cloud Computing (AWS/Azure)",
          "Data Analytics"
        ],
        "eligibility": "10+2 with PCM (Min 60% aggregate) + JEE Main / REAP / Direct Merit"
      },
      {
        "id": "c_jecrc_2",
        "name": "BCA (Full Stack & Cloud Architecture)",
        "degreeLevel": "Undergraduate",
        "department": "Computer Applications",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹95,000",
        "avgPackage": "₹5.2 LPA",
        "specializations": [
          "Full Stack Web Development",
          "Cloud Architecture",
          "Python & Data Science"
        ],
        "eligibility": "10+2 in any stream with Mathematics/Computer Applications with min 50% marks"
      },
      {
        "id": "c_jecrc_3",
        "name": "MBA (Dual Specialization)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹1,60,000",
        "avgPackage": "₹6.8 LPA",
        "specializations": [
          "Marketing & Digital Strategy",
          "Finance & Banking",
          "Human Resources"
        ],
        "eligibility": "Graduation with minimum 50% aggregate + CAT/MAT/CMAT score"
      },
      {
        "id": "c_jecrc_4",
        "name": "BBA (Analytics & Digital Marketing)",
        "degreeLevel": "Undergraduate",
        "department": "Management",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹1,10,000",
        "avgPackage": "₹4.8 LPA",
        "specializations": [
          "Digital Marketing",
          "Business Analytics",
          "FinTech"
        ],
        "eligibility": "10+2 in any stream with minimum 50% aggregate marks"
      },
      {
        "id": "c_jecrc_5",
        "name": "B.Sc (Hons) in Biotechnology / Forensic Science",
        "degreeLevel": "Undergraduate",
        "department": "Science",
        "duration": "3 Years",
        "seats": 60,
        "annualFee": "₹85,000",
        "avgPackage": "₹4.2 LPA",
        "specializations": [
          "Forensic Science",
          "Microbiology",
          "Genetics"
        ],
        "eligibility": "10+2 with PCB/PCM with minimum 50% aggregate"
      }
    ],
    "eligibility": "Pass in 10+2 examination with minimum 50% aggregate marks in PCM. Direct entry and REAP counselling pathways available.",
    "admissionProcess": [
      "Submit application through online portal or physical admission desk.",
      "Counselling assessment based on 10+2 and JEE Main scores.",
      "Seat reservation and document validation.",
      "Confirmation and hostel allotment."
    ],
    "recruiters": [
      "TCS",
      "Wipro",
      "Capgemini",
      "Amazon",
      "Hexaware",
      "Zensar",
      "LTI Mindtree",
      "Microsoft"
    ],
    "facilities": [
      "Makerspace Lab",
      "Incubation Centre",
      "Digital Library",
      "Hostels with Mess",
      "Cricket Ground"
    ],
    "scholarships": "Merit scholarship up to 35% on tuition fee for 85%+ score in 10+2 board examinations.",
    "cutoffs": [
      {
        "branch": "CSE AI & ML",
        "round1Rank": 24000,
        "closingRank": 38000
      }
    ],
    "faqs": [
      {
        "q": "What is the average package at JECRC University?",
        "a": "The overall average package is around ₹7.2 LPA, with CSE branches recording packages up to ₹8.5 LPA on average."
      }
    ],
    "metaTitle": "JECRC University Jaipur Admission 2026: Fees, Placements (₹52 LPA) & Cutoffs",
    "metaDescription": "Verified guide to JECRC University Jaipur (NAAC Accredited). View 2026 course fees for B.Tech, BCA, MBA, record 2,100+ placement offers with highest CTC ₹52 LPA, and direct admissions.",
    "news": [
      {
        "id": "news_jecrc_1",
        "title": "JECRC University Admissions 2026: Merit Concessions and Direct Counseling Active",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Direct admission desk is open on Ramchandrapura campus for remaining seats in B.Tech CSE, BCA, and MBA. Merit scholarships up to 50% for 85%+ in Class 12.",
        "badge": "Direct Admission",
        "link": "#enquiry-section"
      },
      {
        "id": "news_jecrc_2",
        "title": "Record Placements 2026: Over 2,100 Offers from Amazon, TCS, Cognizant, and HPE",
        "date": "Aug 26, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "JECRC placement cell announces highest domestic package of ₹52 LPA and average engineering package crossing ₹7.5 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_jecrc_3",
        "title": "JU Rythm 2026: Rajasthan's Largest Techno-Cultural Festival Dates Announced",
        "date": "Aug 05, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "3-day annual festival scheduled with celebrity musical nights, coding hackathons, and robotic face-offs.",
        "badge": "Annual Fest"
      }
    ]
  },
  {
    "id": "col_poddar_jaipur",
    "slug": "poddar-institutions",
    "aliases": [
      "poddar-group-of-institutions-jaipur",
      "poddar-college"
    ],
    "name": "Poddar Group of Institutions",
    "shortName": "Poddar Institutions Jaipur",
    "type": "NAAC Accredited Premier Private Institute (Affiliated to Univ of Rajasthan / RTU)",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 1998,
    "campusArea": "12 Acres",
    "accreditation": "NAAC Accredited, AICTE Approved, UGC Recognized, Affiliated to University of Rajasthan & RTU",
    "nirfRanking": 138,
    "rating": 4.3,
    "reviewsCount": 290,
    "coverImage": "/images/colleges/poddar-institutions.jpg",
    "campusImages": [
      "/images/colleges/poddar-institutions.jpg",
      "/images/colleges/pddr.avif"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Management",
      "MBA",
      "Commerce",
      "BBA",
      "Computer Science",
      "BCA",
      "Design",
      "Universities",
      "Pharmacy"
    ],
    "feesRange": "₹80,000 - ₹1.6 Lakh per year",
    "annualFeeNumeric": 110000,
    "hostelFee": "₹70,000 per year",
    "placementRate": "88%",
    "averagePackage": 5.6,
    "highestPackage": 24,
    "entranceExams": [
      "CAT",
      "MAT",
      "CMAT",
      "Direct Merit Quota",
      "Rajasthan Univ Merit"
    ],
    "featured": false,
    "directAdmission": true,
    "tagline": "Reputed Management, Commerce & Applied IT Institute in Jaipur with High ROI",
    "description": "Poddar Group of Institutions, Jaipur (affiliated to University of Rajasthan and Rajasthan Technical University, NAAC-accredited & AICTE-approved) is one of Jaipur's most established educational institutions since 1998. Located in Mansarovar and Vatika campuses, Poddar offers flagship MBA, PGDM, BBA, BCA, B.Com, Design, and Pharmacy programs known for affordable fee structures, startup incubators, and dedicated on-campus direct admissions.",
    "courses": [
      {
        "id": "c_pod_1",
        "name": "MBA / PGDM (Dual Specialization)",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹1,45,000",
        "avgPackage": "₹6.0 LPA",
        "eligibility": "Bachelor's degree with 50% + CMAT/MAT/CAT or Direct Merit",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      },
      {
        "id": "c_pod_2",
        "name": "BCA (Bachelor of Computer Applications)",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹80,000",
        "avgPackage": "₹4.8 LPA",
        "eligibility": "10+2 in any stream (Min 48%)",
        "degreeLevel": "Undergraduate",
        "department": "Computer Applications"
      },
      {
        "id": "c_pod_3",
        "name": "BBA (Bachelor of Business Administration)",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹75,000",
        "avgPackage": "₹4.6 LPA",
        "eligibility": "10+2 in any stream (Min 48%)",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      }
    ],
    "eligibility": "Passed 10+2 with minimum 48% marks for UG; Graduation with 50% for PG courses. Direct admission and counselor support available.",
    "admissionProcess": [
      "Submit application online or at Mansarovar admission office.",
      "Counselling interaction and verification of 10+2 / UG marksheets.",
      "Seat allotment and payment of registration fee."
    ],
    "recruiters": [
      "TCS",
      "Wipro",
      "HDFC Bank",
      "ICICI Bank",
      "Genpact",
      "Concentrix",
      "Teleperformance"
    ],
    "facilities": [
      "Computer Laboratories",
      "Library & Reading Rooms",
      "Incubation Center",
      "Auditorium",
      "Hostel Facilities"
    ],
    "scholarships": "Merit scholarships up to 30% for 80%+ marks in qualifying examinations.",
    "cutoffs": [
      {
        "branch": "MBA General",
        "round1Rank": 60,
        "closingRank": 80
      }
    ],
    "faqs": [
      {
        "q": "Is Poddar Group of Institutions affiliated with University of Rajasthan?",
        "a": "Yes, Poddar is affiliated with the University of Rajasthan and Rajasthan Technical University (RTU), Kota for technical programs."
      }
    ],
    "metaTitle": "Poddar Group of Institutions Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for Poddar Group of Institutions (Poddar Institutions Jaipur), Jaipur. Check NIRF rank #138, course fees (₹80,000 - ₹1.6 Lakh per year), cutoff ranks, 88% placements with avg package ₹5.6 LPA, and application deadlines.",
    "news": [
      {
        "id": "news_poddar-institutions_1",
        "title": "Poddar Institutions Jaipur Admission 2026: Application Process & Direct Counseling Desk Open",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions are currently underway for the 2026 academic batch across undergraduate and postgraduate programs. Authorized counseling support available for seat reservations and merit scholarships.",
        "badge": "Admissions 2026",
        "link": "#enquiry-section"
      },
      {
        "id": "news_poddar-institutions_2",
        "title": "Placement Drive 2026: 88% Students Placed with Average Package of ₹5.6 LPA",
        "date": "Sep 02, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Leading corporate recruiters visit campus extending competitive packages with top offers reaching ₹24 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_poddar-institutions_3",
        "title": "Annual Institutional Academic & Skill Development Conclave Announced",
        "date": "Aug 15, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Poddar Group of Institutions hosts interactive workshop series bridging academia and modern industry requirements for graduating cohorts.",
        "badge": "Campus Event"
      }
    ]
  },
  {
    "id": "col_jklu_jaipur",
    "slug": "jklu-jaipur",
    "aliases": [
      "jk-lakshmipat-university-jaipur",
      "jklu"
    ],
    "name": "JK Lakshmipat University",
    "shortName": "JKLU Jaipur",
    "type": "Private University (JK Organisation)",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 2011,
    "campusArea": "30 Acres",
    "accreditation": "NAAC A Grade, UGC Recognized, AICTE Approved",
    "nirfRanking": 98,
    "rating": 4.5,
    "reviewsCount": 310,
    "coverImage": "/images/colleges/jklu.webp",
    "campusImages": [
      "/images/colleges/jklu.webp",
      "/images/colleges/jklu1.jpeg",
      "/images/colleges/jklu.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Design",
      "Computer Science",
      "BBA",
      "BCA",
      "Universities"
    ],
    "feesRange": "₹1.8 Lakh - ₹2.9 Lakh per year",
    "annualFeeNumeric": 230000,
    "hostelFee": "₹90,000 per year",
    "placementRate": "92%",
    "averagePackage": 8.4,
    "highestPackage": 37,
    "entranceExams": [
      "JEE Main",
      "JKLU MET",
      "CUET",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "Where Design, Technology & Business Converge Under the Prestigious JK Organisation",
    "description": "JK Lakshmipat University (JKLU), Jaipur is a forward-looking private university founded by the 125-year-old JK Organisation. Located on Ajmer Road, Jaipur, JKLU integrates design thinking, technology, and business leadership through project-based pedagogy in collaboration with international institutions like Olin College of Engineering (USA) and Edinburgh Napier University (UK). JKLU offers premier B.Tech, B.Des, BBA, and MBA programs with exceptional faculty and placement records.",
    "courses": [
      {
        "id": "c_jklu_1",
        "name": "B.Tech in Computer Science & Engineering (AI/ML & Cloud)",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹2,65,000",
        "avgPackage": "₹9.2 LPA",
        "eligibility": "10+2 with PCM (Min 60%) + JEE Main / JKLU MET / Direct Merit",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Technology"
      },
      {
        "id": "c_jklu_2",
        "name": "B.Des (Interaction / Product / Interdisciplinary Design)",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹2,75,000",
        "avgPackage": "₹8.0 LPA",
        "eligibility": "10+2 in any stream + JKLU Design Aptitude Test",
        "degreeLevel": "Undergraduate",
        "department": "Design & Arts"
      },
      {
        "id": "c_jklu_3",
        "name": "MBA (Business Analytics, Marketing, Operations & Finance)",
        "duration": "2 Years",
        "seats": 60,
        "annualFee": "₹2,80,000",
        "avgPackage": "₹8.5 LPA",
        "eligibility": "Graduation with 50% + CAT/MAT/CMAT",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      }
    ],
    "eligibility": "Minimum 60% aggregate in 10+2 with PCM for B.Tech; 50% in any stream for Design and Business courses. Merit admission quota available based on Class 12 percentage.",
    "admissionProcess": [
      "Submit application on JKLU admissions portal or through academic counselor.",
      "Participate in online interaction/interview with department faculty.",
      "Merit list publication and scholarship sanction.",
      "Seat reservation and fee confirmation."
    ],
    "recruiters": [
      "Amazon",
      "Flipkart",
      "Infosys",
      "TCS",
      "JK Tyre",
      "JK Paper",
      "LTI Mindtree",
      "Robomq"
    ],
    "facilities": [
      "Makerspace 3D Prototyping Lab",
      "Design Studios",
      "Green Residential Hostels",
      "Indoor Gymnasium",
      "Wi-Fi Campus"
    ],
    "scholarships": "Up to 100% scholarship for JEE Main top rankers and 90%+ Class 12 board marks.",
    "cutoffs": [
      {
        "branch": "CSE",
        "round1Rank": 15000,
        "closingRank": 28000
      }
    ],
    "faqs": [
      {
        "q": "What international partnerships does JKLU Jaipur have?",
        "a": "JKLU has academic tie-ups with Olin College of Engineering (USA), University of Florida, and Edinburgh Napier University for student exchange and joint research."
      }
    ],
    "metaTitle": "JK Lakshmipat University Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for JK Lakshmipat University (JKLU Jaipur), Jaipur. Check NIRF rank #98, course fees (₹1.8 Lakh - ₹2.9 Lakh per year), cutoff ranks, 92% placements with avg package ₹8.4 LPA, and application deadlines.",
    "news": [
      {
        "id": "news_jklu-jaipur_1",
        "title": "JKLU Jaipur Admission 2026: Application Process & Direct Counseling Desk Open",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions are currently underway for the 2026 academic batch across undergraduate and postgraduate programs. Authorized counseling support available for seat reservations and merit scholarships.",
        "badge": "Admissions 2026",
        "link": "#enquiry-section"
      },
      {
        "id": "news_jklu-jaipur_2",
        "title": "Placement Drive 2026: 92% Students Placed with Average Package of ₹8.4 LPA",
        "date": "Sep 02, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Leading corporate recruiters visit campus extending competitive packages with top offers reaching ₹37 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_jklu-jaipur_3",
        "title": "Annual Institutional Academic & Skill Development Conclave Announced",
        "date": "Aug 15, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "JK Lakshmipat University hosts interactive workshop series bridging academia and modern industry requirements for graduating cohorts.",
        "badge": "Campus Event"
      }
    ]
  },
  {
    "id": "col_12",
    "slug": "amity-jaipur",
    "aliases": [
      "amity-university-jaipur",
      "amity-rajasthan"
    ],
    "name": "Amity University Jaipur",
    "shortName": "Amity Jaipur",
    "type": "Private University",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 2008,
    "campusArea": "152 Acres",
    "accreditation": "NAAC A+ Grade, UGC Recognized, AICTE, BCI, COA & PCI Approved",
    "nirfRanking": 89,
    "rating": 4.4,
    "reviewsCount": 380,
    "coverImage": "/images/colleges/amityuniversity_10db382a74.webp",
    "campusImages": [
      "/images/colleges/amityuniversity_10db382a74.webp",
      "/images/colleges/amity2.jpg",
      "/images/colleges/amity3.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "BBA",
      "BCA",
      "Universities",
      "Design",
      "Psychology",
      "Biotechnology"
    ],
    "feesRange": "₹1.6 Lakh - ₹2.8 Lakh per year",
    "annualFeeNumeric": 195000,
    "hostelFee": "₹75,000 per year",
    "placementRate": "88%",
    "averagePackage": 7,
    "highestPackage": 38,
    "entranceExams": [
      "Amity JEE",
      "JEE Main",
      "CAT",
      "MAT",
      "CUET",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "152-Acre World-Class Residential Campus on Delhi-Jaipur Highway with 100+ Programs",
    "description": "Amity University Rajasthan (Jaipur) offers a world-class residential university experience against the scenic backdrop of the Aravalli hills on the Delhi-Jaipur Expressway. Part of the global Amity Education Group, the campus is NAAC A+ accredited and houses state-of-the-art cyber-security centers, moot courts, biotechnology labs, and golf academy. Offering UG, PG, and doctoral programs, Amity Jaipur features swift direct admissions via counselor assistance and 100% merit scholarships.",
    "courses": [
      {
        "id": "c_amity_1",
        "name": "B.Tech in Computer Science & Engineering",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹2,10,000",
        "avgPackage": "₹7.5 LPA",
        "eligibility": "10+2 with 60% in PCM + Amity JEE / JEE Main / Direct Merit",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Technology"
      },
      {
        "id": "c_amity_2",
        "name": "MBA (International Business / Marketing / HR / Finance)",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹2,80,000",
        "avgPackage": "₹7.2 LPA",
        "eligibility": "Graduation with 50% + CAT/MAT/CMAT or Direct Assessment",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      },
      {
        "id": "c_amity_3",
        "name": "B.A. LL.B. (Hons) 5-Year Integrated",
        "duration": "5 Years",
        "seats": 120,
        "annualFee": "₹1,80,000",
        "avgPackage": "₹6.2 LPA",
        "eligibility": "10+2 with 50% + CLAT / Direct Admission",
        "degreeLevel": "Undergraduate",
        "department": "Legal Studies"
      },
      {
        "id": "c_amity_4",
        "name": "BBA (Bachelor of Business Administration)",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹1,40,000",
        "avgPackage": "₹5.2 LPA",
        "eligibility": "10+2 in any stream with 50% minimum",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      }
    ],
    "eligibility": "Pass in 10+2 with 55-60% aggregate. Direct admission fast-track pathways for candidates with 80%+ in CBSE/ICSE.",
    "admissionProcess": [
      "Online application on Amity portal or via counselor desk.",
      "Video interview / aptitude assessment.",
      "Admission letter issued with merit scholarship details.",
      "Fee payment and hostel allotment."
    ],
    "recruiters": [
      "Capgemini",
      "IBM",
      "HCL",
      "Ernst & Young",
      "Wipro",
      "TCS",
      "Accenture",
      "Amazon"
    ],
    "facilities": [
      "152 Acre Eco-friendly Campus",
      "Golf Course & Shooting Range",
      "Residential Hostels",
      "Amity Innovation Incubator",
      "Central Library"
    ],
    "scholarships": "100% Scholarship for 93%+ aggregate in Class 12; 50% scholarship for 88%+ in Class 12.",
    "cutoffs": [
      {
        "branch": "CSE",
        "round1Rank": 12000,
        "closingRank": 25000
      }
    ],
    "faqs": [
      {
        "q": "Does Amity Jaipur provide bus transportation from Jaipur city?",
        "a": "Yes, luxury AC buses operate across all major sectors of Jaipur, Vaishali Nagar, Mansarovar, and Malviya Nagar."
      }
    ],
    "metaTitle": "Amity University Jaipur Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for Amity University Jaipur (Amity Jaipur), Jaipur. Check NIRF rank #89, course fees (₹1.6 Lakh - ₹2.8 Lakh per year), cutoff ranks, 88% placements with avg package ₹7 LPA, and application deadlines.",
    "news": [
      {
        "id": "news_amity-jaipur_1",
        "title": "Amity Jaipur Admission 2026: Application Process & Direct Counseling Desk Open",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions are currently underway for the 2026 academic batch across undergraduate and postgraduate programs. Authorized counseling support available for seat reservations and merit scholarships.",
        "badge": "Admissions 2026",
        "link": "#enquiry-section"
      },
      {
        "id": "news_amity-jaipur_2",
        "title": "Placement Drive 2026: 88% Students Placed with Average Package of ₹7 LPA",
        "date": "Sep 02, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Leading corporate recruiters visit campus extending competitive packages with top offers reaching ₹38 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_amity-jaipur_3",
        "title": "Annual Institutional Academic & Skill Development Conclave Announced",
        "date": "Aug 15, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Amity University Jaipur hosts interactive workshop series bridging academia and modern industry requirements for graduating cohorts.",
        "badge": "Campus Event"
      }
    ]
  },
  {
    "id": "col_bennett_greaternoida",
    "slug": "bennett-university",
    "aliases": [
      "bennett",
      "bennet",
      "bennet-university",
      "bennett-university",
      "bennett-university-greater-noida",
      "times-group-university"
    ],
    "name": "Bennett University",
    "shortName": "Bennett Greater Noida",
    "type": "Private University (The Times Group)",
    "city": "Greater Noida",
    "state": "Uttar Pradesh",
    "establishedYear": 2016,
    "campusArea": "68 Acres",
    "accreditation": "NAAC A+ Accredited (3.46 CGPA), UGC Recognized, AICTE Approved, BCI Approved",
    "nirfRanking": 48,
    "rating": 4.6,
    "reviewsCount": 510,
    "coverImage": "/images/colleges/benet1.webp",
    "campusImages": [
      "/images/colleges/benet1.webp",
      "/images/colleges/benet.jpg",
      "/images/colleges/benet2.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "Computer Science",
      "BBA",
      "BCA",
      "Media",
      "Universities"
    ],
    "feesRange": "₹3.2 Lakh - ₹4.5 Lakh per year",
    "annualFeeNumeric": 360000,
    "hostelFee": "₹1,50,000 per year",
    "placementRate": "95%",
    "averagePackage": 11.2,
    "highestPackage": 120,
    "entranceExams": [
      "JEE Main",
      "SAT",
      "CUET",
      "CAT",
      "Direct Merit Quota"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "The Times Group's NAAC A+ Flagship Tech & Media University in Delhi NCR",
    "description": "Bennett University, Greater Noida is a premier NAAC A+ accredited private university founded by The Times Group (Bennett, Coleman & Co. Ltd.) in 2016. Spanning a futuristic 68-acre campus in Greater Noida (Delhi NCR), Bennett offers top-tier programs in Computer Science & Engineering (with international academic tie-ups with Georgia Tech), Management, Law, Media, and Liberal Arts. Recognized as one of the fastest-growing universities with domestic packages touching ₹57 LPA and international offers up to ₹1.2 Cr.",
    "courses": [
      {
        "id": "c_bennett_1",
        "name": "B.Tech in Computer Science & Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 480,
        "annualFee": "₹3,95,000",
        "avgPackage": "₹11.1 LPA",
        "specializations": [
          "Artificial Intelligence & Data Science",
          "Cyber Security",
          "Cloud Computing",
          "Gaming & Virtual Reality"
        ],
        "eligibility": "10+2 with PCM (Min 60% aggregate) + JEE Main / CUET / SAT / Bennett Test"
      },
      {
        "id": "c_bennett_2",
        "name": "MBA (Business Analytics, Finance, Marketing)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹4,40,000",
        "avgPackage": "₹8.8 LPA",
        "specializations": [
          "Business Analytics",
          "Digital Marketing",
          "Corporate Finance",
          "Operations"
        ],
        "eligibility": "Graduation with minimum 50% aggregate + CAT/XAT/MAT/NMAT/GMAT score"
      },
      {
        "id": "c_bennett_3",
        "name": "BBA (Honours / Dual Degree)",
        "degreeLevel": "Undergraduate",
        "department": "Management",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹2,75,000",
        "avgPackage": "₹6.8 LPA",
        "specializations": [
          "Entrepreneurship & Family Business",
          "Finance",
          "International Business"
        ],
        "eligibility": "10+2 in any stream with minimum 60% aggregate marks"
      },
      {
        "id": "c_bennett_4",
        "name": "B.A. LL.B. (Hons) / B.B.A. LL.B. (Hons)",
        "degreeLevel": "Undergraduate",
        "department": "Law",
        "duration": "5 Years",
        "seats": 180,
        "annualFee": "₹3,40,000",
        "avgPackage": "₹7.5 LPA",
        "specializations": [
          "Corporate Law",
          "Cyber Law",
          "Intellectual Property Rights"
        ],
        "eligibility": "10+2 in any stream with minimum 55% aggregate + CLAT / LSAT score"
      },
      {
        "id": "c_bennett_5",
        "name": "BA in Journalism & Mass Communication (Times School of Media)",
        "degreeLevel": "Undergraduate",
        "department": "Media & Communication",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹2,95,000",
        "avgPackage": "₹6.2 LPA",
        "specializations": [
          "Digital Media & Podcasting",
          "Television Journalism",
          "Film & TV Production"
        ],
        "eligibility": "10+2 in any stream with English as compulsory subject (Min 50% marks)"
      }
    ],
    "eligibility": "Class 12 with minimum 60% aggregate in PCM for B.Tech. Direct merit admission seats available based on 10+2 board percentage and JEE Main scores.",
    "admissionProcess": [
      "Submit online application on Bennett portal with academic scores.",
      "Counseling review and seat allotment based on JEE percentile or Class 12 merit.",
      "Provisional admission letter issuance and fee installment payment."
    ],
    "recruiters": [
      "Microsoft",
      "Amazon",
      "Google",
      "Goldman Sachs",
      "Deloitte",
      "Adobe",
      "Times Internet",
      "Capgemini"
    ],
    "facilities": [
      "Supercomputing AI Lab (NVIDIA DGX)",
      "Times Media Studio & Production House",
      "Olympic Size Swimming Pool",
      "Fully Air-Conditioned Hostels",
      "Indoor Sports Arena"
    ],
    "scholarships": "Up to 100% tuition fee scholarships for 95%+ in Class 12 or 95+ percentile in JEE Main.",
    "cutoffs": [
      {
        "branch": "CSE AI Core",
        "round1Rank": 25000,
        "closingRank": 48000
      }
    ],
    "faqs": [
      {
        "q": "What is Bennett University's highest placement package?",
        "a": "Bennett University's highest international package touched ₹1.2 Crore per annum, with domestic tech offers exceeding ₹57 LPA."
      }
    ],
    "metaTitle": "Bennett University Greater Noida Admission 2026: Fees, Courses & Placements",
    "metaDescription": "Verified 2026 guide for Bennett University (The Times Group). Check B.Tech CSE, MBA, Law, Media fee schedule, scholarships up to 75%, and ₹62 LPA highest placement records.",
    "news": [
      {
        "id": "news_bennett_1",
        "title": "Bennett University Admissions 2026: Early Bird Scholarships up to 75% Active",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Times Group university opens application portal for 2026 intake. High scorers in JEE Main, CUET, and Class 12 qualify for substantial tuition waivers.",
        "badge": "Scholarships 2026",
        "link": "#enquiry-section"
      },
      {
        "id": "news_bennett_2",
        "title": "Times Group Placement Conclave 2026: Highest Offer of ₹62 LPA Recorded in CSE",
        "date": "Aug 27, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Over 700+ leading tech corporations and consulting firms recruit from the 2026 graduating cohort with average package standing at ₹11.10 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_bennett_3",
        "title": "Bennett School of Law Wins National Moot Court Championship at Supreme Court Auditorium",
        "date": "Aug 11, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Student advocates secure top honours and best memorial award at prestigious national constitutional law moot.",
        "badge": "Student Achievement"
      }
    ]
  },
  {
    "id": "col_geeta_panipat",
    "slug": "geeta-university",
    "aliases": [
      "geeta-university-panipat"
    ],
    "name": "Geeta University",
    "shortName": "Geeta University Panipat",
    "type": "Private University",
    "city": "Panipat",
    "state": "Haryana",
    "establishedYear": 2022,
    "campusArea": "25 Acres",
    "accreditation": "UGC Recognized, AICTE, BCI, PCI & NCTE Approved",
    "nirfRanking": 160,
    "rating": 4.2,
    "reviewsCount": 220,
    "coverImage": "/images/colleges/geeta.webp",
    "campusImages": [
      "/images/colleges/geeta.webp",
      "/images/colleges/geeta.png",
      "/images/colleges/geeta.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "Pharmacy",
      "Computer Science",
      "BCA",
      "BBA",
      "Agriculture",
      "Universities"
    ],
    "feesRange": "₹90,000 - ₹1.7 Lakh per year",
    "annualFeeNumeric": 120000,
    "hostelFee": "₹75,000 per year",
    "placementRate": "84%",
    "averagePackage": 5.4,
    "highestPackage": 28,
    "entranceExams": [
      "GUTS (Geeta University Test)",
      "JEE Main",
      "CUET",
      "Direct Admission"
    ],
    "featured": false,
    "directAdmission": true,
    "tagline": "70+ Future-Ready Programs in Engineering, Law & Management on GT Road Haryana",
    "description": "Geeta University, Panipat is a dynamic UGC-recognized private university situated on the Delhi-NCR GT Road corridor in Haryana. Offering over 70+ future-ready programs across 10 constituent schools—including Engineering & Technology, Management, Pharmacy, Law, Agriculture, and Health Sciences—Geeta University emphasizes skill-based education, robotics labs, industry internships, and direct counselor-assisted admissions.",
    "courses": [
      {
        "id": "c_geeta_1",
        "name": "B.Tech in Computer Science & Engineering (AI/ML & Cyber Security)",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,40,000",
        "avgPackage": "₹6.0 LPA",
        "eligibility": "10+2 with PCM (Min 45%) + GUTS / JEE Main / Direct Merit",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Technology"
      },
      {
        "id": "c_geeta_2",
        "name": "MBA (Dual Specialization)",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹1,30,000",
        "avgPackage": "₹5.6 LPA",
        "eligibility": "Graduation with 50% aggregate + CAT/MAT/Direct",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      },
      {
        "id": "c_geeta_3",
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "₹1,10,000",
        "avgPackage": "₹4.8 LPA",
        "eligibility": "10+2 with PCB/PCM (Min 50%)",
        "degreeLevel": "Undergraduate",
        "department": "Medical & Health Sciences"
      }
    ],
    "eligibility": "Passed 10+2 with minimum 45-50% in relevant stream. Fast-track direct admission and scholarship assessment via GUTS.",
    "admissionProcess": [
      "Submit application on university website or campus admission desk.",
      "Counseling interview and document evaluation.",
      "Seat reservation and fee submission."
    ],
    "recruiters": [
      "Infosys",
      "Wipro",
      "Tech Mahindra",
      "Amazon",
      "HCL",
      "IBM",
      "Byju's"
    ],
    "facilities": [
      "Robotics & Automation Labs",
      "Moot Court",
      "Modern Library",
      "Hostels with Mess",
      "Sports Grounds"
    ],
    "scholarships": "GUTS scholarship offering up to 100% tuition waiver for meritorious students.",
    "cutoffs": [
      {
        "branch": "CSE",
        "round1Rank": 32000,
        "closingRank": 55000
      }
    ],
    "faqs": [
      {
        "q": "Where is Geeta University located?",
        "a": "Geeta University is located on NH-44 (GT Road) in Panipat, Haryana, within easy commuting distance from Delhi NCR and Chandigarh."
      }
    ],
    "metaTitle": "Geeta University Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for Geeta University (Geeta University Panipat), Panipat. Check NIRF rank #160, course fees (₹90,000 - ₹1.7 Lakh per year), cutoff ranks, 84% placements with avg package ₹5.4 LPA, and application deadlines.",
    "news": [
      {
        "id": "news_geeta-university_1",
        "title": "Geeta University Panipat Admission 2026: Application Process & Direct Counseling Desk Open",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions are currently underway for the 2026 academic batch across undergraduate and postgraduate programs. Authorized counseling support available for seat reservations and merit scholarships.",
        "badge": "Admissions 2026",
        "link": "#enquiry-section"
      },
      {
        "id": "news_geeta-university_2",
        "title": "Placement Drive 2026: 84% Students Placed with Average Package of ₹5.4 LPA",
        "date": "Sep 02, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Leading corporate recruiters visit campus extending competitive packages with top offers reaching ₹28 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_geeta-university_3",
        "title": "Annual Institutional Academic & Skill Development Conclave Announced",
        "date": "Aug 15, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Geeta University hosts interactive workshop series bridging academia and modern industry requirements for graduating cohorts.",
        "badge": "Campus Event"
      }
    ]
  },
  {
    "id": "col_rit_roorkee",
    "slug": "rit-roorkee",
    "aliases": [
      "roorkee-institute-of-technology"
    ],
    "name": "Roorkee Institute of Technology",
    "shortName": "RIT Roorkee",
    "type": "Autonomous Institute (Affiliated to UTU & UBTER)",
    "city": "Roorkee",
    "state": "Uttarakhand",
    "establishedYear": 2005,
    "campusArea": "20 Acres",
    "accreditation": "NAAC A++ Grade (CGPA 3.61/4), AICTE Approved, UGC Recognized, Affiliated to UTU",
    "nirfRanking": 105,
    "rating": 4.5,
    "reviewsCount": 310,
    "coverImage": "/images/colleges/roorki1.webp",
    "campusImages": [
      "/images/colleges/roorki1.webp",
      "/images/colleges/roorki.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Computer Science",
      "BCA",
      "MCA",
      "BBA",
      "Pharmacy",
      "Agriculture",
      "Universities"
    ],
    "feesRange": "₹1.1 Lakh - ₹1.8 Lakh per year",
    "annualFeeNumeric": 135000,
    "hostelFee": "₹72,000 per year",
    "placementRate": "91%",
    "averagePackage": 6.8,
    "highestPackage": 56,
    "entranceExams": [
      "JEE Main",
      "UKSEE",
      "CUET",
      "CAT",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "Prestigious NAAC A++ Accredited Engineering & Tech Institute in Roorkee",
    "description": "Roorkee Institute of Technology (RIT), Roorkee is an elite NAAC A++ accredited technical institute (CGPA 3.61/4) located in the educational hub of Roorkee, Uttarakhand. Established in 2005, RIT offers industry-designed B.Tech programs in Computer Science, AI & ML, Data Science, alongside MBA, MCA, Pharmacy, and Agriculture. Known for its Apple iOS developer lab, coding bootcamps, and top tech placements with Microsoft, Amazon, and Tata Technologies.",
    "courses": [
      {
        "id": "c_rit_1",
        "name": "B.Tech in Computer Science & Engineering (AI & ML / Data Science)",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,50,000",
        "avgPackage": "₹7.4 LPA",
        "eligibility": "10+2 with PCM (Min 50%) + JEE Main / UKSEE / Direct Merit",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Technology"
      },
      {
        "id": "c_rit_2",
        "name": "MBA (Marketing, HR, Finance, International Business)",
        "duration": "2 Years",
        "seats": 90,
        "annualFee": "₹1,40,000",
        "avgPackage": "₹6.5 LPA",
        "eligibility": "Graduation with 50% + CAT/MAT/CMAT or Direct Assessment",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      },
      {
        "id": "c_rit_3",
        "name": "B.Sc (Hons) Agriculture",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹90,000",
        "avgPackage": "₹5.0 LPA",
        "eligibility": "10+2 with PCB/PCM/Agriculture",
        "degreeLevel": "Undergraduate",
        "department": "Academic Studies"
      }
    ],
    "eligibility": "Minimum 50% in 10+2 with PCM for engineering. Direct admission seats and state quota counseling via Uttarakhand Technical University.",
    "admissionProcess": [
      "Submit application form online or through official counseling desk.",
      "Counseling assessment based on 10+2 marks and entrance scores.",
      "Document verification, seat reservation, and hostel allotment."
    ],
    "recruiters": [
      "Microsoft",
      "Amazon",
      "Tata Technologies",
      "Infosys",
      "Wipro",
      "Capgemini",
      "Cognizant",
      "Tommy Hilfiger"
    ],
    "facilities": [
      "Apple iOS Developer Lab",
      "Robotics & IoT Research Center",
      "Digital Library",
      "Separate AC/Non-AC Hostels",
      "Sports Stadium"
    ],
    "scholarships": "Merit scholarships up to 100% on tuition fee for 90%+ in 10+2, scholarships for Uttarakhand domicile students and girl students.",
    "cutoffs": [
      {
        "branch": "CSE",
        "round1Rank": 16000,
        "closingRank": 32000
      }
    ],
    "faqs": [
      {
        "q": "What is RIT Roorkee's NAAC accreditation grade?",
        "a": "RIT Roorkee is accredited with the highest NAAC A++ Grade with a 3.61 CGPA out of 4."
      }
    ],
    "metaTitle": "Roorkee Institute of Technology Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for Roorkee Institute of Technology (RIT Roorkee), Roorkee. Check NIRF rank #105, course fees (₹1.1 Lakh - ₹1.8 Lakh per year), cutoff ranks, 91% placements with avg package ₹6.8 LPA, and application deadlines.",
    "news": [
      {
        "id": "news_rit-roorkee_1",
        "title": "RIT Roorkee Admission 2026: Application Process & Direct Counseling Desk Open",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions are currently underway for the 2026 academic batch across undergraduate and postgraduate programs. Authorized counseling support available for seat reservations and merit scholarships.",
        "badge": "Admissions 2026",
        "link": "#enquiry-section"
      },
      {
        "id": "news_rit-roorkee_2",
        "title": "Placement Drive 2026: 91% Students Placed with Average Package of ₹6.8 LPA",
        "date": "Sep 02, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Leading corporate recruiters visit campus extending competitive packages with top offers reaching ₹56 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_rit-roorkee_3",
        "title": "Annual Institutional Academic & Skill Development Conclave Announced",
        "date": "Aug 15, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Roorkee Institute of Technology hosts interactive workshop series bridging academia and modern industry requirements for graduating cohorts.",
        "badge": "Campus Event"
      }
    ]
  },
  {
    "id": "col_sgvu_jaipur",
    "slug": "suresh-gyan-vihar-university",
    "aliases": [
      "suresh-gyan-vihar-university",
      "gyan-vihar-university",
      "sgvu",
      "sgvu-jaipur",
      "suresh-gyan-viihar-university",
      "suresh-gyan-vihar"
    ],
    "name": "Suresh Gyan Vihar University",
    "shortName": "SGVU Jaipur",
    "type": "Private University",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 2008,
    "campusArea": "32 Acres",
    "accreditation": "NAAC A+ Accredited (3.32 CGPA), UGC Recognized, AICTE, PCI & AIU Approved",
    "nirfRanking": 76,
    "rating": 4.4,
    "reviewsCount": 390,
    "coverImage": "/images/colleges/sgvu.jpg",
    "campusImages": [
      "/images/colleges/sgvu.jpg",
      "/images/colleges/sgvu1.webp",
      "/images/colleges/sgvu2.jpg",
      "/images/colleges/sgvu3.webp"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Pharmacy",
      "Computer Science",
      "BCA",
      "BBA",
      "Agriculture",
      "Universities",
      "Hotel Management"
    ],
    "feesRange": "₹1.1 Lakh - ₹2.1 Lakh per year",
    "annualFeeNumeric": 140000,
    "hostelFee": "₹78,000 per year",
    "placementRate": "88%",
    "averagePackage": 6.2,
    "highestPackage": 36,
    "entranceExams": [
      "SGVUEE",
      "JEE Main",
      "CUET",
      "CAT",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "First NAAC A+ Private University in Rajasthan with NIRF-Ranked School of Pharmacy",
    "description": "Suresh Gyan Vihar University (SGVU), Jaipur is the first private university in Rajasthan to be accredited with NAAC 'A+' grade (3.32 CGPA). Located in Jagatpura, Jaipur, SGVU encompasses 10 specialized academic departments including its NIRF-ranked School of Pharmacy, Engineering & Technology, Business Management, Applied Sciences, and Agriculture. Offering direct admission support, global student mobility, and active corporate recruitment.",
    "courses": [
      {
        "id": "c_sgvu_1",
        "name": "B.Tech in Computer Science & Engineering (Cloud / AI-ML)",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,60,000",
        "avgPackage": "₹6.8 LPA",
        "eligibility": "10+2 with PCM (Min 50%) + SGVUEE / JEE Main / Direct Merit",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Technology"
      },
      {
        "id": "c_sgvu_2",
        "name": "B.Pharm (NIRF Ranked School of Pharmacy)",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "₹1,30,000",
        "avgPackage": "₹5.8 LPA",
        "eligibility": "10+2 with PCB/PCM (Min 50%)",
        "degreeLevel": "Undergraduate",
        "department": "Medical & Health Sciences"
      },
      {
        "id": "c_sgvu_3",
        "name": "MBA (Digital Marketing, Finance, HR, Supply Chain)",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹1,60,000",
        "avgPackage": "₹6.4 LPA",
        "eligibility": "Graduation with 50% + CAT/MAT/CMAT or Direct Admission",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      }
    ],
    "eligibility": "Pass in 10+2 with 50% aggregate in required science/commerce/arts streams. Direct admission quota available via counselor desk.",
    "admissionProcess": [
      "Submit application on SGVU admission portal or at Jagatpura admission desk.",
      "Appear for SGVUEE scholarship exam or present 10+2 merit scorecards.",
      "Seat reservation and document validation."
    ],
    "recruiters": [
      "Google",
      "Amazon",
      "Infosys",
      "TCS",
      "Cipla",
      "Sun Pharma",
      "Lupin",
      "Cognizant"
    ],
    "facilities": [
      "NIRF Ranked Pharmacy Labs",
      "Renewable Energy Research Center",
      "Digital Library",
      "Separate Hostels with Mess",
      "Open Air Theatre"
    ],
    "scholarships": "Up to 100% scholarship for high academic scorers, single girl child scholarships, and sports quota awards.",
    "cutoffs": [
      {
        "branch": "CSE",
        "round1Rank": 21000,
        "closingRank": 36000
      }
    ],
    "faqs": [
      {
        "q": "Is Suresh Gyan Vihar University NAAC A+ accredited?",
        "a": "Yes, SGVU was the first private university in Rajasthan to receive NAAC 'A+' accreditation with a 3.32 CGPA."
      }
    ],
    "metaTitle": "Suresh Gyan Vihar University Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for Suresh Gyan Vihar University (SGVU Jaipur), Jaipur. Check NIRF rank #76, course fees (₹1.1 Lakh - ₹2.1 Lakh per year), cutoff ranks, 88% placements with avg package ₹6.2 LPA, and application deadlines.",
    "news": [
      {
        "id": "news_suresh-gyan-vihar-university_1",
        "title": "SGVU Jaipur Admission 2026: Application Process & Direct Counseling Desk Open",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions are currently underway for the 2026 academic batch across undergraduate and postgraduate programs. Authorized counseling support available for seat reservations and merit scholarships.",
        "badge": "Admissions 2026",
        "link": "#enquiry-section"
      },
      {
        "id": "news_suresh-gyan-vihar-university_2",
        "title": "Placement Drive 2026: 88% Students Placed with Average Package of ₹6.2 LPA",
        "date": "Sep 02, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Leading corporate recruiters visit campus extending competitive packages with top offers reaching ₹36 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_suresh-gyan-vihar-university_3",
        "title": "Annual Institutional Academic & Skill Development Conclave Announced",
        "date": "Aug 15, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Suresh Gyan Vihar University hosts interactive workshop series bridging academia and modern industry requirements for graduating cohorts.",
        "badge": "Campus Event"
      }
    ]
  },
  {
    "id": "col_bmu_gurgaon",
    "slug": "bml-munjal-university",
    "aliases": [
      "bml-munjal-university",
      "bmu",
      "bmu-gurgaon",
      "bml-munjal",
      "bml-munjilal-university",
      "bml-munjal-university-gurgaon"
    ],
    "name": "BML Munjal University",
    "shortName": "BMU Gurgaon",
    "type": "Private University (The Hero Group)",
    "city": "Gurgaon",
    "state": "Haryana",
    "establishedYear": 2014,
    "campusArea": "50 Acres",
    "accreditation": "NAAC A Grade, UGC Recognized, AICTE & BCI Approved",
    "nirfRanking": 72,
    "rating": 4.6,
    "reviewsCount": 430,
    "coverImage": "/images/colleges/bml.webp",
    "campusImages": [
      "/images/colleges/bml.webp",
      "/images/colleges/bml.jpeg",
      "/images/colleges/bml1.avif",
      "/images/colleges/bml2.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "Computer Science",
      "BBA",
      "Commerce",
      "Universities"
    ],
    "feesRange": "₹2.8 Lakh - ₹4.2 Lakh per year",
    "annualFeeNumeric": 310000,
    "hostelFee": "₹1,40,000 per year",
    "placementRate": "94%",
    "averagePackage": 9.8,
    "highestPackage": 40,
    "entranceExams": [
      "JEE Main",
      "SAT",
      "BMU-SAT",
      "CAT",
      "NMAT",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "Hero Group Founded Industry-Immersive University Mentored by Imperial College London",
    "description": "BML Munjal University (BMU), Gurgaon is a world-class private university founded in 2014 by the promoters of the Hero Group. Located in Sidhrawali on NH-48 in Gurgaon (Delhi NCR), BMU was mentored by Imperial College London. BMU emphasizes experiential 45% hands-on learning, maker-spaces, and deep corporate linkages for B.Tech CSE, MBA, BBA, and Law students with high-paying placements across consulting, tech, and automotive sectors.",
    "courses": [
      {
        "id": "c_bmu_1",
        "name": "B.Tech in Computer Science & Engineering (AI, Cyber Security, Data Science)",
        "duration": "4 Years",
        "seats": 300,
        "annualFee": "₹3,40,000",
        "avgPackage": "₹11.2 LPA",
        "eligibility": "10+2 with PCM (Min 60%) + JEE Main / BMU-SAT / Board Merit",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Technology"
      },
      {
        "id": "c_bmu_2",
        "name": "MBA (Business Analytics, Operations, Finance, Marketing)",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹4,20,000",
        "avgPackage": "₹9.5 LPA",
        "eligibility": "Graduation with 50% + CAT/NMAT/XAT/GMAT or BMU-MAT",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      },
      {
        "id": "c_bmu_3",
        "name": "BBA (Family Business / Digital Marketing / Finance)",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹2,80,000",
        "avgPackage": "₹7.0 LPA",
        "eligibility": "10+2 in any stream (Min 60%)",
        "degreeLevel": "Undergraduate",
        "department": "Management & Business"
      }
    ],
    "eligibility": "Class 12 with minimum 60% aggregate in PCM/Commerce/Arts. Direct admission pathways available based on academic merit and counselor interviews.",
    "admissionProcess": [
      "Submit application on BMU portal.",
      "Participate in case analysis / personal interview with admissions panel.",
      "Provisional admission offer with merit scholarship letter.",
      "Fee payment and enrollment."
    ],
    "recruiters": [
      "Hero MotoCorp",
      "Amazon",
      "KPMG",
      "Deloitte",
      "EY",
      "ServiceNow",
      "Hyundai",
      "Nestle"
    ],
    "facilities": [
      "Siemens Centre of Excellence",
      "Maker Space Lab",
      "Modern Residential Hostels",
      "Executive Classrooms",
      "Sports Complex"
    ],
    "scholarships": "Dean's Scholarships and Hero Group Merit Scholarships providing up to 100% tuition waivers.",
    "cutoffs": [
      {
        "branch": "CSE",
        "round1Rank": 20000,
        "closingRank": 42000
      }
    ],
    "faqs": [
      {
        "q": "Who founded BML Munjal University?",
        "a": "BMU was founded by the promoters of the Hero Group (named after visionary industrialist Brijmohan Lall Munjal)."
      }
    ],
    "metaTitle": "BML Munjal University Admission 2026: Fees, Cutoffs, Courses, Placements & Ranking",
    "metaDescription": "Explore verified 2026 admission details for BML Munjal University (BMU Gurgaon), Gurgaon. Check NIRF rank #72, course fees (₹2.8 Lakh - ₹4.2 Lakh per year), cutoff ranks, 94% placements with avg package ₹9.8 LPA, and application deadlines.",
    "news": [
      {
        "id": "news_bml-munjal-university_1",
        "title": "BMU Gurgaon Admission 2026: Application Process & Direct Counseling Desk Open",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions are currently underway for the 2026 academic batch across undergraduate and postgraduate programs. Authorized counseling support available for seat reservations and merit scholarships.",
        "badge": "Admissions 2026",
        "link": "#enquiry-section"
      },
      {
        "id": "news_bml-munjal-university_2",
        "title": "Placement Drive 2026: 94% Students Placed with Average Package of ₹9.8 LPA",
        "date": "Sep 02, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Leading corporate recruiters visit campus extending competitive packages with top offers reaching ₹40 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_bml-munjal-university_3",
        "title": "Annual Institutional Academic & Skill Development Conclave Announced",
        "date": "Aug 15, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "BML Munjal University hosts interactive workshop series bridging academia and modern industry requirements for graduating cohorts.",
        "badge": "Campus Event"
      }
    ]
  },
  {
    "id": "col_cu_mohali",
    "slug": "chandigarh-university",
    "aliases": [
      "chandigarh",
      "chandigarh-university",
      "cu",
      "cu-mohali",
      "chandigarh-university-punjab",
      "chandigarh-group",
      "cgc"
    ],
    "name": "Chandigarh University",
    "shortName": "CU Mohali",
    "type": "Private University",
    "city": "Mohali",
    "state": "Punjab",
    "establishedYear": 2012,
    "campusArea": "200 Acres",
    "accreditation": "NAAC A+ Accredited (3.28 CGPA), UGC Recognized, ABET & NBA Accredited, AICTE, BCI, PCI",
    "nirfRanking": 27,
    "rating": 4.6,
    "reviewsCount": 920,
    "coverImage": "/images/colleges/cu1.jpg",
    "campusImages": [
      "/images/colleges/cu1.jpg",
      "/images/colleges/cu2.jpeg",
      "/images/colleges/cu3.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Computer Science",
      "BCA",
      "Law",
      "Pharmacy",
      "Universities",
      "Hotel Management",
      "Animation"
    ],
    "feesRange": "₹1.4 Lakh - ₹2.6 Lakh per year",
    "annualFeeNumeric": 180000,
    "hostelFee": "₹90,000 per year",
    "placementRate": "95%",
    "averagePackage": 9.5,
    "highestPackage": 170,
    "entranceExams": [
      "CUCET",
      "JEE Main",
      "CAT",
      "MAT",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "Top NIRF Ranked NAAC A+ University in North India with 900+ Corporate Recruiters",
    "description": "Chandigarh University (CU), Mohali is a globally recognized NAAC A+ accredited private university situated across 200 sprawling acres on NH-05, Mohali (Chandigarh Tricity). Ranked among India's top universities by NIRF (#27 in Universities), CU holds prestigious ABET and NBA accreditations. With 900+ top multinational recruiters (including Microsoft, Google, Amazon, and IBM) visiting campus annually and record international offers up to ₹1.7 Crore, CU is a national leader in higher education and direct admissions.",
    "courses": [
      {
        "id": "c_cu_1",
        "name": "B.Tech in Computer Science & Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 960,
        "annualFee": "₹1,95,000",
        "avgPackage": "₹8.5 LPA",
        "specializations": [
          "Cloud & DevOps (IBM)",
          "AI & Machine Learning",
          "Cybersecurity",
          "Big Data Analytics"
        ],
        "eligibility": "10+2 with PCM (Min 50% aggregate) + CUCET / JEE Main valid rank"
      },
      {
        "id": "c_cu_2",
        "name": "MBA (Industry-Collaborated with IBM, KPMG, Adobe)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 360,
        "annualFee": "₹2,60,000",
        "avgPackage": "₹8.8 LPA",
        "specializations": [
          "Banking & Financial Services",
          "Business Analytics",
          "Strategic HR",
          "Digital Marketing"
        ],
        "eligibility": "Graduation with minimum 50% aggregate + CUCET / CAT / MAT / CMAT"
      },
      {
        "id": "c_cu_3",
        "name": "BCA (Full Stack & Cloud Architecture)",
        "degreeLevel": "Undergraduate",
        "department": "Computer Applications",
        "duration": "3 Years",
        "seats": 360,
        "annualFee": "₹1,20,000",
        "avgPackage": "₹6.2 LPA",
        "specializations": [
          "Web Technologies",
          "Cloud Computing",
          "App Development"
        ],
        "eligibility": "10+2 in any stream with minimum 50% aggregate marks"
      },
      {
        "id": "c_cu_4",
        "name": "B.A. LL.B. (Hons) / B.B.A. LL.B. (Hons)",
        "degreeLevel": "Undergraduate",
        "department": "Law",
        "duration": "5 Years",
        "seats": 180,
        "annualFee": "₹1,60,000",
        "avgPackage": "₹6.5 LPA",
        "specializations": [
          "Criminal Law",
          "Corporate & Commercial Law",
          "Cyber Law"
        ],
        "eligibility": "10+2 in any stream with minimum 50% marks + CUCET / CLAT"
      },
      {
        "id": "c_cu_5",
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "degreeLevel": "Undergraduate",
        "department": "Pharmacy",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "₹1,50,000",
        "avgPackage": "₹5.5 LPA",
        "specializations": [
          "Pharmaceutics",
          "Pharmacology"
        ],
        "eligibility": "10+2 with Physics, Chemistry, Biology/Mathematics (Min 50% marks)"
      }
    ],
    "eligibility": "10+2 with minimum 50% aggregate marks for UG programs; graduation with 50% for PG. Admissions conducted via CUCET national scholarship entrance exam and direct merit counselling.",
    "admissionProcess": [
      "Register online for CUCET entrance examination and counselor session.",
      "Appear for online CUCET test for scholarship evaluation up to 100%.",
      "Course choice locking and provisional seat allotment.",
      "Document verification, fee payment, and campus hostel booking."
    ],
    "recruiters": [
      "Microsoft",
      "Google",
      "Amazon",
      "IBM",
      "Adobe",
      "Cognizant",
      "Deloitte",
      "Flipkart",
      "Oracle",
      "SAP"
    ],
    "facilities": [
      "30+ Industry Sponsored Research Labs",
      "Central Library with 1.5 Lakh Books",
      "Air-Conditioned Hostels for 15,000+ Students",
      "Chandigarh Tricity Transport",
      "Multi-Cuisine Food Courts"
    ],
    "scholarships": "₹170 Crore CUCET scholarship pool offering up to 100% fee waivers for 90%+ scores.",
    "cutoffs": [
      {
        "branch": "CSE AI-ML",
        "round1Rank": 10000,
        "closingRank": 22000
      }
    ],
    "faqs": [
      {
        "q": "What is Chandigarh University's NIRF rank?",
        "a": "Chandigarh University is ranked #27 among all universities in India in the NIRF rankings."
      },
      {
        "q": "How many companies visit Chandigarh University for campus placements?",
        "a": "More than 900 multinational corporate recruiters visit Chandigarh University annually, generating over 9,000+ job offers."
      }
    ],
    "metaTitle": "Chandigarh University Admission 2026: Fees, CUCET, Placements (₹1.7 Cr) & Cutoffs",
    "metaDescription": "Verified guide to Chandigarh University (NAAC A+). Explore B.Tech, MBA, BCA, Law fees, CUCET exam dates, ₹170 LPA highest package, and over 10,000+ job offers in 2026.",
    "news": [
      {
        "id": "news_cu_1",
        "title": "CUCET 2026 Phase 2 Registration Open: Scholarships up to ₹170 Crores Disbursed",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Mandatory entrance and scholarship assessment test for engineering, management, and pharmacy programs active with 100% fee waiver slots.",
        "badge": "Entrance Exam",
        "link": "#enquiry-section"
      },
      {
        "id": "news_cu_2",
        "title": "Chandigarh University Placement Milestone 2026: 10,000+ Job Offers Extended by 1,300 Recruiters",
        "date": "Sep 01, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Record batch outcomes with highest international package touching ₹1.7 Crore and over 4,000+ multiple job offer holders.",
        "badge": "Record Placement",
        "link": "#placements"
      },
      {
        "id": "news_cu_3",
        "title": "QS Asia University Rankings: CU Ranked Among Top 150 Asian Universities",
        "date": "Aug 15, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "University achieves premier international ranking for employer reputation and international student diversity.",
        "badge": "Global Ranking"
      }
    ]
  },
  {
    "id": "col_lpu_phagwara",
    "slug": "lpu-campus",
    "aliases": [
      "lpu",
      "lpu-university",
      "lovely-professional-university",
      "lpu-campus",
      "lpu-phagwara",
      "lpu-jalandhar"
    ],
    "name": "Lovely Professional University",
    "shortName": "LPU Phagwara",
    "type": "Private University",
    "city": "Phagwara",
    "state": "Punjab",
    "establishedYear": 2005,
    "campusArea": "600 Acres",
    "accreditation": "NAAC A++ Accredited (3.68 CGPA), UGC Recognized, ICAR, AICTE, BCI, PCI & COA Approved",
    "nirfRanking": 38,
    "rating": 4.6,
    "reviewsCount": 1150,
    "coverImage": "/images/colleges/lpu1.jpg",
    "campusImages": [
      "/images/colleges/lpu1.jpg",
      "/images/colleges/lpu.webp",
      "/images/colleges/lpu3.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Computer Science",
      "BCA",
      "Law",
      "Pharmacy",
      "Agriculture",
      "Universities",
      "Design",
      "Architecture"
    ],
    "feesRange": "₹1.4 Lakh - ₹2.8 Lakh per year",
    "annualFeeNumeric": 190000,
    "hostelFee": "₹90,000 per year",
    "placementRate": "95%",
    "averagePackage": 9.2,
    "highestPackage": 300,
    "entranceExams": [
      "LPUNEST",
      "JEE Main",
      "CUET",
      "CAT",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "India's Largest 600-Acre NAAC A++ Campus with 30,000+ Students from 50+ Countries",
    "description": "Lovely Professional University (LPU), Phagwara is India's largest single-campus private university, spanning over 600 acres on GT Road between Jalandhar and Phagwara, Punjab. Accredited with NAAC A++ (highest grade 3.68/4) and recognized by UGC, ICAR, AICTE, and BCI, LPU hosts over 30,000 students from 50+ countries. Offering 400+ multidisciplinary programs in B.Tech, MBA, Law, Agriculture, Pharmacy, and Design, LPU boasts international packages touching ₹3 Crore per annum, massive scholarship funds via LPUNEST, and direct counselor admission channels.",
    "courses": [
      {
        "id": "c_lpu_1",
        "name": "B.Tech in Computer Science & Engineering (AI & Machine Learning)",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 1200,
        "annualFee": "₹3,20,000",
        "avgPackage": "₹7.8 LPA",
        "specializations": [
          "Artificial Intelligence & Machine Learning",
          "Data Science",
          "Cyber Security",
          "Full Stack Web"
        ],
        "eligibility": "10+2 with PCM (Min 60% aggregate) + LPUNEST / JEE Main valid rank"
      },
      {
        "id": "c_lpu_2",
        "name": "MBA (Dual Specialization / Global Immersion)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 480,
        "annualFee": "₹4,40,000",
        "avgPackage": "₹8.2 LPA",
        "specializations": [
          "Financial Markets",
          "Digital Marketing",
          "Business Analytics",
          "Supply Chain Management"
        ],
        "eligibility": "Graduation with minimum 55% aggregate + LPUNEST / CAT / MAT / XAT / CMAT"
      },
      {
        "id": "c_lpu_3",
        "name": "B.Des (Fashion Design / Product Design / Interior)",
        "degreeLevel": "Undergraduate",
        "department": "Design",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹2,80,000",
        "avgPackage": "₹6.5 LPA",
        "specializations": [
          "Fashion Design",
          "Product & Industrial Design",
          "User Interface (UI/UX)"
        ],
        "eligibility": "10+2 in any stream with minimum 50% aggregate + LPUNEST / UCEED"
      },
      {
        "id": "c_lpu_4",
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "degreeLevel": "Undergraduate",
        "department": "Pharmacy",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹2,40,000",
        "avgPackage": "₹5.5 LPA",
        "specializations": [
          "Pharmaceutics",
          "Pharmacology",
          "Drug Analysis"
        ],
        "eligibility": "10+2 with Physics, Chemistry, Biology/Maths (Min 60% aggregate) + LPUNEST"
      },
      {
        "id": "c_lpu_5",
        "name": "BCA (Big Data & Cloud Architecture)",
        "degreeLevel": "Undergraduate",
        "department": "Computer Applications",
        "duration": "3 Years",
        "seats": 360,
        "annualFee": "₹1,80,000",
        "avgPackage": "₹5.2 LPA",
        "specializations": [
          "Cloud Systems",
          "Big Data Analytics",
          "Web Technologies"
        ],
        "eligibility": "10+2 in any stream with minimum 50% aggregate marks"
      }
    ],
    "eligibility": "Class 12 with minimum 60% aggregate in PCM/relevant subjects for B.Tech; 55% in graduation for MBA. Direct admission and scholarship allocation governed via LPUNEST and 10+2 merit scores.",
    "admissionProcess": [
      "Submit LPUNEST application online or visit regional counseling office.",
      "Appear for online LPUNEST exam or submit JEE Main / CAT scorecards.",
      "Complete online/in-person counseling, seat allotment, and scholarship locking.",
      "Submit educational credentials, complete fee payment, and reserve hostel accommodation."
    ],
    "recruiters": [
      "Google",
      "Microsoft",
      "Amazon",
      "Cognizant",
      "Capgemini",
      "Apple",
      "Oracle",
      "Cisco",
      "Bosch",
      "Morgan Stanley"
    ],
    "facilities": [
      "Uni-Mall with 100+ Stores & Supermarket",
      "Olympic Size All-Weather Swimming Pool",
      "Indoor Stadium for 10,000 Spectators",
      "Hospital & Emergency Care on Campus",
      "Automated Central Library",
      "Hostels Housing 25,000+ Students"
    ],
    "scholarships": "Up to ₹1.5 Lakh per year scholarship based on LPUNEST score, JEE Main percentile, 12th board marks, and sports achievements.",
    "cutoffs": [
      {
        "branch": "CSE AI-ML",
        "round1Rank": 8000,
        "closingRank": 18000
      }
    ],
    "faqs": [
      {
        "q": "What was the highest package offered to an LPU student?",
        "a": "An LPU student received a record international package offer of ₹3 Crore per annum, with hundreds of domestic offers exceeding ₹20 LPA to ₹64 LPA."
      },
      {
        "q": "Is LPU NAAC A++ accredited?",
        "a": "Yes, Lovely Professional University has been awarded NAAC A++ Grade with an exceptional 3.68 CGPA out of 4, the highest among private universities in India."
      }
    ],
    "metaTitle": "LPU Jalandhar Admission 2026: Fees, LPUNEST, Placements (₹3 Cr) & Courses",
    "metaDescription": "Verified guide for Lovely Professional University (LPU Punjab, NAAC A++). Check B.Tech, MBA, Design, Pharmacy fee structures, LPUNEST scholarship exam, and top international placements.",
    "news": [
      {
        "id": "news_lpu_1",
        "title": "LPUNEST 2026 National Entrance & Scholarship Test Booking Live for Next Phase",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Online test slot booking open for LPUNEST 2026. Top performers qualify for up to ₹6.8 Lakh scholarship concession per student.",
        "badge": "Entrance Exam",
        "link": "#enquiry-section"
      },
      {
        "id": "news_lpu_2",
        "title": "LPU Global Placements 2026: Over 1,150 Recruiters Extend 9,500+ Offers on Campus",
        "date": "Aug 30, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Google, Microsoft, Amazon, Palo Alto Networks recruit top engineering talent with highest international compensation reaching ₹3.0 Crore.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_lpu_3",
        "title": "Olympic Gold Medalist Neeraj Chopra & Indian National Athletes Felicitated on Campus",
        "date": "Aug 14, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "LPU student olympians honored with cash awards and athletic training facility upgrades at Shanti Devi Mittal Sports Complex.",
        "badge": "Sports Honor"
      }
    ]
  },
  {
    "id": "col_4",
    "slug": "iit-delhi",
    "aliases": [
      "indian-institute-of-technology-delhi"
    ],
    "name": "Indian Institute of Technology Delhi",
    "shortName": "IIT Delhi",
    "type": "Public / Institute of National Importance",
    "city": "New Delhi",
    "state": "Delhi NCR",
    "establishedYear": 1961,
    "campusArea": "320 Acres",
    "accreditation": "Institute of Eminence (IoE), AICTE",
    "nirfRanking": 2,
    "rating": 4.9,
    "reviewsCount": 940,
    "coverImage": "/images/colleges/iit-delhi-1.jpg",
    "campusImages": [
      "/images/colleges/iit-delhi-1.jpg",
      "/images/colleges/iit-delhi-2.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Universities"
    ],
    "feesRange": "₹2.2 Lakh - ₹2.5 Lakh per year",
    "annualFeeNumeric": 220000,
    "hostelFee": "₹35,000 per year",
    "placementRate": "97%",
    "averagePackage": 25.8,
    "highestPackage": 120,
    "entranceExams": [
      "JEE Advanced",
      "GATE"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "India's Foremost Epicenter of Technological Breakthroughs and Research",
    "description": "IIT Delhi is a globally acclaimed technology institution located in Hauz Khas, New Delhi. Consistently ranked #2 in NIRF Engineering and recognized as an Institute of Eminence, IIT Delhi is the launchpad for prominent global CEOs, tech visionaries, and researchers.",
    "courses": [
      {
        "id": "c_iitd_1",
        "name": "B.Tech in Computer Science and Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 99,
        "annualFee": "₹2,20,000",
        "avgPackage": "₹28.5 LPA",
        "specializations": [
          "Algorithms & Complexity",
          "Artificial Intelligence",
          "Computer Systems",
          "Cryptography"
        ],
        "eligibility": "10+2 with PCM (75% aggregate) + JEE Advanced All India Rank under 125"
      },
      {
        "id": "c_iitd_2",
        "name": "B.Tech in Electrical Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹2,20,000",
        "avgPackage": "₹22.0 LPA",
        "specializations": [
          "VLSI & Electronic Circuits",
          "Control & Automation",
          "Signal Processing"
        ],
        "eligibility": "10+2 with PCM (75% aggregate) + JEE Advanced All India Rank under 600"
      },
      {
        "id": "c_iitd_3",
        "name": "B.Tech in Mechanical Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 110,
        "annualFee": "₹2,20,000",
        "avgPackage": "₹18.5 LPA",
        "specializations": [
          "Thermodynamics",
          "Robotics & Manufacturing",
          "Computational Mechanics"
        ],
        "eligibility": "10+2 with PCM (75% aggregate) + JEE Advanced All India Rank under 1,800"
      },
      {
        "id": "c_iitd_4",
        "name": "M.Tech in Computer Science & Engineering",
        "degreeLevel": "Postgraduate",
        "department": "Engineering & Tech",
        "duration": "2 Years",
        "seats": 45,
        "annualFee": "₹1,90,000",
        "avgPackage": "₹24.0 LPA",
        "specializations": [
          "Distributed Systems",
          "Machine Learning",
          "Information Security"
        ],
        "eligibility": "B.Tech/B.E. in CSE/IT with qualifying GATE score"
      },
      {
        "id": "c_iitd_5",
        "name": "MBA (Department of Management Studies - DMS IIT Delhi)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 90,
        "annualFee": "₹6,00,000",
        "avgPackage": "₹25.8 LPA",
        "specializations": [
          "Telecommunication Systems Management",
          "Finance",
          "Strategy",
          "Operations"
        ],
        "eligibility": "Bachelor's Degree with minimum 60% aggregate + CAT 98.5+ percentile"
      }
    ],
    "eligibility": "Must qualify JEE Main and rank in top bracket of JEE Advanced. 75% aggregate in 10+2.",
    "admissionProcess": [
      "Qualify JEE Main.",
      "Secure high rank in JEE Advanced.",
      "Participate in JoSAA national counselling.",
      "Physical reporting at Hauz Khas campus."
    ],
    "recruiters": [
      "Google",
      "Apple",
      "Microsoft",
      "Jane Street",
      "Goldman Sachs",
      "McKinsey",
      "BCG",
      "Intel"
    ],
    "facilities": [
      "Central Research Facility",
      "Supercomputer Padum",
      "Design Innovation Centre",
      "Modern Hostels",
      "Gymkhana"
    ],
    "scholarships": "100% Tuition Fee waiver for SC/ST and students with family income under ₹1 Lakh.",
    "cutoffs": [
      {
        "branch": "CSE",
        "round1Rank": 35,
        "closingRank": 115
      }
    ],
    "faqs": [
      {
        "q": "What was the highest package at IIT Delhi?",
        "a": "International offers have exceeded ₹1.2 Crore per annum, with domestic packages touching ₹85 LPA."
      }
    ],
    "metaTitle": "IIT Delhi Admission 2026: Fees, JEE Advanced Cutoffs, Courses & Placements",
    "metaDescription": "Verified 2026 details for IIT Delhi (NIRF #2 Engineering). View B.Tech CSE, Electrical, M.Tech, MBA fees, JEE Advanced closing ranks (~115), 1,275+ job offers, and average CTC ₹23.5 LPA.",
    "news": [
      {
        "id": "news_iitd_1",
        "title": "JoSAA 2026 Seat Allotment: Physical Verification Circular for B.Tech Entrants",
        "date": "Sep 22, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "All candidates allotted seats in JoSAA final round must report to IIT Delhi Hauz Khas campus for document validation and hostel room allocation.",
        "badge": "JoSAA Notice",
        "link": "#admission"
      },
      {
        "id": "news_iitd_2",
        "title": "Office of Career Services Placements 2026: 1,275+ Offers Bagged in Phase 1 with 300+ PPOs",
        "date": "Aug 29, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Google, Microsoft, Goldman Sachs, and Texas Instruments lead campus recruitment with average undergraduate package standing at ₹23.5 LPA.",
        "badge": "Placement Report",
        "link": "#placements"
      },
      {
        "id": "news_iitd_3",
        "title": "IIT Delhi Research Park Announces ₹100 Crore Deep-Tech Incubation Seed Fund",
        "date": "Aug 10, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "New fund earmarked for student and faculty startups working in clean energy, generative AI, and quantum semiconductors.",
        "badge": "Research & Startup"
      }
    ]
  },
  {
    "id": "col_5",
    "slug": "dtu-delhi",
    "aliases": [
      "delhi-technological-university",
      "dce"
    ],
    "name": "Delhi Technological University",
    "shortName": "DTU Delhi",
    "type": "State Government University",
    "city": "New Delhi",
    "state": "Delhi NCR",
    "establishedYear": 1941,
    "campusArea": "164 Acres",
    "accreditation": "NAAC A+ Accredited, NBA",
    "nirfRanking": 29,
    "rating": 4.7,
    "reviewsCount": 650,
    "coverImage": "/images/colleges/dtu1.webp",
    "campusImages": [
      "/images/colleges/dtu1.webp",
      "/images/colleges/dtu2.jpeg",
      "/images/colleges/dtu3.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Universities"
    ],
    "feesRange": "₹1.9 Lakh - ₹2.3 Lakh per year",
    "annualFeeNumeric": 210000,
    "hostelFee": "₹52,000 per year",
    "placementRate": "93%",
    "averagePackage": 15.4,
    "highestPackage": 62.5,
    "entranceExams": [
      "JEE Main",
      "JAC Delhi",
      "GATE"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "Pioneering Technical Legacy Formerly Known as Delhi College of Engineering (DCE)",
    "description": "Delhi Technological University (DTU), formerly Delhi College of Engineering, has a rich legacy dating back to 1941. Situated on a sprawling 164-acre campus in Rohini, Delhi, DTU is renowned for its intense student engineering societies, super-mileage vehicle teams, and phenomenal placements.",
    "courses": [
      {
        "id": "c_dtu_1",
        "name": "B.Tech in Computer Science and Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 360,
        "annualFee": "₹2,15,000",
        "avgPackage": "₹21.5 LPA",
        "specializations": [
          "Software Engineering",
          "Artificial Intelligence",
          "Cloud Computing"
        ],
        "eligibility": "10+2 with PCM (60% aggregate) + JEE Main CRL through JAC Delhi counselling"
      },
      {
        "id": "c_dtu_2",
        "name": "B.Tech in Information Technology",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹2,15,000",
        "avgPackage": "₹19.8 LPA",
        "specializations": [
          "Cyber Security",
          "Mobile Computing",
          "Data Systems"
        ],
        "eligibility": "10+2 with PCM + JAC Delhi / JEE Main Rank"
      },
      {
        "id": "c_dtu_3",
        "name": "B.Tech in Electronics & Communication Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹2,15,000",
        "avgPackage": "₹16.5 LPA",
        "specializations": [
          "VLSI Design",
          "Embedded Systems",
          "Optical Communications"
        ],
        "eligibility": "10+2 with PCM + JAC Delhi valid rank"
      },
      {
        "id": "c_dtu_4",
        "name": "MBA (Delhi School of Management - DSM DTU)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹1,85,000",
        "avgPackage": "₹10.8 LPA",
        "specializations": [
          "Supply Chain",
          "Information Technology Management",
          "Finance",
          "Marketing"
        ],
        "eligibility": "Graduation with minimum 60% aggregate + CAT/MAT score"
      }
    ],
    "eligibility": "Admissions to B.Tech are conducted via Joint Admission Counselling (JAC) Delhi based on JEE Main CRL ranks (85% Delhi Region Quota, 15% Outside Delhi).",
    "admissionProcess": [
      "Appear for JEE Main exam.",
      "Register for JAC Delhi counselling.",
      "Choice filling of DTU engineering branches.",
      "Seat allotment and physical document verification."
    ],
    "recruiters": [
      "Uber",
      "Google",
      "Amazon",
      "Samsung",
      "Texas Instruments",
      "Morgan Stanley",
      "Adobe"
    ],
    "facilities": [
      "Knowledge Park",
      "Central Computer Centre",
      "14 Student Hostels",
      "Open Air Theatre",
      "Sports Stadium"
    ],
    "scholarships": "Delhi Government Merit-cum-Means Financial Assistance Scheme.",
    "cutoffs": [
      {
        "branch": "Computer Engineering (Delhi)",
        "round1Rank": 7800,
        "closingRank": 11500
      },
      {
        "branch": "Computer Engineering (Outside Delhi)",
        "round1Rank": 2400,
        "closingRank": 3900
      }
    ],
    "faqs": [
      {
        "q": "What is the quota division for DTU admissions?",
        "a": "85% of total seats are reserved for students passing 12th from schools located in the National Capital Territory of Delhi, and 15% for Outside Delhi candidates."
      }
    ],
    "metaTitle": "DTU Delhi Admission 2026: Fees, JAC Cutoffs, Courses & Placements (₹82 LPA)",
    "metaDescription": "Verified 2026 admission details for Delhi Technological University (DTU Delhi). View B.Tech CSE, IT, ECE fees, JAC Delhi cutoff ranks, 1,800+ placement offers, and highest package of ₹82 LPA.",
    "news": [
      {
        "id": "news_dtu_1",
        "title": "JAC Delhi 2026 Counselling: Upgradation Round Cutoffs & Physical Verification Dates",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Joint Admission Counselling Delhi releases final round branch upgradation list for Delhi and Outside Delhi region candidates.",
        "badge": "JAC Delhi",
        "link": "#admission"
      },
      {
        "id": "news_dtu_2",
        "title": "DTU Placements 2026: Over 400 Tech & Financial Firms Extend 1,800+ Job Offers",
        "date": "Aug 28, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Apple, Atlassian, Adobe, and Goldman Sachs conclude Day 1 recruitment with highest domestic package touching ₹82 LPA.",
        "badge": "Placement Record",
        "link": "#placements"
      },
      {
        "id": "news_dtu_3",
        "title": "Invictus 2026: Annual Technical Fest of DTU Welcomes 30,000+ Innovators",
        "date": "Aug 12, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Asia's leading college robotics hackathons and drone racing challenges conducted on Bawana Road campus.",
        "badge": "Tech Fest"
      }
    ]
  },
  {
    "id": "col_6",
    "slug": "rv-college-of-engineering-bangalore",
    "aliases": [
      "rvce",
      "rvce-bangalore"
    ],
    "name": "RV College of Engineering",
    "shortName": "RVCE Bangalore",
    "type": "Autonomous Private College (VTU)",
    "city": "Bangalore",
    "state": "Karnataka",
    "establishedYear": 1963,
    "campusArea": "52 Acres",
    "accreditation": "NAAC A+ Grade, NBA Tier-1",
    "nirfRanking": 43,
    "rating": 4.7,
    "reviewsCount": 520,
    "coverImage": "/images/colleges/rvc1.jpg",
    "campusImages": [
      "/images/colleges/rvc1.jpg",
      "/images/colleges/rvce.jpeg",
      "/images/colleges/rvc.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Computer Science",
      "MCA"
    ],
    "feesRange": "₹2.5 Lakh - ₹4.5 Lakh per year",
    "annualFeeNumeric": 280000,
    "hostelFee": "₹1,10,000 per year",
    "placementRate": "95%",
    "averagePackage": 14.5,
    "highestPackage": 58,
    "entranceExams": [
      "KCET",
      "COMEDK UGET",
      "Management Quota",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "Bangalore's Highest Ranked Private Engineering Institution",
    "description": "Located on Mysore Road in Bengaluru, RV College of Engineering (RVCE) is considered the gold standard of private engineering education in South India. Benefiting directly from its location in India's Silicon Valley, RVCE boasts near 100% placement records in elite tech product firms.",
    "courses": [
      {
        "id": "c_rvce_1",
        "name": "B.E. in Computer Science and Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹2,60,000 (Govt/COMEDK)",
        "avgPackage": "₹18.2 LPA",
        "specializations": [
          "Artificial Intelligence",
          "Cybersecurity",
          "High Performance Computing"
        ],
        "eligibility": "10+2 with PCM (Min 60% aggregate) + KCET / COMEDK UGET valid rank"
      },
      {
        "id": "c_rvce_2",
        "name": "B.E. in Information Science and Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹2,60,000",
        "avgPackage": "₹16.5 LPA",
        "specializations": [
          "Cloud Software",
          "Data Engineering"
        ],
        "eligibility": "10+2 with PCM + KCET / COMEDK Rank"
      },
      {
        "id": "c_rvce_3",
        "name": "B.E. in Electronics & Communication Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹2,40,000",
        "avgPackage": "₹14.0 LPA",
        "specializations": [
          "VLSI Design",
          "Embedded Systems",
          "Robotics"
        ],
        "eligibility": "10+2 with PCM + KCET / COMEDK valid rank"
      },
      {
        "id": "c_rvce_4",
        "name": "M.Tech in VLSI Design & Embedded Systems",
        "degreeLevel": "Postgraduate",
        "department": "Engineering & Tech",
        "duration": "2 Years",
        "seats": 30,
        "annualFee": "₹1,40,000",
        "avgPackage": "₹15.0 LPA",
        "specializations": [
          "ASIC Design",
          "FPGA Verification"
        ],
        "eligibility": "B.E./B.Tech in relevant branch with valid Karnataka PGCET / GATE score"
      }
    ],
    "eligibility": "Minimum 50% in 10+2 with Physics, Mathematics, and Chemistry. Valid COMEDK, KCET, or institutional merit management quota pathway.",
    "admissionProcess": [
      "Appear for Karnataka CET (Karnataka students) or COMEDK UGET (All India).",
      "Attend centralised counselling rounds or apply through institutional quota.",
      "Allotted students report to RVCE Bangalore campus with original testimonials."
    ],
    "recruiters": [
      "Atlassian",
      "Cisco",
      "Amazon",
      "Intel",
      "Bosch",
      "Directi",
      "Goldman Sachs",
      "Nvidia"
    ],
    "facilities": [
      "Nvidia Deep Learning Lab",
      "Cisco Networking Academy",
      "Clean Energy Centre",
      "Hostels",
      "Robotics Club"
    ],
    "scholarships": "Rashtreeya Sikshana Samithi Trust (RSST) merit-cum-means awards.",
    "cutoffs": [
      {
        "branch": "CSE (COMEDK)",
        "round1Rank": 280,
        "closingRank": 420
      },
      {
        "branch": "ISE (COMEDK)",
        "round1Rank": 520,
        "closingRank": 780
      }
    ],
    "faqs": [
      {
        "q": "What is the COMEDK cutoff for RVCE CSE?",
        "a": "RVCE CSE typically closes within rank 400 to 500 in COMEDK round 1."
      }
    ],
    "metaTitle": "RV College of Engineering Bangalore Admission 2026: Fees, KCET Cutoffs & Placements",
    "metaDescription": "Verified guide to RV College of Engineering (RVCE Bangalore). Check B.E. in CSE, ISE, ECE fees, KCET / COMEDK cutoff ranks, 94% placement record with ₹18.2 LPA average package, and recruiters.",
    "news": [
      {
        "id": "news_rvce_1",
        "title": "COMEDK & KCET 2026 Cutoff Ranks: Final Seat Allocation Schedules Released",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Karnataka Examinations Authority and COMEDK announce Round 2 reporting guidelines for engineering seats at Mysore Road campus.",
        "badge": "Counselling Schedule",
        "link": "#admission"
      },
      {
        "id": "news_rvce_2",
        "title": "Bangalore Tech Hub Placements: 94% Batch Placed with Average Package of ₹14.5 LPA",
        "date": "Sep 02, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Over 280 premier IT and core electronics companies like Cisco, Texas Instruments, Intel, and Amazon recruit on campus.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_rvce_3",
        "title": "RVCE Autonomous Curriculum Updated with Generative AI and Quantum Computing Labs",
        "date": "Aug 15, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Academic council introduces specialized industry elective tracks in collaboration with Samsung R&D and IBM.",
        "badge": "Curriculum Update"
      }
    ]
  },
  {
    "id": "col_7",
    "slug": "iim-ahmedabad",
    "aliases": [
      "iima"
    ],
    "name": "Indian Institute of Management Ahmedabad",
    "shortName": "IIM Ahmedabad",
    "type": "Public / Institute of National Importance",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "establishedYear": 1961,
    "campusArea": "102 Acres",
    "accreditation": "EQUIS, AACSB Accredited",
    "nirfRanking": 1,
    "rating": 4.95,
    "reviewsCount": 1100,
    "coverImage": "/images/colleges/iim-ahmedabad.jpg",
    "campusImages": [
      "/images/colleges/iim-ahmedabad.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Management",
      "MBA",
      "Universities"
    ],
    "feesRange": "₹25 Lakh - ₹28 Lakh total program fee",
    "annualFeeNumeric": 1300000,
    "hostelFee": "Included in course fee",
    "placementRate": "100%",
    "averagePackage": 34.2,
    "highestPackage": 115,
    "entranceExams": [
      "CAT",
      "GMAT"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "India's Pinnacle Business School and Harvard-Style Case Pedagogy Hub",
    "description": "The Indian Institute of Management Ahmedabad (IIMA) is widely acknowledged as the leading business school in the Asia-Pacific region. Ranked #1 in NIRF Management, IIMA's two-year PGP program produces global corporate leaders, policy shapers, and unicorn founders.",
    "courses": [
      {
        "id": "c_iima_1",
        "name": "Post Graduate Programme in Management (PGP / Flagship MBA)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 395,
        "annualFee": "₹13,75,000",
        "avgPackage": "₹35.5 LPA",
        "specializations": [
          "Strategic Consulting",
          "Investment Banking & Finance",
          "Brand Strategy",
          "Technology & Product"
        ],
        "eligibility": "Bachelor's Degree in any discipline with min 50% marks + CAT 99.5+ percentile + AWT & PI"
      },
      {
        "id": "c_iima_2",
        "name": "PGP in Food and Agri-Business Management (PGP-FABM)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 50,
        "annualFee": "₹11,50,000",
        "avgPackage": "₹22.8 LPA",
        "specializations": [
          "Agri-Commodities",
          "Rural Marketing",
          "Food Supply Chain"
        ],
        "eligibility": "Bachelor's degree in agriculture, allied sciences, or any discipline + CAT/GMAT score"
      },
      {
        "id": "c_iima_3",
        "name": "ePGP (Online & Campus Blended MBA for Working Executives)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 60,
        "annualFee": "₹10,00,000",
        "avgPackage": "₹28.0 LPA",
        "specializations": [
          "Executive Strategy",
          "Digital Leadership"
        ],
        "eligibility": "Graduation with minimum 3 years of managerial/professional work experience"
      }
    ],
    "eligibility": "Graduate degree with minimum 50% or equivalent CGPA. Admission is strictly via CAT score, Analytical Writing Test (AWT), and Personal Interview (PI).",
    "admissionProcess": [
      "Appear for CAT examination.",
      "Shortlisting based on CAT percentile, 10th, 12th, and graduation marks, plus academic diversity.",
      "Attend Analytical Writing Test (AWT) & Personal Interview.",
      "Final offer release and matriculation."
    ],
    "recruiters": [
      "McKinsey & Co",
      "Boston Consulting Group",
      "Bain & Company",
      "Goldman Sachs",
      "Morgan Stanley",
      "Tata Administrative Services"
    ],
    "facilities": [
      "Vikram Sarabhai Library",
      "Historic Louis Kahn Campus & New Campus",
      "Case Method Discussion Halls",
      "Residential Dorms"
    ],
    "scholarships": "Special Need-Based Scholarship Scheme (SNBSS) ensuring no student is deprived due to economic hardship.",
    "cutoffs": [
      {
        "branch": "PGP General",
        "round1Rank": 99.5,
        "closingRank": 99.85
      }
    ],
    "faqs": [
      {
        "q": "What is the CAT percentile required for IIM Ahmedabad?",
        "a": "While the minimum eligibility cutoff is 80 percentile, competitive calls for general engineering candidates typically start at 99.6+ percentile."
      }
    ],
    "metaTitle": "IIM Ahmedabad Admission 2026: Fees (₹27.5L), CAT Cutoffs, Placements (₹35.5L)",
    "metaDescription": "Verified guide to IIM Ahmedabad (NIRF #1 B-School). Explore PGP MBA fees, CAT qualifying percentiles, 100% placement records with average salary ₹35.5 LPA, and admission interview dates.",
    "news": [
      {
        "id": "news_iima_1",
        "title": "CAT 2025/2026 Shortlisting Criteria: AWT and Personal Interview Stage Schedule",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "IIM Ahmedabad announces selection criteria for PGP 2026-28 batch. CAT score holds 65% weightage alongside academic profile ratings.",
        "badge": "CAT Cutoff",
        "link": "#admission"
      },
      {
        "id": "news_iima_2",
        "title": "Final Placement Report 2026: 100% Placement Record with Average Salary Touching ₹35.5 LPA",
        "date": "Sep 01, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "McKinsey, BCG, Bain, Goldman Sachs, and Blackstone lead recruitment; median salary recorded at ₹34.59 LPA with top domestic package exceeding ₹1.1 Crore.",
        "badge": "100% Placements",
        "link": "#placements"
      },
      {
        "id": "news_iima_3",
        "title": "IIM-A Center for Digital Transformation Publishes Landmark Policy Report on AI in India",
        "date": "Aug 18, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Faculty research group presents blueprint on enterprise artificial intelligence adoption to corporate and government stakeholders.",
        "badge": "Research Publication"
      }
    ]
  },
  {
    "id": "col_8",
    "slug": "symbiosis-institute-of-business-management-pune",
    "aliases": [
      "sibm-pune",
      "sibm"
    ],
    "name": "Symbiosis Institute of Business Management",
    "shortName": "SIBM Pune",
    "type": "Private Deemed University",
    "city": "Pune",
    "state": "Maharashtra",
    "establishedYear": 1978,
    "campusArea": "300 Acres",
    "accreditation": "NAAC A++ Grade (CGPA 3.58/4)",
    "nirfRanking": 17,
    "rating": 4.8,
    "reviewsCount": 460,
    "coverImage": "/images/colleges/symbiosis-institute-of-business-management-pune.jpg",
    "campusImages": [
      "/images/colleges/symbiosis-institute-of-business-management-pune.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Management",
      "MBA",
      "Universities"
    ],
    "feesRange": "₹12 Lakh - ₹14 Lakh per year",
    "annualFeeNumeric": 1320000,
    "hostelFee": "₹1,45,000 per year",
    "placementRate": "100%",
    "averagePackage": 26.7,
    "highestPackage": 49,
    "entranceExams": [
      "SNAP (Symbiosis National Aptitude Test)"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "Hilltop Lavale Campus Delivering Leadership in Marketing, Finance & HR",
    "description": "Nestled on the scenic hills of Lavale in Pune, SIBM Pune is the flagship business school of Symbiosis International (Deemed University). Known for student-driven governance, premier executive mentorship, and FMCG recruitments, it stands among India's top 15 B-schools.",
    "courses": [
      {
        "id": "c_sibm_1",
        "name": "MBA (Finance, Marketing, Human Resources, Operations)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 180,
        "annualFee": "₹12,80,000",
        "avgPackage": "₹28.2 LPA",
        "specializations": [
          "Marketing Management",
          "Financial Management",
          "Human Resource Management",
          "Operations & Supply Chain"
        ],
        "eligibility": "Bachelor's Degree with minimum 50% aggregate marks (45% for SC/ST) + SNAP 98.5+ percentile"
      },
      {
        "id": "c_sibm_2",
        "name": "MBA in Innovation & Entrepreneurship (MBA-I&E)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 60,
        "annualFee": "₹9,50,000",
        "avgPackage": "₹15.8 LPA",
        "specializations": [
          "Venture Capital",
          "Startup Incubation",
          "Corporate Intrapreneurship"
        ],
        "eligibility": "Graduation with minimum 50% aggregate marks + SNAP Scorecard"
      }
    ],
    "eligibility": "Graduation with minimum 50% marks (45% for SC/ST). Candidates must qualify the Symbiosis National Aptitude Test (SNAP).",
    "admissionProcess": [
      "Register and appear for SNAP exam.",
      "Apply to SIBM Pune specifically.",
      "Shortlisted candidates undergo Group Exercise (GE) and Personal Interaction (PI).",
      "Merit list published based on SNAP (50%) + GE-PI (50%)."
    ],
    "recruiters": [
      "Hindustan Unilever",
      "P&G",
      "ITC",
      "Barclays",
      "JPMorgan Chase",
      "Accenture Strategy",
      "Google"
    ],
    "facilities": [
      "Bicycle-friendly Hill Campus",
      "Central Amphitheatre",
      "Modern Library",
      "Hostels with Valley Views"
    ],
    "scholarships": "Symbiosis Foundation Merit Scholarships for SNAP toppers.",
    "cutoffs": [
      {
        "branch": "MBA Core",
        "round1Rank": 98.2,
        "closingRank": 98.7
      }
    ],
    "faqs": [
      {
        "q": "What SNAP cutoff is needed for SIBM Pune?",
        "a": "The expected SNAP cutoff for SIBM Pune is around 98.5+ percentile for the General category."
      }
    ],
    "metaTitle": "SIBM Pune Admission 2026: Fees, SNAP Cutoffs, MBA Placements (₹28.2 LPA)",
    "metaDescription": "Verified 2026 guide for SIBM Pune (Symbiosis Institute of Business Management). View MBA fees, SNAP cutoff percentiles (98.5+), average package ₹28.2 LPA, and GE-PI-WAT schedules.",
    "news": [
      {
        "id": "news_sibm_1",
        "title": "SNAP 2026 Registration Live: SIBM Pune Announces Shortlist Cutoffs and GE-PI-WAT Dates",
        "date": "Sep 24, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Symbiosis National Aptitude Test registrations underway for MBA 2026-28 batch. Expected cutoff for flagship MBA stands at 98.5 percentile.",
        "badge": "SNAP Notice",
        "link": "#enquiry-section"
      },
      {
        "id": "news_sibm_2",
        "title": "Corporate Recruitment Drive 2026: Over 100 Marquee Companies Extend 210+ PPOs and Final Offers",
        "date": "Aug 29, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Barclays, JP Morgan, Accenture Strategy, ITC, and Godrej recruit management graduates with highest package touching ₹49 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_sibm_3",
        "title": "Symbiosis Lavale Hilltop Campus Hosts National Marketing Conclave on Omni-Channel Retail",
        "date": "Aug 11, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Industry CXOs from FMCG and retail giants address student delegates on emerging digital consumer behavior.",
        "badge": "Leadership Summit"
      }
    ]
  },
  {
    "id": "col_9",
    "slug": "aiims-new-delhi",
    "aliases": [
      "aiims-delhi"
    ],
    "name": "All India Institute of Medical Sciences",
    "shortName": "AIIMS New Delhi",
    "type": "Autonomous Apex Medical Institute",
    "city": "New Delhi",
    "state": "Delhi NCR",
    "establishedYear": 1956,
    "campusArea": "115 Acres",
    "accreditation": "MCI/NMC Recognized, Institute of National Importance",
    "nirfRanking": 1,
    "rating": 4.98,
    "reviewsCount": 1420,
    "coverImage": "/images/colleges/aiims-new-delhi.jpg",
    "campusImages": [
      "/images/colleges/aiims-new-delhi.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Medical",
      "Universities"
    ],
    "feesRange": "₹1,628 total course fee",
    "annualFeeNumeric": 1628,
    "hostelFee": "Nominal (~₹500 per year)",
    "placementRate": "100%",
    "averagePackage": 18,
    "highestPackage": 45,
    "entranceExams": [
      "NEET UG",
      "INI CET"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "India's Apex Institution for Medical Science, Healthcare and Clinical Research",
    "description": "AIIMS New Delhi is the pinnacle of healthcare education in India. Ranked consistently as the #1 medical institute in India, AIIMS combines rigorous clinical training, subsidized healthcare for millions, and cutting-edge biomedical research.",
    "courses": [
      {
        "id": "c_aiims_1",
        "name": "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
        "degreeLevel": "Undergraduate",
        "department": "Medical & Health Sciences",
        "duration": "5.5 Years (Inc. 1 Yr Compulsory Rotatory Internship)",
        "seats": 125,
        "annualFee": "₹1,628 (Total Course Fee ₹6,800)",
        "avgPackage": "₹14.0 LPA (Resident Doctor / Internship Stipend ₹30,070/mo)",
        "specializations": [
          "General Medicine",
          "Surgery",
          "Pediatrics",
          "Obstetrics & Gynecology",
          "Radiodiagnosis"
        ],
        "eligibility": "10+2 with Physics, Chemistry, Biology (Min 60% aggregate) + NEET UG All India Rank under 51 (General)"
      },
      {
        "id": "c_aiims_2",
        "name": "MD / MS in Internal Medicine, General Surgery, Radiology, Pediatrics",
        "degreeLevel": "Postgraduate",
        "department": "Medical & Health Sciences",
        "duration": "3 Years",
        "seats": 210,
        "annualFee": "₹2,027",
        "avgPackage": "Senior Resident Stipend: ₹1,10,000 per month",
        "specializations": [
          "Radiodiagnosis",
          "Cardiology",
          "Neurology",
          "Orthopedics",
          "Anesthesiology"
        ],
        "eligibility": "MBBS degree recognized by NMC + 1-year internship + INI-CET top percentile"
      },
      {
        "id": "c_aiims_3",
        "name": "B.Sc (Hons) in Nursing",
        "degreeLevel": "Undergraduate",
        "department": "Nursing & Health Sciences",
        "duration": "4 Years",
        "seats": 96,
        "annualFee": "₹1,200",
        "avgPackage": "₹6.5 LPA",
        "specializations": [
          "Critical Care Nursing",
          "Oncology Nursing",
          "Pediatric Nursing"
        ],
        "eligibility": "10+2 with PCB (Min 55% aggregate) + AIIMS B.Sc Nursing National Entrance Examination"
      }
    ],
    "eligibility": "Candidates must be at least 17 years old with 60% aggregate in PCB in Class 12. Admission to MBBS is strictly through NEET UG All India Quota counselling.",
    "admissionProcess": [
      "Clear NEET UG with top All India Rank (AIR 1 - 60 for General category).",
      "Participate in Medical Counselling Committee (MCC) 15% AIQ rounds.",
      "Report to Ansari Nagar campus for clinical fitness check and documentation."
    ],
    "recruiters": [
      "Apollo Hospitals",
      "Max Healthcare",
      "Fortis",
      "NHS UK",
      "Johns Hopkins",
      "WHO"
    ],
    "facilities": [
      "Trauma Centre",
      "National Brain Research Lab",
      "Residential Hostels",
      "Advanced Surgical Simulators"
    ],
    "scholarships": "Government of India scholarships and research fellowships.",
    "cutoffs": [
      {
        "branch": "MBBS",
        "round1Rank": 1,
        "closingRank": 55
      }
    ],
    "faqs": [
      {
        "q": "What is the annual MBBS fee at AIIMS Delhi?",
        "a": "The total 5.5-year MBBS fee including hostel is under ₹6,000, heavily subsidized by the Government of India."
      }
    ],
    "metaTitle": "AIIMS New Delhi Admission 2026: Fees (₹6,800), NEET Cutoffs (AIR 51), MBBS",
    "metaDescription": "Verified guide to AIIMS New Delhi (NIRF #1 Medical). Explore MBBS total course fees of ~₹6,800, NEET UG closing rank (AIR 1-51), 2,500-bed hospital facilities, and MD/MS INI-CET cutoffs.",
    "news": [
      {
        "id": "news_aiims_1",
        "title": "NEET UG 2026 Round 1 MCC Seat Allotment: Document Verification and Medical Examination at Ansari Nagar",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Medical Counselling Committee issues provisional allotment list for AIIMS New Delhi (Round 1 General cutoff: AIR 51). Candidates must report to Academic Section.",
        "badge": "NEET Allotment",
        "link": "#admission"
      },
      {
        "id": "news_aiims_2",
        "title": "AIIMS Delhi Robotic Surgery Center Performs 10,000th Minimally Invasive Clinical Procedure",
        "date": "Sep 05, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Milestone achieved across urology, gastrointestinal, and oncological surgeries, underscoring premier training exposure for resident surgeons.",
        "badge": "Clinical Milestone"
      },
      {
        "id": "news_aiims_3",
        "title": "INI-CET July 2026 Session Counselling & Specialty Seat Allotment Matrix Released",
        "date": "Aug 16, 2026",
        "category": "Exam",
        "isUrgent": false,
        "summary": "Academic board publishes vacant seat matrix for post-graduate MD/MS/DM (6 Years) residency programs.",
        "badge": "INI-CET Notice"
      }
    ]
  },
  {
    "id": "col_10",
    "slug": "national-law-school-of-india-university-bangalore",
    "aliases": [
      "nlsiu",
      "nlsiu-bangalore"
    ],
    "name": "National Law School of India University",
    "shortName": "NLSIU Bangalore",
    "type": "State Autonomous Law University",
    "city": "Bangalore",
    "state": "Karnataka",
    "establishedYear": 1987,
    "campusArea": "23 Acres",
    "accreditation": "Bar Council of India (BCI) Recognized, NAAC A Grade",
    "nirfRanking": 1,
    "rating": 4.9,
    "reviewsCount": 390,
    "coverImage": "/images/colleges/national-law-school-of-india-university-bangalore.jpg",
    "campusImages": [
      "/images/colleges/national-law-school-of-india-university-bangalore.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Law",
      "Universities"
    ],
    "feesRange": "₹3.5 Lakh - ₹4.0 Lakh per year",
    "annualFeeNumeric": 375000,
    "hostelFee": "₹80,000 per year",
    "placementRate": "98%",
    "averagePackage": 17.5,
    "highestPackage": 45,
    "entranceExams": [
      "CLAT (Common Law Admission Test)"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "The Premier National Law School and Fountainhead of Modern Indian Legal Education",
    "description": "Established in 1987 in Nagarbhavi, Bangalore, NLSIU is India's foremost institution for legal studies. It pioneered the five-year integrated B.A., LL.B. (Hons.) curriculum in India and consistently ranks #1 across NIRF Law rankings.",
    "courses": [
      {
        "id": "c_nlsiu_1",
        "name": "B.A. LL.B. (Hons) - 5-Year Integrated Law Program",
        "degreeLevel": "Undergraduate",
        "department": "Law",
        "duration": "5 Years",
        "seats": 240,
        "annualFee": "₹3,85,000",
        "avgPackage": "₹18.0 LPA",
        "specializations": [
          "Corporate & Commercial Law",
          "Constitutional Law",
          "International Law",
          "Intellectual Property"
        ],
        "eligibility": "10+2 in any stream with minimum 45% aggregate + CLAT All India Rank under 114"
      },
      {
        "id": "c_nlsiu_2",
        "name": "LL.M. (Master of Laws in Commercial / Public Law)",
        "degreeLevel": "Postgraduate",
        "department": "Law",
        "duration": "1 Year",
        "seats": 100,
        "annualFee": "₹2,75,000",
        "avgPackage": "₹14.5 LPA",
        "specializations": [
          "Business Laws",
          "Human Rights Law"
        ],
        "eligibility": "LL.B. degree or equivalent with min 50% marks + CLAT PG Rank under 80"
      },
      {
        "id": "c_nlsiu_3",
        "name": "Master of Public Policy (MPP)",
        "degreeLevel": "Postgraduate",
        "department": "Public Policy",
        "duration": "2 Years",
        "seats": 60,
        "annualFee": "₹2,50,000",
        "avgPackage": "₹12.5 LPA",
        "specializations": [
          "Economic Policy",
          "Regulatory Governance",
          "Social Impact"
        ],
        "eligibility": "Bachelor's degree in any discipline with minimum 50% aggregate + NLSAT-PP"
      }
    ],
    "eligibility": "Successful completion of 10+2 with at least 45% marks (40% for SC/ST). Selection is purely on the basis of merit in the Common Law Admission Test (CLAT).",
    "admissionProcess": [
      "Appear for national CLAT exam.",
      "Register for Consortium of NLUs counselling.",
      "Seat allocation based on CLAT ranking.",
      "Formal admission completion at Bangalore campus."
    ],
    "recruiters": [
      "Shardul Amarchand Mangaldas",
      "Cyril Amarchand Mangaldas",
      "AZB & Partners",
      "Trilegal",
      "Khaitan & Co",
      "Herbert Smith Freehills",
      "Linklaters"
    ],
    "facilities": [
      "Sri Narayan Rao Melgiri Memorial National Law Library",
      "Moot Court Halls",
      "Hostels with Wi-Fi",
      "Legal Services Clinic"
    ],
    "scholarships": "Need-based financial aid ensuring eligible students receive up to 100% waiver on tuition and accommodation.",
    "cutoffs": [
      {
        "branch": "BA LLB (Hons)",
        "round1Rank": 1,
        "closingRank": 95
      }
    ],
    "faqs": [
      {
        "q": "What rank is required in CLAT for NLSIU Bangalore?",
        "a": "For General category candidates, NLSIU Bangalore typically closes within the top 95 to 110 All India Ranks."
      }
    ],
    "metaTitle": "NLSIU Bangalore Admission 2026: Fees, CLAT Cutoffs (Rank 1-114), BA LLB & LLM",
    "metaDescription": "Verified guide to National Law School of India University (NLSIU Bangalore, NIRF #1 Law). Check BA LLB fees, CLAT closing ranks (~114), 100% top law firm placements, and scholarships.",
    "news": [
      {
        "id": "news_nlsiu_1",
        "title": "CLAT 2026 Seat Allotment Round 1: NLSIU Admission Formalities and Hostel Reservation Live",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Consortium of NLUs publishes Round 1 seat allocation. Selected candidates must pay institutional advance fee and complete online dossier validation.",
        "badge": "CLAT Notice",
        "link": "#admission"
      },
      {
        "id": "news_nlsiu_2",
        "title": "Campus Recruitment 2026: Tier-1 Indian & Magic Circle International Law Firms Conclude Day Zero",
        "date": "Sep 02, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Shardul Amarchand Mangaldas, Cyril Amarchand, Trilegal, and Linklaters London recruit 100% of the participating graduating law batch with average CTC of ₹18 LPA.",
        "badge": "Legal Placement",
        "link": "#placements"
      },
      {
        "id": "news_nlsiu_3",
        "title": "NLSIU Nagarbhavi Campus Expansion: New 500-Seater Library & Moot Court Auditorium Inaugurated",
        "date": "Aug 19, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Chief Justice of India inaugurates state-of-the-art legal research commons and digital library wing.",
        "badge": "Infrastructure"
      }
    ]
  },
  {
    "id": "col_11",
    "slug": "iit-bombay",
    "aliases": [
      "iitb"
    ],
    "name": "Indian Institute of Technology Bombay",
    "shortName": "IIT Bombay",
    "type": "Public / Institute of National Importance",
    "city": "Mumbai",
    "state": "Maharashtra",
    "establishedYear": 1958,
    "campusArea": "550 Acres",
    "accreditation": "Institute of Eminence, AICTE",
    "nirfRanking": 3,
    "rating": 4.95,
    "reviewsCount": 1250,
    "coverImage": "/images/colleges/iit-bombay-1.jpeg",
    "campusImages": [
      "/images/colleges/iit-bombay-1.jpeg",
      "/images/colleges/iit-bombay-2.jpg",
      "/images/colleges/iit-bombay-3.avif"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Universities"
    ],
    "feesRange": "₹2.2 Lakh - ₹2.4 Lakh per year",
    "annualFeeNumeric": 228000,
    "hostelFee": "₹38,000 per year",
    "placementRate": "98%",
    "averagePackage": 27.5,
    "highestPackage": 140,
    "entranceExams": [
      "JEE Advanced",
      "GATE",
      "CEED"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "The Foremost Choice for Top 100 JEE Advanced Rankers Located in Powai",
    "description": "Located near Powai Lake in Mumbai, IIT Bombay is celebrated as India's dream technical university. Known for unmatched research facilities, legendary entrepreneurship culture, and hosting Asia's largest college festival (Mood Indigo), IIT Bombay shapes the vanguard of engineering and deep-tech founders.",
    "courses": [
      {
        "id": "c_iitb_1",
        "name": "B.Tech in Computer Science and Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹2,68,000",
        "avgPackage": "₹32.5 LPA",
        "specializations": [
          "Machine Learning & Data Science",
          "Theoretical Computer Science",
          "Cyber Security",
          "Quantum Computing"
        ],
        "eligibility": "10+2 with PCM (75% aggregate) + JEE Advanced All India Rank under 67"
      },
      {
        "id": "c_iitb_2",
        "name": "B.Tech in Electrical Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 110,
        "annualFee": "₹2,68,000",
        "avgPackage": "₹24.8 LPA",
        "specializations": [
          "Microelectronics & VLSI",
          "Communication & Signal Processing",
          "Power Systems"
        ],
        "eligibility": "10+2 with PCM + JEE Advanced All India Rank under 300"
      },
      {
        "id": "c_iitb_3",
        "name": "B.Tech in Mechanical Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹2,68,000",
        "avgPackage": "₹20.5 LPA",
        "specializations": [
          "Thermal & Fluid Sciences",
          "Design Engineering",
          "Robotics & Automation"
        ],
        "eligibility": "10+2 with PCM + JEE Advanced All India Rank under 650"
      },
      {
        "id": "c_iitb_4",
        "name": "M.Tech in Computer Science & Engineering",
        "degreeLevel": "Postgraduate",
        "department": "Engineering & Tech",
        "duration": "2 Years",
        "seats": 60,
        "annualFee": "₹1,95,000",
        "avgPackage": "₹26.0 LPA",
        "specializations": [
          "AI & Systems",
          "Network Architecture"
        ],
        "eligibility": "B.Tech in CSE/IT with valid GATE score"
      },
      {
        "id": "c_iitb_5",
        "name": "MBA (Shailesh J. Mehta School of Management - SJMSOM)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹5,80,000",
        "avgPackage": "₹28.8 LPA",
        "specializations": [
          "Technology Management",
          "Supply Chain",
          "Finance",
          "Consulting"
        ],
        "eligibility": "B.Tech/B.E. or Master's degree in Science with minimum 60% + CAT 98.5+ percentile"
      }
    ],
    "eligibility": "Rank in top percentile of JEE Advanced with 75% in Class 12.",
    "admissionProcess": [
      "Qualify JEE Main then secure top rank in JEE Advanced.",
      "Participate in JoSAA counselling.",
      "Powai campus document submission."
    ],
    "recruiters": [
      "Jane Street",
      "Qualcomm",
      "Google",
      "Rubrik",
      "Optiver",
      "Micron",
      "Sony Japan",
      "Tower Research"
    ],
    "facilities": [
      "SINE Startup Incubator",
      "Nanofabrication Facility",
      "Powai Lake Campus Walkways",
      "Gymkhana",
      "Hostels"
    ],
    "scholarships": "Free Mess and Institute Merit-cum-Means waivers.",
    "cutoffs": [
      {
        "branch": "CSE",
        "round1Rank": 1,
        "closingRank": 67
      }
    ],
    "faqs": [
      {
        "q": "What rank is required for CSE at IIT Bombay?",
        "a": "Historically, IIT Bombay Computer Science closes within the top 60-67 All India Ranks in JEE Advanced."
      }
    ],
    "metaTitle": "IIT Bombay Admission 2026: Fees, JEE Advanced Cutoffs (Rank ~66), Placements (₹3.67 Cr)",
    "metaDescription": "Verified guide to IIT Bombay (NIRF #3 / Top Tech Campus). Check B.Tech CSE, Electrical, Mechanical fees, JEE Advanced closing ranks (~66), ₹26.45 LPA average package, and international recruiters.",
    "news": [
      {
        "id": "news_iitb_1",
        "title": "JoSAA 2026 JEE Advanced Round 1 Closing Ranks & Powai Campus Verification Dates",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "CSE closing rank recorded at AIR 66 for General gender-neutral category. Candidates must complete physical registration at IITB Convocation Hall.",
        "badge": "JoSAA Notice",
        "link": "#admission"
      },
      {
        "id": "news_iitb_2",
        "title": "IIT Bombay Placement Drive Phase 1 Concludes: Average Salary Reaches ₹26.45 LPA with 25+ Crore Offers",
        "date": "Aug 31, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Top international tech giants, proprietary quantitative trading desks, and aerospace firms recruit over 1,350 students with highest package touching ₹3.67 Crore.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_iitb_3",
        "title": "Mood Indigo 2026: Asia's Largest College Cultural Fest Schedule and Lineup Released",
        "date": "Aug 14, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "IIT Bombay student gymkhana unveils theme and global artist lineup for 54th edition of flagship winter cultural festival.",
        "badge": "Annual Fest"
      }
    ]
  },
  {
    "id": "col_amity_noida",
    "slug": "amity-university-noida",
    "aliases": [
      "amity-noida",
      "amity-university-noida",
      "amity-university",
      "amity-delhi-ncr",
      "amity"
    ],
    "name": "Amity University Noida",
    "shortName": "Amity Noida",
    "type": "Private University",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "establishedYear": 2005,
    "campusArea": "60 Acres",
    "accreditation": "NAAC A+ Grade (3.27 CGPA), UGC Recognized, AICTE, BCI, COA, PCI & WASC (USA) Accredited",
    "nirfRanking": 35,
    "rating": 4.6,
    "reviewsCount": 890,
    "coverImage": "/images/colleges/amity2.jpg",
    "campusImages": [
      "/images/colleges/amity2.jpg",
      "/images/colleges/amity3.jpeg",
      "/images/colleges/amityuniversity_10db382a74.webp"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Law",
      "Computer Science",
      "BCA",
      "BBA",
      "Universities",
      "Design",
      "Psychology",
      "Biotechnology",
      "Journalism"
    ],
    "feesRange": "₹2.2 Lakh - ₹4.5 Lakh per year",
    "annualFeeNumeric": 260000,
    "hostelFee": "₹1,10,000 per year",
    "placementRate": "94%",
    "averagePackage": 8.8,
    "highestPackage": 61.75,
    "entranceExams": [
      "Amity JEE",
      "JEE Main",
      "CAT",
      "MAT",
      "CUET",
      "CLAT",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "Flagship 60-Acre Campus in Delhi NCR with Global WASC (USA) & NAAC A+ Accreditations",
    "description": "Amity University Noida is the flagship campus of the global Amity Education Group, spread across 60 hi-tech acres in Sector 125, Noida (Delhi NCR). Recognized as one of India's premier private research universities, Amity Noida holds prestigious NAAC A+ accreditation and WASC (USA) global accreditation. Offering 250+ undergraduate, postgraduate, and doctoral degrees in Computer Science, Artificial Intelligence, Business Management, Law, Biotechnology, and Mass Media, Amity Noida features 500+ top multinational recruiters, state-of-the-art incubation hubs, and fast-track counselor admissions.",
    "courses": [
      {
        "id": "c_amityn_1",
        "name": "B.Tech in Computer Science & Engineering (AI, Cloud, Cyber)",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 720,
        "annualFee": "₹3,60,000",
        "avgPackage": "₹8.8 LPA",
        "specializations": [
          "Artificial Intelligence",
          "Cloud Computing",
          "Cyber Security & Digital Forensics",
          "Data Science"
        ],
        "eligibility": "10+2 with PCM (Min 60% aggregate) + Amity JEE / JEE Main / Direct Merit"
      },
      {
        "id": "c_amityn_2",
        "name": "MBA (Dual Specialization / International Business)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 480,
        "annualFee": "₹4,40,000",
        "avgPackage": "₹8.5 LPA",
        "specializations": [
          "International Business",
          "Marketing & Sales",
          "Finance",
          "Human Resource Management"
        ],
        "eligibility": "Graduation with minimum 50% marks + CAT/MAT/GMAT/Amity Test + Interview"
      },
      {
        "id": "c_amityn_3",
        "name": "BBA (Honours / Global Study Program)",
        "degreeLevel": "Undergraduate",
        "department": "Management",
        "duration": "3 Years",
        "seats": 480,
        "annualFee": "₹2,65,000",
        "avgPackage": "₹6.0 LPA",
        "specializations": [
          "Business Analytics",
          "Digital Marketing",
          "Family Managed Business"
        ],
        "eligibility": "10+2 in any stream with minimum 60% aggregate marks"
      },
      {
        "id": "c_amityn_4",
        "name": "B.A. LL.B. (Hons) / B.B.A. LL.B. (Hons)",
        "degreeLevel": "Undergraduate",
        "department": "Law",
        "duration": "5 Years",
        "seats": 240,
        "annualFee": "₹2,95,000",
        "avgPackage": "₹6.8 LPA",
        "specializations": [
          "Corporate Law",
          "Intellectual Property Rights",
          "Criminal Law"
        ],
        "eligibility": "10+2 in any stream with minimum 55% aggregate marks"
      },
      {
        "id": "c_amityn_5",
        "name": "B.Des in Fashion Design / Interior Architecture",
        "degreeLevel": "Undergraduate",
        "department": "Design",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹2,10,000",
        "avgPackage": "₹5.5 LPA",
        "specializations": [
          "Fashion Design",
          "Interior Architecture",
          "Textile Design"
        ],
        "eligibility": "10+2 in any stream with creative aptitude test"
      }
    ],
    "eligibility": "10+2 with minimum 60% aggregate in PCM for Engineering; Graduation with 50% for MBA. Direct admission on fast-track for candidates with 80%+ in CBSE/ICSE board examinations.",
    "admissionProcess": [
      "Submit online application on Amity admission portal or via counselor desk.",
      "Complete video interview / aptitude assessment.",
      "Offer letter issued with merit scholarship details.",
      "Fee installment payment and hostel confirmation."
    ],
    "recruiters": [
      "Microsoft",
      "Amazon",
      "Google",
      "Ernst & Young",
      "Deloitte",
      "KPMG",
      "Wipro",
      "TCS",
      "Accenture",
      "Adobe",
      "PwC"
    ],
    "facilities": [
      "High-Tech Computing & AI Labs",
      "Moot Court Complex",
      "Central Digital Library with 2,00,000+ Books",
      "Air-Conditioned Hostels",
      "Olympic-Size Sports Arena",
      "Amity Innovation Incubator"
    ],
    "scholarships": "100% Scholarship for 93%+ in Class 12; 50% for 88%+ in Class 12; Fast-track direct admission for high achievers.",
    "cutoffs": [
      {
        "branch": "CSE AI & ML",
        "round1Rank": 8500,
        "closingRank": 19000
      }
    ],
    "faqs": [
      {
        "q": "Is Amity University Noida UGC and NAAC approved?",
        "a": "Yes, Amity University Noida is UGC recognized, NAAC A+ accredited, and accredited by WASC Senior College and University Commission (USA)."
      },
      {
        "q": "What is the highest package at Amity University Noida?",
        "a": "The highest international package at Amity University touched ₹61.75 LPA, with over 11,000+ placement offers generated in recent recruitment seasons."
      }
    ],
    "metaTitle": "Amity University Noida Admission 2026: Fees, Courses & Placements (₹61 LPA)",
    "metaDescription": "Verified 2026 guide for Amity University Noida (NAAC A+). Explore B.Tech, MBA, Law, Psychology fees, scholarship criteria, direct admissions, and 1,000+ top company placement drives.",
    "news": [
      {
        "id": "news_amityn_1",
        "title": "Amity Noida Direct Admission & Merit Scholarship Desk 2026 Open",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Admissions office notifies direct interview scheduling for engineering, management, and law aspirants. 100% scholarship for 95%+ in Class 12th.",
        "badge": "Direct Admission",
        "link": "#enquiry-section"
      },
      {
        "id": "news_amityn_2",
        "title": "Corporate Placements 2026: Over 1,000 Corporate Partners Conduct Campus Drives",
        "date": "Aug 28, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Amazon, Cisco, Microsoft, Deloitte, and EY extend over 11,000 offers across undergraduate and postgraduate cohorts with highest package of ₹61 LPA.",
        "badge": "Placement Record",
        "link": "#placements"
      },
      {
        "id": "news_amityn_3",
        "title": "Amity Innovation Incubator Supported Startups Surpass ₹500 Crore Cumulative Valuation",
        "date": "Aug 10, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Over 120 student-led tech ventures incubated on Noida campus showcase AI and clean-tech solutions to global venture funds.",
        "badge": "Startup Summit"
      }
    ]
  },
  {
    "id": "col_cgc_chandigarh",
    "slug": "cgc-jhanjeri-chandigarh",
    "aliases": [
      "cgc",
      "cgc-chandigarh",
      "chandigarh-group-of-colleges",
      "cgc-jhanjeri",
      "cgc-landran",
      "chandigarh-group"
    ],
    "name": "Chandigarh Group of Colleges",
    "shortName": "CGC Chandigarh",
    "type": "Autonomous Technical & Management Institute / Group of Colleges",
    "city": "Mohali",
    "state": "Punjab",
    "establishedYear": 2001,
    "campusArea": "50 Acres",
    "accreditation": "NAAC A+ Accredited (3.46 CGPA), AICTE & PCI Approved, Affiliated to I.K. Gujral PTU",
    "nirfRanking": 85,
    "rating": 4.5,
    "reviewsCount": 680,
    "coverImage": "/images/colleges/cu1.jpg",
    "campusImages": [
      "/images/colleges/cu1.jpg",
      "/images/colleges/cu2.jpeg",
      "/images/colleges/cu3.jpeg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Engineering",
      "B.Tech",
      "Management",
      "MBA",
      "Computer Science",
      "BCA",
      "BBA",
      "Pharmacy",
      "Universities",
      "Commerce"
    ],
    "feesRange": "₹95,000 - ₹1.7 Lakh per year",
    "annualFeeNumeric": 125000,
    "hostelFee": "₹75,000 per year",
    "placementRate": "93%",
    "averagePackage": 7.6,
    "highestPackage": 54.75,
    "entranceExams": [
      "CGC Josh",
      "JEE Main",
      "PTU CET",
      "Direct Admission"
    ],
    "featured": true,
    "directAdmission": true,
    "tagline": "NAAC A+ Premier Engineering & Management Group in Chandigarh Tricity with 850+ Recruiters",
    "description": "Chandigarh Group of Colleges (CGC Jhanjeri / Landran) is one of North India's foremost educational conglomerates in Mohali, Chandigarh Tricity. Established in 2001 with NAAC A+ accreditation, CGC delivers high-demand degree programs in B.Tech Computer Science (AI/ML, Data Science), MBA, BCA, BBA, and Pharmacy. With a 360-degree pre-placement training program (360-DPTP), 850+ visiting multinational recruiters, packages touching ₹54.75 LPA, and ₹12 Crore CGC Josh scholarship funds, CGC offers unmatched academic ROI and direct admission pathways.",
    "courses": [
      {
        "id": "c_cgc_1",
        "name": "B.Tech in Computer Science & Engineering",
        "degreeLevel": "Undergraduate",
        "department": "Engineering & Tech",
        "duration": "4 Years",
        "seats": 480,
        "annualFee": "₹95,000",
        "avgPackage": "₹6.5 LPA",
        "specializations": [
          "Artificial Intelligence & Machine Learning",
          "Data Science",
          "Cyber Security"
        ],
        "eligibility": "10+2 with PCM (Min 50% aggregate) + JEE Main / CGC JOSH"
      },
      {
        "id": "c_cgc_2",
        "name": "MBA (Marketing, Finance, HR, Business Analytics)",
        "degreeLevel": "Postgraduate",
        "department": "Management",
        "duration": "2 Years",
        "seats": 180,
        "annualFee": "₹95,000",
        "avgPackage": "₹6.8 LPA",
        "specializations": [
          "Marketing Management",
          "Finance & Banking",
          "Human Resources",
          "Business Analytics"
        ],
        "eligibility": "Graduation in any stream with minimum 50% marks + CAT/MAT/CMAT"
      },
      {
        "id": "c_cgc_3",
        "name": "BCA (Web & Mobile Application Development)",
        "degreeLevel": "Undergraduate",
        "department": "Computer Applications",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹55,000",
        "avgPackage": "₹4.8 LPA",
        "specializations": [
          "Full Stack Web",
          "Python & Data Science"
        ],
        "eligibility": "10+2 in any stream with minimum 45% aggregate marks"
      },
      {
        "id": "c_cgc_4",
        "name": "BBA with Industry Certifications",
        "degreeLevel": "Undergraduate",
        "department": "Management",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹55,000",
        "avgPackage": "₹4.5 LPA",
        "specializations": [
          "Digital Marketing",
          "Retail Management",
          "FinTech"
        ],
        "eligibility": "10+2 in any stream with minimum 45% aggregate"
      },
      {
        "id": "c_cgc_5",
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "degreeLevel": "Undergraduate",
        "department": "Pharmacy",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹85,000",
        "avgPackage": "₹4.5 LPA",
        "specializations": [
          "Pharmaceutics",
          "Pharmacology"
        ],
        "eligibility": "10+2 with Physics, Chemistry, Biology/Maths (Min 50% marks)"
      }
    ],
    "eligibility": "10+2 with minimum 50% in PCM for Engineering; Graduation with 50% for MBA. Direct admission and CGC Josh scholarship quota available based on 10+2 board marks.",
    "admissionProcess": [
      "Apply online via CGC admission portal or through admission counselor desk.",
      "Appear for CGC Josh scholarship exam or submit 10+2 / JEE Main score.",
      "Provisional seat allocation and document verification.",
      "Fee installment payment and hostel booking."
    ],
    "recruiters": [
      "Microsoft",
      "Amazon",
      "Capgemini",
      "Cognizant",
      "Wipro",
      "TCS",
      "Accenture",
      "Infosys",
      "IBM",
      "Adobe"
    ],
    "facilities": [
      "Innovation & Entrepreneurship Cell",
      "High-Speed Computing Hubs",
      "Central Air-Cooled Hostels",
      "Chandigarh Tricity Bus Fleet",
      "Sports Arena"
    ],
    "scholarships": "₹12 Crore CGC Josh scholarship pool offering up to 100% tuition fee waiver for academic merit and board toppers.",
    "cutoffs": [
      {
        "branch": "CSE Core",
        "round1Rank": 14000,
        "closingRank": 32000
      }
    ],
    "faqs": [
      {
        "q": "What is CGC Jhanjeri's highest package?",
        "a": "CGC students have secured highest packages up to ₹54.75 LPA, with over 8,500+ placement offers generated annually across 850+ companies."
      },
      {
        "q": "Is CGC approved by AICTE and NAAC accredited?",
        "a": "Yes, Chandigarh Group of Colleges is NAAC A+ accredited with a 3.46 CGPA and approved by AICTE and PCI."
      }
    ],
    "metaTitle": "CGC Jhanjeri Mohali Admission 2026: Fees, CGC Josh Scholarship & Placements (₹45.5L)",
    "metaDescription": "Verified guide to Chandigarh Group of Colleges (CGC Jhanjeri, NAAC A+). Explore B.Tech, MBA, BCA fees, CGC JOSH scholarship test up to ₹12 Cr, and 8,500+ placement offers.",
    "news": [
      {
        "id": "news_cgc_1",
        "title": "CGC Josh Scholarship 2026: Merit Concessions up to ₹12 Crore Open for All Streams",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Online scholarship assessment test open for Class 12th and diploma pass-outs. Up to 100% tuition concession based on test merit.",
        "badge": "Scholarship Test",
        "link": "#enquiry-section"
      },
      {
        "id": "news_cgc_2",
        "title": "Campus Placement Drive: 800+ Companies Visit Jhanjeri Campus with 8,500+ Placement Offers",
        "date": "Aug 27, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Top tech and FMCG brands including Amazon, Microsoft, Wipro, and Cognizant recruit engineering and management cohorts with highest offer of ₹45.5 LPA.",
        "badge": "Placement Drive",
        "link": "#placements"
      },
      {
        "id": "news_cgc_3",
        "title": "Parivartan 2026: Inter-College Annual Techno-Cultural Extravaganza Draws 15,000 Students",
        "date": "Aug 08, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Two-day festival concludes with music concert, robotics battles, and entrepreneurial pitch showcases.",
        "badge": "Annual Fest"
      }
    ]
  },
  {
    "id": "col_sms_jaipur",
    "slug": "sms-medical-college-jaipur",
    "aliases": [
      "sms-jaipur",
      "sms-medical",
      "sawai-man-singh-medical-college"
    ],
    "name": "SMS Medical College",
    "shortName": "SMS Jaipur",
    "type": "Government Medical College & Hospital",
    "city": "Jaipur",
    "state": "Rajasthan",
    "establishedYear": 1947,
    "campusArea": "50 Acres",
    "accreditation": "NMC / MCI Recognized, RUHS Affiliated",
    "nirfRanking": 46,
    "rating": 4.8,
    "reviewsCount": 640,
    "coverImage": "/images/colleges/sms-medical-college.jpg",
    "campusImages": [
      "/images/colleges/sms-medical-college.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Medical",
      "MBBS"
    ],
    "feesRange": "₹52,000 per year (Subsidized)",
    "annualFeeNumeric": 52000,
    "hostelFee": "₹15,000 per year",
    "placementRate": "100%",
    "averagePackage": 14.5,
    "highestPackage": 30,
    "entranceExams": [
      "NEET UG",
      "NEET PG"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "Rajasthan's Flagship Apex Medical College & 2,500+ Bed Teaching Hospital Network",
    "description": "Sawai Man Singh (SMS) Medical College, Jaipur is Rajasthan's premier government medical institution. Established in 1947, SMS operates a 2,500+ bed hospital network with one of India's largest clinical OPD footfalls, offering comprehensive clinical residency, super-specialty surgery, and top NEET UG ranks.",
    "courses": [
      {
        "id": "c_sms_1",
        "name": "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
        "degreeLevel": "Undergraduate",
        "department": "Medical & Health Sciences",
        "duration": "5.5 Years (Inc. 1 Yr Compulsory Rotating Internship)",
        "seats": 250,
        "annualFee": "₹33,500 (Government Quota)",
        "avgPackage": "₹12.5 LPA (Resident Doctor Stipend ₹65,000/mo)",
        "specializations": [
          "General Medicine",
          "General Surgery",
          "Pediatrics",
          "Obstetrics & Gynecology",
          "Orthopedics"
        ],
        "eligibility": "10+2 with Physics, Chemistry, Biology (Min 50% aggregate) + NEET UG AIR under 2,000 / State Rank under 250"
      },
      {
        "id": "c_sms_2",
        "name": "MD / MS in Internal Medicine, Radiodiagnosis, Pediatrics, General Surgery",
        "degreeLevel": "Postgraduate",
        "department": "Medical & Health Sciences",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹40,000",
        "avgPackage": "Senior Resident Stipend: ₹85,000 per month",
        "specializations": [
          "Radiodiagnosis",
          "Cardiology",
          "Neurology",
          "Plastic Surgery"
        ],
        "eligibility": "MBBS degree from recognized institution + 1-year completed internship + NEET PG rank"
      },
      {
        "id": "c_sms_3",
        "name": "B.Sc in Nursing (College of Nursing, SMS Hospital)",
        "degreeLevel": "Undergraduate",
        "department": "Nursing",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "₹25,000",
        "avgPackage": "₹5.5 LPA",
        "specializations": [
          "Critical Care",
          "Surgical Nursing"
        ],
        "eligibility": "10+2 with PCB (Min 45% aggregate) + RUHS Nursing Entrance Exam"
      }
    ],
    "eligibility": "10+2 with Physics, Chemistry, and Biology (minimum 50% aggregate for General category) and a valid qualifying score in NEET UG.",
    "admissionProcess": [
      "Qualify NEET UG examination with required percentile.",
      "Register for Rajasthan State Medical UG Counselling or All India Quota (MCC).",
      "Seat allotment based on NEET AIR and state domicile rank.",
      "Document verification and reporting at SMS Medical College campus."
    ],
    "recruiters": [
      "SMS Hospital Network",
      "Fortis Healthcare",
      "Medanta The Medicity",
      "Apollo Hospitals",
      "Max Healthcare"
    ],
    "facilities": [
      "2,500+ Hospital Beds",
      "Trauma & Emergency Center",
      "Super-Specialty Surgical Blocks",
      "Central Medical Library",
      "Dissection & Simulation Labs"
    ],
    "scholarships": "State government post-matric scholarships and merit fee exemptions for top rankers.",
    "cutoffs": [
      {
        "branch": "MBBS (AIQ Open)",
        "round1Rank": 750,
        "closingRank": 1950
      },
      {
        "branch": "MBBS (Rajasthan State Quota)",
        "round1Rank": 2100,
        "closingRank": 4800
      }
    ],
    "faqs": [
      {
        "q": "What is the NEET cutoff rank for SMS Medical College Jaipur?",
        "a": "For the General All India Quota (15%), candidates typically need an All India Rank under 2,000. For Rajasthan State Domicile quota (85%), cutoffs typically close around rank 4,500-5,000."
      }
    ],
    "metaTitle": "SMS Medical College Jaipur Admission 2026: MBBS Fees (₹33,500), NEET Cutoffs",
    "metaDescription": "Verified guide to Sawai Man Singh Medical College (SMS Medical College Jaipur). Explore MBBS course fees, NEET UG Rajasthan state cutoff ranks, 3,000-bed hospital facilities, and MD/MS seats.",
    "news": [
      {
        "id": "news_sms_1",
        "title": "Rajasthan NEET UG State Medical Counselling 2026: SMS College Round 1 Verification",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "State Medical Counselling Board notifies document validation and medical fitness test schedule for 250 MBBS seats at SMS Hospital.",
        "badge": "NEET Counselling",
        "link": "#admission"
      },
      {
        "id": "news_sms_2",
        "title": "SMS Hospital Trauma & Organ Transplant Center Inaugurates Advanced Robotic Surgery Unit",
        "date": "Sep 07, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Chief Minister inaugurates new Da Vinci robotic surgical suite enabling cutting-edge minimally invasive operations and resident training.",
        "badge": "Hospital Expansion"
      },
      {
        "id": "news_sms_3",
        "title": "NEET PG 2026 State Quota MD/MS Counselling Notice for In-Service and Direct Medical Officers",
        "date": "Aug 18, 2026",
        "category": "Exam",
        "isUrgent": false,
        "summary": "RUHS issues specialty allotment schedule for clinical post-graduate seats.",
        "badge": "Postgraduate Notice"
      }
    ]
  },
  {
    "id": "col_cmc_vellore",
    "slug": "cmc-vellore",
    "aliases": [
      "christian-medical-college-vellore",
      "cmc"
    ],
    "name": "Christian Medical College",
    "shortName": "CMC Vellore",
    "type": "Private Autonomous Medical College & Hospital",
    "city": "Vellore",
    "state": "Tamil Nadu",
    "establishedYear": 1900,
    "campusArea": "200 Acres",
    "accreditation": "NMC Recognized, NAAC A Grade, NABH & NABL Accredited",
    "nirfRanking": 3,
    "rating": 4.95,
    "reviewsCount": 1150,
    "coverImage": "/images/colleges/cmc-vellore.jpg",
    "campusImages": [
      "/images/colleges/cmc-vellore.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Medical",
      "MBBS"
    ],
    "feesRange": "₹52,000 per year",
    "annualFeeNumeric": 52000,
    "hostelFee": "₹40,000 per year",
    "placementRate": "100%",
    "averagePackage": 16,
    "highestPackage": 40,
    "entranceExams": [
      "NEET UG",
      "NEET PG"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "Ranked #3 in NIRF Medical: Legendary Centenary Hospital with World-Class Surgical Training",
    "description": "Christian Medical College (CMC), Vellore is one of India's most venerated medical institutions. Ranked #3 in India by NIRF Medical, CMC operates a 2,800+ bed tertiary hospital and is globally recognized for clinical excellence, medical breakthroughs, low subsidized tuition, and dedicated community healthcare service.",
    "courses": [
      {
        "id": "c_cmc_1",
        "name": "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
        "degreeLevel": "Undergraduate",
        "department": "Medical & Health Sciences",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "seats": 100,
        "annualFee": "₹52,830 (Subsidized Total ~₹2.5 Lakh for 5.5 Years)",
        "avgPackage": "₹14.0 LPA (Resident Doctor)",
        "specializations": [
          "Internal Medicine",
          "General Surgery",
          "Community Health",
          "Pediatrics"
        ],
        "eligibility": "10+2 with PCB (Min 60% aggregate) + NEET UG AIR under 500 + Institutional Assessment"
      },
      {
        "id": "c_cmc_2",
        "name": "MD / MS in Clinical & Surgical Specialties",
        "degreeLevel": "Postgraduate",
        "department": "Medical & Health Sciences",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹45,000",
        "avgPackage": "Postgraduate Resident Stipend: ₹65,000/mo",
        "specializations": [
          "Anesthesiology",
          "Pathology",
          "General Medicine",
          "Orthopedics"
        ],
        "eligibility": "MBBS degree + 1-year internship + NEET PG qualification"
      },
      {
        "id": "c_cmc_3",
        "name": "B.Sc in Nursing (College of Nursing, CMC)",
        "degreeLevel": "Undergraduate",
        "department": "Nursing",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "₹40,000",
        "avgPackage": "₹6.0 LPA",
        "specializations": [
          "Cardiothoracic Nursing",
          "Neonatal Care"
        ],
        "eligibility": "10+2 with PCB (Min 50% aggregate) + CMC Nursing Entrance"
      }
    ],
    "eligibility": "10+2 passed with Physics, Chemistry, Biology and English with minimum 60% aggregate. Valid qualifying NEET UG rank is mandatory.",
    "admissionProcess": [
      "Appear for NEET UG and qualify.",
      "Apply via Tamil Nadu State DME Counselling for CMC Vellore seats.",
      "Allotment strictly on merit under Open and Institutional categories."
    ],
    "recruiters": [
      "CMC Hospital Vellore",
      "Apollo Hospitals",
      "Manipal Hospitals",
      "Global Health Systems"
    ],
    "facilities": [
      "2,800+ Bed Multi-Specialty Hospital",
      "Advanced Organ Transplant Units",
      "Ida Scudder Auditorium",
      "Clinical Research Labs"
    ],
    "scholarships": "Extensive institutional bursaries ensuring no student drops out due to financial hardship.",
    "cutoffs": [
      {
        "branch": "MBBS (Open Merit)",
        "round1Rank": 110,
        "closingRank": 350
      }
    ],
    "faqs": [
      {
        "q": "Is CMC Vellore a government or private college?",
        "a": "CMC Vellore is an autonomous, private non-profit medical institution governed by an inter-denominational council, famous for highly subsidized tuition fees."
      }
    ],
    "metaTitle": "CMC Vellore Admission 2026: MBBS Fees, NEET Cutoffs & Medical Courses",
    "metaDescription": "Verified guide to Christian Medical College (CMC Vellore, NIRF #3 Medical). Check MBBS subsidized fees, NEET UG cutoff ranks, 2,800-bed hospital clinical training, and MD/MS programs.",
    "news": [
      {
        "id": "news_cmc_1",
        "title": "CMC Vellore MBBS Admissions 2026: Category Verification & Institutional Interview Dates",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Selected candidates through NEET UG centralized counselling must attend institutional aptitude and medical board verification at Ida Scudder campus.",
        "badge": "Admission Notice",
        "link": "#admission"
      },
      {
        "id": "news_cmc_2",
        "title": "Centenary Research Symposium: CMC Doctors Publish Breakthrough Study on Tropical Diseases",
        "date": "Aug 29, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "International research paper presented in collaboration with World Health Organization on community viral epidemiology.",
        "badge": "Research Publication"
      },
      {
        "id": "news_cmc_3",
        "title": "Postgraduate NEET PG Super-Specialty DM/M.Ch Counselling Round Matrix Released",
        "date": "Aug 10, 2026",
        "category": "Exam",
        "isUrgent": false,
        "summary": "Academic registrar notifies vacancies across cardiology, neurosurgery, and gastroenterology super-specialties.",
        "badge": "Super-Specialty"
      }
    ]
  },
  {
    "id": "col_jipmer",
    "slug": "jipmer-puducherry",
    "aliases": [
      "jipmer",
      "jawaharlal-institute-of-postgraduate-medical-education"
    ],
    "name": "Jawaharlal Institute of Postgraduate Medical Education and Research",
    "shortName": "JIPMER Puducherry",
    "type": "Autonomous Apex Medical Institute (INI)",
    "city": "Puducherry",
    "state": "Puducherry",
    "establishedYear": 1964,
    "campusArea": "195 Acres",
    "accreditation": "Institute of National Importance (INI), Govt of India",
    "nirfRanking": 5,
    "rating": 4.92,
    "reviewsCount": 980,
    "coverImage": "/images/colleges/jipmer-puducherry.jpg",
    "campusImages": [
      "/images/colleges/jipmer-puducherry.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Medical",
      "MBBS",
      "Universities"
    ],
    "feesRange": "₹7,620 total course fee",
    "annualFeeNumeric": 7620,
    "hostelFee": "Nominal (~₹1,200 per year)",
    "placementRate": "100%",
    "averagePackage": 17,
    "highestPackage": 42,
    "entranceExams": [
      "NEET UG",
      "INI CET"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "Ranked #5 in NIRF Medical: Institute of National Importance with 2,100-Bed Hospital",
    "description": "JIPMER Puducherry is an autonomous Institute of National Importance under the Ministry of Health and Family Welfare, Government of India. Operating a 2,100+ bed hospital, JIPMER provides subsidized healthcare, robotic surgery suites, and premier medical residency.",
    "courses": [
      {
        "id": "c_jipmer_1",
        "name": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        "degreeLevel": "Undergraduate",
        "department": "Medical & Health Sciences",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "seats": 200,
        "annualFee": "₹12,620 (Nominal Government Fee)",
        "avgPackage": "₹14.0 LPA (Resident Doctor Stipend ₹30,070/mo)",
        "specializations": [
          "General Medicine",
          "Pediatrics",
          "Surgery",
          "Obstetrics & Gynecology"
        ],
        "eligibility": "10+2 with PCB (Min 60% aggregate) + NEET UG AIR under 250 (Puducherry campus)"
      },
      {
        "id": "c_jipmer_2",
        "name": "MD / MS in Clinical Specialties",
        "degreeLevel": "Postgraduate",
        "department": "Medical & Health Sciences",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹15,000",
        "avgPackage": "Senior Resident Stipend: ₹1,05,000 per month",
        "specializations": [
          "Radiology",
          "Anesthesiology",
          "Pathology",
          "General Medicine"
        ],
        "eligibility": "MBBS from recognized medical institute + INI-CET score"
      },
      {
        "id": "c_jipmer_3",
        "name": "B.Sc in Allied Health Sciences (Cardiovascular / Dialysis / Neuro)",
        "degreeLevel": "Undergraduate",
        "department": "Allied Health Sciences",
        "duration": "3 Years + 1 Year Internship",
        "seats": 80,
        "annualFee": "₹8,500",
        "avgPackage": "₹5.5 LPA",
        "specializations": [
          "Cardiac Laboratory Technology",
          "Dialysis Technology",
          "Neurotechnology"
        ],
        "eligibility": "10+2 with PCB (Min 50% aggregate) + JIPMER Allied Entrance"
      }
    ],
    "eligibility": "10+2 with PCB and English (Min 60%). Admissions conducted centrally through MCC based on NEET UG All India Rank.",
    "admissionProcess": [
      "Qualify NEET UG.",
      "Register for Medical Counselling Committee (MCC) All India Quota rounds.",
      "Select JIPMER Puducherry as top preference.",
      "Complete admission formalities at Puducherry campus."
    ],
    "recruiters": [
      "JIPMER Hospital",
      "AIIMS Network",
      "Central Health Services",
      "Global Medical Research Hubs"
    ],
    "facilities": [
      "2,100+ Hospital Beds",
      "Super Specialty Center",
      "Robotic Surgery Suites",
      "Digital Anatomy Labs"
    ],
    "scholarships": "Nominal central government fees (~₹7,620) with living stipends during internship.",
    "cutoffs": [
      {
        "branch": "MBBS (AIQ Open)",
        "round1Rank": 80,
        "closingRank": 320
      }
    ],
    "faqs": [
      {
        "q": "Does JIPMER conduct its own entrance exam for MBBS?",
        "a": "No, since 2020 all MBBS admissions to JIPMER Puducherry and Karaikal campuses are conducted solely through the national NEET UG examination."
      }
    ],
    "metaTitle": "JIPMER Puducherry Admission 2026: Fees, NEET Cutoffs (AIR ~250), MBBS & MD/MS",
    "metaDescription": "Verified guide to JIPMER Puducherry (Institute of National Importance). Check MBBS nominal fees of ₹12,620, NEET UG cutoff ranks (AIR < 250), 2,200-bed hospital, and INI-CET counseling.",
    "news": [
      {
        "id": "news_jipmer_1",
        "title": "MCC Centralized NEET UG 2026 Seat Allotment: Reporting Guidelines at JIPMER Academic Wing",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Medical Counselling Committee issues Round 1 allotment letter for JIPMER Puducherry and Karaikal campuses. Document verification begins Monday.",
        "badge": "NEET Allotment",
        "link": "#admission"
      },
      {
        "id": "news_jipmer_2",
        "title": "National Tele-Medicine Network & AI Diagnostic Lab Launched at Puducherry Campus",
        "date": "Aug 27, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "Union Health Ministry inaugurates remote healthcare diagnostic terminal connecting 150 primary health centers in South India.",
        "badge": "Health Innovation"
      },
      {
        "id": "news_jipmer_3",
        "title": "INI-CET Post-Graduate Medical Admission Counseling Phase 2 Seat Vacancy List",
        "date": "Aug 12, 2026",
        "category": "Exam",
        "isUrgent": false,
        "summary": "Dean (Academic) notifies open rounds for vacant post-graduate MD/MS specialty residency positions.",
        "badge": "INI-CET Notice"
      }
    ]
  },
  {
    "id": "col_mamc_delhi",
    "slug": "mamc-delhi",
    "aliases": [
      "maulana-azad-medical-college",
      "mamc"
    ],
    "name": "Maulana Azad Medical College",
    "shortName": "MAMC New Delhi",
    "type": "Government Medical College (Affiliated to University of Delhi)",
    "city": "New Delhi",
    "state": "Delhi NCR",
    "establishedYear": 1958,
    "campusArea": "122 Acres",
    "accreditation": "NMC Recognized, University of Delhi Faculty of Medical Sciences",
    "nirfRanking": 32,
    "rating": 4.9,
    "reviewsCount": 890,
    "coverImage": "/images/colleges/mamc-delhi.jpg",
    "campusImages": [
      "/images/colleges/mamc-delhi.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Medical",
      "MBBS"
    ],
    "feesRange": "₹3,500 per year",
    "annualFeeNumeric": 3500,
    "hostelFee": "₹4,000 per year",
    "placementRate": "100%",
    "averagePackage": 17.5,
    "highestPackage": 40,
    "entranceExams": [
      "NEET UG",
      "NEET PG"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "Delhi's Top Government Medical College Associated with 2,800-Bed Lok Nayak Hospital",
    "description": "Maulana Azad Medical College (MAMC), New Delhi is one of India's top government medical institutions, established in 1958. Associated with Lok Nayak Hospital, GB Pant Institute, and Guru Nanak Eye Centre with 2,800+ total beds, MAMC admits only top NEET UG rankers.",
    "courses": [
      {
        "id": "c_mamc_1",
        "name": "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
        "degreeLevel": "Undergraduate",
        "department": "Medical & Health Sciences",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "seats": 250,
        "annualFee": "₹4,445 (Government Subsidized)",
        "avgPackage": "₹14.5 LPA (Resident Doctor Stipend ₹26,300/mo)",
        "specializations": [
          "General Medicine",
          "Pediatrics",
          "General Surgery",
          "Ophthalmology"
        ],
        "eligibility": "10+2 with PCB (Min 60% aggregate) + NEET UG All India 15% quota AIR < 90 / DU Quota AIR < 2,500"
      },
      {
        "id": "c_mamc_2",
        "name": "MD / MS in Clinical Specialties (Affiliated to Delhi University)",
        "degreeLevel": "Postgraduate",
        "department": "Medical & Health Sciences",
        "duration": "3 Years",
        "seats": 160,
        "annualFee": "₹15,600",
        "avgPackage": "Senior Resident Stipend: ₹1,10,000 per month",
        "specializations": [
          "Pediatrics",
          "Internal Medicine",
          "Ophthalmology",
          "Orthopedics"
        ],
        "eligibility": "MBBS degree + 1-year completed internship + NEET PG valid rank"
      },
      {
        "id": "c_mamc_3",
        "name": "BDS (Maulana Azad Institute of Dental Sciences - MAIDS)",
        "degreeLevel": "Undergraduate",
        "department": "Dental Surgery",
        "duration": "5 Years",
        "seats": 50,
        "annualFee": "₹4,120",
        "avgPackage": "₹10.5 LPA",
        "specializations": [
          "Orthodontics",
          "Oral & Maxillofacial Surgery"
        ],
        "eligibility": "10+2 with PCB + NEET UG Dental All India Rank"
      }
    ],
    "eligibility": "10+2 with PCB (Min 60%). High NEET UG All India Rank (under AIR 100 for AIQ, under AIR 1,200 for Delhi State Quota).",
    "admissionProcess": [
      "Qualify NEET UG.",
      "Register with MCC for 15% AIQ or Delhi University (DU) 85% State Quota.",
      "Choice filling and seat allotment.",
      "Campus reporting and medical exam."
    ],
    "recruiters": [
      "Lok Nayak Hospital",
      "GB Pant Hospital",
      "Max Healthcare",
      "Apollo",
      "Fortis"
    ],
    "facilities": [
      "2,800+ Hospital Beds",
      "GB Pant Super Specialty Hospital",
      "Guru Nanak Eye Centre",
      "Medical Simulation Labs"
    ],
    "scholarships": "Nominal government fees of ₹3,500 per year with high internship stipends.",
    "cutoffs": [
      {
        "branch": "MBBS (AIQ Open)",
        "round1Rank": 45,
        "closingRank": 95
      },
      {
        "branch": "MBBS (Delhi Quota)",
        "round1Rank": 250,
        "closingRank": 1150
      }
    ],
    "faqs": [
      {
        "q": "Which hospitals are attached to MAMC New Delhi?",
        "a": "MAMC is attached to Lok Nayak Hospital, GB Pant Institute of Postgraduate Medical Education & Research, Guru Nanak Eye Centre, and Chacha Nehru Bal Chikitsalaya, totaling over 2,800 hospital beds."
      }
    ],
    "metaTitle": "MAMC Delhi Admission 2026: MBBS Fees (₹4,445), NEET Cutoffs (AIR ~90), Hospital",
    "metaDescription": "Verified guide to Maulana Azad Medical College (MAMC Delhi, NIRF Top 10). Explore MBBS subsidized fee of ₹4,445/yr, NEET UG cutoff ranks, 2,800-bed Lok Nayak Hospital, and PG courses.",
    "news": [
      {
        "id": "news_mamc_1",
        "title": "DU Faculty of Medical Sciences: NEET UG 2026 MAMC Seat Allocation & Medical Board",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Delhi University Medical Faculty publishes document submission dates for 250 MBBS seats at Bahadur Shah Zafar Marg campus.",
        "badge": "DU Counselling",
        "link": "#admission"
      },
      {
        "id": "news_mamc_2",
        "title": "Lok Nayak Hospital Associated with MAMC Upgrades Advanced Oncology & Pediatric ICU",
        "date": "Sep 06, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "New 120-bed specialized emergency pediatric intensive care wing opens to enhance critical patient survival rates.",
        "badge": "Hospital Update"
      },
      {
        "id": "news_mamc_3",
        "title": "Delhi Medical Association Recognizes MAMC Postgraduate Researchers for Clinical Innovations",
        "date": "Aug 15, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "Resident doctors receive gold medals and research fellowships at annual North India Medical Conclave.",
        "badge": "Doctor Honor"
      }
    ]
  },
  {
    "id": "col_kmc_manipal",
    "slug": "kmc-manipal",
    "aliases": [
      "kasturba-medical-college-manipal",
      "kmc"
    ],
    "name": "Kasturba Medical College",
    "shortName": "KMC Manipal",
    "type": "Deemed-to-be Medical University (MAHE)",
    "city": "Manipal",
    "state": "Karnataka",
    "establishedYear": 1953,
    "campusArea": "200 Acres",
    "accreditation": "NMC Recognized, NAAC A++ (MAHE), General Medical Council (UK) Recognized",
    "nirfRanking": 9,
    "rating": 4.88,
    "reviewsCount": 750,
    "coverImage": "/images/colleges/kmc-manipal.jpg",
    "campusImages": [
      "/images/colleges/kmc-manipal.jpg"
    ],
    "logo": "/emblem.png",
    "stream": [
      "Medical",
      "MBBS",
      "Universities"
    ],
    "feesRange": "₹17.8 Lakh per year",
    "annualFeeNumeric": 1780000,
    "hostelFee": "₹1,10,000 per year",
    "placementRate": "100%",
    "averagePackage": 15.5,
    "highestPackage": 38,
    "entranceExams": [
      "NEET UG",
      "NEET PG"
    ],
    "featured": true,
    "directAdmission": false,
    "tagline": "Ranked #9 in NIRF Medical: India's Premier Private Medical College with 2,000+ Hospital Beds",
    "description": "Kasturba Medical College (KMC), Manipal is ranked #9 in India by NIRF Medical. Part of MAHE (Manipal Academy of Higher Education), KMC is globally accredited by the General Medical Council (UK) and WHO, featuring cutting-edge simulation centers and the 2,000-bed Kasturba Hospital.",
    "courses": [
      {
        "id": "c_kmc_1",
        "name": "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
        "degreeLevel": "Undergraduate",
        "department": "Medical & Health Sciences",
        "duration": "5.5 Years (Inc. 1 Yr Internship)",
        "seats": 250,
        "annualFee": "₹17,80,000",
        "avgPackage": "₹12.0 LPA (Resident Doctor)",
        "specializations": [
          "General Medicine",
          "Surgery",
          "Pediatrics",
          "Dermatology",
          "Radio-Diagnosis"
        ],
        "eligibility": "10+2 with PCB (Min 50% marks) + NEET UG score through MCC Deemed University counselling"
      },
      {
        "id": "c_kmc_2",
        "name": "MD / MS in Clinical Specialties",
        "degreeLevel": "Postgraduate",
        "department": "Medical & Health Sciences",
        "duration": "3 Years",
        "seats": 140,
        "annualFee": "₹22,00,000",
        "avgPackage": "Postgraduate Resident Stipend: ₹65,000/mo",
        "specializations": [
          "Radio-Diagnosis",
          "Dermatology",
          "Pediatrics",
          "General Surgery"
        ],
        "eligibility": "MBBS degree recognized by NMC + NEET PG valid scorecard"
      },
      {
        "id": "c_kmc_3",
        "name": "B.Sc in Medical Laboratory Technology (MLT)",
        "degreeLevel": "Undergraduate",
        "department": "Allied Health Sciences",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹1,40,000",
        "avgPackage": "₹4.8 LPA",
        "specializations": [
          "Clinical Biochemistry",
          "Microbiology",
          "Hematology"
        ],
        "eligibility": "10+2 with PCB (Min 50% aggregate marks) + MET / Merit"
      }
    ],
    "eligibility": "10+2 with Physics, Chemistry, Biology/Biotechnology and English with minimum 50% marks. NEET UG score.",
    "admissionProcess": [
      "Qualify NEET UG.",
      "Register for DGHS/MCC Central Deemed University Counselling.",
      "Choice fill KMC Manipal.",
      "Document verification and campus enrollment."
    ],
    "recruiters": [
      "Kasturba Hospital Manipal",
      "Manipal Hospital Network",
      "Apollo Hospitals",
      "NHS UK"
    ],
    "facilities": [
      "2,000+ Bed Teaching Hospital",
      "Advanced Virtual Anatomy & Simulation Lab",
      "Marena Indoor Sports Arena",
      "Central Health Sciences Library"
    ],
    "scholarships": "Kalam-Pai Merit Scholarships for top 100 NEET UG rankers joining KMC.",
    "cutoffs": [
      {
        "branch": "MBBS (Deemed General)",
        "round1Rank": 28000,
        "closingRank": 48000
      }
    ],
    "faqs": [
      {
        "q": "Is KMC Manipal degree valid internationally?",
        "a": "Yes, KMC Manipal MBBS degrees are recognized worldwide, including by the General Medical Council (GMC, UK), Educational Commission for Foreign Medical Graduates (ECFMG, USA), and World Health Organization (WHO)."
      }
    ],
    "metaTitle": "KMC Manipal Admission 2026: MBBS Fees, NEET Cutoffs & Medical Placements",
    "metaDescription": "Verified guide to Kasturba Medical College (KMC Manipal, MAHE). Explore MBBS fees, NEET UG Deemed University cutoff ranks, 2,500-bed hospital training, and USMLE / PLAB track records.",
    "news": [
      {
        "id": "news_kmc_1",
        "title": "MCC Deemed University NEET UG 2026 Counselling: KMC Manipal Verification Portal Live",
        "date": "Sep 23, 2026",
        "category": "Admission",
        "isUrgent": true,
        "summary": "Online reporting and tuition submission portal active for candidates allotted MBBS seats under MCC Deemed quota.",
        "badge": "NEET Counselling",
        "link": "#admission"
      },
      {
        "id": "news_kmc_2",
        "title": "KMC Manipal Ranked Among Top 10 Medical Institutes in India by NIRF 2025/2026",
        "date": "Sep 01, 2026",
        "category": "Campus Event",
        "isUrgent": false,
        "summary": "MAHE flagship medical college achieves stellar ranking for clinical citations, graduation outcomes, and patient hospital bed capacity.",
        "badge": "NIRF Ranking"
      },
      {
        "id": "news_kmc_3",
        "title": "Over 65% Graduating MBBS Students Clear USMLE / PLAB Qualifying Rounds for Overseas Fellowships",
        "date": "Aug 18, 2026",
        "category": "Placement",
        "isUrgent": false,
        "summary": "KMC international alumni association celebrates record residency matches across premier hospitals in the United States and United Kingdom.",
        "badge": "Global Matches",
        "link": "#placements"
      }
    ]
  }
];
