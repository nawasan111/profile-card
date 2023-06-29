import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0, isVisible: true };
  }
  render() {
    return (
      <>
        {this.state.isVisible && (
          <div className="img-box">
            <img
              onClick={() => {
                if (this.state.clickCount === 0) {
                  alert("จะคลิกที่รูปภาพทำไม มันไม่มีอะไรหรอก");
                } else if (this.state.clickCount === 1) {
                  alert("ยังจะคลิกอีก! ก็บอกอยู่ว่ามันไม่มีอะไรยังไงเล่า");
                } else if (this.state.clickCount === 2) {
                  alert("ยัง ยัง ยังไม่หยุดอีก! ไม่ให้คลิกแล้ว");
                  this.setState({ isVisible: false });
                }
                this.setState({ clickCount: this.state.clickCount + 1 });
              }}
              className="profile-img shadow-gray"
              width={300}
              src="/profile.jpeg"
              alt="profile image"
            />
          </div>
        )}
      </>
    );
  }
}

export default Avatar;
