import Sdata from './Shopdata'
import Data from './data'
const { productItems } = Data
const { shopItems } = Sdata
const addToCart = () => {
  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      )
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  return addToCart
}

export default addToCart

const decreaseQty = (product) => {
  const productExit = CartItem.find((item) => item.id === product.id)

  if (productExit.qty === 1) {
    setCartItem(CartItem.filter((item) => item.id !== product.id))
  } else {
    setCartItem(
      CartItem.map((item) =>
        item.id === product.id
          ? { ...productExit, qty: productExit.qty - 1 }
          : item
      )
    )
  }
}
