import React, {Component} from "react"
import "./Output.css"

class Output extends Component {
  componentWillMount() {
    this.props.onFormSubmit()
  }
  render() {
    console.log(this.props.output);
    return(
      <div className="outputContainer">
        <div className="output">{this.props.output}</div>
      </div>
    )
  }
}

export default Output
