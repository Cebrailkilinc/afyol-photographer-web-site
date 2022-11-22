import React, { useEffect, useState } from 'react';
import MemberService from '../services/membersService';

function Members() {
  const [getAllMembers, setGetAllMembers] = useState([])

  let memberService = new MemberService();

  useEffect(() => {
    memberService.getAllMembers()
      .then(result => { 
        setGetAllMembers(result.data)
       })
      .catch(error => { console.log(error) });
  }, [getAllMembers])

  const deleteMembers = (memberId)=>{
      console.log(memberId)
      memberService.deleteMember(memberId).then(result => {
        console.log(result.data)
        setGetAllMembers([result.data,...getAllMembers])
      }).catch(error => console.log(error))
  }

  return (
    <div className='max-w-5xl mx-auto flex-wrap font-display4'>
      <h1 className='text-7xl text-center p-10'>ÜYELERİMİZ</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden '>
        {
          getAllMembers && getAllMembers.map((item, i) => {
            return (
              <div key={i} className="p-4 sm:p-none">
                <div className='flex-1 justify-center overflow-hidden  border  ' >
                  <img className='object-cover h-72 w-80 transition duration-700 ease-in-out hover:scale-150' src={item.memberPhoto} />
                </div>
                <div className='text-center'>
                <button onClick={() => { deleteMembers(item.id) }} className='border px-2 mt-2'>Sil</button>
                  <h1>{item.memberRole}</h1>
                  <h1>{item.firstName + " " + item.lastName}</h1>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>

  )
}

export default Members