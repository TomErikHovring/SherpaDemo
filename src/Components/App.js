import React, { Component, Fragment } from "react";
import Header from "./Layouts/Header";
import Posts from "./Layouts/Posts";
import Post from "./Layouts/Post";
import Comments from "./Layouts/Comments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <Fragment key="root">
        <Router>
          <Header />
          <div className="App">
            <Switch>
              <Route path="/" exact component={Posts} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </div>
          <div>
            <Switch>
              <Route path="/post/:id" component={Comments} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}
