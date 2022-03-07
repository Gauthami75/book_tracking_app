import React from "react";
import Shelf from './Shelf'; 
class Shelves extends React.Component{

    render(){
      const BooksInShelf=this.props.library;
      const CurrentlyReading= BooksInShelf.filter(book => book.shelf === 'curentlyReading');
      const WantToRead = BooksInShelf.filter(book=> book.shelf==='wantToRead');
      const Read = BooksInShelf.filter(book=> book.shelf === 'read');
      console.log(BooksInShelf);
        return(
          <Shelf Books={CurrentlyReading}/>,
          <Shelf Books={WantToRead}/>,
          <Shelf Books={Read}/>

        )
    }
}
export default Shelves