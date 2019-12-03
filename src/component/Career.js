import React from 'react';
import Slider from "react-slick";

import career_one from '../picture/career_one.png';
import career_two from '../picture/career_two.png';
import career_three from '../picture/career_three.png';
import career_four from '../picture/career_four.png';
import career_five from '../picture/career_five.png';
import career_six from '../picture/career_six.png';
import career_seven from '../picture/career_seven.png';
import career_eight from '../picture/career_eight.png';
import f_t_s_one from '../picture/f_t_s_one.png';
import f_t_s_two from '../picture/f_t_s_two.png';
import f_t_s_three from '../picture/f_t_s_three.png';
import f_t_s_four from '../picture/f_t_s_four.png';
import f_t_s_five from '../picture/f_t_s_five.png';
import f_t_s_six from '../picture/f_t_s_six.png';
import f_t_s_seven from '../picture/f_t_s_seven.png';
import f_t_s_eight from '../picture/f_t_s_eight.png';
import logo from "../picture/_VMC.png";
import facebook from "../picture/fb-pink-1.png";
import insta from "../picture/insta-pink-1.png";
import lookbook from "../picture/lookbook-pink1.png";
import snapchat from "../picture/snapchat-pink-1.png";
import pintrst from "../picture/pintrst-pink-1.png";
class Career extends React.Component{
    render(){
      var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [{
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true,
                      arrows: false
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2,
                      arrows: false
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false
                  }
              }
          ]
      };

        return(
            <div>
               
                <div className="container-fluid">
                        <div className="row career_padding_right">
                            <div className="col-md-3 career_padding_right career_margin_top"><img className="career_width" src={career_one} alt="career_one"/></div>
                            <div className="col-md-3 career_padding_right career_margin_top"><img className="career_width" src={career_two} alt="career_two"/></div>
                            <div className="col-md-3 career_padding_right career_margin_top"><img className="career_width"  src={career_three} alt="career_three"/></div>
                            <div className="col-md-3 career_padding_left career_margin_top"><img className="career_width" src={career_four} alt="career_four"/></div>
                        </div>
                        
                     <div className="fashion_slick">
                        <Slider {...settings} >
                            <div>
                                <div className="fashion_img pl-3"><img src={f_t_s_one} className="f_t_s_1" alt="f_t_s_1" /></div>
                            </div>
                            <div>
                                <div className="fashion_img pl-3"><img src={f_t_s_two} className="f_t_s_2" alt="f_t_s_1" /></div>
                            </div>
                            <div>
                                <div className="fashion_img pl-3"><img src={f_t_s_three} className="f_t_s_3" alt="f_t_s_1" /></div>
                            </div>
                            <div>
                                <div className="fashion_img pl-3"><img src={f_t_s_four} className="f_t_s_4" alt="f_t_s_1" /></div>
                            </div>
                            <div>
                                <div className="fashion_img pl-3"><img src={f_t_s_five} className="f_t_s_5" alt="f_t_s_1" /></div>
                            </div> 
            
                        </Slider>
                    </div>
                    <div className="row career_padding_right">
                        <div className="col-md-3 career_padding_right career_margin_top"><img className="career_width" src={career_five} alt="career_five"/></div>
                        <div className="col-md-3 career_padding_right career_margin_top"><img className="career_width" src={career_six} alt="career_six"/></div>
                        <div className="col-md-3 career_padding_right career_margin_top"><img className="career_width"  src={career_seven} alt="career_seven"/></div>
                        <div className="col-md-3 career_padding_left career_margin_top"><img className="career_width" src={career_eight} alt="career_eight"/></div>
                    </div>
                </div>
                <div className="footer_design fashion_footer">
                    <a href="#"> <img className="facebook" src={facebook} alt="facebook"/></a>
                    <a href="#"> <img className="insta" src={insta} alt="insta"/></a>
                    <a href="#"><img className="lookbook" src={lookbook} alt="lookbook"/></a>
                    <a href="#"><img className="snapchat" src={snapchat} alt="snapchat"/></a>
                    <a href="#"> <img className="pintrst" src={pintrst} alt="pintrst"/></a>
                </div>
            </div>
        )
    }
}
export default Career;