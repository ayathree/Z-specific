import Card from "../components/Card";
import Slider from "../components/Slider";
import { useLoaderData} from 'react-router-dom'




const Home = () => {
  const cards = useLoaderData();
  
  console.log(cards)
  
 
    return (
        <div>
          
          <Slider></Slider> 
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