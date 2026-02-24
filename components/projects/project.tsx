"use client";

import Image from "next/image";
import ImageSvg from "../../public/svgs/image-regular.svg";
import GithubSvg from "../../public/svgs/github-brands-solid.svg";
import { ProjectCategory } from "@/data/types";

export default function ProjectCard({ project }: { project: ProjectCategory }) {
  const hasImages: boolean = project.images.length > 0;
  const openModal = (identifier: string) => {
    const modalDialog = document.getElementById(
      identifier,
    ) as HTMLDialogElement;
    modalDialog.showModal();
  };
  return (
    <>
      {hasImages && (
        <dialog
          id={`modal-${project.title}`}
          className="modal"
        >
          <div className="modal-box w-11/12 max-w-3xl">
            <div className="carousel w-full">
              {project.images.map((image, index) => (
                <div
                  id={`slider-${index}`}
                  className="carousel-item relative w-full"
                  key={`project-${project.title}-${index}`}
                >
                  <img
                    src={image}
                    className="w-full"
                    alt={`Image for project ${project.title} - index: ${index}`}
                  />
                </div>
              ))}
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}

      <div className="card bg-base-300 shadow-sm sm:max-w-lg mt-5 sm:mt-0">
        <div className="card-body">
          <div className="flex justify-between">
            {project.link && project.link.startsWith("https://github.com") ? (
              <div>
                <a
                  className="text-base inline-flex gap-1 uppercase text-primary font-bold opacity-100"
                  href={project.link}
                >
                  <Image
                    src={GithubSvg}
                    width={19.2}
                    height={19.2}
                    alt="click-for-more-icon"
                  />
                  {project.title}
                </a>
              </div>
            ) : (
              <a
                className={`text-base uppercase font-bold opacity-100 ${project.link && "text-secondary underline"}`}
                href={project.link ? project.link : undefined}
                target="_blank"
              >
                {project.title}
              </a>
            )}
            <div className="text-xs uppercase font-semibold opacity-60 md:flex justify-end">
              {project.status}
            </div>
          </div>
          <div className="text-md">{project.description}</div>

          {hasImages && (
            <>
              <div className="text-xs font-semibold opacity-60">
                <button
                  className="btn btn-primary"
                  onClick={() => openModal(`modal-${project.title}`)}
                >
                  <Image
                    src={ImageSvg}
                    width={19.2}
                    height={19.2}
                    alt="click-for-more-icon"
                  />
                </button>
              </div>
            </>
          )}
          {project.tags.length > 0 && (
            <>
              <div className="divider" />
              <div className="text-xs font-semibold opacity-60">
                {project.tags.map((tag) => (
                  <div className="badge mr-0.5 mt-0.5" key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
