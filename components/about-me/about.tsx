import LinkedInSvg from "../../public/svgs/linkedin-brand-solid.svg";
import GithubSvg from "../../public/svgs/github-brands-solid.svg";
import EmailSvg from "../../public/svgs/envelope-solid.svg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="card md:card-border bg-base-100 shadow-sm md:w-90 md:h-fit t md:m-2">
        <figure>
          <img src="images/me.png" />
        </figure>
        <div className="card-body bg-base-300">
          <div>
            Senior Software Engineer specializing in Python, with expertise in
            building scalable systems and solving complex tech- nical
            challenges. Engineered robust solutions for data pipelines and
            distributed applications, maintaining reliability through continuous
            refinement. Eager to continuously expand technical knowledge and
            apply innovative approaches to advance engineering practices and
            team goals.
          </div>
          <div className="card-actions justify-end">
            <a
              className="btn btn-secondary btn-circle"
              href="https://github.com/giannis-papaioannou/"
            >
              <Image src={GithubSvg} alt="github-icon" />
            </a>
            <a
              className="btn btn-secondary btn-circle"
              href="https://www.linkedin.com/in/giannis-papaioannou/"
            >
              <Image src={LinkedInSvg} alt="linked-in-icon" />
            </a>
            <a
              className="btn btn-info btn-square"
              href="mailto:papaioannou.giannis@protonmail.com"
            >
              <Image src={EmailSvg} alt="email-icon" />
            </a>
            <a className="btn btn-success" href="pdf/PapaioannouGiannis-CV.pdf">
              Download CV!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
