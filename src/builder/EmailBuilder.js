// src/builder/emailBuilder.js

class EmailBuilder {
  constructor() {
    this.email = {
      from: "",
      to: "",
      subject: "",
      text: "",
      //   html: "",
    };
  }

  setFrom(from) {
    this.email.from = from;
    return this;
  }

  setTo(to) {
    this.email.to = to;
    return this;
  }

  setSubject(subject) {
    this.email.subject = subject;
    return this;
  }

  setText(text) {
    this.email.text = text;
    return this;
  }

  //   setHtml(html) {
  //     this.email.html = html;
  //     return this;
  //   }

  build() {
    if (!this.email.to || !this.email.subject || !this.email.text) {
      throw new Error("Missing required email fields");
    }
    return this.email;
  }
}

export default EmailBuilder;
