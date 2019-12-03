import React, { Component } from "react";
import {Link } from "react-router-dom";
import Modal from 'react-awesome-modal';

import community_picture from '../picture/community.png';
import fashion_picture from '../picture/fashion.png';
import calender_picture from '../picture/calender.png';
import contact_picture from '../picture/contacts.png';
import career_picture from '../picture/careers.png';
import ccs_popup from '../picture/ccs_popup.png';
import c_c_s_one from '../picture/ccs_1.png';
import c_c_s_two from '../picture/ccs_2.png';
import c_c_s_three from '../picture/ccs_3.png';
import c_c_s_four from '../picture/ccs_4.png';
import c_c_s_five from '../picture/ccs_6.png';
import c_c_s_six from '../picture/ccs_5.png';
import fashion_pop_up from '../picture/fashion_pop_up.png';
import fashion_one from '../picture/fashion_one.png';
import fashion_two from '../picture/fashion_two.png';
import fashion_three from '../picture/fashion_three.png';
import fashion_four from '../picture/fashion_four.png';
import fashion_five from '../picture/fashion_six.png';
import fashion_six from '../picture/fashion_five.png';
import text_me from '../picture/txt-me-black.png';
import mail_me from '../picture/mail-btn-blk.png';
import home from '../picture/home-btn-blk.png';
import aer from '../picture/aer-btn-blk.png';
import ccs from '../picture/ccs-blk.png';
import ftst from '../picture/ftst-blk.png';
import ftsm from '../picture/ftsm-blk.png';
import facebook from '../picture/fb-pink-1.png';
import insta from '../picture/insta-pink-1.png';
import lookbook from '../picture/lookbook-pink1.png';
import snapchat from '../picture/snapchat-pink-1.png';
import pintrst from '../picture/pintrst-pink-1.png';
import logo from '../picture/logo-pop-up.png';
import coming_soon from '../picture/coming.png';
import play_btn from '../picture/play-btn.png';
import pause_btn from '../picture/pause-btn.png';
import video from "../video/home_page_tv 5.mp4";
import video_two from "../video/contact_form.mp4";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            phoneModal :false,
            emailModal:false,
        }
    }
    openModal() {
        this.setState({
            visible : true
        });
    }
    closeModal() {
        this.setState({
            visible : false
        });
    }
    phoneOpenModal(){
        this.setState({
            phoneModal:true,
        })
    }
    phoneCloseModal(){
        this.setState({
            phoneModal:false,
        })
    }
    emailOpenModal(){
        this.setState({
            emailModal:true,
        })
    }
    emailCloseModal(){
        this.setState({
            emailModal:false,
        })
    }
    render(){
        return (
            <div>
                <Modal visible={this.state.visible} width="500" height="350" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className="modal_design">
                        <img className="coming_soon" src={coming_soon} alt="coming_soon"/>
                        <a className="close_button" href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
                <Modal visible={this.state.phoneModal} width="500" height="350" effect="fadeInUp" onClickAway={() => this.phoneCloseModal()}>
                    <div>
                        <div className="form_design">
                            <form>
                                <div className="margin_setting">
                                    <div className="contact_me_text">if you have any kind of curiosity feel free and contact me</div>
                                    <input type="text" className="input_field_design" id="name" name="name" placeholder="Message"/>
                                    <input type="text" className="input_field_design" id="mobile" name="mobile" placeholder="Type Your Mobile Number"/>
                                </div>
                                <input type="submit" className="submit_button" onClick={()=>this.phoneCloseModal()} value="Submit"/>
                                <input type="button" className="close_button_two" onClick={()=>this.phoneCloseModal()} value="close"/>
                            </form>
                        </div>
                    </div>
                </Modal>
                <Modal visible={this.state.emailModal} width="500" height="350" effect="fadeInUp" onClickAway={() => this.emailCloseModal()}>
                    <div>
                        <div className="form_design">
                            <form>
                                <div className="margin_setting">
                                    <div className="contact_me_text">if you have any kind of curiosity feel free and contact me</div>
                                    <input type="text" className="input_field_design" id="name" name="name" placeholder="Message"/>
                                    <input type="text" className="input_field_design" id="mobile" name="mobile" placeholder="Type Your Valid Email Id"/>
                                </div>
                                <input type="submit" className="submit_button" onClick={()=>this.emailCloseModal()} value="Submit"/>
                                <input type="button" className="close_button_two" onClick={()=>this.emailCloseModal()} value="close"/>
                            </form>
                        </div>
                    </div>
                </Modal>
                <section id="home">
                     <a href="#"><img src={logo} className="logo img-responsive" alt="logo"/></a>
                    <button>Log in</button>
                    <div>
                        <div className="video_player_with_icon">
                            <video id="myVideo" className="video_player_design">
                                <source src={video} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="tv_cursor"></div>
                        <a href="#community_consult_service"><img src={community_picture} className="fashionDesign img-responsive" alt="community"/></a>
                        <a href="#fashion_service"><img src={fashion_picture} className="communityDesign img-responsive" alt="fashion"/></a>
                        <Link to="/calendar"><img src={calender_picture} className="calender img-responsive" alt="calender"/></Link>
                        <Link to="/career"><img src={career_picture} className="career img-responsive" alt="career"/></Link>
                        <a href="#contact_us"><img src={contact_picture} className="contact img-responsive" alt="contact"/></a>
                        <a href="#"><img src={play_btn} className="play_btn_1 img-responsive" alt="play-btn"/></a>
                        <a href="#"><img src={pause_btn} className="pause_btn_1 img-responsive" alt="pause_btn"/></a>
                       

                    </div>
                </section>
                <section id="community_consult_service">
                    <div className="container-fluid container_position">
                        <div className="row">
                            <div className="col-md-12 community_flex">
                                <div>
                                    <img src={ccs_popup} className="c_c_s_pop_up" alt="ccs_popup"/>
                                    <img src={c_c_s_one} className="c_c_s_one" alt="c_c_s_one"/>
                                    <img src={c_c_s_two} className="c_c_s_two" onClick={() => this.openModal()} alt="c_c_s_one"/>
                                    <img src={c_c_s_three} className="c_c_s_three" onClick={() => this.openModal()} alt="c_c_s_one"/>
                                    <img src={c_c_s_four} className="c_c_s_four" onClick={() => this.openModal()} alt="c_c_s_one"/>
                                    <img src={c_c_s_five} className="c_c_s_five" alt="c_c_s_one"/>
                                    <img src={c_c_s_six} className="c_c_s_six" alt="c_c_s_six"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="fashion_service">
                    <div className="container_position_two">
                        <div className="margin_top">
                            <div className="row">
                                <div className="col-md-12">
                                    < div className ="fashion_flex">
                                        <img src={fashion_pop_up} className="fashion_pop_up" alt="fashion_pop_up"/>
                                        <Link to="/fashion_tex"><img src={fashion_one} className="fashion_one" onClick={() => this.openModal()} alt="fashion_one" /></Link>
                                        <img src={fashion_two} className="fashion_two" onClick={() => this.openModal()} alt="fashion_two"/>
                                        <img src={fashion_three} className="fashion_three" alt="fashion_three"/>
                                        <img src={fashion_four} className="fashion_four" onClick={() => this.openModal()} alt="fashion_four"/>
                                        <img src={fashion_five} className="fashion_five" alt="fashion_five"/>
                                        <img src={fashion_six} className="fashion_six" alt="fashion_six"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <div className="video_player_with_icon">
                        <video id="myVideo" className="contact_video_player_design" autoPlay>
                            <source src={video_two} type="video/mp4"/>
                        </video>
                         <div className="mobile_cursor"></div>
                    </div>
                    <img className="text_me" src={text_me} onClick={()=>this.phoneOpenModal()} alt="text_me"/>
                    <img className="mail_me" src={mail_me} onClick={()=>this.emailOpenModal()} alt="mail_me"/>
                    <a href="#home"><img className="home" src={home} alt="home"/></a>
                    <img className="aer" src={aer} alt="aer"/>
                    <img className="ccs" src={ccs} alt="ccs"/>
                    <img className="ftst" src={ftst} alt="ftst"/>
                    <img className="ftsm" src={ftsm} alt="ftsm"/>
                    <a href="#"><img src={play_btn} className="play_btn_2 img-responsive" alt="play-btn"/></a>
                        <a href="#"><img src={pause_btn} className="pause_btn_2 img-responsive" alt="pause_btn"/></a>
                </div>
                <section id="contact_us">
                    <div className="footer_design footer_margin">
                        <a href="#"> <img className="facebook" src={facebook} alt="facebook"/></a>
                        <a href="#"> <img className="insta" src={insta} alt="insta"/></a>
                        <a href="#"><img className="lookbook" src={lookbook} alt="lookbook"/></a>
                        <a href="#"><img className="snapchat" src={snapchat} alt="snapchat"/></a>
                        <a href="#"> <img className="pintrst" src={pintrst} alt="pintrst"/></a>
                    </div>
                </section>
                <div className="credits">
                    <h1>@ All RIght Developed by Faysal</h1>
                </div>
            </div>
        )
    }
}
export default Home;
