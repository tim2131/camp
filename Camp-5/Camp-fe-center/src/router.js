import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Camboss from './pages/camboss/router';
import Home from './pages/home/router';

class MRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path='/' render={() => 
                            <Camboss>
                                <Switch>
                                    <Route path='/home' exact component={Home}/>
                                    <Route path='/camboss' component={Camboss}/>
                                </Switch>
                            </Camboss>  
                        }/>
                    </Switch>
                </App>
            </Router>
        );
    }
}

export default MRouter;