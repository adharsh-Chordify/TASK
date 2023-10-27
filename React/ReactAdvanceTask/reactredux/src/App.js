
import { Provider } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import { store } from './store/store';

store.subscribe(()=>console.log(store.getState()))
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Counter/>
      </Provider>
          
    </div>
  );
}

export default App;
