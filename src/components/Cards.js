import React from 'react';

const Cards = (props) => {
    return (
        <card>
            <div class="card mb-4 mt-5" style={{width: 18 + 'rem'}}>
              <img class="card-img-top" src="../data/images/the-possessed.jpg" alt="Card image cap" />
              <div class="card-body">
                <h4 class="card-title">{props.title}</h4>
                <h5 class="card-title">{props.author}</h5>
                <p class="card-text">{props.published}</p>
                <a href="#" class="btn btn-primary">Details</a>
              </div>
            </div>
        </card>
    )
}

export default Cards;