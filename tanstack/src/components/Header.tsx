import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <>
      <header className="p-4 h-16 fixed w-full flex items-center bg-gray-800 text-white shadow-lg gap-4">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/categories">Categories</Link>
      </header>
    </>
  );
}
