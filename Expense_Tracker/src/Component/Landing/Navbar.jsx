import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container">
      <div className="flex">
        <span className=" header-span flex">
          <img src="/vite.svg" />
          <span>Expense Tracking</span>
        </span>
        <nav>
          <ul className="header-nav flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <Link to="/auth/login">Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
