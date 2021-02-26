import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total=cart.reduce((total,prd)=>total+prd.price,0);
    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>15)
    {
        shipping =4.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    const tax =(total/10).toFixed(2);
    const grandTotal=(total+Number(tax)+shipping).toFixed(2);


    return (
        <div>
            <h4>Order summary</h4>
            <p>Items orders:{cart.length}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p>Product price{total}</p>
            <p><small>Tax+Vat:{tax}</small></p>
            <p>Total price:{grandTotal}</p>
        </div>
    );
};

export default Cart;