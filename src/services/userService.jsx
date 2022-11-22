import axios from "axios";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
}

export default class UserService {

    getAllUsers(){
        return axios.get("http://localhost:8080/api/users/all",config)
    }

    addUser(userData) {
        return axios.post("http://localhost:8080/api/users/create", userData, config)
    }

    deleteUser(userId) {
        return axios.delete("http://localhost:8080/api/users/delete/" + userId, config)
    }

}