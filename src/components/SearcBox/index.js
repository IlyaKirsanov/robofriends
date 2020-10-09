import React from 'react'

const SearchBox = ({ searchChange }) => {
	return (
		<>
			<input onChange={searchChange} className="pa3 ba b--green bg-lightest-blue" 
			type='search' placeholder='Search Robots' />
		</>
	)
}

export default SearchBox