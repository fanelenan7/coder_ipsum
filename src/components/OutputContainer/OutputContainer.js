import React, {Component} from "react"
import Output from "../Output/Output.js"
import "./OutputContainer.css"

class OutputContainer extends Component{
  componentDidMount() {
    this.props.clearGenerate()
  }

  render() {
    let printAllParagraphs = this.props.output.map((paragraph, index) => {
      return <li key={index}><Output
              oneParagraph={paragraph}
            /></li>
    })
    return <div className="outputContainer">{printAllParagraphs}</div>
  }
}

export default OutputContainer
