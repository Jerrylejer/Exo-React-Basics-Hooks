import React, { useState, useEffect } from 'react'

const useEffectUnmount = () => {

  const [keyCode, setKeyCode] = useState('');

  const handleKeyCode = (e) => {
      setKeyCode(e.code)
  }

  useEffect (() => {
    //todo console.log('UseEffect le component est monté')
    document.addEventListener('keyup', handleKeyCode)

    return () => { 
      //todo console.log('UseEffect le component est démonté')
      document.removeEventListener('keyup', handleKeyCode)
    }
  }, [])

  return (
    <div className="card">
          <div className="card-body">
              <h1 className="text-center">{keyCode}</h1>
          </div>
      </div>
  )
}

export default useEffectUnmount;