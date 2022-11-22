import axios from "axios";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
}
export default class ActivityService {
    getAllActivity() {
        return axios.get("http://localhost:8080/api/events/all")
    }

    addActivity(activityData) {
        return axios.post("http://localhost:8080/api/events/create", activityData, config)
    }

    deleteActivity(activityId) {
        return axios.delete("http://localhost:8080/api/events/delete/" + activityId, config)
    }
}