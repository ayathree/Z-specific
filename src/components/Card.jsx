import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Card = ({card}) => {
    const{image,estate_title,id}=card
    return (
        <div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="card card-compact  p-11 ">
            <figure><img className="h-[250px] w-[500px] border-4 border-white rounded-3xl" src={image} alt="" /></figure>
            <div className="card-body justify-center ">
              <h2 className="card-title  text-white text-xl">{estate_title}</h2>
              
              <div className="card-actions justify-center">
                <Link to={`/card/${id}`}><button className="btn bg-white border-red-600 border-4 text-red-600">View Property</button></Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Card;