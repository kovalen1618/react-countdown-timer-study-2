import './App.css';
import CountdownTimer from './components/countdowntimer/CountdownTimer.jsx';

function App() {
  return (
    // Hardcoded timestamp prop
    <CountdownTimer countdownTimestampMs={1643673600000} />
  )
}

export default App
