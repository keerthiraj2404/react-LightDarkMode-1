// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

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
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const modeContainer = isDarkMode ? 'dark-mode' : 'light-mode'
    const heading = isDarkMode ? 'dark-mode-heading' : 'light-mode-heading'

    return (
      <div className="main-container">
        <div className={modeContainer}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
