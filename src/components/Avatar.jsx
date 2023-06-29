import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="img-box">
        <img
          className="profile-img shadow-gray"
          width={300}
          src={
            "https://64.media.tumblr.com/3ac214c9a025a4dffe568496ca1d771a/c82696408e1e065d-66/s540x810/fd8ddf1639274662a49fc7e1b0d0e4637132f875.gifv"
          }
          alt="profile image"
        />
      </div>
    );
  }
}

export default Avatar;
