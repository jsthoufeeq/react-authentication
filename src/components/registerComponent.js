import React from 'react';
import { connect } from 'react-redux';
import { signUp } from './../actions';

class RegisterComponent extends React.Component {
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

  handleRegister = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.props.signUp(this.state.fields);
      this.props.history.push('/dashboard');
    }
  }

  validateForm = () => {
    let fields = this.state.fields;
    let isValid = true;
    let errors = {};

    if (!fields['username']) {
      isValid = false;
      errors['username'] = 'Please enter your name';
    }

    if (fields['username'] && !fields['username'].match(/^[a-zA-Z ]*$/)) {
      isValid = false;
      errors['username'] = 'Please enter name in a proper format';
    }

    if (!fields['password']) {
      isValid = false;
      errors['password'] = 'Please enter your password';
    }

    if (fields['password'] && (fields['password'].length < 8)) {
      isValid = false;
      errors['password'] = 'Password length must be of atleast 8 characters';
    }

    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (fields.email === '' || !emailPattern.test(fields.email)) {
      isValid = false;
      errors['email'] = 'Please enter your email in a proper format';
    }

    if (!fields['firstname']) {
      isValid = false;
      errors['firstname'] = 'Please enter your first name';
    }

    if (fields['firstname'] && !fields['firstname'].match(/^[a-zA-Z ]*$/)) {
      isValid = false;
      errors['firstname'] = 'Please enter first name in a proper format';
    }

    if (!fields['lastname']) {
      isValid = false;
      errors['lastname'] = 'Please enter your last name';
    }

    if (fields['lastname'] && !fields['lastname'].match(/^[a-zA-Z ]*$/)) {
      isValid = false;
      errors['lastname'] = 'Please enter name in a proper format';
    }

    if (!fields['country'] || (fields['country'] && fields['country'] === '')) {
      isValid = false;
      errors['country'] = 'Please select your country';
    }

    if (!fields['gender']) {
      isValid = false;
      errors['gender'] = 'Please select gender';
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
          <div className="form-group row  mt-5">
            <label htmlFor="username" className="col-sm-2 col-md-1 col-form-label">Username</label>
            <div className="col-sm-10 col-md-3">
              <input type="text" name="username" value={this.state.fields.username}
                className="form-control" id="username" onChange={this.handleChange} />
              <span className="text-danger">{this.state.errors.username}</span>
            </div>
          </div>
          <div className="form-group row mt-3">
            <label htmlFor="password" className="col-sm-2 col-md-1 col-form-label">Password</label>
            <div className="col-sm-10 col-md-3">
              <input type="password" name="password" value={this.state.fields.password}
                className="form-control" id="password" onChange={this.handleChange} />
              <span className="text-danger">{this.state.errors.password}</span>
            </div>
          </div>
          <div className="form-group row mt-3">
            <label htmlFor="email" className="col-sm-2 col-md-1 col-form-label">Email</label>
            <div className="col-sm-10 col-md-3">
              <input type="text" name="email" value={this.state.fields.email}
                className="form-control" id="email" onChange={this.handleChange} />
              <span className="text-danger">{this.state.errors.email}</span>
            </div>
          </div>
          <div className="form-group row mt-3">
            <label htmlFor="firstname" className="col-sm-2 col-md-1 col-form-label">Firstname</label>
            <div className="col-sm-10 col-md-3">
              <input type="text" name="firstname" value={this.state.fields.firstname}
                className="form-control" id="firstname" onChange={this.handleChange} />
              <span className="text-danger">{this.state.errors.firstname}</span>
            </div>
          </div>
          <div className="form-group row mt-3">
            <label htmlFor="lastname" className="col-sm-2 col-md-1 col-form-label">Lastname</label>
            <div className="col-sm-10 col-md-3">
              <input type="text" name="lastname" value={this.state.fields.lastname}
                className="form-control" id="lastname" onChange={this.handleChange} />
              <span className="text-danger">{this.state.errors.lastname}</span>
            </div>
          </div>
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-md-1 col-form-label">Gender</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" checked={this.state.fields.gender === 'male'}
                onChange={this.handleChange} type="radio" name="gender" id="male" defaultValue="male" />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" checked={this.state.fields.gender === 'female'}
                onChange={this.handleChange} type="radio" name="gender" id="female" defaultValue="female" />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" checked={this.state.fields.gender === 'other'}
                onChange={this.handleChange} type="radio" name="gender" id="other" defaultValue="other" />
              <label className="form-check-label" htmlFor="other">Other</label>
            </div>
            <span className="text-danger">{this.state.errors.gender}</span>
          </div>

          <div className="form-group row mt-3">
            <label htmlFor="country" className="col-sm-2 col-md-1 col-form-label">Country</label>
            <div className="col-sm-10 col-md-3">
              <select id="country" className="form-control" name="country" defaultValue={this.state.fields.selected} onChange={this.handleChange}>
                <option value="">Choose country</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="russia">Russia</option>
                <option value="china">China</option>
                <option value="other">Other</option>
              </select>
              <span className="text-danger">{this.state.errors.country}</span>
            </div>
          </div>
          <div>
            <button className="btn btn-success mb-5" onClick={this.handleRegister}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { signUp })(RegisterComponent);
