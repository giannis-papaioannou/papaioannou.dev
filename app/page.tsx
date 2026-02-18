"use client";
import NavBar from "../components/navbar";

import About from "../components/about-me/about";
import Education from "../components/about-me/education";
import CareerSkills from "../components/about-me/skills";
import CertificatesList from "../components/about-me/certificates";
import Experiences from "../components/about-me/experiences";
import Step from "@/components/steps";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const slides = ["#about-me", "#experience", "#skills"];

  const [indexSelection, setIndexSelection] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    const locationHash = window.location.hash || slides[0];
    if (locationHash !== slides[indexSelection])
      router.push(slides[indexSelection]);
  }, [indexSelection]);

  const updateIndex = (wheelValue: number) => {
    if (wheelValue == 0 || scrollLocked || window.innerWidth < 400) {
      return;
    }

    setScrollLocked(true);

    if (wheelValue > 0) {
      setIndexSelection((prevValue) => {
        if (prevValue + 1 >= slides.length) {
          return slides.length - 1;
        }
        return prevValue + 1;
      });
    } else {
      setIndexSelection((prevValue) => {
        if (prevValue - 1 < 0) {
          return 0;
        }

        return prevValue - 1;
      });
    }
    setScrollLocked(false);
  };
  return (
    <>
      <NavBar active="about-me">
        <div className="hidden md:flex breadcrumbs">
          <ul>
            <Step
              refValue="#about-me"
              displayValue="About"
              currentStep={slides[indexSelection]}
              triggerFunction={() => setIndexSelection(0)}
            />
            <Step
              refValue="#experience"
              displayValue="Experience"
              currentStep={slides[indexSelection]}
              triggerFunction={() => setIndexSelection(1)}
            />
            <Step
              refValue="#skills"
              displayValue="Skills"
              currentStep={slides[indexSelection]}
              triggerFunction={() => setIndexSelection(2)}
            />
          </ul>
        </div>
      </NavBar>
      <div
        className="flex"
        onWheel={(event) => {
          updateIndex(event.deltaY);
        }}
      >
        <div className="md:carousel w-full md:overflow-y-none">
          <div id="about-me" className="md:carousel-item w-full md:overflow-y-none">
            <div className="md:flex m-2 md:m-0 p-5 md:justify-center md:w-full">
              <About />
              <Education />
            </div>
          </div>
          <div id="experience" className="md:carousel-item w-full max-h-fit md:overflow-y-none">
            <div className="m-2 md:m-0 p-5">
              <Experiences />
            </div>
          </div>
          <div id="skills" className="md:carousel-item w-full max-h-fit md:overflow-y-none">
            <div className="md:grid md:grid-cols-2 m-2 md:m-0 p-5">
              <CareerSkills />
              <CertificatesList />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 md:hidden">
        <div className="divider"></div>
      </div>
    </>
  );
}
