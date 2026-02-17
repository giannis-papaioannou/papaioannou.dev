import NavBar from "../components/navbar";

import About from "../components/about-me/about";
import Education from "../components/about-me/education";
import CareerSkills from "../components/about-me/skills";
import CertificatesList from "../components/about-me/certificates";
import Experiences from "../components/about-me/experiences";

export default function Home() {
  return (
    <>
      <NavBar active="about-me"></NavBar>
      <div className="md:m-10 p-5 md:p-10">
        <div className="flex-none md:flex md:justify-center mt-2 md:m-5">
          <About />
          <Education />
        </div>
        <div className="flex-none md:flex md:justify-center mt-5 md:m-5">
          <Experiences />
        </div>
        <div className="flex-none md:flex md:justify-center mt-5 md:m-5">
          <CareerSkills />
          <CertificatesList />
        </div>

        <div className="mb-10 md:mb-0"></div>
      </div>
    </>
  );
}
