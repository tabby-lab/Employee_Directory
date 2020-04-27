import React from 'react'

const Search = (props) => {
    return (
        <div className="container">
            search: <input type ="text" name= "search"  value= {props.search} onChange={props.handleInputChange} className="form-control" />
        </div>
    )
}

export default Search
