import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api.service";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(event) {
    const _name = event.target.name;
    this.setState({ [_name]: event.target.value });
  }

  register() {
    api
      .doPost("/api/v1/auth/register", this.state)
      .then(res => {
        console.log(res);
        this.props.route.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="welcome">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-6 col-lg-5">
              <div className="mainbox">
                <form>
                  <div className="form-group">
                    <input
                      name="user_name"
                      type="email"
                      value={this.state.user_name}
                      onChange={this.handleChange}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="form-control"
                      id="exampleInputPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="first_name"
                      type="text"
                      value={this.state.first_name}
                      onChange={this.handleChange}
                      className="form-control"
                      id="exampleFirstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="last_name"
                      type="text"
                      value={this.state.last_name}
                      onChange={this.handleChange}
                      className="form-control"
                      id="exampleLastName"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="phone"
                      type="text"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      className="form-control"
                      id="examplePhone"
                      placeholder="Phone"
                    />
                  </div>
                  <a
                    className="material-btn-square material-btn-primary btn-lg btn-block mb-3"
                    onClick={this.register}
                    type="button"
                  >
                    Sign Up
                  </a>
                  <hr />
                  <p className="text-center mb-0">
                    Have an account?{" "}
                    <strong>
                      <Link to="/login">Log In</Link>
                    </strong>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillUpdate(nextProps) {
    if (nextProps.specificProperty !== this.props.specificProperty) {
    }
  }
}
