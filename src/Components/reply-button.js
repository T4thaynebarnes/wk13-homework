import React from "react";

export default class ReplyButton extends React.Component {
  render() {
    // below is the JSX code version to rendera  button
    return <button className="btn btn-success">Reply</button>;
    // below is javaScript to render the replybutton
    // return React.createElement("button", { class: "btn btn-primary" }, "reply");
  }
}
