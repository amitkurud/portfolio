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
    <main className="items-center justify-center text-center max-w-4xl mx-auto mt-10 mb-10">
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
            <p className="font-heading text-xl font-bold text-secondary-800 dark:text-secondary-200">
              🚀 Full-Stack Developer | Java Ecosystem Enthusiast | Tech
              Explorer
              <br />
            </p>
            <p className="font-medium">
              I thrive at the intersection of creativity and code, with 8+ years
              of experience crafting scalable solutions across the stack. <br />
              My playground? Java and its vibrant ecosystem—where I architect
              microservices using Spring Boot, Hibernate, and JPA, and wrangle
              event-driven systems with Kafka. But I don’t stop there—I’m fluent
              in Kotlin, TypeScript, and JavaScript, and I love diving into
              modern frameworks like NestJS and ReactJS or tinkering with
              Android development. <br />
              Tech curiosity is my fuel 🔥—if there’s a language, tool, or
              paradigm that sparks innovation (Rust? Go? You name it!), I’ll
              eagerly experiment with it. <br />
              💡 Open Source Advocate: I’m passionate about collaborative
              innovation. Whether it’s contributing to meaningful projects,
              debugging thorny issues, or building tools that empower
              developers, I’m all in. Got an OSS project that needs a hand?
              Let’s talk! <br />
              🎓 Background: Holding a Bachelor of Engineering degree, I’ve
              honed my skills in fast-paced environments, balancing clean
              architecture with pragmatic problem-solving. Always learning,
              always shipping. <br />
              Let’s connect if you’re building something cool, need a versatile
              developer who geeks out on tech, or just want to debate
              microservices vs. monoliths over coffee! ☕ 🤘
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
