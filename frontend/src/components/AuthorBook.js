import React from 'react'
import { useParams } from 'react-router-dom'


const BookItem = ({book}) => {
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.author.name}</td>
        </tr> )
}

const BookList = ({books}) => {
    let { id } = useParams();
    let filtered_books = books.filter((book) => book.author.id == id)
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AUTHOR</th>
            </tr>
            {filtered_books.map((book) => <BookItem book={book} />)}
        </table>
) }
export default BookList