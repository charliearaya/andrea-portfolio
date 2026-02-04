import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work as Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Andrea",
  lastName: "Schulz",
  name: `Andrea Schulz`,
  role: "UX/UI Designer",
  avatar: "/images/avatar_01.png",
  email: "andrea.isabelle.schulz@gmail.com",
  location: "Europe/Stockholm",
  languages: ["English", "German", "Swedish"],
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
      I'm Andrea, a Product Designer working end-to-end across design systems and key user journeys – balancing user needs, business goals, and tech constraints.
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Andrea is a UX/UI designer with a strong foundation in graphic design and marketing, and experience that spans across IT, branding, HR, tourism, and start-ups.
        Andrea has worked in various team setups - from solo projects to cross-functional collaboration alongside Product owners and developers.
        <br />
        {/* In recent years UI design has become my strongest focus and passion. I bring structure, curiosity, analytical thinking, and an entrepreneurial mindset to every project -and I’m ready to support a team of driven, innovative creatives. */}
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Scandinavian Airlines (SAS)",
        timeframe: "2022 - Present",
        role: "UI Designer",
        description: "Designed and evolved user interfaces across SAS’s digital products, focusing on usability, accessibility, visual consistency, and brand alignment. Contributed to building and maintaining a design system, including reusable UI components and documentation. Collaborating closely with commercial, UX, and engineering teams on revenue-critical areas, balancing business goals with clear and trust-building user experiences.",
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
        company: "VNTRS",
        timeframe: "2022 - 2023",
        role: "UX/UI Designer",
        achievements: [],
        images: [],
        description: "Delivered UX/UI projects for multiple clients through the consultancy, and assigned in-house to a client team on a long-term project."
      },
      {
        company: "NewGlue",
        timeframe: "2020 - 2022",
        role: "UX Designer",
        achievements: [],
        images: [],
        description: "Worked on improving the website sales funnel through user research, data-driven UX, and growth-focused design. Optimized the core product’s usability and interface, while also managing client projects in branding, graphic design, and web design."
      },
      {
        company: "PotentialPark",
        timeframe: "2020 - 2020",
        role: "UX/UI Consultant (Project-based)",
        achievements: [],
        images: [],
        description: "Project-based consultant for the revamp of Potentialpark’s client interface. Collaborated closely with the internal team to redesign key user flows, enhance navigation through improved information architecture, and deliver a new dashboard. Developed foundational design system components, including layout structure, visual hierarchy, color system, typography styles, and branded UI elements."
      },
      {
        company: "Netigate",
        timeframe: "2018 - 2020",
        role: "Graphic Designer",
        achievements: [],
        images: [],
        description: "Designed digital and print marketing materials, developed brand guidelines, and collaborated closely with the UX/UI team to align branding across departments."
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "IxDF - The Interaction Design Foundation",
        description: <>UX/UI Design, 2020 - 2021</>,
      },
      {
        name: "Faber-Castell Akademie",
        description: <>Graphic Design B.A., 2017 - 2020</>,
      },
      {
        name: "IST University of Applied Sciences",
        description: <>Bachelor Professional of Tourism, 2013 - 2015</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Design & Prototyping",
        description: (
          <>Figma, UI design, prototyping, responsive design</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Design Systems & Product UI",
        description: (
          <>Zeroheight, component libraries, design tokens, scalability, inclusive design</>
        ),
      },
      {
        title: "UX Research & Analytics",
        description: (
          <>Hotjar, Google Analytics, Mixpanel, Maze, Lookback, A/B testing, conversion funnel analytics</>
        ),
      },
      {
        title: "Workflow & Collaboration",
        description: (
          <>Agile workflows, Jira, cross-functional collaboration, stakeholder collaboration</>
        ),
      },
      {
        title: "Visual & Brand Design (prior experience)",
        description: (
          <>Adobe Creative Suite (Photoshop, Illustrator, InDesign, Lightroom)</>
        ),
      },
      {
        title: "Supporting Skills",
        description: (
          <>Basic motion and video editing (After Effects, Premiere Pro)</>
        ),
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
