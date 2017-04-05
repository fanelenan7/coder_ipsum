import React, { Component } from 'react'
import  {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Data from "../../../data.json"
import OptionsContainer from "../OptionsContainer/OptionsContainer.js"
import Output from "../Output/Output.js"
import './Home.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      snippets: Data,
      output: null,
      generated: false,
      inputNum: ""
    }
  }

  handleInput(e) {
    this.setState({
      inputNum: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let data = Data
    let lipsum = []
    for(let i=0; i < 50; i++) {
      lipsum.push(data[Math.floor(Math.random() * data.length)])
    }
    this.setState({
      output: lipsum.join(" "),
      generated: true
    })
  }

  printOutput() {
    return(
      <Output
        output={this.state.output}
      />
    )
  }

  render() {
    return (
      <Router>
        <div className="render">
          <nav>
            <h1><Link to="#">Coder_Ipsum</Link></h1>
            <Link to="/type=random">invoke</Link>
            <Link to="/">return</Link>
            <Link to="https://github.com/fanelenan7/coder_ipsum">github</Link>
          </nav>
          <main>
            <Route
              exact path="/"
              render={() => <OptionsContainer
                inputNum={this.state.inputNum}
                onFormInput={(e) => this.handleInput(e)}
                onFormSubmit={(e) => this.handleSubmit(e)}
              />}
            />
            <Route
              path="/type=random"
              render={() => <Output
                snippets={this.state.snippets}
              />}
            />
            <Route
              path="/*"
              render={() => {
                return <Redirect to="/" />
              }}
            />
          </main>
        </div>
      </Router>
    )
  }
}

export default Home;
