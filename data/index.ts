export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects&Experience", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize UX and visual design, fostering open communication ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 text-slate-950 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Communication.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "Exceptional time management skill",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "Technology.png",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Building a TS Holiday Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "The Wild Oasis",
    des: "Explore a luxurious cabin hotel nestled in the heart of the Italian Dolomites. Surrounded by majestic mountains and serene forests, our exclusive cabins offer an unparalleled retreat into nature's beauty. ",
    img: "/WildOasis.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/supabase.png",
    ],
    link: "https://the-wild-oasis-nextjs-demo.vercel.app/",
  },
  {
    id: 2,
    title: "Italian Pizzeria",
    des: "Your go-to destination for authentic Italian cuisine. Our menu features six creative dishes, all prepared in our stone oven using organic ingredients.",
    img: "/Pizza.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/Presmia.png",
      "/Aceternity.png",
    ],
    link: "https://fast-react-pizza-rho-silk.vercel.app/",
  },
  {
    id: 3,
    title: "Flinders Chemical Management System",
    des: "A system assit differnet user roles to manage chemicals for research purpose",
    img: "/FlindersChemicalOrderingSys.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/sentry.png"],
    link: "https://comp-9034-dev-ops.vercel.app/login",
  },
  {
    id: 4,
    title: "Celestial Plaza E-Commerce Store",
    des: "A utter brilliant place for you to either pick up your daily consumables or sumptuous merchandises! Happy shopping",
    img: "/store.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/wix.png",
      "/Aceternity.png",
    ],
    link: "https://celestial-plaza.vercel.app",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Working with Jacky was an incredible experience. His attention to detail, creative problem-solving, and unwavering commitment to quality exceeded our expectations. Jacky’s ability to turn ideas into impactful results is truly remarkable. For anyone looking for a reliable and skilled developer, Jacky is the perfect choice.",
    name: "Sherry Wang",
    title: "Director of RuiXin Information Technology",
  },
  {
    id: 2,
    quote:
      "Jacky’s expertise and passion for development shine through in every project he takes on. His clear communication, innovative thinking, and timely delivery made him a joy to collaborate with. I couldn’t recommend him highly enough to anyone looking to bring their vision to life with excellence.",
    name: "Jason Marshall",
    title: "Project Manager of Intelligent Indeed",
  },
  {
    id: 3,
    quote:
      "He's passion for solving complex tech challenges and his drive to improve user experiences are remarkable. His dream of becoming a Full-Stack Engineer is evident in his dedication to refining both front-end and back-end systems. Combined with his exceptional communication skills and collaborative approach, Jacky is a standout professional.",
    name: "Brett Wilkinson",
    title: "Professor at Flinders University",
  },
  {
    id: 4,
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Herbal Li",
    title: "Tech Lead at RuiXin Information Technology",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "UI design Intern (6 mos)",
    desc: "Core contributor to the UI design of the Flinders Chemical Management System, I collaborated closely with the design team to craft intuitive and visually engaging interfaces using Figma. I focused on creating seamless navigation and user-friendly layouts that elevated the overall user experience. By emphasizing accessibility and efficiency, the UI design reduced task completion times by 20%. ",
    className: "md:col-span-2",
    thumbnail: "/avatar.png",
  },
  {
    id: 2,
    title: "Backend Developer - RuiXin Tech (1 year)",
    desc: "As a Backend Developer for the Restaurant Online Order System, I utilized Spring Boot and Spring Cloud to build a scalable and efficient backend architecture. I designed and implemented an ER diagram to ensure a robust database structure using MySQL, while integrating Redis for caching to enhance system responsiveness during high-traffic scenarios. I developed and deployed secure and scalable RESTful APIs, enabling seamless integration with the frontend. Through close collaboration with the testing team, I identified and resolved critical issues, ensuring the delivery of a reliable and high-performing system that received commendation from stakeholders.",
    className: "md:col-span-2",
    thumbnail: "/SpringBoot.png",
  },
  {
    id: 3,
    title: "Frontend Engineer - RuiXin Tech, Flinders Uni (1 year)",
    desc: "Pivotal web developer in designing and developing an intuitive Single Page Application (SPA) using React, TypeScript, and Next.js. Collaborating with the design team through Figma, I contributed to creating seamless and user-friendly interfaces that enhanced the user experience and reduced task completion times by 20%.",
    className: "md:col-span-2",
    thumbnail: "/Next.png",
  },
  {
    id: 4,
    title: "Testing Leadership - Flinders Uni (4 mos)",
    desc: "As a key leader in the testing phase of the Flinders Chemical Management System, I utilized the Jest library to implement robust unit tests for backend APIs. My proactive approach to identifying critical bugs early reduced the bug-fix cycle by 30%. By leveraging Azure DevOps, I ensured seamless communication and collaboration between testing and backend teams. This leadership, coupled with my passion for problem-solving, ensured the delivery of a reliable and well-tested system that met all user requirements and exceeded expectations during user acceptance testing.",
    className: "md:col-span-2",
    thumbnail: "/Jest.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/JackyChn",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jackyy-chn-66a342247/",
  },
];
