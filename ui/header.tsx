import Link from "next/link";
import NavBar from "./navbar";
import { FaBots } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex items-center p-10">
      <Link href="/" className="text-4xl font-bold mr-auto hover:text-blue-400">
        <FaBots size={72}/>
      </Link>
      <NavBar />
    </header>
  );
}
