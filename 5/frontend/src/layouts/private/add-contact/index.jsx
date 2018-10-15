import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../../services/api.service";
import { setUserDataFromToken } from "../../../services/utils.service";
import { userFound } from "../../../reducers/auth/auth.action";

class AddContact extends Component {
  constructor(props) {
    super(props);
    let user = this.props.auth.user;
    if (user == null) {
      setUserDataFromToken(localStorage.getItem("token")).then(user => {
        this.props.userFound(user);
      });
    }
    this.state = {
      user_id: user.id,
      first_name: "",
      last_name: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  handleChange(event) {
    const add = event.target.name;
    this.setState({ [add]: event.target.value });
  }

  addContact() {
    api
      .doPost("/api/v1/contact", this.state)
      .then(res => {
        console.log(res);
        this.props.route.history.push("/");
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
                    onClick={this.addContact}
                    type="button"
                  >
                    ADD
                  </a>
                  <hr />
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
  { userFound }
)(AddContact);
