import React, { Component } from "react";
import AddUser from "./Components/AddUser/AddUser";
import ChangeUser from "./Components/ChangeUser/ChangeUser";
import Table from "./Components/Table/Table";

class App extends Component {
  state = {
    addForm: false,
    data: [
      {
        name: "dilshod",
        lastname: "murtazoyev",
        age: 22,
        email: "dilshod.me@gmail.com",
      },
      {
        name: "dilshod",
        lastname: "murtazoyev",
        age: 21,
        email: "dilshod.me@gmail.com",
      },
      {
        name: "dilshod",
        lastname: "murtazoyev",
        age: 20,
        email: "dilshod.me@gmail.com",
      },
      {
        name: "dilshod",
        lastname: "murtazoyev",
        age: 19,
        email: "dilshod.me@gmail.com",
      },
      {
        name: "dilshod",
        lastname: "murtazoyev",
        age: 18,
        email: "dilshod.me@gmail.com",
      },
      {
        name: "dilshod",
        lastname: "murtazoyev",
        age: 17,
        email: "dilshod.me@gmail.com",
      },
      {
        name: "dilshod",
        lastname: "murtazoyev",
        age: 16,
        email: "dilshod.me@gmail.com",
      },
    ],
    editUser: false,
    activeChangeUserIndex: 0,
  };
  krakFunc = (newdata)=>{
    this.setState({
      data: newdata
    })
  }
  activAddForm = () => {
    this.setState({
      addForm: !this.state.addForm,
    });
  };
  editUserActive = (index) => {
    this.setState({
      editUser: true,
      activeChangeUserIndex: index
    });
  };
  closeSaveUser = ()=>{
    this.setState({
      editUser: false,
    });
  }
  render() {
    return (
      <div>
        {this.state.addForm ? (
          <button onClick={this.activAddForm}>Close</button>
        ) : (
          <button onClick={this.activAddForm}>AddUser</button>
        )}

        <br />
        <br />
        <br />

        {this.state.addForm ? <AddUser /> : ""}
        <br />
        <npm br />
        <br />
        <Table data={this.state.data} editUserActive={this.editUserActive} />
        {this.state.editUser ? (
          <ChangeUser
            activeChangeUserIndex={this.state.activeChangeUserIndex}
            data={this.state.data}
            krakFunc={this.krakFunc}
            closeSaveUser={this.closeSaveUser}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
