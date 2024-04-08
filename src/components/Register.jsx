import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister =e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;
        console.log(name,email,photoUrl,password)
    }
    return (
        <div>
             <div className="hero min-h-screen">
  <div className="hero-content">
   
    <div className="rounded-3xl border-2  lg:w-full  shadow-2xl bg-gradient-to-r from-blue-500 to-red-600">
      <form onSubmit={handleRegister} className="card-body lg:p-20">
      <div className="form-control ">
          <label className="label ">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered lg:w-[350px] rounded-3xl" required />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered lg:w-[350px] rounded-3xl" required />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo Url" name="photoUrl" className="input input-bordered lg:w-[350px] rounded-3xl" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered lg:w-[350px] rounded-3xl" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <Link to={'/login'}><p>Already have an account?Please <span className="text-blue-600 font-semibold">Login</span></p></Link>
      </form>
    </div>
  </div>
</div> 
            
        </div>
    );
};

export default Register;