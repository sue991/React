import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from "./App.module.css"
import World from './component/World';
function App() {

  return (
    <div className="App">
      {/* <Hello /> */}
      {/* <div className={styles.box}>App</div> */}
      <World age={10}/>
      <World age={20}/>
      <World age={30}/>
    </div>
  );
}

export default App;