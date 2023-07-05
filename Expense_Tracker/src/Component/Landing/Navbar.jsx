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
            <li>Services</li>
            <li>About</li>
            <li>
              <button>Sign in</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
