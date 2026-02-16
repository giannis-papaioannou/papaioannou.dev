function HomeSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
    </svg>
  );
}

function ProjectsSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z" />
    </svg>
  );
}

const nav_links = [
  { name: "about-me", href: "/", display: "About Me", svg: HomeSvg() },
  { name: "projects", href: "/projects", display: "Projects", svg: ProjectsSvg() },
];

export default function NavBar({ active }: { active: string }) {
  return (
    <>
      <div className="hidden sm:flex navbar bg-base-300 shadow-sm">
        <div className="navbar-center">
          {nav_links.map((link) => (
            <a
              className={`ml-1 btn rounded-none ${link.name === active ? "btn-primary" : "btn-neutral btn-outline"}`}
              href={link.href}
              key={link.name}
            >
              {link.display}
            </a>
          ))}
        </div>
      </div>
      <div className="flex sm:hidden dock">
        {nav_links.map((link) => (
          <a
            href={link.href}
            key={link.name}
          >
            {link.svg}
            <span className="dock-label">{link.display}</span>
          </a>
        ))}
      </div>
    </>
  );
}
