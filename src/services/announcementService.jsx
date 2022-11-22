import axios from "axios";

export default class AnnouncementService{
    getAllAnnouncement(){
        return axios.get("http://localhost:8080/api/announcements/all")
    }
}