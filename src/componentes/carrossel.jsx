import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel({product}) {

const scrollLeft = () => {
    document.getElementById(product).scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById(product).scrollLeft += 400;
}


  return (<>
    <div>
      <div className="py-4 text-2xl font-bold tracking-tight text-gray-900">{product}</div>
      <div className="relative flex items-center group">
      
        <div className='text-2xl rounded-full p-2 mx-1 bg-black/20 text-white cursor-pointer' onClick={scrollLeft}>
          <FiChevronLeft/>
        </div>

        <div id={product} className="carousel flex justify-start overflow-x-hidden scroll-smooth">
          <Card q={(product).split(" ").join("%20")}/>
        </div>

        <div className='text-2xl rounded-full p-2 mx-1 bg-black/20 text-white cursor-pointer' onClick={scrollRight}>
          <FiChevronRight/>
        </div>

      </div>
    </div>
  </>);
}

export default Carousel;