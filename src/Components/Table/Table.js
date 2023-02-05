import React, { Component } from "react";

export default class Table extends Component {
  render() {
    const { data, editUserActive } = this.props;
    return (
      <div>
        <table border={1} width={"80%"}>
          <thead>
            <th>N</th>
            <th>Name</th>
            <th>LastName</th>
            <th>age</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={()=>editUserActive(index)}>edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
