import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Oluwatobiloba Ajiboye",
  initials: "OA",
  url: "https://techwithtobi.vercel.app",
  location: "Lagos,NG",
  locationLink: "https://www.google.com/maps/lagos",
  description:
    "Full time student, part time software engineer. I love building cool projects.",
  summary:
    "Hey there! 👋 Started coding with **Python** at age **_12_**. Fell in love with **_web development_** and now work as a **_part time software engineer_** building cool projects. When I'm not coding for work, I'm working on my own products! 🚀",
  avatarUrl: "/me.jpg",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Python", "Postgres","MongoDB","Solidity","Golang" ,"Flutter"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "oluwatobilobadeveloper@gmail.cm",
    tel: "+2348087013902",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/tobiongit",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/tobionlinkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/tobionx",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/tobionyt",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Leaders Network",
      href: "https://eleadersnetwork.com.ng",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Lead Software Engineer",
      logoUrl: "/leaders.jpg",
      start: "July 2023",
      end: "January 2025",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Westland University",
      href: "https://westlanduniversity.com",
      degree: "Bachelor's Degree of Software Engineering (B.Sc)",
      logoUrl: "/westland.jpg",
      start: "2025",
      end: "2028",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s4",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "King Ado High School",
      degree: "Senior Secondary School Certificate (SSCE)",
      href: "",
      logoUrl: "/kingado.jpg",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Westplace",
      href: "https://westlplace.vercel.app",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        "Westland University Marketplace - A platform for students to buy and sell items with their fellow Westland students.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Paystack",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/westplace.png",
      video: "",
    },
    {
      title: "BuyPop",
      href: "https://buypop.vercel.app",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "A tool designed to help you convert your website visitors into buyers and significantly increase your token sales.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Lemonsqueezy",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://buypop.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://zephyrdev.vercel.app/brandbird-2.svg",
      video:""
    },
    {
      title: "Pumponabs",
      href: "https://www.pumponabs.fun",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Developed a memecoin launchpad platform on Abstractchain, enabling users to launch and manage meme cryptocurrency tokens with automated smart contract deployment.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Abstractchain",
        "AGW"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.pumponabs.fun",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pumponabs.png",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Naija SDGs Hackathon",
      dates: "December 2nd - 3rd, 2023",
      location: "Lagos, Nigeria",
      description:
        "Developed a voice payment system that enables financial transactions through voice commands in Nigerian dialects, making digital payments more accessible and inclusive for local communities.",
      image:
        "https://cdn.punchng.com/wp-content/uploads/2024/12/06025624/pX0co_ye_400x400.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "REDACTED Hackathon - Lagos City node by NEAR Africa",
      dates: "October 21st - 24th,  2024",
      location: "Lagos, Nigeria",
      description:
        "Developed an innovative NFT design studio that empowers artists to seamlessly create and mint digital art on NEAR blockchain with a simplified user experience.",
      image:
        "https://taikai.azureedge.net/es81HlBZ8pI_YNIpSx4ueCGWMbuobvbMfmq4XNHUtDE/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9lY2E0Zjk1MC04ZTRmLTExZWYtYTM0NC1iZDZhMjI2ZGExMWRSZWRhY3RlZCBIYWNrYXRob24tIExhZ29zIENpdHkgTm9kZS5wbmc",
      mlh: "",
      links: [],
    },
   
  ]
} as const;
