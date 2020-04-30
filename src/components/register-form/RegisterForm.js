import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './RegisterForm.css';
import axios from 'axios';
import store from 'store';

class RegisterForm extends Component{
    constructor(props){
        super();

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            organisation: '',
            name: ''
        }
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    handlePassRepChange = (e) => {
        this.setState({confirmPassword: e.target.value});
    }

    handleOrganisationChange = (e) => {
        this.setState({organisation: e.target.value});
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    submitData = (e) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            organisation: this.state.organisation
        }
        axios.post("user/register", user).then(res => {
            const {history} = this.props;
            console.log(res.data);
            if(res.data.success){
                store.set('loggedIn', true);
                store.set('id', res.data.data._id);
                history.push('/home');
            }
        });
    }

    render(){
        return(
            <div>    
                <div className="register-photo">
                    <div className="form-container">
                        <div className="image-holder"></div>
                        <form onSubmit={this.submitData}>
                            <h2 className="text-center"><strong>Create</strong> an account.</h2>
                            <div className="form-group">
                                    <input className="form-control" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required />
                                </div>
                            <div className="form-group">
                                    <input className="form-control" type="text" name="name" placeholder="Name"  onChange={this.handleNameChange} required/>
                                </div>
                            <div className="form-group">
                                    <input className="form-control" type="password" name="password" placeholder="Password"  onChange={this.handlePasswordChange} required/>
                                </div>
                            <div className="form-group">
                                    <input className="form-control" type="password" name="password-repeat" placeholder="Password (repeat)"  onChange={this.handlePassRepChange} required/>
                                </div>
                            <div className="form-group">
                                    <input className="form-control" type="text" name="organisation" placeholder="Organisation Name" onChange={this.handleOrganisationChange} />
                                </div>
                            <div className="form-group">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" />I agree to the license terms.
                                        </label>
                                    </div>
                                </div>
                            <div className="form-group">
                                    <input type="submit" className="btn btn-primary btn-block" value="Sign Up" />
                                </div>
                            <Link className="already" to="/login">Already have an account? Login here.</Link>    
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm;

