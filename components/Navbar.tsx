"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/logo.svg";
import { LaunchLink, LinkText } from "./LinkText";
import { navVariants } from "@/utils/motion";
import Link from "next/link";
import { useContext, useState } from "react";
import { MobileMenuContext } from "@/contexts/MobileMenuContext";

const Navbar = () => {
  const { opened, changeOpened } = useContext(MobileMenuContext);

  const handleMenu = () => {
    changeOpened();
  };

  return (
    <motion.nav
      className="container sticky flex items-center justify-between py-3 sm:py-5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={navVariants}
    >
      <Link href="#">
        <Image src={logo} alt="logo" />
      </Link>
      <div className="hidden lg:flex items-center gap-8">
        <LinkText href="#" text="Ecosystem" active />
        <LinkText href="#" text="Community" />
        <LinkText href="#" text="Governance" />
        <LinkText href="#" text="Developers" />
        <LinkText href="#" text="Blog" />
        <LinkText href="#" text="FAQ" />
        <LinkText href="#" text="Jobs" />
        <LaunchLink href="#" text="Launch App" />
      </div>
      <motion.button
        className="px-5 py-3 flex lg:hidden flex-col items-end gap-[9px] bg-[#333437] rounded-md hover:rounded-xl transition-all"
        onClick={handleMenu}
      >
        <span className="w-[38px] h-0.5 bg-[#7A7A7A] rounded-sm" />
        <span className="w-[30px] h-0.5 bg-[#7A7A7A] rounded-sm" />
        <span className="w-[30px] h-0.5 bg-[#7A7A7A] rounded-sm" />
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
