"use client";

import { motion } from "framer-motion";
import { discord, github, twitter } from "@/assets/icons";
import Image from "next/image";
import { slideIn } from "@/utils/motion";

const Hero = () => {
  return (
    <section className="px-10 z-40 container pt-[400px] pb-[220px]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <motion.h1
            className="font-thin text-6xl text-primary-text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideIn({ direction: "up", delay: 0.6 })}
          >
            UNISWAP
          </motion.h1>
          <motion.span
            className="font-semibold text-6xl text-primary-text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideIn({ direction: "left", delay: 0.8, duration: 0.6 })}
          >
            PROTOCOL
          </motion.span>
        </div>
        <motion.p
          className="max-w-[735px] font-light text-2xl text-primary-text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "up", delay: 0.8, duration: 0.6 })}
        >
          Swap, earn, and build on the leading decentralized crypto trading
          protocol.
        </motion.p>
        <motion.div
          className="flex items-center gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "up", delay: 0.8, duration: 0.6 })}
        >
          <Image src={twitter} alt="twitter" />
          <Image src={github} alt="github" />
          <Image src={discord} alt="discord" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
