import React, {Component} from 'react';
import './ethernet-shops.css'
import {connect} from "react-redux";
import {addProductToBasket, productCountMinus, productCountPlus} from "../../../ducks/ethernetShopsReducer";
import {gamepads} from "../../../consts/products/Products";

class EthernetShops extends Component {

    addProductToBasket(id){
        this.props.dispatch(addProductToBasket(id))
    }


    productCountPlus(id) {

        this.props.dispatch(productCountPlus(id))
    }

    productCountMinus(id) {
        this.props.dispatch(productCountMinus(id))
    }

    render() {
        return (
            <div>
                <div className={'textsh'}>MAXSHOP</div>
                <p>Корзина {this.props.basketProducts.length}</p>
                <div className={'shops'}>
                    <div className={'products'}>
                        {this.props.products.map(gamepad => <div className={'img'} key={gamepad.id}>
                            <div>{gamepad.img}</div>
                            <div className={'name'}>{gamepad.name}</div>
                            <div className={'price'}>{gamepad.price}</div>
                            <div>{gamepad.currency}</div>
                            <div>
                                <button onClick={this.productCountMinus.bind(this, gamepad.id)}>-</button>
                                <div style={{display: 'inline'}}>{gamepad.count}</div>
                                <button onClick={this.productCountPlus.bind(this, gamepad.id)}>+</button>
                            </div>
                            <button onClick={this.addProductToBasket.bind(this, gamepad.id)}>Добавить в корзину</button>
                            <div>{gamepad.description}</div>
                        </div>)}
                    </div>
                    <button onClick={() => this.props.history.push('/ethernet-shops/basket')}>Корзина</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.ethernetShopsReducer.products,
        basketProducts: state.ethernetShopsReducer.basketProducts,
    }
};

export default connect(mapStateToProps)(EthernetShops);