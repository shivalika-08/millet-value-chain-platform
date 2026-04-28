import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // for cart item
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // for orders
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  // adding product to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);

      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item,
        );
      }

      return [...prev, product];
    });
  };

  // to place an order
  const placeOrder = () => {
    if (cartItems.length === 0) return;

    const newOrder = {
      id: "ORD" + Math.floor(Math.random() * 1000),
      date: new Date().toISOString().split("T")[0],
      items: cartItems,
      total: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      ),
      status: "Confirmed",
    };

    setOrders((prev) => [...prev, newOrder]);
    setCartItems([]);
  };

  // increase button-cart
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // decrease button-cart
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // delet button-cart
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };



  // taaki refresh hone pe cart/dashboard empty na ho
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        orders,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
