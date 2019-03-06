import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import UserLayout from "../../hoc/UserLayout";
import { getFeatured } from "../../../actions/siteAction";

class UpdateFeatured extends Component {
  componentDidMount() {
    this.props.dispatch(getFeatured());
  }

  showCategoryItems = () =>
    this.props.site.featured
      ? this.props.site.featured.map(item => (
          <div className="category_item" key={item._id}>
            <Link to={`/admin/update_featured/${item._id}`}>
              {item.lineOne}
            </Link>
          </div>
        ))
      : null;

  render() {
    return (
      <UserLayout>
        <h1>Slider</h1>
        <div className="brands_container">{this.showCategoryItems()}</div>
      </UserLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    site: state.site
  };
};

export default connect(mapStateToProps)(UpdateFeatured);