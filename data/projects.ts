import { ProjectCategory } from "./types";

export const projects: ProjectCategory[] = [
  {
    images: [],
    title: "Personal Site",
    description:
      "I developed this personal website, showcasing my skills in the frontend side of development using NextJS, after some issues arised with my ghost deployment.",
    tags: ["NextJS", "TailwindCSS", "DaisyUI", "TypeScript"],
    status: "Ongoing",
    link: "https://github.com/giannis-papaioannou/papaioannou.dev",
  },
  {
    images: [],
    title: "Homelab",
    description:
      "In my spare time, I've been developing a Homelab project that operates on a Proxmox cluster. This showcases my skills in designing, implementing, and managing complex systems and infrastructure. The cluster hosts various open-source services that I utilize daily.",
    tags: [
      "Proxmox",
      "Wireguard",
      "Vaultwarden",
      "Immich",
      "Adguard",
      "Open-WebUI",
    ],
    status: "Ongoing",
    link: "",
  },
  {
    images: [],
    title: "Warden IP tracker",
    description:
      "Containerized agent that monitors dynamic IP changes and sends real-time notifications via Discord webhooks.",
    tags: [
      "Python",
      "Docker",
    ],
    status: "October 2022",
    link: "https://github.com/giannis-papaioannou/warden",
  },  
  {
    images: [],
    title: "Steward",
    description:
      "A Docker-based service that assesses network speed and latency.",
    tags: [
      "Python",
      "Docker",
      "InfluxDB"
    ],
    status: "November 2020",
    link: "https://github.com/giannis-papaioannou/steward",
  }, 
  {
    images: [],
    title: "Scarletmoon",
    description:
      "A service that creates inverted indexes to facilitate efficient text searching without needing predefined document structures.",
    tags: [
      "Python",
      "Nameko",
    ],
    status: "August 2018",
    link: "https://github.com/giannis-papaioannou/scarletmoon",
  },
  {
    images: [],
    title: "All Pay Auction",
    description:
      "This is a university project for the algorithmic trading course. It involves implementing an iterative best response method, determining the optimal move by taking into account the actions of other bidders.",
    tags: [
      "Python",
      "Matplotlib",
    ],
    status: "February 2018",
    link: "https://github.com/giannis-papaioannou/allpayauction",
  },
  {
    images: [],
    title: "Flamel",
    description:
      "Graphical interface showcasing different path-finding algorithms.",
    tags: [
      "Java",
    ],
    status: "July 2017",
    link: "https://github.com/giannis-papaioannou/flamel",
  },
];
