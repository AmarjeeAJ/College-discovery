/**
 * Entrance Exams Mock Dataset
 * Used for /exams, /exams/:slug, and exam filter tags.
 */

export const examsData = [
  {
    id: "exam_jee_main",
    slug: "jee-main",
    name: "JEE Main (Joint Entrance Examination)",
    conductingBody: "National Testing Agency (NTA)",
    level: "National Level",
    stream: "Engineering / Architecture",
    coursesOffered: "B.Tech, B.E., B.Arch, B.Planning",
    frequency: "Twice a year (January & April Sessions)",
    totalApplicants: "12.5+ Lakh Candidates",
    examMode: "Computer Based Test (CBT)",
    overview: "JEE Main is India's largest engineering entrance test. It serves as the single gateway for admissions to 32 NITs, 26 IIITs, and 38 Government Funded Technical Institutes (GFTIs), as well as the qualifying exam for JEE Advanced.",
    eligibility: "Candidates who have passed 10+2 examination with Physics, Mathematics, and one optional subject in 2024, 2025, or appearing in 2026. No age limit specified by NTA.",
    examPattern: [
      "Physics: 25 Questions (20 MCQs + 5 Numerical)",
      "Chemistry: 25 Questions (20 MCQs + 5 Numerical)",
      "Mathematics: 25 Questions (20 MCQs + 5 Numerical)",
      "Total Marks: 300 (4 marks for correct, -1 for incorrect)"
    ],
    importantDates: {
      session1Exam: "January 2026",
      session2Exam: "April 2026",
      resultDate: "May 2026",
      counsellingDate: "June - July 2026 (JoSAA)"
    },
    topColleges: ["MNIT Jaipur", "NIT Trichy", "NIT Surathkal", "DTU Delhi", "NSUT Delhi", "IIIT Hyderabad"]
  },
  {
    id: "exam_cat",
    slug: "cat",
    name: "CAT (Common Admission Test)",
    conductingBody: "Indian Institutes of Management (Rotational)",
    level: "National Level",
    stream: "Management",
    coursesOffered: "MBA, PGDM, Executive MBA",
    frequency: "Once a year (Last Sunday of November)",
    totalApplicants: "3.2+ Lakh Candidates",
    examMode: "Computer Based Test (CBT)",
    overview: "CAT is the premier management aptitude exam in India, commanding admission to 21 prestigious IIMs, FMS Delhi, SPJIMR Mumbai, MDI Gurgaon, and over 1,200 top B-schools across the country.",
    eligibility: "Bachelor's Degree in any discipline with at least 50% marks (45% for SC/ST/PwD). Final year students are eligible.",
    examPattern: [
      "Section 1: Verbal Ability and Reading Comprehension (VARC) - 24 Qs",
      "Section 2: Data Interpretation and Logical Reasoning (DILR) - 20 Qs",
      "Section 3: Quantitative Aptitude (QA) - 22 Qs",
      "Total Duration: 120 Minutes (40 mins per section)"
    ],
    importantDates: {
      examDate: "November 2026",
      resultDate: "First week of January 2027",
      interviewRounds: "February - April 2027"
    },
    topColleges: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "FMS Delhi", "SIBM Pune", "MDI Gurgaon"]
  },
  {
    id: "exam_neet",
    slug: "neet-ug",
    name: "NEET UG (National Eligibility cum Entrance Test)",
    conductingBody: "National Testing Agency (NTA)",
    level: "National Level",
    stream: "Medical & Dental",
    coursesOffered: "MBBS, BDS, BAMS, BHMS, BUMS",
    frequency: "Once a year (May)",
    totalApplicants: "24+ Lakh Candidates",
    examMode: "Pen and Paper (OMR Based)",
    overview: "NEET UG is the single entrance examination for admission to undergraduate medical (MBBS) and dental (BDS) courses in all medical institutions including AIIMS and JIPMER across India.",
    eligibility: "Completed 17 years of age at the time of admission. Passed Class 12 with Physics, Chemistry, Biology/Biotechnology, and English with minimum 50% aggregate.",
    examPattern: [
      "Physics: 45 Questions (180 Marks)",
      "Chemistry: 45 Questions (180 Marks)",
      "Biology (Botany + Zoology): 90 Questions (360 Marks)",
      "Total Marks: 720 (Duration: 3 Hours 20 Minutes)"
    ],
    importantDates: {
      examDate: "First Sunday of May 2026",
      resultDate: "June 2026",
      counsellingDate: "July - August 2026 (MCC & State Quotas)"
    },
    topColleges: ["AIIMS New Delhi", "CMC Vellore", "JIPMER Puducherry", "KGMU Lucknow", "SMS Medical College Jaipur"]
  },
  {
    id: "exam_clat",
    slug: "clat",
    name: "CLAT (Common Law Admission Test)",
    conductingBody: "Consortium of National Law Universities",
    level: "National Level",
    stream: "Law & Legal Studies",
    coursesOffered: "5-Year Integrated B.A. LL.B. (Hons), LL.M.",
    frequency: "Once a year (December)",
    totalApplicants: "65,000+ Candidates",
    examMode: "Pen and Paper Test",
    overview: "CLAT is the centralized entrance examination for admissions to 24 National Law Universities (NLUs) in India and dozens of private law institutions accepting CLAT scores.",
    eligibility: "10+2 or equivalent with minimum 45% marks (40% for SC/ST). No upper age limit.",
    examPattern: [
      "English Language, Current Affairs & GK",
      "Legal Reasoning, Logical Reasoning",
      "Quantitative Techniques",
      "Total Questions: 120 (Duration: 2 Hours)"
    ],
    importantDates: {
      examDate: "December 2026",
      resultDate: "Late December 2026",
      counsellingDate: "January - April 2027"
    },
    topColleges: ["NLSIU Bangalore", "NALSAR Hyderabad", "WBNUJS Kolkata", "NLU Delhi (AILET)", "NLU Jodhpur"]
  },
  {
    id: "exam_cuet",
    slug: "cuet-ug",
    name: "CUET UG (Common University Entrance Test)",
    conductingBody: "National Testing Agency (NTA)",
    level: "National Level",
    stream: "Central & State Universities",
    coursesOffered: "B.A, B.Sc, B.Com, BCA, BBA, Integrated Programs",
    frequency: "Once a year (May - June)",
    totalApplicants: "14+ Lakh Candidates",
    examMode: "Hybrid (CBT + Pen-Paper)",
    overview: "CUET UG provides a single-window opportunity to students seeking admission in central, state, deemed, and private universities across India including Delhi University, BHU, and JNU.",
    eligibility: "Candidates who have cleared Class 12 or equivalent in any stream from a recognized board.",
    examPattern: [
      "Section 1A & 1B: Language Testing",
      "Section 2: Domain-Specific Subjects (up to 6 domains)",
      "Section 3: General Test (Mental Ability, Numerical, GK)"
    ],
    importantDates: {
      examDate: "May 2026",
      resultDate: "July 2026"
    },
    topColleges: ["Delhi University", "Banaras Hindu University", "Jamia Millia Islamia", "Jawaharlal Nehru University"]
  }
];
