import React from 'react';
// import App from './App';


class Search extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: [],
  //   }


  //
//  handleSearchResults = () => {
    

//  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSearch}>
        <label htmlFor="search"></label>
        <input name="search" id="search" type="text"></input>

        <label>Book Type</label>
        <select name="bookType" id="bookType">
          <option value="">--Please choose an option--</option>
          <option value="ebooks">All Google eBooks</option>
          <option value="free-ebooks">Full free ebook</option>
          <option value="full">Full availability</option>
          <option value="paid-ebooks">ebooks for purchase</option>
          <option value="partial">Partially available</option>
        </select>

        <label>Print Type</label>
        <select name="printType" id="printType">
          <option value="">--Please choose an option--</option>
          <option value="all">All content types</option>
          <option value="books">Just books</option>
          <option value="magazines">Just magazines</option>
        </select>
        <button type="submit">Search</button>

        </form>

        
      </div>
    )
  }

}







export default Search;