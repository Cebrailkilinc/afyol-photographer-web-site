import axios from "axios";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
}

export default class SliderService{ 

    getPhotos(){
        return axios.get("http://localhost:8080/api/photos/all",config)
    }

}