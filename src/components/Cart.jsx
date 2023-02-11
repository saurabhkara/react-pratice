import React, { useContext, useEffect, useState } from "react";
import { ReactContext } from "../Context";

export default function Cart() {
  const [state, dispatch] = useContext(ReactContext);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    let total = state.cart.reduce((total, item) => {
      total = total + item.price * item.quantity;
      return total;
    }, 0);
    setAmount(total);
  }, [state.Cart, dispatch]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <p>Total Amount :${amount}</p>
        </div>
      </div>
      {state.cart.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              backgroundColor: "pink",
              justifyContent: "space-between",
              marginTop: 25,
              height: 50,
              alignItems: "center",
              padding: 5,
              fontSize: 20,
            }}
          >
            <div>{item.title.slice(0, 12)}</div>
            <div>{item.price}</div>
            <div>{item.quantity}</div>
            <div
              onClick={() => dispatch({ type: "REMOVE_PROD", payload: item })}
              style={{ backgroundColor: "red", padding: 4 }}
            >
              Delete Item
            </div>
          </div>
        );
      })}
    </div>
  );
}
