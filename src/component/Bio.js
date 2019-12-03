import React from 'react';
import './Bio.css'

class Bio extends React.Component {
    render(){
        return(
            <div>
               <div className="container-fluid contact_margin">
                   <div className="row justify-content-center">
                        <div className="col-md-6 bio_cnt">
                                <h1> Add Your Info</h1>
                                <p>Tell us a bit about yourself</p>
                        </div>
                   </div>
                    <div className="row justify-content-center">
                         <div className="col-md-4">
                                <form>
                                    <div class="form-group bio_form_cnt">
                                        <label for="exampleInputEmail1">Name *</label>
                                        <input type="email" class="form-control bio_form" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div class="form-group bio_form_cnt">
                                        <label for="exampleInputPassword1">Email</label>
                                        <input type="text" class="form-control bio_form" id="exampleInputPassword1" />
                                    </div>
                                    <div class="form-group bio_form_cnt">
                                        <label for="exampleInputPassword1">Phone Number</label>
                                        <input type="password" class="form-control bio_form" id="exampleInputPassword1"/>
                                    </div>
                                    <div class="form-group bio_form_cnt">
                                        <label for="exampleFormControlTextarea2">Add Your Message</label>
                                        <textarea class="form-control rounded-0 bio_form" id="exampleFormControlTextarea2" rows="3"></textarea>
                                         < label className="mt-5"> * Require Info < /label>
                                        </div>
                                       
                                </form>
                        </div>
                       <div className="col-md-2">
                            <div className="airbnb">
                                <h2>Airbnb Consultation</h2>
                                <p>30 min | Free</p>
                                <hr/>
                                <p>June 27, 2019 12:30 pm</p>
                                <p>Alexius' A. Dorsey</p>
                                <p>Phone</p>
                                 <button type="submit" class="btn rounded-0 con_btn">Book It</button>
                            </div>
                       </div>
                    </div>
               </div>
            </div>
        )
    }
}
export default Bio;
                