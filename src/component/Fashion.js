import React,{Component} from 'react';
import fashion_pop_up from "../picture/fashion_pop_up.png";
import {Link} from "react-router-dom";
import fashion_one from "../picture/fashion_one.png";
import fashion_two from "../picture/fashion_two.png";
import fashion_three from "../picture/fashion_three.png";
import fashion_four from "../picture/fashion_four.png";
import fashion_five from "../picture/fashion_six.png";
import fashion_six from "../picture/fashion_five.png";
class Fashion extends Component{

    render(){
        return(
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
        )
    }
};
export default Fashion;
