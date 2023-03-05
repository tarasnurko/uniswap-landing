import Link from "next/link";

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
