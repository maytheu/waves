import Slider from "react-slick";
import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../utils/Button";
import { getFeatured } from "../../actions/siteAction";

class HomeSlide extends Component {
  componentDidMount() {
    this.props.dispatch(getFeatured());
  }

  generateSlides = () =>
    this.props.site.featured
      ? this.props.site.featured.map((item, i) => (
          <div key={i}>
            <div
              className="featured_image"
              style={{
                background: `url(${item.images[0].url})`,
                height: `${window.innerHeight}px`
              }}
            >
              <div className="featured_action">
                <div className="tag title">{item.lineOne}</div>
                <div className="tag low_title">{item.lineTwo}</div>
                <div>
                  <Button
                    type="default"
                    title={item.linkTitle}
                    linkTo={item.linkTo}
                    addStyles={{
                      margin: "10px 0 0 0"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      : null;

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true
    };

    return (
      <div className="featured_container">
        <Slider {...settings}>
          {this.generateSlides(this.props.site.featured)}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    site: state.site
  };
};

export default connect(mapStateToProps)(HomeSlide);
