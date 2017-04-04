import React, {Component} from "react"
import "./OptionsContainer.css"

class OptionsContainer extends Component {
  render() {
    let inputNum = this.props.inputNum
    return(
      <div>
        <div className="options">
          <form>
            <h2>Scaffold some lipsum</h2>
            <div><h3>Number of paragraphs</h3>
              <div className="num">
                <input type="number" placeholder="3">{inputNum}</input>
              </div>
            </div>
            <button id="generate">Generate</button>

          </form>
        </div>
      </div>
    )
  }
}
 export default OptionsContainer
