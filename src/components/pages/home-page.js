import React, { Fragment } from 'react';
import Booklist from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {

    return (
        <Fragment>
            <Booklist />
            <ShoppingCartTable />
        </Fragment>
    )
}

export default HomePage;