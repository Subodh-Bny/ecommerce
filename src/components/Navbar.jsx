import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-slate-900 text-white flex justify-between items-center py-6 px-4">
      <h1 className="font-bold text-2xl">Ecom.</h1>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3">
        <Link to={"/signup"} className="border-white border py-1 px-3 rounded">
          Signup
        </Link>
        <Link to={"/login"} className="border-white border py-1 px-3 rounded">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
