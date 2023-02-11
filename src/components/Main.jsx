import React, { useContext } from 'react'
import Products from './Products';
import { ReactContext } from '../Context';

export default function Main() {
    const [state,] = useContext(ReactContext);
  return (
    <main style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
    {
      state.products.map((prod, index)=>{
        return(
          <Products key={index} item={prod}/>
        )
      })
    }
  </main>
  )
}
