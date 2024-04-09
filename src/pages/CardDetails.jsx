import { useLoaderData,useParams} from 'react-router-dom'

const CardDetails = () => {
    
    const cards = useLoaderData();
    const{id}= useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt)
   
    console.log(cards,id)
    
    return (
        <div>
            <h2 className='text-white'>{card.segment_name}</h2>
            
           
        </div>
    );
};

export default CardDetails;