const roadmapData = [
    {
      id: "web-dev",
      title: "Web Development",
      stream: "CSE",
      interest: "Web Dev",
      year: "2nd Year",
      description: "Learn to build modern web applications with HTML, CSS, JavaScript, and frameworks.",
      books: ["HTML & CSS by Jon Duckett", "Eloquent JavaScript", "You Don’t Know JS"],
      courses: ["freeCodeCamp Web Dev", "The Odin Project", "Meta Frontend on Coursera"]
    },
    {
      id: "ai-ml",
      title: "AI / Machine Learning",
      stream: "CSE",
      interest: "AI/ML",
      year: "3rd Year",
      description: "Dive into the world of artificial intelligence, machine learning, and deep learning.",
      books: ["Hands-On ML with Scikit-Learn", "Pattern Recognition", "Deep Learning by Ian Goodfellow"],
      courses: ["Andrew Ng’s ML course", "FastAI", "MIT Deep Learning"]
    },
    {
        id: "ai-ml",
        title: "Foundations of AI",
        stream: "CSE",
        interest: "AI/ML",
        year: "1st Year",
        description: "Build strong fundamentals in math, logic, and problem-solving essential for AI/ML.",
        books: ["Mathematics for Machine Learning", "Linear Algebra Done Right", "Python Crash Course"],
        courses: ["Khan Academy Math for CS", "Python for Everybody - Coursera", "Harvard CS50"]
    },
      
    {
        id: "ai-ml",
        title: "Intro to Machine Learning",
        stream: "CSE",
        interest: "AI/ML",
        year: "2nd Year",
        description: "Dive into supervised and unsupervised learning, and ML algorithms.",
        books: ["Hands-On ML with Scikit-Learn", "Pattern Recognition & ML by Bishop", "Deep Learning with Python"],
        courses: ["Andrew Ng ML Course", "fast.ai Practical Deep Learning", "Google ML Crash Course"]
    },
      
      
    {
        id: "ai-ml",
        title: "Artificial Intelligence & Machine Learning",
        stream: "CSE",
        interest: "AI/ML",
        year: "4th Year",
        description: "Dive into the world of artificial intelligence, machine learning, and deep learning.",
        books: ["Hands-On ML with Scikit-Learn", "Deep Learning by Ian Goodfellow", "Python Machine Learning"],
        courses: ["Fast.ai", "Coursera ML by Andrew Ng", "DeepLearning.AI TensorFlow Developer"]
    },
    {
        id: "web-dev",
        title: "Web Basics",
        stream: "CSE ",
        interest: "Web Dev",
        year: "1st Year",
        description: "Get started with HTML, CSS, basic JavaScript and website structure.",
        books: ["HTML & CSS by Jon Duckett", "Eloquent JavaScript (Basics)", "JavaScript & JQuery"],
        courses: ["freeCodeCamp Responsive Web Design", "MDN Web Docs", "Codecademy Web Foundations"]
    },
    {
        id: "web-dev",
        title: "Backend & Fullstack Development",
        stream: "CSE",
        interest: "Web Dev",
        year: "3rd Year",
        description: "Learn Node.js, Express, databases, and integrate with frontend frameworks.",
        books: ["Node.js Design Patterns", "MongoDB: The Definitive Guide", "REST API Design Handbook"],
        courses: ["Fullstack Open", "Node.js - Codecademy", "MongoDB University Backend Dev"]
    },
    {
        id: "web-dev",
        title: "Advanced Web & DevOps",
        stream: "CSE",
        interest: "Web Dev",
        year: "4th Year",
        description: "Explore SSR, GraphQL, CI/CD, cloud deployments, and scaling web apps.",
        books: ["Fullstack GraphQL", "Modern Web Development on the JAMstack", "Web Scalability for Startup Engineers"],
        courses: ["Next.js Learn", "Netlify Fullstack Path", "Docker & DevOps on Udemy"]
    },
    {
        id: "app-dev",
        title: "App Dev Foundations",
        stream: "CSE",
        interest: "App Dev",
        year: "1st Year",
        description: "Learn programming basics and mobile UX/UI principles.",
        books: ["Head First Java", "Android Programming: Big Nerd Ranch Guide", "Flutter for Beginners"],
        courses: ["CS50x - Harvard", "Kotlin Bootcamp - Google", "Flutter Basics - AppBrewery"]
    },
    {
        id: "app-dev",
        title: "Android & iOS Basics",
        stream: "CSE",
        interest: "App Dev",
        year: "2nd Year",
        description: "Start building Android and iOS apps using native and cross-platform tools.",
        books: ["Kotlin in Action", "iOS Programming: Big Nerd Ranch", "Flutter in Action"],
        courses: ["Android Basics - Google", "iOS App Dev - Stanford", "Flutter Developer Bootcamp"]
    },
    {
        id: "app-dev",
        title: "Advanced App Development",
        stream: "CSE",
        interest: "App Dev",
        year: "3rd Year",
        description: "Dive into APIs, Firebase, animations, performance, and testing.",
        books: ["Pro Android with Kotlin", "Flutter Cookbook", "React Native in Action"],
        courses: ["Firebase for Flutter", "Jetpack Compose Pathway", "React Native on Codecademy"]
    },
    {
        id: "app-dev",
        title: "App Deployment & Monetization",
        stream: "CSE",
        interest: "App Dev",
        year: "4th Year",
        description: "Focus on app optimization, publishing, monetization, and real-world projects.",
        books: ["The Business of Mobile Apps", "Monetizing Mobile Apps", "Mobile DevOps Handbook"],
        courses: ["Google Play Academy", "App Store Publishing Guide", "DevOps for Mobile - Udemy"]
    },
    {
        id: "cyber-security",
        title: "Cybersecurity Basics",
        stream: "CSE",
        interest: "Cyber Security",
        year: "1st Year",
        description: "Understand computer networks, Linux basics, and cybersecurity principles.",
        books: ["Cybersecurity for Beginners", "The Linux Command Line", "Network+ Guide to Networks"],
        courses: ["Introduction to Cybersecurity - Cisco", "Linux Essentials - NDG", "Computer Networking - Stanford Lagunita"]
    },
    {
        id: "cyber-security",
        title: "Ethical Hacking & Tools",
        stream: "CSE",
        interest: "Cyber Security",
        year: "2nd Year",
        description: "Start ethical hacking, vulnerability scanning, and get hands-on with tools.",
        books: ["The Web Application Hacker's Handbook", "Metasploit Unleashed", "Kali Linux Revealed"],
        courses: ["CEH Prep Course", "TryHackMe Beginner Track", "Hack The Box Academy"]
    },
    {
        id: "cyber-security",
        title: "Network Security & Forensics",
        stream: "CSE",
        interest: "Cyber Security",
        year: "3rd Year",
        description: "Explore deep network protocols, digital forensics, and SIEM tools.",
        books: ["Network Security Essentials", "Digital Forensics with Kali Linux", "Practical Packet Analysis"],
        courses: ["Wireshark Training", "Blue Team Labs Online", "Security Onion Training"]
    },
    {
        id: "cyber-security",
        title: "Cyber Defense & Career Path",
        stream: "CSE",
        interest: "Cyber Security",
        year: "4th Year",
        description: "Prepare for certs like OSCP, dive into red/blue teaming, and career planning.",
        books: ["The Art of Exploitation", "Red Team Field Manual", "Blue Team Handbook"],
        courses: ["OSCP Prep - Offensive Security", "MITRE ATT&CK Labs", "Cybersecurity Career Path - Coursera"]
    },
    {
        id: "competitive-programming",
        title: "CP Fundamentals",
        stream: "CSE",
        interest: "Competitive Programming",
        year: "1st Year",
        description: "Master programming basics, I/O, conditions, and loops.",
        books: ["Programming Challenges", "C++ Primer", "Introduction to Algorithms (CLRS) - Light Read"],
        courses: ["CS50", "Coding Ninjas Intro Course", "Codeforces A/B Level Training"]
    },
    {
        id: "competitive-programming",
        title: "Intermediate CP",
        stream: "CSE",
        interest: "Competitive Programming",
        year: "2nd Year",
        description: "Focus on recursion, sorting, STL, and begin contests.",
        books: ["Competitive Programmer’s Handbook", "Data Structures & Algorithms in C++", "Algorithms by Sedgewick"],
        courses: ["Leetcode 150", "GFG DSA Self Paced", "CodeChef Starters"]
    },
    {
        id: "competitive-programming",
        title: "Advanced Data Structures",
        stream: "CSE",
        interest: "Competitive Programming",
        year: "3rd Year",
        description: "Dive into graphs, segment trees, DP, and participate in ICPC-style contests.",
        books: ["CP Handbook by Antti Laaksonen", "The Algorithm Design Manual", "DP Made Easy"],
        courses: ["BinarySearch.io", "CP Algorithm Guide", "AtCoder DP Contest"]
    },
    {
        id: "competitive-programming",
        title: "Mastery & Mentorship",
        stream: "CSE",
        interest: "Competitive Programming",
        year: "4th Year",
        description: "Refine your problem-solving, start mentorship, and prep for coding interviews.",
        books: ["Cracking the Coding Interview", "Elements of Programming Interviews", "Leetcode Patterns Guide"],
        courses: ["InterviewBit Track", "Codeforces Div1/2 Ladder", "TopCoder Tutorials"]
    }
      
      
      
      
      
      
      
      
      
        
      
      
      

      

      
      
      
      

      
    // Add more...
  ];
  
  export default roadmapData;
  