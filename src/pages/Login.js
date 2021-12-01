import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <div className="Login">
      Login
      <button className="Google-bg Login-btn">
      <Link to="/profile" className="login-link">
      Google
      </Link>
      </button>
      <button className="Line-bg Login-btn">LINE</button>
      <button className="FB-bg Login-btn">Facebook</button>
    </div>
  );
}

export default Login;
