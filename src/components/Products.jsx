import React, { useContext } from 'react'
import { ReactContext } from '../Context';

export default function Products({item}) {
    const [,dispatch] = useContext(ReactContext);
  return (
    <div style={{ width:200,height:250,backgroundColor:'gray', margin:10}}>
        <img src={item.image}  style={{height:150, width:180,objectFit:'cover', marginTop:5}} alt={'product'}/>
        <p> {item.title.slice(0,10)}</p>
        <div style={{display:'flex',justifyContent:'space-between',padding:5}}>
           <button onClick={()=>dispatch({type:'ADD_PROD',payload:item})}>Add to Cart</button>
           <button onClick={()=>dispatch({type:'REMOVE_PROD',payload:item})}>Remove item</button>
        </div>
    </div>
  )
}
