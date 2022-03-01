import React from 'react'


const BookItem = ({book}) => {
   return (
       <tr class="table_tr">
           <td>
               {book.name}
           </td>
           <td>
               {book.authors}
           </td>
       </tr>
   )
}

const BookList = ({books}) => {
   return (
       <table>
           <th>
               Name
           </th>
           <th>
               Authors
           </th>
           {books.map((book) => <BookItem book={book} />)}
       </table>
   )
}

export default BookList