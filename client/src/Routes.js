import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./component/hoc/Layout";
import Home from "./component/home/Home";
import RegisterLogin from "./component/register_login/RegisterLogin";
import Register from "./component/register_login/Register";
import UserDashboard from "./component/user/UserDashboard";
import AuthCheck from "./component/hoc/AuthCheck";
import Shop from "./component/shop/Shop";
import AddProduct from "./component/user/admin/AddProduct";
import ManageCategories from "./component/user/admin/ManageCategories";
import Product from "./component/product/Product";
import UserCart from "./component/user/UserCart";
import UpdateProfile from "./component/user/UpdateProfile";
import ManageSite from "./component/user/admin/ManageSite";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route
            path="/user/dashboard"
            exact
            component={AuthCheck(UserDashboard, true)}
          />
          <Route
            path="/admin/site_info"
            exact
            component={AuthCheck(ManageSite, true, true)}
          />
          <Route
            path="/user/profile"
            exact
            component={AuthCheck(UpdateProfile, true)}
          />
          <Route
            path="/user/cart"
            exact
            component={AuthCheck(UserCart, true)}
          />
          <Route
            path="/admin/add_product"
            exact
            component={AuthCheck(AddProduct, true, true)}
          />
          <Route
            path="/admin/manage_categories"
            exact
            component={AuthCheck(ManageCategories, true, true)}
          />

          <Route
            path="/register"
            exact
            component={AuthCheck(Register, false)}
          />
          <Route
            path="/register_login"
            exact
            component={AuthCheck(RegisterLogin, false)}
          />

          <Route
            path="/product_detail/:id"
            exact
            component={AuthCheck(Product, null)}
          />
          <Route path="/" exact component={AuthCheck(Home, null)} />
          <Route path="/shop" exact component={AuthCheck(Shop, null)} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
