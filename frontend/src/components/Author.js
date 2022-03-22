import React from 'react'


const AuthorItem = ({author}) => {
   return (
       <tr class="table_tr">
           <td>{author.id}</td>
           <td>{author.name}</td>
           <td>{author.birthday_year}</td>
       </tr>
   )
}

const AuthorList = ({authors}) => {
   return (
       <table>
           <tr>
               <th>id</th>
               <th>Name</th>
               <th>Birthday year</th>
           </tr>
           {authors.map((author) => <AuthorItem author={author} />)}
       </table>
   )
}

export default AuthorList