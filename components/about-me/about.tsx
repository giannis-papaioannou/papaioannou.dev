import LinkedInSvg from "../../public/svgs/linkedin-brand-solid.svg"
import GithubSvg from "../../public/svgs/github-brands-solid.svg"
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="card bg-base-200 md:image-full shadow-sm md:max-w-lg">
        <figure className="justify-start">
          <img src="images/me.png" />
        </figure>
        <div className="card-body">
          <h1 className="card-title">About me:</h1>
          <p>
                Senior Software Engineer specializing in Python, with expertise
                in building scalable systems and solving complex tech- nical
                challenges. Engineered robust solutions for data pipelines and
                distributed applications, maintaining reliability through
                continuous refinement. Eager to continuously expand technical
                knowledge and apply innovative approaches to advance engineering
                practices and team goals.
          </p>
          <p></p>
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
              className="btn btn-secondary"
              href="pdf/PapaioannouGiannis-CV.pdf"
            >
              Download CV!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
