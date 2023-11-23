import React, { useState } from 'react'
import { IoMdContact } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import {deleteDoc,doc} from "firebase/firestore"
import {db} from "../config/firebase"
import AddAndUpdateContact from './AddAndUpdateContact';
import useOpenClose from '../hooks/useOpenClose';
import {toast} from "react-toastify"
const ContactCard = ({contact}) => {
 // const [isUpdate,setisUpdate]=useState(false)
  const {isOpen,onClose,onOpen}=useOpenClose()
  // const onEditClickHandler=()=>{
  //   onOpen
  //   setisUpdate(true)

  // }
  const deleteContact=async(id)=>{
    try{
      await deleteDoc(doc(db,"contacts",id))
      toast.success("Contact deleted Successfully")
    }
catch(error){
  console.log(error)
}

  }
  return (
    <>
    <div key={contact.id} className='flex bg-yellow justify-between items-center p-2 rounded-lg'>
    <div className='flex gap-1'>
   <IoMdContact className=' text-orange text-2xl' /> 
   
   <div className=''>
    <h2 className=' text-md'>{contact.name}</h2>
    <p className=' text-sm'>{contact.email}</p>
   </div>
   </div>
   <div className='text-2xl flex'>
   <CiEdit onClick={onOpen} className='cursor-pointer' />
   <MdDelete onClick={()=>deleteContact(contact.id)} className='text-orange cursor-pointer' />
   
    </div>
  </div>
  <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
  </>
  )
}

export default ContactCard