import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store/index';
import List from './components/List/List';


function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <List />
      </div>
    </Provider>
  );
}

export default App;
