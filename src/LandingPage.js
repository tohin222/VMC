import React from 'react';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './component/Home';
class LandingPage extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        )
    }
}
function LandingPageRouting(){
    return(
        <Router>
            <Route component={LandingPage}/>
        </Router>
        )
}
export default LandingPageRouting;