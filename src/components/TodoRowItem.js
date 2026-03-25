function TodoRowItem(){

    const rowNumber = 1;
    const rowDescription = 'Feed dog';
    const rowsAssigned = 'Eric';

    return(
        <tr>
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowsAssigned}</td>
        </tr>

    )
}

export default TodoRowItem