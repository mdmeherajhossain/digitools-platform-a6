const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-base-100 px-4 md:px-10 py-4 sticky top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <a className="text-3xl font-bold text-[#9538E2]">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="indicator mr-4">
          <span className="text-2xl">🛒</span>
          <span className="badge badge-secondary badge-sm indicator-item">
            {cartCount}
          </span>
        </div>
        <button className="btn btn-primary bg-[#9538E2] border-none rounded-full px-8">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Navbar;
