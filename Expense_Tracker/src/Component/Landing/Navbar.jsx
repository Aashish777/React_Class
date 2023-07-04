const Navbar = () => {
  return (
    <header>
      <div className="flex container">
        <span className=" header-sapn flex">
          <img src="/vite.svg" />
          <h1>Expense Tracking</h1>
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
