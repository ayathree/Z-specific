import { Link, NavLink } from "react-router-dom";


const Nav = () => {
  const links =<>
  <NavLink className={({isActive})=>isActive?'lg:btn lg:text-white lg:bg-gradient-to-r from-blue-500 to-red-600 ':'lg:text-white font-semibold lg:text-xl'} to={'/'}>Home</NavLink>
  <NavLink className={({isActive})=>isActive?'lg:btn lg:text-white lg:bg-gradient-to-r from-blue-500 to-red-600 ':'lg:text-white font-semibold lg:text-xl'} to={'/update'}>Update Profile</NavLink>
  <NavLink className={({isActive})=>isActive?'lg:btn lg:text-white lg:bg-gradient-to-r from-blue-500 to-red-600 ':'lg:text-white font-semibold lg:text-xl'} to={'/about'}>About</NavLink>
  
  
  </>
    return (
        <div>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <img className="w-[50px] h-[50px]" src="/zarx.png" alt="" />
    <a className="text-white text-3xl font-extrabold">Specific</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="flex flex-row gap-3">{links}</li>
    </ul>
  </div>
  <div className="navbar-end">
  <Link to={'/login'}><button className="btn text-xl text-white  bg-gradient-to-r from-blue-500 to-red-600">Login</button></Link>
  {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        <li><a>Name</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
  </div>
</div>
            
        </div>
    );
};

export default Nav;