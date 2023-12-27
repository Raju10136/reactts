
import React from 'react';
import { useSiteContext } from '../../contexts/SiteProvider';
import { post } from '../../services/smartApiService';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const {setLoading,user,setUser} = useSiteContext();
    const navigate = useNavigate();

    const handleLogin=()=>{
      let data = { username: 'kminchelle',password: '0lelplR',};
      setLoading(true,"Logging in Please Wait....")
      const subscription = post("auth/login",data).subscribe((response)=>{
        setUser(response.data);       
        console.log("output resp9onse " , response);
        setLoading(false);
        navigate('/');
      });
      return () => {
        subscription.unsubscribe();
      };
    }

    return (
        <div className="hero is-fullheight">
        <div className="hero-body is-justify-content-center is-align-items-center">
          <div className="columns is-flex is-flex-direction-column box">
            <div className="column">
              <label htmlFor="email"><i className='fa fa-file'></i>Email</label>
              
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
              <button onClick={()=>handleLogin()} className="button is-primary is-fullwidth" type="submit">
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