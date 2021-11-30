import Switch from "../components/Switch";
import './Profile.css';

import user from "../assets/img/user.png";

function Profile() {
  return (
    <div className="header-bg">
      <div className="Profile">
        <div className="header">
          <div className="header-item">Settings</div>
          <div className="header-item-main">Profile</div>
          <div className="header-item">Logout</div>
        </div>
        <div className="user-info">
          <div className="user-blank" />
          <img className="avatar"
            src={user}
            alt="..."
          />
          <span className="title">Steve Jobs</span>
          <span className="description">Steve's visions have changed the way we live</span>
        </div>
        <Switch />
      </div>
    </div>
  );
}

export default Profile;
