import axios from "axios";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
}
console.log(localStorage.getItem("userToken"))

export default class GalleryService {
    getAllGalleryPhotos() {
        return axios.get("http://localhost:8080/api/photos/all")
    }

    addPhotosToGallery(galleryData) {
        return axios.post("http://localhost:8080/api/photos/create", galleryData, config)
    }

    deletePhotosToGallery(userId) {
        return axios.delete("http://localhost:8080/api/photos/delete/"+userId, config)
    }

}