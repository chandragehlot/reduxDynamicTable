import React from 'react';
import TableRow from './tablerow';

export default ({items}) => {
    let rows = []

    items.map((item,index) => {
            rows.push(<TableRow fooditem={item} key={index}/>)
    })
   
    return (
        <table>
            <thead>
            <tr>
                <th>Food Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}