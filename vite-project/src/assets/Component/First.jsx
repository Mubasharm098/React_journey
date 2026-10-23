import React from 'react'
import Second from './Second'
function First(props) {
  return (
    <>
      <div>My Name is {props.name}</div>
      <div>My Age is {props.age}</div>
      <Second props={props} />
      <button onClick={props.clickHandle}>Click Me</button>
    </>
  )
}
export default First
