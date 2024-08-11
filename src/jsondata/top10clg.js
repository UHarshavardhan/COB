const colleges = [
    // MBA/PGDM
    {
      rank: "#1",
      name: "IIM Bangalore",
      fees: "₹ 24,50,000",
      placement: "₹ 34,50,000",
      review: "4.6/5",
      category: "MBA/PGDM"
    },
    {
      rank: "#2",
      name: "IIM Ahmedabad",
      fees: "₹ 22,00,000",
      placement: "₹ 32,00,000",
      review: "4.9/5",
      category: "MBA/PGDM"
    },
    {
      rank: "#3",
      name: "IIM Calcutta",
      fees: "₹ 20,00,000",
      placement: "₹ 30,00,000",
      review: "4.7/5",
      category: "MBA/PGDM"
    },
    {
      rank: "#4",
      name: "Harvard Business School",
      fees: "₹ 35,00,000",
      placement: "₹ 60,00,000",
      review: "4.8/5",
      category: "MBA/PGDM"
    },
    {
      rank: "#5",
      name: "Stanford Graduate School of Business",
      fees: "₹ 30,00,000",
      placement: "₹ 55,00,000",
      review: "4.7/5",
      category: "MBA/PGDM"
    },
    {
      rank: "#6",
      name: "Wharton School",
      fees: "₹ 33,00,000",
      placement: "₹ 50,00,000",
      review: "4.8/5",
      category: "MBA/PGDM"
    },
    {
      rank: "#7",
      name: "INSEAD",
      fees: "₹ 25,00,000",
      placement: "₹ 40,00,000",
      review: "4.6/5",
      category: "MBA/PGDM"
    },
    {
      rank: "#8",
      name: "London Business School",
      fees: "₹ 28,00,000",
      placement: "₹ 42,00,000",
      review: "4.7/5",
      category: "MBA/PGDM"
    },
    {
      rank: "#9",
      name: "Columbia Business School",
      fees: "₹ 32,00,000",
      placement: "₹ 48,00,000",
      review: "4.6/5",
      category: "MBA/PGDM"
    },
    {
      rank: "#10",
      name: "MIT Sloan School of Management",
      fees: "₹ 30,00,000",
      placement: "₹ 46,00,000",
      review: "4.7/5",
      category: "MBA/PGDM"
    },
    
    // MBBS
    {
      rank: "#1",
      name: "AIIMS Delhi",
      fees: "₹ 5,000",
      placement: "₹ 20,00,000",
      review: "4.8/5",
      category: "MBBS"
    },
    {
      rank: "#2",
      name: "PGI Chandigarh",
      fees: "₹ 8,000",
      placement: "₹ 18,00,000",
      review: "4.7/5",
      category: "MBBS"
    },
    {
      rank: "#3",
      name: "JIPMER Puducherry",
      fees: "₹ 10,000",
      placement: "₹ 15,00,000",
      review: "4.6/5",
      category: "MBBS"
    },
    {
      rank: "#4",
      name: "Kasturba Medical College",
      fees: "₹ 12,00,000",
      placement: "₹ 14,00,000",
      review: "4.5/5",
      category: "MBBS"
    },
    {
      rank: "#5",
      name: "Bangalore Medical College",
      fees: "₹ 6,000",
      placement: "₹ 13,00,000",
      review: "4.4/5",
      category: "MBBS"
    },
    {
      rank: "#6",
      name: "King George's Medical University",
      fees: "₹ 7,000",
      placement: "₹ 12,00,000",
      review: "4.3/5",
      category: "MBBS"
    },
    {
      rank: "#7",
      name: "Delhi Medical College",
      fees: "₹ 9,000",
      placement: "₹ 11,00,000",
      review: "4.2/5",
      category: "MBBS"
    },
    {
      rank: "#8",
      name: "Amrita Institute of Medical Sciences",
      fees: "₹ 14,00,000",
      placement: "₹ 10,00,000",
      review: "4.1/5",
      category: "MBBS"
    },
    {
      rank: "#9",
      name: "Smt. NHL Municipal Medical College",
      fees: "₹ 5,500",
      placement: "₹ 9,00,000",
      review: "4.0/5",
      category: "MBBS"
    },
    {
      rank: "#10",
      name: "Gandhi Medical College",
      fees: "₹ 8,500",
      placement: "₹ 8,00,000",
      review: "3.9/5",
      category: "MBBS"
    },
    
    // BE/BTech
    {
      rank: "#1",
      name: "IIT Bombay",
      fees: "₹ 8,00,000",
      placement: "₹ 40,00,000",
      review: "4.7/5",
      category: "BE/BTech"
    },
    {
      rank: "#2",
      name: "IIT Delhi",
      fees: "₹ 7,50,000",
      placement: "₹ 38,00,000",
      review: "4.6/5",
      category: "BE/BTech"
    },
    {
      rank: "#3",
      name: "IIT Madras",
      fees: "₹ 7,00,000",
      placement: "₹ 35,00,000",
      review: "4.7/5",
      category: "BE/BTech"
    },
    {
      rank: "#4",
      name: "NIT Trichy",
      fees: "₹ 6,00,000",
      placement: "₹ 30,00,000",
      review: "4.5/5",
      category: "BE/BTech"
    },
    {
      rank: "#5",
      name: "BITS Pilani",
      fees: "₹ 10,00,000",
      placement: "₹ 32,00,000",
      review: "4.6/5",
      category: "BE/BTech"
    },
    {
      rank: "#6",
      name: "DTU",
      fees: "₹ 5,50,000",
      placement: "₹ 28,00,000",
      review: "4.4/5",
      category: "BE/BTech"
    },
    {
      rank: "#7",
      name: "NSIT",
      fees: "₹ 5,00,000",
      placement: "₹ 27,00,000",
      review: "4.3/5",
      category: "BE/BTech"
    },
    {
      rank: "#8",
      name: "VIT Vellore",
      fees: "₹ 8,50,000",
      placement: "₹ 26,00,000",
      review: "4.2/5",
      category: "BE/BTech"
    },
    {
      rank: "#9",
      name: "Shiv Nadar University",
      fees: "₹ 9,00,000",
      placement: "₹ 25,00,000",
      review: "4.1/5",
      category: "BE/BTech"
    },
    {
      rank: "#10",
      name: "Manipal Institute of Technology",
      fees: "₹ 7,00,000",
      placement: "₹ 24,00,000",
      review: "4.0/5",
      category: "BE/BTech"
    },
  
    // ME/MTech
    {
      rank: "#1",
      name: "IIT Kanpur",
      fees: "₹ 6,00,000",
      placement: "₹ 35,00,000",
      review: "4.7/5",
      category: "ME/MTech"
    },
    {
      rank: "#2",
      name: "IIT Kharagpur",
      fees: "₹ 5,50,000",
      placement: "₹ 33,00,000",
      review: "4.6/5",
      category: "ME/MTech"
    },
    {
      rank: "#3",
      name: "IIT Guwahati",
      fees: "₹ 5,00,000",
      placement: "₹ 30,00,000",
      review: "4.7/5",
      category: "ME/MTech"
    },
    {
      rank: "#4",
      name: "NIT Warangal",
      fees: "₹ 4,50,000",
      placement: "₹ 28,00,000",
      review: "4.5/5",
      category: "ME/MTech"
    },
    {
      rank: "#5",
      name: "BITS Pilani",
      fees: "₹ 7,00,000",
      placement: "₹ 32,00,000",
      review: "4.6/5",
      category: "ME/MTech"
    },
    {
      rank: "#6",
      name: "IIT Ropar",
      fees: "₹ 5,00,000",
      placement: "₹ 26,00,000",
      review: "4.4/5",
      category: "ME/MTech"
    },
    {
      rank: "#7",
      name: "IIT Bhubaneswar",
      fees: "₹ 4,00,000",
      placement: "₹ 24,00,000",
      review: "4.3/5",
      category: "ME/MTech"
    },
    {
      rank: "#8",
      name: "VIT Vellore",
      fees: "₹ 6,50,000",
      placement: "₹ 22,00,000",
      review: "4.2/5",
      category: "ME/MTech"
    },
    {
      rank: "#9",
      name: "DTU",
      fees: "₹ 4,50,000",
      placement: "₹ 20,00,000",
      review: "4.1/5",
      category: "ME/MTech"
    },
    {
      rank: "#10",
      name: "NSIT",
      fees: "₹ 4,00,000",
      placement: "₹ 18,00,000",
      review: "4.0/5",
      category: "ME/MTech"
    },
  
    // Graduate Diploma in Education
    {
      rank: "#1",
      name: "University of Melbourne",
      fees: "₹ 3,00,000",
      placement: "₹ 12,00,000",
      review: "4.7/5",
      category: "Graduate Diploma in Education"
    },
    {
      rank: "#2",
      name: "University of Sydney",
      fees: "₹ 2,50,000",
      placement: "₹ 10,00,000",
      review: "4.6/5",
      category: "Graduate Diploma in Education"
    },
    {
      rank: "#3",
      name: "Monash University",
      fees: "₹ 3,20,000",
      placement: "₹ 11,00,000",
      review: "4.5/5",
      category: "Graduate Diploma in Education"
    },
    {
      rank: "#4",
      name: "University of Queensland",
      fees: "₹ 2,80,000",
      placement: "₹ 9,00,000",
      review: "4.4/5",
      category: "Graduate Diploma in Education"
    },
    {
      rank: "#5",
      name: "University of New South Wales",
      fees: "₹ 3,00,000",
      placement: "₹ 8,00,000",
      review: "4.3/5",
      category: "Graduate Diploma in Education"
    },
    {
      rank: "#6",
      name: "Deakin University",
      fees: "₹ 2,70,000",
      placement: "₹ 7,00,000",
      review: "4.2/5",
      category: "Graduate Diploma in Education"
    },
    {
      rank: "#7",
      name: "University of Adelaide",
      fees: "₹ 2,90,000",
      placement: "₹ 6,50,000",
      review: "4.1/5",
      category: "Graduate Diploma in Education"
    },
    {
      rank: "#8",
      name: "Griffith University",
      fees: "₹ 2,60,000",
      placement: "₹ 6,00,000",
      review: "4.0/5",
      category: "Graduate Diploma in Education"
    },
    {
      rank: "#9",
      name: "RMIT University",
      fees: "₹ 2,90,000",
      placement: "₹ 5,50,000",
      review: "3.9/5",
      category: "Graduate Diploma in Education"
    },
    {
      rank: "#10",
      name: "Curtin University",
      fees: "₹ 2,80,000",
      placement: "₹ 5,00,000",
      review: "3.8/5",
      category: "Graduate Diploma in Education"
    },
  
    // BMM
    {
      rank: "#1",
      name: "St. Xavier's College, Mumbai",
      fees: "₹ 80,000",
      placement: "₹ 6,00,000",
      review: "4.7/5",
      category: "BMM"
    },
    {
      rank: "#2",
      name: "Jai Hind College",
      fees: "₹ 70,000",
      placement: "₹ 5,50,000",
      review: "4.6/5",
      category: "BMM"
    },
    {
      rank: "#3",
      name: "Xavier Institute of Communications",
      fees: "₹ 75,000",
      placement: "₹ 5,00,000",
      review: "4.5/5",
      category: "BMM"
    },
    {
      rank: "#4",
      name: "Sophia College",
      fees: "₹ 65,000",
      placement: "₹ 4,50,000",
      review: "4.4/5",
      category: "BMM"
    },
    {
      rank: "#5",
      name: "K.C. College",
      fees: "₹ 60,000",
      placement: "₹ 4,00,000",
      review: "4.3/5",
      category: "BMM"
    },
    {
      rank: "#6",
      name: "Wilson College",
      fees: "₹ 55,000",
      placement: "₹ 3,50,000",
      review: "4.2/5",
      category: "BMM"
    },
    {
      rank: "#7",
      name: "Ruia College",
      fees: "₹ 50,000",
      placement: "₹ 3,00,000",
      review: "4.1/5",
      category: "BMM"
    },
    {
      rank: "#8",
      name: "Narsee Monjee College",
      fees: "₹ 85,000",
      placement: "₹ 6,00,000",
      review: "4.0/5",
      category: "BMM"
    },
    {
      rank: "#9",
      name: "SIES College",
      fees: "₹ 68,000",
      placement: "₹ 5,00,000",
      review: "3.9/5",
      category: "BMM"
    },
    {
      rank: "#10",
      name: "B.M.C.C.",
      fees: "₹ 70,000",
      placement: "₹ 4,00,000",
      review: "3.8/5",
      category: "BMM"
    },
  
    // MCA
    {
      rank: "#1",
      name: "IIT Roorkee",
      fees: "₹ 3,00,000",
      placement: "₹ 20,00,000",
      review: "4.8/5",
      category: "MCA"
    },
    {
      rank: "#2",
      name: "NIT Trichy",
      fees: "₹ 2,50,000",
      placement: "₹ 18,00,000",
      review: "4.7/5",
      category: "MCA"
    },
    {
      rank: "#3",
      name: "BITS Pilani",
      fees: "₹ 2,80,000",
      placement: "₹ 17,00,000",
      review: "4.6/5",
      category: "MCA"
    },
    {
      rank: "#4",
      name: "VIT Vellore",
      fees: "₹ 2,60,000",
      placement: "₹ 15,00,000",
      review: "4.5/5",
      category: "MCA"
    },
    {
      rank: "#5",
      name: "IIT Kharagpur",
      fees: "₹ 3,20,000",
      placement: "₹ 14,00,000",
      review: "4.4/5",
      category: "MCA"
    },
    {
      rank: "#6",
      name: "Pune University",
      fees: "₹ 1,80,000",
      placement: "₹ 12,00,000",
      review: "4.3/5",
      category: "MCA"
    },
    {
      rank: "#7",
      name: "Jadavpur University",
      fees: "₹ 2,00,000",
      placement: "₹ 11,00,000",
      review: "4.2/5",
      category: "MCA"
    },
    {
      rank: "#8",
      name: "SASTRA University",
      fees: "₹ 1,70,000",
      placement: "₹ 10,00,000",
      review: "4.1/5",
      category: "MCA"
    },
    {
      rank: "#9",
      name: "Amity University",
      fees: "₹ 2,50,000",
      placement: "₹ 9,00,000",
      review: "4.0/5",
      category: "MCA"
    },
    {
      rank: "#10",
      name: "Shiv Nadar University",
      fees: "₹ 2,40,000",
      placement: "₹ 8,00,000",
      review: "3.9/5",
      category: "MCA"
    }
  ];

  export default colleges;