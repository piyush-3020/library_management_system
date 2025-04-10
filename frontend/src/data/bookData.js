const booksData = [
  {
    id: 1,
    title: "Engineering Physics",
    author: "R.K. Gaur, S.L. Gupta",
    category: "Physics",
    coverImage: "https://m.media-amazon.com/images/I/91eqZ1oD3qL.jpg",
    rating: 4.5,
    year: 2010,
    description: "Covers fundamental physics concepts tailored for B.Tech students."
  },
  {
    id: 2,
    title: "Basic Electrical Engineering",
    author: "D.P. Kothari, I.J. Nagrath",
    category: "Electrical",
    coverImage: "https://m.media-amazon.com/images/I/81e06MHYxbL.jpg",
    rating: 4.6,
    year: 2013,
    description: "Introductory guide to electrical engineering principles and practices."
  },
  {
    id: 3,
    title: "Engineering Mechanics",
    author: "S. Timoshenko, D.H. Young",
    category: "Mechanical",
    coverImage: "https://m.media-amazon.com/images/I/71KzKkTCVZL.jpg",
    rating: 4.7,
    year: 2006,
    description: "Essential concepts of statics and dynamics for mechanical engineers."
  },
  {
    id: 4,
    title: "Programming in ANSI C",
    author: "E. Balagurusamy",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/81Lz7hfTy-L.jpg",
    rating: 4.4,
    year: 2011,
    description: "Comprehensive book for learning C programming with examples."
  },
  {
    id: 5,
    title: "Engineering Chemistry",
    author: "Jain & Jain",
    category: "Chemistry",
    coverImage: "https://m.media-amazon.com/images/I/81oU6hP-YcL.jpg",
    rating: 4.3,
    year: 2009,
    description: "Chemical principles and applications relevant to engineers."
  },
  {
    id: 6,
    title: "Introduction to Algorithms",
    author: "Cormen et al.",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    rating: 4.8,
    year: 2009,
    description: "Definitive guide to modern algorithms and their analysis."
  },
  {
    id: 7,
    title: "Digital Design",
    author: "Morris Mano",
    category: "Electronics",
    coverImage: "https://m.media-amazon.com/images/I/71cMj3Gi1eL.jpg",
    rating: 4.7,
    year: 2015,
    description: "A foundational book on digital logic and computer design."
  },
  {
    id: 8,
    title: "Signals and Systems",
    author: "Alan V. Oppenheim",
    category: "Electronics",
    coverImage: "https://m.media-amazon.com/images/I/61Mxe-R3a2L.jpg",
    rating: 4.6,
    year: 2010,
    description: "Understanding signal processing fundamentals for ECE students."
  },
  {
    id: 9,
    title: "Data Structures Using C",
    author: "Reema Thareja",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/81-8QFZKjDL.jpg",
    rating: 4.4,
    year: 2014,
    description: "A student-friendly introduction to data structures in C."
  },
  {
    id: 10,
    title: "Control Systems Engineering",
    author: "I.J. Nagrath, M. Gopal",
    category: "Electrical",
    coverImage: "https://m.media-amazon.com/images/I/71FYK9WvJkL.jpg",
    rating: 4.5,
    year: 2013,
    description: "Core concepts of control systems for electrical and electronics."
  },
  {
    id: 11,
    title: "Operating System Concepts",
    author: "Silberschatz, Galvin",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/81UZLfzhD-L.jpg",
    rating: 4.6,
    year: 2012,
    description: "Fundamentals of modern operating systems with case studies."
  },
  {
    id: 12,
    title: "Strength of Materials",
    author: "R.K. Bansal",
    category: "Mechanical",
    coverImage: "https://m.media-amazon.com/images/I/71R8cG36yQL.jpg",
    rating: 4.4,
    year: 2010,
    description: "Detailed study of internal forces in engineering structures."
  },
  {
    id: 13,
    title: "Machine Design",
    author: "R.S. Khurmi",
    category: "Mechanical",
    coverImage: "https://m.media-amazon.com/images/I/71P9VWETNfL.jpg",
    rating: 4.5,
    year: 2013,
    description: "Design principles of mechanical components and systems."
  },
  {
    id: 14,
    title: "Thermodynamics",
    author: "P.K. Nag",
    category: "Mechanical",
    coverImage: "https://m.media-amazon.com/images/I/81HshKfW1uL.jpg",
    rating: 4.6,
    year: 2011,
    description: "Comprehensive understanding of thermodynamic principles."
  },
  {
    id: 15,
    title: "Database System Concepts",
    author: "Korth, Silberschatz",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/81pe3p4W7kL.jpg",
    rating: 4.7,
    year: 2013,
    description: "Theory and practice of relational databases and SQL."
  },
  {
    id: 16,
    title: "Environmental Studies",
    author: "Erach Bharucha",
    category: "General",
    coverImage: "https://m.media-amazon.com/images/I/71kl1SB9WEL.jpg",
    rating: 4.2,
    year: 2005,
    description: "Introductory guide to environmental science for engineers."
  },
  {
    id: 17,
    title: "Microprocessors and Microcontrollers",
    author: "N. Senthil Kumar",
    category: "Electronics",
    coverImage: "https://m.media-amazon.com/images/I/81AzMbB+2pL.jpg",
    rating: 4.3,
    year: 2011,
    description: "Covers microprocessor fundamentals with applications."
  },
  {
    id: 18,
    title: "Fluid Mechanics",
    author: "R.K. Bansal",
    category: "Mechanical",
    coverImage: "https://m.media-amazon.com/images/I/81KzKZLaLzL.jpg",
    rating: 4.5,
    year: 2005,
    description: "Hydraulics and flow principles used in mechanical systems."
  },
  {
    id: 19,
    title: "Software Engineering",
    author: "Ian Sommerville",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/71yZzKInOvL.jpg",
    rating: 4.5,
    year: 2011,
    description: "Best practices for building large-scale software systems."
  },
  {
    id: 20,
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell, Peter Norvig",
    category: "AI/ML",
    coverImage: "https://m.media-amazon.com/images/I/71bGS27Sz3L.jpg",
    rating: 4.8,
    year: 2016,
    description: "Comprehensive textbook on modern AI techniques and applications."
  },
  {
    id: 21,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    coverImage: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    rating: 4.7,
    year: 1993,
    description: "A shepherd's journey to fulfill his personal legend."
  },
  {
    id: 22,
    title: "1984",
    author: "George Orwell",
    category: "Dystopian",
    coverImage: "https://m.media-amazon.com/images/I/81AYGE7QIPL.jpg",
    rating: 4.8,
    year: 1949,
    description: "A chilling dystopia where Big Brother is always watching."
  },
  {
    id: 23,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Classic",
    coverImage: "https://m.media-amazon.com/images/I/81OtbRzQHTL.jpg",
    rating: 4.9,
    year: 1960,
    description: "A moving story on race and justice in the Deep South."
  },
  {
    id: 24,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic",
    coverImage: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
    rating: 4.6,
    year: 1925,
    description: "A tale of wealth, love, and the American dream."
  },
  {
    id: 25,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    coverImage: "https://m.media-amazon.com/images/I/81vpsIs58WL.jpg",
    rating: 4.7,
    year: 1813,
    description: "Witty and romantic tale of Elizabeth Bennet and Mr. Darcy."
  },
  {
    id: 26,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Classic",
    coverImage: "https://m.media-amazon.com/images/I/71m+KZ9yB+L.jpg",
    rating: 4.4,
    year: 1951,
    description: "A teenage boy's perspective on the world around him."
  },
  {
    id: 27,
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "Young Adult",
    coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    rating: 4.5,
    year: 2012,
    description: "Two teens with cancer fall in love in a touching story."
  },
  {
    id: 28,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    coverImage: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
    rating: 4.8,
    year: 1937,
    description: "Bilbo Baggins embarks on a mythical journey with dwarves."
  },
  {
    id: 29,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    coverImage: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg",
    rating: 4.9,
    year: 1997,
    description: "The beginning of Harry Potter's magical adventure at Hogwarts."
  },
  {
    id: 30,
    title: "The Book Thief",
    author: "Markus Zusak",
    category: "Historical Fiction",
    coverImage: "https://m.media-amazon.com/images/I/81eA+zMAYBL.jpg",
    rating: 4.7,
    year: 2005,
    description: "A girl discovers the power of books in Nazi Germany."
  },
  {
    id: 31,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fantasy",
    coverImage: "https://m.media-amazon.com/images/I/81eOm2g-5sL.jpg",
    rating: 4.6,
    year: 2020,
    description: "A woman explores alternate lives in a magical library."
  },
  {
    id: 32,
    title: "Life of Pi",
    author: "Yann Martel",
    category: "Adventure",
    coverImage: "https://m.media-amazon.com/images/I/91wQ1Un9GdL.jpg",
    rating: 4.5,
    year: 2001,
    description: "A boy survives on a lifeboat with a Bengal tiger."
  },
  {
    id: 33,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Drama",
    coverImage: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
    rating: 4.8,
    year: 2003,
    description: "An emotional journey of friendship and redemption in Afghanistan."
  },
  {
    id: 34,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Thriller",
    coverImage: "https://m.media-amazon.com/images/I/81E9mHYoszL.jpg",
    rating: 4.6,
    year: 2019,
    description: "A psychotherapist investigates why a woman stopped speaking after murdering her husband."
  },
  {
    id: 35,
    title: "Verity",
    author: "Colleen Hoover",
    category: "Thriller",
    coverImage: "https://m.media-amazon.com/images/I/71ePwV1bFCL.jpg",
    rating: 4.7,
    year: 2018,
    description: "A chilling romantic thriller with a shocking plot twist."
  },
  {
    id: 36,
    title: "It Ends With Us",
    author: "Colleen Hoover",
    category: "Romance",
    coverImage: "https://m.media-amazon.com/images/I/81s0B6NYXML.jpg",
    rating: 4.7,
    year: 2016,
    description: "A heartbreaking love story tackling serious real-life issues."
  },
  {
    id: 37,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    category: "Mystery",
    coverImage: "https://m.media-amazon.com/images/I/81WWiiLgtyL.jpg",
    rating: 4.6,
    year: 2018,
    description: "A woman raised in the wild becomes a murder suspect."
  },
  {
    id: 38,
    title: "Before We Were Strangers",
    author: "Renée Carlino",
    category: "Romance",
    coverImage: "https://m.media-amazon.com/images/I/71okyNL2G8L.jpg",
    rating: 4.5,
    year: 2015,
    description: "Two college sweethearts reconnect after years apart."
  },
  {
    id: 39,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    category: "Drama",
    coverImage: "https://m.media-amazon.com/images/I/81O-tYpG7kL.jpg",
    rating: 4.7,
    year: 2017,
    description: "A reclusive Hollywood star tells her story to a young journalist."
  },
  {
    id: 40,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    category: "Fantasy",
    coverImage: "https://m.media-amazon.com/images/I/71nGVvL2-EL.jpg",
    rating: 4.6,
    year: 2011,
    description: "A magical competition between two young illusionists turns into love."
  },
  {
    id: 41,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    coverImage: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 4.9,
    year: 2018,
    description: "Tiny changes, remarkable results — how habits shape success."
  },
  {
    id: 42,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    category: "Self Help",
    coverImage: "https://m.media-amazon.com/images/I/81N7FmJhbhL.jpg",
    rating: 4.8,
    year: 1989,
    description: "Timeless principles of fairness, integrity, and human dignity."
  },
  {
    id: 43,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "Spirituality",
    coverImage: "https://m.media-amazon.com/images/I/71Y5Y-9g2cL.jpg",
    rating: 4.7,
    year: 1997,
    description: "A guide to spiritual enlightenment through present moment awareness."
  },
  {
    id: 44,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Success",
    coverImage: "https://m.media-amazon.com/images/I/81z6fK+UNUL.jpg",
    rating: 4.6,
    year: 1937,
    description: "A classic that unveils the secret to wealth and success."
  },
  {
    id: 45,
    title: "You Can Heal Your Life",
    author: "Louise Hay",
    category: "Wellness",
    coverImage: "https://m.media-amazon.com/images/I/81xqbBbNz7L.jpg",
    rating: 4.6,
    year: 1984,
    description: "Affirmations and mindset healing for a better life."
  },
  {
    id: 46,
    title: "Can’t Hurt Me",
    author: "David Goggins",
    category: "Motivational",
    coverImage: "https://m.media-amazon.com/images/I/81n3leU5tXL.jpg",
    rating: 4.8,
    year: 2018,
    description: "Lessons in mental toughness from a Navy SEAL."
  },
  {
    id: 47,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    coverImage: "https://m.media-amazon.com/images/I/81vkg4y1gKL.jpg",
    rating: 4.7,
    year: 2016,
    description: "Rules for focused success in a distracted world."
  },
  {
    id: 48,
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    category: "Philosophy",
    coverImage: "https://m.media-amazon.com/images/I/81fFxfz6f4L.jpg",
    rating: 4.5,
    year: 2016,
    description: "How ego can ruin ambition and how to master it."
  },
  {
    id: 49,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "Self Help",
    coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    rating: 4.5,
    year: 2016,
    description: "Counterintuitive advice for living a good life."
  },
  {
    id: 50,
    title: "The Miracle Morning",
    author: "Hal Elrod",
    category: "Morning Routine",
    coverImage: "https://m.media-amazon.com/images/I/81KrbqF0efL.jpg",
    rating: 4.6,
    year: 2012,
    description: "Transform your mornings and transform your life."
  },
  {
    id: 51,
    title: "Start With Why",
    author: "Simon Sinek",
    category: "Leadership",
    coverImage: "https://m.media-amazon.com/images/I/81bPKD8M4rL.jpg",
    rating: 4.7,
    year: 2009,
    description: "Discover your purpose and inspire those around you."
  },
  {
    id: 52,
    title: "Awaken the Giant Within",
    author: "Tony Robbins",
    category: "Personal Development",
    coverImage: "https://m.media-amazon.com/images/I/91iYzd2B2cL.jpg",
    rating: 4.6,
    year: 1991,
    description: "Take control of your emotions, finances, and life."
  },
  {
    id: 53,
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    category: "Wisdom",
    coverImage: "https://m.media-amazon.com/images/I/81RCff1NpnL.jpg",
    rating: 4.6,
    year: 1997,
    description: "Ancient Toltec wisdom for freedom and happiness."
  },
  {
    id: 54,
    title: "Grit",
    author: "Angela Duckworth",
    category: "Motivation",
    coverImage: "https://m.media-amazon.com/images/I/81fNs8N9hnL.jpg",
    rating: 4.5,
    year: 2016,
    description: "The power of passion and perseverance."
  },
  {
    id: 55,
    title: "Make Your Bed",
    author: "Admiral William H. McRaven",
    category: "Discipline",
    coverImage: "https://m.media-amazon.com/images/I/81iAi3RRnPL.jpg",
    rating: 4.7,
    year: 2017,
    description: "Simple rules that can change your life."
  },
  {
    id: 56,
    title: "Drive",
    author: "Daniel H. Pink",
    category: "Motivation",
    coverImage: "https://m.media-amazon.com/images/I/71T+N3pGvvL.jpg",
    rating: 4.5,
    year: 2009,
    description: "The surprising truth about what motivates us."
  },
  {
    id: 57,
    title: "Mindset",
    author: "Carol S. Dweck",
    category: "Psychology",
    coverImage: "https://m.media-amazon.com/images/I/71nVdEUXEzL.jpg",
    rating: 4.7,
    year: 2006,
    description: "The new psychology of success: growth vs fixed mindset."
  },
  {
    id: 58,
    title: "The War of Art",
    author: "Steven Pressfield",
    category: "Creativity",
    coverImage: "https://m.media-amazon.com/images/I/71Zc+fH+h1L.jpg",
    rating: 4.6,
    year: 2002,
    description: "Break through creative blocks and win your inner battles."
  },
  {
    id: 59,
    title: "Tools of Titans",
    author: "Tim Ferriss",
    category: "Life Hacks",
    coverImage: "https://m.media-amazon.com/images/I/81hcC3A1qzL.jpg",
    rating: 4.7,
    year: 2016,
    description: "Tactics, routines, and habits from top performers."
  },
  {
    id: 60,
    title: "Feel the Fear and Do It Anyway",
    author: "Susan Jeffers",
    category: "Confidence",
    coverImage: "https://m.media-amazon.com/images/I/71W1kX5U3WL.jpg",
    rating: 4.4,
    year: 1987,
    description: "How to face fears and take control of your life."
  }
];
  
  export default booksData;
  