import React from 'react'

const ChargeBars = ({count, bgColor}) => {

    const progressBar = {width:`${count}%`}

  return (
    <>  
        <h2 className="text-secondary">Exercices sans et avec useCallBack</h2>
        <p>Sans le useCallBack (peu de components)</p>
        <p className="h1">{count}%</p>
        <div className="progress">
            <div className={`progress-bar progress-bar-striped bg bg-${bgColor}`} role="progressBar" style={progressBar}></div>
        </div>
    </>
  )
}

export default ChargeBars;