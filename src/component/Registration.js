import React from 'react';
import './Registration.css'

class Registration extends React.Component{
    render(){
        return(
            <div>
               <div className="container-fluid contact_margin">
                    <div className="row justify-content-center">
                        < div className="col-md-4" >
                            <h1 className="cont_txt">Sign Up</h1>
                            <form>
                                <fieldset class="contact_material">
                                    <input class="input_field" type="text" autocomplete="off" required/>
                                    <hr class="input_field_hr"/>
                                    <label>Please Enter Your First Name</label>
                                </fieldset><br/>
                                 <fieldset class="contact_material">
                                    <input class="input_field" type="text" autocomplete="off" required/>
                                    <hr class="input_field_hr"/>
                                    <label>Please Enter Your Last Name</label>
                                </fieldset><br/>
                                <fieldset class="contact_material">
                                    <input class="input_field" type="text" autocomplete="off" required/>
                                    <hr class="input_field_hr"/>
                                    <label>Please Type Your Phone Number</label>
                                </fieldset><br/>
                                <fieldset class="contact_material">
                                    <input class="input_field" type="email" autocomplete="off" required/>
                                    <hr class="input_field_hr"/>
                                    <label>Please Type Your Email</label>
                                </fieldset><br/>
                                <fieldset class="contact_material">
                                    <input class="input_field" type="password" autocomplete="off" required/>
                                    <hr class="input_field_hr"/>
                                    <label>Please Type Password</label>
                                </fieldset><br/>
                                 <fieldset class="contact_material">
                                    <input class="input_field" type="password" autocomplete="off" required/>
                                    <hr class="input_field_hr"/>
                                    <label>Confirm Your Password</label>
                                </fieldset><br/>
                                <input type="submit" class="btn  con_btn" value="Submit"/>
                            </form>
                            <p className="sign_in mt-3">Already Have an Acount <a href="#">Log in</a>  </p>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}
export default Registration;
                