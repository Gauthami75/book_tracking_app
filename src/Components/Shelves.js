import React from "react";
import Shelf from './Shelf'; 
class Shelves extends React.Component{

    render(){
      const BooksInShelf=this.props.library;
      const CurrentlyReading= BooksInShelf.filter(book => book.shelf === 'currentlyReading');
      const WantToRead = BooksInShelf.filter(book=> book.shelf==='wantToRead');
      const Read = BooksInShelf.filter(book=> book.shelf === 'read');
      const onShelfChange = this.props.onShelfChange;
      //console.log(BooksInShelf);
        return(
          <div className="list-books-content">
            <div>
              <Shelf Books={CurrentlyReading} categories="Currently Reading" onShelfChange = {this.props.onShelfChange}/>,
              <Shelf Books={WantToRead} categories="Want to Read" onShelfChange = {this.props.onShelfChange}/>,
              <Shelf Books={Read} categories="Read" onShelfChange = {this.props.onShelfChange}/>
          </div>
          </div>
        )
    }
}
export default Shelves