import React  from 'react';
import {Link} from 'react-router-dom';
import Data from './Data'
import './App.css';


const ProductList =({product, image} ) =>

    <React.Fragment>
            
            <div className="container" style={{display:"flex-column",textAlign:"center",paddingTop:"2px"}} >
            <h3 style={{color:"sandybrown"}}>click to see product details</h3>
         <Link to="Details">
            <button className="button" ><img src={image} style={{width:"200px"}}></img> </button>     
                 </Link> 
                 <h1>{product}</h1></div>         
        
        </React.Fragment>


        
export default ProductList;