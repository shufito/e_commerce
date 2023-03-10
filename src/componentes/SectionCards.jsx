import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SectionCard = ({q}) => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
  
     axios.get("https://api.mercadolibre.com/sites/MLB/search?limit=15&q="+q).then(resposta => setProducts(resposta.data.results));
  
    },[q])

return ( <>
  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
    {products.map((product) => (
      <a key={product.id} href={product.permalink} className="group bg-white rounded-lg p-2 transition ease-in-out duration-500 hover:shadow-md hover:-translate-y-1">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
          <img className="h-full w-full object-cover object-center p-2" src={product.thumbnail.split("-I").join("-AB")} alt="img"/>
        </div>
        <div className="flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">{product.title}</div>
            <div className="pricing flex items-center">
              <div className="price ">R$ {product.price}</div>
            </div>
        </div>
      </a>
    ))}
  </div>
    </> );
}
 
export default SectionCard;