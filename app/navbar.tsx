export default function NavBar({ active }: { active: string }) {
  const nav_links = [
    { name: "about-me", href: "/", display: "About Me" },
    { name: "projects", href: "/projects", display: "Projects" },
  ];
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          {nav_links.map((link) => (
            <a
              className={`btn ${link.name === active ? "btn-primary" : ""}`}
              href={link.href}
              key={link.name}
            >
              {link.display}
            </a>
          ))}
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
}
