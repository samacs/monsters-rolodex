import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({ searchQuery, placeholder, handleOnChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleOnChange} />
)
