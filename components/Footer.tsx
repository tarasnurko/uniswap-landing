"use client";

import { discord, github, twitter } from "@/assets/icons";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LinkText } from "./";

const Footer = () => {
  return (
    <motion.footer
      className="container w-full py-8 px-8 flex flex-col"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={slideIn({ direction: "down", delay: 0.8, duration: 0.4 })}
    >
      <div className="flex flex-wrap gap-6">
        <LinkText href="#" text="Ecosystem" />
        <LinkText href="#" text="Community" />
        <LinkText href="#" text="Governance" />
        <LinkText href="#" text="Developers" />
        <LinkText href="#" text="Blog" />
        <LinkText href="#" text="FAQ" />
        <LinkText href="#" text="Privacy Policy" />
        <LinkText href="#" text="Trademark Policy" />
        <LinkText href="#" text="Security" />
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-xs text-secondary-text font-light">
          Media inquires for Uniswap Labs - Contact
          <Link href="#" className="pl-2 font-medium text-primary-text">
            media@uniswap.org
          </Link>
        </p>
        <div className="flex items-center gap-3">
          <Image src={twitter} alt="twitter" />
          <Image src={github} alt="github" />
          <Image src={discord} alt="discord" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
