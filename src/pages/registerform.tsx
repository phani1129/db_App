import React,{Component} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './registerform.css'

var userData = []

class RegisterForm extends Component{
    
    state = {userDetails : {},firstname: "",lastname: "",gender: "",dob:"", email: "", phonenumber: "", password : "",recreatepassword : "",jwtToken:"",
    firstnameErrorMsg : "",
    lastnameErrorMsg : "",
    emailErrorMsg : "",
    phonenumberErrorMsg : "",
    passwordErrorMsg : "",
    errorMsg: "",
    DOBerrorMsg : ""
    }

    onChangeFirstname = event =>{
        this.setState({firstname : event.target.value})
    }

    onChangeLastname = event =>{
        this.setState({lastname : event.target.value})
    }

    onChangeMail = event =>{
        this.setState({gender : event.target.value})
    }

    onChangeMail = event =>{
        this.setState({email : event.target.value})
    }
    onChangePhonenumber = event =>{
        this.setState({phonenumber : event.target.value})
    }
    onChangePassword = event =>{
        this.setState({password : event.target.value})
    }

    onChangeReCreatePassword = event =>{
        this.setState({recreatepassword : event.target.value})
    }


    validateFirstName = event => {
        if(event.target.value === ""){
            this.setState({firstnameErrorMsg:"*Required"})
        }else if(event.target.value.length < 3){
            this.setState({firstnameErrorMsg:"*Please enter Valid Name"})
        }
        else{
            this.setState({firstnameErrorMsg:""})
        }
    }

    validateLastName = event => {
        if(event.target.value === ""){
            this.setState({lastnameErrorMsg:"*Required"})
        }else if(event.target.value.length < 3){
            this.setState({lastnameErrorMsg:"*Please enter Valid Name"})
        }
        else{
            this.setState({lastnameErrorMsg:""})
        }
    }

    validateDOB = event =>{
        if(event.target.value === ""){
            this.setState({DOBerrorMsg:"*Required"})
        }
        else{
            this.setState({DOBerrorMsg:""})
        }
    }

