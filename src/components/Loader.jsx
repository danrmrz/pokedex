import React from 'react'

import '../assets/styles/components/Loader.styl'

const Loader = () => {
  return(
    <div className="loader">
      <div className="loader__poke-ball">
        <div className="loader__poke-ball--red red"></div>
        <div className="loader__poke-ball--dot"></div>
        <div className="loader__poke-ball--white white"></div>
      </div>
    </div>
  )
}

export default Loader