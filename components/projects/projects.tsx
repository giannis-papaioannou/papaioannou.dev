import { projects } from "@/data/projects";
import GithubSvg from "../../public/svgs/github-brands-solid.svg";
import Image from "next/image";

export default function ProjectsList() {
  return (
    <>
      {projects.map((project) => (
        <div
          className="card bg-base-300 shadow-sm sm:max-w-lg mt-5 sm:mt-0"
          key={project.title}
        >
          <div className="card-body">
            <div className="flex justify-between">
              <a
                className={`text-base uppercase font-bold opacity-100 ${project.link && "text-secondary underline"}`}
                href={project.link ? project.link : undefined}
                target="_blank"
              >
                {project.title}
              </a>
              <div className="text-xs uppercase font-semibold opacity-60 md:flex justify-end">
                {project.status}
              </div>
            </div>
            <div className="text-md">{project.description}</div>
            {project.tags.length > 0 && (
              <>
                <div className="divider" />
                <div className="text-xs font-semibold opacity-60">
                  {project.tags.map((tag) => (
                    <div className="badge mr-0.5 mt-0.5" key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
