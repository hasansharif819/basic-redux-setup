import { NavLink } from "react-router-dom";


const NavBar = () => {

  return (
    <nav className=" bg-gray-800 text-yellow-400 sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center">
        <h1>Test React</h1>
      </div>

      <ul className="flex space-x-4 mr-5">
        <>
        <li><NavLink to='/' className="hover:text-gray-400">Home</NavLink></li>
        <li><NavLink to='/about' className="hover:text-gray-400">About</NavLink></li>
        <li><NavLink to='/products' className="hover:text-gray-400">Products</NavLink></li>
      
          <li><NavLink to='/contact' className="hover:text-gray-400">Contact</NavLink></li>
          <li><NavLink to='/login' className="hover:text-gray-400">Login</NavLink></li>
        </>
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;