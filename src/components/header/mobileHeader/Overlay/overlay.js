import React from "react"

export default function overlay({toggle , setToggle}) {

    const runOverlay = () => {
      setToggle(false)
    }

   return (
        <div onClick={runOverlay} className={` ${toggle ? " visible" : "invisible"} backdrop-blur-xs inset-0 h-full w-full fixed  z-10`}></div>
    ) 
}


