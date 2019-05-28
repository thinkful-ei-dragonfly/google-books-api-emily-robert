import React from 'react';
import Book from './Book';
// import Search from './Search';
import google_key  from './../keys.js'
import Search from './Search'

class BookList extends React.Component {

  state = {
    books: [],
    api: google_key,
    q: null,
    printType: null,
    filter: null, 
  }

  getURLParams() {

    // let url = 'https://www.googleapis.com/books/v1/volumes?';

    // if this.state.q ? 'q=' + this.state.q : ""



  } 


  componentDidMount() {
    console.log(this.state.q);
    console.log(this.state.printType);
    console.log(this.state.filter);
    console.log('i made it to component mount');

    // let url = 'https://www.googleapis.com/books/v1/volumes?';
    // (this.state.q ? url += 'q=' + this.state.q : "");
    // console.log(url);

    // NEED TO RETURN THESE
    let url = 'https://www.googleapis.com/books/v1/volumes?' + (this.state.q ? url += 'q=' + this.state.q : "");
    url += (this.state.printType ? '&printType=' + this.state.printType : "");
    url += (this.state.filter ? '&filter=' + this.state.filter : "");
    url += '&key=' + this.state.api;

    // console.log(url);

    fetch(url)
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

  handleSearch = (event) => {

    console.log('i registered click');

    event.preventDefault();
    
    let titleSearch = event.target.search.value;
    console.log(titleSearch);
    let filterSearch = event.target.bookType.value;
    console.log(filterSearch);
    let printTypeSearch = event.target.printType.value;
    console.log(printTypeSearch);
    this.setState( {
      q: titleSearch,
      filter: filterSearch,
      printType: printTypeSearch,
    });

    // set state
  }


  render() {

    const booklist = this.state.books.map((item, index) => {
      return (
      <li key={index}>
        < Book title={item.title} authors={item.authors} desc={item.desc} img={item.img} price={item.price} />
      </li>
      )});

      return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <ul id="booklist"> 
          {booklist}
        </ul>
      </div>
      );
      
    }

    // return ( 
    //   <ul className="booklist">
    //     {booklist}
    //   </ul>
}



export default BookList;