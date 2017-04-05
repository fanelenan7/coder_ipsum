import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./OptionsContainer.css"

class OptionsContainer extends Component {
  render() {
    let inputNum = this.props.inputNum
    return(
      <div>
        <div className="options">
          <form onSubmit={(e) => this.props.onFormSubmit(e)}>
            <h2>Scaffold some lipsum</h2>
            <div><h3>Number of paragraphs</h3>
              <div className="num">
                <input type="number" placeholder="3" value={inputNum} onChange={(e) => this.props.onFormInput(e)} />
              </div>
            </div>
            <button id="generate"><Link to="/type=random">Generate</Link></button>

          </form>
        </div>
      </div>
    )
  }
}
 export default OptionsContainer
