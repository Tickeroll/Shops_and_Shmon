import React, {Component} from 'react';
import './login-page.css'

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        }
    }

    onChangeLogin(element) {
        this.setState({login: element.target.value})
    }

    onChangePassword(element) {
        this.setState({password: element.target.value})
    }

    render() {
        return (
            <div className= {'frontstyle'}>
                <p className="frontText"><h1>MAXSHOP</h1></p>

                <div className="form-login">

                    <input className="inputstyle" placeholder="Логин" onChange={this.onChangeLogin.bind(this)} value={this.state.login}/>
                    <br/>
                    <br/>
                    <input className="inputstyle" placeholder="password" onChange={this.onChangePassword.bind(this)}
                           value={this.state.password} type="password"/>
                    <br/>
                    <button className={'message'} onClick={() => alert(this.state.login + ' ' + this.state.password)}>Login</button>

                    <button className={'message'} onClick={() => this.props.history.push('/registration')}>Registration</button>
                </div>
                <p><h2 className={'h2'}>Воидите или зарегестрируйтесь</h2></p>
            </div>
        );
    }
}

export default LoginPage;