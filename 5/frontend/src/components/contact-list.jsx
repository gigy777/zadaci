import React, { Component } from "react";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, deleteContact }) => {
  return contacts.map((contact, index) => (
    <tr key={contact.id}>
      <th scope="row">{index + 1}</th>
      <td>{contact.first_name}</td>
      <td>{contact.last_name}</td>
      <td>{contact.phone}</td>
      <td className="pointer">
        <Link to={`/edit-contact/${contact.id}`}>
          <button className="btn btn-primary">edit</button>
        </Link>
      </td>
      <td className="pointer">
        <button
          name={contact.id}
          className="btn btn-danger"
          onClick={deleteContact}
        >
          delete
        </button>
      </td>
    </tr>
  ));
};

export default ContactList;
