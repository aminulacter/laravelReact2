import React, { Component } from "react";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./Hoc/Layout/Layout";
class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }
    render() {
        return (
            <Layout>
                <BurgerBuilder />
            </Layout>
        );
    }
}

export default App;
