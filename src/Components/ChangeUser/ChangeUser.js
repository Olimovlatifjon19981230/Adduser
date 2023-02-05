import React, { Component } from "react";

export default class ChangeUser extends Component {
  state = {
    newName: this.props.data[this.props.activeChangeUserIndex].name,
    newLastName: this.props.data[this.props.activeChangeUserIndex].lastname,
    newAge: this.props.data[this.props.activeChangeUserIndex].age,
    newEmail: this.props.data[this.props.activeChangeUserIndex].email,
  };
  nameChanged = (e) => {
    // console.log(e.target.value);
    this.setState({
      newName: e.target.value,
    });
  };
  lastNameChanged = (e) => {
    // console.log(e.target.value);
    this.setState({
      newLastName: e.target.value,
    });
  };
  ageChanged = (e) => {
    // console.log(e.target.value);
    this.setState({
      newAge: e.target.value
    });
  };
  emailChanged = (e) => {
    // console.log(e.target.value);
    this.setState({
      newEmail: e.target.value,
    });
  };
  saveUser = () => {
    let { newAge, newEmail, newName, newLastName } = this.state;
    let newdata = this.props.data;
    let activeChangeUserIndex = this.props.activeChangeUserIndex
    let obj = {
        name: newName,
        lastname: newLastName,
        age: newAge,
        email: newEmail,
      }
    newdata.splice(activeChangeUserIndex, 1, obj);
    console.log(newdata);
    this.props.krakFunc(newdata)
    this.props.closeSaveUser()
  };
  render() {
    const { data, activeChangeUserIndex } = this.props;
    // console.log(activeChangeUserIndex);
    return (
      <div>
        <form action="">
          <input
            onChange={this.nameChanged}
            type="text"
            defaultValue={data[activeChangeUserIndex].name}
            placeholder="Name"
          />
          <input
            onChange={this.lastNameChanged}
            type="text"
            defaultValue={data[activeChangeUserIndex].lastname}
            placeholder="Last Name"
          />
          <input
            onChange={this.ageChanged}
            type="text"
            defaultValue={data[activeChangeUserIndex].age}
            placeholder="Age"
          />
          <input
            onChange={this.emailChanged}
            type="text"
            defaultValue={data[activeChangeUserIndex].email}
            placeholder="Email"
          />
        </form>
        <button onClick={this.saveUser}>Save User</button>
      </div>
    );
  }
}
