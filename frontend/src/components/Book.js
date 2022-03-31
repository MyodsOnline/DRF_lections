import React from 'react'


const BookItem = ({book}) => {
   return (
       <tr className="table_tr">
           <td>{book.id}</td>
           <td>{book.name}</td>
           <td>{book.author.name}</td>
       </tr>
   )
}

const BookList = ({books}) => {
   return (
       <table>
           <tr>
               <th>id</th>
               <th>Name</th>
               <th>Author</th>
           </tr>
           {books.map((book) => <BookItem key={book.id} book={book} />)}
       </table>
   )
}

export default BookList