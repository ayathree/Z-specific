import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";


const Register = () => {
    const {createUser}= useContext(AuthContext);
    const navigate = useNavigate();
    

    const {
        register,
        handleSubmit,
        resetField,
        
      } = useForm()
    
    const onSubmit = (data) => {
        const{email, password}= data;
        createUser(email, password)
        .then(result=>{
            resetField("name")
            resetField("email")
            resetField("photoUrl")
            resetField("password")
            navigate('/');
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    return (
        <div data-aos="flip-left"  data-aos-duration="1000" >
             <div className="hero min-h-screen">
  <div className="hero-content">
   
    <div className="rounded-3xl border-2  lg:w-full  shadow-2xl bg-gradient-to-r from-black to-gray-300">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:p-20">
      <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered lg:w-[350px] rounded-3xl" required {...register("name", { required: true })} />
          
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered lg:w-[350px] rounded-3xl" required {...register("email", { required: true })} />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white">Photo URL</span>
          </label>
          <input type="text" placeholder="photo Url" name="photoUrl" className="input input-bordered lg:w-[350px] rounded-3xl" required {...register("photoUrl", { required: true })} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered lg:w-[350px] rounded-3xl" required  {...register("password", { required: true })} />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn border-red-600 border-4 bg-white text-red-600">Register</button>
        </div>
        <Link to={'/login'}><p className="text-white">Already have an account?Please <span className="text-red-600 font-semibold">Login</span></p></Link>
      </form>
    </div>
  </div>
</div> 
            
        </div>
    );
};

export default Register;