"use client";

import { AvatarImage } from "./AvatarImage";
import { SkipNavContent } from "@agney/skip-nav";
import { motion, useReducedMotion } from "framer-motion";

const initial = {
  y: 20,
  opacity: 0,
};

const animate = {
  y: 0,
  opacity: 1,
};

const getAnimateProps = ({ delay, shouldReduceMotion }) => ({
  initial: shouldReduceMotion ? false : initial,
  animate,
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 15,
    delay,
  },
});

export const Intro = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="flex items-center justify-center text-center flex-col gap-y-12 px-4 py-8 max-w-4xl mx-auto">
      <SkipNavContent />
      <motion.div
        {...getAnimateProps({ shouldReduceMotion })}
        className="glass-effect rounded-2xl p-8 shadow-lg w-full"
      >
        <motion.h1
          {...getAnimateProps({ shouldReduceMotion })}
          className="text-4xl tracking-tight text-gradient font-bold mb-6"
        >
          Hey 👋 I&apos;m
        </motion.h1>
        <div className="flex flex-col gap-y-8">
          <AvatarImage getAnimateProps={getAnimateProps} />
          <motion.h1
            {...getAnimateProps({ delay: 0.6, shouldReduceMotion })}
            className="text-7xl font-extrabold text-gradient"
          >
            Amit Kurud
          </motion.h1>
          <motion.div
            {...getAnimateProps({ delay: 0.9, shouldReduceMotion })}
            className="space-y-4 text-lg leading-relaxed text-secondary-800 dark:text-secondary-200"
          >
            <p className="font-medium">
              I am a full stack developer who works with mostly in Java, But I
              also work with Kotlin, Typescript, Javascript etc.
            </p>
            <p className="font-medium">
              If I see a interesting Language then I would probably try it. I
              also work with Spring Boot, Hibernate, JPA, NestJS, ReactJS,
              Android, Kafka etc.
            </p>
            <p className="font-medium">
              Mostly I work with Microservice architecture and Java Ecosystem.
              But I am always open to Learn New Technologies.
            </p>
            <p className="font-medium">
              I am a big supporter of open source movement and I am open to work
              on any open source project that is interesting and I can be
              helpful.
            </p>
            <p className="font-medium">
              I have a Bachelor of Engineering Degree and I have been in
              Industry for almost 5 years now and counting. 🤘
            </p>
            <div className="mt-6 space-y-2">
              <p className="font-medium">
                You can reach me at{" "}
                <a
                  href="mailto:amit.kurud@gmail.com"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  amit.kurud@gmail.com
                </a>
              </p>
              <p className="font-medium">
                Or tweet at{" "}
                <a
                  href="https://twitter.com/amitkurud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  @amitkurud
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};
