import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as _ from "lodash";

import PrivateLayout from "./private";
import PublicLayout from "./public";

import privateRoutes from "./private/route";
import publicRoutes from "./public/route";

import { isAuthenticated } from "../services/utils.service";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {_.map(publicRoutes, (route, key) => {
            const { component, path } = route;
            return (
              <Route
                exact
                path={path}
                key={key}
                render={route => (
                  <PublicLayout component={component} route={route} />
                )}
              />
            );
          })}
          {_.map(privateRoutes, (route, key) => {
            const { component, path } = route;
            return (
              <Route
                exact
                path={path}
                key={key}
                render={route =>
                  isAuthenticated() ? (
                    <PrivateLayout component={component} route={route} />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Layout;
