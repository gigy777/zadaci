import React, { Component } from "react";
import { connect } from "react-redux";
import { setUserDataFromToken } from "../../services/utils.service";
import { userFound } from "../../reducers/auth/auth.action";

class PrivateLayout extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    localStorage.removeItem("token");
    this.props.route.history.push("/login");
  }

  render() {
    const Component = this.props.component;
    const route = this.props.route;
    let user = this.props.auth.user;
    if (user == null) {
      setUserDataFromToken(localStorage.getItem("token")).then(user => {
        this.props.userFound(user);
      });
    }
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          Welcome {user != null ? user.first_name : null}
          <button onClick={this.signOut}>Sign Out</button>
        </nav>
        <Component route={route} />
      </div>
    );
  }
}

export default connect(
  state => ({ auth: state.auth }),
  { userFound }
)(PrivateLayout);
