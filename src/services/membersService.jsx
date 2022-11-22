import axios from "axios";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
}

export default class MemberService{
    getAllMembers(){
       return axios.get("http://localhost:8080/api/members/all")
    }

    addNewMembers(memberData){
       return axios.post("http://localhost:8080/api/members/create",memberData,config)
    }

    deleteMember(memberId){
        return axios.delete("http://localhost:8080/api/members/delete/"+memberId,config)
     }
}