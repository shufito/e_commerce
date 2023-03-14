import React from 'react';
import Slider from './componentes/Slide';

function App() {

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

  <div className='bg-gray-100'>
    <div className="m-auto mx-auto max-w-5xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <Slider product={"Celular"}/>
      <Slider product={"Livro"}/>
      <Slider product={"Tenis Nike"}/>
    </div>
  </div>
  
  </>);
}

export default App;
