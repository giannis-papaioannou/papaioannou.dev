"use client";

import { ExperienceCategory } from "@/data/types";
import { useState } from "react";

export default function SingleExperience({
  experience,
}: {
  experience: ExperienceCategory;
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className="card bg-base-300 shadow-sm md:max-w-2xl md:h-fit"
      key={experience.work}
    >
      <div className="card-body">
        <h2 className="card-title font-black uppercase opacity-60 text-sm md:text-lg">
          <figure
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          >
            <img
              src={experience.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </figure>
          {experience.work}
        </h2>
        <h2 className="card-title">{experience.job_title}</h2>
        <time className="font-mono italic float-right">
          {experience.duration}
        </time>
        <div className="overflow-scroll">
          <ul className="list overflow-scroll">
            {experience.points.map((point, index) => {
              return (
                <div key={index}>
                  {(showAll || index < experience.min_points) && (
                    <li className="list-row" key={index}>
                      {point}
                    </li>
                  )}
                </div>
              );
            })}
          </ul>{" "}
          {showAll === false &&
            experience.points.length > experience.min_points && (
              <div className="flex justify-end">
                <button
                  className="link link-info btn-square mt-2"
                  onClick={() => {
                    setShowAll(true);
                  }}
                >
                  Show More
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
