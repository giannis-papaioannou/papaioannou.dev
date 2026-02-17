import Image from "next/image";
import HouseSvg from "../public/svgs/house-regular.svg"
import ListSvg from "../public/svgs/list-solid.svg"

const nav_links = [
  {
    name: "about-me",
    href: "/",
    display: "About Me",
    svg: <Image src={HouseSvg} width={19.2} height={19.2} alt="" />,
  },
  {
    name: "projects",
    href: "/projects",
    display: "Projects",
    svg: <Image src={ListSvg} width={19.2} height={19.2} alt="" />,
  },
];

export default function NavBar({ active }: { active: string }) {
  return (
    <>
      <div className="hidden sm:flex navbar bg-base-300 shadow-sm">
        <div className="navbar-center">
          {nav_links.map((link) => (
            <a
              className={`ml-1 btn rounded-none btn-accent ${link.name === active ? "" : "btn-outline"}`}
              href={link.href}
              key={link.name}
            >
              {link.display}
            </a>
          ))}
        </div>
      </div>
      <div className="flex sm:hidden dock bg-accent">
        {nav_links.map((link) => (
          <a href={link.href} className={`${link.name === active ? "dock-active" : ""} dock-item`} key={link.name}>
            {link.svg}
            <span className={`dock-label `}>{link.display}</span>
          </a>
        ))}
      </div>
    </>
  );
}
