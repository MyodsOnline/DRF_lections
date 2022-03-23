import React from 'react'
import { useParams } from 'react-router-dom'


const AuthorArticleItem = ({article}) => {
    return (
        <tr class="table_tr" align="center">
            <td>{article.id}</td>
            <td>{article.name}</td>
            <td>{article.author.name}</td>
        </tr> )
}

const AuthorArticleList = ({articles}) => {
    let { id } = useParams();
    let filtered_articles = articles.filter((article) => article.author.id == id)

    if (filtered_articles == 0) {
        return (
            <h2>Author has no articles</h2>
        )
    } else {
        return (
            <table>
                <caption>Author articles</caption>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AUTHOR</th>
                </tr>
                {filtered_articles.map((article) => <AuthorArticleItem article={article} />)}
            </table>
        )
    }

}

export default AuthorArticleList