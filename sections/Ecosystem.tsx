"use client";

import { ecosystemBg } from "@/assets/images";
import { Counter, Title, Text, ArrowLink, Block } from "@/components";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";

const Ecosystem = () => {
  return (
    <section className="py-10 px-8 container w-full flex justify-between z-40">
      <motion.div
        className="flex-1 flex flex-col gap-7"
        initial="hidden"
        whileInView="show"
        variants={slideIn({ direction: "up", delay: 0.7 })}
      >
        <ArrowLink text="UNISWAP ECOSYSTEM" href="#" type="subtitle" />
        <div className="max-w-sm flex flex-col gap-6">
          <Title type="title1" text="A growing network of DeFi Apps." />
          <Text text="Developers, traders, and liquidity providers participate together in a financial marketplace that is open and accessible to all." />
        </div>
      </motion.div>
      <motion.div
        className="flex-1 justify-end"
        initial="hidden"
        whileInView="show"
        variants={slideIn({ direction: "right", delay: 1 })}
      >
        <Block
          imgSrc={ecosystemBg}
          imgAlt="ecosystemBg"
          imgStyles=" w-[590px] h-[290px]  z-20"
          blockStyles="px-8 py-6 w-[590px] h-[290px]"
        >
          <div className="z-30 w-full h-full flex flex-col gap-2.5">
            <Counter
              to={300}
              delay={1.4}
              postfix="+"
              className="font-bold text-5xl text-primary-text"
            />
            <Text text="Integrations" />
          </div>
        </Block>
      </motion.div>
    </section>
  );
};

export default Ecosystem;
