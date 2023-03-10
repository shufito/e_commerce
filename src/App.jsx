import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Carousel from "./componentes/carrossel";


function App() {

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1081358253809741886/1081955822520770660/5d2d5219-a5af-4b3b-ab92-8567e4b5a63a.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (<> 
  
  <header className='p-3 text-white bg-[#212529]'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-center items-center'>
        <ul className='flex justify-center lg:mr-auto'>
          <li className='px-4 py-2'>test</li>
          <li className='px-4 py-2'>test</li>
          <li className='px-4 py-2'>test</li>
        </ul>
        <form action="" className='mb-3 w-full lg:mr-3 lg:mb-0 lg:w-auto'>
          <input type="search" className='px-3 py-1 rounded-md w-full bg-transparent border-solid border-[1px] border-white'/>
        </form>
        <div>
          <button className='mr-2 px-3 py-1 border-solid border-[1px] border-white rounded-md'>login</button>
          <button className='px-3 py-1 rounded-md bg-[#ffc107] text-black'>Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  
  <div className='max-w-[1400px] h-[475px] w-full m-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>

  <div className='bg-gray-100'>
    <div className="m-auto mx-auto max-w-5xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <Carousel product={"Celular"}/>
      <Carousel product={"Tenis nike"}/>
      <Carousel product={"Livro"}/>
      </div>
    </div>

  </>);
}

export default App;
