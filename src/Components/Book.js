import React from 'react';


class Book extends React.Component {

  state = {
    title: "",
    author: "",
    price: "",
    desc: "",
    img: "",
  }
  
  render() {


    return (
      <div>
        <h2 className="title">{this.state.title}</h2>
        <h3 className="author">{this.state.author}</h3>
        <h3 className="price">{this.state.price}</h3>
        <p className="desc">{this.state.desc}</p>
        <img src={this.state.img} alt="search img"></img>
      </div>

    )
  }


}





export default Book;


