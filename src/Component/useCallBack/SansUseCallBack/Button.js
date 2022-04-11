import React from 'react'

const Button = ({btnColor, increment, children, fonction}) => {
  return (
    <div><button className={`btn btn-${btnColor} m-3`} onClick={() => {fonction(increment)}}>+{increment}%</button></div>
  )
}

export default Button;