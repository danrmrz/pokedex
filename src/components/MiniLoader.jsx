import React from 'react'

import '../assets/styles/components/MiniLoader.styl'

const MiniLoader = () => {
  return(
    <div className="mini-loader">
      <div className="mini-loader__poke-ball">
        <div className="mini-loader__poke-ball--red red"></div>
        <div className="mini-loader__poke-ball--dot"></div>
        <div className="mini-loader__poke-ball--white white"></div>
      </div>
    </div>
  )
}

export default MiniLoader