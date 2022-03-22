import React from 'react'


const AuthorItem = ({author}) => {
   return (
       <tr class="table_tr">
           <td>{author.firstName}</td>
           <td>{author.lastName}</td>
           <td>{author.birthdayYear}</td>
       </tr>
   )
}

const AuthorList = ({authors}) => {
   return (
       <table>
           <tr>
               <th>First name</th>
               <th>Last Name</th>
               <th>Birthday year</th>
           </tr>
           {authors.map((author) => <AuthorItem author={author} />)}
       </table>
   )
}

export default AuthorList