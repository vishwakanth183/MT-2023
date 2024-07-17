import React from "react";
import SigninStyle from "./signin.module.css";
import { useNavigate } from "react-router-dom";

import GoogleIcon from "../../assets/google.png";
import TwitterIcon from "../../assets/fb.png";
import LinkedInIcon from "../../assets/linkedin.png";
import FbIcon from "../../assets/twitter.png";
import Illustation from "../../assets/Illustration.png";

import { Formik } from "formik";
import * as Yup from "yup";

const Signin = () => {
  // Variable to handle navigation
  const navigation = useNavigate();

  // Variable to handle validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special symbol"
      )
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", checkboxValue: false }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission logic here
        navigation("/home");
        console.log("Submitted values:", values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          {/* Left View */}
          <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
            {/* <div className='d-flex flex-column justify-self-end'>yupp</div> */}
            <div>
              <h3>Sign In</h3>
              <p className="mt-1">
                New user?{" "}
                <span className="text-primary">create an account</span>
              </p>
              <div
                className={`${SigninStyle.signinContainer} d-flex flex-column w-400`}
              >
                {/* <input type="email" class="form-control" placeholder='Username or email' className='mb-2 p-2' />
                <input type="password" class="form-control" placeholder='Password' className='mt-1 p-2' /> */}
                <input
                  type="email"
                  className={`form-control mb-2 p-2 border border-1 border-dark`}
                  placeholder="Username or email"
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {errors.email && touched.email && (
                  <div className="text-danger mb-1">{errors.email}</div>
                )}
                <input
                  type="password"
                  className={`form-control mt-1 p-2 border border-1 border-dark`}
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("passwword")}
                />
                {errors.password && (
                  <div className="text-danger mb-1 mt-2">{errors.password}</div>
                )}

                <div class="form-check mt-3 d-flex align-items-center">
                  <input
                    type="checkbox"
                    value={values.checkboxValue}
                    onChange={handleChange("checkboxValue")}
                    onBlur={handleBlur("checkboxValue")}
                    className={`${SigninStyle.checkboxstyle} form-check-input`}
                  />
                  <span className="mx-3">Keep me signed in</span>
                </div>
                <button
                  className="bg-dark text-white py-2 mt-3"
                  disabled={!isValid}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>

                {/* Social Signin */}
                <div className="d-flex flex-row mt-5 align-items-center">
                  <div
                    style={{
                      width: "30%",
                      height: 2,
                      backgroundColor: "grey",
                      opacity: 0.5,
                    }}
                  ></div>
                  <span
                    className="d-flex justify-content-center d-inline"
                    style={{ width: "45%" }}
                  >
                    Or Sign In With
                  </span>
                  <div
                    style={{
                      width: "30%",
                      height: 2,
                      backgroundColor: "grey",
                      opacity: 0.5,
                    }}
                  ></div>
                </div>

                <div className="d-flex flex-row justify-content-around px-5 mt-4">
                  <img src={GoogleIcon} style={{ height: 40, width: 40 }} />
                  <img src={FbIcon} style={{ height: 40, width: 40 }} />
                  <img src={LinkedInIcon} style={{ height: 40, width: 40 }} />
                  <img src={TwitterIcon} style={{ height: 40, width: 40 }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right View */}
          <div className="d-none col-sm-12 col-lg-6 d-lg-flex justify-content-center">
            <img src={Illustation} style={{ height: "100%", width: 230 }} />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Signin;
