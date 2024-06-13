import NavBar from "@/@core/components/nav";

export default function Home() {
  return (
    <div className="bg-blue-500">
      <NavBar />
      {/* Dropdown menu */}
      <div className="dropdown " data-bs-auto-close="outside">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
        >
          Click
        </div>
        <ul
          tabIndex={0}
          className="
          dropdown-content
          menu
          menu-dropdown-toggle
           z-[1]  p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
