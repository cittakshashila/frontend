import { EVENT } from "./types";

export const EventList: Array<EVENT> = [
  {
    title: "Robotics Competition",
    tagline: "Battle of the Bots",
    description:
      "Witness intense battles between robots created by skilled participants.",
    rules: [
      "Robots must adhere to size and weight regulations.",
      "Safety goggles are mandatory for participants.",
    ],
    details: { type: "TECHNICAL", date: "2024-05-05", time: [13, 30] },
    prizes: ["Champion: Robotics Kit", "Runner-up: Certificate of Achievement"],
    contacts: [
      {
        incharge: "Michael Lee",
        email: "michael.lee@example.com",
        phno: "555-345-6789",
      },
      {
        incharge: "Olivia White",
        email: "olivia.white@example.com",
        phno: "555-765-4321",
      },
    ],
    links: ["https://example.com/robotics-competition"],
    fee: 12,
    day: "DAY2",
    category: "WK",
    code: "RC01",
  },
  {
    title: "Photography Exhibition",
    tagline: "Capturing Moments in Frames",
    description:
      "A collection of stunning photographs showcasing the beauty of life and art of photography.",
    rules: [
      "Photographers should submit high-resolution images.",
      "No explicit or offensive content allowed.",
    ],
    details: { type: "NON-TECHNICAL", date: "2024-05-06", time: [15, 0] },
    prizes: ["Best in Show: Photography Gear", "People's Choice: Recognition"],
    contacts: [
      {
        incharge: "Ethan Clark",
        email: "ethan.clark@example.com",
        phno: "555-456-7890",
      },
      {
        incharge: "Ava Turner",
        email: "ava.turner@example.com",
        phno: "555-654-3210",
      },
    ],
    links: ["https://example.com/photography-exhibition"],
    fee: 7,
    day: "DAY1",
    category: "GEN",
    code: "PE01",
  },
  {
    title: "Hackathon",
    tagline: "Code for a Cause",
    description:
      "Join us for a 24-hour hackathon to solve real-world problems through innovative solutions.",
    rules: [
      "Teams must consist of 3-5 members.",
      "Code submissions should be open-source.",
    ],
    details: { type: "TECHNICAL", date: "2024-05-07", time: [12, 0] },
    prizes: [
      "Grand Prize: $1000 and Internship Opportunity",
      "Best Open-Source Project: Recognition",
    ],
    contacts: [
      {
        incharge: "Sophia Turner",
        email: "sophia.turner@example.com",
        phno: "555-567-8901",
      },
      {
        incharge: "Jackson Harris",
        email: "jackson.harris@example.com",
        phno: "555-890-1234",
      },
    ],
    links: ["https://example.com/hackathon"],
    fee: 15,
    day: "DAY2",
    category: "WK",
    code: "COC2",
  },
  {
    title: "Dance Workshop",
    tagline: "Groove to the Beats",
    description:
      "Learn various dance styles from professional instructors in this energetic workshop.",
    rules: [
      "Wear comfortable dance attire.",
      "Participants must be aged 16 and above.",
    ],
    details: { type: "NON-TECHNICAL", date: "2024-05-08", time: [17, 30] },
    prizes: [
      "Best Dancer: Dance Workshop Passes",
      "Most Energetic Performance: Certificate",
    ],
    contacts: [
      {
        incharge: "Liam Adams",
        email: "liam.adams@example.com",
        phno: "555-678-9012",
      },
      {
        incharge: "Emma Wilson",
        email: "emma.wilson@example.com",
        phno: "555-901-2345",
      },
    ],
    links: ["https://example.com/dance-workshop"],
    fee: 10,
    day: "DAY1",
    category: "GEN",
    code: "DD02",
  },
  {
    title: "Science Fair",
    tagline: "Celebrating Scientific Inquiry",
    description:
      "Explore fascinating experiments and projects by young scientists in this interactive fair.",
    rules: [
      "Projects should align with scientific principles.",
      "No hazardous materials allowed.",
    ],
    details: { type: "TECHNICAL", date: "2024-05-09", time: [11, 0] },
    prizes: [
      "Best Scientific Inquiry: Trophy",
      "Young Scientist Award: Recognition",
    ],
    contacts: [
      {
        incharge: "Noah Taylor",
        email: "noah.taylor@example.com",
        phno: "555-789-0123",
      },
      {
        incharge: "Isabella Moore",
        email: "isabella.moore@example.com",
        phno: "555-012-3456",
      },
    ],
    links: ["https://example.com/science-fair"],
    fee: 5,
    day: "DAY2",
    category: "WK",
    code: "SF42",
  },
  {
    title: "Food Festival",
    tagline: "A Culinary Delight",
    description:
      "Indulge in a variety of delicious dishes from different cuisines at our food festival.",
    rules: [
      "No outside food allowed.",
      "Bring your own reusable utensils for a sustainable experience.",
    ],
    details: { type: "NON-TECHNICAL", date: "2024-05-10", time: [19, 0] },
    prizes: [
      "Best Dish: Culinary Experience",
      "Most Unique Flavor: Certificate",
    ],
    contacts: [
      {
        incharge: "Mia Cooper",
        email: "mia.cooper@example.com",
        phno: "555-123-4567",
      },
      {
        incharge: "Elijah King",
        email: "elijah.king@example.com",
        phno: "555-987-6543",
      },
    ],
    links: ["https://example.com/food-festival"],
    fee: 8,
    day: "DAY3",
    category: "GEN",
    code: "FF10",
  },
  {
    title: "Startup Pitch",
    tagline: "Turning Ideas into Reality",
    description:
      "Witness aspiring entrepreneurs pitch their startup ideas to a panel of industry experts.",
    rules: [
      "Pitch duration: 5 minutes per team.",
      "Presentations should include a demo or prototype.",
    ],
    details: { type: "TECHNICAL", date: "2024-05-11", time: [16, 30] },
    prizes: [
      "Best Startup Idea: Funding Opportunity",
      "Most Innovative Pitch: Recognition",
    ],
    contacts: [
      {
        incharge: "Aiden Wright",
        email: "aiden.wright@example.com",
        phno: "555-234-5678",
      },
      {
        incharge: "Grace Hill",
        email: "grace.hill@example.com",
        phno: "555-876-5432",
      },
    ],
    links: ["https://example.com/startup-pitch"],
    fee: 10,
    day: "DAY3",
    category: "WK",

    code: "SP30",
  },
  {
    title: "Music Concert",
    tagline: "Harmony in Diversity",
    description:
      "Enjoy a mesmerizing musical experience featuring diverse genres and talented performers.",
    rules: [
      "No recording or photography during the concert.",
      "Respect the performers and fellow audience members.",
    ],
    details: { type: "NON-TECHNICAL", date: "2024-05-12", time: [20, 0] },
    prizes: [
      "Outstanding Performance: Music Gear",
      "Audience's Choice: Recognition",
    ],
    contacts: [
      {
        incharge: "Logan Brooks",
        email: "logan.brooks@example.com",
        phno: "555-345-6789",
      },
      {
        incharge: "Lily Ward",
        email: "lily.ward@example.com",
        phno: "555-789-0123",
      },
    ],
    links: ["https://example.com/music-concert"],
    fee: 15,
    day: "DAY1",
    category: "GEN",
    code: "HD41",
  },
  {
    title: "Environmental Workshop",
    tagline: "Sustainable Living",
    description:
      "Learn about eco-friendly practices and sustainable living in this informative workshop.",
    rules: [
      "Bring your own reusable water bottle.",
      "No littering; dispose of waste responsibly.",
    ],
    details: { type: "NON-TECHNICAL", date: "2024-05-13", time: [14, 0] },
    prizes: [
      "Green Living Advocate: Sustainability Kit",
      "Most Eco-Conscious Participant: Certificate",
    ],
    contacts: [
      {
        incharge: "Lucas Cooper",
        email: "lucas.cooper@example.com",
        phno: "555-901-2345",
      },
      {
        incharge: "Natalie Reed",
        email: "natalie.reed@example.com",
        phno: "555-012-3456",
      },
    ],
    links: ["https://example.com/environmental-workshop"],
    fee: 7,
    day: "DAY3",
    category: "GEN",
    code: "EW36",
  },
  {
    title: "Fashion Show",
    tagline: "Glamour on the Runway",
    description:
      "Experience the latest trends and designs as models strut down the runway in this fashion extravaganza.",
    rules: [
      "Participants must be aged 18 and above.",
      "No offensive or inappropriate attire allowed.",
    ],
    details: { type: "NON-TECHNICAL", date: "2024-05-14", time: [18, 30] },
    prizes: [
      "Best Model: Fashion Internship",
      "Most Stylish Ensemble: Recognition",
    ],
    contacts: [
      {
        incharge: "Chloe Foster",
        email: "chloe.foster@example.com",
        phno: "555-567-8901",
      },
      {
        incharge: "Ethan Green",
        email: "ethan.green@example.com",
        phno: "555-234-5678",
      },
    ],
    links: ["https://example.com/fashion-show"],
    fee: 12,
    day: "DAY2",
    category: "GEN",
    code: "FS92",
  },
  {
    title: "Sports Tournament",
    tagline: "Compete and Conquer",
    description:
      "Participate in a variety of sports tournaments and showcase your athletic prowess.",
    rules: [
      "Participants must bring their own sports gear.",
      "Follow fair play and sportsmanship rules.",
    ],
    details: { type: "NON-TECHNICAL", date: "2024-05-15", time: [12, 0] },
    prizes: [
      "Overall Champion: Sports Gear Package",
      "MVP (Most Valuable Player): Recognition",
    ],
    contacts: [
      {
        incharge: "Owen Turner",
        email: "owen.turner@example.com",
        phno: "555-345-6789",
      },
      {
        incharge: "Zoe Clark",
        email: "zoe.clark@example.com",
        phno: "555-890-1234",
      },
    ],
    links: ["https://example.com/sports-tournament"],
    fee: 10,
    day: "DAY3",
    category: "GEN",
    code: "ST69",
  },
  {
    title: "Virtual Reality Showcase",
    tagline: "Immersive Experiences in VR",
    description:
      "Explore the latest virtual reality technologies and experience immersive VR showcases.",
    rules: [
      "Participants must be aged 13 and above.",
      "Respect the VR equipment and follow safety guidelines.",
    ],
    details: { type: "TECHNICAL", date: "2024-05-16", time: [15, 30] },
    prizes: [
      "Best VR Experience: VR Headset",
      "Most Innovative Use of VR: Recognition",
    ],
    contacts: [
      {
        incharge: "Caleb Smith",
        email: "caleb.smith@example.com",
        phno: "555-678-9012",
      },
      {
        incharge: "Hannah Davis",
        email: "hannah.davis@example.com",
        phno: "555-901-2345",
      },
    ],
    links: ["https://example.com/virtual-reality-showcase"],
    fee: 8,
    day: "DAY3",
    category: "WK",
    code: "VR21",
  },
  {
    title: "Book Fair",
    tagline: "A Celebration of Literature",
    description:
      "Discover a wide range of books and literary works at our annual book fair.",
    rules: [
      "No food or drinks near the books.",
      "Handle books with care and return them to designated areas.",
    ],
    details: { type: "NON-TECHNICAL", date: "2024-05-17", time: [11, 0] },
    prizes: [
      "Best Author: Book Publishing Opportunity",
      "Bookworm Award: Recognition",
    ],
    contacts: [
      {
        incharge: "Harper Wright",
        email: "harper.wright@example.com",
        phno: "555-123-4567",
      },
      {
        incharge: "Mason Harris",
        email: "mason.harris@example.com",
        phno: "555-987-6543",
      },
    ],
    links: ["https://example.com/book-fair"],
    fee: 5,
    day: "DAY2",
    category: "GEN",
    code: "BF02",
  },
];
