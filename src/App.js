import HomePage from "./compotes/HomePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./compotes/Nagition/NavBar";
import Footer from "./compotes/Nagition/Footer";
import { Fragment, useReducer } from "react";
import Products from "./compotes/Products";
import Product from "./compotes/Product";
import Cart from "./compotes/cart/Cart";
import Checkout from "./compotes/cart/Checkout";
import CheckoutShipping from "./compotes/cart/CheckoutShipping";
import CheckoutPayment from "./compotes/cart/CheckoutPayment";
import Login from "./compotes/page/Login";
import Register from "./compotes/page/Register";
import ForgottenPassWord from "./compotes/page/ForgottenPassWord";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseProvider } from "./context/Context";
import STATE from "./context/initState";
import Reducer from "./context/Reducer";
import ProductList from "./compotes/product/ProductList";

function App() {
  const localData = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : STATE;
  const [state, dispatch] = useReducer(Reducer, localData);
  return (
    <UseProvider value={{ state, dispatch }}>
      <Fragment>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}>
            {" "}
          </Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/productslist"
            element={<ProductList></ProductList>}></Route>
          <Route path="/products/:id" element={<Product></Product>}>
            {" "}
          </Route>
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route
            path="/checkout-shipping"
            element={<CheckoutShipping></CheckoutShipping>}></Route>
          <Route
            path="/checkout-payment"
            element={<CheckoutPayment></CheckoutPayment>}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/forgotten-password"
            element={<ForgottenPassWord></ForgottenPassWord>}></Route>
        </Routes>

        <Footer></Footer>
        <ToastContainer
          position="top-right"
          autoClose={600}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Fragment>
    </UseProvider>
  );
}

export default App;
