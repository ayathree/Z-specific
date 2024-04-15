import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';



    const PageTitle = ({title})=>{
        return (
            <div>
                <Helmet>
                <title>{title}</title>
    
                </Helmet>
                
                
            </div>
        );

    }
   
PageTitle.propTypes={
    title:PropTypes.element
}

export default PageTitle;