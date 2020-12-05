import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import  {Provider} from 'react-redux'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        {/* <CakeContainer /> */}
        {/* <IceCreamContainer /> */}
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
