import React, { useState } from 'react'
import SliderService from '../../services/sliderService';

function SliderAdmin() {
  const [sliderImage, setSliderImage] = useState();

  const handleImageSelectLocal = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader()
      reader.onload = function (e) {
        setSliderImage(e.target.result)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const addSliderPhotos = () => {
    const sliderService = new SliderService();
    sliderService.addPhotos().then(result => console.log(result.data)).catch(error => console.log(error));
  }

  return (
    <div className='sticky top-24 w-full ' >
        <h1 className='text-3xl'>SLIDER</h1>
        <div className='flex justify-center items-center'>
          <div>asdasdasdassa</div>
        </div>

    </div>
  )
}

export default SliderAdmin;