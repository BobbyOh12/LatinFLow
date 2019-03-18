import React from 'react';

const UserRow = props => {
    return (
        <tr>
            <th>{props.id}</th>
            <td>{props.firstName}</td>
            <td>{props.middleInitial}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.createdDate}</td>
            <td>{props.modifiedDate}</td>
            <td>{props.modifiedBy}</td>
            <td><button type="button" id={props.id} onClick={props.onEditClick}>Edit</button></td>
            <td><button type="button" id={props.id} onClick={props.onDeleteClick}>Delete</button></td>
        </tr>
    )
}

export default UserRow