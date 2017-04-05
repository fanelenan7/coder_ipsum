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
    // e.preventDefault()
    let data = Data.map((text) => {
      return text.body
    })
    let lipsum = []
    for(let i=0; i < 50; i++) {
      lipsum.push(data[Math.floor(Math.random() * data.length)])
    }
    console.log(lipsum);
    this.setState({
      output: lipsum.join(" "),
      generated: true
    })
  }

  printOutput() {
    let i = 0
    for(i = 0; i < this.state.inputNum; i++){
      return(
        <Output
          output={this.state.output}
          onFormSubmit={() => this.handleSubmit()}
        />
      )
    }
  }

  render() {
    return (
      <Router>
        <div className="render">
          <nav>
            <h1><Link to="/home">Coder_Ipsum</Link></h1>
            <Link to="/home">return</Link>
            <Link to="https://github.com/fanelenan7/coder_ipsum">github</Link>
          </nav>
          <main>
            <Route
              path="/home"
              render={() => <OptionsContainer
                inputNum={this.state.inputNum}
                onFormInput={(e) => this.handleInput(e)}
              />
          // }
            }
              />
            <Route
              path="/type=random"
              render={() => this.printOutput()}
            />
            <Route
              path="/*"
              render={() => {
                return <Redirect to="/home" />
              }}
            />
          </main>
        </div>
      </Router>
    )
  }
}

export default Home;
