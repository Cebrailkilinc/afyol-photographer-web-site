import React, { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"


function Activity() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <h1 className='mt-20 max-w-3xl mx-auto flex justify-center font-display4 text-6xl' >Etkinlikler</h1>
            <div className='mt-10 max-w-4xl mx-auto '>
                <div className='text-center mx-auto sm:flex sm:items-center sm:justify-center'
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="500"
                    data-aos-offset="0"
                >
                    <span className='w-2/5 px-3 '>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>

                    <img className='w-11/12 mt-5 sm:w-2/5 mx-auto ' src="https://picsum.photos/400/300" />
                </div>
                <div className='text-center mx-auto sm:flex sm:items-center sm:justify-center' >
                    <span className='w-2/5 px-3'>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>

                    <img className='w-11/12 mt-5 sm:mt-20 sm:w-2/5 mx-auto ' src="https://picsum.photos/400/300" />
                </div>
            </div>
        </div>
    )
}

export default Activity