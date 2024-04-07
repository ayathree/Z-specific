import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer';
import Nav from '../components/Nav';


const Root = () => {
    
    return (
        <div className='container mx-auto lg:px-12 py-8 px-3'>
           
            <Nav></Nav>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Root;