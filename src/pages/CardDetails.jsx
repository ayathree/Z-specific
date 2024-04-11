import { useLoaderData,useParams} from 'react-router-dom'
import { MdOutlinePriceChange,  } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import PageTitle from './PageTitle';



const CardDetails = () => {
    
    const cards = useLoaderData();
    const{id}= useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt)
   
    console.log(cards,id)
    
    return (
        <div data-aos="zoom-in-right" data-aos-duration="1000">
            <PageTitle title={`${card.segment_name}`}></PageTitle>
            
            <div   className="hero min-h-scree">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src={card.image} className=" rounded-lg border-4 lg:max-w-lg border-white" />
    <div>
      
      <h1 className="lg:text-5xl font-bold text-white  ">{card.estate_title}</h1>
        <div className='flex flex-row gap-3  item-center mt-6'>
            <p className='lg:text-2xl text-white font-bold underline underline-offset-4'>Category:</p>
            <p className='text-white lg:text-2xl'>{card.segment_name}</p>
        </div>
        <div className='flex flex-row items-center mt-6 gap-9'>
            <div className='flex flex-row items-center gap-3'>
                <p className='text-white'><MdOutlinePriceChange /></p>
                <p className='text-white'>{card.price}</p>
            </div>
            <div className='flex flex-row items-center gap-3' >
                <p className='text-white underline underline-offset-4'>Status:</p>
                <p className='text-white'>{card.status}</p>
            </div>
        </div>
        <div className='mt-6'>
            <p className='text-white'><span className='lg:text-2xl font-bold underline underline-offset-4'>Description:</span> {card.description}</p>
        </div>
        <div className='flex flex-row items-center mt-6 gap-9'>
            <div className='flex flex-row items-center gap-3'>
                <p className='text-white'><FaChartArea /></p>
                <p className='text-white'>{card.area}</p>
            </div>
            <div className='flex flex-row items-center gap-3' >
                <p className='text-white '><FaLocationDot /></p>
                <p className='text-white'>{card.location}</p>
            </div>
        </div>
        <div className=' mt-6' >
                <p className='text-white text-center lg:text-start md:text-start underline underline-offset-4 lg:text-2xl font-bold'>Facilities:</p>
                <div className='flex lg:flex-row md:flex-row flex-col items-center lg:gap-3 md:gap-3'>
                <p className='text-white'>{card.facilities[0]},</p>
                <p className='text-white'>{card.facilities[1]},</p>
                <p className='text-white'>{card.facilities[2]}</p>
                </div>
            </div>
        

     
     
    </div>
  </div>
</div>
            
           
        </div>
    );
};

export default CardDetails;