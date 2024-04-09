import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"


const Login = () => {
    const {signIn, google, github}= useContext(AuthContext)

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
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })

      }
      const handleGoogle =()=>{
        google()
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
      }
      const handleGithub =()=>{
        github()
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
      }
    
    return (
        <div>
           <div className="hero min-h-screen">
  <div className="hero-content">
   
    <div className="rounded-3xl border-2  lg:w-full  shadow-2xl bg-gradient-to-r from-blue-500 to-red-600">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:p-20">
        <div className="form-control ">
          <label className="label ">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered lg:w-[350px] rounded-3xl" required {...register("email", { required: true })} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered lg:w-[350px] rounded-3xl" required {...register("password", { required: true })}/>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-red-500 to-blue-600 text-white font-semibold lg:text-xl">Login</button>
         
        </div>
        <Link to={'/register'}><p>Do not have an account?Please <span className="text-blue-600 font-semibold">Register</span></p></Link>
        <br />
          <hr />
          <p className="text-center">Or Login With</p>
          <button onClick={handleGoogle} className="btn bg-gradient-to-r from-red-500 to-blue-600 text-white font-semibold lg:text-xl">
          <FaGoogle />Google</button>
          <button onClick={handleGithub} className="btn bg-gradient-to-r from-red-500 to-blue-600 text-white font-semibold lg:text-xl">
          <FaGithub />Github</button>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;