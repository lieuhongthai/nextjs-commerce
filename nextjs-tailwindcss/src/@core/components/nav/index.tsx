import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/MeGaT.svg";
import { TNavLink } from "@/@core/types/menu.type";
import themeSetting from "@/@core/settings/themeSetting";
import React from "react";
import RadioTheme from "./RadioTheme";

interface IProps {
  open?: boolean;
  navItems?: TNavLink[];
}

const MenuRender = ({ navItems }: IProps) => (
  <>
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
  </>
);

const NavBar = (props: IProps) => {
  // ** Props
  const { open, navItems } = props;

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
            className="w-24 mr-1 rounded-full"
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
                className="w-24 mr-1 rounded-md"
                priority
              />
              <span className="text-lg font-bold transition duration-300 hover:text-gray-400">
                {/* {themeSetting.appName} */}
              </span>
            </a>
          </div>

          {/* Nav menu */}
          <ul className="hidden space-x-4 md:inline-flex menu menu-horizontal dropdown-content">
            <MenuRender {...props} />
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Services</Link>
            </li>
            <li>
              {/* className="text-lg font-bold transition duration-300 hover:text-gray-400" */}
              <Link href={"#"}>Contact</Link>
            </li>
            {/* Change Theme */}
            <li className="dropdown dropdown-end">
              <div tabIndex={0}>
                Theme
                <svg
                  width="12px"
                  height="12px"
                  className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <RadioTheme label="Default" value="default" defaultChecked />
                <RadioTheme label="Retro" value="retro" />
                <RadioTheme label="Synthwave" value="synthwave" />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <header className="bg-base-100 sticky top-0 z-30 bg-opacity-90 w-full backdrop-blur-sm transition-shadow duration-100 shadow-sm">
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
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
              </label>
            </div>
            <MenuRender {...props} />
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
