import Link from "next/link";
import { arrowRight, arrowUpRight } from "@/assets/icons";
import Image from "next/image";

interface LinkTextProps {
  active?: boolean;
  href: string;
  text: string;
}

export const LinkText = ({ active = false, href, text }: LinkTextProps) => {
  return (
    <Link
      href={href}
      className={`text-primary-text font-normal text-base ${
        !active ? "opacity-60" : ""
      } hover:text-violet-600 transition-colors`}
    >
      {text}
    </Link>
  );
};

interface LinkTextProps {
  href: string;
  text: string;
}

export const LaunchLink = ({ href, text }: LinkTextProps) => {
  return (
    <Link
      href={href}
      className="px-7 py-2.5 text-primary-text  font-normal text-base bg-[#FF007A] opacity-90 rounded-xl hover:bg-[#f22689] transition-colors"
    >
      {text}
    </Link>
  );
};

interface ArrowLinkProps {
  text: string;
  href: string;
}

export const ArrowLink = ({ text, href }: ArrowLinkProps) => {
  return (
    <Link
      className="flex items-center gap-2 text-lg text-primary-text font-normal hover:text-amber-300 transition-colors"
      href={href}
    >
      {text}
      <Image src={arrowRight} alt="arrow-right" className="w-5 h-5" />
    </Link>
  );
};

interface DiagArrowLinkProps {
  space?: boolean;
  text: string;
  href: string;
}

export const DiagArrowLink = ({
  text,
  space = false,
  href,
}: DiagArrowLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 text-xl text-primary-text font-normal hover:text-orange-400 transition-colors ${
        space ? "w-full justify-between" : ""
      }`}
    >
      {text}
      <Image src={arrowUpRight} alt="arrow-up-right" className="w-5 h-5" />
    </Link>
  );
};

interface ButtonLink {
  text: string;
  href: string;
}

export const ButtonLink = ({ text, href }: ButtonLink) => {
  return (
    <Link
      className="p-[2px] w-fit flex justify-center items-center text-primary-text bg-[#676b78] rounded-md hover:bg-gradient-to-r from-purple-500 to-pink-500"
      href={href}
    >
      <span className="flex items-center gap-2 py-2.5 px-4 font-normal text-base  bg-[#323336] rounded-md">
        {text}
        <Image src={arrowUpRight} alt="arrow-up-right" className="w-5 h-5" />
      </span>
    </Link>
  );
};
