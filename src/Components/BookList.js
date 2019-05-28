import React from 'react';
import Book from './Book';
// import Search from './Search';
import google_key  from './../keys.js'
import Search from './Search'

class BookList extends React.Component {

  state = {
    books: [],
    api: google_key,
    q: "",
    printType: "",
    filter: "", 
  }

  


  componentDidMount() {
    console.log('i made it to component mount');
    fetch('https://www.googleapis.com/books/v1/volumes?q=trees&key=' + this.state.api)
    // fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.q + '&key=' + this.state.api)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const books = data.items.map(item => {
          const title = item.volumeInfo.title;
          // console.log('i made it to map');
          // console.log(title);
          //authors is an array of strings
          const authors = item.volumeInfo.authors;
          const desc = item.volumeInfo.description;
          const img = item.volumeInfo.imageLinks.thumbnail;
          // const price = 0;

          const price = item.saleInfo.retailPrice ? item.saleInfo.retailPrice.amount: 0; // In USD
          console.log(price);
          // create Book component or something along those lines
          return {
            title,
            authors,
            desc,
            img,
            price,
          }})
          console.log(books);
          this.setState( {
            books,
          })
        })
      // .then(books => )
      .catch(error => { 
        console.log(error.message);
        this.setState( {
        error: error.message
      })});

  }

  handleSearch = () => {
    
  }


  render() {

    const booklist = this.state.books.map((item, index) => {
      return (
      <div>
        <Search handleSearch={this.handleSearch}/>
      <li key={index}>
        < Book title={item.title} authors={item.authors} desc={item.desc} img={item.img} price={item.price} />
      </li>
      </div>
      );
      
    })

    return ( 
      <ul className="booklist">
        {booklist}
      </ul>

    )




}
}


export default BookList;