import React from 'react'
import { useParams } from 'react-router-dom'


const AuthorBiographyItem = ({biography}) => {
    return (
        <tr class="table_tr" align="center">
            <td>{biography.id}</td>
            <td>{biography.text}</td>
            <td>{biography.author.name}</td>
        </tr> )
}

const AuthorBiographyList = ({biographies}) => {
    let { id } = useParams();
    let filtered_biographies = biographies.filter((biography) => biography.author.id == id)

    if (filtered_biographies == 0) {
        return (
            <h2>Author has no biography</h2>
        )
    } else {
        return (
            <table>
                <caption>Author biographies</caption>
                <tr>
                    <th>ID</th>
                    <th>Text</th>
                    <th>AUTHOR</th>
                </tr>
                {filtered_biographies.map((biography) => <AuthorBiographyItem biography={biography} />)}
            </table>
        )
    }
}

export default AuthorBiographyList