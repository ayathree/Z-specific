import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import {useNavigate}from 'react-router-dom'
import PageTitle from "./PageTitle";


const Update = () => {
    const {user, setReload}=useContext(AuthContext)
    const [update, setUpdate]=useState(null)
   
   
    const navigate = useNavigate();

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, currentUser=>{
            setUpdate(currentUser)
            
            console.log(currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])
    const handleUpdate=e=>{
        e.preventDefault();
        const name =e.target.name.value;
        const photo =e.target.photoUrl.value
        console.log(name, photo)
        console.log(update)
        updateProfile(update, {
            displayName:name,
            photoURL:photo
            
            

          })
          .then(()=>{
            setReload(true)
            e.target.reset();
            
            navigate('/update');
            console.log("updated")
           
            
            
          })
          .catch((error)=>console.log(error))
    }
   
   
    return (
        <div  data-aos="zoom-in-right" data-aos-duration="1000">
            <PageTitle title={'Update Profile'}></PageTitle>
            
                <div className="hero  min-h-scree">
  <div className="hero-content flex-col lg:flex-row lg:gap-44">
    <img src={user.photoURL} className="max-w-lg rounded-lg shadow-2xl h-[100px] w-[100px] lg:h-[300px] lg:w-[300px]  " />
   <form onSubmit={handleUpdate}>
   <div className="flex-1">
        <h1 className="lg:text-2xl font-bold mb-3 text-white"> <span className="underline underline-offset-4">Name:</span> <span className=" lg:text-lg font-normal text-white" >{user.displayName}</span> </h1>
      
      <h1 className="lg:text-2xl font-bold mb-3 text-white underline underline-offset-4">Update Name:</h1>

      <input type="text" placeholder="new name" name="name" className="input input-bordered lg:w-[350px] rounded-3xl mb-6" required  />
      <h1 className="lg:text-2xl font-bold mb-3 text-white"> <span className="underline underline-offset-4">Email:</span> <span className=" lg:text-lg font-normal text-white" >{user.email}</span> </h1>
      <h1 className="lg:text-2xl font-bold mb-3 text-white"> <span className="underline underline-offset-4">PhotoUrl:</span> 
      <br />
      <span className=" lg:text-lg font-normal text-xs text-white " >{user.photoURL.slice(0,40)}</span> </h1>
      <h1 className="lg:text-2xl font-bold mb-3 text-white underline underline-offset-4">Update PhotoUrl:</h1>

<input type="text" placeholder="new url" name="photoUrl" className="input input-bordered lg:w-[350px] rounded-3xl mb-6" required  />
<br />

      
      <button  className="btn border-red-600 border-4 bg-white text-red-600 font-semibold lg:text-xl">Update</button>
    </div>
   </form>
  </div>
</div>
               
                
        </div>
    );
};

export default Update;