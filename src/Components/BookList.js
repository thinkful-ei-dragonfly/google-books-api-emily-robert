import React from 'react';
import Book from './Book';
import Search from './Search';


class BookList extends React.Component {

  state = {
    books: [],
    api: 'AIzaSyDPDcM6VZ7IIVHFx_IAPnan9jiRBexSNcI',
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=trees&key={this.state.api}`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const books = data.items.map(item => {
          const title = this.item.volumeInfo.title;
          //authors is an array of strings
          const authors = this.item.volumeInfo.authors;
          const desc = this.item.volumeInfo.description;
          const img = this.item.volumeInfo.imageLinks.thumbnail;
        })
      })

  }



  render() {

    const booklist = this.state.books.map(item => )
    return(
      <div className="booklist">
        

      </div>

    )




}
}


export default BookList;