import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Nav = () => {
  const {user,logOut}= useContext(AuthContext)
  console.log(user)
  const handleLogOut=()=>{
    logOut();
  }
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
  
  {user?<> <div className="dropdown dropdown-end flex flex-row gap-3">
      <div tabIndex={0} role="tooltip" className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={user.displayName}>
        <div className="w-10 rounded-full " >
          <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
        </div>
      </div>
    
       
       
        
      
     <div>
     <button onClick={handleLogOut} className="btn text-xl text-white  bg-gradient-to-r from-blue-500 to-red-600">Log Out</button>
     </div>


    </div></> : <Link to={'/login'}><button className="btn text-xl text-white  bg-gradient-to-r from-blue-500 to-red-600">Login</button></Link> }
  </div>
</div>
            
        </div>
    );
};

export default Nav;