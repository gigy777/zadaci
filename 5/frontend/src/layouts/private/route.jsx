import EditContact from "./edit-contact";
import AddContact from "./add-contact";
import Contacts from "./contacts";

export default {
  EditContact: {
    component: EditContact,
    path: "/edit-contact/:id"
  },
  AddContact: {
    component: AddContact,
    path: "/add-contact"
  },
  Contacts: {
    component: Contacts,
    path: "/"
  }
};
