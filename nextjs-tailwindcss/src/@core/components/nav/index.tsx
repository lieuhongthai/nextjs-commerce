import Image from "next/image";
import Logo from "../../../../public/next.svg";
import { TNavLink } from "@/@core/types/menu.type";

interface IProps {
  open?: boolean;

  navItems?: TNavLink[];
}
const NavBar = ({ open, navItems }: IProps) => {
  return (
    <header className="bg-gray-500 text-white">
      <div className=">lg:container >lg:mx-auto flex navbar ">
        <div className="justify-between md:mx-2 flex items-center backdrop:blur-sm w-full">
          {/* Logo zone */}
          <div className="flex items-center">
            <button className="btn btn-square btn-sm btn-ghost md:hidden mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <a className="flex items-center" href="/">
              <Image
                src={Logo}
                alt="Logo"
                className="rounded-full mr-1 w-24"
                priority
              />
              <span className="text-lg font-bold hover:text-gray-400 transition duration-300">
                LOGO
              </span>
            </a>
          </div>

          {/* Nav menu */}
          <ul className="md:inline-flex hidden space-x-4 menu menu-horizontal">
            {navItems &&
              navItems.map((v) => (
                <li key={v.title}>
                  <a
                    className="hover:text-gray-400 transition duration-300"
                    href={v.path}
                  >
                    {v.title}
                  </a>
                </li>
              ))}
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Drawer menu */}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side z-[1]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {navItems &&
              navItems.map((v) => (
                <li key={v.title}>
                  <a
                    className="hover:text-gray-400 transition duration-300"
                    href={v.path}
                  >
                    {v.title}
                  </a>
                </li>
              ))}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
