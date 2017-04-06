import React, { Component } from 'react'
import  {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import favicon from "../../../public/C_I copy.png"
import Data from "../../../data.json"
import OptionsContainer from "../OptionsContainer/OptionsContainer.js"
// import Output from "../Output/Output.js"
import OutputContainer from "../OutputContainer/OutputContainer.js"
import './Home.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      snippets: Data,
      output: null,
      paragraphs: null,
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
    let data = Data.map((text) => {
      return text.body
    })

    let paragraphArray = []
    for (let i = 0; i < this.state.inputNum; i++){
      let lipsum = []
      for (let j = 0; j < 40; j++) {
        lipsum.push(data[Math.floor(Math.random()* data.length)])
        if(!((j+1)%4)){
          lipsum[j]=lipsum[j]+"."
        }
        if(!(j%4)){
            lipsum[j]=lipsum[j].charAt(0).toUpperCase() + lipsum[j].slice(1)
          }
        }

      paragraphArray.push(lipsum.join(" "))
    }
    this.setState({
      output: paragraphArray,
      generated: true
    })
  }

  printOutput() {
    return <OutputContainer
        inputNum={this.state.inputNum}
        output={this.state.output}
        onFormSubmit={() => this.handleSubmit()}
        clearGenerate={() => this.clearGenerate()}
    />
  }

  clearGenerate() {
    this.setState({
      generated: false
    })
  }

  render() {
    return (
      <Router>
        <div className="render">
          <nav>
            <h1><Link to="/home">Coder_Ipsum</Link></h1>
            <Link to="/home">return</Link>
            <a href="https://github.com/fanelenan7/coder_ipsum">github</a>
          </nav>
          <main>
            <Route
              path="/home"
              render={() => {
                if(this.state.generated){
                  return <Redirect to="/type=random" />
                }
                return <OptionsContainer
                inputNum={this.state.inputNum}
                onFormInput={(e) => this.handleInput(e)}
                onFormSubmit={(e) => this.handleSubmit(e)}
              />}
            }
              />
            <Route
              path="/type=random"
              render={() => {
                return (
                  <div>{this.printOutput()}</div>
                )
              }}
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
