import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./Redux/Store";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetailModal from "./Components/ProductDetailModal";
import Cart from "./Components/Cart";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [searchBar, setSearchBar] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [productDetail, setProductDetail] = useState<boolean>(false);
  
  const ModalAndCart = () => {
    return (
      <>
        <ProductDetailModal productDetail={productDetail} setProductDetail={setProductDetail} />
        <Cart openCart={openCart} setOpenCart={setOpenCart} />
      </>
    )
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <ModalAndCart />
        <Routes>
          <Route path="/" element={<Home searchBar={searchBar} setSearchBar={setSearchBar} setOpenCart={setOpenCart} setProductDetail={setProductDetail} />} />
          <Route path="/shop" element={<Shop searchBar={searchBar} setSearchBar={setSearchBar} openCart={openCart} setOpenCart={setOpenCart} setProductDetail={setProductDetail} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
