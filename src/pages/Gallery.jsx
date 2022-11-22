import React, { useEffect, useState } from 'react'
import GalleryService from '../services/galleryService'

function Gallery() {

  const [allPhotosOfGallery, setAllPohotosOfGallery] = useState(null)

  const galleryService = new GalleryService();

  // Fotoğrafların çekildiği fonksiyon
  useEffect(() => {
    galleryService.getAllGalleryPhotos().then(result => {      
      setAllPohotosOfGallery(result.data);
    }).catch(error => console.log(error))
  }, [allPhotosOfGallery])

  // Fotoğrafların silindiği fonksiyon 
  const deletePhotos = (photoId) => {   
    galleryService.deletePhotosToGallery(photoId).then(result => {
      console.log(result.data)
      setAllPohotosOfGallery([result.data,...allPhotosOfGallery])
    }).catch(error => console.log(error))
  }

  return (
    <div className='max-w-5xl mx-auto flex-wrap font-display4'>
      <h1 className='text-7xl text-center p-10'>GALERİ</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden '>
        {
          allPhotosOfGallery && allPhotosOfGallery.map((item, i) => {
            return (
              <div key={i} className="p-4 sm:p-none">
                <div className='flex-1 justify-center overflow-hidden  border  ' >
                  <img className='object-cover h-80 w-80 transition duration-700 ease-in-out hover:scale-150' src={item.photoUrl} />
                </div>
                <div className='text-center'>
                  <button onClick={() => { deletePhotos(item.id) }} className='border px-2 mt-2'>Sil</button>
                  <h1>{item.photoDescription}</h1>
                  <h1>{item.photographerName}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>



  )
}

export default Gallery