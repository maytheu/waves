import React, { Component } from "react";

import FormField from "../../utils/form/FormField";
import {
  update,
  generateData,
  isFormValid
} from "../../utils/form/formActions";
import Axios from "axios";
import { USER_SERVER } from "../../utils/urlMisc";

class ResetPassword extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, "reset_mail");
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "reset_mail");
    let formIsValid = isFormValid(this.state.formdata, "reset_mail");

    if (formIsValid) {
      Axios.post(`${USER_SERVER}/reset_user`, dataToSubmit).then(response => {
        if (response.data.success) {
          this.setState({ formSuccess: true });
        } else {
          this.setState({ formError: "Invalid email" });
        }
      });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Reset Password</h1>
        <form onSubmit={event => this.submitForm(event)}>
          <FormField
            id={"email"}
            formdata={this.state.formdata.email}
            change={element => this.updateForm(element)}
          />
          {this.state.formSuccess ? (
            <div className="form_success">
              Check your email to reset password
            </div>
          ) : null}
          {this.state.formError ? (
            <div className="error_label">Please check your data</div>
          ) : null}
          <button onClick={event => this.submitForm(event)}>
            Reset Password
          </button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
