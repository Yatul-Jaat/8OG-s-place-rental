import React from "react";
import Login from "./consumer/pages/1_login_sign_setup/Login";
import MainPage from "./consumer/pages/2_main_page/MainPage";
import AddCart from "./consumer/pages/3_add_cart_page/AddCart";
import SelectedProduct from "./consumer/pages/4_selected_product_setup/SelectedProduct";
import { Navigate, Route, Routes } from "react-router";
import Layout from "./consumer/components/layout/Layout";
import Billing from "./consumer/pages/6_billing_page/Billing";
import { SelectedContext, useSelectContext } from "./consumer/components/context/useSelectedContext";
import LayoutAdmin from "./admin/components/Layout/LayoutAdmin";
import OwnProductList from "./admin/pages/2_own_product_review/OwnProductList";
import Update from "./admin/pages/4_update_service/Update";
import LoginAdmin from "./admin/pages/1_login_signup_setup/LoginAdmin";
import Addproduct from "./admin/pages/3_add_service/AddProduct";
import AddProduct from "./admin/pages/3_add_service/AddProduct";

const App = () => {
  const {localUser}=useSelectContext()
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="cart" element={<AddCart />} />
        <Route path="billing" element={<Billing />} />
        <Route path={`product`} element={<SelectedProduct />} />
      </Route>
      <Route path="/login" element={localUser? <Navigate to="/"/>: <Login />} />
      
      <Route path="/admin" element={<LayoutAdmin/>}>
        <Route index element={<OwnProductList/>}/>
        <Route path="update" element={<Update/>}/>
      </Route>
      <Route path="/admin/add" element={<AddProduct/>} />
      <Route path="/admin/login" element={localUser?<Navigate to="/admin"/>:<LoginAdmin/>}/>
    </Routes>
  );
};

export default App;
