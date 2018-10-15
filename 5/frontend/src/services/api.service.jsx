import axios from "axios";
import store from "../store";

class Api {
  constructor() {
    this.api_url = "http://localhost:8080";
  }
  doGetOne(route, id) {
    return new Promise((resolve, reject) => {
      axios
        .get(this.api_url + route + "/" + id, this.jwt())
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
  doGet(route, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(this.api_url + route, { params: params }, this.jwt())
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }

  doPost(route, body) {
    return new Promise((resolve, reject) => {
      axios
        .post(this.api_url + route, body)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }

  doPut(route, body, id) {
    return new Promise((resolve, reject) => {
      axios
        .put(this.api_url + route + "/" + id, body, this.jwt())
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }

  doDelete(route, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(this.api_url + route + "/" + id, this.jwt())
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }

  jwt() {
    let header = {};
    header["Authorization"] = store.getState().auth.token;
    axios.defaults.headers.common["Authorization"] = store.getState().auth.token
      ? store.getState().auth.token
      : localStorage.getItem("token");
  }
}

export default new Api();
