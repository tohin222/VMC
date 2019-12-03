import React from 'react';
import './Login.css'

class Login extends React.Component {
    render(){
        return(
            <div>
               <div className="container-fluid contact_margin">
                    <div className="row justify-content-center">
                        < div className="col-md-4" >
                            <h1 className="cont_txt">Login</h1>
                            <form>
                               
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
                                <input type="submit" class="btn  con_btn" value="Submit"/>
                            </form>
                            <p className="sign_in mt-3">Not Registered <a href="#">Create a account</a>  </p>
                            <p className="sign_in"><a href="#">Forgot Password</a>  </p>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}
export default Login;
                