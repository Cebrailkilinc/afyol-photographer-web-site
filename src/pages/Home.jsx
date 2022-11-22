import React, { useEffect } from 'react'
import Activity from '../components/Activity'
import Slider from '../components/Slider';
import axios from "axios"

function Home() {

    return (
        <div className="bg-black " >         
            <Slider />
            <Activity />
        </div>
    )
}

export default Home