import React from 'react'

const PopUp = ( {correctCount, retryHandler} ) => {

  return (
    <div className='pop-up'>
        <h3>Total Score</h3>
        <p>{correctCount} out of 5</p>
        <button className="btn" onClick={()=>retryHandler()}>Retry</button>
    </div>
  )
}

export default PopUp