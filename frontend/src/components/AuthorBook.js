import React from 'react'
import { useParams } from 'react-router-dom'


const AuthorBookItem = ({book}) => {
    return (
        <tr class="table_tr" align="center">
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.author.name}</td>
        </tr> )
}

const AuthorBookList = ({books}) => {
    let { id } = useParams();
    let filtered_books = books.filter((book) => book.author.id == id)

    if (filtered_books == 0) {
            <h2>Author has no books</h2>
    } else {
        return (
            <table>
                <caption>Author books</caption>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AUTHOR</th>
                </tr>
                {filtered_books.map((book) => <AuthorBookItem book={book} />)}
            </table>
        )
    }
}

export default AuthorBookList