import React, { useState } from 'react'
import ComponentTitle from '../ComponentTilte/ComponentTitle'

export default function Contact() {

  const [enterInputData, setEnterInputData] = useState("")
  const [inputID, setInputID] = useState("")
  return (
    <>
      <ComponentTitle text={"conatct section"} />

      <div className="flex-col my-20">
        {/* UserName Input  */}
        <div className="w-2/3  mx-auto my-3">
          <div className="overflow-hidden text-start">
            <label htmlFor="" className={`text-[#1ABC9C] ${enterInputData != "" && inputID == 'userName' ? 'translate-y-0' : 'translate-y-full'} transition-all duration-700 block `}>userName:</label>
          </div>
          <input onInput={(e) => { setEnterInputData(e.target.value), setInputID(e.target.id) }} type="text" placeholder='userName' name='userName' id='userName' className='w-full py-3 px-2 border border-x-0 focus-visible:outline-none border-t-0' />
        </div>
        {/* UserAge Input  */}
        <div className="w-2/3  mx-auto my-3">
          <div className="overflow-hidden text-start">
            <label htmlFor="" className={`text-[#1ABC9C] ${enterInputData != "" && inputID == 'userAge' ? 'translate-y-0' : 'translate-y-full'} transition-all duration-700 block `}>userAge:</label>
          </div>
          <input onInput={(e) => { setEnterInputData(e.target.value), setInputID(e.target.id) }} type="text" placeholder='userAge' name='userAge' id='userAge' className='w-full py-3 px-2 border border-x-0 focus-visible:outline-none border-t-0' />
        </div>

        {/* UserEmail Input  */}
        <div className="w-2/3  mx-auto my-3">
          <div className="overflow-hidden text-start">
            <label htmlFor="" className={`text-[#1ABC9C] ${enterInputData != "" && inputID == 'userEmail' ? 'translate-y-0' : 'translate-y-full'} transition-all duration-700 block `}>userEmail:</label>
          </div>
          <input onInput={(e) => { setEnterInputData(e.target.value), setInputID(e.target.id) }} type="email" placeholder='userEmail' name='userEmail' id='userEmail' className='w-full py-3 px-2 border border-x-0 focus-visible:outline-none border-t-0' />
        </div>

        {/* UserPassword Input  */}
        <div className="w-2/3  mx-auto my-3">
          <div className="overflow-hidden text-start">
            <label htmlFor="" className={`text-[#1ABC9C] ${enterInputData != "" && inputID == 'userPassword' ? 'translate-y-0' : 'translate-y-full'} transition-all duration-700 block `}>userPassword:</label>
          </div>
          <input onInput={(e) => { setEnterInputData(e.target.value), setInputID(e.target.id) }} type="password" placeholder='userPassword' name='userPass' id='userPassword' className='w-full py-3 px-2 border border-x-0 focus-visible:outline-none border-t-0' />
        </div>
        <button className=' bg-[#1ABC9C] py-2 px-4 text-white rounded mt-3 mx-0'>
          Send Message
        </button>
      </div>
    </>
  )
}
