import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Card({q}) {
  const [products,setProducts] = useState([]);

    useEffect(()=>{
  
     axios.get("https://api.mercadolibre.com/sites/MLB/search?limit=15&q="+q).then(resposta => setProducts(resposta.data.results));
  
    },[q])

    return ( <>
    {products.map((product) => (
      <div className='bg-white m-2 rounded-lg drop-shadow-md' key={product.id}>
      <div className=" w-[235px] ">
      <a key={product.id} href={product.permalink} className="">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img className="h-full w-full object-cover object-center p-2" src={product.thumbnail.split("-I").join("-AB")} alt="img"/>
        </div>
        <div className="flex flex-col justify-center items-start p-3">
          <div className="font-semibold text-xs my-1 w-full"><p className='truncate overflow-hidden'>{product.title}</p></div>
            <div className="pricing flex items-center">
              <div className="price ">R$ {product.price}</div>
            </div>
        </div>
      </a>
      </div>
    </div>
    ))}
    </>
  );
}
export default Card;
