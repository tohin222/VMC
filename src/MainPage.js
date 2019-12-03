import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import {NavLink} from "react-router-dom";


import CommunityConsultantService from './component/CommunityConsultantService';
import FashionDesign from './component/FashionDesign';
import {calendar} from './component/calendar';
import {contact} from './component/contact';
import {career} from "./component/Career";

import Image from './picture/home_page_tv.png';
import community_picture from './picture/community.png';
import fashion_picture from './picture/fashion.png';
import buttonOne from './picture/button_one.png';
import buttonTwo from './picture/button_two.png';
import buttonThree from './picture/button_three.png';
import calender_picture from './picture/calender.png';
import contact_picture from './picture/contacts.png';
import career_picture from './picture/careers.png';
import ReactPlayer from 'react-player'
// import tv from './picture/tv_screen.png'

import video from './video/home_page_tv 5.mp4'


let sectionStyle = {
    width: "100%",
    height: "758px",
    backgroundImage: `url(${Image})`,
    position:"relative",
};
class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             test:'there is something'
        }
    }
    changeComponent(){
        console.log(this.state.test)
    }
  render(){
      return(
      <div className="App" >
          {/*<section className="section_style img-responsive" style={sectionStyle}>*/}
          {/*  /!*<img src={tv} className="tv_screen img-responsive" alt="tv_screen"/>*!/*/}
          {/*    <BrowserRouter>*/}
          {/*    <div>*/}
          {/*        <NavLink to="/community_consultant_service" ><img src={community_picture} className="communityDesign img-responsive" onClick={this.changeComponent()} alt="community"/></NavLink>*/}
          {/*        <NavLink to="/fashion"><img src={fashion_picture} className="fashionDesign img-responsive" alt="fashion"/></NavLink>*/}
          {/*        <NavLink to="/calender"><img src={buttonOne} className="buttonOne img-responsive" alt="buttonOne"/><img src={calender_picture} className="calender img-responsive" alt="calender"/></NavLink>*/}
          {/*        <NavLink to="/contact"><img src={buttonTwo} className="buttonTwo img-responsive" alt="buttonTwo"/><img src={contact_picture} className="contact img-responsive" alt="contact"/></NavLink>*/}
          {/*        <NavLink to="/career"><img src={buttonThree} className="buttonThree img-responsive" alt="buttonThree"/><img src={career_picture} className="career img-responsive" alt="career"/></NavLink>*/}
          {/*        <Switch>*/}
          {/*            <Route path="/community_consultant_service" component={CommunityConsultantService}/>*/}
          {/*            <Route path="/fashion" component={FashionDesign}/>*/}
          {/*            <Route path="/calender" component={calender}/>*/}
          {/*            <Route path="/contact" component={contact}/>*/}
          {/*            <Route path="/career" component={career}/>*/}
          {/*        </Switch>*/}
          {/*    </div>*/}
          {/*    </BrowserRouter>*/}
              <div className="demo-container">
                  <article className="video">
                      <video>
                          <source src={video} type="video/mp4"/>
                      </video>
                  </article>
              </div>
          {/*</section>*/}
          {/*<div className="text-center">rijwan</div>*/}
      </div>
        )
  }
}
export default MainPage;
