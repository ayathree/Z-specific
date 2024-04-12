import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import PageTitle from "../pages/PageTitle";
import { useState } from "react";
import Swal from 'sweetalert2'




const Register = () => {
    const {createUser,logOut}= useContext(AuthContext);
    const navigate = useNavigate();
    const [errorRegi, setErrorRegi] = useState('')
    const[successRegi, setSuccessRegi]= useState('')

    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
        
      } = useForm()
      
      const onSubmit = (data) => {
      setErrorRegi('');
      setSuccessRegi('')
        const{name, email, photoUrl, password}= data;
        createUser(email, password)
        .then(result=>{
          setSuccessRegi('success')
         
          Swal.fire({
           
            text: 'successfully Registered',
            icon: 'success',
            confirmButtonText: 'Ok'
          }, successRegi)
          
          

            resetField("name")
            resetField("email")
            resetField("photoUrl")
            resetField("password")
            logOut()
            navigate('/' );
            console.log(result.user)
            updateProfile(result.user, {
              displayName:name,
              photoURL:photoUrl

            })
            .then(()=>console.log('profile updated'))
            .catch((error)=>console.log(error))
        })
        .catch(error=>{
          
            setErrorRegi(error.message)
            Swal.fire({
           
              text: 'User email already in use',
              icon: 'error',
              confirmButtonText: 'Ok'
            }, errorRegi)
            
          
            console.log(error)
        })
    }

    
    
    return (
        <div data-aos="flip-left"  data-aos-duration="1000" >
          <PageTitle title={'Register'}></PageTitle>
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
          <input type="password" placeholder="password" name="password" className="input input-bordered lg:w-[350px] rounded-3xl" required {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/

  })} />
  {errors.password && <span className="text-red-600 font-semibold">Password must have one Uppercase,
  <br />
  one Lowercase, at least 6 characters.</span>}
  
  
  
        
          

         
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