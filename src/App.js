import React from 'react';
import Header from './header'
import { IconfontStyle } from "./static/iconfont/iconfont";
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
        <IconfontStyle />
        <Provider store={store}>
            <Header />
        </Provider>
    </div>
  );
}

export default App;
