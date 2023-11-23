import React,{useState} from 'react'

const useOpenClose = () => {

const [isOpen,setisOpen]=useState(false)

const onOpen=()=>{
  setisOpen(true)
  console.log('dfsdfs')
}
const onClose=()=>{
  setisOpen(false)
}
    
  return {onClose,onOpen,isOpen}
}

export default useOpenClose;