import Card from "../components/Card";
import Slider from "../components/Slider";
import { useLoaderData} from 'react-router-dom'
import home from '../assets/home.gif'




const Home = () => {
  const cards = useLoaderData();
  
  console.log(cards)
  
 
    return (
        <div>
          
          <Slider></Slider> 
          <div className="mt-20">
          <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={home} className="lg:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 data-aos="flip-left"  data-aos-duration="1000" className="text-5xl font-bold text-white">Welcome to Z Specific....</h1>
      <p className="py-6 text-white">Welcome to Z Specific, where creativity meets functionality in transforming environments. Explore our innovative designs tailored for hospitals, schools, religious centers, and more. Discover how we bring visions to life, one space at a time. Visit our website now to experience the artistry of Z Specifics firsthand.</p>
      
    </div>
  </div>
</div>

          </div>

          <div className="mt-20 grid lg:grid-cols-3 grid-cols-1 gap-5">
          {
            cards.map(card=><Card key={card.id}
               card={card}></Card>)
          }
          
          </div>
        </div>
        
    );
};

export default Home;