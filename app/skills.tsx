import { SkillCategory } from "@/data/types";


export default function CareerSkills({ skills }: { skills: SkillCategory[] }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title uppercase font-semibold">Skills</h2>
        <ul className="list bg-base-200">
          {skills.map((skill) => {
            return (
              <li className="list-row" key={skill.title}>
                <div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {skill.title}:
                  </div>
                  {skill.description}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
