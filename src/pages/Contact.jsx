import React from 'react'
import Map from '../components/Map'
function Contact() {
  return (
    <div className='max-w-5xl mx-auto flex-wrap font-display4'>
      <h1 className='text-7xl text-center p-10'>BİZE ULAŞIN...</h1>
      <div className='grid grid-cols-1 gap-4 overflow-hidden text-black w-11/12 sm:w-8/12 lg:w-5/12  mx-auto'>
        <div className="mb-4">
          <label className="block text-white text-xl  mb-2" htmlFor="username">
            AD
          </label>
          <input className=" bg-black border-b focus:border text-white w-full py-2 px-3  focus:outline-none " id="username" type="text" placeholder="adınız..." />
        </div>
        <div className="mb-4">
          <label className="block text-white text-xl  mb-2" htmlFor="username">
            SOYAD
          </label>
          <input className=" bg-black border-b focus:border text-white w-full py-2 px-3  focus:outline-none " id="username" type="text" placeholder="Soyadınız..." />
        </div>
        <div className="mb-4">
          <label className="block text-white text-xl  mb-2" htmlFor="username">
            EMAİL
          </label>
          <input className=" bg-black border-b focus:border text-white w-full py-2 px-3  focus:outline-none " id="username" type="text" placeholder="Mail Adresiniz..." />
        </div>
        <div className="mb-4">
          <label className="block text-white text-xl  mb-2" htmlFor="username">
            MESAJ
          </label>
          <textarea className=" bg-black border-b focus:border text-white w-full py-2 px-3  focus:outline-none " id="username" type="text" placeholder="Mesajınız..." />
        </div>
        <div className='flex justify-center'>
          <button className='bg-black border w-full lg:w-2/5 text-white py-2 hover:opacity-50'>GÖNDER</button>
        </div>
      </div>
      <h1 className='text-7xl text-center p-10'>Adres</h1>
      <div className='max-w-md mx-auto p-5 sm:p-1' >
        <Map />
        <h1 className='text-center mt-5'>SümerEvler Mah. 1759 sok. No:6</h1>

        
      </div>


    </div>
  )
}

export default Contact