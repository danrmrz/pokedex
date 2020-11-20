import React, {useRef} from 'react'

import search_icon from '../assets/static/search-icon.png'

import '../assets/styles/components/Searcher.styl'


const Searcher = ({handleSetSearch}) => {
  const searcher_input = useRef(null)

  const handleSearch = () => {
    if (searcher_input.current.value !== '') {
      handleSetSearch(searcher_input.current.value.toLowerCase())
    }
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleSearch()
    }
  }

  return(
    <div className='searcher'>
      <input
        type='text'
        className='searcher__input'
        placeholder='Search by name or id...'
        ref={searcher_input}
        onKeyDown={handleEnter}
      />
      <button
        className='searcher__button'
        onClick={handleSearch}
      >
        <img src={search_icon} alt='search-icon'/>
      </button>
    </div>
  )
}

export default Searcher