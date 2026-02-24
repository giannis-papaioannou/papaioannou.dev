import NavBar from "../../components/navbar";
import ProjectsList from "@/components/projects/projects";

export default function Projects() {
  return (
    <>
      <NavBar active="projects"></NavBar>
      <div className="p-5 md:p-10">
        <div className="flex-none md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:justify-center-safe mt-15 sm:mt-0">
          <ProjectsList />
        </div>
      </div>
    </>
  );
}
