import React from 'react'

const HigherOrderComponent = (ChildComponent : any) => {
  return () => (
    <div>
        <p>HigherOrderComponent</p>
        <ChildComponent />
    </div>
  )
}

export default HigherOrderComponent