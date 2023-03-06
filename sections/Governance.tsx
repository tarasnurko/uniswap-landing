"use client";

import {
  ArrowLink,
  Block,
  ButtonLink,
  DiagArrowLink,
  Text,
  Title,
} from "@/components";
import { unicorn } from "@/assets/images";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

const Governance = () => {
  return (
    <section className="py-8 px-8 container w-full flex flex-col gap-6">
      <ArrowLink href="#" text="PROTOCOL GOVERNANCE" />
      <div className="grid grid-cols-2 grid-rows-3 gap-11">
        <motion.div
          className="col-span-1 row-span-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "up", delay: 0.8, duration: 0.8 })}
        >
          <Block
            imgSrc={unicorn}
            imgAlt="unicorn"
            imgStyles="w-full h-full"
            blockStyles="w-full h-full p-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4 z-10">
              <Title type="title1" text="Governed by the community." />
              <Text text="The Uniswap Protocol is managed by a global community of UNI token holders and delegates." />
            </div>
            <ButtonLink href="#" text="Read more" />
          </Block>
        </motion.div>
        <motion.div
          className="col-span-1 row-span-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "right", delay: 0.4, duration: 0.6 })}
        >
          <Block blockStyles="w-full h-full p-6 flex flex-col gap-3">
            <DiagArrowLink href="#" text="Governance Forum" />
            <Text text="Participate by proposing upgrades and discussing the future of the protocol with the Uniswap community." />
          </Block>
        </motion.div>
        <motion.div
          className="col-span-1 row-span-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "right", delay: 0.6, duration: 0.6 })}
        >
          <Block blockStyles="w-full h-full p-6 flex flex-col gap-3">
            <DiagArrowLink href="#" text="Sybil" />
            <Text text="Vote on offchain proposals with the Snapshot interface. Votes are weighted by the number of UNI delegates." />
          </Block>
        </motion.div>
        <motion.div
          className="col-span-1 row-span-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideIn({ direction: "right", delay: 0.8, duration: 0.6 })}
        >
          <Block blockStyles="w-full h-full p-6 flex flex-col gap-3">
            <DiagArrowLink href="#" text="Governance Portal" />
            <Text text="Vote on official Uniswap governance proposals and view past proposals." />
          </Block>
        </motion.div>
      </div>
    </section>
  );
};

export default Governance;
