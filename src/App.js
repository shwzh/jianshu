import React from 'react';
import Header from './header'
import { IconfontStyle } from "./static/iconfont/iconfont";
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';
import Detail from './detail';

function App() {
  return (
    <div className="App">
        <IconfontStyle />
        <Provider store={store}>
            <div>
                <Header />
                <BrowserRouter>
                    <div>
                        <Route path='/' exact render={() => <div>home</div>}></Route>
                        <Route path='/detail' render={() => <div>detail</div>}></Route>
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    </div>
  );
}

export default App;
