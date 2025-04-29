import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

function App() {
  const [searchBar, setSearchBar] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home searchBar={searchBar} setSearchBar={setSearchBar} openCart={openCart} setOpenCart={setOpenCart} />} />
          <Route path="/shop" element={<Shop setSearchBar={setSearchBar} openCart={openCart} setOpenCart={setOpenCart} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
