import NavBar from "./navbar";

export default function Home() {
  const skills = [
    {
      title: "Languages",
      description: "Python, TypeScript, Javascript, Golang, Java, PHP, Bash",
    },
    {
      title: "Backend Frameworks",
      description: "Django, FastAPI, Flask, Celery, SQLAlchemy, NextJS",
    },
    {
      title: "Frontend Frameworks",
      description: "NextJS, React, NodeJS, jQuery, DaisyUI",
    },
    {
      title: "Devops & Infrastructure",
      description: "Docker, Kubernetes, Terraform, Ansible, Gitlab-CI",
    },
    {
      title: "Databases & MQ",
      description: "PostgreSQL, MongoDB, RabbitMQ, Redis, Memcache",
    },
    {
      title: "Testing & Development Practices",
      description: "Git, TDD, Unittests, Integration tests",
    },
    {
      title: "Operating Systems & Virtualization",
      description: "Ubuntu, Debian, Proxmox, QEMU, HyperV",
    },
    {
      title: "Networking",
      description: "Caddy, Traefik, DNS, Wireguard",
    },
  ];

  return (
    <>
      <NavBar active="about-me"></NavBar>
      <div className="flex justify-center mt-10">
        <div className="basis-2/3">
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img src="me.png" alt="Album" />
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
              <div className="card-actions justify-end">
                <a className="btn btn-primary" href="PapaioannouGiannis-CV.pdf">
                  Download CV!
                </a>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-row"></div>
          <div className="divider"></div>
          <div className="flex flex-row">
            <div className="basis-2/3">
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
            </div>
            <div className="basis-1/3">
              <div className="card bg-base-100 image-full w-96 shadow-sm">
                <figure className="justify-end">
                  <img src="/unipi-ds.jpeg" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title uppercase font-semibold">
                    Education
                  </h2>
                  <div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      BACHELOR
                    </div>
                    University of Piraeus, Department of Digital Systems
                    <div className="text-xs uppercase font-semibold opacity-60">
                      2014-2019
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list bg-base-200 mt-5">
                <li className="list-row">
                  <div>
                    <div>
                      <div className="text-xs uppercase font-semibold opacity-60">
                        TypeScript:
                      </div>
                      Understanding TypeScript
                    </div>

                    <time className="font-mono italic float-right">
                      February 2026
                    </time>
                  </div>
                </li>
                <li className="list-row">
                  <time className="font-mono italic"> </time>
                  <div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Ansible:
                    </div>
                    Ansible for the Absolute Beginner - Hands-On - DevOps
                  </div>
                </li>
                <li className="list-row">
                  <div>
                    <time className="font-mono italic">April 2024</time>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Kubernetes:
                    </div>
                    Learn DevOps: The Complete Kubernetes Course
                  </div>
                </li>
                <li className="list-row">
                  <div>
                    <time className="font-mono italic">October 2022</time>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Terraform:
                    </div>
                    AWS Infrastructure as Code With Terraform
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
