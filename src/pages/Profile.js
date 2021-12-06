import Switch from "../components/Switch";
import './Profile.css';

import user from "../assets/img/user.png";

function Profile() {
  return (
    <div className="header-bg">
      <div className="Profile flex-col">
        <div className="header flex-row">
          <div className="header-item">Settings</div>
          <div className="header-item-main">Profile</div>
          <div className="header-item">Logout</div>
        </div>
        <div className="user-info flex-col">
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
