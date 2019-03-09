import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
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
