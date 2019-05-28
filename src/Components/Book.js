import React from 'react';


export default function Book(props) {


    return (
      <div>
        <h2 className="title">{props.title}</h2>
        <h3 className="author">{props.authors}</h3>
        <h4 className="price">{props.price}</h4>
        <p className="desc">{props.desc}</p>
        <img src={props.img} alt="search img"></img>
      </div>
    );

}







