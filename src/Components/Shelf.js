import React from 'react';

class Shelf extends React.Component{
    render(){
        const BooksInShelf=this.props.Books;
        return(
              <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.categories}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {BooksInShelf.map(book => (
                         <li key={book.id}>
                         <div className="book">
                           <div className="book-top">
                             <div className="book-cover" 
                              style={{ 
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url("${book.imageLinks.thumbnail}")` 
                               }}>

                              </div>
                             <div className="book-shelf-changer">
                               <select value={book.shelf} onChange={event => this.props.onShelfChange(book, event.target.value)}>
                                 <option value="move" disabled>Move to...</option>
                                 <option value="currentlyReading">Currently Reading</option>
                                 <option value="wantToRead">Want to Read</option>
                                 <option value="read">Read</option>
                                 <option value="none">None</option>
                               </select>
                             </div>
                           </div>
                           <div className="book-title">{book.title}</div>
                           <div className="book-authors">{book.authors}</div>
                         </div>
                       </li>
        ))}

                  </ol>
                </div>
              </div>

        )
    }

}
export default Shelf