import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center justify-between px-3 text-white bg-purple-700">
      <div className="logo font-bold text-2xl">
        <Link href="/">BitLinks</Link>
      </div>
      <ul className="flex justify-center gap-4 items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact Us</li>
        </Link>

        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">
              Github
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
