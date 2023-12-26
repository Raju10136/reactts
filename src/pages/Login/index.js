
import React from 'react';
import { useSiteContext } from '../../contexts/SiteProvider';

const Login=()=>{
    const {isLoading} = useSiteContext();

    return (
        <div className="hero is-fullheight">
        <div className="hero-body is-justify-content-center is-align-items-center">
          <div className="columns is-flex is-flex-direction-column box">
            <div className="column">
              <label htmlFor="email">Email</label>
              <input
                className="input is-primary"
                type="text"
                placeholder="Email address"
              />
            </div>
            <div className="column">
              <label htmlFor="Name">Password</label>
              <input
                className="input is-primary"
                type="password"
                placeholder="Password"
              />
              <a href="forget.html" className="is-size-7 has-text-primary">
                forget password?
              </a>
            </div>
            <div className="column">
              <button className="button is-primary is-fullwidth" type="submit">
                Login
              </button>
            </div>
            <div className="has-text-centered">
              <p className="is-size-7">
                {" "}
                Don't have an account?{" "}
                <a href="#" className="has-text-primary">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login