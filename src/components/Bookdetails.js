import React from 'react';
import Books from '../data/books.json';
import { Link } from 'react-router-dom';


const Bookdetails = (props) => {
    const {data} = props.location;


    return (
        
        <div class="details">
        <h1>Title: {data}</h1>
        <h3>Author:</h3>
        <h4>Year: </h4>
        <h4>Country: </h4>
        <h4>Language: </h4>
        <h4>Pages: </h4>
        <p>
        Wikipedia:
        </p>
        <Link to="/" class="btn btn-secondary">Back</Link>
        </div>
    )


}


export default Bookdetails;