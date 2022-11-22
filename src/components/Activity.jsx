import React, { useEffect, useState } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import ActivityService from '../services/activityService';


function Activity() {
    const [allActivity, setAllActivity] = useState([])

    let activityService = new ActivityService();

    useEffect(() => {
        activityService.getAllActivity()
            .then(result => {              
                setAllActivity(result.data)
            }).catch(error => { console.log(error) });
    }, [allActivity])

    const deleteActivity = (activityId) => {
        activityService.deleteActivity(activityId)
            .then(result => {
                console.log(result.data)
                setAllActivity([result.data, ...allActivity])
            }).catch(error => { console.log(error) });
    }

    return (
        <div>
            <h1 className='mt-20 max-w-3xl mx-auto flex justify-center font-display4 text-6xl' >Etkinlikler</h1>
            <div className='mt-10 max-w-4xl mx-auto '>
                {
                    allActivity && allActivity.map((item, i) => {
                        return (
                            <div key={i} className='text-center mx-auto sm:flex sm:items-center sm:justify-center' >
                                <span className='w-2/5 px-3'>{item.details}</span>
                                <button onClick={() => { deleteActivity(item.id) }} className='border px-2 mt-2'>Sil</button>
                                <img className='w-11/12 mt-5 sm:mt-20 sm:w-2/5 mx-auto ' src={item.photo} />
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}

export default Activity