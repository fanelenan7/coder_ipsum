import React, { Component } from 'react'
import  {
  BrowserRouter as Router,
  Route,
  Link
  // Redirect
} from "react-router-dom"
import OptionsContainer from "../OptionsContainer/OptionsContainer.js"
import Output from "../Output/Output.js"

import './Home.css'

class Home extends Component {
  render() {
    return (
      <Router>
        <div className="render">
          <nav>
            <h1><Link to="#">Coder_Ipsum</Link></h1>
            <Link to="#">invoke</Link>
            <Link to="#">return</Link>
            <Link to="#">github</Link>
          </nav>
          <main>
            <Route
              exact path="/"
              render={() => <OptionsContainer

              />}
            />
            <Route
              path="/type=random"
              render={() => <Output

              />}
            />
          </main>
        </div>
      </Router>
    )
  }
}

export default Home;
