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
  type: "title" | "subtitle";
  text: string;
  href: string;
}

export const ArrowLink = ({ type, text, href }: ArrowLinkProps) => {
  const fontSize = type === "title" ? "20px" : "18px";

  const className = `text-[${fontSize}] text-primary-text font-normal hover:text-amber-300 transition-colors`;

  return (
    <span className="flex gap-2">
      <Link href={href} className={className}>
        {text}
      </Link>
      {type === "title" ? (
        <Image src={arrowUpRight} alt="arrow-up-right" />
      ) : (
        <Image src={arrowRight} alt="arrow-right" className="w-5 h-5" />
      )}
    </span>
  );
};

interface ButtonLink {
  text: string;
  href: string;
}
