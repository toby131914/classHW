import { Link } from "react-router-dom";
import './Splash.css';

function Splash() {
  return (
    <div className="Splash flex-col">
      <Link to="/login" className="title-link">
        災害回報系統
      </Link>
      <span>DIRS <span className="ver">v 1.1.2</span></span>
    </div>
  );
}

export default Splash;
