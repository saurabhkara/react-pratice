import React, { createContext, useReducer } from "react";

export const ReactContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NUM":
      console.log(state);
      return { ...state, num: state.num + action.payload };
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PROD":
      let item = {
        id: action.payload.id,
        image: action.payload.image,
        title: action.payload.title,
        price: action.payload.price,
        quantity: parseInt(1),
      };
      let arr = []
      if(state.cart.length===0){
        arr.push(item)
      }else{
        let flag=false;
        arr=state.cart.map((it)=>{
          if(it.id === action.payload.id){
            flag=true;
            it.quantity= it.quantity + 1;
          }
          return it;
        })
        if(!flag){
          arr.push(item);
        }
      }
      return {
        ...state,
        cart:arr
      };
    case "REMOVE_PROD":
      return { ...state, cart:state.cart.filter((it)=>it.id !==action.payload.id) };
    default:
      return state;
  }
};

const initialState = {
  num: 0,
  products: [],
  cart: [],
};

const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ReactContext.Provider value={[state, dispatch]}>
      {children}
    </ReactContext.Provider>
  );
};

export default ContextWrapper;
