import Image from "next/image";
import Logo from "../../../../public/next.svg";
const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center backdrop:blur-sm">
        <a href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            className="rounded-full mr-1 w-12"
            priority
          />
          <span className="text-xs font-bold hover:text-gray-400 transition duration-300">
            My Website
          </span>
        </a>
        <ul className="space-x-4 hidden md:flex">
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Services
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        <button className="md:hidden block p-2 text-gray-400 hover:text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
    // <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    //   <Image
    //     src={Logo}
    //     alt="Logo"
    //     className="rounded-full mr-2 w-24 h-24"
    //     priority
    //   />

    //   <nav className="hidden md:block">
    //     <ul className="flex space-x-4">
    //       <li>
    //         <a className="hover:bg-gray-700 text-sm font-medium">Trang chủ</a>
    //       </li>
    //       <li className="relative">
    //         <a className="hover:bg-gray-700 text-sm font-medium">Sản phẩm</a>
    //         <ul className="absolute hidden bg-gray-800 text-white p-2">
    //           <li>
    //             <a className="block hover:bg-gray-900">Danh mục 1</a>
    //           </li>
    //           <li>
    //             <a className="block hover:bg-gray-900">Danh mục 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li>
    //         <a className="hover:bg-gray-700 text-sm font-medium">Giới thiệu</a>
    //       </li>
    //       <li>
    //         <a className="hover:bg-gray-700 text-sm font-medium">Liên hệ</a>
    //       </li>
    //     </ul>
    //   </nav>

    //   {/* Menu burger cho thiết bị di động */}
    //   <button className="md:hidden block p-2 text-gray-400 hover:text-white">
    //     <svg
    //       className="w-6 h-6"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         // strokeLinewidth="2"
    //         d="M4 6h16M4 12h16M4 18h16"
    //       />
    //     </svg>
    //   </button>
    // </header>
  );
};

export default Header;
