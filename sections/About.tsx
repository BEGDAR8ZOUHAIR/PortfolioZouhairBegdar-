"use client";

import AnimatedTextBlock from "@/components/AnimatedAboutText";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ProfilePhoto from "../assets/images/profile2.jpg";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const texts = [
    "I'm Zouhair Begdar",
    "React & React Native developer",
    "With 2+ years of experience",
    "Expert in smooth, eye catching animations",
    "Based in casablanca, Morocco",
    "With a passion for tech, web & mobile apps",
  ];

  // Concatenate all text strings
  const allText = texts.join(" ");

  // Calculate the total length
  const totalLength = allText.length;
  // Calculate the proportion by dividing 1 by the total length
  const proportion = 1 / totalLength;

  return (
    <section className="relative h-[300vh] w-screen" ref={ref}>
      <div className="sticky top-0 flex h-screen max-h-full w-screen flex-col-reverse items-center justify-center gap-8 overflow-hidden lg:flex-row-reverse">
        {/* ...existing code... */}
        <div className="flex flex-col gap-[0.4rem] lg:gap-4 text-dark/primary dark:text-light/primary px-4 text-center lg:text-left">
          <AnimatedTextBlock
            texts={texts}
            scrollYProgress={scrollYProgress}
            proportion={proportion}
          />

          {/* Resume download button */}
          <a
  href="/resume.pdf"
  download="Zouhair_Begdar_CV.pdf"
  className=" flex items-center justify-center gap-2 rounded-full border-2 border-[color:var(--border)] bg-warnaHitam px-4 py-2 text-warnaPutih transition-colors hover:bg-warnaPutih hover:text-warnaHitam dark:bg-warnaPutih dark:text-warnaHitam dark:hover:bg-warnaHitam dark:hover:text-warnaPutih"
>
  <span>Download CV</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
    />
  </svg>
</a>
        </div>
        {/* ...existing code... */}
        <Image
          src={ProfilePhoto}
          alt="Profile"
          className="rounded-full border-4 border-[color:var(--border)] aspect-square object-cover w-[50vw] max-w-[250px] xl:max-w-[320px]"
        />
      </div>
    </section>
  );
};

export default About;