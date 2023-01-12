import React, { useEffect } from 'react'

const PreComponentChild = ({age} : any) => {

  useEffect(() => {
    console.log("pure Component Child")
  })
  
  return (
    <div>
        <p>age : {age}</p>
    </div>
  )
}

export default React.memo(PreComponentChild);