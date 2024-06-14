import Image from "next/image";
import Logo from "../../../../public/logo-1.svg";
import { TNavLink } from "@/@core/types/menu.type";
import themeSetting from "@/@core/settings/themeSetting";

interface IProps {
  open?: boolean;

  navItems?: TNavLink[];
}
const NavBar = ({ open, navItems }: IProps) => {
  const LogoRender = () => {
    return (
      <div className="flex items-center">
        <label
          htmlFor="my-drawer"
          className="mr-1 btn btn-square btn-sm btn-ghost md:hidden"
        >
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
        </label>
        <a className="flex items-center" href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="w-5 mr-1 rounded-full"
            priority
          />
          <span className="text-sm font-bold transition duration-300 hover:text-gray-400">
            {themeSetting.appName}
          </span>
        </a>
      </div>
    );
  };
  const NavRender = () => {
    return (
      <div className=">lg:container >lg:mx-auto flex navbar ">
        <div className="flex items-center justify-between w-full md:mx-2 backdrop:blur-sm">
          {/* Logo zone */}
          <div className="flex items-center">
            <label
              htmlFor="my-drawer"
              className="mr-1 btn btn-square btn-sm btn-ghost md:hidden"
            >
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
            </label>
            <a className="flex items-center" href="/">
              <Image
                src={Logo}
                alt="Logo"
                className="w-24 mr-1 rounded-full"
                priority
              />
              <span className="text-lg font-bold transition duration-300 hover:text-gray-400">
                {themeSetting.appName}
              </span>
            </a>
          </div>

          {/* Nav menu */}
          <ul className="hidden space-x-4 md:inline-flex menu menu-horizontal">
            {navItems &&
              navItems.map((v) => (
                <li key={v.title}>
                  <a
                    className="transition duration-300 hover:text-gray-400"
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
    );
  };
  return (
    <header className="text-white bg-gray-500">
      {/* Drawer menu */}
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          defaultChecked={open}
        />
        <div className="drawer-content">
          {/* Page content here */}
          {/* Header && NavBar */}
          <NavRender />
        </div>
        <div className="drawer-side z-[1]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex justify-between">
              <LogoRender />
              <label
                htmlFor="my-drawer"
                className="btn btn-circle btn-sm btn-ghost btn-arrow-drawer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
              </label>
            </div>
            {navItems &&
              navItems.map((v) => (
                <li key={v.title}>
                  <a
                    className="transition duration-300 hover:text-gray-400"
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
