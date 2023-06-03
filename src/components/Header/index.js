import './index.css'

const Header = props => {
  const {timer, score} = props
  return (
    <nav>
      <ul className="headerContainer">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </li>
        <li>
          <p>Score:{score}</p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
        </li>
        <li>
          <p>{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default Header
