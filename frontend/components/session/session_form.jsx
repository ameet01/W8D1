import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state));
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  render() {
    var header;
    var link;
    if(this.props.formType === 'login') {
      header = 'Log In';
      link = <Link to='/signup'>Sign Up</Link>
    } else {
      header = 'Sign Up'
      link = <Link to='/login'>Log In</Link>
    }


    return (
      <div>
        <h2>{header}</h2>
        {link}
        <ul>{this.props.errors.map(error => <li>{error}</li>)}</ul>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type='text' value={this.state.username} onChange={this.update('username')} />
          </label>

          <label>Password
            <input type='text' value={this.state.password} onChange={this.update('password')} />
          </label>

          <button type='Submit' value='Submit'></button>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
