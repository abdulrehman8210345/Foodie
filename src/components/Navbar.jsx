import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiFries } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-orange-100 shadow-lg sticky top-0 z-50 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className={`flex-1 md:flex md:items-center md:gap-12 ${menuOpen ? 'hidden' : 'flex'}`}>
            {!menuOpen && (
              <Link className="flex items-center text-orange-600" to={"/"}>
                <CiFries className='text-5xl' />
                <h1 className='text-2xl font-bold text-orange-800'>Foodie</h1>
              </Link>
            )}
          </div>

          <div className="md:flex md:items-center md:gap-12 hidden lg:flex">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-orange-800 transition font-medium text-xl hover:text-orange-600" to={"/menu"}> Menu </Link>
                </li>
                <li>
                  <Link className="text-orange-800 transition font-medium text-lg hover:text-orange-600" to={"/split-bill"}> Bill </Link>
                </li>
                <li>
                  <Link className="flex items-center text-orange-800 transition font-medium text-xl hover:text-orange-600" to={"/cart"}> Cart <MdOutlineShoppingCart /> </Link>
                </li>
                <li>
                  <a
                    className="rounded-md bg-orange-400 px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-orange-300"
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-md bg-orange-300 px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-orange-600"
                    href="#"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:hidden">
            <div className="flex items-center">
              <button onClick={toggleMenu} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                {menuOpen ? (
                  <AiOutlineClose className="h-5 w-5" />
                ) : (
                  <AiOutlineMenu className="h-5 w-5" />
                )}
              </button>
              <nav aria-label="Global" className={`${menuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-white shadow-lg mt-16 py-4`}>
                <ul className="flex flex-col items-center gap-6 text-sm">
                  <li>
                    <Link className="flex items-center text-orange-600" to={"/"} onClick={toggleMenu}>
                      <CiFries className='text-5xl' />
                      <h1 className='text-2xl font-bold text-orange-800'>Foodie</h1>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-orange-800 transition font-medium text-xl hover:text-orange-600" to={"/menu"} onClick={toggleMenu}> Menu </Link>
                  </li>
                  <li>
                    <Link className="text-orange-800 transition font-medium text-lg hover:text-orange-600" to={"/split-bill"} onClick={toggleMenu}> Bill </Link>
                  </li>
                  <li>
                    <Link className="flex items-center text-orange-800 transition font-medium text-xl hover:text-orange-600" to={"/cart"} onClick={toggleMenu}> Cart <MdOutlineShoppingCart /> </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
