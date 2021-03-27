import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <AppRouter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
