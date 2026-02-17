import { experiences } from "@/data/experiences";
import SingleExperience from "./experience";

export default function Experiences() {
  return (
    <>
      {experiences.map((experience) => {
        return <SingleExperience experience={experience} key={experience.work} />;
      })}
    </>
  );
}
