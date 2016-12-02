import React from 'react';

export default ({fooditem}) => {
	return(
		<tr>
			<td>{fooditem.foodname}</td>
			<td>{fooditem.price}</td>
		</tr>
	)	
}