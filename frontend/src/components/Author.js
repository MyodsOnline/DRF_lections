import React from 'react'
import {Link} from 'react-router-dom'


const AuthorItem = ({author}) => {
   return (
       <tr className="table_tr">
           <td>{author.id}</td>
           <td>{author.name}</td>
           <td>{author.birthday_year}</td>
           <td><Link to={`author/${author.id}`}>...</Link></td>
           <td><Link to={`authorbio/${author.id}`}>...</Link></td>
       </tr>
   )
}

const AuthorList = ({authors}) => {
   return (
       <table>
           <thead>
               <tr>
                   <th>id</th>
                   <th>Name</th>
                   <th>Birthday year</th>
                   <th>Author books & articles</th>
                   <th>Author biography</th>
               </tr>
           </thead>
           <tbody>
                {authors.map((author) => <AuthorItem key={author.id} author={author} />)}
           </tbody>
       </table>
   )
}

export default AuthorList