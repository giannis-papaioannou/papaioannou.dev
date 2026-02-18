import NavBar from "../../components/navbar";
import ProjectsList from "@/components/projects/projects";

export default function Projects() {
  return (
    <>
      <NavBar active="projects"></NavBar>

      <div className="md:m-10 p-5 md:p-10">
        <div className="flex-none md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:justify-center-safe">
          <ProjectsList />
        </div>
      </div>     
      <div className="mb-10 md:hidden">
        <div className="divider"></div>
      </div>
    </>
  );
}
