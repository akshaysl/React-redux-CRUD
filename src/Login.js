import React from "react";
import { connect } from "react-redux";
import { setInputUser, setInputPass, loginClick } from "./actions";
import "./Login.css";

function Login(props) {
  if (!props.isLoggedIn) {
    return (
      <div>
        <div class="login-wrap">
          <div class="login-html">
            <h1
              style={{
                textAlign: "center",
                color: "skyblue",
                marginBottom: 50
              }}
            >
              Northwinds Inc.
            </h1>
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
            <label for="tab-1" class="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" />
            <label for="tab-2" class="tab">
              Sign Up
            </label>
            <div class="login-form">
              <div class="sign-in-htm">
                <div class="group">
                  <label for="user" class="label">
                    Username
                  </label>
                  <input
                    id="user"
                    type="text"
                    class="input"
                    value={props.userNameInput}
                    onChange={props.setInputUser}
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    value={props.passwordInput}
                    onChange={props.setInputPass}
                  />
                </div>
                <div class="group">
                  <input id="check" type="checkbox" class="check" checked />
                  <label for="check">
                    <span class="icon"></span> Keep me Signed in
                  </label>
                </div>
                <div class="group">
                  <input
                    type="submit"
                    class="button"
                    value="Sign In"
                    onClick={props.loginClick}
                  />
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
              <div class="sign-up-htm">
                <div class="group">
                  <label for="user" class="label">
                    Username
                  </label>
                  <input id="user" type="text" class="input" />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Repeat Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Email Address
                  </label>
                  <input id="pass" type="text" class="input" />
                </div>
                <div class="group">
                  <input type="submit" class="button" value="Sign Up" />
                </div>
                {/* <div class="hr"></div> */}
                <div class="foot-lnk">
                  <label for="tab-1">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userNameInput: state.userNameInput,
    passwordInput: state.passwordInput,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInputUser: event => dispatch(setInputUser(event.target.value)),
    setInputPass: event => dispatch(setInputPass(event.target.value)),
    loginClick: () => dispatch(loginClick())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
