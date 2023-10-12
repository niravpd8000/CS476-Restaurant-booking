import React, {Component} from 'react';
import {ConnectedRouter} from "connected-react-router";
import {Route, Switch} from 'react-router-dom';
import {history} from "./services/ReduxService";
import './scss/style.scss';

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"/>
    </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

class App extends Component {

    render() {
        return (
            <ConnectedRouter history={history}>
                <React.Suspense fallback={loading}>
                    <Switch>
                        <Route path="/" name="Home" render={props => <TheLayout {...props}/>}/>
                    </Switch>
                </React.Suspense>
            </ConnectedRouter>
        );
    }
}

export default App;
