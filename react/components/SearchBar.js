import React, { Component } from 'react';

const SearchBar = (props) => {
  return(
    <div className= 'searchField'>
    <form onSubmit={props.onSubmit}>
      <input className='zip-search'
        type='text'
        placeholder='Enter zip code here...'
        onChange={props.onChange}
        value={props.zip}
      />
      <input className='button custom'
        type='submit'
        value='Search'
      />
    </form>
    </div>
  )
}
export default SearchBar;
