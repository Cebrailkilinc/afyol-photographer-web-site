import React, { useState, useEffect } from 'react'
import UserService from '../../services/userService';






function UsersAdmin() {

    const [allUsers, setAllUsers] = useState([])
    let userService = new UserService();

    const selectOptions = [
        { value: 'Admin', label: 'Admin' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const userData = {
        email: "hasands@gmail.com",
        password: "123456",
        firstName: "ayse",
        lastName: "deniz",
        authorityId: "1",
    }

    useEffect(() => {
        userService.getAllUsers()
            .then(result => {
                console.log(result.data)
                setAllUsers(result.data)
            }).catch(error => { console.log(error) });
    }, [])


    const addUser = () => {
        userService.addUser(userData)
            .then(result => {
                console.log(result.data)
            }).catch(error => { console.log(error) });
    }

    const deleteUser = (userId) => {
        console.log(userId)
        userService.deleteUser(userId)
            .then(result => {
                console.log(result.data)
            }).catch(error => { console.log(error) });
    }


    return (
        <div className='flex flex-col items-center   space-y-4'>
            <div className='flex flex-col  w-1/2  items-center space-y-4'>
                <input className=" bg-black  border text-white w-full py-2 px-3  focus:outline-none " id="username" type="text" placeholder="Kullanıcı Adı" />
                <input className=" bg-black  border text-white w-full py-2 px-3  focus:outline-none " id="username" type="text" placeholder="Kullanıcı Soyadı" />               
                <button className='rounded-lg text-sm px-5 py-2.5 w-1/2 bg-blue-700 hover:opacity-80 text-white' onClick={addUser}>Ekle</button>
            </div>
            <div className=" w-4/5">
                <div className=" w-full">
                    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Kullanıcı Ad-Soyad
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Statu
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Kullanıcı İşlem
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers && allUsers.map((item, i) => {
                                    return (
                                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.firstName + " " + item.lastName}
                                            </th>
                                            <td className="py-4 px-6">
                                                {item.auth}
                                            </td>
                                            <td className="py-4 px-6">
                                                <button onClick={()=>{deleteUser(item.id)}} className='rounded-lg text-sm px-5 py-2.5  bg-blue-700 text-white'>Kaldır</button>
                                            </td>
                                        </tr>
                                    )

                                }, [])
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div >
    )
}

export default UsersAdmin