import React from 'react';
import {withRouter} from 'react-router';

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
    let header;
    let link;
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

          <label>Username
            <input type='password' value={this.state.password} onChange={this.update('password')} />
          </label>

          <button></button>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
