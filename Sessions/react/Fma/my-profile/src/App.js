import Header from './Header';
import './tabs';

function App() {
  return (
    <>
      <Header name = 'hasani' />
      <div id="tabs">
        <menu>
          <button id="btn-why-react" class="active">Why React?</button>
          <button id="btn-core-features">Core Features</button>
          <button id="btn-resources">Related Resources</button>
        </menu>
        <div id="tab-content"></div>
      </div>
    </>

  );
}

export default App;
