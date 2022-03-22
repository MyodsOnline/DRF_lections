import React from 'react';
import AuthorList from './components/Author.js';
import BookList from './components/Book.js';


class App extends React.Component {

   constructor(props) {
       super(props)

       const author1 = {id:1, name: 'Green', birthday_year: 1666}
       const author2 = {id:2, name: 'Pushka', birthday_year: 1999}
       const authors = [author1, author2]

       const book1 = {id:1, name: 'Green Book', author: author1}
       const book2 = {id:2, name: 'Pushka Book', author: author2}
       const book3 = {id:3, name: 'Second Pushka Book', author: author2}
       const books = [book1, book2, book3]

       this.state = {
           'authors': authors,
           'books': books,
       }
   }

   render () {
        return (
            <div className="App">
                <AuthorList authors={this.state.authors} />
                <BookList books={this.state.books} />
            </div>
        )
   }
}


export default App;
