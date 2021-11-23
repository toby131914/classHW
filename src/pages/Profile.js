import './Profile.css';

import user from "../assets/img/user.png";

function Profile() {
  return (
    <div className="Profile">
      <div className="header">
        Profile
        <img className="avatar"
          src={user}
          alt="..."
        />
        <span className="title">Steve Jobs</span>
        <span className="description">Steve's visions have changed the way we live</span>
      </div>
    </div>
  );
}

export default Profile;
