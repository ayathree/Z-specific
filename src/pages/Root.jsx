import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer';
import Nav from '../components/Nav';



const Root = () => {
    
    return (
        <div className='container mx-auto lg:px-12 py-8 px-3 '>
           
           <div className='mb-10'>
           <Nav></Nav>
           </div>
          <div className='mb-10'>
          <Outlet></Outlet> 
          </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;