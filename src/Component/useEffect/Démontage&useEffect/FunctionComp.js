import React, { useState } from 'react'
import UseEffectUnmount from './UseEffectUnmount';

const FunctionComp = () => {

  const [show, setShow] = useState(true);

  const displayButton = show ? 'cacher' : 'afficher';

  return (
    <div className="text-center">
      <p>Le démontage du composant par le useEffect</p>
      <button className="btn btn-secondary m-3" onClick={() => setShow(!show)}>{displayButton}</button>
      {
      show && <UseEffectUnmount />
      }
    </div>
  )
}

export default FunctionComp