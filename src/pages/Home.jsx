import React, { useEffect } from 'react'
import Activity from '../components/Activity'
import Slider from '../components/Slider';
import axios from "axios"

function Home() {

    const register = () => {
        console.log("Working...")
        axios.post("http://localhost:8080/api/users/create",
            {
                email: "oguz",
                password: "123456",
                firstName: "Oğuz",
                lastName: "Akın",
                authorityId:1
            }
        ).then(res => console.log(res.data)).catch(err => console.log(err))
    }

    useEffect(()=>{
        register();
    },[])

    return (
        <div className="bg-black " >
            <Slider />
            <Activity />
        </div>
    )
}

export default Home