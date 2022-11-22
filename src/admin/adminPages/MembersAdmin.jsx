import React, { useState } from 'react'
import MemberService from '../../services/membersService'

function MembersAdmin() {
    const [membersImage, setMembersImage] = useState("")

    let memberService = new MemberService();

    const handleImageSelectLocal = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader()
            reader.onload = function (e) {
                setMembersImage(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const memberData = {
        memberPhoto: membersImage,
        firstName: "Cebrail",
        lastName: "KILINÇ",
        memberRole: "Üye",
    }
    const addMembers = () => {
        memberService.addNewMembers(memberData).then(result =>{ console.log(result.data)}).catch(error => {console.log(error)});
    }


    return (
        <div>
            <div>
                <div className='flex items-center'>
                    <label className=" bg-cyan-600 px-2 py-3 rounded-md text-xs ml-2  text-white cursor-pointer hover:opacity-60" htmlFor="file_input">{membersImage ? "Image Added!" : "Add Image"} </label>
                    <input
                        onChange={handleImageSelectLocal}
                        className="hidden w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                    />
                    <div className='w-80 h-80'>
                        <img className='w-80 h-80 object-covers' src={membersImage} />
                    </div>
                </div>
                <button onClick={addMembers} className='border p-1' >EKLE</button>
            </div>
        </div>
    )
}

export default MembersAdmin