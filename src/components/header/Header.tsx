import { AiFillHome } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto p-3">
      <div className="flex gap-4 items-center">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href="/" className="flex items-center gap-2">
        <span className="bg-amber-500 px-2 py-1 rounded-lg text-xl font-bold">
          IMDB
        </span>
        <span className="hidden sm:inline text-xl">Clone</span>
      </Link>
    </header>
  );
};

export default Header;
