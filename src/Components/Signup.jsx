import React, { Component } from "react";
import Register1 from "./Register1";
import Register2 from "./Register2";
import Register3 from "./Register3";
import Register from "./Register";
import Choose from "./Choose";
import PropTypes from "prop-types";

export default class Signup extends Component {
  state = {
    step: 1,
    username: "",
    email: "",
    password: "",
    cpassword: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { email, username, password, cpassword } = this.state;
    const values = { email, username, password, cpassword };

    switch (step) {
      case 1:
        return <Register nextStep={this.nextStep} />;
      case 2:
        return (
          <Register1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Register2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Register3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Choose
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
    }
  }
}

Signup.propTypes = {
  nextStep: PropTypes.func,
  handleChange: PropTypes.func,
  prevStep: PropTypes.func,
};
