import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './Components/Shelves';
import SearchBooks from './Components/Search';
import Header from './Components/Header';
import SearchButton from './Components/SearchButton';
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    showSearchPage: false
  }
  updateSearchPageState = state =>
  {
    this.setState({showSearchPage: state})
  };
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books: books})
    })
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks showSearchPage={this.updateSearchPageState}/>
        ) : (
          
          <div className="list-books">
            {/* //header.js */}
            <Header />
           <Shelves library={this.state.books}/>
            {/* search button */}
            <SearchButton showSearchButton={this.updateSearchPageState}/>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
