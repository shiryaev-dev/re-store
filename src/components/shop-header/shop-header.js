import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './shop-header.css';

const ShopHeader = ({ orderTotal, orderItemsCount }) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart" >
                    <i className="cart-icon fa fa-shopping-cart" />
                    {orderItemsCount} items (${orderTotal})</div>
            </Link>
        </header>
    );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, orderItemsCount } }) => {
    return { orderTotal, orderItemsCount }
}

export default connect(mapStateToProps)(ShopHeader);