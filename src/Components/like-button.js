import React from "react";

export default class LikeButton extends React.Component {
  render() {
    // JSX code to return and render a button
    return <button className="btn btn-primary">Like</button>;
    // VS javascript method below doe sthe same thing below as above
    // return React.createElement("button", { class: "btn btn-primary" }, "like");
  }
}
