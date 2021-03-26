import { useState } from 'react';
import {
    Landing,
    Navbar,
    Login,
    Register,
    PasswordReset,
    PasswordChange,
    TugasCard,
    TugasPiramid,
    TugasUpdateColor
} from '../screen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

const AppRouter = () => {
    const [test] = useState(false);

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
                    <Landing />
                    </Route>
                    <Route exact path="/Login">
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
                    <Route path="/TugasCard">
                    <TugasCard />
                    </Route>
                    <Route exact path="/TugasPiramid">
                    <TugasPiramid />
                    </Route>
                    <Route path="/UpdateColor">
                    <TugasUpdateColor />
                    </Route>
                </Switch>
            </div>
        )}
        </Router>
    )
}

export default AppRouter