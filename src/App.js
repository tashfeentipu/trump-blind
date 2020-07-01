import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Cards from "./containers/cards/cards";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Route path="/" component={Cards}></Route>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
