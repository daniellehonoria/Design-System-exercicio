import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import ProductSimple from './components/ProductSimple';
import { useState } from 'react';


function App() {

  const arrayProducts=[
    {
      brand:'Apple', 
      name:'iPhone 14', 
      priceDescount:'R$6000', 
      priceNormal:'R$6200', 
      image:'https://www.oficinadanet.com.br/imagens/obj_item/1376/apple-iphone-14-pro-max.jpg'},
    {
      brand:'Samsung', 
      name:'Galaxy Z Flip4', 
      priceDescount:'R$6100', 
      priceNormal:'R$6.299', 
      image:'https://images.samsung.com/co/smartphones/galaxy-z-flip4/buy/Flip4_Carousel_ProductKV_BoraPurple_MO.jpg'},
    {
      brand:'Xiaomi', 
      name:'12 Lite', 
      priceDescount:'R$2700', 
      priceNormal:'R$2890', 
      image:'https://image2.tin247.news/pictures/2022/07/10/mda1657451861.jpg'
    },
    {
      brand:'Motorola', 
      name:'Edge 30', 
      priceDescount:'R$2100', 
      priceNormal:'R$2407', 
      image:'https://brmotorolanew.vtexassets.com/arquivos/ids/162411/2022_Miami_Basic-Pack_Very-Peri_PDP-Hero.png?v=1756146087'
    }
  ]

  const [products]= useState(arrayProducts)
  return (
  
    <ChakraProvider>
      {products.map((product)=>{
        return <ProductSimple produto={product}/>
      })
      }
    
    </ChakraProvider>

  );
}

export default App;
