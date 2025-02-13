import { Menu, MenuButton, MenuList, MenuItem } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">KAIRA</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {["HOME", "SHOP", "BLOG", "PAGES", "CONTACT"].map((item) => (
              <Dropdown key={item} label={item} />
            ))}
          </div>

          {/* Wishlist & Cart */}
          <div className="hidden md:flex space-x-4">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              WISHLIST (0)
            </span>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              CART (0)
            </span>
            <SearchIcon />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Dropdown Component
const Dropdown = () => (
  <Menu>
    <MenuButton className="text-gray-700 hover:text-gray-900 flex items-center">
      
      <ChevronDown size={16} className="ml-1" />
    </MenuButton>
    <MenuList className="absolute mt-2 bg-white border rounded shadow">
      <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Sub Menu 1
      </MenuItem>
      <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Sub Menu 2
      </MenuItem>
    </MenuList>
  </Menu>
);

// Search Icon Component
const SearchIcon = () => (
  <button className="text-gray-700 hover:text-gray-900">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
      />
    </svg>
  </button>
);

export default Navbar;
