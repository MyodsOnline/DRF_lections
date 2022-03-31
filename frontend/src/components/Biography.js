import React from 'react'


const BiographyItem = ({biography}) => {
    return (
        <tr className="table_tr">
            <td>{biography.id}</td>
            <td>{biography.text}</td>
            <td>{biography.author.name}</td>
        </tr>
    )
}

const BiographyList = ({biographies}) => {
    return (
        <table>
            <tr>
                <th>id</th>
                <th>biography_text</th>
                <th>author_name</th>
            </tr>
            {biographies.map((biography) => <BiographyItem key={biography.id} biography={biography} />)}
        </table>
    )
}

export default BiographyList