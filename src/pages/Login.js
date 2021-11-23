import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <div className="Login">
      Login
      <button className="btnGoogle">
      <Link to="/profile" className="login-link">
      Google
      </Link>
      </button>
      <button className="btnLine">LINE</button>
      <button className="btnFB">Facebook</button>
    </div>
  );
}

export default Login;
