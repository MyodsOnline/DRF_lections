import React from 'react'


const ArticleItem = ({article}) => {
    return (
        <tr class="table_tr">
            <td>{article.id}</td>
            <td>{article.name}</td>
            <td>{article.author.name}</td>
        </tr>
    )
}

const ArticleList = ({articles}) => {
    return (
        <table>
            <tr>
                <th>id</th>
                <th>article_name</th>
                <th>author_name</th>
            </tr>
            {articles.map((article) => <ArticleItem article={article} />)}
        </table>
    )
}

export default ArticleList