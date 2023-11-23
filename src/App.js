
import './App.css';
import Navbar from './components/Navbar';
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { collection,getDocs, onSnapshot,docs } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useOpenClose from './hooks/useOpenClose';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact';

function App(){

const [contacts,setContacts]=useState([])
const {isOpen,onClose,onOpen}=useOpenClose()

const filterContact=(e)=>{
  const value=e.target.value 
  const contactsRef=collection(db,"contacts")
      onSnapshot(contactsRef,(snapshot)=>{
        const contactLists=snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data()
          };
        });

        const filteredContacts= contactLists.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()))
        setContacts(filteredContacts)
        return filteredContacts
      })


}
useEffect(()=>{
  const getContacts=async()=>{
    try{
      const contactsRef=collection(db,"contacts")
      onSnapshot(contactsRef,(snapshot)=>{
        const contactLists=snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data()
          };
        });
        setContacts(contactLists)
        return contactLists
      })
    }
    // try{
    //   const contactsRef=collection(db,"contacts")
    //   const contactsSnapshot=await getDocs(contactsRef)
    //   const contactLists=contactsSnapshot.docs.map((doc)=>{
    //     return {
    //       id:doc.id,
    //       ...doc.data()
    //     }
    //   })
    //  setContacts(contactLists)
    // }
    catch(error){
console.log(error)
    }
  }
  getContacts()
},[])

useEffect(()=>{
  if(contacts){
    console.log(contacts)
    contacts.map((e)=>console.log(e.id))
  }

})

  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
     <Navbar />
    <div className='flex'>
      <div className='relative flex flex-grow items-center'>
        <FaSearch className='text-white ml-2 text-xl absolute' />
        <input onChange={filterContact} type='text' className='pl-8 flex-grow h-10 rounded-md border border-white bg-transparent'/>
      </div>
      
        <CiCirclePlus onClick={onOpen} className='text-3xl text-white cursor-pointer'/>
      
    </div>
    <div className='mt-4 gap-4 flex flex-col'>
      {
        contacts.length <=0 ? <NotFoundContact/> :
        contacts.map((contact)=>(
          
     <ContactCard contact={contact} />
        ))
      }
    </div>

    </div>
    <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    <ToastContainer />
    </>
  );
}

export default App;
