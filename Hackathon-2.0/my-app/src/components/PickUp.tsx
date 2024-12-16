import React from 'react'

export default function PickUp() {
  return (
    <>
    <div className='w-[400px] h-[100px] bg-white flex-col px-5 py-3 mx-[118px] rounded-md'>
      <div className='border border-black'>

      <input type="radio" name="" id="radio-input" className='mx-2'/>
      <label htmlFor="radio-input">Pick - Up</label>
      </div>
      <div className='flex'>
      <label htmlFor="Cities">Locations</label>
      <select name="" id="Cities" >
        <option value="">Select Your City</option>
        <option value="">Karachi</option>
        <option value="">Lahore</option>
        <option value="">Islamabad</option>
      </select>
      <select name="" id="Date">
      <label htmlFor="Date">Date</label>
        <option value="">Date</option>
        <option value="">Karachi</option>
        <option value="">Lahore</option>
        <option value="">Islamabad</option>
      </select>

      <div className='flex-row'>
      <select name="" id="Time">
      <label htmlFor="Time">Time</label>
        <option value="">Time</option>
        <option value="">Karachi</option>
        <option value="">Lahore</option>
        <option value="">Islamabad</option>
      </select>
      </div>
      </div>

    </div>
    </>
  )
}
