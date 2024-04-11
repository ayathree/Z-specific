import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"
import PageTitle from "./PageTitle";



const Login = () => {
    const {signIn, google, github}= useContext(AuthContext)
    const navigate = useNavigate();
    const location =useLocation();
    console.log(location)

    const {
        register,
        handleSubmit,
        resetField,
        
      } = useForm()

      const onSubmit = (data) => {
       
        
        const{email, password}= data;
        signIn(email, password)
        .then(result=>{
            resetField("email")
            resetField("password")
            navigate(location?.state? location.state:'/');
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })

      }
      const handleGoogle =()=>{
        google()
        .then(result=>{
          navigate(location?.state? location.state:'/');
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
      }
      const handleGithub =()=>{
        github()
        .then(result=>{
          navigate(location?.state? location.state:'/');
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
      }

      
    
    return (
      
       <div>
        <PageTitle title={'Login'}></PageTitle>
         <div data-aos="flip-left"  data-aos-duration="1000" >
           <div className="hero min-h-screen">
  <div className="hero-content">
   
    <div className="rounded-3xl border-2  lg:w-full  shadow-2xl bg-gradient-to-r from-black to-gray-300">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:p-20">
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered lg:w-[350px] rounded-3xl" required {...register("email", { required: true })} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered lg:w-[350px] rounded-3xl" required {...register("password", { required: true })}/>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn border-red-600 border-4 bg-white text-red-600 font-semibold lg:text-xl">Login</button>
         
        </div>
        <Link to={'/register'}><p className="text-white">Do not have an account?Please <span className="text-red-600 font-semibold">Register</span></p></Link>
        <br />
          <hr />
          <p className="text-center text-white">Or Login With</p>
          <button onClick={handleGoogle} className="btn border-red-600 border-4 bg-white text-red-600 font-semibold lg:text-xl">
          <FaGoogle />Google</button>
          <button onClick={handleGithub} className="btn border-red-600 border-4 bg-white text-red-600 font-semibold lg:text-xl">
          <FaGithub />Github</button>
      </form>
    </div>
  </div>
</div> 
        </div>
       </div>
    );
};

export default Login;