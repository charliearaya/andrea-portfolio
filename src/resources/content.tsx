import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work as Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Andrea",
  lastName: "Schulz",
  name: `Andrea Schulz`,
  role: "Product Designer",
  avatar: "/images/avatar_01.png",
  email: "andrea.isabelle.schulz@gmail.com",
  location: "Stockholm",
  languages: ["German · C2", "English · C1", "Swedish · B1"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Want to build something great together?</>,
  description: <>I'm open to new opportunities and happy to connect!</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  //   essential: true,
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andrea-schulz-designs-stockholm-a2z/",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const socialLinks: Record<string, string> = social.reduce<Record<string, string>>((acc, item) => {
  acc[item.name] = item.link;
  return acc;
}, {});

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing products through every stage</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SAS</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/sas",
  },
  subline: (
    <>
      I'm Andrea, a Product Designer working end-to-end across design systems and key user journeys.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Andrea is a Product Designer with a strong foundation in visual design, UX, and brand thinking. With experience spanning large organisations and early-stage startups, Andrea works end to end; from problem framing and user insight to interaction, UI, and scalable design systems.
        <br />
        <br />
        Comfortable working both independently and in cross-functional teams, Andrea collaborates closely with product owners, developers, and stakeholders to design solutions that balance user needs, business goals, and technical constraints.
        {/* In recent years UI design has become my strongest focus and passion. I bring structure, curiosity, analytical thinking, and an entrepreneurial mindset to every project -and I’m ready to support a team of driven, innovative creatives. */}
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SAS · Scandinavian Airlines",
        timeframe: "2022 - Present",
        role: "UI Designer",
        description: `Designed and evolved user interfaces across SAS digital products, 
                      focusing on usability, accessibility, and brand consistency. Contributed to 
                      the design system and collaborated closely with commercial, UX, and 
                      engineering teams on revenue-critical experiences.`,
        achievements: [],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "VNTRS (Venture Studio)",
        timeframe: "2022 - 2023",
        role: "UX/UI Designer",
        achievements: [],
        images: [],
        description: `Delivered UX/UI projects for multiple early-stage startups within a venture 
                      studio, working in fast-paced, iterative environments with frequent 
                      workshops and close founder collaboration`
      },
      {
        company: "NewGlue (acquired by Eniro)",
        timeframe: "2020 - 2022",
        role: "UX Designer",
        achievements: [],
        images: [],
        description: `Worked on improving the website sales funnel through user research, 
                      data-driven UX, and growth-focused design. Optimized the core product’s 
                      usability and interface, while also managing client projects in branding, 
                      graphic design, and web design`
      },
      {
        company: "PotentialPark",
        timeframe: "2020 - 2020",
        role: "UX/UI Consultant",
        achievements: [],
        images: [],
        description: `Project-based consultant on a client interface revamp, redesigning core 
                      user flows, information architecture, and a new dashboard, and 
                      contributing foundational design system elements.`
      },
      {
        company: "Netigate",
        timeframe: "2018 - 2020",
        role: "Graphic Designer",
        achievements: [],
        images: [],
        description: `Designed digital and print brand assets, developed brand guidelines, and 
                      collaborated cross-functionally to ensure consistent brand application`
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "UX/UI Design",
        description: <>IxDF - The Interaction Design Foundation<br />2020 - 2021</>
      },
      {
        name: "Graphic Design B.A.",
        description: <>Faber-Castell Akademie<br />2017 - 2020</>,
      },
      {
        name: "Tourism Management",
        description: <>IST University of Applied Sciences & IHK Germany<br />2013 - 2015</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Product Design",
        description: "End-to-end product design spanning discovery, UX, interaction design, UI, and accessibility — from early exploration to production-ready solutions.",
      },
      {
        title: "Design Systems & Product UI",
        description: "Building scalable UI systems through component libraries, design tokens, and documentation, ensuring consistency across teams and touchpoints.",
      },
      {
        title: "Research & Validation",
        description: "Using qualitative and quantitative methods — usability testing, A/B testing, and behavioral analytics — to inform decisions and validate outcomes.",
      },
      {
        title: "Delivery & Collaboration",
        description: "Working closely with product owners, developers, and stakeholders in agile environments to align design, business, and technical constraints.",
      },
      {
        title: "Visual & Brand Design (Prior Experience)",
        description: "Strong foundation in visual design and branding, supporting clear, coherent communication across digital products.",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const projects: Work = {
  path: "/work",
  label: "Work",
  title: `Projects`,
  description: `Design projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, socialLinks, newsletter, home, about, blog, projects as work, gallery };
