import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name:"Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjames@gmail.com',
    phone: '+1 123 456 789',
    addfress:{
      line1: "57th cross, Richmond",
      line2:"Circle, Church Road, London"
    },
    gender:'Male',
    dob:'2000-01-2'
    
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type='text' value={userData.name} onChange={e => setUserData(prev => ({...prev, name:e.target.value}))} />
        : <p className='font-medium text-3xl text-neutral-800 mt-4 '>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none'/>

      <div>
        <p className='text-neutral-500 underline mt-3 '>CONTACT INFROMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium'>Email ID:</p>
          <p className='text-blue-500'> {userData.email} </p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
            ? <input className='bg-gray-100 max-w-52' type='text' value={userData.phone} onChange={e => setUserData(prev => ({...prev, phone:e.target.value}))} />
            : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p>Address</p>
          {
            isEdit 
            ? <p>
              <input className='bg-gray-50' onChange={() => setUserData(prev => ({...prev, address: {...prev.addfress, line1: e.target.value}}))} value={userData.addfress.line1} type="text" />
              <input className='bg-gray-50' onChange={() => setUserData(prev => ({...prev, address: {...prev.addfress, line2: e.target.value}}))} value={userData.addfress.line2} type="text" />
            </p> 
            : <p>
              {userData.addfress.line1}
              <br />
              {userData.addfress.line2}
            </p>
          }
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3 '>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gep-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
            ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            : <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit
            ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob}/>
            : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit 
          ? <button className='border hover:bg-primary transition-all hover:text-white duration-300 border-primary px-8 py-2 rounded-full' onClick={()=>setIsEdit(false)}>Save Information</button>
          : <button className='border hover:bg-primary transition-all hover:text-white duration-300 border-primary px-8 py-2 rounded-full' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile