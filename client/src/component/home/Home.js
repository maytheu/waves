import React, { Component } from "react";
import { connect } from "react-redux";

import HomeSlide from "./HomeSlide";
import HomePromotion from "./HomePromotion";
import {
  getProductsByArrival,
  getProductsBySell
} from "../../actions/productAction";
import CardBlock from "../utils/CardBlock";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }
  render() {
    return (
      <div>
        <HomeSlide />
        <CardBlock
          list={this.props.products.bySell}
          title="Best Selling Guiters"
        />
        <HomePromotion />
        <CardBlock
          list={this.props.products.byArrival}
          title="New Arrival"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Home);
