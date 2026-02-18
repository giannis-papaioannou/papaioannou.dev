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
    if (locationHash !== slides[indexSelection]) router.push(slides[indexSelection]);
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
      <NavBar active="about-me"></NavBar>
      <div
        className="flex"
        onWheel={(event) => {
          updateIndex(event.deltaY);
        }}
      >
        <ul className="hidden md:flex md:flex-col mt-auto mb-auto ml-0 timeline timeline-vertical">
          <Step
            refValue="#about-me"
            displayValue="About"
            currentStep={slides[indexSelection]}
            triggerFunction={() => setIndexSelection(0)}
            hrBefore={false}
            hrAfter={true}
          />
          <Step
            refValue="#experience"
            displayValue="Experience"
            currentStep={slides[indexSelection]}
            triggerFunction={() => setIndexSelection(1)}
            hrBefore={true}
            hrAfter={true}
          />
          <Step
            refValue="#skills"
            displayValue="Skills"
            currentStep={slides[indexSelection]}
            triggerFunction={() => setIndexSelection(2)}
            hrBefore={true}
            hrAfter={false}
          />
        </ul>
        <div className="md:carousel w-full">
          <div id="about-me" className="md:carousel-item relative w-full ">
            <div className="md:grid md:grid-cols-2 md:m-10 p-5 md:p-10">
              <About />
              <Education />
            </div>
          </div>
          <div id="experience" className="md:carousel-item w-full ">
            <div className="md:m-10 p-5 md:p-10">
              <Experiences />
            </div>
          </div>
          <div id="skills" className="md:carousel-item w-full ">
            <div className="md:grid md:grid-cols-2 md:m-10 p-5 md:p-10">
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
