import { Todo } from "../DTOs/Todo";

interface ToDoRowItemProps {
  index : number,
  todo : Todo,
  deleteItem : Function
}

export  const ToDoRowItem : React.FC<ToDoRowItemProps> = (props ) => {
    // const rowNumber = 1;
    // const rowDescription =  "Feed dog";
    // const rowAssigned =  "Eric";

    const rowNumber = props.todo.rowNumber ;
    const rowDescription = props.todo.rowDescription ;
    const rowAssigned = props.todo.rowAssigned ;

    const deleteItem = (e : any) : void => {
      e.preventDefault();
      console.log(rowNumber);
      props.deleteItem(rowNumber);
    }

  return (
    <tr>
        <th scope="row">{props.index + 1}</th>
        <td> {rowDescription}</td>
        <td> {rowAssigned}</td>
        <td> 
          <button type="button" className="btn btn-danger" onClick={deleteItem}>Delete Item</button>
        </td>
    </tr>
  )
}

