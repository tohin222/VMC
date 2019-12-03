// import React from 'react';
// import ReactDOM from 'react-dom';
//  import LandingPageRouting from './LandingPage';
// //import Fashionrouting from './component/FashionTexStyleDepartment';
// import * as serviceWorker from './serviceWorker';
//  ReactDOM.render(<LandingPageRouting/> , document.getElementById('root'));
// //ReactDOM.render(<Fashionrouting/>, document.getElementById('root'));
// serviceWorker.unregister();

import React from "react";
import {render} from 'react-dom';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './component/Home';
import fashion_tex from './component/FashionTexStyleDepartment';
import Bio from './component/Bio';
import career from './component/Career';
import {calendar} from './component/calendar';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/career" component={career}/>
                    <Route path="/fashion_tex" component={fashion_tex}/>
                    <Route path="/calendar" component={calendar}/>
                </Switch>
            </div>
        );
    }
}
function LandingPageRouting() {
    return (
        <Router>
            <Route component={LandingPage} />
        </Router>
    );
}
render(<LandingPageRouting/>,document.getElementById('root'));
// render(<Home/> , document.getElementById('root'));



