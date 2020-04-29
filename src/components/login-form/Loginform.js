import React, {Component} from 'react';
import logo from './../../media/logo.png';
import './Loginform.css';
//import axios from 'axios';

class LoginForm extends Component{
    constructor(props){
        super();
        
        this.state = {
            email: '',
            password: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
        console.log(this.state.password)
    }

    submitData = (e) => {
        e.preventdefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        
        axios.post("user/authenticate", user).then(res => {
            
            const {history} = this.props;
            console.log(res.data);
            if(res.data.success){
                store.set('loggedIn', true);
                store.set('id', res.data.user.id);
                history.push('/maps');
            }
        });
    }

    render(){
        return(
            <div>
                <div className="login-clean">
                <form method="post" onSubmit={this.submitData}>
                    <div className="illustration">
                        <img src={logo} alt="logo" />
                    </div> 
                    <div className="form-group">
                        <input className="form-control" type="email" name="email" placeholder="Email" required onChange={this.handleEmailChange} value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Password" required onChange={this.handlePasswordChange} value={this.state.password}/>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary btn-block" value="Log In" type="submit" />
                    </div>
                    
                </form>
            </div>
            </div>
        )
    }
}

export default LoginForm;