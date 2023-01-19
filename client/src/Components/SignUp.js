import React from "react";
import { ButtonContained } from "./Buttons/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "../CSS/form.css";
function SignUp(props) {
  const { openSignup, closeSignup } = props;
  const handleClose = () => {
    closeSignup();
    setIsSubmitting(false);
    setFormErrors({});
    setFormValues(initialValues);
  };

  const initialValues = {
    fname: "",
    lname: "",
    dob: null,
    gender: null,
    email: "",
    password: "",
    phone: null,
    streetaddress: "",
    city: "",
  };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const submitForm = () => {
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formErrors);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validate = (values) => {
    let errors = {};
    const regexEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    const regexPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (!regexPassword.test(values.password)) {
      errors.password = "Password must contain number, alphabet and symbol";
    }
    if (!values.dob) {
      errors.dob = "Cannot be blank";
    }
    if (!values.fname) {
      errors.fname = "Cannot be blank";
    }
    if (!values.lname) {
      errors.lname = "Cannot be blank";
    }
    if (!values.streetaddress) {
      errors.streetaddress = "Cannot be blank";
    }
    if (!values.city) {
      errors.city = "Cannot be blank";
    }
    if (!values.phone) {
      errors.phone = "Cannot be blank";
    } else if (isNaN(values.phone)) {
      errors.phone = "Must be number";
    } else if (values.phone.length !== 10) {
      errors.phone = "Must be 10 digits";
    }
    if (!values.gender) {
      errors.gender = "Cannot be blank";
    }
    return errors;
  };
  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);

  return (
    <Dialog
      open={openSignup}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#fff",
          borderRadius: "15px",
          width: "300px",
          height: "auto",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          padding: "20px",
        },
      }}
    >
      <div className="close">
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="title">
        <h1>Register</h1>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="entry name">
          {/* <label for="name">Name</label> */}
          <div className="subentry">
            <div className="nameEnter">
              <input
                type="text"
                id="fname"
                placeholder="First Name"
                name="fname"
                value={formValues.fname}
                onChange={handleChange}
                className={formErrors.fname && "input-error"}
              />
              {formErrors.fname && (
                <span
                  className="error"
                  style={{ color: "red", fontSize: "13px" }}
                >
                  {formErrors.fname}
                </span>
              )}
            </div>
            <div className="nameEnter">
              <input
                type="text"
                id="lname"
                placeholder="Last Name"
                name="lname"
                value={formValues.lname}
                onChange={handleChange}
              />
              {formErrors.lname && (
                <span
                  className="error"
                  style={{ color: "red", fontSize: "13px" }}
                >
                  {formErrors.lname}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="entry dob">
          <input
            type="date"
            id="dob"
            name="dob"
            value={formValues.dob}
            onChange={handleChange}
          />
          {formErrors.dob && (
            <span className="error" style={{ color: "red", fontSize: "13px" }}>
              {formErrors.dob}
            </span>
          )}
        </div>
        {/*<div className="entry gender">
            <div className="gender">
              <div className="gender-element">
                <input
                  id="gender"
                  type="radio"
                  value="male"
                  name="gender"
                  onChange={handleChange}
                />
                <label for="male">Male</label>
              </div>
              <div className="gender-element">
                <input
                  id="gender"
                  type="radio"
                  value="female"
                  name="gender"
                  onChange={handleChange}
                />
                <label for="female">Female</label>
              </div>
              <div className="gender-element">
                <input
                  id="gender"
                  type="radio"
                  value="other"
                  name="gender"
                  onChange={handleChange}
                />
                <label for="other">Other</label>
              </div>
              {formErrors.gender && (
                <span
                  className="error"
                  style={{ color: "red", fontSize: "13px" }}
                >
                  {formErrors.gender}
                </span>
              )}
            </div>
          </div>*/}

        <div className="entry email">
          {/* <label for="email">Email</label> */}
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <span className="error" style={{ color: "red", fontSize: "13px" }}>
              {formErrors.email}
            </span>
          )}
        </div>
        <div className="entry password">
          {/* <label for="password">Password</label> */}
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <span className="error" style={{ color: "red", fontSize: "13px" }}>
              {formErrors.password}
            </span>
          )}
        </div>

        <div className="entry phone">
          {/* <label for="phone">Phone Number</label> */}
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          {formErrors.phone && (
            <span className="error" style={{ color: "red", fontSize: "13px" }}>
              {formErrors.phone}
            </span>
          )}
        </div>
        {/*<div className="entry">
          {/* <label for="address">Address</label> }
          <div className="subentry">
            <input
              type="text"
              id="streetaddress"
              placeholder="Street"
              name="streetaddress"
              value={formValues.streetaddress}
              onChange={handleChange}
            />
            {formErrors.streetaddress && (
              <span
                className="error"
                style={{ color: "red", fontSize: "13px" }}
              >
                {formErrors.streetaddress}
              </span>
            )}
            <input
              type="text"
              id="city"
              placeholder="City"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            />
            {formErrors.city && (
              <span
                className="error"
                style={{ color: "red", fontSize: "13px" }}
              >
                {formErrors.city}
              </span>
            )}
          </div>
        </div>*/}
        <ButtonContained btntitle="Register" Type="submit" />
      </form>
    </Dialog>
  );
}

export default SignUp;
