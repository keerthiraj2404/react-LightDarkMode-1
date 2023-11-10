// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeMode = () => {
    const {isDarkMode} = this.state

    if (isDarkMode === false) {
      this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
    } else {
      this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
    }
  }

  render() {
    const {isDarkMode} = this.state

    const modeContainer = isDarkMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="main-container">
        <div className={modeContainer}>
          <div>
            {isDarkMode ? (
              <h1 className="dark-mode-heading">Click To Change Mode</h1>
            ) : (
              <h1 className="light-mode-heading">Click To Change Mode</h1>
            )}
          </div>
          <div>
            {isDarkMode ? (
              <button
                className="button"
                type="button"
                onClick={this.onChangeMode}
              >
                Light Mode
              </button>
            ) : (
              <button
                className="button"
                type="button"
                onClick={this.onChangeMode}
              >
                Dark Mode
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
