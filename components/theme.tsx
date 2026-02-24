"use client";

import { useEffect, useState } from "react";
import SunSvg from "../public/svgs/sun.svg";
import MoonSvg from "../public/svgs/moon.svg";
import Image from "next/image";
import { JSX } from "react";

export default function PersistentThemeController({
  children,
}: {
  children?: JSX.Element;
}) {
  const defaultValue = "dark";
  const storageKey = "themeValue";

  const [themeValue, setThemeValue] = useState<string | null>(null);

  useEffect(() => {
    if (typeof themeValue === "string") {
      localStorage.setItem(storageKey, themeValue);
    }
  }, [themeValue]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey);
    setThemeValue(savedTheme ? savedTheme : defaultValue);
  }, []);

  return (
    <div data-theme={themeValue}>
      {children}
      {themeValue == "light" && (
        <div className="fab">
          <label className="btn btn-lg btn-circle btn-error">
            <Image
              src={MoonSvg}
              alt="change-to-dark"
              onClick={() => setThemeValue("dark")}
            />
          </label>
        </div>
      )}
      {themeValue == "dark" && (
        <div className="fab">
          <label className="btn btn-lg btn-circle btn-success">
            <Image
              src={SunSvg}
              alt="change-to-light"
              onClick={() => setThemeValue("light")}
            />
          </label>
        </div>
      )}
    </div>
  );
}
