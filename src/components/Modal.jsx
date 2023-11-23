import React from 'react'
import { createPortal } from 'react-dom'
import {AiOutlineClose} from "react-icons/ai"

const Modal = ({isOpen,onClose,children}) => {
  return createPortal(
   <>
   {
    isOpen && (
        <div className='absolute top-0 z-40 grid backdrop-blur h-screen w-screen place-items-center'>
        <div className='m-auto z-50 relative min-h-[200px] min-w-[80%] bg-white p-4' >
            <div className='flex justify-end'>
                <AiOutlineClose onClick={onClose} className='self-end text-2xl' />
            </div>
            {
        children
       }
        </div>
        {/* <div onClick={onClose} className='backdrop-blur z-40 h-screen w-screen absolute top-0'/> */}
        </div>
    )
   }
   </>,
 document.getElementById("modal-root")
  )
}

export default Modal