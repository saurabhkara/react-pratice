import "./App.css";
import { useContext, useEffect } from "react";
import { ReactContext } from "./Context";
import { getProducts } from "./apihelper";
import Main from "./components/Main";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const [, dispatch] = useContext(ReactContext);

  useEffect(() => {
    getProducts().then((products) => {
      dispatch({ type: "LOAD_PRODUCTS", payload: products.data });
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <header
          style={{
            backgroundColor: "cyan",
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <div>
          <Link to='/'> Shopping Site</Link>         
          </div>
          <div>
            <Link to='/cart'>Cart</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
