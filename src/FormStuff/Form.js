import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      age: "",
      email: "",
      password: "",
      confirmedPassword: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  printAll() {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.phone);
    console.log(this.state.age);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.confirmedPassword);
  }

  checkPass() {
    let passing = true;

    if (this.props.password !== this.props.confirmedPassword) {
      passing = false;
      alert("Passwords do not match");
    } else {
      passing = true;
    }
    return passing;
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if (this.checkPass()) {
      this.printAll();
      event.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="firstName"
          placeholder="first name"
          required
          onChange={this.handleChange}
        />
        <input
          name="lastName"
          placeholder="last name"
          required
          onChange={this.handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="email@email.com"
          required
          onChange={this.handleChange}
        />
        <input
          name="phone"
          type="tel"
          placeholder="555-555-5555"
          required
          onChange={this.handleChange}
        />
        <input
          name="age"
          type="number"
          placeholder="age"
          min="1"
          required
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="enter password"
          required
          onChange={this.handleChange}
        />
        <input
          name="confirmedPassword"
          type="password"
          placeholder="confirm password"
          required
          onChange={this.handleChange}
        />
        <button type="submit" value="register" />
      </form>
    );
  }
}

export default Form;
