import React from 'react';
import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Video from './Video';

import f_t_s_one from '../picture/f_t_s_one.png';
import f_t_s_two from '../picture/f_t_s_two.png';
import f_t_s_three from '../picture/f_t_s_three.png';
import f_t_s_four from '../picture/f_t_s_four.png';
import f_t_s_five from '../picture/f_t_s_five.png';
import f_t_s_six from '../picture/f_t_s_six.png';
import f_t_s_seven from '../picture/f_t_s_seven.png';
import f_t_s_eight from '../picture/f_t_s_eight.png';
import facebook from "../picture/fb-pink-1.png";
import insta from "../picture/insta-pink-1.png";
import lookbook from "../picture/lookbook-pink1.png";
import snapchat from "../picture/snapchat-pink-1.png";
import pintrst from "../picture/pintrst-pink-1.png";
import logo from "../picture/_VMC.png";
import career_one from "../picture/career_one.png";
import career_two from "../picture/career_two.png";
import career_three from "../picture/career_three.png";
import career_four from "../picture/career_four.png";

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
// };

let height ={
    height:"300px",
    width:"300px",
    margin:"0px ! important"
};
// // let style = {
// //     width:"300px",
// //     height:"241px"
// // };
// let style_2 = {
//     width:"280px",
//     height:"221px"
// };
class FashionTexStyleDepartment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
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
                    <div className="row">
                        <div className="col-md-3  career_margin_top"><img className="career_width" src={f_t_s_one} alt="f_t_s_one"/></div>
                        <div className="col-md-3 career_margin_top"><img className="career_width" src={f_t_s_two} alt="f_t_s_two"/></div>
                        <div className="col-md-3 career_margin_top"><img className="career_width" src={f_t_s_two} alt="f_t_s_two"/></div>
                        <div className="col-md-3 career_margin_top"><img className="career_width" src={f_t_s_two} alt="f_t_s_two"/></div>
                    </div>
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
                <div className="container-fluid fashion_bottom_margin">
                    <div className="row">
                        <div className="col-md-3 career_padding_right career_margin_top"> <a href="#"><img className="career_width" src={f_t_s_five} alt="f_t_s_five"/></a> </div>
                        <div className="col-md-3 career_padding_right career_margin_top"><a href="#"><img className="career_width" src={f_t_s_six} alt="f_t_s_six"/></a></div>
                        <div className="col-md-3 career_padding_right career_margin_top"><a href="#"><img className="career_width"  src={f_t_s_seven} alt="f_t_s_seven"/></a></div>
                        <div className="col-md-3 career_padding_left career_margin_top"><a href="#"><img className="career_width" src={f_t_s_eight} alt="f_t_s_eight"/></a></div>
                    </div>
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
                    <h1>@ All RIght Developed by <a href="http://setcolbd.com">SETCOLBD</a></h1>
                </div>
            </div>
        )
    }
}
export default FashionTexStyleDepartment;