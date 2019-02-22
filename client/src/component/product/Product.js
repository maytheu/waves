import React, { Component } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import PageTop from "../utils/PageTop";
import {
  getProductDetail,
  clearProductDetail
} from "../../actions/productAction";
import ProdInfo from "./ProdInfo";
import ProdImg from "./ProdImg";
import { addToCart } from "../../actions/userActions";

class Product extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getProductDetail(id));
    if (!this.props.products.prodDetail) {
      this.props.history.push("/");
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  addToCartHandler(id) {
    if (this.props.user.userData.isAuth) {
      this.props.dispatch(addToCart(id));
    } else {
      this.props.history.push("/register_login");
    }
  }

  render() {
    return (
      <div>
        <PageTop title="Product Detail" />
        <div className="container">
          {this.props.products.prodDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">
                <div style={{ width: "500px" }}>
                  <ProdImg detail={this.props.products.prodDetail} />
                </div>
              </div>
              <div className="right">
                <ProdInfo
                  addToCart={id => this.addToCartHandler(id)}
                  detail={this.props.products.prodDetail}
                />
              </div>
            </div>
          ) : (
            <CircularProgress style={{ color: "#00bcd4" }} thickness={7} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    user: state.user
  };
};

export default connect(mapStateToProps)(Product);
