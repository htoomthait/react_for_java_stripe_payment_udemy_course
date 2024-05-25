import React from 'react'
import ToDoRowItem from './ToDoRowItem';


const TodoTable = (prop) => {
  const todos = prop.todos;

    
  return (
    <>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo, index) => {
                return <ToDoRowItem todo={todo} key={todo.rowNumber} index={index} />
              })
            }
          </tbody>
        </table>
    </>
  )
}

export default TodoTable;