    validateEmail = event => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if(event.target.value.match(pattern)){
        this.setState({emailErrorMsg:""})
        this.setState({email:event.target.value})
        }else if(event.target.value === ""){
            this.setState({emailErrorMsg:"*Required"})
        }
        else{
            this.setState({emailErrorMsg:"*Invalid email"})
        }
        
    }
    validatePhonenumber = event => {
        if(event.target.value === ""){
            this.setState({phonenumberErrorMsg:"*Required"})
        }else if(event.target.value.length !== 10){
            this.setState({phonenumberErrorMsg:"*Invalid Phone number"})
        }
        else{
            this.setState({phonenumberErrorMsg:""})
        }
    }
    validatePassword = event => {
        if(event.target.value === ""){
            this.setState({passwordErrorMsg:"*Required"})
        }else if(event.target.value.length < 8){
            this.setState({passwordErrorMsg:"*Use minimum 8 characters in your password"})
        }
        else{
            this.setState({passwordErrorMsg:""})
        }
    }

    onSubmitRegisterForm = event =>{
        const {userDetails,firstname,lastname,gender,dob,email,phonenumber,password,recreatepassword} = this.state
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        event.preventDefault()
        
        if(firstname.length > 2 && email.match(emailPattern) && phonenumber.length === 10 && password.length > 7 && password === recreatepassword){
            userDetails.id = "darjibhai_"+firstname+"?db@2023"+dob+`user_?${phonenumber}`
            userDetails.firstname = firstname
            userDetails.lastname = lastname
            userDetails.gender = gender
            userData.dob = dob
            userDetails.email = email
            userDetails.phonenumber = phonenumber
            userDetails.password = password
            userDetails.jwtToken = firstname+password+lastname+dob
            userData.push(userDetails)
            localStorage.setItem("data",JSON.stringify(userData))
            this.setState({firstname:""})
            this.setState({lastname:""})
            this.setState({gender:""})
            this.setState({dob:""})
            this.setState({email:""})
            this.setState({phonenumber:""})
            this.setState({password:""})
            this.setState({recreatepassword:""})
            this.setState({userDetails:{}})
        }else if(password !== recreatepassword){
            this.setState({errorMsg : "*Password's didn't match"})
        }else{
            this.setState({errorMsg : "*Please fill Validate details"})
        }
        
    }

    render(){
        const {firstname,lastname,password,recreatepassword,email,phonenumber,firstnameErrorMsg,lastnameErrorMsg,emailErrorMsg,phonenumberErrorMsg,passwordErrorMsg,errorMsg,DOBerrorMsg} = this.state
        return(
        <div className = "register-form-main-container">
            <form className = "register-form-container" onSubmit = {this.onSubmitRegisterForm}>
                <h1 className = "form-heading mb-3">Register Here</h1>
            <div className = "register-container">

                <div className = "input-container">

                    <div className = "input-values-container">
                        <div>
                            <label className="input-label" htmlFor="firstname">
                                FIRST NAME
                            </label> <br />
                            <input type="text" id="firstname" className="input-filed" value = {firstname || ""} onChange = {this.onChangeFirstname} onBlur={this.validateFirstName} placeholder = "Firstname"/>
                            <p className = "validation-details">{firstnameErrorMsg}</p>
                        </div>

                        <div>
                            <label className="input-label" htmlFor="lastname">
                                LAST NAME
                            </label> <br />
                            <input type="text" id="lastname" className="input-filed" value = {lastname || ""} onChange = {this.onChangeLastname} onBlur={this.validateLastName} placeholder = "Lastname"/>
                            <p className = "validation-details">{lastnameErrorMsg}</p>
                        </div>
                    </div>
                </div>


                <div className = "input-container">

                    <div className = "input-values-container">
                        <div className = "input-gender-container mb-3 mt-2">
                            <label className="input-label mb-1" htmlFor="gender">
                                GENDER
                            </label> <br />
                            <input type="radio" name="gender" id = "gender1" className = "mr-2" value = "Male" onChange = {e => this.setState({gender: e.target.value})}/>Male
                            <input type="radio" name="gender" id = "gender2" className = "ml-4 mr-2" value = "Female" onChange = {e => this.setState({gender: e.target.value})}/>Female
                        </div>

                        <div >
                            <label className="input-label" htmlFor="dob">
                                DATE OF BIRTH
                            </label> <br />
                            <input type="date" id="dob" className="input-filed" onChange = {e => this.setState({dob: e.target.value})} onBlur={this.validateDOB}/>
                            <p className = "validation-details">{DOBerrorMsg}</p>
                        </div>
                    </div>
                </div>


                <div className = "input-container">
                    <div className = "input-values-container">
                        <div>
                            <label className="input-label" htmlFor="mail">
                                EMAIL
                            </label> <br />
                            <input type="mail" id="mail" className="input-filed" value = {email || ""} onChange = {this.onChangeMail} onBlur={this.validateEmail} placeholder = "Email"/>
                            <p className = "validation-details">{emailErrorMsg}</p>
                        </div>

                        <div>
                            <label className="input-label" htmlFor="phonenumber">
                                PHONE NUMBER
                            </label> <br />
                            <input type="tel" id="phonenumber" className="input-filed" value = {phonenumber || ""} onChange = {this.onChangePhonenumber} onBlur={this.validatePhonenumber} placeholder = "Phone number"/>
                            <p className = "validation-details">{phonenumberErrorMsg}</p>
                        </div>
                    </div>    
                </div>


                <div className = "input-container">
                    <div className = "input-values-container">
                        <div>
                            <label className="input-label" htmlFor="create-password">
                                CREATE PASSWORD
                            </label>< br/>
                            <input type="password" id="create-password" className="input-filed" value = {password || ""} onChange = {this.onChangePassword} onBlur={this.validatePassword} placeholder = "password"/>
                            <p className = "validation-details">{passwordErrorMsg}</p>
                        </div>

                        <div>
                            <label className="input-label" htmlFor="recreate-password">
                                RECREATE PASSWORD
                            </label>< br/>
                            <input type="password" id="recreate-password" className="input-filed" value = {recreatepassword || ""} onChange = {this.onChangeReCreatePassword} onBlur={this.validatePassword} placeholder = "Recreate password"/>
                            <p className = "validation-details">{passwordErrorMsg}</p>
                        </div>
                    </div>    
                </div>


                <div className = "text-center mt-3">
                    <button type="submit" className="register-button">
                        REGISTER
                    </button>
                    <p className = "validation-details">{errorMsg}</p>
                    <p className = "already-have-account">Already have an account? <Link to = "/login" className = "login-now-link">Login now</Link></p>
                </div> 
            </div>
            </form>
        </div>
        )
    }
}

export default RegisterForm