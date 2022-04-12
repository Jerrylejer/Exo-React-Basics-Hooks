import React from 'react'

const Button = ({btnColor, increment, children, fonction}) => {

  // console.log(children)
  return (
    <div><button className={`btn btn-${btnColor} m-3`} onClick={() => {fonction(increment)}}>+{increment}%</button></div>
  )
}

export default React.memo(Button);