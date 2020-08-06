import React,{Component} from 'react';
import ProductList from "./ProductList";
import './App.css'
import { render } from '@testing-library/react';

class Data extends Component {
  render() {
 const storeproducts = [
  {
    id: 1,
    title: "Google Pixel - Black",
    img:"img/product-1.png",
    price: 10,
    company: "GOOGLE"
    
  },
  {
    id: 2,
    title: "Samsung S7",
    img: "img/product-2.png",
    price: 16,
    company: "SAMSUNG"
   
  },
  {
    id: 3,
    title: "HTC 10 - Black",
    img: "img/product-3.png",
    price: 8,
    company: "htc"
   
  },
  {
    id: 4,
    title: "HTC 10 - White",
    img: "img/product-4.png",
    price: 18,
    company: "htc"
    
  },
  {
    id: 5,
    title: "HTC Desire 626s",
    img: "img/product-5.png",
    price: 24,
    company: "htc"
    
  },
  {
    id: 6,
    title: "Vintage Iphone",
    img: "img/product-6.png",
    price: 17,
    company: "apple"
    
  },
  {
    id: 7,
    title: "Iphone 7",
    img: "img/product-7.png",
    price: 30,
    company: "apple"
   
  },
  {
    id: 8,
    title: "Smashed Iphone",
    img: "img/product-8.png",
    price: 2,
    company: "apple"
   
  }
] ;
this.state={storeproducts};

return (
  <div className="box">
  {this.state.storeproducts.map((start) => (
  <ProductList product={start.title} image ={start.img}/>)
  )}
  </div>
);

  }
}

export default Data;