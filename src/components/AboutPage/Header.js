import { HeadNav } from "../HomePage";
import React from "react";

export function Header() {
  return (
    <div>
      <HeadNav />
      <h1 className="text-4xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-5xl">
        About Me
      </h1>
      <p className="mt-6 text-lg leading-8 text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
        Here&apos;s a look at the companies I&apos;ve had the privilege to work
        with throughout my career. Each experience has contributed to my growth
        as a professional.
      </p>
      <div className="text-center"></div>
    </div>
  );
}
