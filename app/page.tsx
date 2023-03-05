"use client";

import { Navbar, Footer } from "@/components";
import { Developers, Ecosystem, Governance, Hero } from "@/sections";
import Image from "next/image";
import { poster, grid } from "@/assets/images";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-primary-black overflow-hidden">
      <Navbar />
      <div className="w-full h-full relative flex justify-center">
        <motion.div
          className="absolute top-0 left-0 z-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: {
              opacity: 0.3,
            },
            show: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          <Image src={grid} alt="grid" className="" />
        </motion.div>
        <motion.div
          className="absolute top-0 left-10 z-30"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={slideIn({ direction: "left", delay: 0.8, duration: 0.4 })}
        >
          <Image src={poster} alt="poster" className="" />
        </motion.div>
        <Hero />
      </div>
      <Ecosystem />
      <Developers />
      <Governance />
      <Footer />
    </main>
  );
}
