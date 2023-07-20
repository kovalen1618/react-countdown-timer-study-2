import './App.css';
import CountdownTimer from './components/countdowntimer/CountdownTimer.jsx';

function App() {
  return (
    // Hardcoded timestamp prop for 12/25/2023 at 00:00:00
    <CountdownTimer countdownTimestampMs={1703484000000} />
  )
}

export default App
