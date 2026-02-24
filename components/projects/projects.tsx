import { projects } from "@/data/projects";
import ProjectCard from "./project";

export default function ProjectsList() {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </>
  );
}
