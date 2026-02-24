import Image from "next/image";
import HouseSvg from "../public/svgs/house-regular.svg";
import ListSvg from "../public/svgs/list-solid.svg";
import { JSX } from "react";

const nav_links = [
  {
    name: "about-me",
    href: "/",
    display: "About Me",
    svg: <Image src={HouseSvg} width={19.2} height={19.2} alt="home-icon" />,
  },
  {
    name: "projects",
    href: "/projects",
    display: "Projects",
    svg: <Image src={ListSvg} width={19.2} height={19.2} alt="projects-icon" />,
  },
];

export default function NavBar({
  active,
  children,
}: {
  active: string;
  children?: JSX.Element;
}) {
  return (
    <>
      <div className="fixed z-1 md:relative md:flex justify-center navbar bg-base-300 shadow-sm">
        <div className="lg:navbar-start">
          {nav_links.map((link) => (
            <a
              className={`ml-1 btn rounded-none btn-accent ${link.name === active ? "" : "btn-outline"}`}
              href={link.href}
              key={link.name}
            >
              {link.svg}
              {link.display}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:navbar-center">{children}</div>
        <div className="hidden lg:flex lg:navbar-end"></div>
      </div>
      <div className="hidden md:flex lg:hidden justify-center">{children}</div>
    </>
  );
}
