import NavBar from "./navbar";

import { certificates } from "@/data/certificates";
import { skills } from "@/data/skills";
import About from "./about";
import Education from "./education";
import CareerSkills from "./skills";
import CertificatesList from "./certificates";
import Experience from "./experience";

export default function Home() {
  return (
    <>
      <NavBar active="about-me"></NavBar>
      <div className="flex justify-center mt-10">
        <div className=""></div>
        <div className="basis-2/6">
          <About />
          <Education />
        </div>
        <div className="basis-3/6">
          <div className="flex flex-row">
            <Experience />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="basis-3/4">
          <div className="flex flex-row">
            <div className="basis-2/3">
              <CareerSkills skills={skills} />
            </div>
            <div className="basis-1/3">
              <CertificatesList certificates={certificates} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
