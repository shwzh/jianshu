import React from 'react';
import Header from './header'
import { IconfontStyle } from "./static/iconfont/iconfont";
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <div className="App">
        <IconfontStyle />
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail' component={Detail}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
