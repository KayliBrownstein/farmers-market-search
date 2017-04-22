import React, { Component } from 'react';

const SearchBar = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
      <input className='zip-search'
        type='text'
        placeholder='Enter zip code here...'
        onChange={props.onChange}
        value={props.zip}
      />
      <input className='search-button'
        type='submit'
        value='Search'
      />
    </form>
  )
}
export default SearchBar;
