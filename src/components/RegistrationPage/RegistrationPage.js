import React, {Component} from 'react';
import LoginPage from "../LoginPage/LoginPage";

class RegistrationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            login: '',
            confirmPassword: '',
        }
    }

    onChangeLogin(element) {
        this.setState({login: element.target.value})
    }

    onChangePassword(element) {
        this.setState({password: element.target.value})
    }

    onChangeConfirmPassword(element) {
        this.setState({confirmPassword: element.target.value})

    }

    onClickButton() {
        if (this.state.password === this.state.confirmPassword) {
            this.props.history.push('/login')
        } else {
            alert("пароль не совпадает");
        }
    }

    // задание на почитать/посмотреть
    // функции массива - findIndex, map, splice, find, filter, forEtch
    // не обязательно, но часто встречается в работе - includes, slice, concat, join

//     задание 2:
//         1. Создать папку consts в корне проекта.
//      2. в неё папку products
//     2.1 новы джеэсник сюда
//     3. скачать 10 картинок товара
//     4. в ней создаёшь масив состоящий из 10 объектов товара, в которые кладёшь <img...
// {name: название, img: тег имг, price: цена инт, discription: описаниие, currency: валюта, count: колечество 0 по умолч}
//     почитать про react Redux ;

    // задание 3:
    //     1. создаём новый роутрер в  APP
    //     2. в папку компон6ент добавить папку Projects
    //     3. в папке проджектс джеэсник с классом команда rcc
    // 4. импортнуть в роутер класс
    // 5. при успешном логине

    // задание 4:
    //     1. создаём в папке компаниентс папку интернет магазин там создаём джэсник
    // 2. там создаём класс
    // 3. его в АПП роуты на него
    // 4. 2-3 создать корзину в отдельной папке

    render() {
        return (
            <div>
                <input placeholder='Имя пользователя' onChange={this.onChangeLogin.bind(this)}
                       value={this.state.login}/>
                <br/>
                <br/>
                <input placeholder="Пароль" onChange={this.onChangePassword.bind(this)}
                       value={this.state.password} type="password"/>
                <br/>
                <br/>
                <input placeholder="Повторите пароль" onChange={this.onChangeConfirmPassword.bind(this)}
                       value={this.state.confirmPassword} type="password"/>
                <br/>
                <br/>

                <button onClick={this.onClickButton.bind(this)}>Registration</button>
            </div>)


    }
}

export default RegistrationPage;