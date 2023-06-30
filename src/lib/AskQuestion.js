export function askQuestion(e) {
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
    while (true) {
      let inputPrompt = prompt(
        "เพื่อให้แน่ใจว่าคุณเป็นมนุษย์ ไหนพิมพ์ '~' ซิ๊!"
      );
      if (inputPrompt === null) {
        if (confirm("แน่ใจหรอว่าจะ Cancel?")) break;
      } else if (inputPrompt === "'~'") {
        window.location.href = "https://arikato111.vercel.app";
        break;
      } else {
        alert("มันใช่ที่ไหนละ พิมพ์ใหม่อีกทีนะ");
      }
    }
  } else {
    e.preventDefault();
  }
}
