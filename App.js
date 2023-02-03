import './index.css';
import background from "./image/2.png"
  function log () {
    return (
      <div>
        <title>Login</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <div className="background">
          <img src={background} alt="back" className="back" /> 
        </div>
        <form>
          <h3> Smart Data Center </h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or ID" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button>Log In</button>
          <div className="social">
            <div className="forgotten"> <a href="#"> Forgot password? </a></div>
            <div className="signup"> <a href="#"> Sign Up</a></div>
          </div>
        </form>
      </div>
    );
  }
  export default log;