import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../../services/api.service";
import { setUserDataFromToken } from "../../../services/utils.service";
import {
  loadingUser,
  userFound,
  loadUserError,
  setToken
} from "../../../reducers/auth/auth.action";

const mapStateToProps = state => ({
  specificProperty: state.specificProperty
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    const _name = event.target.name;
    this.setState({ [_name]: event.target.value });
  }

  login() {
    this.props.loadingUser();

    api
      .doPost("/api/v1/auth/login", this.state)
      .then(r => {
        this.props.setToken(r.data.token);
        setUserDataFromToken(r.data.token).then(user => {
          this.props.userFound(user);
          console.log(localStorage.getItem("token"));
          this.props.route.history.push("/");
        });
      })
      .catch(err => {
        this.props.loadUserError();
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
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>

                  <a
                    className="material-btn-square material-btn-primary btn-lg btn-block mb-3"
                    onClick={this.login}
                    type="button"
                  >
                    Login
                  </a>
                  <hr />
                  <p className="text-center mb-0">
                    Don’t have an account?{" "}
                    <strong>
                      <Link to="/register">Sign up</Link>
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

export default connect(
  state => ({ auth: state.auth }),
  { setToken, userFound, loadingUser, loadUserError }
)(Login);
