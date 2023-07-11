import './App.css';
import CarSelect from './components/CarSelect';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import MyClock from './components/MyClock/MyClock';
import Selector from './components/Selector';
// import Timer from './components/Timer';

function App() {
  return (
    <>
      <Counter/>
      <Selector/>
      <MyClock/>
      <CarSelect/>
      {/* <Timer/> */}
      <Counter2/>
    </>
  );
}

export default App;
