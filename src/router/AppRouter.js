import { useState, useEffect } from 'react';
import {
    Landing,
    Home,
    Navbar,
    AddProject,
    Login,
    Register,
    PasswordReset,
    PasswordChange,
    TugasCard,
    TugasPiramid,
    TugasUpdateColor,
    TugasHitung
} from '../screen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { getProject } from '../services/endpoint/project';

const AppRouter = () => {
    const [test] = useState(false);

    const getData = () => {
        getProject()
    }

    useEffect(() => {
        getData()
    },[]);

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
                    <Route path="/Landing">
                    <Landing />
                    </Route>
                    <Route  path="/Home">
                    <Home />
                    </Route>
                    <Route path="/AddProject">
                    <AddProject />
                    </Route>
                    <Route path="/Login">
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
                    <Route exact path="/">
                    <TugasHitung />
                    </Route>
                </Switch>
            </div>
        )}
        </Router>
    )
}

export default AppRouter