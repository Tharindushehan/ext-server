import React from 'react';
import Header from "./Components/Header"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Cards/Home';
import Main from './Components/chromeExtension/Main'

function App() {
    return (
        <div>
            <Header />

            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/websiteDetails/:host" component={Main} exact />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
