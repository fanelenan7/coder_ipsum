import React, {Component} from "react"
import "./OptionsContainer.css"

class OptionsContainer extends Component {
  render() {
    return(
      <div>
        <div className="options">
          <form>
            <h2>Scaffold some lipsum</h2>
            <div><h3>Number of paragraphs</h3>
              <div className="num">
                <input value="3"></input>
                <button id="less">-</button>
                <button id="more">+</button>
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
