import './App.css'
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return <div>
    <ClockHeading />
    <ClockSlogan />
    <CurrentTime />
  </div>
    
}

export default App
