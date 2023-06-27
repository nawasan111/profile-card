import React from "react";

class Avatar extends React.Component {
  render() {
    return (
      <div className="img-box">
        <img
          className="profile-img shadow-gray"
          width={300}
          src="/profile.jpeg"
          alt="profile image"
        />
      </div>
    );
  }
}

export default Avatar;
