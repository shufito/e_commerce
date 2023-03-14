import React, { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

const Slider = ({product}) => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
    
      axios.get("https://api.mercadolibre.com/sites/MLB/search?limit=15&q="+(product.split(" ").join("%20"))).then(resposta => setProducts(resposta.data.results));
   
     },[product]);

  useEffect(() => {
    $('.'+(product.split(" ").join("-"))).slick({
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }, [products,product]);

   if(products.length !==0){
    return (<>
      <div className="py-4 text-2xl font-bold tracking-tight text-gray-900">{product}</div>
      <div className={(product.split(" ").join("-"))}>
        {products.map((item) => (
        <div className='' key={item.id}>
        <div className="bg-white m-3 rounded-lg drop-shadow-md">
        <a key={item.id} href={item.permalink} className="">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img className="h-full w-full object-cover object-center p-2" src={item.thumbnail.split("-I").join("-AB")} alt="img"/>
          </div>
          <div className="flex flex-col justify-center items-start p-3">
            <div className="font-semibold text-xs my-1 w-full"><p className='truncate overflow-hidden'>{item.title}</p></div>
              <div className="pricing flex items-center">
                <div className="price ">R$ {item.price}</div>
              </div>
          </div>
        </a>
        </div>
      </div>
        ))}
      </div>
      </>);
  }

  return <div>Loading...</div>;
};

export default Slider;
