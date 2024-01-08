import TheComponent from '@jswork/rtk-state-tree';
import '@jswork/rtk-state-tree/src/style.scss';
import './App.css';


function App() {
  return (
    <>
      <h1>rtk-state-tree</h1>
      <TheComponent
        onClick={() => {
          console.log('click me');
        }}>
        Click me
      </TheComponent>
    </>
  );
}

export default App;
