import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../../services/api.service";
import { setUserDataFromToken } from "../../../services/utils.service";
import { userFound } from "../../../reducers/auth/auth.action";

class EditContact extends Component {
  constructor(props) {
    super(props);

    let user = this.props.auth.user;
    if (user == null) {
      setUserDataFromToken(localStorage.getItem("token")).then(user => {
        this.props.userFound(user);
      });
    }

    this.state = {
      id: "",
      user_id: "",
      first_name: "",
      last_name: "",
      phone: ""
    };

    api
      .doGetOne("/api/v1/contact", this.props.route.match.params.id)
      .then(res => {
        this.setState({
          id: res.data[0].id,
          user_id: res.data[0].user_id,
          first_name: res.data[0].first_name,
          last_name: res.data[0].last_name,
          phone: res.data[0].phone
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.handleChange = this.handleChange.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  handleChange(event) {
    const add = event.target.name;
    this.setState({ [add]: event.target.value });
  }

  editContact() {
    api
      .doPut("/api/v1/contact", this.state, this.props.route.match.params.id)
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
                    onClick={this.editContact}
                    type="button"
                  >
                    UPDATE
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
    // console.log(nextProps);
    if (nextProps.specificProperty !== this.props.specificProperty) {
    }
  }
}

export default connect(
  state => ({ auth: state.auth }),
  { userFound }
)(EditContact);
