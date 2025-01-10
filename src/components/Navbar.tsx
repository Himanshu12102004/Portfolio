
function Navbar() {
  return (
    <div className="bg-navBg sticky top-0 z-50">
      <div className="flex justify-start items-center font-exo font-bold gap-12 text-gray-600 text-lg py-4 shadow-md px-12">
        <div className="hover:text-primary-600 transition-all duration-300 cursor-pointer">
          About
        </div>
        <div className="hover:text-primary-600 transition-all duration-300 cursor-pointer">
          Works
        </div>
        <div className="hover:text-primary-600 transition-all duration-300 cursor-pointer">
          Resume
        </div>
        <div className="hover:text-primary-600 transition-all duration-300 cursor-pointer">
          Contact
        </div>
      </div>
    </div>
  );
}

export default Navbar;
