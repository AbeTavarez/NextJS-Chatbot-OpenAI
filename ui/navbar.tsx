import Link from "next/link";
import { FaReact, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

export default function NavBar() {
  const linksMap = [
    { name: "Website", href: "https://www.abrahamtavarez.com/", icon: FaReact },
    { name: "LinkedIn", href: "", icon: FaLinkedin },
    { name: "Github", href: "https://github.com/AbeTavarez", icon: FaGithub },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@abetavarez",
      icon: FaYoutube,
    },
  ];
  return (
    <nav className="space-x-3 text-xl font-semibold">
      {linksMap.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="blank"
          className="hover:text-blue-400"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
