import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="p-6 fixed top-0 left-0 w-full bg-white shadow-lg z-10">
        <div className="flex justify-between items-center">
          <div>
            <NavLink to="/" className="text-3xl">
              Dex<span className="text-pink-800">store</span>
            </NavLink>
          </div>
          <ul className="flex gap-4">
            <li className="text-md">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-pink-800" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="text-md">
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "text-pink-800" : "")}
              >
                Products
              </NavLink>
            </li>
            <li className="text-md">
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "text-pink-800" : "")}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
