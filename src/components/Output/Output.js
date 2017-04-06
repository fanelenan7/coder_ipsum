import React, {Component} from "react"
import "./Output.css"

class Output extends Component {
  render() {
    console.log(this.props.oneParagraph);
    return(
      <div>
        <div className="output">{this.props.oneParagraph}</div>
      </div>
    )
  }
}

export default Output
