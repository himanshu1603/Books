import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



const Cards = (props) => {
    const imgagePath = props.image;
      function handleClick(e) {
        e.preventDefault();
          
      }
          
    return (
        <card>
       
            <div class="card mb-4 mt-5" style={{width: 18 + 'rem'}}>
              <img class="card-img-top" src={require(`../data/${imgagePath}`)}  alt="Card image cap" />

              <div class="card-body">
                <h4 class="card-title">{props.title}</h4>
                <h5 class="card-title">{props.author}</h5>
                <p class="card-text">{props.published}</p>


                <Link class="btn btn-primary" 
                to={{pathname:"/book-details",
                    data: props.title}}
                >Details</Link>

              </div>
            </div>
        </card>

        
    )


}

export default Cards;

