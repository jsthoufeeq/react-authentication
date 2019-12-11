import React from 'react';
import { connect } from 'react-redux';
import { signIn } from './../actions';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleChange = (e) => {
    let formField = this.state.fields;
    formField[e.target.name] = e.target.value;
    this.setState({
      fields: formField
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.props.signIn(this.state.fields);
      this.props.history.push('/dashboard');
    }
  }

  validateForm = () => {
    let fields = this.state.fields;
    let isValid = true;
    let errors = {};

    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (fields.email === '' || !emailPattern.test(fields.email)) {
      isValid = false;
      errors['email'] = 'Please enter your email in a proper format';
    }

    if (!fields['password']) {
      isValid = false;
      errors['password'] = 'Please enter your password';
    }

    if (fields['password'] && (fields['password'].length < 8)) {
      isValid = false;
      errors['password'] = 'Password length must be of atleast 8 characters';
    }

    this.setState({
      errors: errors
    })

    return isValid;
  }

  render() {
    return (
      <div className="row">
        <form className="col">
          <div className="form-group row mt-5">
            <label htmlFor="email" className="col-sm-2 col-md-1 col-form-label">Email</label>
            <div className="col-sm-10 col-md-3">
              <input type="text" name="email" value={this.state.fields.email}
                className="form-control" id="email" onChange={this.handleChange} />
              <span className="text-danger">{this.state.errors.email}</span>
            </div>
          </div>
          <div className="form-group row  mt-5">
            <label htmlFor="password" className="col-sm-2 col-md-1 col-form-label">Password</label>
            <div className="col-sm-10 col-md-3">
              <input type="text" name="password" value={this.state.fields.password}
                className="form-control" id="password" onChange={this.handleChange} />
              <span className="text-danger">{this.state.errors.password}</span>
            </div>
          </div>
          <div>
            <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { signIn })(LoginComponent);
