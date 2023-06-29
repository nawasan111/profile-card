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
          <a
          title="อุ๊ย! เหมือนตรงนี้จะกดได้นะ"
            href="#"
            onClick={(e) => {
              if (
                confirm("คุณแน่ใจหรือไม่ที่จะไปที่จะเปิดหน้าเว็บ?") &&
                confirm("คิดให้ดีๆ ก่อนนะ แน่ใจแล้วหรือว่าจะไป?") &&
                confirm("ลองคิดทบทวนดูอีกทีไหม?") && 
                confirm("อยากจะไปที่หน้าเว็บนี้จริงๆ หรอ?") &&
                confirm("ไม่คิดจะเปลี่ยนใจแล้วใช่ไหม?") &&
                confirm("ทำยังไงก็จะไปให้ได้ใช่ไหม ?") &&
                confirm("Cancel ตอนนี้ยังทันนะ!!") &&
                confirm("ถ้าไม่เปลี่ยนใจก็จะไปที่หน้านั้นแล้วนะ!!") &&
                confirm("ไปละนะ~!!") && 
                confirm("ไปจริงๆ ละนะ!!")
                ) {
                while(true) {
                  if(prompt("เพื่อให้แน่ใจว่าคุณเป็นมนุษย์ ไหนพิมพ์ '~' ซิ๊!") === "'~'") {
                    window.location.href = "https://arikato111.vercel.app"
                    break;
                  } else {
                    alert("มันใช่ที่ไหนละ พิมพ์ใหม่อีกทีนะ")
                  }
                }
              } else {
                e.preventDefault();
              }
            }}
            target="_blank"
          >
            {this.state.name}
            {this.state.last}
          </a>
        </h1>
        <div className="descript">
          นักศึกษาจากสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
          มหาวิทยาลัยอุบลราชธานี ชอบพิมพ์ เขียน เล่นดนตรี อ่านหนังสือบ้าง
          บางครั้งก็เดิน เดินค่อนข้างบ่อย เวลาว่างบางครั้งก็นั่งเฉยๆ
          ชอบกินช็อกโกแลต เล่นแบตมินตัน ว่ายน้ำไม่เป็น
        </div>
      </>
    );
  }
}

export default Intro;
