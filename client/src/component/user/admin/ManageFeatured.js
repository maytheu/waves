import React, { Component } from "react";
import { connect } from "react-redux";

import {
  populateFields,
  update,
  generateData,
  isFormValid
} from "../../utils/form/formActions";
import UserLayout from "../../hoc/UserLayout";
import FormField from "../../utils/form/FormField";
import { getFeaturedDetail, updateFeatured } from "../../../actions/siteAction";
import FileUpload from "../../utils/form/FileUpload";

class ManageFeatured extends Component {
  state = {
    formError: false,
    formSuccess: false,
    featuredId: "",
    formdata: {
      lineOne: {
        element: "input",
        value: "",
        config: {
          label: "line One",
          name: "lineOne_input",
          type: "text",
          placeholder: "Enter the line one text"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true
      },
      lineTwo: {
        element: "input",
        value: "",
        config: {
          label: "line Two",
          name: "lineOne_input",
          type: "text",
          placeholder: "Enter the line two text"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true
      },
      linkTitle: {
        element: "input",
        value: "",
        config: {
          label: "link Title",
          name: "lineOne_input",
          type: "text",
          placeholder: "Enter the link title"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true
      },
      linkTo: {
        element: "input",
        value: "",
        config: {
          label: "link To",
          name: "lineOne_input",
          type: "text",
          placeholder: "Enter the linking page"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true
      },
      images: {
        value: [],
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationMessage: "",
        showlabel: false
      }
    }
  };

  componentDidMount() {
    const featuredId = this.props.match.params.id;
    this.props.dispatch(getFeaturedDetail(featuredId)).then(() => {
      const newFormData = populateFields(
        this.state.formdata,
        this.props.site.featuredDetail
      );
      this.setState({
        featuredId,
        formdata: newFormData
      });
    });
  }

  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, "featured");
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "featured");
    let formIsValid = isFormValid(this.state.formdata, "featured");

    if (formIsValid) {
      this.props
        .dispatch(updateFeatured(dataToSubmit, this.state.featuredId))
        .then(() => {
          if (this.props.site.featuredUpdate.success) {
            this.setState({ formSuccess: true });
            this.props.history.push("/admin/update_featured");
          } else {
            this.setState({
              formError: true
            });
          }
        });
    }
  };

  imagesHandler = images => {
    const newFormData = {
      ...this.state.formdata
    };
    newFormData["images"].value = images;
    newFormData["images"].valid = true;

    this.setState({
      formdata: newFormData
    });
  };

  // onRemove = id => {
  //   console.log(id);
  //   axios.delete(`${SITE_SERVER}/deleteImage/${id}`).then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   //   });
  // {this.props.site.featuredDetail ? (

  //   this.props.site.featuredDetail.images.length > 0 ? (
  //     <div
  //       className="dropzone_box"
  //       style={{ width: "100%" }}
  //       onClick={() =>
  //         this.onRemove(
  //           this.props.site.featuredDetail.images[0].public_id
  //         )
  //       }
  //     >
  //       <div
  //         className="wrap"
  //         style={{
  //           background: `url(${
  //             this.props.site.featuredDetail.images[0].url
  //           }) no-repeat`,
  //           border: "0px",
  //           backgroundPosition: "left center !important"
  //         }}
  //       />
  //     </div>
  //   ) : (
  //     <FileUpload
  //       imagesHandler={images => this.imagesHandler(images)}
  //       reset={this.state.formSuccess}
  //       type={this.props.site.featuredDetail}
  //     />
  //   )
  // ) : null}
  // };

  render() {
    return (
      <UserLayout>
        <form onSubmit={event => this.submitForm(event)}>
          <h1>Slider</h1>
          <FileUpload
            imagesHandler={images => this.imagesHandler(images)}
            reset={this.state.formSuccess}
            type={this.props.site.featuredDetail}
          />
          <FormField
            id={"lineOne"}
            formdata={this.state.formdata.lineOne}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={"lineTwo"}
            formdata={this.state.formdata.lineTwo}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={"linkTitle"}
            formdata={this.state.formdata.linkTitle}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={"linkTo"}
            formdata={this.state.formdata.linkTo}
            change={element => this.updateForm(element)}
          />
          <div>
            {this.state.formError ? (
              <div className="error_label">Please check your data</div>
            ) : null}
            <button onClick={event => this.submitForm(event)}>Update</button>
          </div>
        </form>
      </UserLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    site: state.site
  };
};

export default connect(mapStateToProps)(ManageFeatured);
