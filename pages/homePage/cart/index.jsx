import React from 'react'
import Sdata from '../Shopdata'
import Data from '../data'
import AddToCart from '../value'
function index() {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  )

  // prodcut qty total
  return (
    <>
      <h1>There's No Data right now</h1>
    </>
  )
}

export default index
