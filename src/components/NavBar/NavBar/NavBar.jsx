import Link from "../../Link/Link";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/contact", name: "Contact", id: 3 },
    { path: "/services", name: "Services", id: 4 },
    { path: "/profile", name: "Profile", id: 5 },
  ];

  return (
    <div className="bg-yellow-200">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`bg-yellow-200 absolute duration-1000 -z-40
        ${open ? 'top-6' : '-top-60'}
        md:static p-6`}>
        <ul className="md:flex gap-10">
          {routes.map((route) => (
            <Link key={route.id} route={route} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
