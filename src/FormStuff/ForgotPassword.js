import React from "react";
import Email from './Email';

class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    event.preventDefault();
    console.log(this.state.email);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Email
                emailProp={this.props.email}
                myFunc={this.handleChange}
        />
        {/* <input
          name="email"
          type="email"
          placeholder="email@email.com"
          required
          onChange={this.handleChange}
        /> */}
        <button type="submit" />
      </form>
    );
  }
}

export default Forgot;
