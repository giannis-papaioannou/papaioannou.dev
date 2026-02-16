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
      <div className="md:m-10 p-5 md:p-10">
        <div className="flex-none md:flex  mt-2 md:m-5">
          <About />
          <Education />
        </div>

        <div className="flex flex-row  mt-2 md:m-5">
          <Experience />
        </div>

        <div className="flex-none md:flex mt-2 md:m-5">
          <div className="md:basis-2/4">
            <CareerSkills skills={skills} />
          </div>
          <div className="md:basis-2/4">
            <CertificatesList certificates={certificates} />
          </div>
        </div>
      </div>
    </>
  );
}
