import React, { Component } from "react";
import ContactList from "../../../components/contact-list";
import api from "../../../services/api.service";
import { Link } from "react-router-dom";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };

    this.getContacts = this.getContacts.bind(this);
    this.deleteContact = this.deleteContact.bind(this);

    this.getContacts();
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Phone</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <ContactList
              contacts={this.state.contacts ? this.state.contacts : []}
              deleteContact={this.deleteContact}
            />
          </tbody>
        </table>
        <button className="button my-button">
          <Link to="/add-contact">+</Link>
        </button>
      </div>
    );
  }

  getContacts() {
    api
      .doGet("/api/v1/contact")
      .then(res => {
        console.log(res);
        this.setState({ contacts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteContact(event) {
    var r = window.confirm("Are you sure you want to delete it?");
    if (r == true) {
      console.log(event.target.getAttribute("name"));
      api
        .doDelete("/api/v1/contact", event.target.getAttribute("name"))
        .then(res => {
          console.log(res);
          this.getContacts();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("close");
    }
  }
}
