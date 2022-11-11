import React from 'react'

function Gallery() {
  return (

    <div className='max-w-5xl mx-auto flex-wrap font-display4'>
      <h1 className='text-7xl text-center p-10'>GALERİ</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden '>
        <div className="p-4 sm:p-none">
          <div className='flex-1 justify-center overflow-hidden  border  ' >
            <img className='object-cover h-80 w-80 transition duration-700 ease-in-out hover:scale-150' src='backroundImage3.jpg' />
          </div>
          <div className='text-center'>
            <h1>Adıyaman Kahta Kalesi</h1>
            <h1>Cebrail Kılınç</h1>
          </div>
        </div>
        <div className="p-4 sm:p-none">
          <div className='flex-1 justify-center overflow-hidden  border  ' >
            <img className='object-cover h-80 w-80 transition duration-700 ease-in-out hover:scale-150' src='backroundImage3.jpg' />
          </div>
          <div className='text-center'>
            <h1>Adıyaman Kahta Kalesi</h1>
            <h1>Cebrail Kılınç</h1>
          </div>
        </div>
        <div className="p-4 sm:p-none" >
          <div className='flex-1 justify-center overflow-hidden  border' >
            <img className='object-cover h-80 w-80 transition duration-700 ease-in-out hover:scale-150' src='backroundImage3.jpg' />
          </div>
          <div className='text-center'>
            <h1>Adıyaman Kahta Kalesi</h1>
            <h1>Cebrail Kılınç</h1>
          </div>
        </div>
        <div className="p-4 sm:p-none">
          <div className='flex-1 justify-center overflow-hidden  border  ' >
            <img className='object-cover h-80 w-80 transition duration-700 ease-in-out hover:scale-150' src='backroundImage3.jpg' />
          </div>
          <div className='text-center'>
            <h1>Adıyaman Kahta Kalesi</h1>
            <h1>Cebrail Kılınç</h1>
          </div>
        </div>
        <div className="p-4 sm:p-none">
          <div className='flex-1 justify-center overflow-hidden  border  ' >
            <img className='object-cover h-80 w-80 transition duration-700 ease-in-out hover:scale-150' src='backroundImage3.jpg' />
          </div>
          <div className='text-center'>
            <h1>Adıyaman Kahta Kalesi</h1>
            <h1>Cebrail Kılınç</h1>
          </div>
        </div>
        <div className="p-4 sm:p-none">
          <div className='flex-1 justify-center overflow-hidden  border  ' >
            <img className='object-cover h-80 w-80 transition duration-700 ease-in-out hover:scale-150' src='backroundImage3.jpg' />
          </div>
          <div className='text-center'>
            <h1>Adıyaman Kahta Kalesi</h1>
            <h1>Cebrail Kılınç</h1>
          </div>
        </div> 
   
      </div>

    </div>



  )
}

export default Gallery