
const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center mt-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold"><i>Redux toolkit</i></span>
            <ul className="hidden md:flex space-x-6">
              <li><a href="#" className="hover:text-gray-300">EVERYTHING</a></li>
            
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">ABOUT</a>
            <a href="#" className="hover:text-gray-300">CONTACT US</a>
        
        
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
