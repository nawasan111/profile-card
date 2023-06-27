import React from "react";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "N",
      last: "W",
      myName: "Nawasan ",
      myLast: "Wisitsingkhon",
    };
  }
  getLoading() {
    setTimeout(() => {
      if (this.state.name.length < this.state.myName.length) {
        this.setState({
          name: this.state.name + this.state.myName[this.state.name.length],
        });
      }
      if (this.state.last.length < this.state.myLast.length) {
        this.setState({
          last: this.state.last + this.state.myLast[this.state.last.length],
        });
      }
    }, 100);
  }
  render() {
    this.getLoading();
    return (
      <>
        <h1 className="sat-font">
          <a href="https://github.com/Arikato111" target="_blank">
            {this.state.name}
            {this.state.last}
          </a>
        </h1>
        <div className="descript">
          นักศึกษาจากสาขาเทคโนฯ คณะวิทยาศาสตร์ ม.อุบลฯ ชอบพิมพ์ เขียน เล่นดนตรี
          อ่านหนังสือบ้าง บางครั้งก็เดิน เดินค่อนข้างบ่อย
          เวลาว่างบางครั้งก็นั่งเฉยๆ ชอบกินช็อกโกแลต เล่นแบตมินตัน
          ว่ายน้ำไม่เป็น
        </div>
      </>
    );
  }
}

export default Intro;
