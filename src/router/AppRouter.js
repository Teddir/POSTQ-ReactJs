import { useState, useEffect } from 'react';
import {
    Landing,
    Navbar,
    Login,
    Register,
    PasswordReset,
    PasswordChange,
} from '../screen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

const AppRouter = () => {
    const [test, setTest] = useState(false);

    return (
        <Router>
        {test === true ? (
            <div className="App">
                <Navbar />
                <div className="Content">
                    <Switch>
                        <Route>
                        <Login />
                        </Route>
                    </Switch>
                </div>
            </div>
        ) : (
            <div className="Content">
                <Switch>
                    <Route exact path="/">
                    <Login />
                    </Route>
                    <Route path="/register">
                    <Register />
                    </Route>
                    <Route path="/pReset">
                    <PasswordReset />
                    </Route>
                    <Route path="/pChange">
                    <PasswordChange />
                    </Route>
                </Switch>
            </div>
        )}
        </Router>
    )
}

export default AppRouter