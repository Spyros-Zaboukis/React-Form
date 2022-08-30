import { Component } from "react";

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }


  const TableBody = (props) => {
    const myDataDisplay = props.characterData.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
      )
    })
  
    return <tbody>{myDataDisplay}</tbody>
  }


  const Table = (props) => {
    const { characterData, removeCharacter } = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
  
  export default Table;