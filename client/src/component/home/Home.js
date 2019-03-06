import React, { Component } from "react";
import { connect } from "react-redux";

import HomeSlide from "./HomeSlide";
import HomePromotion from "./HomePromotion";
import {
  getProductsByArrival,
  getProductsBySell
} from "../../actions/productAction";
import CardBlock from "../utils/CardBlock";
import { getFeatured } from "../../actions/siteAction";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
    this.props.dispatch(getFeatured());
  }
  render() {
    return (
      <div>
        <HomeSlide />
        <CardBlock
          list={this.props.products.bySell}
          title="Best Selling Guiters"
          featured={this.props.site}
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
    products: state.products,
    site: state.site
  };
};

export default connect(mapStateToProps)(Home);
